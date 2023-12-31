import { Argument, dropdownOption, FieldBoolean, FieldEnum, FieldInput, FieldInteger, FieldNumber, InputStatement, InputValue } from "./blockly/Arguments.js";
import { Block, categoryData, DefaultBlock, JSONBlock, ListItemBlock } from "./blockly/Block.js";
import { Schema, Item, Type, PropertyMap, Property, PropertyType, PropertyTypes } from "./PreprocessedSchema.js";
import { forEachEntry, JSONStringify, objectMap, StringRecord, toArray } from "./utils.js";
import { hero, custom } from "./manual-schema.js"

type EnumMap = StringRecord<dropdownOption[]>

type compilationOutput = {
    enumCode: string
    blocksCode: string
    toolboxCode: string
}

type BlockedSchema = {
    [K in keyof Schema]: Block[]
}

export function compile(schema: Schema): compilationOutput {
    return new Compiler().compile(schema)
}

const valueTypes = ["boolean", "integer", "number", "string"] as const
type valueTypes = (typeof valueTypes)[number]

class Compiler {

    enums: EnumMap = {}
    objectTypes: string[] = []
    listItems: StringRecord<Block> = {}

    compile(schema: Schema): compilationOutput {
        const blocks = this.generateBlocks(schema)
        blocks.hero = [new JSONBlock("hero", "hero", hero)]
        blocks.skills.unshift(new JSONBlock("skills", "CUSTOM", custom))
        blocks.listItem = Object.values(this.listItems);

        var toolbox = this.generateToolbox(blocks)
        return {
            enumCode: this.stringifyEnum(),
            blocksCode: this.stringifyBlocks(blocks),
            toolboxCode: "export const toolbox = " + JSONStringify(toolbox)
        }
    }

    stringifyEnum() {
        const compactedEnum = objectMap(this.enums, (_, options) => {
            return options.map(option => ({
                toJSON() {
                    const label = JSON.stringify(option[0])
                    const name = JSON.stringify(option[1])
                    return `[${label}, ${name}]`
                }
            }))
        })
        return "export default " + JSONStringify(compactedEnum)
    }

    stringifyBlocks(blocks: BlockedSchema) {
        const flattened = Object.values(blocks).flat()
        return "import * as Blockly from 'blockly'\r\n" +
        "import enums from './enums.js'\r\n" +
        "\r\n" +
        "export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray(" +
        JSONStringify(flattened) + ")\r\n"
    }

    generateToolbox(blocks: BlockedSchema) {
        const contents = Object.values(objectMap(blocks, (cat, list) => {
            const contents = list
                .map(block => ({
                    kind: "block",
                    type: block.type
                }))
            return {
                kind: "category",
                name: cat,
                colour: categoryData[cat].colour,
                contents
            }
        }))

        return {
            kind: "categoryToolbox",
            contents
        }
    }

    generateBlocks(schema: Schema): BlockedSchema {

        this.enums["booleans"] = [
            ["true", "true"],
            ["false", "false"]
        ]

        const { types, ...items } = schema

        forEachEntry(types, (name, type) => {
            if (type.type === "object") {
                this.objectTypes.push(name)
            }
            if (!type.enum) return
            this.enums[name] = type.enum.map(v => [v, v])
            delete types[name]
        })
        forEachEntry(types, (name, type) => {
            if (type.type === "string") console.log(name + "has no enum and is a strings")
        })

        const typeBlocks = Object.values(objectMap(types, this.generateTypeBlock.bind(this)))

        const itemBlocks = objectMap(items, (type, value) => {
            const blocks = objectMap(value, (key, val) => this.generateItemBlock(type, key, val))
            const blocksArray: Block[] = []
            for (const block of Object.values(blocks)) {
                if (block) blocksArray.push(block)
            }
            return blocksArray
        })

        return { ...itemBlocks, types: typeBlocks }
    }

    // for adding special items
    handleSpecialItems(schema: Schema): Block[] {

        /* RangeData */ {
            // delete schema.types["range"]
            // add to blocks
        }
        return []
    }

    generateItemBlock(type: keyof Schema, name: string, item: Item): Block | undefined {
        if (!item.available) return
        const block = new DefaultBlock(type, name)
        this.compileProperties(block, item.properties)
        return block
    }

    generateTypeBlock(name: string, type: Type): Block {
        const block = new DefaultBlock("types", name)
        this.compileProperties(block, type.properties)
        return block
    }

    compileProperties(block: Block, properties: PropertyMap | undefined) {
        if (!properties) return

        forEachEntry(properties, (name, property) => this.compileProperty(block, name, property))
    }

    compileProperty(block: Block, name: string, property: Property): void {
        if (Array.isArray(property.type)) {
            block.isAllImplemented = false
            return
        }
        const type = property.type

        if (type in this.enums) {
            block.addArg(name, new FieldEnum(name, property.default, type))
            return
        }
        if (this.objectTypes.includes(type)) {
            block.addArg(name, new InputValue(name, [type]))
            return
        }

        if (type === "array") {
            this.compileArrayProperty(block, name, property)
            return
        }

        if (valueTypes.includes(type as any)) {
            const arg = this.createValueField(type as valueTypes, name, property.default)
            block.addArg(name, arg)
            return
        }

        block.isAllImplemented = false
    }

    createValueField(type: valueTypes, name: string, _default: any) {
        switch (type) {
            case "boolean": return new FieldBoolean(name, _default)
            case "number": return new FieldNumber(name, _default)
            case "integer": return new FieldInteger(name, _default)
            case "string": return new FieldInput(name, _default)
        }
    }

    compileArrayProperty(block: Block, name: string, property: Property) {
        let itemType = property.items;
        if (itemType == undefined) {
            console.error("I fucked up docs")
            return
        }
        if (typeof itemType === "object" && !Array.isArray(itemType)) {
            block.isAllImplemented = false
            return
        }
        itemType = toArray(itemType)

        const itemChecks = itemType.map(x => "listItem_" + x)

        block.addArg(name, new InputStatement(name+"_array", itemChecks))

        itemType.forEach(this.compileListItemBlock.bind(this))
    }

    compileListItemBlock(type: PropertyTypes) {
        if (type in this.listItems) return

        const block = new ListItemBlock(type)
        const property: Property = {
            description: `List item for ${type}`,
            required: true,
            type: type
        }
        this.compileProperty(block, type, property)
        this.listItems[type] = block
    }

}
