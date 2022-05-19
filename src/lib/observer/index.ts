type ComputedFunction = () => void
let target: ComputedFunction | null = null
export const store: ClassDecorator = (target: any): typeof target => class extends target {
	constructor (...args: Array<any>) {
		super(...args)
		const dependencies = new DependenciesMap()
		return new Proxy(this, {
			get: function(target: Record<string, any>, key: string) {
				dependencies.get(key).depend()
				return target[key]
			},
			set: function(target: Record<string, any>, key: string, value: any) {
				target[key] = value
				dependencies.get(key).notify()
				return true
			}
		})
	}
}

export function watcher(fn: ComputedFunction) {
	if (target) throw new Error('Target not empty on watcher creation')
	target = fn
	target()
	target = null
}
class DependenciesMap extends Map {
	get(key: string): Dep {
		if (!super.has(key)) {
			super.set(key, new Dep())
		}
		return super.get(key)
	}
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
		// this.#subscribers.forEach(sub => sub)
		// subscribe on every run
		// TODO: unsubscribe from redundant
		this.#subscribers.forEach(sub => watcher(sub))
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
