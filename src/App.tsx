import { Filter, ShoppingCart } from 'lucide-react'
import { Header } from './components/Header'
import { SearchInput } from './components/SearchInput'

export function App() {
	return (
		<main className='p-4'>
			<Header />

			<div>
				<SearchInput />
				<div>
					<Filter />
					<select name='' id=''>
						<option defaultValue={'default'} value='default'>
							Filtre por preço
						</option>
					</select>
				</div>
			</div>

			<div>
				<div>
					<img
						src='https://www.myimaginestore.com/media/mf_webp/jpeg/media/catalog/product/cache/4a48ac28cbb6e9c41470e5be5a6d3043/a/i/air-gold_2.webp'
						alt='Macbook'
					/>
				</div>

				<h3>Macbook Air M1 Chip M1</h3>

				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tenetur
					culpa possimus assumenda architecto praesentium rem cum.
				</p>

				<div>
					<span>2,000.90 R$</span>
					<button type='button'>
						<ShoppingCart />
					</button>
				</div>
			</div>
		</main>
	)
}
