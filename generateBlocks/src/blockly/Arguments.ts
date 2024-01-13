import { JSONStringify, Variable } from "../utils.js"

export {
    Argument, 
    InputValue,
    InputStatement,

    FieldDropdown,
    FieldBoolean,
    FieldEnum,
    FieldInteger,
    FieldNumber,
    FieldInput
}

type ArgumentType = 
    "input_value" | 
    "input_statement" |
    "field_dropdown_default" |
    "field_number" |
    "field_input"

type Argument = {
    precedence: number
    type: ArgumentType
    name: string
    toJSON: (quoteKeys?: boolean) => string
}

class InputValue implements Argument {
    precedence: number = 2
    type: ArgumentType = "input_value"
    name: string
    types?: string[]

    constructor(name: string, types: string[]) {
        this.name = name
        this.types = types
    }

    setType(types: string[]) {
        this.types = types
    }

    toJSON(quoteKeys?: boolean): string {
        return JSONStringify({ ...this, precedence: undefined }, true, quoteKeys)
    }
    
}

class InputStatement implements Argument {
    precedence: number = 3
    type: ArgumentType = "input_statement"
    name: string
    check: string | string[]

    constructor(name: string, check: string | string[]) {
        this.name = name
        this.check = check
    }

    toJSON(quoteKeys?: boolean): string {
        return JSONStringify({ ...this, precedence: undefined }, true, quoteKeys)
    }

}

class FieldNumber implements Argument {
    precedence: number = 1
    type: ArgumentType = "field_number"
    name: string
    value?: number

    constructor(name: string, value: number | undefined) {
        this.name = name
        this.value = value
    }

    toJSON(quoteKeys?: boolean): string {
        return JSONStringify({ ...this, precedence: undefined }, true, quoteKeys)
    }
    
}

class FieldInteger extends FieldNumber {
    precision: number = 1

    constructor(name: string, value: number | undefined) {
        super(name, value);
    }

}

type dropdownLabel = string
export type dropdownOption = [dropdownLabel, string]

class FieldDropdown implements Argument {
    precedence: number = 1
    type: ArgumentType = "field_dropdown_default"
    name: string
    value: any
    options?: dropdownOption[] | Variable

    constructor(name: string, _default: string) {
        this.name = name
        this.value = _default
    }

    setOptions(options: [dropdownLabel, string][]) {
        this.options = options
    }
    addOption(option: [dropdownLabel, string]): boolean {
        if (this.options instanceof Array) {
            this.options.push(option)
            return true
        }
        return false
    }
    setOptionsVar(varName: string) {
        this.options = new Variable(varName)
    }

    toJSON(quoteKeys?: boolean): string {
        return JSONStringify({ ...this, precedence: undefined }, true, quoteKeys)
    }

}

class FieldEnum extends FieldDropdown {

    constructor(name: string, _default: any, enumName: string) {
        super(name, _default)
        this.setOptionsVar("enums." + enumName)
    }

}

class FieldBoolean extends FieldEnum {

    constructor(name: string, _default: boolean) {
        super(name, _default + "", "booleans")
    }

}

class FieldInput implements Argument {
    precedence: number = 1
    type: ArgumentType = "field_input"
    name: string
    text: string

    constructor(name: string, _default: string) {
        this.name = name
        this.text = _default
    }

    toJSON(quoteKeys?: boolean): string {
        return JSONStringify({ ...this, precedence: undefined }, true, quoteKeys)
    }
}

