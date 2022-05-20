import {store} from "@/lib/observer"
import {watcher} from "@/lib/observer/watcher"

@store
export default class Test {
	public a = 10
	public b = 5
	public c!: number
	public d = 1
	public condition = 0
	init() {
		watcher(() => {
			if (t.condition === 0) {
				t.c = t.a + t.b
			} else {
				t.c = t.a + t.d
			}
		})
	}
}
const t = new Test()
t.init()
// const t2 = new Test()
// t.a = 1

console.log(t.c)
t.b = 6
console.log(t.c)
t.condition = 1
console.log(t.c)
t.d = 2
console.log(t.c)
t.b = 1
t.b = 1
t.b = 1
t.b = 1
// const t2 = new Test()
// console.log('ddd1: ', t.ddd)
// t.ddd = 1
// t.bbb = 2
// console.log('ddd: ', t.ddd)
// console.log('bbb: ', t.bbb)
// t = new Test()
