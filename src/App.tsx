import { Filter, Search, ShoppingCart, Sun } from 'lucide-react'

export function App() {
	return (
		<main>
			<header>
				<ShoppingCart size={24} />
				<Sun size={24} />
			</header>

			<div>
				<label htmlFor='productName'>
					<Search size={20} />
				</label>
				<input type='text' name='productName' id='productName' />
			</div>

			<div>
				<Filter />
				<select name='' id=''>
					<option defaultValue={'default'} value='default'>
						Filtre por preço
					</option>
				</select>
			</div>

			<div>
				<div>
					<img src='' alt='' />
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
