import cn from 'classnames'
import AiIcon from 'ui/Icons/AiIcon'
import FaIcon from 'ui/Icons/FaIcon'
import FieldError from './Error'
import styles from './Fields.module.scss'
import FieldHeader from './Header'

export default function FieldWrapperInput({
	children,
	required,
	title,
	iconType = 'ai',
	icon,
	// size,
	counter,
	maxLength,
	error,
	disabled,
}) {
	return (
		<label
			className={cn(styles.label, {
				[styles.label_disabled]: disabled,
				// Отключение заголовка
				// [styles.label_notTitle]: !title,
				// Размер поля
				// [styles.label_large]: size === 'lg',
			})}
		>
			{/* Заголовок поля ввода */}
			{title && (
				<FieldHeader
					required={required}
					title={title}
					counter={counter}
					maxLength={maxLength}
					isWrapper
				/>
			)}
			<div
				className={cn(styles.field, styles.field__input, {
					[styles.field__input_icon]: icon,
				})}
			>
				{children}
				{/* Отображение иконки */}
				{icon && (
					<i className={styles.icon}>
						{iconType === 'ai' && <AiIcon name={icon} />}
						{iconType === 'fa' && <FaIcon name={icon} />}
					</i>
				)}
			</div>
			{/* Предупреждении об ошибке */}
			{error && <FieldError error={error} />}
		</label>
	)
}
