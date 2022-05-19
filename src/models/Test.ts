import {observable, store, watcher} from "@/lib/observer"

@store
export default class Test {
	@observable
	public a = 1
	public b = 2
	public c!: number
}
const t = new Test()
watcher(() => {
	console.log('w')
	t.c = t.a + t.b
})
console.log(t.c)
t.a = 3
console.log(t.c)
// const t2 = new Test()
// console.log('ddd1: ', t.ddd)
// t.ddd = 1
// t.bbb = 2
// console.log('ddd: ', t.ddd)
// console.log('bbb: ', t.bbb)
// t = new Test()
