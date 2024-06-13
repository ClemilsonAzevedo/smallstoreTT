import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export function SwitchThemeMode() {
	const [theme, setTheme] = useState(() => {
		const savedTheme = localStorage.getItem('theme')
		if (savedTheme === 'dark') {
			return <Moon /> // Define o ícone do tema como Lua se o tema salvo for escuro
		}
		return <Sun /> // Define o ícone do tema como Sol se o tema salvo for claro
	})

	const [isDarkTheme, setIsDarkTheme] = useState(() => {
		const savedTheme = localStorage.getItem('theme')
		return savedTheme === 'dark' // Define o estado do tema com base no tema salvo
	})

	useEffect(() => {
		const htmlClasses = document.documentElement.classList
		const savedTheme = localStorage.getItem('theme')

		if (savedTheme === 'dark') {
			setTheme(<Moon />)
			setIsDarkTheme(true)
			htmlClasses.add('dark') // Aplica a classe 'dark' ao elemento raiz do HTML
		} else {
			setTheme(<Sun />)
			setIsDarkTheme(false)
			htmlClasses.remove('dark') // Remove a classe 'dark' do elemento raiz do HTML
		}

		const observer = new MutationObserver(mutations => {
			for (const mutation of mutations) {
				if (mutation.attributeName === 'class') {
					if (htmlClasses.contains('dark')) {
						setTheme(<Moon />) // Define o ícone do tema como Lua se a classe 'dark' estiver presente
						setIsDarkTheme(true)
						localStorage.setItem('theme', 'dark') // Armazena o tema escuro no localStorage
					} else {
						setTheme(<Sun />)
						setIsDarkTheme(false)
						localStorage.setItem('theme', 'light') // Armazena o tema claro no localStorage
					}
				}
			}
		})

		observer.observe(document.documentElement, {
			attributes: true,
			attributeOldValue: true,
		})

		return () => observer.disconnect()
	}, [])

	function toggleThemeMode() {
		const page = document.querySelector('body')
		page?.classList.toggle('dark') // Alterna entre os modos de tema ao adicionar ou remover a classe 'dark' do corpo da página
	}

	const handleToggleTheme = () => {
		if (isDarkTheme) {
			setTheme(<Sun />)
			setIsDarkTheme(false)
			localStorage.setItem('theme', 'light')
		} else {
			setTheme(<Moon />)
			setIsDarkTheme(true)
			localStorage.setItem('theme', 'dark')
		}
		toggleThemeMode() // Alterna o modo de tema
	}

	return (
		<button type='button' onClick={handleToggleTheme} className='transition'>
			{theme}
			{/*Mostra o ícone do tema */}
		</button>
	)
}
