import { products } from '../Products.json'
import type { ProductCartProps } from '../components/ProductCart'

export function handleAddItemOnCart(
	id: string,
	shoppingCart: ProductCartProps[],
	setShoppingCart: React.Dispatch<React.SetStateAction<ProductCartProps[]>>,
) {
	// Verifica se o item já está no carrinho
	const alreadyInShoppingCart = shoppingCart.find(product => product.id === id)

	// Se o item já estiver no carrinho, incrementa a quantidade
	if (alreadyInShoppingCart) {
		const newShoppingCart = shoppingCart.map(product => {
			if (product.id === id)
				return {
					...product,
					quantity: product.quantity + 1,
				}
			return product
		})
		setShoppingCart(newShoppingCart)
	} else {
		// Se o item não estiver no carrinho, adiciona-o
		const product = products.find(product => product.id === id)
		const cartItem: ProductCartProps = {
			id,
			name: product!.name,
			imageUrl: product!.imageUrl,
			price: product!.price,
			quantity: 1,
			description: product!.description,
			removeFromCart: () => {}
		}
		const newShoppingCart = [...shoppingCart, cartItem]
		setShoppingCart(newShoppingCart)
	}
}
