import { ShoppingCart } from 'lucide-react'
import { useState } from 'react'
import { products } from '../Products.json'
import { CartDrawer } from '../components/CartDrawer'
import { PriceProductFilter } from '../components/PriceProductFilter'
import { Product } from '../components/Product'
import type { ProductCartProps } from '../components/ProductCart'
import { SearchInput } from '../components/SearchInput'
import { useCart } from '../context/cartContext'
import { handleAddItemOnCart } from '../utils/handleAddNewProduct'

export function Home() {
	const [filteredProducts, setFilteredProducts] = useState(products)
	const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false)
	const { shoppingCart, setShoppingCart } = useCart()

	// Função para alternar entre a abertura e o fechamento do carrinho
	function toggleCartDrawer() {
		setIsCartDrawerOpen(!isCartDrawerOpen)
	}

	// Função para calcular a quantidade total de itens no carrinho
	function calculateTotalQuantity(shoppingCart: ProductCartProps[]) {
		// Verifica se o carrinho está vazio
		if (shoppingCart.length === 0) {
			return 0
		}

		// Soma todas as quantidades dos itens no carrinho
		const totalQuantity = shoppingCart.reduce((accumulator, currentItem) => {
			return accumulator + currentItem.quantity
		}, 0)

		return totalQuantity
	}

	// Função para remover um item do carrinho
	function handleRemoveItemOnCart(id: string) {
		// Encontra o índice do item no carrinho
		const itemIndex = shoppingCart.findIndex(product => product.id === id)

		// Se o item estiver no carrinho, atualiza a quantidade ou remove-o
		if (itemIndex !== -1) {
			const updatedShoppingCart = [...shoppingCart]
			updatedShoppingCart[itemIndex] = {
				...updatedShoppingCart[itemIndex],
				quantity: updatedShoppingCart[itemIndex].quantity - 1,
			}

			// Se a quantidade do item for zero, remove-o do carrinho
			if (updatedShoppingCart[itemIndex].quantity === 0) {
				updatedShoppingCart.splice(itemIndex, 1)
			}

			// Define o estado do carrinho com o novo array de itens
			setShoppingCart(updatedShoppingCart)
		}
	}

	return (
		<>
			<div className='flex justify-start items-center'>
				<button type='button' onClick={toggleCartDrawer} className='relative'>
					<ShoppingCart />
					<span className='bg-violet-500 w-6 h-6 rounded-full absolute -top-3 -right-4 text-xs flex items-center justify-center text-zinc-50'>
						{calculateTotalQuantity(shoppingCart)}{' '}
						{/* Exibe a quantidade total de itens no carrinho */}
					</span>
				</button>
			</div>
			<div className='space-y-2 md:flex md:gap-4'>
				<SearchInput
					productList={products}
					setFilteredProducts={setFilteredProducts}
				/>
				<PriceProductFilter
					products={products}
					setFilteredProducts={setFilteredProducts}
				/>
			</div>

			<div className='space-y-2 md:space-y-0 md:flex md:flex-wrap md:gap-4 md:justify-center'>
				{filteredProducts.map(product => (
					<Product
						key={product.id}
						id={product.id}
						name={product.name}
						price={product.price}
						imageUrl={product.imageUrl}
						description={product.description}
						onAddToCart={() =>
							handleAddItemOnCart(product.id, shoppingCart, setShoppingCart)
						}
					/>
				))}
			</div>

			<CartDrawer
				setShoppingCart={setShoppingCart}
				onRemoveFromCart={handleRemoveItemOnCart}
				productsQuantity={calculateTotalQuantity(shoppingCart)}
				shoppingCart={shoppingCart}
				isCartDrawerOpen={isCartDrawerOpen}
				onCartDrawerClose={toggleCartDrawer}
			/>
		</>
	)
}
