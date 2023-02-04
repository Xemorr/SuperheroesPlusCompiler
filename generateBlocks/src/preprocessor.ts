import { Schema, Property, Type } from "./PreprocessedSchema.js"
import { objectPropertyMap } from "./utils.js"

export function preprocess(_unprocessed: any): Schema {
    delete _unprocessed.$schema
    const unprocessed = _unprocessed as Schema
    objectPropertyMap<extendableMap>(unprocessed as any).forEach((types, key) => {
        resolveExtends(types)
        objectPropertyMap(types).forEach((type: Type) => {
            const elementType = key.substring(0, key.length-1)
            type.elementType = elementType as Type["elementType"]
            fillOptionals(type)
            moveSupportedModesToProperties(type)
            if (!type.properties) return
            objectPropertyMap(type.properties).forEach(property => addDefaultToDescription(property))
        })
    })
    return unprocessed
}

function fillOptionals(type: Type) {
    if (type.properties === undefined) type.properties = {}
    if (type.available === undefined) type.available = true
    if (type.requireMode === undefined) type.requireMode = true
}

type extendableType = Type & {extends?: string}
type extendableMap = {[key: string] : extendableType}

function resolveExtends(extendableMap: extendableMap) : void {
    objectPropertyMap(extendableMap).forEach((type, name) => {
        var extendsVal = type.extends
        if (type.available === undefined) type.available = true
        if (!extendsVal) return
        extendableMap[name] = deepMerge(extendableMap[extendsVal], type)
    })
}

type TypeWithModes = Type & {supportedModes?: string[]}
function moveSupportedModesToProperties(type: Type) {
    if (!("supportedModes" in type)) return
    const modedType = type as TypeWithModes
    const modeProperty = {
        description: "The mode",
        required: modedType.requireMode,
        type: "string",
        enum: modedType.supportedModes,
        default: "ALL"
    } as Property
    type.properties = {mode: modeProperty, ...type.properties}
}

function deepMerge<T extends Object>(object: T, ...objects: T[]): T {
    if (objects.length == 0) return object
    const merged = structuredClone(object)
    const second = objects.shift()
    for (const _key in second) {
        const key = _key as keyof T & string
        if (merged[key] === undefined || typeof second[key] !== "object") merged[key] = second[key]
        else merged[key] = deepMerge<any>(merged[key], second[key])
    }
    return deepMerge(merged, ...objects)
}

function addDefaultToDescription(property: Property): void {
    if (property.properties !== undefined) {
        objectPropertyMap(property.properties).forEach((val: Property) => addDefaultToDescription(val))
    }
    if (property.patternProperties !== undefined) {
        objectPropertyMap(property.patternProperties).forEach((val: Property) => addDefaultToDescription(val))
    }
    if (property.propertiesMap !== undefined) {
        addDefaultToDescription(property.propertiesMap.value)
    }

    var defaultVal = property.default
    if (defaultVal === undefined) return
    var description = property.description
    if (property.description.match(/.*(default|Default).*/)) return

    property.description = `${description}. \nDefaults to ${JSON.stringify(defaultVal)}`

}
