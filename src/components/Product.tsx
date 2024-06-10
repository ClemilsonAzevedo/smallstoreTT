import { ShoppingCart } from 'lucide-react'

export function Product() {
	return (
		<div className='flex flex-col gap-4 bg-zinc-200 p-2 rounded-lg'>
			<div className='w-full h-[200px] relative group'>
				<img
					src='https://www.myimaginestore.com/media/mf_webp/jpeg/media/catalog/product/cache/4a48ac28cbb6e9c41470e5be5a6d3043/a/i/air-gold_2.webp'
					alt='Macbook'
					className='rounded-lg w-full h-full aspect-square object-cover'
				/>
				<div className='bg-black/50 absolute inset-0 rounded-lg hidden group-hover:flex items-center justify-center'>
					<a
						href='/product/:productId/detail'
						className='text-zinc-200 border border-zinc-200 rounded-lg px-3 py-2 hover:bg-zinc-200 hover:text-zinc-900 transition'>
						Visualizar Produto
					</a>
				</div>
			</div>

			<div className='flex flex-col gap-6 items-center'>
				<h3 className='text-center text-xl font-semibold'>
					Macbook Air M1 Chip M1
				</h3>
				<p className='text-xs text-justify text-zinc-500 h-9 text-ellipsis overflow-hidden'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tenetur
					culpa possimus assumenda architecto praesentium rem cum.
				</p>
				<div className='flex justify-between items-center w-full'>
					<span className='font-medium text-xl'>R$ 2,000.90</span>
					<button
						type='button'
						className='bg-violet-500 px-3 py-2 rounded-xl text-zinc-200 hover:bg-violet-700'>
						<ShoppingCart size={24} />
					</button>
				</div>
			</div>
		</div>
	)
}
