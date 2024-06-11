import { CreditCard } from 'lucide-react'
import type { FormEvent } from 'react'
import { BackButton } from '../components/BackButton'

export function CheckoutPayment() {
	function handlePayment(e: FormEvent) {
		e.preventDefault()
		console.log('Clema')
	}

	return (
		<section className='flex gap-4 flex-col items-center justify-start min-h-screen'>
			<div className='mr-auto'>
				<BackButton />
			</div>
			<h2 className='text-2xl'>Realizar pagamento</h2>
			<span className='text-2xl font-bold'>R$ 14,000.29</span>

			<form className='space-y-4' onSubmit={handlePayment}>
				<h3 className='text-xl font-semibold'>Pagamento com cartão</h3>

				<div className='space-y-2'>
					<div className='space-y-1'>
						<label className='block' htmlFor='email'>
							Email
						</label>
						<input
							type='email'
							name='email'
							id='email'
							placeholder='JohnDoe@email.com'
							className='w-[400px] px-2 py-3 border border-zinc-400 rounded-lg placeholder:text-zinc-400'
						/>
					</div>

					<div className='space-y-1'>
						<label className='block' htmlFor='name'>
							Nome do cartão
						</label>
						<input
							type='text'
							name='name'
							id='name'
							placeholder='John Doe'
							className='w-[400px] px-2 py-3 border border-zinc-400 rounded-lg placeholder:text-zinc-400'
						/>
					</div>
				</div>

				<div className=''>
					<label className='block' htmlFor='card-number'>
						Detalhes do Cartão
					</label>
					<div className='flex items-center w-[400px] border border-zinc-400 rounded-tl-lg rounded-tr-lg px-2 py-3 focus-within:border-zinc-900'>
						<input
							type='number'
							name='card-number'
							id='card-number'
							placeholder='4220 3600 0000 0000'
							className='flex-1 placeholder:text-zinc-400 focus:outline-none'
						/>
						<CreditCard />
					</div>
					<div>
						<input
							type='number'
							placeholder='MM / yy'
							className='w-[200px] px-2 py-3 border border-zinc-400 rounded-bl-lg placeholder:text-zinc-400'
						/>
						<input
							type='number'
							placeholder='CVV'
							max={3}
							className='w-[200px] px-2 py-3 border border-zinc-400 rounded-br-lg placeholder:text-zinc-400'
						/>
					</div>
				</div>

				<button
					type='submit'
					className='w-full flex ml-auto px-6 py-3 rounded-lg bg-violet-500 text-zinc-200 items-center justify-center hover:bg-violet-700'>
					Realizar Pagamento
				</button>
			</form>
		</section>
	)
}
