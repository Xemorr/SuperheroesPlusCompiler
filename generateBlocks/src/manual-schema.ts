export {hero, boss, item, custom}

const hero = {
    "type": "startpoint_hero",
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
          "check": "skills"
      }
    ],
    "colour": 0
}

const boss = {
  "type": "startpoint_boss",
  "message0": "Boss Name:%1",
  "args0": [
    {
      "type": "field_input",
      "name": "SECTION_NAME",
      "text": "Exampleboss"
    },
  ],
  "message1": "Coloured Name:%1",
  "args1": [
    {
        "type": "field_input",
        "name": "colouredName",
        "text": "<red>Exampleboss"
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
  "message3": "damage modifier: %1",
  "args3": [
    {
        "type": "input_value",
        "name": "damagemodifier",
        "check": "damagemodifiers"
    }
  ],
  "message4": "entity: %1",
  "args4": [
    {
        "type": "input_value",
        "name": "entity",
        "types": ["EntityData"]
    }
  ],
  "message5": "skills: %1",
  "args5": [
    {
        "type": "input_statement",
        "name": "skills",
        "check": "skills"
    }
  ],
  "message6": "reward: %1",
  "args6": [
    {
        "type": "input_value",
        "name": "reward",
        "types": ["rewards"]
    }
  ],
  "message7": "bossbar: %1",
  "args7": [
    {
        "type": "input_value",
        "name": "bossbar",
        "types": ["BossBarData"]
    }
  ],
  "colour": 0
}

const item = {
  "type": "startpoint_item",
  "message0": "Item Name:%1",
  "args0": [
    {
      "type": "field_input",
      "name": "SECTION_NAME",
      "text": "Exampleitem"
    },
  ],
  "message1": "item: %1",
  "args1": [
    {
        "type": "input_value",
        "name": "item",
        "types": ["ItemStackData"],
    }
  ],
  "message2": "distribution: %1",
  "args2": [
    {
        "type": "input_statement",
        "name": "distribution",
        "check": "distributions",
    }
  ],
  "message3": "slots (WIP, NOT WORKING YET): %1",
  "args3": [
    {
        "type": "input_value",
        "name": "slots",
        "check": "skills"
    }
  ],
  "message4": "skills: %1",
  "args4": [
    {
        "type": "input_statement",
        "name": "skills",
        "check": "skills"
    }
  ],
  "colour": 0
}

const custom = {
  type: "skills_CUSTOM", 
  colour: 230, 
  previousStatement: "skills", 
  nextStatement: "skills", 
  isAllImplemented: true, 
  message0: "CUSTOM", 
  message1: "trigger: %1", 
  args1: [
      {
          type: "input_value", 
          name: "trigger", 
          check: "triggers"
      }
  ], 
  // message2: "conditions: %1",
  // args2: [
    // {
      // type: "input_statement",
      // name: "conditions",
      // check: "conditions"
    // }
  // ],
  message2: "effects: %1", 
  args2: [
      {
          type: "input_statement", 
          name: "effects", 
          check: "effects"
      }
  ]
}