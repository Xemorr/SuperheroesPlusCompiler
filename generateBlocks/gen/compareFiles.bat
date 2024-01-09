@echo off

node compare.cjs enums.json old/enums.json enums.diff.json
node compare.cjs plusultra.json old/plusultra.json plusultra.diff.json
node compare.cjs toolbox.json old/toolbox.json toolbox.diff.json
