import { ChevronLeft } from 'lucide-react'
import { calculateTotal } from '../utils/calculateTotalPrice'
import { formatCurrency } from '../utils/formatValueToCurrency'
import { PaymentPopup } from './PaymentPopup'
import { ProductCart, type ProductCartProps } from './ProductCart'

interface CartDrawerProps {
	isCartDrawerOpen: boolean
	onCartDrawerClose: () => void
	onRemoveFromCart: (id: string) => void
	productsQuantity: number
	shoppingCart: ProductCartProps[]
	setShoppingCart: React.Dispatch<React.SetStateAction<ProductCartProps[]>> // Função para atualizar o estado do carrinho
}

export function CartDrawer({
	isCartDrawerOpen,
	onCartDrawerClose,
	onRemoveFromCart,
	shoppingCart,
	setShoppingCart,
	productsQuantity,
}: CartDrawerProps) {
	return (
		<div
			className={`fixed inset-0 flex items-start justify-center z-20 ${isCartDrawerOpen ? '' : 'pointer-events-none'}`}>
			{/* Botão para fechar o carrinho ao clicar fora dele */}
			<button
				type='button'
				className={`fixed inset-0 bg-zinc-950/80 transition-opacity ${isCartDrawerOpen ? 'opacity-50' : 'opacity-0'}`}
				onClick={onCartDrawerClose}
			/>

			{/* Conteúdo do carrinho */}
			<div
				className={`bg-zinc-200 dark:bg-zinc-800 w-full max-w-[1024px] h-full flex flex-col rounded-tl-lg rounded-tr-lg p-2 space-y-4 transition-transform transform ${isCartDrawerOpen ? 'translate-y-0' : 'translate-y-full'}`}>
				{/* Botão para voltar/fechar o carrinho */}
				<button
					type='button'
					className='flex gap-2 items-center text-zinc-900 dark:text-zinc-50 hover:text-violet-500 transition'
					onClick={onCartDrawerClose}>
					<ChevronLeft size={32} />
					<span className='font-medium text-xl'>Voltar</span>
				</button>

				{/* Informações sobre a quantidade de produtos e valor total */}
				<div className='grid grid-cols-2 w-full h-[90px] gap-2 text-zinc-700 dark:text-zinc-200'>
					<div className='text-center space-y-2 py-2 border border-zinc-400 rounded-lg h-full'>
						<span className='text-[2rem] font-bold'>{productsQuantity}</span>
						<p className='text-xs'>Quantidade de produtos</p>
					</div>
					<div className='border border-zinc-400 rounded-lg h-full flex flex-col justify-between p-2'>
						<p className='text-xs'>Valor a pagar</p>
						<span className='text-center text-xl font-bold'>
							{' '}
							{formatCurrency(calculateTotal(shoppingCart))}{' '}
						</span>
					</div>
				</div>

				{/* Componente de popup de pagamento */}
				<PaymentPopup
					shoppingCart={shoppingCart}
					setShoppingCart={setShoppingCart}
					totalCartValue={calculateTotal(shoppingCart)}
				/>

				{/* Lista de produtos no carrinho */}
				<div className='flex-1 overflow-y-auto space-y-2 md:grid md:grid-cols-2 md:items-end md:h-full md:gap-2'>
					{shoppingCart.length === 0 ? (
						<p className='text-2xl font-semibold'>O Carrinho está vazio</p>
					) : (
						shoppingCart.map(product => {
							return (
								<ProductCart
									key={product.imageUrl}
									id={product.id}
									description=''
									name={product.name}
									price={product.price}
									imageUrl={product.imageUrl}
									quantity={product.quantity}
									removeFromCart={() => onRemoveFromCart(product.id)}
								/>
							)
						})
					)}
				</div>
			</div>
		</div>
	)
}
