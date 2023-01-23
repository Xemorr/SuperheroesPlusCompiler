import * as Blockly from 'blockly';

export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
{
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
},
{
  "type": "skill",
  "message0": "Skill %1 skill: %2 %3 trigger: %4 effects: %5",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "skill",
      "options": [
        [
          "CUSTOM",
          "CUSTOM"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "trigger",
      "check": "trigger"
    },
    {
      "type": "input_statement",
      "name": "effects",
      "check": "effect"
    }
  ],
  "previousStatement": "skill",
  "nextStatement": "skill",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "effect",
  "message0": "Effect %1 type: %2 %3 mode: %4 %5 radius: %6 %7 conditions: %8 effects: %9",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "type",
      "options": [
        [
          "AOE",
          "AOE"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "mode",
      "options": [
        [
          "ALL",
          "ALL"
        ],
        [
          "SELF",
          "SELF"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_number",
      "name": "radius",
      "value": 5,
      "precision": 1
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "conditions",
      "check": "condition"
    },
    {
      "type": "input_statement",
      "name": "effects",
      "check": "effect"
    }
  ],
  "previousStatement": "effect",
  "nextStatement": "effect",
  "colour": 295,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "trigger",
  "message0": "Trigger %1 type: %2 %3 period: %4 %5 conditions: %6",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "type",
      "options": [
        [
          "LOOP",
          "LOOP"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_number",
      "name": "period",
      "value": 1,
      "min": 0,
      "precision": 0.05
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "conditions",
      "check": "condition"
    }
  ],
  "output": "trigger",
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "condition",
  "message0": "Condition %1 type: %2 %3 mode: %4 %5 slot: %6 %7 conditions: %8 else: %9",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "type",
      "options": [
        [
          "ITEMWRAPPER",
          "ITEMWRAPPER"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "mode",
      "options": [
        [
          "ALL",
          "ALL"
        ],
        [
          "SELF",
          "SELF"
        ],
        [
          "OTHER",
          "OTHER"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "slot",
      "options": [
        [
          "HAND",
          "HAND"
        ],
        [
          "OFF_HAND",
          "OFF_HAND"
        ],
        [
          "FEET",
          "FEET"
        ],
        [
          "LEGS",
          "LEGS"
        ],
        [
          "CHEST",
          "CHEST"
        ],
        [
          "HEAD",
          "HEAD"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "conditions",
      "check": "condition"
    },
    {
      "type": "input_statement",
      "name": "else",
      "check": "effect"
    }
  ],
  "previousStatement": "condition",
  "nextStatement": "condition",
  "colour": 35,
  "tooltip": "",
  "helpUrl": ""
}]);
