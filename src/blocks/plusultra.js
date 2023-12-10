import * as Blockly from 'blockly'
import enums from './enums.js'

export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
    {
        type: "triggers_DAMAGEDENTITY", 
        colour: 120, 
        output: "triggers", 
        isAllImplemented: true, 
        message0: "DAMAGEDENTITY"
    }, 
    {
        type: "triggers_DAMAGEDBYENTITY", 
        colour: 120, 
        output: "triggers", 
        isAllImplemented: true, 
        message0: "DAMAGEDBYENTITY"
    }, 
    {
        type: "triggers_DAMAGEDBYPROJECTILE", 
        colour: 120, 
        output: "triggers", 
        isAllImplemented: true, 
        message0: "DAMAGEDBYPROJECTILE", 
        message1: "onlyProjectiles: %1", 
        args1: [
            {
                type: "field_dropdown", 
                name: "onlyProjectiles", 
                value: "false", 
                options: enums.booleans
            }
        ]
    }, 
    {
        type: "triggers_DAMAGEDENTITYWITHPROJECTILE", 
        colour: 120, 
        output: "triggers", 
        isAllImplemented: true, 
        message0: "DAMAGEDENTITYWITHPROJECTILE", 
        message1: "onlyProjectiles: %1", 
        args1: [
            {
                type: "field_dropdown", 
                name: "onlyProjectiles", 
                value: "false", 
                options: enums.booleans
            }
        ]
    }, 
    {
        type: "triggers_LAUNCHPROJECTILE", 
        colour: 120, 
        output: "triggers", 
        isAllImplemented: true, 
        message0: "LAUNCHPROJECTILE"
    }, 
    {
        type: "triggers_PROJECTILEHIT", 
        colour: 120, 
        output: "triggers", 
        isAllImplemented: true, 
        message0: "PROJECTILEHIT"
    }, 
    {
        type: "triggers_DAMAGED", 
        colour: 120, 
        output: "triggers", 
        isAllImplemented: false, 
        message0: "DAMAGED"
    }, 
    {
        type: "triggers_SNEAK", 
        colour: 120, 
        output: "triggers", 
        isAllImplemented: true, 
        message0: "SNEAK"
    }, 
    {
        type: "triggers_TOGGLEGLIDE", 
        colour: 120, 
        output: "triggers", 
        isAllImplemented: true, 
        message0: "TOGGLEGLIDE"
    }, 
    {
        type: "triggers_PLAYERJUMP", 
        colour: 120, 
        output: "triggers", 
        isAllImplemented: true, 
        message0: "PLAYERJUMP"
    }, 
    {
        type: "triggers_LOOP", 
        colour: 120, 
        output: "triggers", 
        isAllImplemented: true, 
        message0: "LOOP", 
        message1: "period: %1", 
        args1: [
            {
                type: "field_number", 
                name: "period", 
                value: 1
            }
        ]
    }, 
    {
        type: "triggers_COMBAT", 
        colour: 120, 
        output: "triggers", 
        isAllImplemented: true, 
        message0: "COMBAT"
    }, 
    {
        type: "triggers_DEATH", 
        colour: 120, 
        output: "triggers", 
        isAllImplemented: true, 
        message0: "DEATH"
    }, 
    {
        type: "triggers_SPAWN", 
        colour: 120, 
        output: "triggers", 
        isAllImplemented: true, 
        message0: "SPAWN"
    }, 
    {
        type: "triggers_TARGET", 
        colour: 120, 
        output: "triggers", 
        isAllImplemented: true, 
        message0: "TARGET"
    }, 
    {
        type: "triggers_TARGETED", 
        colour: 120, 
        output: "triggers", 
        isAllImplemented: true, 
        message0: "TARGETED"
    }, 
    {
        type: "triggers_VEHICLE", 
        colour: 120, 
        output: "triggers", 
        isAllImplemented: true, 
        message0: "VEHICLE"
    }, 
    {
        type: "triggers_ENTERVEHICLE", 
        colour: 120, 
        output: "triggers", 
        isAllImplemented: true, 
        message0: "ENTERVEHICLE"
    }, 
    {
        type: "triggers_BECOMEVEHICLE", 
        colour: 120, 
        output: "triggers", 
        isAllImplemented: true, 
        message0: "BECOMEVEHICLE"
    }, 
    {
        type: "triggers_EXITVEHICLE", 
        colour: 120, 
        output: "triggers", 
        isAllImplemented: true, 
        message0: "EXITVEHICLE"
    }, 
    {
        type: "triggers_PLAYERJOIN", 
        colour: 120, 
        output: "triggers", 
        isAllImplemented: true, 
        message0: "PLAYERJOIN"
    }, 
    {
        type: "triggers_PLAYERQUIT", 
        colour: 120, 
        output: "triggers", 
        isAllImplemented: true, 
        message0: "PLAYERQUIT"
    }, 
    {
        type: "triggers_PROJECTILECOMBAT", 
        colour: 120, 
        output: "triggers", 
        isAllImplemented: true, 
        message0: "PROJECTILECOMBAT", 
        message1: "onlyProjectiles: %1", 
        args1: [
            {
                type: "field_dropdown", 
                name: "onlyProjectiles", 
                value: "false", 
                options: enums.booleans
            }
        ]
    }, 
    {
        type: "triggers_TAME", 
        colour: 120, 
        output: "triggers", 
        isAllImplemented: true, 
        message0: "TAME"
    }, 
    {
        type: "triggers_INTERACT", 
        colour: 120, 
        output: "triggers", 
        isAllImplemented: false, 
        message0: "INTERACT"
    }, 
    {
        type: "triggers_KILL", 
        colour: 120, 
        output: "triggers", 
        isAllImplemented: true, 
        message0: "KILL"
    }, 
    {
        type: "triggers_POTIONEFFECT", 
        colour: 120, 
        output: "triggers", 
        isAllImplemented: false, 
        message0: "POTIONEFFECT"
    }, 
    {
        type: "triggers_INTERACTENTITY", 
        colour: 120, 
        output: "triggers", 
        isAllImplemented: true, 
        message0: "INTERACTENTITY"
    }, 
    {
        type: "triggers_RIPTIDE", 
        colour: 120, 
        output: "triggers", 
        isAllImplemented: true, 
        message0: "RIPTIDE"
    }, 
    {
        type: "triggers_CHANGEMAINHAND", 
        colour: 120, 
        output: "triggers", 
        isAllImplemented: true, 
        message0: "CHANGEMAINHAND"
    }, 
    {
        type: "triggers_EQUIPARMOR", 
        colour: 120, 
        output: "triggers", 
        isAllImplemented: true, 
        message0: "EQUIPARMOR"
    }, 
    {
        type: "triggers_SPRINT", 
        colour: 120, 
        output: "triggers", 
        isAllImplemented: true, 
        message0: "SPRINT"
    }, 
    {
        type: "triggers_BLOCKBREAK", 
        colour: 120, 
        output: "triggers", 
        isAllImplemented: true, 
        message0: "BLOCKBREAK"
    }, 
    {
        type: "triggers_TOTEM", 
        colour: 120, 
        output: "triggers", 
        isAllImplemented: true, 
        message0: "TOTEM"
    }, 
    {
        type: "triggers_CONSUME", 
        colour: 120, 
        output: "triggers", 
        isAllImplemented: true, 
        message0: "CONSUME"
    }, 
    {
        type: "triggers_MOVE", 
        colour: 120, 
        output: "triggers", 
        isAllImplemented: true, 
        message0: "MOVE"
    }, 
    {
        type: "triggers_SWAPHANDS", 
        colour: 120, 
        output: "triggers", 
        isAllImplemented: true, 
        message0: "SWAPHANDS"
    }, 
    {
        type: "conditions_HEALTH", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        isAllImplemented: false, 
        message0: "HEALTH", 
        message1: "minimumHealthPercentage: %1", 
        args1: [
            {
                type: "field_number", 
                name: "minimumHealthPercentage", 
                value: 0
            }
        ], 
        message2: "maximumHealthPercentage: %1", 
        args2: [
            {
                type: "field_number", 
                name: "maximumHealthPercentage", 
                value: 100
            }
        ]
    }, 
    {
        type: "conditions_CHANCE", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        isAllImplemented: true, 
        message0: "CHANCE", 
        message1: "chance: %1", 
        args1: [
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
        isAllImplemented: true, 
        message0: "COOLDOWN", 
        message1: "cooldown: %1", 
        args1: [
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
        isAllImplemented: false, 
        message0: "ENTITY", 
        message1: "whitelist: %1", 
        args1: [
            {
                type: "field_dropdown", 
                name: "whitelist", 
                value: "true", 
                options: enums.booleans
            }
        ]
    }, 
    {
        type: "conditions_SIZE", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        isAllImplemented: true, 
        message0: "SIZE", 
        message1: "minimumSize: %1", 
        args1: [
            {
                type: "field_number", 
                name: "minimumSize", 
                value: 0, 
                precision: 1
            }
        ], 
        message2: "maximumSize: %1", 
        args2: [
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
        isAllImplemented: true, 
        message0: "NOT", 
        message1: "condition: %1", 
        args1: [
            {
                type: "input_value", 
                name: "condition", 
                types: [
                    "condition"
                ]
            }
        ]
    }, 
    {
        type: "conditions_SNEAK", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        isAllImplemented: true, 
        message0: "SNEAK", 
        message1: "sneak: %1", 
        args1: [
            {
                type: "field_dropdown", 
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
        isAllImplemented: false, 
        message0: "TIME", 
        message1: "minimumTime: %1", 
        args1: [
            {
                type: "field_number", 
                name: "minimumTime", 
                value: 0, 
                precision: 1
            }
        ], 
        message2: "maximumTime: %1", 
        args2: [
            {
                type: "field_number", 
                name: "maximumTime", 
                value: 24000, 
                precision: 1
            }
        ]
    }, 
    {
        type: "conditions_ONGROUND", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        isAllImplemented: true, 
        message0: "ONGROUND", 
        message1: "grounded: %1", 
        args1: [
            {
                type: "field_dropdown", 
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
        isAllImplemented: true, 
        message0: "GLIDING", 
        message1: "shouldGlide: %1", 
        args1: [
            {
                type: "field_dropdown", 
                name: "shouldGlide", 
                value: "true", 
                options: enums.booleans
            }
        ], 
        message2: "glide: %1", 
        args2: [
            {
                type: "field_dropdown", 
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
        isAllImplemented: false, 
        message0: "BIOME"
    }, 
    {
        type: "conditions_METADATA", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        isAllImplemented: true, 
        message0: "METADATA", 
        message1: "comparison: %1", 
        args1: [
            {
                type: "field_dropdown", 
                name: "comparison", 
                value: "EQUALS", 
                options: enums.comparison
            }
        ], 
        message2: "value: %1", 
        args2: [
            {
                type: "field_number", 
                name: "value", 
                value: 0
            }
        ], 
        message3: "variable: %1", 
        args3: [
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
        isAllImplemented: true, 
        message0: "NPC", 
        message1: "isNPC: %1", 
        args1: [
            {
                type: "field_dropdown", 
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
        isAllImplemented: true, 
        message0: "WEATHER"
    }, 
    {
        type: "conditions_INBLOCK", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        isAllImplemented: false, 
        message0: "INBLOCK"
    }, 
    {
        type: "conditions_WORLD", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        isAllImplemented: false, 
        message0: "WORLD"
    }, 
    {
        type: "conditions_TAMED", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        isAllImplemented: true, 
        message0: "TAMED", 
        message1: "checkOwner: %1", 
        args1: [
            {
                type: "field_dropdown", 
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
        isAllImplemented: true, 
        message0: "FLYING"
    }, 
    {
        type: "conditions_FLY", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        isAllImplemented: true, 
        message0: "FLY"
    }, 
    {
        type: "conditions_HEIGHT", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        isAllImplemented: false, 
        message0: "HEIGHT"
    }, 
    {
        type: "conditions_BLOCK", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        isAllImplemented: false, 
        message0: "BLOCK"
    }, 
    {
        type: "conditions_ITEM", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        isAllImplemented: false, 
        message0: "ITEM", 
        message1: "item: %1", 
        args1: [
            {
                type: "input_value", 
                name: "item", 
                types: [
                    "ItemComparisonData"
                ]
            }
        ]
    }, 
    {
        type: "conditions_OR", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        isAllImplemented: false, 
        message0: "OR"
    }, 
    {
        type: "conditions_VISIBILITY", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        isAllImplemented: true, 
        message0: "VISIBILITY", 
        message1: "maxDistance: %1", 
        args1: [
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
        isAllImplemented: false, 
        message0: "TEMPERATURE"
    }, 
    {
        type: "conditions_DISTANCE", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        isAllImplemented: false, 
        message0: "DISTANCE"
    }, 
    {
        type: "conditions_SHIELDED", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        isAllImplemented: true, 
        message0: "SHIELDED"
    }, 
    {
        type: "conditions_ITEMWRAPPER", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        isAllImplemented: false, 
        message0: "ITEMWRAPPER"
    }, 
    {
        type: "conditions_SWIMMING", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        isAllImplemented: true, 
        message0: "SWIMMING"
    }, 
    {
        type: "conditions_SPEED", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        isAllImplemented: false, 
        message0: "SPEED"
    }, 
    {
        type: "conditions_SHOOTER", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        isAllImplemented: true, 
        message0: "SHOOTER"
    }, 
    {
        type: "conditions_HERO", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        isAllImplemented: false, 
        message0: "HERO"
    }, 
    {
        type: "conditions_BOSS", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        isAllImplemented: false, 
        message0: "BOSS"
    }, 
    {
        type: "conditions_SKILLITEM", 
        colour: 35, 
        previousStatement: "conditions", 
        nextStatement: "conditions", 
        isAllImplemented: true, 
        message0: "SKILLITEM", 
        message1: "skillItem: %1", 
        args1: [
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
        isAllImplemented: false, 
        message0: "ITEMLEVEL"
    }, 
    {
        type: "effects_DAMAGE", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        isAllImplemented: true, 
        message0: "DAMAGE", 
        message1: "damage: %1", 
        args1: [
            {
                type: "field_number", 
                name: "damage", 
                value: 5
            }
        ], 
        message2: "cause: %1", 
        args2: [
            {
                type: "field_dropdown", 
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
        isAllImplemented: false, 
        message0: "AOE", 
        message1: "radius: %1", 
        args1: [
            {
                type: "field_number", 
                name: "radius", 
                value: 5
            }
        ]
    }, 
    {
        type: "effects_VELOCITY", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        isAllImplemented: true, 
        message0: "VELOCITY", 
        message1: "operation: %1", 
        args1: [
            {
                type: "field_dropdown", 
                name: "operation", 
                options: enums.operation
            }
        ], 
        message2: "value: %1", 
        args2: [
            {
                type: "field_number", 
                name: "value", 
                value: 1
            }
        ], 
        message3: "velocity: %1", 
        args3: [
            {
                type: "field_number", 
                name: "velocity", 
                value: 1
            }
        ], 
        message4: "component: %1", 
        args4: [
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
        isAllImplemented: true, 
        message0: "CANCEL"
    }, 
    {
        type: "effects_GLIDING", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        isAllImplemented: true, 
        message0: "GLIDING", 
        message1: "glide: %1", 
        args1: [
            {
                type: "field_dropdown", 
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
        isAllImplemented: false, 
        message0: "WAIT", 
        message1: "delay: %1", 
        args1: [
            {
                type: "field_number", 
                name: "delay", 
                value: 1
            }
        ]
    }, 
    {
        type: "effects_POTION", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        isAllImplemented: true, 
        message0: "POTION", 
        message1: "potion: %1", 
        args1: [
            {
                type: "input_value", 
                name: "potion", 
                types: [
                    "PotionEffectData"
                ]
            }
        ]
    }, 
    {
        type: "effects_WEB", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        isAllImplemented: true, 
        message0: "WEB", 
        message1: "duration: %1", 
        args1: [
            {
                type: "field_number", 
                name: "duration", 
                value: -1
            }
        ], 
        message2: "block: %1", 
        args2: [
            {
                type: "field_dropdown", 
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
        isAllImplemented: true, 
        message0: "BLOCKENTITY", 
        message1: "duration: %1", 
        args1: [
            {
                type: "field_number", 
                name: "duration", 
                value: -1
            }
        ], 
        message2: "block: %1", 
        args2: [
            {
                type: "field_dropdown", 
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
        isAllImplemented: true, 
        message0: "ARROW", 
        message1: "velocity: %1", 
        args1: [
            {
                type: "field_number", 
                name: "velocity", 
                value: 1
            }
        ], 
        message2: "entity: %1", 
        args2: [
            {
                type: "field_dropdown", 
                name: "entity", 
                value: "arrow", 
                options: enums.entity
            }
        ], 
        message3: "damage: %1", 
        args3: [
            {
                type: "field_number", 
                name: "damage", 
                value: 4, 
                precision: 1
            }
        ], 
        message4: "fireTicks: %1", 
        args4: [
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
        isAllImplemented: true, 
        message0: "ATTRIBUTE", 
        message1: "operation: %1", 
        args1: [
            {
                type: "field_dropdown", 
                name: "operation", 
                options: enums.operation
            }
        ], 
        message2: "value: %1", 
        args2: [
            {
                type: "field_number", 
                name: "value", 
                value: 1
            }
        ], 
        message3: "attribute: %1", 
        args3: [
            {
                type: "field_dropdown", 
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
        isAllImplemented: true, 
        message0: "LAUNCH", 
        message1: "entity: %1", 
        args1: [
            {
                type: "field_dropdown", 
                name: "entity", 
                value: "FIREBALL", 
                options: enums.entity
            }
        ], 
        message2: "velocity: %1", 
        args2: [
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
        isAllImplemented: true, 
        message0: "MESSAGE", 
        message1: "message: %1", 
        args1: [
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
        isAllImplemented: true, 
        message0: "PICKUP"
    }, 
    {
        type: "effects_REPULSE", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        isAllImplemented: true, 
        message0: "REPULSE", 
        message1: "velocity: %1", 
        args1: [
            {
                type: "field_number", 
                name: "velocity", 
                value: 1
            }
        ], 
        message2: "add: %1", 
        args2: [
            {
                type: "field_dropdown", 
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
        isAllImplemented: true, 
        message0: "RESIZE", 
        message1: "operation: %1", 
        args1: [
            {
                type: "field_dropdown", 
                name: "operation", 
                options: enums.operation
            }
        ], 
        message2: "value: %1", 
        args2: [
            {
                type: "field_number", 
                name: "value", 
                value: 1
            }
        ], 
        message3: "retainHealth: %1", 
        args3: [
            {
                type: "field_dropdown", 
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
        isAllImplemented: true, 
        message0: "SMITE", 
        message1: "fake: %1", 
        args1: [
            {
                type: "field_dropdown", 
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
        isAllImplemented: true, 
        message0: "LIGHTNING", 
        message1: "fake: %1", 
        args1: [
            {
                type: "field_dropdown", 
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
        isAllImplemented: true, 
        message0: "FLING", 
        message1: "operation: %1", 
        args1: [
            {
                type: "field_dropdown", 
                name: "operation", 
                options: enums.operation
            }
        ], 
        message2: "value: %1", 
        args2: [
            {
                type: "field_number", 
                name: "value", 
                value: 1
            }
        ], 
        message3: "velocity: %1", 
        args3: [
            {
                type: "field_number", 
                name: "velocity", 
                value: 1
            }
        ], 
        message4: "component: %1", 
        args4: [
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
        isAllImplemented: true, 
        message0: "METADATA", 
        message1: "operation: %1", 
        args1: [
            {
                type: "field_dropdown", 
                name: "operation", 
                options: enums.operation
            }
        ], 
        message2: "value: %1", 
        args2: [
            {
                type: "field_number", 
                name: "value", 
                value: 1
            }
        ], 
        message3: "variable: %1", 
        args3: [
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
        isAllImplemented: true, 
        message0: "GIVEITEM", 
        message1: "dropIfFull: %1", 
        args1: [
            {
                type: "field_dropdown", 
                name: "dropIfFull", 
                value: "true", 
                options: enums.booleans
            }
        ], 
        message2: "item: %1", 
        args2: [
            {
                type: "input_value", 
                name: "item", 
                types: [
                    "ItemStackData"
                ]
            }
        ]
    }, 
    {
        type: "effects_SCRAMBLEINVENTORY", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        isAllImplemented: true, 
        message0: "SCRAMBLEINVENTORY"
    }, 
    {
        type: "effects_RANDOMTELEPORT", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        isAllImplemented: true, 
        message0: "RANDOMTELEPORT", 
        message1: "minDistance: %1", 
        args1: [
            {
                type: "field_number", 
                name: "minDistance", 
                value: 5
            }
        ], 
        message2: "maxDistance: %1", 
        args2: [
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
        isAllImplemented: true, 
        message0: "PROJECTILE", 
        message1: "entity: %1", 
        args1: [
            {
                type: "input_value", 
                name: "entity", 
                types: [
                    "EntityData"
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
        ]
    }, 
    {
        type: "effects_SOUND", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        isAllImplemented: true, 
        message0: "SOUND", 
        message1: "sound: %1", 
        args1: [
            {
                type: "input_value", 
                name: "sound", 
                types: [
                    "SoundData"
                ]
            }
        ]
    }, 
    {
        type: "effects_COMMAND", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        isAllImplemented: false, 
        message0: "COMMAND", 
        message1: "executor: %1", 
        args1: [
            {
                type: "field_input", 
                name: "executor", 
                text: "CONSOLE"
            }
        ]
    }, 
    {
        type: "effects_LUNGE", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        isAllImplemented: true, 
        message0: "LUNGE", 
        message1: "horizontalVelocity: %1", 
        args1: [
            {
                type: "field_number", 
                name: "horizontalVelocity", 
                value: 0
            }
        ], 
        message2: "verticalVelocity: %1", 
        args2: [
            {
                type: "field_number", 
                name: "verticalVelocity", 
                value: 0
            }
        ], 
        message3: "overwrite: %1", 
        args3: [
            {
                type: "field_dropdown", 
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
        isAllImplemented: false, 
        message0: "NEAREST", 
        message1: "radius: %1", 
        args1: [
            {
                type: "field_number", 
                name: "radius", 
                value: 5
            }
        ]
    }, 
    {
        type: "effects_SHOOTER", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        isAllImplemented: false, 
        message0: "SHOOTER", 
        message1: "onlyProjectiles: %1", 
        args1: [
            {
                type: "field_dropdown", 
                name: "onlyProjectiles", 
                value: "true", 
                options: enums.booleans
            }
        ]
    }, 
    {
        type: "effects_KNOCKBACK", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        isAllImplemented: true, 
        message0: "KNOCKBACK", 
        message1: "multiplier: %1", 
        args1: [
            {
                type: "field_number", 
                name: "multiplier", 
                value: 1
            }
        ], 
        message2: "overwriteCurrentVelocity: %1", 
        args2: [
            {
                type: "field_dropdown", 
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
        isAllImplemented: true, 
        message0: "IGNITE", 
        message1: "fireTicks: %1", 
        args1: [
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
        isAllImplemented: true, 
        message0: "FIRE", 
        message1: "fireTicks: %1", 
        args1: [
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
        isAllImplemented: true, 
        message0: "TARGET"
    }, 
    {
        type: "effects_SWAP", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        isAllImplemented: true, 
        message0: "SWAP"
    }, 
    {
        type: "effects_LOCATIONCUBE", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        isAllImplemented: false, 
        message0: "LOCATIONCUBE", 
        message1: "verticalRadius: %1", 
        args1: [
            {
                type: "field_number", 
                name: "verticalRadius", 
                value: 0, 
                precision: 1
            }
        ], 
        message2: "horizontalRadius: %1", 
        args2: [
            {
                type: "field_number", 
                name: "horizontalRadius", 
                value: 0, 
                precision: 1
            }
        ], 
        message3: "offset: %1", 
        args3: [
            {
                type: "input_value", 
                name: "offset", 
                types: [
                    "VectorData"
                ]
            }
        ]
    }, 
    {
        type: "effects_PLACEBLOCK", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        isAllImplemented: true, 
        message0: "PLACEBLOCK", 
        message1: "material: %1", 
        args1: [
            {
                type: "field_dropdown", 
                name: "material", 
                value: null, 
                options: enums.material
            }
        ], 
        message2: "block: %1", 
        args2: [
            {
                type: "input_value", 
                name: "block", 
                types: [
                    "BlockDataData"
                ]
            }
        ], 
        message3: "updatePhysics: %1", 
        args3: [
            {
                type: "field_dropdown", 
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
        ]
    }, 
    {
        type: "effects_SPAWNENTITY", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        isAllImplemented: true, 
        message0: "SPAWNENTITY", 
        message1: "entity: %1", 
        args1: [
            {
                type: "input_value", 
                name: "entity", 
                types: [
                    "EntityData"
                ]
            }
        ]
    }, 
    {
        type: "effects_REMOVEPOTION", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        isAllImplemented: false, 
        message0: "REMOVEPOTION"
    }, 
    {
        type: "effects_TELEPORT", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        isAllImplemented: true, 
        message0: "TELEPORT"
    }, 
    {
        type: "effects_RAYTRACE", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        isAllImplemented: false, 
        message0: "RAYTRACE", 
        message1: "maxDistance: %1", 
        args1: [
            {
                type: "field_number", 
                name: "maxDistance", 
                value: 10, 
                precision: 1
            }
        ], 
        message2: "alwaysHit: %1", 
        args2: [
            {
                type: "field_dropdown", 
                name: "alwaysHit", 
                value: "true", 
                options: enums.booleans
            }
        ], 
        message3: "ignorePassanles: %1", 
        args3: [
            {
                type: "field_dropdown", 
                name: "ignorePassanles", 
                value: "true", 
                options: enums.booleans
            }
        ], 
        message4: "raySize: %1", 
        args4: [
            {
                type: "field_number", 
                name: "raySize", 
                value: 1
            }
        ], 
        message5: "collisionMode: %1", 
        args5: [
            {
                type: "field_dropdown", 
                name: "collisionMode", 
                value: "NEVER", 
                options: enums.collisionMode
            }
        ]
    }, 
    {
        type: "effects_TIMER", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        isAllImplemented: false, 
        message0: "TIMER", 
        message1: "delay: %1", 
        args1: [
            {
                type: "field_number", 
                name: "delay", 
                value: 1
            }
        ], 
        message2: "period: %1", 
        args2: [
            {
                type: "field_number", 
                name: "period", 
                value: 1
            }
        ], 
        message3: "numberOfRepeats: %1", 
        args3: [
            {
                type: "field_number", 
                name: "numberOfRepeats", 
                value: 1, 
                precision: 1
            }
        ]
    }, 
    {
        type: "effects_REMOVEENTITY", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        isAllImplemented: true, 
        message0: "REMOVEENTITY"
    }, 
    {
        type: "effects_ITEMSTACK", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        isAllImplemented: false, 
        message0: "ITEMSTACK"
    }, 
    {
        type: "effects_ITEMAMOUNT", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        isAllImplemented: true, 
        message0: "ITEMAMOUNT", 
        message1: "operation: %1", 
        args1: [
            {
                type: "field_dropdown", 
                name: "operation", 
                options: enums.operation
            }
        ], 
        message2: "value: %1", 
        args2: [
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
        isAllImplemented: false, 
        message0: "SWITCHEROO"
    }, 
    {
        type: "effects_LOCATIONOFFSET", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        isAllImplemented: false, 
        message0: "LOCATIONOFFSET", 
        message1: "offset: %1", 
        args1: [
            {
                type: "input_value", 
                name: "offset", 
                types: [
                    "VectorData"
                ]
            }
        ]
    }, 
    {
        type: "effects_BONEMEAL", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        isAllImplemented: false, 
        message0: "BONEMEAL"
    }, 
    {
        type: "effects_HUNGER", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        isAllImplemented: true, 
        message0: "HUNGER", 
        message1: "operation: %1", 
        args1: [
            {
                type: "field_dropdown", 
                name: "operation", 
                options: enums.operation
            }
        ], 
        message2: "value: %1", 
        args2: [
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
        isAllImplemented: true, 
        message0: "LOSETARGET"
    }, 
    {
        type: "effects_VEINMINER", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        isAllImplemented: false, 
        message0: "VEINMINER", 
        message1: "delay: %1", 
        args1: [
            {
                type: "field_number", 
                name: "delay", 
                value: 0.5
            }
        ], 
        message2: "allowMultiTypeVein: %1", 
        args2: [
            {
                type: "field_dropdown", 
                name: "allowMultiTypeVein", 
                value: "false", 
                options: enums.booleans
            }
        ], 
        message3: "limit: %1", 
        args3: [
            {
                type: "field_number", 
                name: "limit", 
                value: 10, 
                precision: 1
            }
        ]
    }, 
    {
        type: "effects_ACTIONBAR", 
        colour: 295, 
        previousStatement: "effects", 
        nextStatement: "effects", 
        isAllImplemented: true, 
        message0: "ACTIONBAR", 
        message1: "message: %1", 
        args1: [
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
        isAllImplemented: true, 
        message0: "FREEZE", 
        message1: "operation: %1", 
        args1: [
            {
                type: "field_dropdown", 
                name: "operation", 
                options: enums.operation
            }
        ], 
        message2: "value: %1", 
        args2: [
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
        isAllImplemented: true, 
        message0: "HEALTH", 
        message1: "operation: %1", 
        args1: [
            {
                type: "field_dropdown", 
                name: "operation", 
                options: enums.operation
            }
        ], 
        message2: "value: %1", 
        args2: [
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
        isAllImplemented: true, 
        message0: "FLY", 
        message1: "fly: %1", 
        args1: [
            {
                type: "field_dropdown", 
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
        isAllImplemented: true, 
        message0: "FLYING", 
        message1: "fly: %1", 
        args1: [
            {
                type: "field_dropdown", 
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
        isAllImplemented: true, 
        message0: "MINION", 
        message1: "amount: %1", 
        args1: [
            {
                type: "field_number", 
                name: "amount", 
                value: 1, 
                precision: 1
            }
        ], 
        message2: "spawn: %1", 
        args2: [
            {
                type: "field_input", 
                name: "spawn"
            }
        ], 
        message3: "spawnOnTarget: %1", 
        args3: [
            {
                type: "field_dropdown", 
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
        isAllImplemented: true, 
        message0: "RIDER", 
        message1: "rider: %1", 
        args1: [
            {
                type: "field_input", 
                name: "rider"
            }
        ]
    }, 
    {
        type: "skills_POTIONEFFECT", 
        colour: 230, 
        previousStatement: "skills", 
        nextStatement: "skills", 
        isAllImplemented: true, 
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
                type: "field_dropdown", 
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
        isAllImplemented: false, 
        message0: "OHKO", 
        message1: "displayName: %1", 
        args1: [
            {
                type: "field_input", 
                name: "displayName", 
                text: ""
            }
        ]
    }, 
    {
        type: "skills_REPULSION", 
        colour: 230, 
        previousStatement: "skills", 
        nextStatement: "skills", 
        isAllImplemented: false, 
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
        ]
    }, 
    {
        type: "skills_CONVERTITEM", 
        colour: 230, 
        previousStatement: "skills", 
        nextStatement: "skills", 
        isAllImplemented: true, 
        message0: "CONVERTITEM", 
        message1: "inputItem: %1", 
        args1: [
            {
                type: "input_value", 
                name: "inputItem", 
                types: [
                    "ItemStackData"
                ]
            }
        ], 
        message2: "outputItem: %1", 
        args2: [
            {
                type: "input_value", 
                name: "outputItem", 
                types: [
                    "ItemStackData"
                ]
            }
        ], 
        message3: "chance: %1", 
        args3: [
            {
                type: "field_number", 
                name: "chance", 
                value: null
            }
        ]
    }, 
    {
        type: "skills_COOLDOWN", 
        colour: 230, 
        previousStatement: "skills", 
        nextStatement: "skills", 
        isAllImplemented: true, 
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
        isAllImplemented: false, 
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
                type: "field_dropdown", 
                name: "outputBlock", 
                value: "GOLD_BLOCK", 
                options: enums.material
            }
        ]
    }, 
    {
        type: "skills_REMOTEDETONATION", 
        colour: 230, 
        previousStatement: "skills", 
        nextStatement: "skills", 
        isAllImplemented: false, 
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
                type: "field_dropdown", 
                name: "spawnsFire", 
                value: "false", 
                options: enums.booleans
            }
        ], 
        message5: "breakBlocks: %1", 
        args5: [
            {
                type: "field_dropdown", 
                name: "breakBlocks", 
                value: "true", 
                options: enums.booleans
            }
        ], 
        message6: "removeDetonatedEntity: %1", 
        args6: [
            {
                type: "field_dropdown", 
                name: "removeDetonatedEntity", 
                value: "true", 
                options: enums.booleans
            }
        ]
    }, 
    {
        type: "skills_BLOCKDROPS", 
        colour: 230, 
        previousStatement: "skills", 
        nextStatement: "skills", 
        isAllImplemented: false, 
        message0: "BLOCKDROPS", 
        message1: "replaceDrops: %1", 
        args1: [
            {
                type: "field_dropdown", 
                name: "replaceDrops", 
                value: "false", 
                options: enums.booleans
            }
        ]
    }, 
    {
        type: "skills_CREEPER", 
        colour: 230, 
        previousStatement: "skills", 
        nextStatement: "skills", 
        isAllImplemented: true, 
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
        isAllImplemented: true, 
        message0: "GIVEITEM", 
        message1: "canStore: %1", 
        args1: [
            {
                type: "field_dropdown", 
                name: "canStore", 
                value: "true", 
                options: enums.booleans
            }
        ], 
        message2: "canDrop: %1", 
        args2: [
            {
                type: "field_dropdown", 
                name: "canDrop", 
                value: "true", 
                options: enums.booleans
            }
        ], 
        message3: "canLoseOnDeath: %1", 
        args3: [
            {
                type: "field_dropdown", 
                name: "canLoseOnDeath", 
                value: "true", 
                options: enums.booleans
            }
        ], 
        message4: "loseItemOnHeroLoss: %1", 
        args4: [
            {
                type: "field_dropdown", 
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
                types: [
                    "ItemStackData"
                ]
            }
        ]
    }, 
    {
        type: "skills_GUN", 
        colour: 230, 
        previousStatement: "skills", 
        nextStatement: "skills", 
        isAllImplemented: true, 
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
                type: "field_dropdown", 
                name: "item", 
                options: enums.material
            }
        ], 
        message7: "shootSound: %1", 
        args7: [
            {
                type: "input_value", 
                name: "shootSound", 
                types: [
                    "SoundData"
                ]
            }
        ], 
        message8: "trailParticle: %1", 
        args8: [
            {
                type: "input_value", 
                name: "trailParticle", 
                types: [
                    "ParticleData"
                ]
            }
        ], 
        message9: "hitParticle: %1", 
        args9: [
            {
                type: "input_value", 
                name: "hitParticle", 
                types: [
                    "ParticleData"
                ]
            }
        ]
    }, 
    {
        type: "skills_SNEAK", 
        colour: 230, 
        previousStatement: "skills", 
        nextStatement: "skills", 
        isAllImplemented: true, 
        message0: "SNEAK", 
        message1: "mustSneak: %1", 
        args1: [
            {
                type: "field_dropdown", 
                name: "mustSneak", 
                value: "true", 
                options: enums.booleans
            }
        ], 
        message2: "needsInvisibility: %1", 
        args2: [
            {
                type: "field_dropdown", 
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
        isAllImplemented: true, 
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
        isAllImplemented: false, 
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
                type: "field_dropdown", 
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
        ]
    }, 
    {
        type: "skills_THROWER", 
        colour: 230, 
        previousStatement: "skills", 
        nextStatement: "skills", 
        isAllImplemented: false, 
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
        message4: "item: %1", 
        args4: [
            {
                type: "input_value", 
                name: "item", 
                types: [
                    "ItemStackData"
                ]
            }
        ], 
        message5: "projectile: %1", 
        args5: [
            {
                type: "field_dropdown", 
                name: "projectile", 
                value: "SNOWBALL", 
                options: enums.entity
            }
        ], 
        message6: "canPickUp: %1", 
        args6: [
            {
                type: "field_dropdown", 
                name: "canPickUp", 
                value: "false", 
                options: enums.booleans
            }
        ], 
        message7: "velocity: %1", 
        args7: [
            {
                type: "field_number", 
                name: "velocity", 
                value: 1.4
            }
        ], 
        message8: "damage: %1", 
        args8: [
            {
                type: "field_number", 
                name: "damage", 
                value: 3
            }
        ]
    }, 
    {
        type: "skills_BLOCKRAY", 
        colour: 230, 
        previousStatement: "skills", 
        nextStatement: "skills", 
        isAllImplemented: false, 
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
                type: "field_dropdown", 
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
        ]
    }, 
    {
        type: "skills_CRAFTING", 
        colour: 230, 
        previousStatement: "skills", 
        nextStatement: "skills", 
        isAllImplemented: false, 
        message0: "CRAFTING", 
        message1: "isShaped: %1", 
        args1: [
            {
                type: "field_dropdown", 
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
                types: [
                    "ItemStackData"
                ]
            }
        ]
    }, 
    {
        type: "damagemodifiers_BLANK", 
        colour: 10, 
        output: "damagemodifiers", 
        isAllImplemented: true, 
        message0: "BLANK"
    }, 
    {
        type: "damagemodifiers_EASED", 
        colour: 10, 
        output: "damagemodifiers", 
        isAllImplemented: true, 
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
        isAllImplemented: true, 
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
        isAllImplemented: true, 
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
        isAllImplemented: false, 
        message0: "BASIC", 
        message1: "experience: %1", 
        args1: [
            {
                type: "field_number", 
                name: "experience", 
                value: 100, 
                precision: 1
            }
        ]
    }, 
    {
        type: "distributions_LOOT", 
        colour: 10, 
        previousStatement: "distributions", 
        nextStatement: "distributions", 
        isAllImplemented: false, 
        message0: "LOOT", 
        message1: "chance: %1", 
        args1: [
            {
                type: "field_number", 
                name: "chance", 
                value: 0
            }
        ]
    }, 
    {
        type: "distributions_CRAFTING", 
        colour: 10, 
        previousStatement: "distributions", 
        nextStatement: "distributions", 
        isAllImplemented: false, 
        message0: "CRAFTING"
    }, 
    {
        type: "types_condition", 
        colour: 10, 
        output: "types", 
        isAllImplemented: true, 
        message0: "condition"
    }, 
    {
        type: "types_effect", 
        colour: 10, 
        output: "types", 
        isAllImplemented: true, 
        message0: "effect"
    }, 
    {
        type: "types_range", 
        colour: 10, 
        output: "types", 
        isAllImplemented: true, 
        message0: "range"
    }, 
    {
        type: "types_SpawnData", 
        colour: 10, 
        output: "types", 
        isAllImplemented: false, 
        message0: "SpawnData", 
        message1: "enabled: %1", 
        args1: [
            {
                type: "field_dropdown", 
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
                type: "field_dropdown", 
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
                type: "field_dropdown", 
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
        ]
    }, 
    {
        type: "types_BossBarData", 
        colour: 10, 
        output: "types", 
        isAllImplemented: false, 
        message0: "BossBarData", 
        message1: "enabled: %1", 
        args1: [
            {
                type: "field_dropdown", 
                name: "enabled", 
                value: "false", 
                options: enums.booleans
            }
        ], 
        message2: "color: %1", 
        args2: [
            {
                type: "field_dropdown", 
                name: "color", 
                value: "PURPLE", 
                options: enums.bossBarColor
            }
        ], 
        message3: "style: %1", 
        args3: [
            {
                type: "field_dropdown", 
                name: "style", 
                value: "PROGRESS", 
                options: enums.bossBarStyle
            }
        ]
    }, 
    {
        type: "types_ItemAttributeData", 
        colour: 10, 
        output: "types", 
        isAllImplemented: true, 
        message0: "ItemAttributeData"
    }, 
    {
        type: "types_EnchantmentData", 
        colour: 10, 
        output: "types", 
        isAllImplemented: true, 
        message0: "EnchantmentData"
    }, 
    {
        type: "types_ItemMetaData", 
        colour: 10, 
        output: "types", 
        isAllImplemented: false, 
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
                type: "field_dropdown", 
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
                types: [
                    "ItemAttributeData"
                ]
            }
        ], 
        message6: "enchants: %1", 
        args6: [
            {
                type: "input_value", 
                name: "enchants", 
                types: [
                    "EnchantmentData"
                ]
            }
        ]
    }, 
    {
        type: "types_ItemStackData", 
        colour: 10, 
        output: "types", 
        isAllImplemented: true, 
        message0: "ItemStackData", 
        message1: "type: %1", 
        args1: [
            {
                type: "field_dropdown", 
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
                types: [
                    "ItemMetaData"
                ]
            }
        ]
    }, 
    {
        type: "types_AttributeData", 
        colour: 10, 
        output: "types", 
        isAllImplemented: true, 
        message0: "AttributeData"
    }, 
    {
        type: "types_EntityData", 
        colour: 10, 
        output: "types", 
        isAllImplemented: false, 
        message0: "EntityData", 
        message1: "type: %1", 
        args1: [
            {
                type: "field_dropdown", 
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
                type: "field_dropdown", 
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
                types: [
                    "EntityData"
                ]
            }
        ], 
        message5: "attributes: %1", 
        args5: [
            {
                type: "input_value", 
                name: "attributes", 
                types: [
                    "AttributeData"
                ]
            }
        ]
    }, 
    {
        type: "types_VectorData", 
        colour: 10, 
        output: "types", 
        isAllImplemented: true, 
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
        output: "types", 
        isAllImplemented: true, 
        message0: "SoundData", 
        message1: "sound: %1", 
        args1: [
            {
                type: "field_dropdown", 
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
        output: "types", 
        isAllImplemented: true, 
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
                type: "field_dropdown", 
                name: "type", 
                options: enums.potion
            }
        ], 
        message3: "ambient: %1", 
        args3: [
            {
                type: "field_dropdown", 
                name: "ambient", 
                value: "true", 
                options: enums.booleans
            }
        ], 
        message4: "hasParticles: %1", 
        args4: [
            {
                type: "field_dropdown", 
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
        output: "types", 
        isAllImplemented: true, 
        message0: "ParticleData", 
        message1: "particle: %1", 
        args1: [
            {
                type: "field_dropdown", 
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
        output: "types", 
        isAllImplemented: true, 
        message0: "BlockDataData", 
        message1: "type: %1", 
        args1: [
            {
                type: "field_dropdown", 
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
        output: "types", 
        isAllImplemented: false, 
        message0: "BlockDataComparison", 
        message1: "type: %1", 
        args1: [
            {
                type: "field_dropdown", 
                name: "type", 
                value: "STONE", 
                options: enums.material
            }
        ]
    }, 
    {
        type: "types_LoreData", 
        colour: 10, 
        output: "types", 
        isAllImplemented: true, 
        message0: "LoreData"
    }, 
    {
        type: "types_EnchantComparisonData", 
        colour: 10, 
        output: "types", 
        isAllImplemented: true, 
        message0: "EnchantComparisonData"
    }, 
    {
        type: "types_ItemMetaComparisonData", 
        colour: 10, 
        output: "types", 
        isAllImplemented: false, 
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
                types: [
                    "EnchantComparisonData"
                ]
            }
        ]
    }, 
    {
        type: "types_ItemComparisonData", 
        colour: 10, 
        output: "types", 
        isAllImplemented: false, 
        message0: "ItemComparisonData", 
        message1: "type: %1", 
        args1: [
            {
                type: "field_dropdown", 
                name: "type", 
                value: "STONE", 
                options: enums.material
            }
        ], 
        message2: "metadata: %1", 
        args2: [
            {
                type: "input_value", 
                name: "metadata", 
                types: [
                    "ItemMetaComparisonData"
                ]
            }
        ]
    }
])
