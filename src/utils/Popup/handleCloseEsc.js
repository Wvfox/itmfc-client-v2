import { handleLockDocument } from './handleLockDocument'

export default function handleCloseEsc(status, handleClose) {
	// Выравнивание документа при открытии и закрытии модального окна
	handleLockDocument(status)
	// Функция при нажатии на Esc
	const handleKeyDown = e => {
		if (e.key === 'Escape') {
			handleClose()
		}
	}
	document.addEventListener('keydown', handleKeyDown)
	return () => {
		document.removeEventListener('keydown', handleKeyDown)
	}
}
