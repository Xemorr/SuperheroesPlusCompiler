import * as Blockly from 'blockly';

export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([{
  "type": "object",
  "message0": "Hero Name:%1",
  "args0": [
    {
      "type": "field_input",
      "name": "HERO_NAME",
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
  "message3": "%1",
  "args3": [
    {
        "type": "input_statement",
        "name": "MEMBERS"
    }
  ],
  "output": null,
  "colour": 230,
  "nextStatement": null
},
{
  "type": "member",
  "message0": "%1 %2 %3",
  "args0": [
    {
      "type": "field_input",
      "name": "MEMBER_NAME",
      "text": ""
    },
    {
      "type": "field_label",
      "name": "COLON",
      "text": ":"
    },
    {
      "type": "input_value",
      "name": "MEMBER_VALUE"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
}]);