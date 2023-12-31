import * as Blockly from 'blockly';

export const superheroesGenerator = new Blockly.Generator('Superheroes');

superheroesGenerator['workspaceToCode'] = function(workspace) {
    return workspace.getTopBlocks(true)
        .map(block => superheroesGenerator.blockToCode(block))
        .join("\r\n\r\n");
}

superheroesGenerator['blockToCode'] = function(block) {
    if (block == null) return '';
	const [block_type, _] = block.type.split("_");
    if (superheroesGenerator[block_type] !== undefined) return superheroesGenerator[block_type](block);
	if (superheroesGenerator[block_type] !== undefined) return superheroesGenerator[block.type](block);
    return blockToYaml(block);
}
superheroesGenerator['listItem'] = function(block) {
	const field = block.getFieldValue("VALUE")
	if (field == null) return blockToYaml(block)
	return field
}


// default yaml serialization
function blockToYaml(block) {
    const blockFields = getBlockFields(block);
    const [block_type, block_name] = block.type.split("_");
    if (block_type === "skills") {
        blockFields.unshift(["skill", block_name])
    }
    else if (block_type === "effects" || block_type === "conditions" || block_type == "triggers") {
        blockFields.unshift(["type", block_name])
    }
    let sectionName = getBlockSectionName(blockFields);
    
    const valueEntries = blockFields.map(keyval => `${keyval[0]}: ${keyval[1]}`);
    const objectEntries = [
		...getBlockValues(block).map(value => `${value[0]}: ${indent("\r\n" + superheroesGenerator.blockToCode(value[1]))}`),
		...blockStatementsToYaml(getBlockStatements(block))
    ];
    
    if (sectionName === undefined) return [...valueEntries, ...objectEntries].join("\r\n");
    return `${sectionName}: ` + indent("\r\n" + [...valueEntries, ...objectEntries].join("\r\n"));
}

function getBlockSectionName(blockFields) {
    const sectionName = blockFields.find(field => field[0] == "SECTION_NAME");
    if (sectionName === undefined) return undefined;
    const sectionNameIndex = blockFields.indexOf(sectionName);
    blockFields.splice(sectionNameIndex, 1);
    return sectionName[1];
}

function blockStatementsToYaml(statements) {
    return statements.map(statement => {
            let [statementName, statementList] = statement
			const isList = statementName.endsWith("_array")
			statementName = statementName.substring(0, statementName.length - (isList? "_array".length : 0))
			
			const statementListString = statementList
				.map(block => superheroesGenerator.blockToCode(block))
				.map(block => indent("\r\n" + block))
				.map((block, index) => {
					if (isList) {
						block = block.trimStart()
						return `\r\n- ${block}`
					} else {
						const key = statementName + index
						return `\r\n${key}: ${block}`
					}
				})
				.join("")
			
            return `${statementName}: ${indent(statementListString)}`
        })
}

function getBlockFields(block) {
    return block.inputList
        .flatMap(input => input.fieldRow)
        .filter(field => !isFieldLabel(field))
        .map(field => field.name)
        .map(fieldName => [fieldName, block.getFieldValue(fieldName)]);
}

function getBlockValues(block) {
    return block.inputList
        .filter(input => getInputType(input) === 'value')
        .map(input => [input.name, input.connection.targetBlock()])
        .filter(statement => statement[1] !== null);
}

function getBlockStatements(block) {
    return block.inputList
        .filter(input => getInputType(input) === 'statement')
        .map(input => [input.name, [input.connection.targetBlock()]])
        .filter(statement => statement[1][0] !== null)
        .map(statement => {
            let [_, statementList] = statement;
            let currentBlock = statementList[0];
            if (currentBlock == undefined) return;
            while ((currentBlock = currentBlock.getNextBlock()) !== null) {
                statementList.push(currentBlock);
            }
            return statement;
        });
}

function getInputType(input) {
    const type = input.type;
    if (type == 1) return 'value';
    if (type == 3) return 'statement';
    if (type == 5) return 'dummy';
}

function isFieldLabel(field) {
    return field instanceof Blockly.FieldLabel
}

function indent(str, indent = 2, character = " ") {
    return str.replace(/\r\n/g, "\r\n" + character.repeat(indent));
}
