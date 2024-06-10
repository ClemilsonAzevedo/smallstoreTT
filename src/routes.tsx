import { Route, Routes as RoutesDOM } from 'react-router-dom'
import { LayoutDefault } from './layouts/layout-default'
import { Home } from './pages/home'
import { ProductDetail } from './pages/product-detail'

export function Routes() {
	return (
		<RoutesDOM>
			<Route path='/' element={<LayoutDefault />}>
				<Route path='/' element={<Home />} />
				<Route path='/product/:productId/detail' element={<ProductDetail />} />
			</Route>
		</RoutesDOM>
	)
}
