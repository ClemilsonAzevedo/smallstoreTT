import { ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { formatCurrency } from '../utils/formatValueToCurrency'

export interface ProductProps {
	id: string
	name: string
	description: string
	price: number
	imageUrl: string
	onAddToCart?: () => void // Função opcional para adicionar o produto ao carrinho
}

export function Product({
	id,
	name,
	description,
	price,
	onAddToCart,
	imageUrl = 'https://cdn2.iconfinder.com/data/icons/pictograms-5/24/Nophoto-512.png',
}: ProductProps) {
	return (
		<div className='flex flex-col gap-4 bg-zinc-200 dark:bg-zinc-700 p-2 rounded-lg md:w-[300px] md:h-[400px]'>
			<div className='w-full h-[200px] relative group'>
				<img
					src={imageUrl}
					alt='Description For this element'
					className='rounded-lg w-full h-full aspect-square object-cover'
				/>
				<div className='bg-black/50 absolute inset-0 rounded-lg hidden group-hover:flex items-center justify-center'>
					<Link
						to={`/product/${id}/detail`}
						className='text-zinc-200 border border-zinc-200 rounded-lg px-3 py-2 hover:bg-zinc-200 hover:text-zinc-900 transition'>
						Visualizar Produto
					</Link>
				</div>
			</div>

			<div className='flex flex-col gap-6 items-center'>
				<h3 className='text-center text-xl font-semibold text-ellipsis text-nowrap overflow-hidden w-full'>
					{name}
				</h3>
				<p className='text-xs text-justify text-zinc-500 h-8 text-ellipsis overflow-hidden w-full'>
					{description}
				</p>
				<div className='flex justify-between items-center w-full'>
					<span className='font-medium text-lg'>{formatCurrency(price)}</span>

					<button
						type='button'
						onClick={onAddToCart}
						className='bg-violet-500 hover:bg-violet-700 rounded-lg px-3 h-12 text-zinc-200 flex justify-center items-center group'>
						<ShoppingCart size={20} />
						<span className='text-xs max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
							Adicionar no carrinho
						</span>
					</button>
				</div>
			</div>
		</div>
	)
}
