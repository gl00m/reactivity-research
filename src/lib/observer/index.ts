export function store(targetClass: any) {
	console.log('store: ', targetClass)
	// class wrapper
	return new Proxy(targetClass, {
		construct: (Target: new (...args: Array<unknown>) => typeof targetClass, args: Array<unknown>) => new Proxy(new Target(...args), handler),
	})
}


const handler = {
	get: function(t: Record<string, any>, key: string) {
		console.log(`Getting ${key}: ${t[key]}`)
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		return t[key]
	},
	set: function(t: Record<string, any>, key: string, value: any) {
		console.log(`Setting ${key} to: ${value}`)
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		t[key] = value
		// _value = value
		return true
	}
}
export function observable(target: object, key: string) {
	console.log('observable1: ', target, key)
	// let internalValue: unknown
	// Object.defineProperty(target, key, {

	// 	get() { // геттер
	// 		console.log(`Getting ${key}: ${internalValue}`)
	// 		return internalValue
	// 	},
	
	// 	set(value) {
	// 		console.log(`Setting ${key} to: ${value}`)
	// 		internalValue = value
	// 	}
	// })
}
