import { ChevronLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function BackButton() {
	const navigateHook = useNavigate()

	function goToPreviousPage() {
		navigateHook(-1)
	}

	return (
		<button
			type='button'
			className='flex-1 flex gap-2 items-center text-zinc-900 hover:text-violet-500 transition'
			onClick={goToPreviousPage}>
			<ChevronLeft size={32} />
			<span className='font-medium text-xl'>Voltar</span>
		</button>
	)
}
