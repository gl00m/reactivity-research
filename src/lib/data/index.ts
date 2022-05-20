import {Dependency} from "../observer/Dependency"
import {ComputedFunction} from "../types"
import {touched} from "../utils/touched"
@touched(Set)
class Watchers extends WeakMap<ComputedFunction, Set<Dependency>> {
	unsubscribe(fn: ComputedFunction) {
		const subscriptions = this.get(fn)
		if (subscriptions) {
			subscriptions.forEach(map => map.unsubscribe(fn))
			subscriptions.clear()
		}
	}
}
const watchers = new Watchers()
export default watchers
