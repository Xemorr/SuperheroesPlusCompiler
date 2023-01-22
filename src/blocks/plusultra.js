import * as Blockly from 'blockly';

export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
{
  "type": "hero",
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
  "message3": "skills: %1",
  "args3": [
    {
        "type": "input_statement",
        "name": "skills",
        "check": "skill"
    }
  ],
  "colour": 230
},
{
  "type": "skill_custom",
  "message0": "CUSTOM skill %1 trigger: %2 effects: %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "NAME",
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
  "type": "effect_aoe",
  "message0": "AOE effect %1 mode: %2 %3 radius:  %4 %5 conditions: %6 effects: %7",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": [
        [
          "ALL",
          "all"
        ],
        [
          "SELF",
          "self"
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
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "trigger_loop",
  "message0": "LOOP trigger %1 period: %2 %3 conditions: %4",
  "args0": [
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
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "condition_itemwrapper",
  "message0": "ITEMWRAPPER condition %1 mode: %2 %3 slot: %4 %5 conditions: %6 else: %7",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "mode",
      "options": [
        [
          "ALL",
          "hand"
        ],
        [
          "SELF",
          "off_hand"
        ],
        [
          "OTHER",
          "feet"
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
          "hand"
        ],
        [
          "OFF_HAND",
          "off_hand"
        ],
        [
          "FEET",
          "feet"
        ],
        [
          "LEGS",
          "legs"
        ],
        [
          "CHEST",
          "chest"
        ],
        [
          "HEAD",
          "head"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "conditions:",
      "check": "condition"
    },
    {
      "type": "input_statement",
      "name": "else:",
      "check": "effect"
    }
  ],
  "previousStatement": "condition",
  "nextStatement": "condition",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}]);
