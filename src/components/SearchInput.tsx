import { Search } from 'lucide-react'

export function SearchInput() {
	return (
		<div className='border flex items-center gap-2 px-2 py-3 rounded-lg group focus-within:border-zinc-900 border-zinc-400 transition'>
			<label htmlFor='productName'>
				<Search size={20} className='text-zinc-400 focus:text-zinc-900' />
			</label>
			<input
				type='text'
				name='productName'
				id='productName'
				placeholder='Procure pelo nome de algum produto'
				className='flex-1 focus:outline-none placeholder:text-zinc-400 text-zinc-900 text-sm'
			/>
		</div>
	)
}
