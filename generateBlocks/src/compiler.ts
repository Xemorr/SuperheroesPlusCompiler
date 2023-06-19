import { Block } from "./blockly/BlocklyObjects.js";
import { Schema, Element, Type } from "./PreprocessedSchema.js";
import { objectKeys } from "./utils.js";

type compilationOutput = {
    blocksCode: string
    toolboxCode: string
}
export function compile(schema: Schema): compilationOutput {
    const blocks: Block[] = []
    handleSpecialItems(schema, blocks)
    blocks.push(...generateBlocks(schema))

    return {
        blocksCode: "",
        toolboxCode: ""
    }
}

// for adding special items
function handleSpecialItems(schema: Schema, blocks: Block[]) {
    /* RangeData */ {
        // delete schema.types["range"]
        // add to blocks
    }
}

function generateBlocks(schema: Schema): Block[] {
    return (objectKeys(schema)
        .flatMap(key => {
            return objectKeys(schema[key])
                .map(itemKey => ({key: itemKey, value: schema[key][itemKey]}))
        })
        .map(entry => {
            const name = entry.key
            const element = entry.value
            if ('elementType' in element) {
                if (!element.available) return undefined
                return generateElementBlock(name, element)
            } else {
                return generateTypeBlock(name, element)
            }
        })
        .filter(block => block !== undefined)) as Block[]
}

function generateElementBlock(name: string, element: Element): Block {
    const block = new Block(name)
    objectKeys(element.properties)
        .forEach(propertyName => {
            const property = element.properties[propertyName]
        })
    return block
}

function generateTypeBlock(name: string, type: Type): Block {
    return new Block(name)
}

