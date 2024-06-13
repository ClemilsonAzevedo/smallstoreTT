import type { ProductCartProps } from '../components/ProductCart'

export function calculateTotal(shoppingCart: ProductCartProps[]): number {
	let total = 0
	for (const item of shoppingCart) {
		total += item.price * item.quantity
	}
	return total
}
