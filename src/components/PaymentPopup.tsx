import { Check, CreditCard, X } from 'lucide-react'
import { type FormEvent, useEffect, useState } from 'react'
import { formatCurrency } from '../utils/formatValueToCurrency'
import type { ProductCartProps } from './ProductCart'

interface PaymentProps {
	totalCartValue: number
	shoppingCart: ProductCartProps[] // Lista de produtos no carrinho
	setShoppingCart: React.Dispatch<React.SetStateAction<ProductCartProps[]>>
}

export function PaymentPopup({
	shoppingCart,
	totalCartValue,
	setShoppingCart,
}: PaymentProps) {
	const [showFormPopup, setShowFormPopup] = useState(false)
	const [showSuccessPopup, setShowSuccessPopup] = useState(false)
	const [paymentError, setPaymentError] = useState<string | null>(null) // Estado para armazenar erros de pagamento
	const [errors, setErrors] = useState<{
		email?: string
		name?: string
		cardNumber?: string
		expiration?: string
		cvv?: string
	}>({})
	const [formData, setFormData] = useState({
		email: '',
		name: '',
		cardNumber: '',
		expiration: '',
		cvv: '',
	})

	// Efeito para limpar a mensagem de erro após 5 segundos
	useEffect(() => {
		let timer: NodeJS.Timeout

		if (paymentError) {
			timer = setTimeout(() => {
				setPaymentError(null)
			}, 5000)
		}
		return () => clearTimeout(timer)
	}, [paymentError])

	// Função para lidar com o envio do formulário de pagamento
	function handlePayment(e: FormEvent) {
		e.preventDefault()

		const { email, name, cardNumber, expiration, cvv } = formData

		let valid = true
		const newErrors: typeof errors = {}

		// Regex para validação
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		const nameRegex = /^[a-zA-Z\s]+$/
		const cardNumberRegex = /^\d{16}$/
		const expirationRegex = /^(0[1-9]|1[0-2])\/\d{2}$/
		const cvvRegex = /^\d{3}$/

		// Validação de Email
		if (!emailRegex.test(email)) {
			newErrors.email = 'Email inválido'
			valid = false
		}

		// Validação de Nome
		if (!nameRegex.test(name)) {
			newErrors.name = 'Nome deve conter apenas letras e espaços'
			valid = false
		}

		// Validação de Número do Cartão
		if (!cardNumberRegex.test(cardNumber)) {
			newErrors.cardNumber = 'Número do cartão inválido'
			valid = false
		}

		// Validação de Data de Expiração
		if (!expirationRegex.test(expiration)) {
			newErrors.expiration = 'Data de expiração inválida (MM/YY)'
			valid = false
		}

		// Validação de CVV
		if (!cvvRegex.test(cvv)) {
			newErrors.cvv = 'CVV inválido'
			valid = false
		}

		// Se houver erros, atualiza o estado de erros e retorna
		if (!valid) {
			setErrors(newErrors)
			return
		}

		// Simulação de um processo de pagamento
		const aleatoryNumber = Math.random()
		if (aleatoryNumber < 0.5) {
			setPaymentError('Ocorreu um erro na compra dos itens, tente novamente!')
		} else {
			setShowFormPopup(false)
			setShowSuccessPopup(true)
			setFormData({
				email: '',
				name: '',
				cardNumber: '',
				expiration: '',
				cvv: '',
			})

			// Esvaziar o carrinho
			clearCart()

			// Esconde o popup de sucesso após 4 segundos
			setTimeout(() => {
				setShowSuccessPopup(false)
			}, 4000)
		}
	}

	// Função para lidar com mudanças nos campos do formulário
	function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value })
		setErrors({ ...errors, [name]: '' }) // Limpa o erro ao digitar
	}

	//Função para esvaziar o carrinho
	function clearCart() {
		setShoppingCart([])
	}

	// Função para lidar com cliques fora do popup
	function handleOutsideClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
		if (e.target === e.currentTarget) {
			setShowFormPopup(false)
		}
	}

	return (
		<div>
			{/* Botão para abrir o formulário de pagamento */}
			<button
				type='button'
				onClick={() => setShowFormPopup(true)}
				disabled={shoppingCart.length === 0}
				className='flex ml-auto sm:max-w-max px-6 py-3 rounded-lg bg-violet-500 text-zinc-200 items-center justify-center hover:bg-violet-700 disabled:bg-violet-800 disabled:hover:bg-violet-800'>
				Fazer Pagamento
			</button>

			{/* Popup do formulário de pagamento */}
			{showFormPopup && (
				<div
					className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50'
					onClick={handleOutsideClick}>
					<div className='bg-zinc-50 dark:bg-zinc-900 p-4 rounded-lg max-h-screen overflow-y-auto w-full max-w-md md:max-w-lg lg:max-w-xl'>
						<button
							type='button'
							onClick={() => setShowFormPopup(false)}
							className='ml-auto mb-4'>
							<X />
						</button>
						<section className='flex gap-4 flex-col items-center justify-start w-full dark:bg-zinc-900'>
							<h2 className='text-2xl'>Realizar pagamento</h2>
							<span className='text-2xl font-bold'>
								{formatCurrency(totalCartValue)}
							</span>

							<form className='space-y-4 w-full' onSubmit={handlePayment}>
								<h3 className='text-xl font-semibold'>Pagamento com cartão</h3>

								<div className='space-y-2 w-full'>
									<div className='space-y-1'>
										<label className='block' htmlFor='email'>
											Email
										</label>
										<input
											type='email'
											name='email'
											id='email'
											placeholder='JohnDoe@email.com'
											className={`w-full px-2 py-3 border ${errors.email ? 'border-red-500' : 'border-zinc-400'} bg-transparent rounded-lg placeholder:text-zinc-400`}
											value={formData.email}
											onChange={handleInputChange}
										/>
										{errors.email && (
											<span className='text-red-500'>{errors.email}</span>
										)}
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
											className={`w-full px-2 py-3 border ${errors.name ? 'border-red-500' : 'border-zinc-400'} bg-transparent rounded-lg placeholder:text-zinc-400`}
											value={formData.name}
											onChange={handleInputChange}
										/>
										{errors.name && (
											<span className='text-red-500'>{errors.name}</span>
										)}
									</div>
								</div>

								<div>
									<label className='block' htmlFor='card-number'>
										Detalhes do Cartão
									</label>
									<div
										className={`flex items-center w-full border ${errors.cardNumber ? 'border-red-500' : 'border-zinc-400'} rounded-tl-lg rounded-tr-lg px-2 py-3 focus-within:border-zinc-900 dark:focus-within:border-zinc-200`}>
										<input
											type='text'
											name='cardNumber'
											id='card-number'
											placeholder='4220 3600 0000 0000'
											className='flex-1 placeholder:text-zinc-400 bg-transparent focus:outline-none'
											value={formData.cardNumber}
											onChange={handleInputChange}
										/>
										<CreditCard />
									</div>
									{errors.cardNumber && (
										<span className='text-red-500'>{errors.cardNumber}</span>
									)}
									<div className='flex space-x-2'>
										<input
											type='text'
											name='expiration'
											placeholder='MM/YY'
											className={`w-full px-2 py-3 border ${errors.expiration ? 'border-red-500' : 'border-zinc-400'} rounded-bl-lg bg-transparent placeholder:text-zinc-400`}
											value={formData.expiration}
											onChange={handleInputChange}
										/>
										<input
											type='text'
											name='cvv'
											placeholder='CVV'
											className={`w-full px-2 py-3 border ${errors.cvv ? 'border-red-500' : 'border-zinc-400'} rounded-br-lg bg-transparent placeholder:text-zinc-400`}
											value={formData.cvv}
											onChange={handleInputChange}
										/>
									</div>
									{errors.expiration && (
										<span className='text-red-500'>{errors.expiration}</span>
									)}
									{errors.cvv && (
										<span className='text-red-500'>{errors.cvv}</span>
									)}
								</div>

								<button
									type='submit'
									className='w-full flex ml-auto px-6 py-3 rounded-lg bg-violet-500 text-zinc-200 items-center justify-center hover:bg-violet-700'>
									Fazer Pagamento
								</button>
								{paymentError && (
									<span className='text-red-500 mt-2 block text-center'>
										{paymentError}
									</span>
								)}
							</form>
						</section>
					</div>
				</div>
			)}

			{/* Popup de sucesso */}
			{showSuccessPopup && (
				<div className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50'>
					<div className='bg-white p-4 rounded-lg'>
						<div className='flex items-center justify-center text-green-500'>
							<Check />
							<p className='ml-2'>Compra concluída com sucesso!</p>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}
