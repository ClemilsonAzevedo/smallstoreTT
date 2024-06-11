import { Search } from 'lucide-react'

export function SearchInput() {
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
			/>
		</div>
	)
}
