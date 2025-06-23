import cn from 'classnames'
import { iconNames } from 'config/icons.data'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Layout from 'shared/Layout/Layout'
import BtnSubmit from 'ui/Buttons/Submit'
import FieldWrapperInput from 'ui/Fields/Input'
import FaIcon from 'ui/Icons/FaIcon'
import PopupBasicWrap from 'ui/Popup/Popup.wrapper'
import handleCloseEsc from 'utils/Popup/handleCloseEsc'
import QueryDataStatus from 'utils/QueryData/queryDataStatus'
import styles from './Printers.module.scss'
import usePrinters from './usePrinters'

export default function PrintersView({ tab }) {
	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
		setFocus,
		setValue,
		reset,
	} = useForm('onSubmit')
	const { queryDataPrinters } = usePrinters()

	const [isCreating, setIsCreating] = useState(false)

	const handleOpen = () => {
		setIsCreating(true)
	}
	const handleClose = () => {
		setIsCreating(false)
	}

	// Закрытие модального окна при помощи клавиши Esc
	useEffect(() => {
		handleCloseEsc(isCreating, handleClose)
	}, [isCreating])

	return (
		<Layout tab={tab} title='Список принтеров'>
			<div className={styles.printers}>
				<section className={styles.printers__container}>
					<div className={styles.printers__header}>
						<div className={styles.printers__headline}>
							<i className={cn(styles.printers__icon, styles.printers_header)}>
								<FaIcon name={iconNames.printer_type} />
							</i>
							<h3 className={styles.printers__title}>Type</h3>
						</div>
						<div className={styles.printers__buttons}>
							<button
								type='button'
								className={styles.printers__btn}
								onClick={() => handleOpen()}
							>
								Добавить
							</button>
						</div>
					</div>
					<ul className={styles.printers__list}>
						{QueryDataStatus(queryDataPrinters) &&
							queryDataPrinters.data.map(elem => (
								<li
									key={elem.id}
									className={cn(styles.printers__card, styles.card)}
								>
									<h4 className={styles.card__title}>{elem.ip_printer}</h4>
									<div className={styles.card__status}>
										<div className={styles.card__headline}>
											<i className={styles.card__icon}>{/* color */}</i>
											<h5 className={styles.card__caption}>Статус:</h5>
										</div>
										<p className={styles.card__data}>status</p>
									</div>
									<div className={styles.card__buttons}>
										<button type='button' className={styles.card__btn}>
											История
										</button>
									</div>
									<button type='button' className={styles.card__del}>
										<FaIcon name={iconNames.close} />
									</button>
								</li>
							))}
					</ul>

					<PopupBasicWrap
						status={isCreating}
						title='Добавление принтера'
						handleClose={handleClose}
					>
						<FieldWrapperInput
							title='Модель принтера'
							iconType='fa'
							icon={iconNames.printer_type}
							error={errors.model_printer}
						>
							<input
								{...register('model_printer ')}
								placeholder=''
								autoComplete='off'
								disabled
							/>
						</FieldWrapperInput>
						<FieldWrapperInput
							required
							title='IP-адрес'
							iconType='ai'
							icon={iconNames.printers}
							error={errors.ip_printer}
						>
							<input
								{...register('ip_printer')}
								placeholder=''
								autoComplete='off'
							/>
						</FieldWrapperInput>
						<BtnSubmit title='Добавить' />
					</PopupBasicWrap>
				</section>
			</div>
		</Layout>
	)
}
