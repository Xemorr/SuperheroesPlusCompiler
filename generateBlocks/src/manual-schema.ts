export {hero, custom}

const hero = {
    "type": "hero_hero",
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
  message2: "conditions: %1",
  args2: [
    {
      type: "input_statement",
      name: "conditions",
      check: "conditions"
    }
  ],
  message3: "effects: %1", 
  args3: [
      {
          type: "input_statement", 
          name: "effects", 
          check: "effects"
      }
  ]
}