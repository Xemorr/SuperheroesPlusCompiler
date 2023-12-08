import { Schema } from "../PreprocessedSchema.js"
import { JSONStringify } from "../utils.js"
import { Argument } from "./Arguments.js"

export type BlockType = `${keyof Schema}_${string}`

type CategoryData = {
    colour: number,
    chaining: boolean
}

export const categoryData: Record<keyof Schema, CategoryData> = {
    triggers: {
        colour: 10,
        chaining: false
    },
    conditions: {
        colour: 10,
        chaining: true
    },
    effects: {
        colour: 10,
        chaining: true
    },

    skills: {
        colour: 10,
        chaining: true
    },

    damagemodifiers: {
        colour: 10,
        chaining: false
    },
    rewards: {
        colour: 10,
        chaining: false
    },

    distributions: {
        colour: 10,
        chaining: true
    },

    types: {
        colour: 10,
        chaining: false
    }
}

type ArgumentList = {
    [K: `message${number}`]: string;
    [K: `args${number}`]: [Argument]
}
export class Block {
    type: BlockType
    colour!: number

    output?: string
    previousStatement?: string
    nextStatement?: string

    args: ArgumentList = {}
    argCounter: number = 0
    isAllImplemented: boolean = true

    constructor(type: keyof Schema, name: string) {
        this.type = (type + "_" + name) as BlockType

        this.addCategoryData(type, categoryData[type])

        this.addTextArg(name)
    }

    private addCategoryData(type: keyof Schema, cateroryData: CategoryData) {
        this.colour = cateroryData.colour

        if (cateroryData.chaining) {
            this.previousStatement = type
            this.nextStatement = type
        } else {
            this.output = type
        }
    }

    addArg(name: string, arg: Argument) {
        this.args[`message${this.argCounter}`] = `${name}: %1`
        this.args[`args${this.argCounter}`] = [arg]

        this.argCounter++
    }

    addTextArg(name: string) {
        this.args[`message${this.argCounter}`] = name

        this.argCounter++
    }

    toJSON() {
        const excludes = {
            argCounter: undefined,
            args: undefined
        }
        return JSONStringify({...this, ...this.args, ...excludes}, true)
    }

}
