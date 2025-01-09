import React, { useEffect } from 'react'

export const useMobileModal = () => {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false)

	useEffect(() => {
		document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto'
		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [isMenuOpen])

	const handleClickOutside = (e: React.MouseEvent) => {
		const menu = e.target as HTMLElement
		if (menu.classList.contains('menu-modal')) {
			setIsMenuOpen(false)
		}
	}

	const toggleMenu = () => {
		setIsMenuOpen(prevState => !prevState)
	}

	return {
		isMenuOpen,
		setIsMenuOpen,
		toggleMenu,
		handleClickOutside,
	}
}
