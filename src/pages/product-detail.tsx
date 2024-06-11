import { ShoppingCart } from 'lucide-react'
import { BackButton } from '../components/BackButton'

export function ProductDetail() {
	return (
		<section className='space-y-8'>
			<BackButton />
			<div className='max-w-[674px] mx-auto max-h-max space-y-8 lg:flex lg:max-w-full lg:gap-4'>
				<div className='lg:flex lg:flex-col space-y-4'>
					<div className='w-full lg:min-w-[400px] h-[327px] bg-zinc-200 p-2 rounded-lg'>
						<img
							src='https://www.myimaginestore.com/media/mf_webp/jpeg/media/catalog/product/cache/4a48ac28cbb6e9c41470e5be5a6d3043/a/i/air-gold_2.webp'
							alt='Macbook'
							className='rounded-lg w-full h-full aspect-square object-cover'
						/>
					</div>
					<div className='flex flex-1 items-center justify-between'>
						<button
							type='button'
							className='flex gap-2 bg-violet-500 hover:bg-violet-700 text-zinc-200 text-sm items-center px-6 py-3 rounded-lg transition'>
							<ShoppingCart />
							Adicionar ao carrinho
						</button>
						<span className='flex-1 text-right font-medium text-xl'>
							R$ 2,000.00
						</span>
					</div>
				</div>

				<div className='space-y-3 flex justify-center lg:justify-start flex-col items-center'>
					<p className='text-justify text-xs'>
						The MacBook Air with Apples M1 chip is Apples thinnest, lightest
						notebook boasting a modish fan-less design, gamut display,
						power-packed performance and most extended battery life in a
						MacBook. An everyday computer with the maximal utility for a wide
						range of tasks, it creates an unparalleled and impressive laptop
						experience so practically perfect, smooth-as-butter, and
						user-friendly that you wont be able to find any faults even if you
						want to.
					</p>
					<div>
						<h4 className='font-medium'>Detailed Specifications</h4>
						<ul className='text-xs space-y-2'>
							<li>
								13.3-inch (diagonal) LED-backlit Retina display with IPS
								technology
							</li>
							<li>
								2560x1600 native resolution at 227 pixels per inch with support
								for millions of colors
							</li>
							<li>
								400 nits brightness, Wide color (P3) and True Tone technology
								One external display with up to 6K resolution at 60Hz
								Thunderbolt 3 digital video output
							</li>
							<li>Apple M1 chip</li>
							<li>8-core CPU and 7-core GPU</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}
