import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/cartContext'
import { Routes } from './routes'

export function App() {
	return (
		<BrowserRouter>
			<CartProvider>
				<Routes />
			</CartProvider>
		</BrowserRouter>
	)
}
