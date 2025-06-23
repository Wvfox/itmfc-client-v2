import cn from 'classnames'
import FaIcon from 'ui/Icons/FaIcon'
import styles from './Buttons.module.scss'

export default function BtnSubmit({
	hover = 'select',
	size = 'base',
	title,
	icon,
	onClick,
}) {
	return (
		<span
			onClick={onClick}
			className={cn(styles.submit, {
				// Стили для наведения
				[styles.hover_select]: hover === 'select',
				[styles.hover_delete]: hover === 'delete',
				// Стили для размера
				[styles.size_medium]: size === 'base',
			})}
		>
			{title && title}
			{icon && <FaIcon name={icon} />}
		</span>
	)
}
