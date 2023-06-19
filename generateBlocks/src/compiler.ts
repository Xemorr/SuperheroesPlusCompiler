import { Block } from "./blockly/blockly_objects.js";
import { Schema, Element, Type } from "./preprocessed.js";
import { objectKeys } from "./utils.js";
import * as Preprocessed from "./preprocessed.js";

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

export function compile(preprocessed: Preprocessed.Schema): any /* compilationOutput */ {
    var jsonArray : Array<Object> = [];
    jsonArray.push({
        "type": "hero",
        "message0": "Hero Name:%1",
        "args0": [
          {
            "type": "field_input",
            "name": "SECTION_NAME",
            "text": "Exampleman"
          },
        ],
        "message1": "Coloured Name:%1",
        "args1": [
          {
              "type": "field_input",
              "name": "colouredName",
              "text": "<red>Exampleman"
          }
        ],
        "message2": "Description:%1",
        "args2": [
          {
              "type": "field_input",
              "name": "description",
              "text": "A description fit for an example"
          }
        ],
        "message3": "skills: %1",
        "args3": [
          {
              "type": "input_statement",
              "name": "skills",
              "check": "skill"
          }
        ],
        "colour": 0
    });
    
}

function addSkills(jsonArray : Array<Object>, preprocessed : Preprocessed.Schema) {
    var skills = [];
    for (let skillName in Object.keys(preprocessed.skills)) {
        var skill : any = 
        {
            "type": "skill",
            "message0": skillName,
            "args0": [
                {
                    "type": "input_dummy"
                },
            ]
        };
        let skillElement : Preprocessed.Element = preprocessed.skills[skillName]
        for (let propertyName in Object.keys(skillElement.properties)) {
            skillElement.properties[propertyName].
        }
        skill.addParameter("message")
    }
>>>>>>> Stashed changes
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

