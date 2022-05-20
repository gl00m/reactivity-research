export function touched(Entity: any) {
	return (target: any): typeof target => class extends target {
		get(key: string): typeof Entity {
			if (!super.has(key)) {
				super.set(key, new Entity())
			}
			return super.get(key)
		}
	}
}
