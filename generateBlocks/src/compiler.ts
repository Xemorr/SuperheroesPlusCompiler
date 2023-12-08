import { Argument, dropdownOption, FieldBoolean, FieldEnum, FieldInput, FieldInteger, FieldNumber, InputValue } from "./blockly/Arguments.js";
import { Block, BlockType, categoryData } from "./blockly/Block.js";
import { Schema, Item, Type, PropertyMap } from "./PreprocessedSchema.js";
import { forEachEntry, indent, JSONStringify, objectMap, StringRecord } from "./utils.js";

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

class Compiler {

    enums: EnumMap = {}
    objectTypes: string[] = []

    compile(schema: Schema): compilationOutput {
        const blocks = this.generateBlocks(schema)

        const blocksCode = `import * as Blockly from 'blockly';
        export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray(${JSONStringify(blocks)})`

        return {
            enumCode: this.stringifyEnum(),
            blocksCode: this.stringifyBlocks(blocks),
            toolboxCode: "export const toolbox = " + JSONStringify(this.generateToolbox(blocks))
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
                colour: categoryData[cat],
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
        const block = new Block(type, name)
        this.compileProperties(block, item.properties)
        return block
    }

    generateTypeBlock(name: string, type: Type): Block {
        const block = new Block("types", name)
        this.compileProperties(block, type.properties)
        return block
    }

    compileProperties(block: Block, properties: PropertyMap | undefined) {
        if (!properties) return

        forEachEntry(properties, (name, property) => {
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

            const valueTypes = ["boolean", "integer", "number", "string"] as const
            if (!valueTypes.includes(type as any)) {
                block.isAllImplemented = false
                return
            }

            const arg: Argument = (type => {
                switch (type) {
                    case "boolean": return new FieldBoolean(name, property.default)
                    case "number": return new FieldNumber(name, property.default)
                    case "integer": return new FieldInteger(name, property.default)
                    case "string": return new FieldInput(name, property.default)
                }
            })(type as (typeof valueTypes)[number])

            block.addArg(name, arg)

        })
    }

}
