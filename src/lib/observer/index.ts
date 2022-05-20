import {touched} from "../utils/touched"
import {Dependency} from "./Dependency"

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

@touched(Dependency)
export class DependenciesMap extends Map {}

