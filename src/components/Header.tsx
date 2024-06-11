import { ShoppingCart } from 'lucide-react'
import { useState } from 'react'
import { CartDrawer } from './CartDrawer'
import { SwitchThemeMode } from './SwitchThemeMode'

export function Header() {
	const [isCartDrawerOpen, setIsDrawerOpen] = useState(false)

	const toggleDrawer = () => {
		setIsDrawerOpen(!isCartDrawerOpen)
	}

	return (
		<header className='flex items-center justify-between'>
			<div>
				<div className='flex justify-center items-center'>
					<button type='button' onClick={toggleDrawer} className='relative'>
						<ShoppingCart />
						<span className='bg-violet-500 w-6 h-6 rounded-full absolute -top-3 -right-4 text-xs flex items-center justify-center text-zinc-50'>
							0
						</span>
					</button>
					<CartDrawer
						isCartDrawerOpen={isCartDrawerOpen}
						onCartDrawerClose={toggleDrawer}
					/>
				</div>
			</div>
			<SwitchThemeMode />
		</header>
	)
}
