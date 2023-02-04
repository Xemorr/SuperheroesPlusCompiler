import {readFileSync, writeFileSync} from 'fs';
import JSON5 from 'json5';
import { compile } from './compiler.js';
import { preprocess } from './preprocessor.js';

var code = readFileSync('./properties.json', 'utf-8');
var preprocessed = preprocess(JSON5.parse(code));
writeFileSync("./preprocessed.json", JSON.stringify(preprocessed, null, 4))
var { blocksCode, toolboxCode } = compile(preprocessed)
writeFileSync('./plusultra.js', blocksCode);
writeFileSync('./toolbox.js', toolboxCode);
