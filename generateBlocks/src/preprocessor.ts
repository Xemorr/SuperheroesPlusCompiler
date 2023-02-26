import { Schema, Property, Element } from "./PreprocessedSchema.js"
import { objectPropertyMap } from "./utils.js"

export function preprocess(_unprocessed: any): Schema {
    delete _unprocessed.$schema
    const unprocessed = _unprocessed as Schema
    objectPropertyMap<extendableMap>(unprocessed as any).forEach((elements, key) => {
        resolveExtends(elements)
        objectPropertyMap(elements).forEach((element: Element) => {
            const elementType = key.substring(0, key.length-1)
            element.elementType = elementType as Element["elementType"]
            fillOptionals(element)
            moveSupportedModesToProperties(element)
            if (!element.properties) return
            objectPropertyMap(element.properties).forEach(property => addDefaultToDescription(property))
        })
    })
    return unprocessed
}

function fillOptionals(element: Element) {
    if (element.properties === undefined) element.properties = {}
    if (element.available === undefined) element.available = true
    if (element.requireMode === undefined) element.requireMode = true
}

type extendableElement = Element & {extends?: string}
type extendableMap = {[key: string] : extendableElement}

function resolveExtends(extendableMap: extendableMap) : void {
    objectPropertyMap(extendableMap).forEach((element, name) => {
        var extendsVal = element.extends
        if (element.available === undefined) element.available = true
        if (!extendsVal) return
        extendableMap[name] = deepMerge(extendableMap[extendsVal], element)
    })
}

type ElementWithModes = Element & {supportedModes?: string[]}
function moveSupportedModesToProperties(element: Element) {
    if (!("supportedModes" in element)) return
    const modedElement = element as ElementWithModes
    const modeProperty = {
        description: "The mode",
        required: modedElement.requireMode,
        type: "string",
        enum: modedElement.supportedModes,
        default: "ALL"
    } as Property
    element.properties = {mode: modeProperty, ...element.properties}
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
