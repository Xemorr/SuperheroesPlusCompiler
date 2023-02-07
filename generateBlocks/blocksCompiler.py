import json5 as json

file_contents = ""
with open("properties.json") as properties:
    file_contents = properties.read()

parsed_json = json.loads(file_contents)

blocks = []

for name, skill in parsed_json["skills"].items():
    blocks.append(
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
        }
    )

with open("output.json") as output:
    

        