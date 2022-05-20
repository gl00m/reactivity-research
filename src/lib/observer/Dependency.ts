import Watchers from "../data"
import {ComputedFunction} from "../types"
import {target, watcher} from "./watcher"

export class Dependency {
	#subscribers = new Set<ComputedFunction>();
	depend() {
		if (target && !this.#subscribers.has(target)) {
			this.#subscribers.add(target)
			Watchers.get(target)?.add(this)
		}
	}
	unsubscribe(fn: ComputedFunction) {
		if (!this.#subscribers.has(fn)) { throw new Error('No subscription found') }
		this.#subscribers.delete(fn)

	}
	notify() {
		Array.from(this.#subscribers).forEach(sub => watcher(sub))
	}
}
