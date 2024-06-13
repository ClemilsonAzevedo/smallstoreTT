import { Trash2 } from 'lucide-react'
import { formatCurrency } from '../utils/formatValueToCurrency'
import type { ProductProps } from './Product'

export interface ProductCartProps extends ProductProps {
	quantity: number
	removeFromCart: (id: string) => void // Função para remover o produto do carrinho
}

export function ProductCart({
	id,
	name,
	imageUrl,
	quantity,
	price,
	removeFromCart,
}: ProductCartProps) {
	return (
		<div className='flex items-center gap-2 p-2 bg-zinc-50 dark:bg-zinc-800 rounded-lg border border-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition'>
			<img
				src={imageUrl}
				alt={name}
				className='w-[100px] h-[100px] rounded-lg aspect-square object-cover'
			/>
			<div className='flex-1 flex flex-col gap-2 w-full'>
				<div className='flex items-center justify-between w-full'>
					<h6 className='flex-1 truncate font-semibold w-[215px]'>{name}</h6>

					{/* Botão para remover o produto do carrinho */}
					<button type='button' onClick={() => removeFromCart(id)}>
						<Trash2
							size={20}
							className='text-red-500 hover:text-red-700 transition'
						/>
					</button>
				</div>
				<div className='flex items-center gap-1 mb-2 bg-zinc-200 max-w-max p-1 rounded-lg'>
					<span className='text-zinc-500'>Qtd:</span>
					<span className='text-zinc-500'>{quantity}</span>
				</div>
				<span className='flex-1 text-right font-medium'>
					{/* Preço formatado do produto */}
					{formatCurrency(price)}
				</span>
			</div>
		</div>
	)
}
