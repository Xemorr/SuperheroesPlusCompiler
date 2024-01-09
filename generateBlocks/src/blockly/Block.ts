import { Schema } from "../PreprocessedSchema.js"
import { JSONStringify } from "../utils.js"
import { Argument } from "./Arguments.js"

export type BlockType = `${keyof Schema}_${string}`

type CategoryData = {
    colour: number,
    chaining: boolean
}

export const categoryData: Record<keyof Schema, CategoryData> = {
    startpoint: {
        colour: 0,
        chaining: false
    },
    listtypes: {
        colour: 0,
        chaining: true
    },
    triggers: {
        colour: 120,
        chaining: false
    },
    conditions: {
        colour: 35,
        chaining: true
    },
    effects: {
        colour: 295,
        chaining: true
    },
    skills: {
        colour: 230,
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
    [K: `args${number}`]: Argument[]
}

export class Block {
    type: BlockType
    colour: number

    output?: string
    previousStatement?: string
    nextStatement?: string

    args: ArgumentList = {}
	argCounter: number = 0
    isAllImplemented: boolean = true
	
	constructor(type: BlockType) {
        this.type = type
        this.colour = 0
    }
	
	addCustomArg(message: string, ...args: Argument[]) {
		this.args[`message${this.argCounter}`] = message
		if (args.length > 0) this.args[`args${this.argCounter}`] = args

        this.argCounter++
	}

    addArg(name: string, arg: Argument) {
		this.addCustomArg(`${name}: %1`, arg)
    }

    addTextArg(name: string) {
		this.addCustomArg(name)
    }

    toJSON(quoteKeys?: boolean) {
        const excludes = {
            argCounter: undefined,
            args: undefined,
            isAllImplemented: this.isAllImplemented as boolean | undefined
        }
        if (!this.isAllImplemented) {
            this.args[`message${this.argCounter}`] = "Incomplete"
        } else {
            excludes.isAllImplemented = undefined
        }
        return JSONStringify({...this, ...this.args, ...excludes}, true, quoteKeys)
    }

}

export class DefaultBlock extends Block {
	
    constructor(type: keyof Schema, name: string, addTitle: boolean = true) {
        super(`${type}_${name}` as BlockType)

        this.loadCategoryData(type, categoryData[type])
		
		if (addTitle) {
			this.addTextArg(name)
		}
    }

    private loadCategoryData(type: keyof Schema, cateroryData: CategoryData) {
        this.colour = cateroryData.colour

        if (cateroryData.chaining) {
            this.previousStatement = type
            this.nextStatement = type
        } else {
            this.output = type
        }
    }

}

export class ListTypeBlock extends Block {
	constructor(name: string) {
		super(`listtypes_${name}`)
		this.colour = categoryData.listtypes.colour
		this.previousStatement = this.type
		this.nextStatement = this.type
	}
	
	addArg(name: string, arg: Argument) {
		arg.name = "VALUE"
        super.addArg(name, arg)
    }
}

export class JSONBlock extends DefaultBlock {
    json_block: object

    constructor(type: keyof Schema, name: string, json_block: object) {
        super(type, name);
        this.json_block = json_block
    }

    override toJSON(quoteKeys?: boolean): string {
        return JSONStringify(this.json_block, true, quoteKeys)
    }
}
