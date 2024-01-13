import { FieldDropdown } from "blockly";


export class DropdownDefaultField extends FieldDropdown {
    
    constructor(menuGenerator, opt_validator, opt_config) {
        super(menuGenerator, opt_validator, opt_config)
    }

    static fromJson(options) {
        const menu = options['options']
        const field = new DropdownDefaultField(menu)
        const value = options['value']
        if (value) field.setValue(value)
        return field
    }

}
