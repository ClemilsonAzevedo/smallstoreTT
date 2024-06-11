import { ChevronLeft } from 'lucide-react'
import { ProductCart } from './ProductCart'
import { Link } from 'react-router-dom'

interface CartDrawerProps {
	isCartDrawerOpen: boolean
	onCartDrawerClose: () => void
}
export function CartDrawer({
	isCartDrawerOpen,
	onCartDrawerClose,
}: CartDrawerProps) {
	return (
		<div
			className={`fixed min-h-screen inset-0 flex items-end justify-center z-20 ${
				isCartDrawerOpen ? '' : 'pointer-events-none'
			}`}>
			<button
				type='button'
				className={`fixed inset-0 bg-zinc-950/80 transition-opacity ${
					isCartDrawerOpen ? 'opacity-50' : 'opacity-0'
				}`}
				onClick={onCartDrawerClose}
			/>
			<div
				className={`bg-zinc-200 dark:bg-zinc-800 w-full max-w-[1024px] rounded-tl-lg rounded-tr-lg p-2 space-y-4 transition-transform transform ${
					isCartDrawerOpen ? 'translate-y-0' : 'translate-y-full'
				}`}>
				<button
					type='button'
					className='flex-1 flex gap-2 items-center text-zinc-900 dark:text-zinc-50 hover:text-violet-500 transition'
					onClick={onCartDrawerClose}>
					<ChevronLeft size={32} />
					<span className='font-medium text-xl'>Voltar</span>
				</button>

				<div className='grid grid-cols-2 w-full h-[90px] gap-2 text-zinc-700 dark:text-zinc-200'>
					<div className='text-center space-y-2 py-2 border border-zinc-400 rounded-lg h-full'>
						<span className='text-[2rem] font-bold'>7</span>
						<p className='text-xs '>Quantidade de produtos</p>
					</div>

					<div className='border border-zinc-400 rounded-lg h-full flex flex-col justify-between p-2'>
						<p className='text-xs'>Valor a pagar</p>
						<span className='text-center text-xl font-bold'>R$ 14,000.98</span>
					</div>
				</div>

				<Link
					to='/checkout'
					className='flex ml-auto sm:max-w-max px-6 py-3 rounded-lg bg-violet-500 text-zinc-200 items-center justify-center hover:bg-violet-700'>
					Fazer Pagamento
				</Link>

				<div className='space-y-2 md:space-y-0 md:grid md:grid-cols-2 md:gap-2'>
					<ProductCart />
					<ProductCart />
					<ProductCart />
				</div>
			</div>
		</div>
	)
}
