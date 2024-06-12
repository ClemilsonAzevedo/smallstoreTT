import { SwitchThemeMode } from './SwitchThemeMode'

export function Header() {
	return (
		<header className='flex items-center justify-between'>
			<SwitchThemeMode />
		</header>
	)
}
