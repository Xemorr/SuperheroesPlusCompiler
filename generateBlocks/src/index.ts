import {readFileSync, writeFileSync} from 'fs';
import JSON5 from 'json5';
import { compile } from './compiler.js';
import { preprocess } from './preprocessor.js';

var code = readFileSync('./properties.json', 'utf-8');
var preprocessed = preprocess(JSON5.parse(code));
writeFileSync("./preprocessed.json", JSON.stringify(preprocessed, null, 4))
var { enumCode, blocksCode, toolboxCode } = compile(preprocessed)

writeFileSync('./gen/enums.js', enumCode.code);
writeFileSync('./gen/plusultra.js', blocksCode.code);
writeFileSync('./gen/toolbox.js', toolboxCode.code);

writeFileSync('../src/blocks/enums.js', enumCode.code);
writeFileSync('../src/blocks/plusultra.js', blocksCode.code);
writeFileSync('../src/toolbox.js', toolboxCode.code);

writeFileSync('./gen/enums.json', enumCode.json);
writeFileSync('./gen/plusultra.json', blocksCode.json);
writeFileSync('./gen/toolbox.json', toolboxCode.json);

