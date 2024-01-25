import * as Blockly from 'blockly'
import enums from './enums.js'

export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
    {
        type: "triggers_DAMAGEDENTITY", 
        colour: 120, 
        output: "triggers", 
        message0: "DAMAGEDENTITY", 
        message1: "conditions: %1", 
        args1: [
            {
                type: "input_statement", 
                name: "conditions", 
                check: "conditions"
            }
        ]
    }, 
    {
        type: "triggers_DAMAGEDBYENTITY", 
        colour: 120, 
        output: "triggers", 
        message0: "DAMAGEDBYENTITY", 
        message1: "conditions: %1", 
        args1: [
            {
                type: "input_statement", 
                name: "conditions", 
                check: "conditions"
            }
        ]
    }, 
    {
        type: "triggers_DAMAGEDBYPROJECTILE", 
        colour: 120, 
        output: "triggers", 
        message0: "DAMAGEDBYPROJECTILE", 
        message1: "onlyProjectiles: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "onlyProjectiles", 
                value: "false", 
                options: enums.booleans
            }
        ], 
        message2: "conditions: %1", 
        args2: [
            {
                type: "input_statement", 
                name: "conditions", 
                check: "conditions"
            }
        ]
    }, 
    {
        type: "triggers_DAMAGEDENTITYWITHPROJECTILE", 
        colour: 120, 
        output: "triggers", 
        message0: "DAMAGEDENTITYWITHPROJECTILE", 
        message1: "onlyProjectiles: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "onlyProjectiles", 
                value: "false", 
                options: enums.booleans
            }
        ], 
        message2: "conditions: %1", 
        args2: [
            {
                type: "input_statement", 
                name: "conditions", 
                check: "conditions"
            }
        ]
    }, 
    {
        type: "triggers_LAUNCHPROJECTILE", 
        colour: 120, 
        output: "triggers", 
        message0: "LAUNCHPROJECTILE", 
        message1: "conditions: %1", 
        args1: [
            {
                type: "input_statement", 
                name: "conditions", 
                check: "conditions"
            }
        ]
    }, 
    {
        type: "triggers_PROJECTILEHIT", 
        colour: 120, 
        output: "triggers", 
        message0: "PROJECTILEHIT", 
        message1: "conditions: %1", 
        args1: [
            {
                type: "input_statement", 
                name: "conditions", 
                check: "conditions"
            }
        ]
    }, 
    {
        type: "triggers_DAMAGED", 
        colour: 120, 
        output: "triggers", 
        message0: "DAMAGED", 
        message1: "causes: %1", 
        args1: [
            {
                type: "input_statement", 
                name: "causes_array", 
                check: [
                    "listtypes_damageCause"
                ]
            }
        ], 
        message2: "conditions: %1", 
        args2: [
            {
                type: "input_statement", 
                name: "conditions", 
                check: "conditions"
            }
        ]
    }, 
    {
        type: "triggers_SNEAK", 
        colour: 120, 
        output: "triggers", 
        message0: "SNEAK", 
        message1: "conditions: %1", 
        args1: [
            {
                type: "input_statement", 
                name: "conditions", 
                check: "conditions"
            }
        ]
    }, 
    {
        type: "triggers_TOGGLEGLIDE", 
        colour: 120, 
        output: "triggers", 
        message0: "TOGGLEGLIDE", 
        message1: "conditions: %1", 
        args1: [
            {
                type: "input_statement", 
                name: "conditions", 
                check: "conditions"
            }
        ]
    }, 
    {
        type: "triggers_PLAYERJUMP", 
        colour: 120, 
        output: "triggers", 
        message0: "PLAYERJUMP", 
        message1: "conditions: %1", 
        args1: [
            {
                type: "input_statement", 
                name: "conditions", 
                check: "conditions"
            }
        ]
    }, 
    {
        type: "triggers_LOOP", 
        colour: 120, 
        output: "triggers", 
        message0: "LOOP", 
        message1: "period: %1", 
        args1: [
            {
                type: "field_number", 
                name: "period", 
                value: 1
            }
        ], 
        message2: "conditions: %1", 
        args2: [
            {
                type: "input_statement", 
                name: "conditions", 
                check: "conditions"
            }
        ]
    }, 
    {
        type: "triggers_COMBAT", 
        colour: 120, 
        output: "triggers", 
        message0: "COMBAT", 
        message1: "conditions: %1", 
        args1: [
            {
                type: "input_statement", 
                name: "conditions", 
                check: "conditions"
            }
        ]
    }, 
    {
        type: "triggers_DEATH", 
        colour: 120, 
        output: "triggers", 
        message0: "DEATH", 
        message1: "conditions: %1", 
        args1: [
            {
                type: "input_statement", 
                name: "conditions", 
                check: "conditions"
            }
        ]
    }, 
    {
        type: "triggers_SPAWN", 
        colour: 120, 
        output: "triggers", 
        message0: "SPAWN", 
        message1: "conditions: %1", 
        args1: [
            {
                type: "input_statement", 
                name: "conditions", 
                check: "conditions"
            }
        ]
    }, 
    {
        type: "triggers_TARGET", 
        colour: 120, 
        output: "triggers", 
        message0: "TARGET", 
        message1: "conditions: %1", 
        args1: [
            {
                type: "input_statement", 
                name: "conditions", 
                check: "conditions"
            }
        ]
    }, 
    {
        type: "triggers_TARGETED", 
        colour: 120, 
        output: "triggers", 
        message0: "TARGETED", 
        message1: "conditions: %1", 
        args1: [
            {
                type: "input_statement", 
                name: "conditions", 
                check: "conditions"
            }
        ]
    }, 
    {
        type: "triggers_VEHICLE", 
        colour: 120, 
        output: "triggers", 
        message0: "VEHICLE", 
        message1: "conditions: %1", 
        args1: [
            {
                type: "input_statement", 
                name: "conditions", 
                check: "conditions"
            }
        ]
    }, 
    {
        type: "triggers_ENTERVEHICLE", 
        colour: 120, 
        output: "triggers", 
        message0: "ENTERVEHICLE", 
        message1: "conditions: %1", 
        args1: [
            {
                type: "input_statement", 
                name: "conditions", 
                check: "conditions"
            }
        ]
    }, 
    {
        type: "triggers_BECOMEVEHICLE", 
        colour: 120, 
        output: "triggers", 
        message0: "BECOMEVEHICLE", 
        message1: "conditions: %1", 
        args1: [
            {
                type: "input_statement", 
                name: "conditions", 
                check: "conditions"
            }
        ]
    }, 
    {
        type: "triggers_EXITVEHICLE", 
        colour: 120, 
        output: "triggers", 
        message0: "EXITVEHICLE", 
        message1: "conditions: %1", 
        args1: [
            {
                type: "input_statement", 
                name: "conditions", 
                check: "conditions"
            }
        ]
    }, 
    {
        type: "triggers_PLAYERJOIN", 
        colour: 120, 
        output: "triggers", 
        message0: "PLAYERJOIN", 
        message1: "conditions: %1", 
        args1: [
            {
                type: "input_statement", 
                name: "conditions", 
                check: "conditions"
            }
        ]
    }, 
    {
        type: "triggers_PLAYERQUIT", 
        colour: 120, 
        output: "triggers", 
        message0: "PLAYERQUIT", 
        message1: "conditions: %1", 
        args1: [
            {
                type: "input_statement", 
                name: "conditions", 
                check: "conditions"
            }
        ]
    }, 
    {
        type: "triggers_PROJECTILECOMBAT", 
        colour: 120, 
        output: "triggers", 
        message0: "PROJECTILECOMBAT", 
        message1: "onlyProjectiles: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "onlyProjectiles", 
                value: "false", 
                options: enums.booleans
            }
        ], 
        message2: "conditions: %1", 
        args2: [
            {
                type: "input_statement", 
                name: "conditions", 
                check: "conditions"
            }
        ]
    }, 
    {
        type: "triggers_TAME", 
        colour: 120, 
        output: "triggers", 
        message0: "TAME", 
        message1: "conditions: %1", 
        args1: [
            {
                type: "input_statement", 
                name: "conditions", 
                check: "conditions"
            }
        ]
    }, 
    {
        type: "triggers_INTERACT", 
        colour: 120, 
        output: "triggers", 
        message0: "INTERACT", 
        message1: "actions: %1", 
        args1: [
            {
                type: "input_statement", 
                name: "actions_array", 
                check: [
                    "listtypes_action"
                ]
            }
        ], 
        message2: "conditions: %1", 
        args2: [
            {
                type: "input_statement", 
                name: "conditions", 
                check: "conditions"
            }
        ]
    }, 
    {
        type: "triggers_KILL", 
        colour: 120, 
        output: "triggers", 
        message0: "KILL", 
        message1: "conditions: %1", 
        args1: [
            {
                type: "input_statement", 
                name: "conditions", 
                check: "conditions"
            }
        ]
    }, 
    {
        type: "triggers_POTIONEFFECT", 
        colour: 120, 
        output: "triggers", 
        message0: "POTIONEFFECT", 
        message1: "effects: %1", 
        args1: [
            {
                type: "input_statement", 
                name: "effects_array", 
                check: [
                    "listtypes_potion"
                ]
            }
        ], 
        message2: "conditions: %1", 
        args2: [
            {
                type: "input_statement", 
                name: "conditions", 
                check: "conditions"
            }
        ]
    }, 
    {
        type: "triggers_INTERACTENTITY", 
        colour: 120, 
        output: "triggers", 
        message0: "INTERACTENTITY", 
        message1: "conditions: %1", 
        args1: [
            {
                type: "input_statement", 
                name: "conditions", 
                check: "conditions"
            }
        ]
    }, 
    {
        type: "triggers_RIPTIDE", 
        colour: 120, 
        output: "triggers", 
        message0: "RIPTIDE", 
        message1: "conditions: %1", 
        args1: [
            {
                type: "input_statement", 
                name: "conditions", 
                check: "conditions"
            }
        ]
    }, 
    {
        type: "triggers_CHANGEMAINHAND", 
        colour: 120, 
        output: "triggers", 
        message0: "CHANGEMAINHAND", 
        message1: "conditions: %1", 
        args1: [
            {
                type: "input_statement", 
                name: "conditions", 
                check: "conditions"
            }
        ]
    }, 
    {
        type: "triggers_EQUIPARMOR", 
        colour: 120, 
        output: "triggers", 
        message0: "EQUIPARMOR", 
        message1: "conditions: %1", 
        args1: [
            {
                type: "input_statement", 
                name: "conditions", 
                check: "conditions"
            }
        ]
    }, 
    {
        type: "triggers_SPRINT", 
        colour: 120, 
        output: "triggers", 
        message0: "SPRINT", 
        message1: "conditions: %1", 
        args1: [
            {
                type: "input_statement", 
                name: "conditions", 
                check: "conditions"
            }
        ]
    }, 
    {
        type: "triggers_BLOCKBREAK", 
        colour: 120, 
        output: "triggers", 
        message0: "BLOCKBREAK", 
        message1: "conditions: %1", 
        args1: [
            {
                type: "input_statement", 
                name: "conditions", 
                check: "conditions"
            }
        ]
    }, 
    {
        type: "triggers_TOTEM", 
        colour: 120, 
        output: "triggers", 
        message0: "TOTEM", 
        message1: "conditions: %1", 
        args1: [
            {
                type: "input_statement", 
                name: "conditions", 
                check: "conditions"
            }
        ]
    }, 
    {
        type: "triggers_CONSUME", 
        colour: 120, 
        output: "triggers", 
        message0: "CONSUME", 
        message1: "conditions: %1", 
        args1: [
            {
                type: "input_statement", 
                name: "conditions", 
                check: "conditions"
            }
        ]
    }, 
    {
        type: "triggers_MOVE", 
        colour: 120, 
        output: "triggers", 
        message0: "MOVE", 
        message1: "conditions: %1", 
        args1: [
            {
                type: "input_statement", 
                name: "conditions", 
                check: "conditions"
            }
        ]
    }, 
    {
        type: "triggers_SWAPHANDS", 
        colour: 120, 
        output: "triggers", 
        message0: "SWAPHANDS", 
        message1: "conditions: %1", 
        args1: [
            {
                type: "input_statement", 
                name: "conditions", 
                check: "conditions"
            }
        ]
    }, 
    {
        type: "conditions_HEALTH", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        message0: "HEALTH", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ], 
        message2: "minimumHealthPercentage: %1", 
        args2: [
            {
                type: "field_number", 
                name: "minimumHealthPercentage", 
                value: 0
            }
        ], 
        message3: "maximumHealthPercentage: %1", 
        args3: [
            {
                type: "field_number", 
                name: "maximumHealthPercentage", 
                value: 100
            }
        ], 
        message4: "healthPercentange: %1", 
        args4: [
            {
                type: "input_value", 
                name: "healthPercentange", 
                check: [
                    "types_range"
                ]
            }
        ]
    }, 
    {
        type: "conditions_CHANCE", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        message0: "CHANCE", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ]
                ]
            }
        ], 
        message2: "chance: %1", 
        args2: [
            {
                type: "field_number", 
                name: "chance", 
                value: 1
            }
        ]
    }, 
    {
        type: "conditions_COOLDOWN", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        message0: "COOLDOWN", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ]
                ]
            }
        ], 
        message2: "cooldown: %1", 
        args2: [
            {
                type: "field_number", 
                name: "cooldown", 
                value: 10
            }
        ]
    }, 
    {
        type: "conditions_ENTITY", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        message0: "ENTITY", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ], 
        message2: "whitelist: %1", 
        args2: [
            {
                type: "field_dropdown_default", 
                name: "whitelist", 
                value: "true", 
                options: enums.booleans
            }
        ], 
        message3: "entities: %1", 
        args3: [
            {
                type: "input_statement", 
                name: "entities_array", 
                check: [
                    "listtypes_entity"
                ]
            }
        ]
    }, 
    {
        type: "conditions_SIZE", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        message0: "SIZE", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ], 
        message2: "minimumSize: %1", 
        args2: [
            {
                type: "field_number", 
                name: "minimumSize", 
                value: 0, 
                precision: 1
            }
        ], 
        message3: "maximumSize: %1", 
        args3: [
            {
                type: "field_number", 
                name: "maximumSize", 
                value: 4, 
                precision: 1
            }
        ]
    }, 
    {
        type: "conditions_NOT", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        message0: "NOT", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ], 
                    [
                        "LOCATION", 
                        "LOCATION"
                    ], 
                    [
                        "ITEM", 
                        "ITEM"
                    ]
                ]
            }
        ], 
        message2: "condition: %1", 
        args2: [
            {
                type: "input_value", 
                name: "condition", 
                check: [
                    "types_condition"
                ]
            }
        ]
    }, 
    {
        type: "conditions_SNEAK", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        message0: "SNEAK", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ], 
        message2: "sneak: %1", 
        args2: [
            {
                type: "field_dropdown_default", 
                name: "sneak", 
                value: "true", 
                options: enums.booleans
            }
        ]
    }, 
    {
        type: "conditions_TIME", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        message0: "TIME", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ]
                ]
            }
        ], 
        message2: "minimumTime: %1", 
        args2: [
            {
                type: "field_number", 
                name: "minimumTime", 
                value: 0, 
                precision: 1
            }
        ], 
        message3: "maximumTime: %1", 
        args3: [
            {
                type: "field_number", 
                name: "maximumTime", 
                value: 24000, 
                precision: 1
            }
        ], 
        message4: "time: %1", 
        args4: [
            {
                type: "input_value", 
                name: "time", 
                check: [
                    "types_range"
                ]
            }
        ]
    }, 
    {
        type: "conditions_ONGROUND", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        message0: "ONGROUND", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ], 
        message2: "grounded: %1", 
        args2: [
            {
                type: "field_dropdown_default", 
                name: "grounded", 
                value: "true", 
                options: enums.booleans
            }
        ]
    }, 
    {
        type: "conditions_GLIDING", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        message0: "GLIDING", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ]
                ]
            }
        ], 
        message2: "shouldGlide: %1", 
        args2: [
            {
                type: "field_dropdown_default", 
                name: "shouldGlide", 
                value: "true", 
                options: enums.booleans
            }
        ], 
        message3: "glide: %1", 
        args3: [
            {
                type: "field_dropdown_default", 
                name: "glide", 
                value: "true", 
                options: enums.booleans
            }
        ]
    }, 
    {
        type: "conditions_BIOME", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        message0: "BIOME", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ], 
                    [
                        "LOCATION", 
                        "LOCATION"
                    ]
                ]
            }
        ], 
        message2: "biomes: %1", 
        args2: [
            {
                type: "input_statement", 
                name: "biomes_array", 
                check: [
                    "listtypes_biome"
                ]
            }
        ]
    }, 
    {
        type: "conditions_METADATA", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        message0: "METADATA", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ], 
        message2: "comparison: %1", 
        args2: [
            {
                type: "field_dropdown_default", 
                name: "comparison", 
                value: "EQUALS", 
                options: enums.comparison
            }
        ], 
        message3: "value: %1", 
        args3: [
            {
                type: "field_number", 
                name: "value", 
                value: 0
            }
        ], 
        message4: "variable: %1", 
        args4: [
            {
                type: "field_input", 
                name: "variable"
            }
        ]
    }, 
    {
        type: "conditions_NPC", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        message0: "NPC", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ], 
        message2: "isNPC: %1", 
        args2: [
            {
                type: "field_dropdown_default", 
                name: "isNPC", 
                value: "false", 
                options: enums.booleans
            }
        ]
    }, 
    {
        type: "conditions_WEATHER", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        message0: "WEATHER", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ]
                ]
            }
        ]
    }, 
    {
        type: "conditions_INBLOCK", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        message0: "INBLOCK", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ], 
        message2: "blocks: %1", 
        args2: [
            {
                type: "input_statement", 
                name: "blocks_array", 
                check: [
                    "listtypes_material"
                ]
            }
        ]
    }, 
    {
        type: "conditions_WORLD", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        message0: "WORLD", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ], 
                    [
                        "LOCATION", 
                        "LOCATION"
                    ]
                ]
            }
        ], 
        message2: "worlds: %1", 
        args2: [
            {
                type: "input_statement", 
                name: "worlds_array", 
                check: [
                    "listtypes_world"
                ]
            }
        ]
    }, 
    {
        type: "conditions_TAMED", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        message0: "TAMED", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ], 
        message2: "checkOwner: %1", 
        args2: [
            {
                type: "field_dropdown_default", 
                name: "checkOwner", 
                value: "true", 
                options: enums.booleans
            }
        ]
    }, 
    {
        type: "conditions_FLYING", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        message0: "FLYING", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ]
    }, 
    {
        type: "conditions_FLY", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        message0: "FLY", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ]
    }, 
    {
        type: "conditions_HEIGHT", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        message0: "HEIGHT", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ], 
        message2: "height: %1", 
        args2: [
            {
                type: "input_value", 
                name: "height", 
                check: [
                    "types_range"
                ]
            }
        ]
    }, 
    {
        type: "conditions_BLOCK", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        message0: "BLOCK", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "LOCATION", 
                        "LOCATION"
                    ]
                ]
            }
        ], 
        message2: "materials: %1", 
        args2: [
            {
                type: "input_statement", 
                name: "materials_array", 
                check: [
                    "listtypes_material"
                ]
            }
        ]
    }, 
    {
        type: "conditions_ITEM", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        unimplemented: [
            "slot: multiple types\r\n"
        ], 
        message0: "ITEM", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ], 
                    [
                        "ITEM", 
                        "ITEM"
                    ]
                ]
            }
        ], 
        message2: "item: %1", 
        args2: [
            {
                type: "input_value", 
                name: "item", 
                check: [
                    "types_ItemComparisonData"
                ]
            }
        ], 
        message3: "Incomplete"
    }, 
    {
        type: "conditions_OR", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        message0: "OR", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ], 
                    [
                        "LOCATION", 
                        "LOCATION"
                    ], 
                    [
                        "ITEM", 
                        "ITEM"
                    ]
                ]
            }
        ], 
        message2: "conditions: %1", 
        args2: [
            {
                type: "input_statement", 
                name: "conditions", 
                check: "conditions"
            }
        ]
    }, 
    {
        type: "conditions_VISIBILITY", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        message0: "VISIBILITY", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ], 
        message2: "maxDistance: %1", 
        args2: [
            {
                type: "field_number", 
                name: "maxDistance", 
                value: 16
            }
        ]
    }, 
    {
        type: "conditions_TEMPERATURE", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        message0: "TEMPERATURE", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ], 
                    [
                        "LOCATION", 
                        "LOCATION"
                    ]
                ]
            }
        ], 
        message2: "temperature: %1", 
        args2: [
            {
                type: "input_value", 
                name: "temperature", 
                check: [
                    "types_range"
                ]
            }
        ]
    }, 
    {
        type: "conditions_DISTANCE", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        message0: "DISTANCE", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ], 
        message2: "distance: %1", 
        args2: [
            {
                type: "input_value", 
                name: "distance", 
                check: [
                    "types_range"
                ]
            }
        ]
    }, 
    {
        type: "conditions_SHIELDED", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        message0: "SHIELDED", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ]
                ]
            }
        ]
    }, 
    {
        type: "conditions_ITEMWRAPPER", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        unimplemented: [
            "slot: multiple types\r\n"
        ], 
        message0: "ITEMWRAPPER", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
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
        message3: "Incomplete"
    }, 
    {
        type: "conditions_SWIMMING", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        message0: "SWIMMING", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ]
    }, 
    {
        type: "conditions_SPEED", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        message0: "SPEED", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ], 
        message2: "speed: %1", 
        args2: [
            {
                type: "input_value", 
                name: "speed", 
                check: [
                    "types_range"
                ]
            }
        ]
    }, 
    {
        type: "conditions_SHOOTER", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        message0: "SHOOTER", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ]
    }, 
    {
        type: "conditions_HERO", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        message0: "HERO", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ], 
        message2: "heroes: %1", 
        args2: [
            {
                type: "input_statement", 
                name: "heroes_array", 
                check: [
                    "listtypes_string"
                ]
            }
        ]
    }, 
    {
        type: "conditions_BOSS", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        message0: "BOSS", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ], 
        message2: "entities: %1", 
        args2: [
            {
                type: "input_statement", 
                name: "entities_array", 
                check: [
                    "listtypes_string"
                ]
            }
        ]
    }, 
    {
        type: "conditions_SKILLITEM", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        message0: "SKILLITEM", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ], 
        message2: "skillItem: %1", 
        args2: [
            {
                type: "field_input", 
                name: "skillItem"
            }
        ]
    }, 
    {
        type: "conditions_ITEMLEVEL", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        message0: "ITEMLEVEL", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ], 
        message2: "itemLevel: %1", 
        args2: [
            {
                type: "input_value", 
                name: "itemLevel", 
                check: [
                    "types_range"
                ]
            }
        ]
    }, 
    {
        type: "effects_DAMAGE", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        message0: "DAMAGE", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ], 
        message2: "damage: %1", 
        args2: [
            {
                type: "field_number", 
                name: "damage", 
                value: 5
            }
        ], 
        message3: "cause: %1", 
        args3: [
            {
                type: "field_dropdown_default", 
                name: "cause", 
                value: "CUSTOM", 
                options: enums.damageCause
            }
        ]
    }, 
    {
        type: "effects_AOE", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        message0: "AOE", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ]
                ]
            }
        ], 
        message2: "radius: %1", 
        args2: [
            {
                type: "field_number", 
                name: "radius", 
                value: 5
            }
        ], 
        message3: "conditions: %1", 
        args3: [
            {
                type: "input_statement", 
                name: "conditions", 
                check: "conditions"
            }
        ], 
        message4: "effects: %1", 
        args4: [
            {
                type: "input_statement", 
                name: "effects", 
                check: "effects"
            }
        ]
    }, 
    {
        type: "effects_VELOCITY", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        message0: "VELOCITY", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ], 
        message2: "operation: %1", 
        args2: [
            {
                type: "field_dropdown_default", 
                name: "operation", 
                options: enums.operation
            }
        ], 
        message3: "value: %1", 
        args3: [
            {
                type: "field_number", 
                name: "value", 
                value: 1
            }
        ], 
        message4: "velocity: %1", 
        args4: [
            {
                type: "field_number", 
                name: "velocity", 
                value: 1
            }
        ], 
        message5: "component: %1", 
        args5: [
            {
                type: "field_input", 
                name: "component"
            }
        ]
    }, 
    {
        type: "effects_CANCEL", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        message0: "CANCEL", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ]
                ]
            }
        ]
    }, 
    {
        type: "effects_GLIDING", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        message0: "GLIDING", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ], 
        message2: "glide: %1", 
        args2: [
            {
                type: "field_dropdown_default", 
                name: "glide", 
                value: "true", 
                options: enums.booleans
            }
        ]
    }, 
    {
        type: "effects_WAIT", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        message0: "WAIT", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ], 
                    [
                        "LOCATION", 
                        "LOCATION"
                    ], 
                    [
                        "ITEM", 
                        "ITEM"
                    ]
                ]
            }
        ], 
        message2: "delay: %1", 
        args2: [
            {
                type: "field_number", 
                name: "delay", 
                value: 1
            }
        ], 
        message3: "conditions: %1", 
        args3: [
            {
                type: "input_statement", 
                name: "conditions", 
                check: "conditions"
            }
        ], 
        message4: "effects: %1", 
        args4: [
            {
                type: "input_statement", 
                name: "effects", 
                check: "effects"
            }
        ]
    }, 
    {
        type: "effects_POTION", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        message0: "POTION", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ], 
        message2: "potion: %1", 
        args2: [
            {
                type: "input_value", 
                name: "potion", 
                check: [
                    "types_PotionEffectData"
                ]
            }
        ]
    }, 
    {
        type: "effects_WEB", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        message0: "WEB", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ], 
        message2: "duration: %1", 
        args2: [
            {
                type: "field_number", 
                name: "duration", 
                value: -1
            }
        ], 
        message3: "block: %1", 
        args3: [
            {
                type: "field_dropdown_default", 
                name: "block", 
                value: "COBWEB", 
                options: enums.material
            }
        ]
    }, 
    {
        type: "effects_BLOCKENTITY", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        message0: "BLOCKENTITY", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ], 
        message2: "duration: %1", 
        args2: [
            {
                type: "field_number", 
                name: "duration", 
                value: -1
            }
        ], 
        message3: "block: %1", 
        args3: [
            {
                type: "field_dropdown_default", 
                name: "block", 
                value: "COBWEB", 
                options: enums.material
            }
        ]
    }, 
    {
        type: "effects_ARROW", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        message0: "ARROW", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ], 
        message2: "velocity: %1", 
        args2: [
            {
                type: "field_number", 
                name: "velocity", 
                value: 1
            }
        ], 
        message3: "entity: %1", 
        args3: [
            {
                type: "field_dropdown_default", 
                name: "entity", 
                value: "arrow", 
                options: enums.entity
            }
        ], 
        message4: "damage: %1", 
        args4: [
            {
                type: "field_number", 
                name: "damage", 
                value: 4, 
                precision: 1
            }
        ], 
        message5: "fireTicks: %1", 
        args5: [
            {
                type: "field_number", 
                name: "fireTicks", 
                value: 0, 
                precision: 1
            }
        ]
    }, 
    {
        type: "effects_ATTRIBUTE", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        message0: "ATTRIBUTE", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ], 
        message2: "operation: %1", 
        args2: [
            {
                type: "field_dropdown_default", 
                name: "operation", 
                options: enums.operation
            }
        ], 
        message3: "value: %1", 
        args3: [
            {
                type: "field_number", 
                name: "value", 
                value: 1
            }
        ], 
        message4: "attribute: %1", 
        args4: [
            {
                type: "field_dropdown_default", 
                name: "attribute", 
                options: enums.attribute
            }
        ]
    }, 
    {
        type: "effects_LAUNCH", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        message0: "LAUNCH", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ], 
        message2: "entity: %1", 
        args2: [
            {
                type: "field_dropdown_default", 
                name: "entity", 
                value: "FIREBALL", 
                options: enums.entity
            }
        ], 
        message3: "velocity: %1", 
        args3: [
            {
                type: "field_number", 
                name: "velocity", 
                value: 1
            }
        ]
    }, 
    {
        type: "effects_MESSAGE", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        message0: "MESSAGE", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ], 
        message2: "message: %1", 
        args2: [
            {
                type: "field_input", 
                name: "message"
            }
        ]
    }, 
    {
        type: "effects_PICKUP", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        message0: "PICKUP", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ]
    }, 
    {
        type: "effects_REPULSE", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        message0: "REPULSE", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ], 
        message2: "velocity: %1", 
        args2: [
            {
                type: "field_number", 
                name: "velocity", 
                value: 1
            }
        ], 
        message3: "add: %1", 
        args3: [
            {
                type: "field_dropdown_default", 
                name: "add", 
                value: "false", 
                options: enums.booleans
            }
        ]
    }, 
    {
        type: "effects_RESIZE", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        message0: "RESIZE", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ], 
        message2: "operation: %1", 
        args2: [
            {
                type: "field_dropdown_default", 
                name: "operation", 
                options: enums.operation
            }
        ], 
        message3: "value: %1", 
        args3: [
            {
                type: "field_number", 
                name: "value", 
                value: 1
            }
        ], 
        message4: "retainHealth: %1", 
        args4: [
            {
                type: "field_dropdown_default", 
                name: "retainHealth", 
                value: "true", 
                options: enums.booleans
            }
        ]
    }, 
    {
        type: "effects_SMITE", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        message0: "SMITE", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ], 
        message2: "fake: %1", 
        args2: [
            {
                type: "field_dropdown_default", 
                name: "fake", 
                value: "false", 
                options: enums.booleans
            }
        ]
    }, 
    {
        type: "effects_LIGHTNING", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        message0: "LIGHTNING", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ], 
        message2: "fake: %1", 
        args2: [
            {
                type: "field_dropdown_default", 
                name: "fake", 
                value: "false", 
                options: enums.booleans
            }
        ]
    }, 
    {
        type: "effects_FLING", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        message0: "FLING", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ], 
        message2: "operation: %1", 
        args2: [
            {
                type: "field_dropdown_default", 
                name: "operation", 
                options: enums.operation
            }
        ], 
        message3: "value: %1", 
        args3: [
            {
                type: "field_number", 
                name: "value", 
                value: 1
            }
        ], 
        message4: "velocity: %1", 
        args4: [
            {
                type: "field_number", 
                name: "velocity", 
                value: 1
            }
        ], 
        message5: "component: %1", 
        args5: [
            {
                type: "field_input", 
                name: "component"
            }
        ]
    }, 
    {
        type: "effects_METADATA", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        message0: "METADATA", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ], 
        message2: "operation: %1", 
        args2: [
            {
                type: "field_dropdown_default", 
                name: "operation", 
                options: enums.operation
            }
        ], 
        message3: "value: %1", 
        args3: [
            {
                type: "field_number", 
                name: "value", 
                value: 1
            }
        ], 
        message4: "variable: %1", 
        args4: [
            {
                type: "field_input", 
                name: "variable"
            }
        ]
    }, 
    {
        type: "effects_GIVEITEM", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        message0: "GIVEITEM", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ], 
        message2: "dropIfFull: %1", 
        args2: [
            {
                type: "field_dropdown_default", 
                name: "dropIfFull", 
                value: "true", 
                options: enums.booleans
            }
        ], 
        message3: "item: %1", 
        args3: [
            {
                type: "input_value", 
                name: "item", 
                check: [
                    "types_ItemStackData"
                ]
            }
        ]
    }, 
    {
        type: "effects_SCRAMBLEINVENTORY", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        message0: "SCRAMBLEINVENTORY", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ]
    }, 
    {
        type: "effects_RANDOMTELEPORT", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        message0: "RANDOMTELEPORT", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ], 
        message2: "minDistance: %1", 
        args2: [
            {
                type: "field_number", 
                name: "minDistance", 
                value: 5
            }
        ], 
        message3: "maxDistance: %1", 
        args3: [
            {
                type: "field_number", 
                name: "maxDistance", 
                value: 5
            }
        ]
    }, 
    {
        type: "effects_PROJECTILE", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        message0: "PROJECTILE", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ], 
                    [
                        "LOCATION", 
                        "LOCATION"
                    ]
                ]
            }
        ], 
        message2: "velocity: %1", 
        args2: [
            {
                type: "field_number", 
                name: "velocity", 
                value: 1
            }
        ], 
        message3: "entity: %1", 
        args3: [
            {
                type: "input_value", 
                name: "entity", 
                check: [
                    "types_EntityData"
                ]
            }
        ]
    }, 
    {
        type: "effects_SOUND", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        message0: "SOUND", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ], 
                    [
                        "LOCATION", 
                        "LOCATION"
                    ]
                ]
            }
        ], 
        message2: "sound: %1", 
        args2: [
            {
                type: "input_value", 
                name: "sound", 
                check: [
                    "types_SoundData"
                ]
            }
        ]
    }, 
    {
        type: "effects_COMMAND", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        message0: "COMMAND", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ], 
        message2: "executor: %1", 
        args2: [
            {
                type: "field_input", 
                name: "executor", 
                text: "CONSOLE"
            }
        ], 
        message3: "commands: %1", 
        args3: [
            {
                type: "input_statement", 
                name: "commands_array", 
                check: [
                    "listtypes_string"
                ]
            }
        ]
    }, 
    {
        type: "effects_LUNGE", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        message0: "LUNGE", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ], 
        message2: "horizontalVelocity: %1", 
        args2: [
            {
                type: "field_number", 
                name: "horizontalVelocity", 
                value: 0
            }
        ], 
        message3: "verticalVelocity: %1", 
        args3: [
            {
                type: "field_number", 
                name: "verticalVelocity", 
                value: 0
            }
        ], 
        message4: "overwrite: %1", 
        args4: [
            {
                type: "field_dropdown_default", 
                name: "overwrite", 
                value: "true", 
                options: enums.booleans
            }
        ]
    }, 
    {
        type: "effects_NEAREST", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        message0: "NEAREST", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ], 
                    [
                        "LOCATION", 
                        "LOCATION"
                    ]
                ]
            }
        ], 
        message2: "radius: %1", 
        args2: [
            {
                type: "field_number", 
                name: "radius", 
                value: 5
            }
        ], 
        message3: "conditions: %1", 
        args3: [
            {
                type: "input_statement", 
                name: "conditions", 
                check: "conditions"
            }
        ], 
        message4: "effects: %1", 
        args4: [
            {
                type: "input_statement", 
                name: "effects", 
                check: "effects"
            }
        ]
    }, 
    {
        type: "effects_SHOOTER", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        message0: "SHOOTER", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ], 
        message2: "onlyProjectiles: %1", 
        args2: [
            {
                type: "field_dropdown_default", 
                name: "onlyProjectiles", 
                value: "true", 
                options: enums.booleans
            }
        ], 
        message3: "conditions: %1", 
        args3: [
            {
                type: "input_statement", 
                name: "conditions", 
                check: "conditions"
            }
        ], 
        message4: "effects: %1", 
        args4: [
            {
                type: "input_statement", 
                name: "effects", 
                check: "effects"
            }
        ]
    }, 
    {
        type: "effects_KNOCKBACK", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        message0: "KNOCKBACK", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ], 
        message2: "multiplier: %1", 
        args2: [
            {
                type: "field_number", 
                name: "multiplier", 
                value: 1
            }
        ], 
        message3: "overwriteCurrentVelocity: %1", 
        args3: [
            {
                type: "field_dropdown_default", 
                name: "overwriteCurrentVelocity", 
                value: "true", 
                options: enums.booleans
            }
        ]
    }, 
    {
        type: "effects_IGNITE", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        message0: "IGNITE", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ], 
        message2: "fireTicks: %1", 
        args2: [
            {
                type: "field_number", 
                name: "fireTicks", 
                value: 40, 
                precision: 1
            }
        ]
    }, 
    {
        type: "effects_FIRE", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        message0: "FIRE", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ], 
        message2: "fireTicks: %1", 
        args2: [
            {
                type: "field_number", 
                name: "fireTicks", 
                value: 40, 
                precision: 1
            }
        ]
    }, 
    {
        type: "effects_TARGET", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        message0: "TARGET", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ]
    }, 
    {
        type: "effects_SWAP", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        message0: "SWAP", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ]
    }, 
    {
        type: "effects_LOCATIONCUBE", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        message0: "LOCATIONCUBE", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ], 
                    [
                        "LOCATION", 
                        "LOCATION"
                    ]
                ]
            }
        ], 
        message2: "verticalRadius: %1", 
        args2: [
            {
                type: "field_number", 
                name: "verticalRadius", 
                value: 0, 
                precision: 1
            }
        ], 
        message3: "horizontalRadius: %1", 
        args3: [
            {
                type: "field_number", 
                name: "horizontalRadius", 
                value: 0, 
                precision: 1
            }
        ], 
        message4: "offset: %1", 
        args4: [
            {
                type: "input_value", 
                name: "offset", 
                check: [
                    "types_VectorData"
                ]
            }
        ], 
        message5: "conditions: %1", 
        args5: [
            {
                type: "input_statement", 
                name: "conditions", 
                check: "conditions"
            }
        ], 
        message6: "effects: %1", 
        args6: [
            {
                type: "input_statement", 
                name: "effects", 
                check: "effects"
            }
        ]
    }, 
    {
        type: "effects_PLACEBLOCK", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        message0: "PLACEBLOCK", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "LOCATION", 
                        "LOCATION"
                    ]
                ]
            }
        ], 
        message2: "material: %1", 
        args2: [
            {
                type: "field_dropdown_default", 
                name: "material", 
                value: null, 
                options: enums.material
            }
        ], 
        message3: "updatePhysics: %1", 
        args3: [
            {
                type: "field_dropdown_default", 
                name: "updatePhysics", 
                value: "true", 
                options: enums.booleans
            }
        ], 
        message4: "revertsAfter: %1", 
        args4: [
            {
                type: "field_number", 
                name: "revertsAfter", 
                value: -1
            }
        ], 
        message5: "block: %1", 
        args5: [
            {
                type: "input_value", 
                name: "block", 
                check: [
                    "types_BlockDataData"
                ]
            }
        ]
    }, 
    {
        type: "effects_SPAWNENTITY", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        message0: "SPAWNENTITY", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ], 
                    [
                        "LOCATION", 
                        "LOCATION"
                    ]
                ]
            }
        ], 
        message2: "entity: %1", 
        args2: [
            {
                type: "input_value", 
                name: "entity", 
                check: [
                    "types_EntityData"
                ]
            }
        ]
    }, 
    {
        type: "effects_REMOVEPOTION", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        message0: "REMOVEPOTION", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ], 
        message2: "types: %1", 
        args2: [
            {
                type: "input_statement", 
                name: "types_array", 
                check: [
                    "listtypes_potion"
                ]
            }
        ]
    }, 
    {
        type: "effects_TELEPORT", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        message0: "TELEPORT", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "OTHER", 
                        "OTHER"
                    ], 
                    [
                        "LOCATION", 
                        "LOCATION"
                    ]
                ]
            }
        ]
    }, 
    {
        type: "effects_RAYTRACE", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        message0: "RAYTRACE", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ], 
        message2: "maxDistance: %1", 
        args2: [
            {
                type: "field_number", 
                name: "maxDistance", 
                value: 10, 
                precision: 1
            }
        ], 
        message3: "alwaysHit: %1", 
        args3: [
            {
                type: "field_dropdown_default", 
                name: "alwaysHit", 
                value: "true", 
                options: enums.booleans
            }
        ], 
        message4: "ignorePassanles: %1", 
        args4: [
            {
                type: "field_dropdown_default", 
                name: "ignorePassanles", 
                value: "true", 
                options: enums.booleans
            }
        ], 
        message5: "raySize: %1", 
        args5: [
            {
                type: "field_number", 
                name: "raySize", 
                value: 1
            }
        ], 
        message6: "collisionMode: %1", 
        args6: [
            {
                type: "field_dropdown_default", 
                name: "collisionMode", 
                value: "NEVER", 
                options: enums.collisionMode
            }
        ], 
        message7: "conditions: %1", 
        args7: [
            {
                type: "input_statement", 
                name: "conditions", 
                check: "conditions"
            }
        ], 
        message8: "effects: %1", 
        args8: [
            {
                type: "input_statement", 
                name: "effects", 
                check: "effects"
            }
        ]
    }, 
    {
        type: "effects_TIMER", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        message0: "TIMER", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ], 
                    [
                        "LOCATION", 
                        "LOCATION"
                    ], 
                    [
                        "ITEM", 
                        "ITEM"
                    ]
                ]
            }
        ], 
        message2: "delay: %1", 
        args2: [
            {
                type: "field_number", 
                name: "delay", 
                value: 1
            }
        ], 
        message3: "period: %1", 
        args3: [
            {
                type: "field_number", 
                name: "period", 
                value: 1
            }
        ], 
        message4: "numberOfRepeats: %1", 
        args4: [
            {
                type: "field_number", 
                name: "numberOfRepeats", 
                value: 1, 
                precision: 1
            }
        ], 
        message5: "conditions: %1", 
        args5: [
            {
                type: "input_statement", 
                name: "conditions", 
                check: "conditions"
            }
        ], 
        message6: "effects: %1", 
        args6: [
            {
                type: "input_statement", 
                name: "effects", 
                check: "effects"
            }
        ]
    }, 
    {
        type: "effects_REMOVEENTITY", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        message0: "REMOVEENTITY", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ]
    }, 
    {
        type: "effects_ITEMSTACK", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        unimplemented: [
            "slot: multiple types\r\n"
        ], 
        message0: "ITEMSTACK", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
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
        ], 
        message4: "Incomplete"
    }, 
    {
        type: "effects_ITEMAMOUNT", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        message0: "ITEMAMOUNT", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "ITEM", 
                        "ITEM"
                    ]
                ]
            }
        ], 
        message2: "operation: %1", 
        args2: [
            {
                type: "field_dropdown_default", 
                name: "operation", 
                options: enums.operation
            }
        ], 
        message3: "value: %1", 
        args3: [
            {
                type: "field_number", 
                name: "value", 
                value: 1
            }
        ]
    }, 
    {
        type: "effects_SWITCHEROO", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        message0: "SWITCHEROO", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
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
    }, 
    {
        type: "effects_LOCATIONOFFSET", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        message0: "LOCATIONOFFSET", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ], 
                    [
                        "LOCATION", 
                        "LOCATION"
                    ]
                ]
            }
        ], 
        message2: "offset: %1", 
        args2: [
            {
                type: "input_value", 
                name: "offset", 
                check: [
                    "types_VectorData"
                ]
            }
        ], 
        message3: "conditions: %1", 
        args3: [
            {
                type: "input_statement", 
                name: "conditions", 
                check: "conditions"
            }
        ], 
        message4: "effects: %1", 
        args4: [
            {
                type: "input_statement", 
                name: "effects", 
                check: "effects"
            }
        ]
    }, 
    {
        type: "effects_BONEMEAL", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        message0: "BONEMEAL", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ], 
                    [
                        "LOCATION", 
                        "LOCATION"
                    ]
                ]
            }
        ], 
        message2: "faces: %1", 
        args2: [
            {
                type: "input_statement", 
                name: "faces_array", 
                check: [
                    "listtypes_blockFace"
                ]
            }
        ]
    }, 
    {
        type: "effects_HUNGER", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        message0: "HUNGER", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ], 
        message2: "operation: %1", 
        args2: [
            {
                type: "field_dropdown_default", 
                name: "operation", 
                options: enums.operation
            }
        ], 
        message3: "value: %1", 
        args3: [
            {
                type: "field_number", 
                name: "value", 
                value: 1
            }
        ]
    }, 
    {
        type: "effects_LOSETARGET", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        message0: "LOSETARGET", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ]
                ]
            }
        ]
    }, 
    {
        type: "effects_VEINMINER", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        message0: "VEINMINER", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "LOCATION", 
                        "LOCATION"
                    ]
                ]
            }
        ], 
        message2: "delay: %1", 
        args2: [
            {
                type: "field_number", 
                name: "delay", 
                value: 0.5
            }
        ], 
        message3: "allowMultiTypeVein: %1", 
        args3: [
            {
                type: "field_dropdown_default", 
                name: "allowMultiTypeVein", 
                value: "false", 
                options: enums.booleans
            }
        ], 
        message4: "limit: %1", 
        args4: [
            {
                type: "field_number", 
                name: "limit", 
                value: 10, 
                precision: 1
            }
        ], 
        message5: "types: %1", 
        args5: [
            {
                type: "input_statement", 
                name: "types_array", 
                check: [
                    "listtypes_material"
                ]
            }
        ]
    }, 
    {
        type: "effects_ACTIONBAR", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        message0: "ACTIONBAR", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ], 
        message2: "message: %1", 
        args2: [
            {
                type: "field_input", 
                name: "message"
            }
        ]
    }, 
    {
        type: "effects_FREEZE", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        message0: "FREEZE", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ], 
        message2: "operation: %1", 
        args2: [
            {
                type: "field_dropdown_default", 
                name: "operation", 
                options: enums.operation
            }
        ], 
        message3: "value: %1", 
        args3: [
            {
                type: "field_number", 
                name: "value", 
                value: 1
            }
        ]
    }, 
    {
        type: "effects_HEALTH", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        message0: "HEALTH", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ], 
        message2: "operation: %1", 
        args2: [
            {
                type: "field_dropdown_default", 
                name: "operation", 
                options: enums.operation
            }
        ], 
        message3: "value: %1", 
        args3: [
            {
                type: "field_number", 
                name: "value", 
                value: 1
            }
        ]
    }, 
    {
        type: "effects_FLY", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        message0: "FLY", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ], 
        message2: "fly: %1", 
        args2: [
            {
                type: "field_dropdown_default", 
                name: "fly", 
                value: "true", 
                options: enums.booleans
            }
        ]
    }, 
    {
        type: "effects_FLYING", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        message0: "FLYING", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ], 
        message2: "fly: %1", 
        args2: [
            {
                type: "field_dropdown_default", 
                name: "fly", 
                value: "true", 
                options: enums.booleans
            }
        ]
    }, 
    {
        type: "effects_MINION", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        message0: "MINION", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ], 
                    [
                        "OTHER", 
                        "OTHER"
                    ]
                ]
            }
        ], 
        message2: "amount: %1", 
        args2: [
            {
                type: "field_number", 
                name: "amount", 
                value: 1, 
                precision: 1
            }
        ], 
        message3: "spawn: %1", 
        args3: [
            {
                type: "field_input", 
                name: "spawn"
            }
        ], 
        message4: "spawnOnTarget: %1", 
        args4: [
            {
                type: "field_dropdown_default", 
                name: "spawnOnTarget", 
                value: "true", 
                options: enums.booleans
            }
        ]
    }, 
    {
        type: "effects_RIDER", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        message0: "RIDER", 
        message1: "mode: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mode", 
                value: "SELF", 
                options: [
                    [
                        "SELF", 
                        "SELF"
                    ]
                ]
            }
        ], 
        message2: "rider: %1", 
        args2: [
            {
                type: "field_input", 
                name: "rider"
            }
        ]
    }, 
    {
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
        message2: "effects: %1", 
        args2: [
            {
                type: "input_statement", 
                name: "effects", 
                check: "effects"
            }
        ]
    }, 
    {
        type: "skills_POTIONEFFECT", 
        colour: 230, 
        previousStatement: "skills", 
        nextStatement: "skills", 
        message0: "POTIONEFFECT", 
        message1: "potency: %1", 
        args1: [
            {
                type: "field_number", 
                name: "potency", 
                value: 0, 
                precision: 1
            }
        ], 
        message2: "type: %1", 
        args2: [
            {
                type: "field_dropdown_default", 
                name: "type", 
                value: {
                
                }, 
                options: enums.potion
            }
        ], 
        message3: "duration: %1", 
        args3: [
            {
                type: "field_number", 
                name: "duration", 
                value: 4
            }
        ]
    }, 
    {
        type: "skills_OHKO", 
        colour: 230, 
        previousStatement: "skills", 
        nextStatement: "skills", 
        message0: "OHKO", 
        message1: "displayName: %1", 
        args1: [
            {
                type: "field_input", 
                name: "displayName", 
                text: ""
            }
        ], 
        message2: "entityTypes: %1", 
        args2: [
            {
                type: "input_statement", 
                name: "entityTypes_array", 
                check: [
                    "listtypes_entity"
                ]
            }
        ]
    }, 
    {
        type: "skills_REPULSION", 
        colour: 230, 
        previousStatement: "skills", 
        nextStatement: "skills", 
        message0: "REPULSION", 
        message1: "multiplier: %1", 
        args1: [
            {
                type: "field_number", 
                name: "multiplier", 
                value: 1
            }
        ], 
        message2: "radius: %1", 
        args2: [
            {
                type: "field_number", 
                name: "radius", 
                value: 5
            }
        ], 
        message3: "entityBlacklist: %1", 
        args3: [
            {
                type: "input_statement", 
                name: "entityBlacklist_array", 
                check: [
                    "listtypes_entity"
                ]
            }
        ]
    }, 
    {
        type: "skills_CONVERTITEM", 
        colour: 230, 
        previousStatement: "skills", 
        nextStatement: "skills", 
        message0: "CONVERTITEM", 
        message1: "chance: %1", 
        args1: [
            {
                type: "field_number", 
                name: "chance", 
                value: null
            }
        ], 
        message2: "inputItem: %1", 
        args2: [
            {
                type: "input_value", 
                name: "inputItem", 
                check: [
                    "types_ItemStackData"
                ]
            }
        ], 
        message3: "outputItem: %1", 
        args3: [
            {
                type: "input_value", 
                name: "outputItem", 
                check: [
                    "types_ItemStackData"
                ]
            }
        ]
    }, 
    {
        type: "skills_COOLDOWN", 
        colour: 230, 
        previousStatement: "skills", 
        nextStatement: "skills", 
        message0: "COOLDOWN", 
        message1: "cooldown: %1", 
        args1: [
            {
                type: "field_number", 
                name: "cooldown", 
                value: null
            }
        ], 
        message2: "cooldownMessage: %1", 
        args2: [
            {
                type: "field_input", 
                name: "cooldownMessage", 
                text: null
            }
        ]
    }, 
    {
        type: "skills_CONVERTBLOCK", 
        colour: 230, 
        previousStatement: "skills", 
        nextStatement: "skills", 
        message0: "CONVERTBLOCK", 
        message1: "cooldown: %1", 
        args1: [
            {
                type: "field_number", 
                name: "cooldown", 
                value: null
            }
        ], 
        message2: "cooldownMessage: %1", 
        args2: [
            {
                type: "field_input", 
                name: "cooldownMessage", 
                text: null
            }
        ], 
        message3: "outputBlock: %1", 
        args3: [
            {
                type: "field_dropdown_default", 
                name: "outputBlock", 
                value: "GOLD_BLOCK", 
                options: enums.material
            }
        ], 
        message4: "inputBlocks: %1", 
        args4: [
            {
                type: "input_statement", 
                name: "inputBlocks_array", 
                check: [
                    "listtypes_material"
                ]
            }
        ]
    }, 
    {
        type: "skills_REMOTEDETONATION", 
        colour: 230, 
        previousStatement: "skills", 
        nextStatement: "skills", 
        message0: "REMOTEDETONATION", 
        message1: "cooldown: %1", 
        args1: [
            {
                type: "field_number", 
                name: "cooldown", 
                value: null
            }
        ], 
        message2: "cooldownMessage: %1", 
        args2: [
            {
                type: "field_input", 
                name: "cooldownMessage", 
                text: null
            }
        ], 
        message3: "explosionStrength: %1", 
        args3: [
            {
                type: "field_number", 
                name: "explosionStrength", 
                value: 1
            }
        ], 
        message4: "spawnsFire: %1", 
        args4: [
            {
                type: "field_dropdown_default", 
                name: "spawnsFire", 
                value: "false", 
                options: enums.booleans
            }
        ], 
        message5: "breakBlocks: %1", 
        args5: [
            {
                type: "field_dropdown_default", 
                name: "breakBlocks", 
                value: "true", 
                options: enums.booleans
            }
        ], 
        message6: "removeDetonatedEntity: %1", 
        args6: [
            {
                type: "field_dropdown_default", 
                name: "removeDetonatedEntity", 
                value: "true", 
                options: enums.booleans
            }
        ], 
        message7: "explodable: %1", 
        args7: [
            {
                type: "input_statement", 
                name: "explodable_array", 
                check: [
                    "listtypes_entity"
                ]
            }
        ]
    }, 
    {
        type: "skills_BLOCKDROPS", 
        colour: 230, 
        previousStatement: "skills", 
        nextStatement: "skills", 
        unimplemented: [
            "convertMap: ?"
        ], 
        message0: "BLOCKDROPS", 
        message1: "replaceDrops: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "replaceDrops", 
                value: "false", 
                options: enums.booleans
            }
        ], 
        message2: "Incomplete"
    }, 
    {
        type: "skills_CREEPER", 
        colour: 230, 
        previousStatement: "skills", 
        nextStatement: "skills", 
        message0: "CREEPER", 
        message1: "cooldown: %1", 
        args1: [
            {
                type: "field_number", 
                name: "cooldown", 
                value: null
            }
        ], 
        message2: "cooldownMessage: %1", 
        args2: [
            {
                type: "field_input", 
                name: "cooldownMessage", 
                text: null
            }
        ], 
        message3: "creeper_power: %1", 
        args3: [
            {
                type: "field_number", 
                name: "creeper_power", 
                value: 1
            }
        ], 
        message4: "fuse: %1", 
        args4: [
            {
                type: "field_number", 
                name: "fuse", 
                value: 2
            }
        ], 
        message5: "slowfall_duration: %1", 
        args5: [
            {
                type: "field_number", 
                name: "slowfall_duration", 
                value: 7
            }
        ], 
        message6: "upwardsVelocity: %1", 
        args6: [
            {
                type: "field_number", 
                name: "upwardsVelocity", 
                value: 2.5
            }
        ]
    }, 
    {
        type: "skills_GIVEITEM", 
        colour: 230, 
        previousStatement: "skills", 
        nextStatement: "skills", 
        message0: "GIVEITEM", 
        message1: "canStore: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "canStore", 
                value: "true", 
                options: enums.booleans
            }
        ], 
        message2: "canDrop: %1", 
        args2: [
            {
                type: "field_dropdown_default", 
                name: "canDrop", 
                value: "true", 
                options: enums.booleans
            }
        ], 
        message3: "canLoseOnDeath: %1", 
        args3: [
            {
                type: "field_dropdown_default", 
                name: "canLoseOnDeath", 
                value: "true", 
                options: enums.booleans
            }
        ], 
        message4: "loseItemOnHeroLoss: %1", 
        args4: [
            {
                type: "field_dropdown_default", 
                name: "loseItemOnHeroLoss", 
                value: "true", 
                options: enums.booleans
            }
        ], 
        message5: "item: %1", 
        args5: [
            {
                type: "input_value", 
                name: "item", 
                check: [
                    "types_ItemStackData"
                ]
            }
        ]
    }, 
    {
        type: "skills_GUN", 
        colour: 230, 
        previousStatement: "skills", 
        nextStatement: "skills", 
        message0: "GUN", 
        message1: "cooldown: %1", 
        args1: [
            {
                type: "field_number", 
                name: "cooldown", 
                value: null
            }
        ], 
        message2: "cooldownMessage: %1", 
        args2: [
            {
                type: "field_input", 
                name: "cooldownMessage", 
                text: null
            }
        ], 
        message3: "maxDistance: %1", 
        args3: [
            {
                type: "field_number", 
                name: "maxDistance", 
                value: 64
            }
        ], 
        message4: "bulletSize: %1", 
        args4: [
            {
                type: "field_number", 
                name: "bulletSize", 
                value: 1
            }
        ], 
        message5: "damage: %1", 
        args5: [
            {
                type: "field_number", 
                name: "damage", 
                value: 5
            }
        ], 
        message6: "item: %1", 
        args6: [
            {
                type: "field_dropdown_default", 
                name: "item", 
                options: enums.material
            }
        ], 
        message7: "shootSound: %1", 
        args7: [
            {
                type: "input_value", 
                name: "shootSound", 
                check: [
                    "types_SoundData"
                ]
            }
        ], 
        message8: "trailParticle: %1", 
        args8: [
            {
                type: "input_value", 
                name: "trailParticle", 
                check: [
                    "types_ParticleData"
                ]
            }
        ], 
        message9: "hitParticle: %1", 
        args9: [
            {
                type: "input_value", 
                name: "hitParticle", 
                check: [
                    "types_ParticleData"
                ]
            }
        ]
    }, 
    {
        type: "skills_SNEAK", 
        colour: 230, 
        previousStatement: "skills", 
        nextStatement: "skills", 
        message0: "SNEAK", 
        message1: "mustSneak: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "mustSneak", 
                value: "true", 
                options: enums.booleans
            }
        ], 
        message2: "needsInvisibility: %1", 
        args2: [
            {
                type: "field_dropdown_default", 
                name: "needsInvisibility", 
                value: "false", 
                options: enums.booleans
            }
        ]
    }, 
    {
        type: "skills_SHIELD", 
        colour: 230, 
        previousStatement: "skills", 
        nextStatement: "skills", 
        message0: "SHIELD", 
        message1: "cooldown: %1", 
        args1: [
            {
                type: "field_number", 
                name: "cooldown", 
                value: 100
            }
        ]
    }, 
    {
        type: "skills_SPELL", 
        colour: 230, 
        previousStatement: "skills", 
        nextStatement: "skills", 
        unimplemented: [
            "transmutationData: ?"
        ], 
        message0: "SPELL", 
        message1: "spell: %1", 
        args1: [
            {
                type: "field_input", 
                name: "spell"
            }
        ], 
        message2: "fuel: %1", 
        args2: [
            {
                type: "field_dropdown_default", 
                name: "fuel", 
                value: "REDSTONE", 
                options: enums.material
            }
        ], 
        message3: "cooldown: %1", 
        args3: [
            {
                type: "field_number", 
                name: "cooldown", 
                value: 1
            }
        ], 
        message4: "cost: %1", 
        args4: [
            {
                type: "field_number", 
                name: "cost", 
                value: 1
            }
        ], 
        message5: "spellName: %1", 
        args5: [
            {
                type: "field_input", 
                name: "spellName", 
                text: ""
            }
        ], 
        message6: "cooldownMessage: %1", 
        args6: [
            {
                type: "field_input", 
                name: "cooldownMessage", 
                text: "%spellName% has %currentcooldown% seconds remaining."
            }
        ], 
        message7: "moreFuelMessage: %1", 
        args7: [
            {
                type: "field_input", 
                name: "moreFuelMessage", 
                text: "This spell needs %fuelneeded% more %fuel%"
            }
        ], 
        message8: "displayNameFormat: %1", 
        args8: [
            {
                type: "field_input", 
                name: "displayNameFormat", 
                text: "&5%spellName%"
            }
        ], 
        message9: "loreFormat: %1", 
        args9: [
            {
                type: "input_statement", 
                name: "loreFormat_array", 
                check: [
                    "listtypes_string"
                ]
            }
        ], 
        message10: "Incomplete"
    }, 
    {
        type: "skills_THROWER", 
        colour: 230, 
        previousStatement: "skills", 
        nextStatement: "skills", 
        message0: "THROWER", 
        message1: "cooldown: %1", 
        args1: [
            {
                type: "field_number", 
                name: "cooldown", 
                value: null
            }
        ], 
        message2: "cooldownMessage: %1", 
        args2: [
            {
                type: "field_input", 
                name: "cooldownMessage", 
                text: null
            }
        ], 
        message3: "ammoCost: %1", 
        args3: [
            {
                type: "field_number", 
                name: "ammoCost", 
                value: 1
            }
        ], 
        message4: "projectile: %1", 
        args4: [
            {
                type: "field_dropdown_default", 
                name: "projectile", 
                value: "SNOWBALL", 
                options: enums.entity
            }
        ], 
        message5: "canPickUp: %1", 
        args5: [
            {
                type: "field_dropdown_default", 
                name: "canPickUp", 
                value: "false", 
                options: enums.booleans
            }
        ], 
        message6: "velocity: %1", 
        args6: [
            {
                type: "field_number", 
                name: "velocity", 
                value: 1.4
            }
        ], 
        message7: "damage: %1", 
        args7: [
            {
                type: "field_number", 
                name: "damage", 
                value: 3
            }
        ], 
        message8: "item: %1", 
        args8: [
            {
                type: "input_value", 
                name: "item", 
                check: [
                    "types_ItemStackData"
                ]
            }
        ], 
        message9: "actions: %1", 
        args9: [
            {
                type: "input_statement", 
                name: "actions_array", 
                check: [
                    "listtypes_action"
                ]
            }
        ]
    }, 
    {
        type: "skills_BLOCKRAY", 
        colour: 230, 
        previousStatement: "skills", 
        nextStatement: "skills", 
        message0: "BLOCKRAY", 
        message1: "blockRayMode: %1", 
        args1: [
            {
                type: "field_input", 
                name: "blockRayMode"
            }
        ], 
        message2: "maxDistance: %1", 
        args2: [
            {
                type: "field_number", 
                name: "maxDistance", 
                value: 20, 
                precision: 1
            }
        ], 
        message3: "shouldRevert: %1", 
        args3: [
            {
                type: "field_dropdown_default", 
                name: "shouldRevert", 
                value: "false", 
                options: enums.booleans
            }
        ], 
        message4: "revertsAfter: %1", 
        args4: [
            {
                type: "field_number", 
                name: "revertsAfter", 
                value: 15, 
                precision: 1
            }
        ], 
        message5: "blocksToPlace: %1", 
        args5: [
            {
                type: "input_statement", 
                name: "blocksToPlace_array", 
                check: [
                    "listtypes_material"
                ]
            }
        ], 
        message6: "blocksToReplace: %1", 
        args6: [
            {
                type: "input_statement", 
                name: "blocksToReplace_array", 
                check: [
                    "listtypes_material"
                ]
            }
        ]
    }, 
    {
        type: "skills_CRAFTING", 
        colour: 230, 
        previousStatement: "skills", 
        nextStatement: "skills", 
        unimplemented: [
            "recipeKeys: ?", 
            "recipe: array item is a Property object", 
            "ingredients: ?"
        ], 
        message0: "CRAFTING", 
        message1: "isShaped: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "isShaped", 
                value: "true", 
                options: enums.booleans
            }
        ], 
        message2: "result: %1", 
        args2: [
            {
                type: "input_value", 
                name: "result", 
                check: [
                    "types_ItemStackData"
                ]
            }
        ], 
        message3: "Incomplete"
    }, 
    {
        type: "damagemodifiers_BLANK", 
        colour: 10, 
        output: "damagemodifiers", 
        message0: "BLANK"
    }, 
    {
        type: "damagemodifiers_EASED", 
        colour: 10, 
        output: "damagemodifiers", 
        message0: "EASED", 
        message1: "expectedMaximumDamage: %1", 
        args1: [
            {
                type: "field_number", 
                name: "expectedMaximumDamage", 
                value: 30
            }
        ], 
        message2: "damageCap: %1", 
        args2: [
            {
                type: "field_number", 
                name: "damageCap", 
                value: 15
            }
        ]
    }, 
    {
        type: "damagemodifiers_EASEDPLAYERADJUSTED", 
        colour: 10, 
        output: "damagemodifiers", 
        message0: "EASEDPLAYERADJUSTED", 
        message1: "expectedMaximumDamage: %1", 
        args1: [
            {
                type: "field_number", 
                name: "expectedMaximumDamage", 
                value: 30
            }
        ], 
        message2: "damageCap: %1", 
        args2: [
            {
                type: "field_number", 
                name: "damageCap", 
                value: 15
            }
        ], 
        message3: "playerScalingModifier: %1", 
        args3: [
            {
                type: "field_number", 
                name: "playerScalingModifier", 
                value: 0.5
            }
        ]
    }, 
    {
        type: "damagemodifiers_PLAYERADJUSTED", 
        colour: 10, 
        output: "damagemodifiers", 
        message0: "PLAYERADJUSTED", 
        message1: "playerScalingModifier: %1", 
        args1: [
            {
                type: "field_number", 
                name: "playerScalingModifier", 
                value: 0.5
            }
        ]
    }, 
    {
        type: "rewards_BASIC", 
        colour: 10, 
        output: "rewards", 
        message0: "BASIC", 
        message1: "experience: %1", 
        args1: [
            {
                type: "field_number", 
                name: "experience", 
                value: 100, 
                precision: 1
            }
        ], 
        message2: "commands: %1", 
        args2: [
            {
                type: "input_statement", 
                name: "commands_array", 
                check: [
                    "listtypes_string"
                ]
            }
        ], 
        message3: "items: %1", 
        args3: [
            {
                type: "input_statement", 
                name: "items", 
                check: "listtypes_ItemStackData"
            }
        ]
    }, 
    {
        type: "distributions_LOOT", 
        colour: 10, 
        previousStatement: "distributions", 
        nextStatement: "distributions", 
        message0: "LOOT", 
        message1: "chance: %1", 
        args1: [
            {
                type: "field_number", 
                name: "chance", 
                value: 0
            }
        ], 
        message2: "loottables: %1", 
        args2: [
            {
                type: "input_statement", 
                name: "loottables_array", 
                check: [
                    "listtypes_lootTable"
                ]
            }
        ]
    }, 
    {
        type: "distributions_CRAFTING", 
        colour: 10, 
        previousStatement: "distributions", 
        nextStatement: "distributions", 
        unimplemented: [
            "recipe: array item is a Property object", 
            "recipeKeys: ?"
        ], 
        message0: "CRAFTING", 
        message1: "Incomplete"
    }, 
    {
        type: "types_condition", 
        colour: 10, 
        output: "types_condition", 
        message0: "condition"
    }, 
    {
        type: "types_effect", 
        colour: 10, 
        output: "types_effect", 
        message0: "effect"
    }, 
    {
        type: "types_SpawnData", 
        colour: 10, 
        output: "types_SpawnData", 
        message0: "SpawnData", 
        message1: "enabled: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "enabled", 
                value: "false", 
                options: enums.booleans
            }
        ], 
        message2: "weighting: %1", 
        args2: [
            {
                type: "field_number", 
                name: "weighting", 
                value: 1, 
                precision: 1
            }
        ], 
        message3: "biomesWhitelist: %1", 
        args3: [
            {
                type: "field_dropdown_default", 
                name: "biomesWhitelist", 
                value: "true", 
                options: enums.booleans
            }
        ], 
        message4: "spaceNeeded: %1", 
        args4: [
            {
                type: "field_number", 
                name: "spaceNeeded", 
                value: 0, 
                precision: 1
            }
        ], 
        message5: "spawnOnAir: %1", 
        args5: [
            {
                type: "field_dropdown_default", 
                name: "spawnOnAir", 
                value: "false", 
                options: enums.booleans
            }
        ], 
        message6: "maxHeight: %1", 
        args6: [
            {
                type: "field_number", 
                name: "maxHeight", 
                value: -1
            }
        ], 
        message7: "biomes: %1", 
        args7: [
            {
                type: "input_statement", 
                name: "biomes_array", 
                check: [
                    "listtypes_biome"
                ]
            }
        ], 
        message8: "worlds: %1", 
        args8: [
            {
                type: "input_statement", 
                name: "worlds_array", 
                check: [
                    "listtypes_world"
                ]
            }
        ]
    }, 
    {
        type: "types_BossBarData", 
        colour: 10, 
        output: "types_BossBarData", 
        message0: "BossBarData", 
        message1: "enabled: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "enabled", 
                value: "false", 
                options: enums.booleans
            }
        ], 
        message2: "color: %1", 
        args2: [
            {
                type: "field_dropdown_default", 
                name: "color", 
                value: "PURPLE", 
                options: enums.bossBarColor
            }
        ], 
        message3: "style: %1", 
        args3: [
            {
                type: "field_dropdown_default", 
                name: "style", 
                value: "PROGRESS", 
                options: enums.bossBarStyle
            }
        ], 
        message4: "flags: %1", 
        args4: [
            {
                type: "input_statement", 
                name: "flags_array", 
                check: [
                    "listtypes_bossBarFlag"
                ]
            }
        ]
    }, 
    {
        type: "types_ItemAttributeData", 
        colour: 10, 
        output: "types_ItemAttributeData", 
        unimplemented: [
            "mapValue is not an enum or value type"
        ], 
        message0: "ItemAttributeData", 
        message1: "Incomplete"
    }, 
    {
        type: "types_EnchantmentData", 
        colour: 10, 
        output: "types_EnchantmentData", 
        message0: "EnchantmentData", 
        message1: "EnchantmentData: %1", 
        args1: [
            {
                type: "input_statement", 
                name: "VALUE", 
                check: "pairtypes_EnchantmentData"
            }
        ]
    }, 
    {
        type: "types_ItemMetaData", 
        colour: 10, 
        output: "types_ItemMetaData", 
        unimplemented: [
            "trim: ?", 
            "color: ?", 
            "book: ?", 
            "potion: ?"
        ], 
        message0: "ItemMetaData", 
        message1: "displayName: %1", 
        args1: [
            {
                type: "field_input", 
                name: "displayName", 
                text: ""
            }
        ], 
        message2: "isUnbreakable: %1", 
        args2: [
            {
                type: "field_dropdown_default", 
                name: "isUnbreakable", 
                value: "false", 
                options: enums.booleans
            }
        ], 
        message3: "durability: %1", 
        args3: [
            {
                type: "field_number", 
                name: "durability", 
                value: 0, 
                precision: 1
            }
        ], 
        message4: "customModelData: %1", 
        args4: [
            {
                type: "field_number", 
                name: "customModelData", 
                value: 0, 
                precision: 1
            }
        ], 
        message5: "attributes: %1", 
        args5: [
            {
                type: "input_value", 
                name: "attributes", 
                check: [
                    "types_ItemAttributeData"
                ]
            }
        ], 
        message6: "enchants: %1", 
        args6: [
            {
                type: "input_value", 
                name: "enchants", 
                check: [
                    "types_EnchantmentData"
                ]
            }
        ], 
        message7: "lore: %1", 
        args7: [
            {
                type: "input_statement", 
                name: "lore_array", 
                check: [
                    "listtypes_string"
                ]
            }
        ], 
        message8: "Incomplete"
    }, 
    {
        type: "types_ItemStackData", 
        colour: 10, 
        output: "types_ItemStackData", 
        message0: "ItemStackData", 
        message1: "type: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "type", 
                value: "STONE", 
                options: enums.material
            }
        ], 
        message2: "amount: %1", 
        args2: [
            {
                type: "field_number", 
                name: "amount", 
                value: 1, 
                precision: 1
            }
        ], 
        message3: "metadata: %1", 
        args3: [
            {
                type: "input_value", 
                name: "metadata", 
                check: [
                    "types_ItemMetaData"
                ]
            }
        ]
    }, 
    {
        type: "types_AttributeData", 
        colour: 10, 
        output: "types_AttributeData", 
        message0: "AttributeData", 
        message1: "AttributeData: %1", 
        args1: [
            {
                type: "input_statement", 
                name: "VALUE", 
                check: "pairtypes_AttributeData"
            }
        ]
    }, 
    {
        type: "types_EntityData", 
        colour: 10, 
        output: "types_EntityData", 
        unimplemented: [
            "extra: ?"
        ], 
        message0: "EntityData", 
        message1: "type: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "type", 
                value: "ZOMBIE", 
                options: enums.entity
            }
        ], 
        message2: "nametag: %1", 
        args2: [
            {
                type: "field_input", 
                name: "nametag", 
                text: ""
            }
        ], 
        message3: "shouldDespawn: %1", 
        args3: [
            {
                type: "field_dropdown_default", 
                name: "shouldDespawn", 
                value: "true", 
                options: enums.booleans
            }
        ], 
        message4: "passenger: %1", 
        args4: [
            {
                type: "input_value", 
                name: "passenger", 
                check: [
                    "types_EntityData"
                ]
            }
        ], 
        message5: "attributes: %1", 
        args5: [
            {
                type: "input_value", 
                name: "attributes", 
                check: [
                    "types_AttributeData"
                ]
            }
        ], 
        message6: "Incomplete"
    }, 
    {
        type: "types_VectorData", 
        colour: 10, 
        output: "types_VectorData", 
        message0: "VectorData", 
        message1: "x: %1", 
        args1: [
            {
                type: "field_number", 
                name: "x", 
                value: 0
            }
        ], 
        message2: "y: %1", 
        args2: [
            {
                type: "field_number", 
                name: "y", 
                value: 0
            }
        ], 
        message3: "z: %1", 
        args3: [
            {
                type: "field_number", 
                name: "z", 
                value: 0
            }
        ]
    }, 
    {
        type: "types_SoundData", 
        colour: 10, 
        output: "types_SoundData", 
        message0: "SoundData", 
        message1: "sound: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "sound", 
                value: "ENTITY_GENERIC_EXPLODE", 
                options: enums.sound
            }
        ], 
        message2: "volume: %1", 
        args2: [
            {
                type: "field_number", 
                name: "volume", 
                value: 1
            }
        ], 
        message3: "pitch: %1", 
        args3: [
            {
                type: "field_number", 
                name: "pitch", 
                value: 1
            }
        ]
    }, 
    {
        type: "types_PotionEffectData", 
        colour: 10, 
        output: "types_PotionEffectData", 
        message0: "PotionEffectData", 
        message1: "potency: %1", 
        args1: [
            {
                type: "field_number", 
                name: "potency", 
                value: 1, 
                precision: 1
            }
        ], 
        message2: "type: %1", 
        args2: [
            {
                type: "field_dropdown_default", 
                name: "type", 
                options: enums.potion
            }
        ], 
        message3: "ambient: %1", 
        args3: [
            {
                type: "field_dropdown_default", 
                name: "ambient", 
                value: "true", 
                options: enums.booleans
            }
        ], 
        message4: "hasParticles: %1", 
        args4: [
            {
                type: "field_dropdown_default", 
                name: "hasParticles", 
                value: "true", 
                options: enums.booleans
            }
        ], 
        message5: "duration: %1", 
        args5: [
            {
                type: "field_number", 
                name: "duration", 
                value: 10
            }
        ]
    }, 
    {
        type: "types_ParticleData", 
        colour: 10, 
        output: "types_ParticleData", 
        message0: "ParticleData", 
        message1: "particle: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "particle", 
                value: "BARRIER", 
                options: enums.particle
            }
        ], 
        message2: "numberOfParticles: %1", 
        args2: [
            {
                type: "field_number", 
                name: "numberOfParticles", 
                value: 1, 
                precision: 1
            }
        ]
    }, 
    {
        type: "types_BlockDataData", 
        colour: 10, 
        output: "types_BlockDataData", 
        message0: "BlockDataData", 
        message1: "type: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "type", 
                value: "STONE", 
                options: enums.material
            }
        ], 
        message2: "level: %1", 
        args2: [
            {
                type: "field_number", 
                name: "level", 
                value: -1, 
                precision: 1
            }
        ], 
        message3: "age: %1", 
        args3: [
            {
                type: "field_number", 
                name: "age", 
                value: -1, 
                precision: 1
            }
        ]
    }, 
    {
        type: "types_BlockDataComparison", 
        colour: 10, 
        output: "types_BlockDataComparison", 
        message0: "BlockDataComparison", 
        message1: "type: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "type", 
                value: "STONE", 
                options: enums.material
            }
        ], 
        message2: "level: %1", 
        args2: [
            {
                type: "input_value", 
                name: "level", 
                check: [
                    "types_range"
                ]
            }
        ], 
        message3: "age: %1", 
        args3: [
            {
                type: "input_value", 
                name: "age", 
                check: [
                    "types_range"
                ]
            }
        ], 
        message4: "types: %1", 
        args4: [
            {
                type: "input_statement", 
                name: "types_array", 
                check: [
                    "listtypes_material"
                ]
            }
        ]
    }, 
    {
        type: "types_LoreData", 
        colour: 10, 
        output: "types_LoreData", 
        message0: "LoreData"
    }, 
    {
        type: "types_EnchantComparisonData", 
        colour: 10, 
        output: "types_EnchantComparisonData", 
        unimplemented: [
            "mapValue is not an enum or value type"
        ], 
        message0: "EnchantComparisonData", 
        message1: "Incomplete"
    }, 
    {
        type: "types_ItemMetaComparisonData", 
        colour: 10, 
        output: "types_ItemMetaComparisonData", 
        unimplemented: [
            "lore: ?"
        ], 
        message0: "ItemMetaComparisonData", 
        message1: "displayName: %1", 
        args1: [
            {
                type: "field_input", 
                name: "displayName", 
                text: ".+"
            }
        ], 
        message2: "enchants: %1", 
        args2: [
            {
                type: "input_value", 
                name: "enchants", 
                check: [
                    "types_EnchantComparisonData"
                ]
            }
        ], 
        message3: "Incomplete"
    }, 
    {
        type: "types_ItemComparisonData", 
        colour: 10, 
        output: "types_ItemComparisonData", 
        message0: "ItemComparisonData", 
        message1: "type: %1", 
        args1: [
            {
                type: "field_dropdown_default", 
                name: "type", 
                value: "STONE", 
                options: enums.material
            }
        ], 
        message2: "amount: %1", 
        args2: [
            {
                type: "input_value", 
                name: "amount", 
                check: [
                    "types_range"
                ]
            }
        ], 
        message3: "metadata: %1", 
        args3: [
            {
                type: "input_value", 
                name: "metadata", 
                check: [
                    "types_ItemMetaComparisonData"
                ]
            }
        ], 
        message4: "types: %1", 
        args4: [
            {
                type: "input_statement", 
                name: "types_array", 
                check: [
                    "listtypes_material"
                ]
            }
        ]
    }, 
    {
        type: "types_range", 
        colour: 10, 
        output: "types_range", 
        message0: "range: %1 - %2", 
        args0: [
            {
                type: "field_number", 
                name: "MIN", 
                value: null
            }, 
            {
                type: "field_number", 
                name: "MAX", 
                value: null
            }
        ]
    }, 
    {
        type: "startpoint_hero", 
        message0: "Hero Name:%1", 
        args0: [
            {
                type: "field_input", 
                name: "SECTION_NAME", 
                text: "Exampleman"
            }
        ], 
        message1: "Coloured Name:%1", 
        args1: [
            {
                type: "field_input", 
                name: "colouredName", 
                text: "<red>Exampleman"
            }
        ], 
        message2: "Description:%1", 
        args2: [
            {
                type: "field_input", 
                name: "description", 
                text: "A description fit for an example"
            }
        ], 
        message3: "skills: %1", 
        args3: [
            {
                type: "input_statement", 
                name: "skills", 
                check: "skills"
            }
        ], 
        colour: 0
    }, 
    {
        type: "startpoint_boss", 
        message0: "Boss Name:%1", 
        args0: [
            {
                type: "field_input", 
                name: "SECTION_NAME", 
                text: "Exampleboss"
            }
        ], 
        message1: "Coloured Name:%1", 
        args1: [
            {
                type: "field_input", 
                name: "colouredName", 
                text: "<red>Exampleboss"
            }
        ], 
        message2: "Description:%1", 
        args2: [
            {
                type: "field_input", 
                name: "description", 
                text: "A description fit for an example"
            }
        ], 
        message3: "damage modifier: %1", 
        args3: [
            {
                type: "input_value", 
                name: "damagemodifier", 
                check: "damagemodifiers"
            }
        ], 
        message4: "entity: %1", 
        args4: [
            {
                type: "input_value", 
                name: "entity", 
                check: "types_EntityData"
            }
        ], 
        message5: "skills: %1", 
        args5: [
            {
                type: "input_statement", 
                name: "skills", 
                check: "skills"
            }
        ], 
        message6: "reward: %1", 
        args6: [
            {
                type: "input_value", 
                name: "reward", 
                check: "rewards"
            }
        ], 
        message7: "bossbar: %1", 
        args7: [
            {
                type: "input_value", 
                name: "bossbar", 
                check: "types_BossBarData"
            }
        ], 
        colour: 0
    }, 
    {
        type: "startpoint_item", 
        message0: "Item Name:%1", 
        args0: [
            {
                type: "field_input", 
                name: "SECTION_NAME", 
                text: "Exampleitem"
            }
        ], 
        message1: "item: %1", 
        args1: [
            {
                type: "input_value", 
                name: "item", 
                check: "types_ItemStackData"
            }
        ], 
        message2: "distribution: %1", 
        args2: [
            {
                type: "input_statement", 
                name: "distribution", 
                check: "distributions"
            }
        ], 
        message3: "slots (WIP, NOT WORKING YET): %1", 
        args3: [
            {
                type: "input_value", 
                name: "slots", 
                check: "skills"
            }
        ], 
        message4: "skills: %1", 
        args4: [
            {
                type: "input_statement", 
                name: "skills", 
                check: "skills"
            }
        ], 
        colour: 0
    }, 
    {
        type: "listtypes_biome", 
        colour: 0, 
        previousStatement: "listtypes_biome", 
        nextStatement: "listtypes_biome", 
        message0: "biome: %1", 
        args0: [
            {
                type: "field_dropdown_default", 
                name: "VALUE", 
                options: enums.biome
            }
        ]
    }, 
    {
        type: "listtypes_world", 
        colour: 0, 
        previousStatement: "listtypes_world", 
        nextStatement: "listtypes_world", 
        message0: "world: %1", 
        args0: [
            {
                type: "field_dropdown_default", 
                name: "VALUE", 
                options: enums.world
            }
        ]
    }, 
    {
        type: "listtypes_bossBarFlag", 
        colour: 0, 
        previousStatement: "listtypes_bossBarFlag", 
        nextStatement: "listtypes_bossBarFlag", 
        message0: "bossBarFlag: %1", 
        args0: [
            {
                type: "field_dropdown_default", 
                name: "VALUE", 
                options: enums.bossBarFlag
            }
        ]
    }, 
    {
        type: "listtypes_string", 
        colour: 0, 
        previousStatement: "listtypes_string", 
        nextStatement: "listtypes_string", 
        message0: "string: %1", 
        args0: [
            {
                type: "field_input", 
                name: "VALUE"
            }
        ]
    }, 
    {
        type: "listtypes_material", 
        colour: 0, 
        previousStatement: "listtypes_material", 
        nextStatement: "listtypes_material", 
        message0: "material: %1", 
        args0: [
            {
                type: "field_dropdown_default", 
                name: "VALUE", 
                options: enums.material
            }
        ]
    }, 
    {
        type: "listtypes_damageCause", 
        colour: 0, 
        previousStatement: "listtypes_damageCause", 
        nextStatement: "listtypes_damageCause", 
        message0: "damageCause: %1", 
        args0: [
            {
                type: "field_dropdown_default", 
                name: "VALUE", 
                options: enums.damageCause
            }
        ]
    }, 
    {
        type: "listtypes_action", 
        colour: 0, 
        previousStatement: "listtypes_action", 
        nextStatement: "listtypes_action", 
        message0: "action: %1", 
        args0: [
            {
                type: "field_dropdown_default", 
                name: "VALUE", 
                options: enums.action
            }
        ]
    }, 
    {
        type: "listtypes_potion", 
        colour: 0, 
        previousStatement: "listtypes_potion", 
        nextStatement: "listtypes_potion", 
        message0: "potion: %1", 
        args0: [
            {
                type: "field_dropdown_default", 
                name: "VALUE", 
                options: enums.potion
            }
        ]
    }, 
    {
        type: "listtypes_entity", 
        colour: 0, 
        previousStatement: "listtypes_entity", 
        nextStatement: "listtypes_entity", 
        message0: "entity: %1", 
        args0: [
            {
                type: "field_dropdown_default", 
                name: "VALUE", 
                options: enums.entity
            }
        ]
    }, 
    {
        type: "listtypes_blockFace", 
        colour: 0, 
        previousStatement: "listtypes_blockFace", 
        nextStatement: "listtypes_blockFace", 
        message0: "blockFace: %1", 
        args0: [
            {
                type: "field_dropdown_default", 
                name: "VALUE", 
                options: enums.blockFace
            }
        ]
    }, 
    {
        type: "listtypes_ItemStackData", 
        colour: 0, 
        previousStatement: "listtypes_ItemStackData", 
        nextStatement: "listtypes_ItemStackData", 
        message0: "ItemStackData: %1", 
        args0: [
            {
                type: "input_value", 
                name: "VALUE", 
                check: [
                    "types_ItemStackData"
                ]
            }
        ]
    }, 
    {
        type: "listtypes_lootTable", 
        colour: 0, 
        previousStatement: "listtypes_lootTable", 
        nextStatement: "listtypes_lootTable", 
        message0: "lootTable: %1", 
        args0: [
            {
                type: "field_dropdown_default", 
                name: "VALUE", 
                options: enums.lootTable
            }
        ]
    }, 
    {
        type: "pairtypes_EnchantmentData", 
        colour: 0, 
        previousStatement: "pairtypes_EnchantmentData", 
        nextStatement: "pairtypes_EnchantmentData", 
        message0: "EnchantmentData %1: %2", 
        args0: [
            {
                type: "field_dropdown_default", 
                name: "SECTION_NAME", 
                options: enums.enchantment
            }, 
            {
                type: "field_number", 
                name: "VALUE", 
                precision: 1
            }
        ]
    }, 
    {
        type: "pairtypes_AttributeData", 
        colour: 0, 
        previousStatement: "pairtypes_AttributeData", 
        nextStatement: "pairtypes_AttributeData", 
        message0: "AttributeData %1: %2", 
        args0: [
            {
                type: "field_dropdown_default", 
                name: "SECTION_NAME", 
                options: enums.attribute
            }, 
            {
                type: "field_number", 
                name: "VALUE", 
                value: -1
            }
        ]
    }
])
