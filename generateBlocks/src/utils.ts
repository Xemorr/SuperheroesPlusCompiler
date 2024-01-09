
export type StringRecord<T> = Record<string, T>

export function forEachValue<T>(object: StringRecord<T> | undefined, func: (value: T) => void) {
	if (object == undefined) return
	for (const value of Object.values(object)) {
		func(value)
	}
}

export function forEachEntry<T>(object: T | undefined, func: (key: keyof T, value: T[keyof T]) => void) {
	if (object == undefined) return
	for (const key in object) {
		func(key as keyof T, object[key as keyof T])
	}
}

export function objectMap<T, U>(object: T, func: (key: keyof T, value: T[keyof T]) => U) {
	const res = {} as Record<keyof T, U>;
	forEachEntry(object, (key, value) => res[key] = func(key, value));
	return res;
}

export class Variable {
	identifier: string

	constructor(indentifier: string) {
		this.identifier = indentifier
	}

	toJSON(quoteKeys?: boolean) {
		// because it is easier to compare when it is converted into a string
		if (quoteKeys) return JSON.stringify(this.identifier)
		return this.identifier
	}
}

export function indent(s: string, indent: string = "    ") {
	return s.split("\r\n")
		.map(line => indent + line)
		.join("\r\n")
}

export function JSONStringify(object: unknown, calledFromToJson?: boolean, quoteKeys?: boolean): string {
	if (object === null) {
		return "null"
	}
	if (typeof object !== "object") {
		return JSON.stringify(object) + ""
	}
	if (!calledFromToJson) {
		if ("toJSON" in object) {
			const _object = object as any
			if (typeof _object.toJSON === "function") {
				const ret = _object.toJSON(quoteKeys)
				if (typeof ret === "string") {
					return ret
				}
			}
		}
	}
	if (Array.isArray(object)) {
		const stringified = object
			.map(val => JSONStringify(val, false, quoteKeys))
			.map(val => indent(val))
			.join(", \r\n")
		return `[\r\n${stringified}\r\n]`
	}
	const stringified = Object.entries(object)
		.filter(([_, val]) => val !== undefined)
		.map(([key, val]) => {
			if (quoteKeys) key = JSON.stringify(key)
			const valStr = JSONStringify(val, false, quoteKeys)
			return indent(`${key}: ${valStr}`)
		})
		.join(", \r\n")
	return `{\r\n${stringified}\r\n}`
}

export function toArray<T>(x: T | T[]): T[] {
	if (Array.isArray(x)) return x
	else return [x]
}
