import * as Blockly from 'blockly';

const typeFieldKey = {
	"triggers": "type",
	"conditions": "type",
	"effects": "type",
	"skills": "skill",
	"damagemodifiers": "type",
	"rewards": "type",
	"distributions": "type",
}

export const superheroesGenerator = new Blockly.Generator('Superheroes');

/**
 * @param {Blockly.Workspace | undefined} workspace 
 * @returns {string}
 */
superheroesGenerator.workspaceToCode = function(workspace) {
    if (!workspace) return ""
    return workspace.getTopBlocks(true)
        .map(block => superheroesGenerator.blockToCode(block))
        .join("\r\n\r\n");
}

/**
 * @param {Blockly.Block | null} block 
 */
superheroesGenerator.blockToCode = function(block) {
    if (block == null) return '';
	if (superheroesGenerator[block.type] !== undefined) return superheroesGenerator[block.type](block);
	const [block_category, _] = block.type.split("_");
    if (superheroesGenerator[block_category] !== undefined) return superheroesGenerator[block_category](block);
    return blockToYaml(block);
}

superheroesGenerator['listtypes'] = function(block) {
	const value = getValueOverride(block)
    if (value == null) return "~"
    return value
}
superheroesGenerator['types_range'] = function(block) {
	const min = block.getFieldValue("MIN")
	const max = block.getFieldValue("MAX")
	return `${min} - ${max}`
}

/**
 * @param {Blockly.Block} block
 * @param {string} name
 */
function getInputBlock(block, name) {
	return block.getInput(name)?.connection?.targetBlock()
}

/**
 * @param {Blockly.Block} block
 * @returns {string | null}
 */
function getValueOverride(block) {
    const field = block.getFieldValue("VALUE")
	if (field != null) return field
	
	const input = getInputBlock(block, "VALUE")
	if (input == null) return null
	
	const chainedBlocks = getAllChainedBlocks(input)
	if (chainedBlocks.length == 1) return /** @type {string} */ (superheroesGenerator.blockToCode(input))
	
	return chainedBlocks
		.map(block => /** @type {string} */ (superheroesGenerator.blockToCode(input)))
		.join("")
}

/**
 * default yaml serialization
 * @param {Blockly.Block} block
 */
function blockToYaml(block) {
    const blockFields = getBlockFields(block)
    const sectionName = getBlockSectionName(blockFields)

    const valueOverride = getValueOverride(block)
    if (valueOverride !== null) {
        if (sectionName === undefined) {
            return valueOverride
        } else {
            return `\r\n${sectionName}: ${valueOverride}`
        }
    }
    
    const fieldEntries = blockFieldsToYaml(blockFields)
    const valueEntries = blockValuesToYaml(getBlockValues(block))
    const statementEntries = blockStatementsToYaml(getBlockStatements(block))
    
	const entriesString = [...fieldEntries, ...valueEntries, ...statementEntries].join("\r\n")
    if (sectionName === undefined) {
        return "\r\n" + entriesString
    } else {
        return `\r\n${sectionName}: ` + indent("\r\n" + entriesString)
    }
}

/**
 * @param {{key: string, value: any}[]} blockFields
 */
function getBlockSectionName(blockFields) {
    const sectionNameIndex = blockFields.findIndex(field => field.key == "SECTION_NAME");
    if (sectionNameIndex === -1) return undefined;
	const sectionName = blockFields[sectionNameIndex].value
    blockFields.splice(sectionNameIndex, 1);
    return sectionName;
}

/**
 * @param {{ key: string, value: any }[]} fields
 */
function blockFieldsToYaml(fields) {
    return fields.map(({key, value}) => {
        return `${key}: ${value}`
    })
}

/**
 * @param {{ key: string, value: Blockly.Block }[]} values
 */
function blockValuesToYaml(values) {
    return values.map(({key, value}) => {
        const valueStr = indent(superheroesGenerator.blockToCode(value))
        return `${key}: ${valueStr}`
    })
}

