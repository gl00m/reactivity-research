import {observable, store} from "@/lib/observer"

@store
export default class Test {
	@observable
	public ddd
	public bbb = 8
	constructor() {
		console.log('test-constructor')
		this.ddd = 5
	}
}
const t = new Test()
const t2 = new Test()
console.log('ddd1: ', t.ddd)
t.ddd = 1
t.bbb = 2
console.log('ddd: ', t.ddd)
console.log('bbb: ', t.bbb)
// t = new Test()
