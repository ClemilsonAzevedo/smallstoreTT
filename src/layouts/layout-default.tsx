import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export function LayoutDefault() {
	return (
		<section className='p-4 mb-5 flex flex-col gap-4'>
			<Header />
			<Outlet />
		</section>
	)
}
