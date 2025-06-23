import cn from 'classnames'
import { iconNames } from 'config/icons.data'
import AiIcon from 'ui/Icons/AiIcon'
import styles from './Popup.module.scss'

export default function PopupBasicWrap({
	children,
	status,
	title,
	handleClose,
	size = 'medium',
}) {
	return (
		<div
			className={cn(styles.popup, {
				// Статус активации модального окна
				[styles.popup_active]: status,
			})}
		>
			<div className={cn(styles.popup__body, styles.body)}>
				<div
					className={cn(styles.popup__container, styles.container, {
						// Стили для размеров
						[styles.size_medium]: size === 'medium',
						[styles.size_lg]: size === 'large',
						[styles.size_xl]: size === 'xl',
					})}
				>
					{/* Кнопка закрытия модального окна */}
					<button
						className={cn(styles.popup__close, styles.close)}
						onClick={() => handleClose()}
						type='button'
					>
						<AiIcon name={iconNames.close} />
					</button>
					<h5 className={cn(styles.popup__title, styles.title)}>{title}</h5>
					{children}
				</div>
			</div>
		</div>
	)
}
