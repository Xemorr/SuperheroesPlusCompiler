import {readFileSync, writeFileSync} from 'fs';
import JSON5 from 'json5';
import { compile } from './compiler.js';
import { preprocess } from './preprocessor.js';

var code = readFileSync('./properties.json', 'utf-8');
var preprocessed = preprocess(JSON5.parse(code));
writeFileSync("./preprocessed.json", JSON.stringify(preprocessed, null, 4))
var { enumCode, blocksCode, toolboxCode } = compile(preprocessed)

writeFileSync('./gen/enums.js', enumCode);
writeFileSync('./gen/plusultra.js', blocksCode);
writeFileSync('./gen/toolbox.js', toolboxCode);

writeFileSync('../src/blocks/enums.js', enumCode);
writeFileSync('../src/blocks/plusultra.js', blocksCode);
writeFileSync('../src/toolbox.js', toolboxCode);
