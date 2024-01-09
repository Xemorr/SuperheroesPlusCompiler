@echo off

echo d | xcopy /v/y/q old4 old5
echo d | xcopy /v/y/q old3 old4
echo d | xcopy /v/y/q old2 old3
echo d | xcopy /v/y/q old old2
echo d | xcopy /v/y/q . old

cd .. && gen && cd generateBlocks/gen && compareFiles


