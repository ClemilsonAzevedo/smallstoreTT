import { Filter } from 'lucide-react'
import type { ChangeEvent, Dispatch, SetStateAction } from 'react'
import type { ProductProps } from './Product'

interface PriceProductsFilterProps {
	products: ProductProps[]
	setFilteredProducts: Dispatch<SetStateAction<ProductProps[]>>
}

export function PriceProductFilter({
	products,
	setFilteredProducts,
}: PriceProductsFilterProps) {
	// Função para lidar com a mudança de filtro de preço
	function handlePriceFilterChange(event: ChangeEvent) {
		const selectedOption = (event.target as HTMLInputElement).value;

		let filtered = products

		// Filtra os produtos com base na opção selecionada
		switch (selectedOption) {
			case '0-50':
				filtered = products.filter(product => product.price <= 50)
				break
			case '51-500':
				filtered = products.filter(
					product => product.price > 50 && product.price <= 500,
				)
				break
			case '501-20000':
				filtered = products.filter(
					product => product.price > 500 && product.price <= 20000,
				)
				break
			default:
				break
		}
		// Atualiza a lista de produtos filtrados
		setFilteredProducts(filtered)
	}

	return (
		<div className='border border-zinc-400 px-2 py-3 rounded-lg flex items-center max-w-max text-zinc-700'>
			<Filter size={20} className='text-zinc-400' />
			<select
				name='price'
				id='price'
				className='focus:outline-none text-center bg-transparent'
				onChange={handlePriceFilterChange}>
				<option defaultValue={'default'} value='default'>
					Filtre por preço
				</option>
				<option value='0-50'>R$ 0 - R$ 50</option>
				<option value='51-500'>R$ 51 - R$ 500</option>
				<option value='501-20000'>R$ 501 - R$ 20,000</option>
			</select>
		</div>
	)
}
