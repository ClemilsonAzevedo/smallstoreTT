import { ShoppingCart, Sun } from 'lucide-react'

export function Header() {
	return (
		<header className='flex items-center justify-between'>
			<div className='relative'>
				<ShoppingCart size={24} />
				<span className='w-5 h-5 p-1 absolute -top-3 -right-3 flex items-center justify-center rounded-full text-xs text-zinc-50 bg-violet-500'>
					0
				</span>
			</div>
			<Sun size={24} />
		</header>
	)
}
