import { useState } from 'react'
import { products } from '../Products.json'
import { PriceProductFilter } from '../components/PriceProductFilter'
import { Product } from '../components/Product'
import { SearchInput } from '../components/SearchInput'

export function Home() {
	const [filteredProducts, setFilteredProducts] = useState(products)

	return (
		<>
			<div className='space-y-2 md:flex md:gap-4'>
				<SearchInput
					productList={products}
					setFilteredProducts={setFilteredProducts}
				/>
				<PriceProductFilter
					products={products}
					setFilteredProducts={setFilteredProducts}
				/>
			</div>

			<div className='space-y-2 md:space-y-0 md:flex md:flex-wrap md:gap-4 md:justify-center'>
				{filteredProducts.map(product => (
					<Product
						key={product.id}
						id={product.id}
						name={product.name}
						price={product.price}
						imageUrl={product.imageUrl}
						description={product.description}
					/>
				))}
			</div>
		</>
	)
}
