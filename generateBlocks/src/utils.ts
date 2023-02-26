
export function objectPropertyMap<T>(object: {[key: string]: T}): Map<string, T> {
	var map = new Map<string, T>()
	Object.keys(object).forEach(key => {
		map.set(key, object[key])
	});
	return map
}

export function indent(s: string): string {
	return "    "+s.replaceAll(/(?<=((\r\n)|(\r[^\n])|([^\r]\n)))/g, "    ")
}

export type ExcludeFunc<T> = Exclude<T, Function>
