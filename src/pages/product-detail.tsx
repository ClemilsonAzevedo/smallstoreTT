import { ShoppingCart } from 'lucide-react'
import { useParams } from 'react-router-dom'
import { products } from '../Products.json'
import { BackButton } from '../components/BackButton'
import { useCart } from '../context/cartContext' // Importe o hook useCart
import { formatCurrency } from '../utils/formatValueToCurrency'

export function ProductDetail() {
	const { productId } = useParams() // Obtém o ID do produto a partir dos parâmetros da URL
	const productFoundById = products.find(product => product.id === productId) // Encontra o produto pelo ID
	const formateProductPrice = productFoundById!.price

	// Acesse o estado do carrinho utilizando o hook useCart
	const { shoppingCart, setShoppingCart } = useCart()

	// Função para adicionar o item ao carrinho
	const addToCart = () => {
		const alreadyInShoppingCart = shoppingCart.find(
			product => product.id === productId,
		)

		if (alreadyInShoppingCart) {
			const newShoppingCart = shoppingCart.map(product => {
				if (product.id === productId) {
					return {
						...product,
						quantity: product.quantity + 1,
					}
				}
				return product
			})
			setShoppingCart(newShoppingCart)
		} else {
			const cartItem = {
				id: productId,
				name: productFoundById?.name,
				imageUrl: productFoundById?.imageUrl,
				price: productFoundById?.price,
				quantity: 1,
				description: productFoundById!.description,
			}
			setShoppingCart([...shoppingCart, cartItem])
		}
	}

	return (
		<section className='space-y-8'>
			<BackButton />
			<div className='max-w-[674px] mx-auto max-h-max space-y-8 lg:flex lg:justify-start lg:max-w-full lg:gap-4'>
				<div className='lg:flex lg:flex-col space-y-4'>
					<div className='w-full lg:min-w-[400px] h-[327px] bg-zinc-200 p-2 rounded-lg'>
						<img
							src={productFoundById?.imageUrl}
							alt='Product'
							className='rounded-lg w-full h-full aspect-square object-cover'
						/>
					</div>
					<div className='flex flex-1 items-center justify-between'>
						<button
							type='button'
							onClick={addToCart} // Chama a função de adicionar ao carrinho
							className='flex gap-2 bg-violet-500 hover:bg-violet-700 text-zinc-200 text-sm items-center px-6 py-3 rounded-lg transition'>
							<ShoppingCart />
							Adicionar ao carrinho
						</button>
						<span className='flex-1 text-right font-medium text-xl'>
							{/*Formata o preço usando a função de formatar a moeda*/}
							{formatCurrency(formateProductPrice)}
						</span>
					</div>
				</div>

				<div className='space-y-3 flex justify-center lg:justify-start flex-col items-center'>
					<h2 className='text-2xl font-semibold mr-auto'>
						{productFoundById?.name}
					</h2>
					<p className='text-justify text-sm'>
						{productFoundById?.description}
					</p>
				</div>
			</div>
		</section>
	)
}
