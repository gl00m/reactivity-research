import Watchers from "../data"
import {ComputedFunction} from "../types"


export let target: ComputedFunction | null = null
export function watcher(fn: ComputedFunction) {
	if (target) { throw new Error('Target not empty on watcher creation') }
	Watchers.unsubscribe(fn)
	target = fn
	target()
	target = null
}
