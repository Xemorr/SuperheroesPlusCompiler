import { Argument, dropdownOption, FieldBoolean, FieldDropdown, FieldEnum, FieldInput, FieldInteger, FieldNumber, InputStatement, InputValue } from "./blockly/Arguments.js";
import { Block, categoryData, DefaultBlock, JSONBlock, ListTypeBlock } from "./blockly/Block.js";
import { Schema, Item, Type, PropertyMap, Property, PropertyType, PropertyTypes } from "./PreprocessedSchema.js";
import { forEachEntry, forEachValue, JSONStringify, objectMap, StringRecord, toArray } from "./utils.js";
import { hero, boss, item, custom } from "./manual-schema.js"

type EnumMap = StringRecord<dropdownOption[]>

type outputs = {
	json: string
	code: string
}
type compilationOutput = {
    enumCode: outputs
    blocksCode: outputs
    toolboxCode: outputs
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
    recordTypes: StringRecord<Type> = {}
    listTypes: StringRecord<Block> = {}

    compile(schema: Schema): compilationOutput {
        const blocks = this.generateBlocks(schema)
        blocks.startpoint = [new JSONBlock("startpoint", "hero", hero), new JSONBlock("startpoint", "boss", boss), new JSONBlock("startpoint", "item", item)]
        blocks.skills.unshift(new JSONBlock("skills", "CUSTOM", custom))
        blocks.listtypes = Object.values(this.listTypes);

        const toolbox = this.generateToolbox(blocks)
        return {
            enumCode: this.stringifyEnum(),
            blocksCode: this.stringifyBlocks(blocks),
            toolboxCode: this.stringifyToolbox(toolbox)
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
        return {
			json: JSONStringify(compactedEnum, undefined, true),
			code: "export default " + JSONStringify(compactedEnum),
		}
    }

    stringifyBlocks(blocks: BlockedSchema) {
        const flattened = Object.values(blocks).flat()
		return {
			json: JSONStringify(flattened, undefined, true),
			code: 
				"import * as Blockly from 'blockly'\r\n" +
				"import enums from './enums.js'\r\n" +
				"\r\n" +
				"export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray(" +
				JSONStringify(flattened) + ")\r\n",
		}
    }
	
	stringifyToolbox(toolbox: any) {
		return {
			json: JSONStringify(toolbox, undefined, true),
			code: "export const toolbox = " + JSONStringify(toolbox),
		}
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
				
		forEachValue(items.triggers, x => {
			if (!x.properties) x.properties = {}
			x.properties['conditions'] = {
				description: "The conditions to check",
				required: false,
				type: "ConditionList",
				default: {}
			}
		})

        forEachEntry(types, (name, type) => {
            if (type.type === "object") {
                this.objectTypes.push(name)
				return
            }
            if (type.type === "record") {
                this.recordTypes[name] = type
                delete types[name]
                return
            }
            if (type.enum) {
				this.enums[name] = type.enum.map(v => [v, v])
				delete types[name]
			}
        })
		// for ease of compiling, range is treated like an object
		{
			this.objectTypes.push("range")
			delete types["range"]
		}
        forEachEntry(types, (name, type) => {
            if (type.type === "string") console.log(name + " has no enum and is a strings")
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
		
		const blockedSchema = { ...itemBlocks, types: typeBlocks }
		
		this.handleSpecialItems(schema, blockedSchema)

        return blockedSchema
    }

    // for adding special items
    handleSpecialItems(schema: Schema, blockedSchema: BlockedSchema): void {
        /* RangeData */ {
			const block = new DefaultBlock("types", "range", false)
			block.addCustomArg(`range: %1 - %2`, 
				new FieldNumber(`MIN`, Number.NEGATIVE_INFINITY),
				new FieldNumber(`MAX`, Number.POSITIVE_INFINITY)
			)
			blockedSchema.types.push(block)
        }
    }

    generateItemBlock(type: keyof Schema, name: string, item: Item): Block | undefined {
        if (!item.available) return
        const block = new DefaultBlock(type, name)
        if ("supportedModes" in item) {
            const supportedModes = (item as any).supportedModes as string[]
            var dropdown = new FieldDropdown("mode", "SELF");
            // This is done because setOptions takes in an array of pairs where the left element is the language word
            // and the right is the compiled phrase, we only support english so we duplicate the language-neutral word.
            dropdown.setOptions(supportedModes.filter((str: string) => str !== "ALL").map((str: string) => [str, str])); 
            block.addArg("mode", dropdown);
        }
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
			block.unimplemented.push(`${name}: multiple types\r\n`)
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
		
        if (type in this.recordTypes) {
            property.recordItem = this.recordTypes[type].recordItem
            property.type = "record"
        }
        if (property.type === "record") {
            this.compileRecordProperty(block, name, property)
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
        
		block.unimplemented.push(`${name}: ?`)
    }

    compileRecordProperty(block: Block, name: string, property: Property) {
        const recordItem = property.recordItem
        if (recordItem == undefined) {
            console.error("I fucked up docs")
            return
        }        
        
        if (recordItem === "conditions" || recordItem === "effects") {
			block.addArg(name, new InputStatement(name, recordItem))
			return
		}
		block.addArg(name, new InputStatement(name, "listtypes_"+recordItem))
        this.compileListTypeBlock(recordItem)
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
            block.unimplemented.push(`${name}: array item is a Property object`)
            return
        }
        itemType = toArray(itemType)

        const itemChecks = itemType.map(x => "listtypes_" + x)

        block.addArg(name, new InputStatement(name+"_array", itemChecks))

        itemType.forEach(this.compileListTypeBlock.bind(this))
    }

    compileListTypeBlock(type: PropertyTypes) {
        if (type in this.listTypes) return

        const block = new ListTypeBlock(type)
        const property: Property = {
            description: `List item for ${type}`,
            required: true,
            type: type
        }
        this.compileProperty(block, type, property)
        this.listTypes[type] = block
    }

}
