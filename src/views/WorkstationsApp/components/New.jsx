import cn from 'classnames'
import { iconNames } from 'config/icons.data'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import BtnSubmit from 'ui/Buttons/Submit'
import FieldWrapperInput from 'ui/Fields/Input'
import PopupBasicWrap from 'ui/Popup/Popup.wrapper'
import handleCloseEsc from 'utils/Popup/handleCloseEsc'
import styles from '../Workstations.module.scss'

export default function NewWorkstations() {
	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm('onSubmit')
	const [isCreating, setIsCreating] = useState(false)

	const handleOpen = () => {
		reset()
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
		<>
			<li
				className={cn(
					styles.workstations__container,
					styles.workstations__container_new
				)}
				onClick={() => handleOpen()}
			>
				Добавить рабочее место
			</li>
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
		</>
	)
}
