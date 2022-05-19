type ComputedFunction = () => void
let target: ComputedFunction | null = null
export const store: ClassDecorator = (target: any): typeof target => class extends target {
	constructor (...args: Array<any>) {
		super(...args)
		const dependensies = new Map<String, Dep>()

		Object.keys(this).forEach(key => dependensies.set(key, new Dep()))

		console.log(Object.keys(this))
		return new Proxy(this, {
			get: function(target: Record<string, any>, key: string) {
				dependensies.get(key)?.depend()
				return target[key]
			},
			set: function(target: Record<string, any>, key: string, value: any) {
				target[key] = value
				dependensies.get(key)?.notify()
				return true
			}
		})
	}
}

export function watcher(fn: ComputedFunction){
	target = fn
	target()
	target = null
}

class Dep {
	#subscribers = new Set<ComputedFunction>()
	constructor () {
	}
	depend () {
		if (target && !this.#subscribers.has(target)){
			this.#subscribers.add(target)
		}
	}
	notify () {
		this.#subscribers.forEach(sub => sub())
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
