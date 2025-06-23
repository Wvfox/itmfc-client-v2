import cn from 'classnames'
import { iconNames } from 'config/icons.data'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import BtnSubmit from 'ui/Buttons/Submit'
import FieldWrapperInput from 'ui/Fields/Input'
import FaIcon from 'ui/Icons/FaIcon'
import PopupBasicWrap from 'ui/Popup/Popup.wrapper'
import handleCloseEsc from 'utils/Popup/handleCloseEsc'
import styles from '../Employees.module.scss'

export default function ItemEmployees({ item }) {
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
		setValue('username', item.username)
		setValue('tg_id', item.tg_id)
		setValue('tag', item.tag)
		setValue('is_admin', item.is_admin)
		setValue('departament', item.departament)
		setValue('job', item.job)
		setValue('date_ecp', item.date_ecp)
		setValue('is_head', item.is_head)
		setValue('email', item.email)
		setValue('birthday', item.birthday)
		setValue('telephone', item.telephone)
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
		<li className={styles.employee__container}>
			<div className={styles.employee__header}>
				<i className={styles.employee__icon}>
					<FaIcon name={iconNames.name} />
				</i>
				<h4 className={styles.employee__name}>{String(item.name)}</h4>
				<button className={styles.employee__edit} onClick={() => handleOpen()}>
					<FaIcon name={iconNames.edit} />
				</button>
				<button className={styles.employee__del}>
					<FaIcon name={iconNames.close} />
				</button>
			</div>
			<div className={cn(styles.employee__param, styles.employee__param_id)}>
				<i className={styles.employee__icon}>
					<FaIcon name={iconNames.id} />
				</i>
				<h5 className={styles.employee__caption}>Идентификатор:</h5>
				<p className={styles.employee__data}>{String(item.id)}</p>
			</div>
			<div
				className={cn(styles.employee__param, styles.employee__param_username)}
			>
				<i className={styles.employee__icon}>
					<FaIcon name={iconNames.username} />
				</i>
				<h5 className={styles.employee__caption}>Логин:</h5>
				<p className={styles.employee__data}>{String(item.username)}</p>
			</div>
			<div
				className={cn(styles.employee__param, styles.employee__param_isAdmin)}
			>
				<i className={styles.employee__icon}>
					<FaIcon name={iconNames.is_admin} />
				</i>
				<h5 className={styles.employee__caption}>Статус администратора:</h5>
				<p className={styles.employee__data}>{String(item.is_admin)}</p>
			</div>
			<div className={cn(styles.employee__param, styles.employee__param_tgId)}>
				<i className={styles.employee__icon}>
					<FaIcon name={iconNames.tg_id} />
				</i>
				<h5 className={styles.employee__caption}>Тг-идентификатор:</h5>
				<p className={styles.employee__data}>{String(item.tg_id)}</p>
			</div>
			<div className={cn(styles.employee__param, styles.employee__param_tgTag)}>
				<i className={styles.employee__icon}>
					<FaIcon name={iconNames.tg_tag} />
				</i>
				<h5 className={styles.employee__caption}>Тг-тэг:</h5>
				<p className={styles.employee__data}>{String(item.tag)}</p>
			</div>
			<div className={cn(styles.employee__param, styles.employee__param_ecp)}>
				<i className={styles.employee__icon}>
					<FaIcon name={iconNames.ecp} />
				</i>
				<h5 className={styles.employee__caption}>Окончание ЭЦП:</h5>
				<p className={styles.employee__data}>{String(item.date_ecp)}</p>
			</div>
			<div
				className={cn(
					styles.employee__param,
					styles.employee__param_departament
				)}
			>
				<i className={styles.employee__icon}>
					<FaIcon name={iconNames.departament} />
				</i>
				<h5 className={styles.employee__caption}>Отдел:</h5>
				<p className={styles.employee__data}>{String(item.departament)}</p>
			</div>
			<div className={cn(styles.employee__param, styles.employee__param_job)}>
				<i className={styles.employee__icon}>
					<FaIcon name={iconNames.job} />
				</i>
				<h5 className={styles.employee__caption}>Должность:</h5>
				<p className={styles.employee__data}>job</p>
			</div>
			<div
				className={cn(styles.employee__param, styles.employee__param_isHead)}
			>
				<i className={styles.employee__icon}>
					<FaIcon name={iconNames.is_head} />
				</i>
				<h5 className={styles.employee__caption}>Глава отдела:</h5>
				<p className={styles.employee__data}>{String(item.is_head)}</p>
			</div>
			<div
				className={cn(styles.employee__param, styles.employee__param_birthday)}
			>
				<i className={styles.employee__icon}>
					<FaIcon name={iconNames.birthday} />
				</i>
				<h5 className={styles.employee__caption}>День рождения:</h5>
				<p className={styles.employee__data}>{String(item.birthday)}</p>
			</div>
			<div className={cn(styles.employee__param, styles.employee__param_email)}>
				<i className={styles.employee__icon}>
					<FaIcon name={iconNames.email} />
				</i>
				<h5 className={styles.employee__caption}>Почта-мосрег:</h5>
				<p className={styles.employee__data}>{String(item.email)}</p>
			</div>
			<div
				className={cn(styles.employee__param, styles.employee__param_telephone)}
			>
				<i className={styles.employee__icon}>
					<FaIcon name={iconNames.telephone} />
				</i>
				<h5 className={styles.employee__caption}>Телефон:</h5>
				<p className={styles.employee__data}>{String(item.telephone)}</p>
			</div>
			<div
				className={cn(styles.employee__param, styles.employee__param_created)}
			>
				<i className={styles.employee__icon}>
					<FaIcon name={iconNames.created} />
				</i>
				<h5 className={styles.employee__caption}>Дата создания:</h5>
				<p className={styles.employee__data}>{String(item.created_at)}</p>
			</div>
			<div
				className={cn(styles.employee__param, styles.employee__param_updated)}
			>
				<i className={styles.employee__icon}>
					<FaIcon name={iconNames.updated} />
				</i>
				<h5 className={styles.employee__caption}>Дата изменения:</h5>
				<p className={styles.employee__data}>{String(item.updated_at)}</p>
			</div>

			<PopupBasicWrap
				status={isCreating}
				title='Добавление принтера'
				handleClose={handleClose}
			>
				<form onSubmit={handleSubmit(onSubmit)}>
					<FieldWrapperInput
						title='Идентификатор'
						iconType='fa'
						icon={iconNames.id}
						error={errors.id}
					>
						<input {...register('id')} placeholder='' autoComplete='off' />
					</FieldWrapperInput>
					<FieldWrapperInput
						title='Логин'
						iconType='fa'
						icon={iconNames.username}
						error={errors.username}
					>
						<input
							{...register('username')}
							placeholder=''
							autoComplete='off'
						/>
					</FieldWrapperInput>
					<FieldWrapperInput
						title='Тг-идентификатор'
						iconType='fa'
						icon={iconNames.tg_id}
						error={errors.tg_id}
					>
						<input {...register('tg_id')} placeholder='' autoComplete='off' />
					</FieldWrapperInput>
					<FieldWrapperInput
						title='Тг-тэг'
						iconType='fa'
						icon={iconNames.tg_tag}
						error={errors.tag}
					>
						<input {...register('tag')} placeholder='' autoComplete='off' />
					</FieldWrapperInput>
					<FieldWrapperInput
						title='Статус администратора'
						iconType='fa'
						icon={iconNames.is_admin}
						error={errors.is_admin}
					>
						<input
							{...register('is_admin')}
							placeholder=''
							autoComplete='off'
						/>
					</FieldWrapperInput>
					<FieldWrapperInput
						title='Отдел'
						iconType='fa'
						icon={iconNames.departament}
						error={errors.departament}
					>
						<input
							{...register('departament')}
							placeholder=''
							autoComplete='off'
						/>
					</FieldWrapperInput>
					<FieldWrapperInput
						title='Должность'
						iconType='fa'
						icon={iconNames.job}
						error={errors.job}
					>
						<input {...register('job')} placeholder='' autoComplete='off' />
					</FieldWrapperInput>
					<FieldWrapperInput
						title='Окончание ЭЦП'
						iconType='fa'
						icon={iconNames.ecp}
						error={errors.date_ecp}
					>
						<input
							{...register('date_ecp')}
							placeholder=''
							autoComplete='off'
						/>
					</FieldWrapperInput>
					<FieldWrapperInput
						title='Глава отдела'
						iconType='fa'
						icon={iconNames.is_head}
						error={errors.is_head}
					>
						<input {...register('is_head')} placeholder='' autoComplete='off' />
					</FieldWrapperInput>
					<FieldWrapperInput
						title='Почта-мосрег'
						iconType='fa'
						icon={iconNames.email}
						error={errors.email}
					>
						<input {...register('email')} placeholder='' autoComplete='off' />
					</FieldWrapperInput>
					<FieldWrapperInput
						title='День рождения'
						iconType='fa'
						icon={iconNames.birthday}
						error={errors.birthday}
					>
						<input
							{...register('birthday')}
							placeholder=''
							autoComplete='off'
						/>
					</FieldWrapperInput>
					<FieldWrapperInput
						title='Телефон'
						iconType='fa'
						icon={iconNames.telephone}
						error={errors.telephone}
					>
						<input
							{...register('telephone')}
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
