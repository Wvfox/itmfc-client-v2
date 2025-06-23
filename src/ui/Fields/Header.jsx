import cn from 'classnames'
import styles from './Fields.module.scss'

export default function FieldHeader({
	required,
	title,
	counter,
	maxLength,
	isWrapper = false,
	fieldSelect = false,
}) {
	return (
		<div className={cn(styles.header, { [styles.header_single]: !isWrapper })}>
			{required && <span className={cn(styles.header__required)}>*</span>}
			{/* Подпись */}
			<h5
				className={cn(styles.header__title, {
					//
					[styles.fieldSelect__title]: fieldSelect,
				})}
			>
				{title}
			</h5>
			{/* Счетчик символов */}
			{maxLength && (
				<div className={styles.header__counter}>
					{`[`}
					<span>{`${counter}/${maxLength}`}</span>
					{`]`}
				</div>
			)}
		</div>
	)
}
