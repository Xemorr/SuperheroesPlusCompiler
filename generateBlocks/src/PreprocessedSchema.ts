
export {
    Schema,
    Descriptable,  
    PropertyMap, Modes, Element, Type, 
    PropertyTypes, PropertyStringTypes, PropertyType, 
    PropertiesMap, PropertiesMapKey, Property, 
    IfPath
}

interface Schema {
    skills: Record<string, Element>
    triggers: Record<string, Element>
    conditions: Record<string, Element>
    effects: Record<string, Element>
    types: Record<string, Type>
}

interface Descriptable {
    description: string
}

type PropertyMap = Record<string, Property>

interface Element extends Descriptable {
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

interface Type {
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