/**
 * @param {{ key: string, value: Blockly.Block[] }[]} statements
 */
function blockStatementsToYaml(statements) {
    return statements.map(statement => {
            let statementKey = statement.key
            const blockList = statement.value
			const isList = statementKey.endsWith("_array")
			statementKey = statementKey.substring(0, statementKey.length - (isList? "_array".length : 0))
			
			let blockListString = blockList
				.map(block => superheroesGenerator.blockToCode(block))
				.map(block => indent(block))
				.map((block, index) => {
					if (isList) {
						block = block.trimStart()
						return `\r\n- ${block}`
					} else {
						const key = statementKey + index
						return `\r\n${key}: ${block}`
					}
				})
				.join("")
            blockListString = indent(blockListString)
			
            return `${statementKey}: ${blockListString}`
        })
}

/**
 * @param {Blockly.Block} block 
 * @returns {{key: string, value: any}[]}
 */
function getBlockFields(block) {
    const blockFields = block.inputList
        .flatMap(input => input.fieldRow)
        .filter(field => !isFieldLabel(field))
        .map(field => field.name)
        .filter(notUndefined)
        .map(fieldName => {
			let value = block.getFieldValue(fieldName)
			if (typeof value === "string") {
				if (value.length === 0) value =  undefined
			}
			return definedEntry(fieldName, value)
		})
		.filter(notUndefined)
    
    // adds in the type field
    const [block_category, block_name] = block.type.split("_");
	if (block_category in typeFieldKey) {
		blockFields.unshift(entry(typeFieldKey[block_category], block_name))
	}

    return blockFields
}

/**
 * @template {any} T
 * @param {T | undefined} x
 * @returns {x is T}
 */
function notUndefined(x) {
    return x !== undefined
}

/**
 * @template K, V
 * @param {NonNullable<K>} key
 * @param {NonNullable<V>} value
 */
function entry(key, value) {
    return {key, value}
}

/**
 * @template K, V
 * @param {K} key
 * @param {V} value
 */
function definedEntry(key, value) {
    if (key == undefined) return undefined
    if (value == undefined) return undefined
    return entry(key, value)
}

/**
 * @param {Blockly.Block} block
 * @returns {{ key: string, value: Blockly.Block }[]}
 */
function getBlockValues(block) {
    return block.inputList
        .filter(input => getInputType(input) === 'value')
        .map(input => definedEntry(input.name, input.connection?.targetBlock()))
        .filter(notUndefined);
}

/**
 * @param {Blockly.Block} block
 * @returns {{ key: string, value: Blockly.Block[] }[]}
 */
function getBlockStatements(block) {
    return block.inputList
        .filter(input => getInputType(input) === 'statement')
        .map(input => definedEntry(input.name, input.connection?.targetBlock()))
        .filter(notUndefined)
        .map(statement => {
            const {key, value} = statement;
            return entry(key, getAllChainedBlocks(value));
        });
}
/**
 * @param {Blockly.Block} currentBlock
 * @returns {Blockly.Block[]}
*/
function getAllChainedBlocks(currentBlock) {
	if (currentBlock == null) return []
	const blockList = [currentBlock]
	while ((currentBlock = currentBlock?.getNextBlock()) !== null) {
		blockList.push(currentBlock);
	}
	return blockList;
}

/**
 * @param {Blockly.Input} input
 */
function getInputType(input) {
    const type = input.type;
    if (type == 1) return 'value';
    if (type == 3) return 'statement';
    if (type == 5) return 'dummy';
}

/**
 * @template {Blockly.Field} T
 * @param {T} field 
 * @returns {boolean}
 */
function isFieldLabel(field) {
    return field instanceof Blockly.FieldLabel
}

// [string, number] type is from the quirk of generator's blockToCode
/**
 * @param {string | [string, number]} str
 */
function indent(str, indent = 2, character = " ") {
    if (typeof str !== "string") str = str[0]
    return str.replace(/\r\n/g, "\r\n" + character.repeat(indent))
}
