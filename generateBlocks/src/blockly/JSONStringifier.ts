import { indent } from "../utils.js"

type MappingType = Record<string | number | symbol, any>
type VariableEntry<T> = 
    T extends Array<infer U>?
        VariableArray<U> :
        T extends MappingType? 
            VariableMap<T> : 
            T extends string? 
                boolean : 
                VariableArray<T> | VariableMap<T> | boolean
type VariableMap<T> = {
    [K in keyof T]?: VariableEntry<T[K]>
}
type VariableArray<T> = VariableEntry<T>[]

export default function JSONStringify<T>(obj: T, variables: VariableMap<T> = {}): string {
    if (!(obj instanceof Object)) return JSON.stringify(obj)
    const entries = (Object.keys(obj) as (keyof T)[])
        .map(key => {
            let value = ""
            if (variables[key] === true && (typeof obj[key] === "string")) {
                value = (obj[key] as unknown) as string
            } else {
                const childVariables = (typeof variables[key] === "object"? variables[key] : {}) as VariableMap<T[keyof T]>
                value = JSONStringify(obj[key], childVariables)
            }
            return {key, value}
        })
    if (obj instanceof Array) {
        const arrayEntries = entries.map(entry => `${entry.value}`).join(", \r\n")
        return `[\r\n${indent(arrayEntries)}\r\n]`
    } else {
        const objectEntries = entries
                .map(entry => ({
                    key: JSON.stringify(entry.key),
                    value: indent(entry.value).trim()
                }))
                .map(entry => `${entry.key}: ${entry.value}`)
            .join(", \r\n")
        return `{\r\n${indent(objectEntries)}\r\n}`
    }
}
