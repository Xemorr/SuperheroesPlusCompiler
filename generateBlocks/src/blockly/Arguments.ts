import JSONStringify from "./JSONStringifier"

export {
    Argument, 
    FieldDropdown
}

type variable = string

type ArgumentType = "field_dropdown"

type Argument = {
    type: ArgumentType
    name?: string
    toString: () => string
}

type dropdownLabel = string
type dropdownOption = [dropdownLabel, string]

class FieldDropdown implements Argument {
    type: ArgumentType = "field_dropdown"
    name?: string
    options?: dropdownOption[] | variable

    constructor(name?: string) {
        this.name = name;
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
        this.options = varName
    }

    toString(): string {
        return JSONStringify({type: this.type, name: this.name, options: this.options}, {options: typeof this.options === "string"})
    }

}


