import { indent } from "../utils";
import { Argument } from "./Arguments";

class Block {
    name: string
    parameters: Parameter[] = []

    constructor(name: string) {
        this.name = name;
    }

    addParameter(parameter: Parameter) {
        this.parameters.push(parameter)
    }

    toString(): string {
        const paramString = this.parameters.map((parameter, i) => parameter.toString(i)).join(", \r\n")
        return `{
    "type": "${this.name}",
${indent(paramString)}
}`
    }

}

class Parameter {

    message: string
    args: Argument[] = []

    constructor(message: string) {
        this.message = message
    }

    addArg(arg: Argument) {
        this.args.push(arg)
    }

    toString(index: number): string {
        const fieldsString = this.args.map(field => field.toString()).join(", \r\n")
        return `
"message${index}": "${this.message}"
"args${index}": [
${indent(fieldsString)}
]`.trim()
    }
}
