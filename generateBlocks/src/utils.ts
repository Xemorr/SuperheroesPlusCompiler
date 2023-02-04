
export function objectPropertyMap<T>(object: {[key: string]: T}): Map<string, T> {
	var map = new Map<string, T>()
	Object.keys(object).forEach(key => {
		map.set(key, object[key])
	});
	return map
}

export type ExcludeFunc<T> = Exclude<T, Function>
