
export {
    Schema,
    Descriptable,  
    PropertyMap, Modes, Type, TypeDefinition, 
    PropertyTypes, PropertyStringTypes, PropertyType, 
    PropertiesMap, PropertiesMapKey, Property, 
    IfPath
}

interface Schema {
    skills: Record<string, Type>
    triggers: Record<string, Type>
    conditions: Record<string, Type>
    effects: Record<string, Type>
    types: Record<string, TypeDefinition>
}

interface Descriptable {
    description: string
}

type PropertyMap = Record<string, Property>

interface Type extends Descriptable {
    elementType: "skill" | "trigger" | "condition" | "effect"
    properties: PropertyMap
    available: boolean
    requireMode: boolean
}

type Modes = "SELF" | "OTHER" | "LOCATION" | "ITEM" | "ALL"

type PropertyTypes = PropertyStringTypes | "array" | "object" | "string" | "number" | "integer" | "boolean"
type PropertyStringTypes = "string" | "range" | "comparison" | "operation" | "entity" | "block" | "item" | "enchantment" | "potion" | "biome" | "world" | "equipmentSlot" | "attribute" | "sound" | "condition" | "effect"
type PropertiesMap = {
    key: PropertiesMapKey
    value: Property
}
type PropertyType = PropertyTypes | PropertyTypes[]
interface PropertiesMapKey extends Descriptable {
    type: PropertyType
}
interface Property extends Descriptable {
    default?: any
    required: boolean
    type: PropertyType
    min?: number
    max?: number
    items?: PropertyType | Property
    properties?: PropertyMap
    patternProperties?: PropertyMap
    propertiesMap?: PropertiesMap
    ref?: string
    if?: IfPath
    enum?: any[]
}

interface IfPath {
    [key: string]: IfPath
    const?: any
}

interface TypeDefinition {
    type: PropertyType
    properties?: PropertyMap
    patternProperties?: PropertyMap
    propertiesMap?: PropertiesMap
    ref?: string
    extends?: string
    enum?: any[]
    pattern?: string
    internal?: boolean
}
