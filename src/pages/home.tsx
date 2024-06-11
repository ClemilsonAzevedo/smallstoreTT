import { Filter } from 'lucide-react'
import { Product } from '../components/Product'
import { SearchInput } from '../components/SearchInput'

export function Home() {
	return (
		<>
			<div className='space-y-2 md:flex md:gap-4'>
				<SearchInput />
				<div className='border border-zinc-400 px-2 py-3 rounded-lg flex items-center max-w-max text-zinc-700'>
					<Filter size={20} className='text-zinc-400' />
					<select
						name='price'
						id='price'
						className='focus:outline-none text-center'>
						<option defaultValue={'default'} value='default'>
							Filtre por preço
						</option>
						<option value='default'>R$ 0 - R$ 50</option>
						<option value='default'>R$ 51 - R$ 500</option>
						<option value='default'>R$ 501 - R$ +2.000</option>
					</select>
				</div>
			</div>

			<div className='space-y-2 md:space-y-0 md:flex md:flex-wrap md:gap-4 md:justify-center'>
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
			</div>
		</>
	)
}
