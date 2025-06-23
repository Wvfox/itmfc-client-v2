import cn from 'classnames'
import { iconNames } from 'config/icons.data'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import BtnSubmit from 'ui/Buttons/Submit'
import FieldWrapperInput from 'ui/Fields/Input'
import AiIcon from 'ui/Icons/AiIcon'
import FaIcon from 'ui/Icons/FaIcon'
import PopupBasicWrap from 'ui/Popup/Popup.wrapper'
import handleCloseEsc from 'utils/Popup/handleCloseEsc'
import styles from '../Workstations.module.scss'

export default function ItemWorkstations({ item }) {
	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
		setFocus,
		setValue,
		reset,
	} = useForm('onSubmit')
	const [isCreating, setIsCreating] = useState(false)

	const handleOpen = () => {
		reset()
		setValue('id', item.id)
		setValue('name_desktop', item.name_desktop)
		setValue('ip_desktop', item.ip_desktop)
		setValue('mac_desktop', item.mac_desktop)
		setValue('ip_assistant', item.ip_assistant)
		setIsCreating(true)
	}
	const handleClose = () => {
		setIsCreating(false)
	}
	const onSubmit = data => {
		console.log(data)
	}

	// Закрытие модального окна при помощи клавиши Esc
	useEffect(() => {
		handleCloseEsc(isCreating, handleClose)
	}, [isCreating])

	return (
		<li className={styles.workstations__container}>
			<div className={styles.workstations__header}>
				<h4 className={styles.workstations__title}>
					{String(item.name_desktop)}
				</h4>
			</div>
			<div className={styles.workstations__body}>
				<div
					className={cn(styles.workstations__info, styles.workstations__item)}
				>
					<div className={styles.workstations__param}>
						<i className={styles.workstations__icon}>
							<FaIcon name={iconNames.desktop_name} />
						</i>
						<h5 className={styles.workstations__caption}>IP-адрес:</h5>
						<p className={styles.workstations__data}>
							{String(item.ip_desktop)}
						</p>
					</div>
					<div className={styles.workstations__param}>
						<i className={styles.workstations__icon}>
							<FaIcon name={iconNames.mac} />
						</i>
						<h5 className={styles.workstations__caption}>MAC-адрес:</h5>
						<p className={styles.workstations__data}>
							{String(item.mac_desktop)}
						</p>
					</div>
					<div className={styles.workstations__param}>
						<i className={styles.workstations__icon}>
							<FaIcon name={iconNames.assistant} />
						</i>
						<h4 className={styles.workstations__caption}>Ассистент:</h4>
						<p className={styles.workstations__data}>
							{String(item.ip_assistant)}
						</p>
					</div>
				</div>
				<div
					className={cn(
						styles.workstations__printer,
						styles.workstations__item
					)}
				>
					<div className={styles.workstations__param}>
						<i className={styles.workstations__icon}>
							<FaIcon name={iconNames.printer_type} />
						</i>
						<h4 className={styles.workstations__caption}>Модель:</h4>
						<p className={styles.workstations__data}>data</p>
					</div>
					<div className={styles.workstations__param}>
						<i className={styles.workstations__icon}>
							<AiIcon name={iconNames.printers} />
						</i>
						<h4 className={styles.workstations__caption}>IP-адрес:</h4>
						<p className={styles.workstations__data}>data</p>
					</div>
					<div className={styles.workstations__param}>
						<h4 className={styles.workstations__caption}>Статус: </h4>
						<p className={styles.workstations__data}>data</p>
					</div>
				</div>
			</div>
			<div className={styles.workstations__footer}>
				<button type='button' className={styles.workstations__btn}>
					Удалить
				</button>
				<button type='button' className={styles.workstations__btn}>
					История
				</button>
				<button
					type='button'
					className={styles.workstations__btn}
					onClick={() => handleOpen()}
				>
					Изменить
				</button>
			</div>

			<PopupBasicWrap
				status={isCreating}
				title='Добавление принтера'
				handleClose={handleClose}
			>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input {...register('id')} style={{ display: 'none' }} />
					<FieldWrapperInput
						title='Имя рабочего места'
						iconType='ai'
						icon={iconNames.workstations}
						error={errors.name_desktop}
					>
						<input
							{...register('name_desktop')}
							placeholder=''
							autoComplete='off'
						/>
					</FieldWrapperInput>
					<FieldWrapperInput
						title='IP-адрес'
						iconType='fa'
						icon={iconNames.desktop_name}
						error={errors.ip_desktop}
					>
						<input
							{...register('ip_desktop')}
							placeholder=''
							autoComplete='off'
						/>
					</FieldWrapperInput>
					<FieldWrapperInput
						title='МАС-адрес'
						iconType='fa'
						icon={iconNames.mac}
						error={errors.mac_desktop}
					>
						<input
							{...register('mac_desktop')}
							placeholder=''
							autoComplete='off'
						/>
					</FieldWrapperInput>
					<FieldWrapperInput
						title='ID ассистент'
						iconType='fa'
						icon={iconNames.assistant}
						error={errors.ip_assistant}
					>
						<input
							{...register('ip_assistant')}
							placeholder=''
							autoComplete='off'
						/>
					</FieldWrapperInput>
					<FieldWrapperInput
						title='Принтер рабочего места'
						iconType='ai'
						icon={iconNames.printers}
						error={errors.printer_id}
					>
						<input
							{...register('printer_id')}
							placeholder=''
							autoComplete='off'
						/>
					</FieldWrapperInput>
					<BtnSubmit title='Изменить' />
				</form>
			</PopupBasicWrap>
		</li>
	)
}
