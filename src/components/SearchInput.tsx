import { Search } from 'lucide-react'
import { type Dispatch, type SetStateAction, useState } from 'react'
import type { ProductProps } from './Product'

interface SearchInputProps {
	productList: ProductProps[]
	setFilteredProducts: Dispatch<SetStateAction<ProductProps[]>>
}

export function SearchInput({
	productList,
	setFilteredProducts,
}: SearchInputProps) {
	const [searchTerm, setSearchTerm] = useState('')

	return (
		<div className='border flex items-center gap-2 px-2 py-3 rounded-lg group focus-within:border-zinc-600 border-zinc-400 transition md:flex-1'>
			<label htmlFor='productName'>
				<Search size={20} className='text-zinc-400' />
			</label>
			<input
				type='text'
				name='productName'
				id='productName'
				placeholder='Procure pelo nome de algum produto'
				className='flex-1 focus:outline-none bg-transparent placeholder:text-zinc-400 text-sm'
				value={searchTerm}
				onChange={e => {
					const newSearchTerm = e.target.value.toLowerCase() // Atualiza o termo de busca
					setSearchTerm(newSearchTerm)
					const filteredProducts = productList.filter((product: ProductProps) =>
						product.name.toLowerCase().includes(newSearchTerm),
					)
					setFilteredProducts(filteredProducts) // Atualiza a lista de produtos filtrados
				}}
			/>
		</div>
	)
}
