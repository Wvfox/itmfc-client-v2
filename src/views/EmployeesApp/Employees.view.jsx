import cn from 'classnames'
import { iconNames } from 'config/icons.data'
import Layout from 'shared/Layout/Layout'
import AuthControl from 'ui/AuthControl/AuthControl'
import FaIcon from 'ui/Icons/FaIcon'
import QueryDataStatus from 'utils/QueryData/queryDataStatus'
import styles from './Employees.module.scss'
import useEmployees from './useEmployees'

export default function EmployeesView({ tab }) {
	const { queryDataPersonal } = useEmployees()
	return (
		<Layout tab={tab} title='Список сотрудников'>
			{QueryDataStatus(queryDataPersonal) ? (
				<ul className={styles.employee__list}>
					{queryDataPersonal.data.map(elem => (
						<li key={elem.id} className={styles.employee__container}>
							<div className={styles.employee__header}>
								<i className={styles.employee__icon}>
									<FaIcon name={iconNames.name} />
								</i>
								<h4 className={styles.employee__name}>{String(elem.name)}</h4>
							</div>
							<div
								className={cn(
									styles.employee__param,
									styles.employee__param_id
								)}
							>
								<i className={styles.employee__icon}>
									<FaIcon name={iconNames.id} />
								</i>
								<h5 className={styles.employee__caption}>Идентификатор:</h5>
								<p className={styles.employee__data}>{String(elem.id)}</p>
							</div>
							<div
								className={cn(
									styles.employee__param,
									styles.employee__param_username
								)}
							>
								<i className={styles.employee__icon}>
									<FaIcon name={iconNames.username} />
								</i>
								<h5 className={styles.employee__caption}>Логин:</h5>
								<p className={styles.employee__data}>{String(elem.username)}</p>
							</div>
							<div
								className={cn(
									styles.employee__param,
									styles.employee__param_isAdmin
								)}
							>
								<i className={styles.employee__icon}>
									<FaIcon name={iconNames.is_admin} />
								</i>
								<h5 className={styles.employee__caption}>
									Статус администратора:
								</h5>
								<p className={styles.employee__data}>{String(elem.is_admin)}</p>
							</div>
							<div
								className={cn(
									styles.employee__param,
									styles.employee__param_tgId
								)}
							>
								<i className={styles.employee__icon}>
									<FaIcon name={iconNames.tg_id} />
								</i>
								<h5 className={styles.employee__caption}>Тг-идентификатор:</h5>
								<p className={styles.employee__data}>{String(elem.tg_id)}</p>
							</div>
							<div
								className={cn(
									styles.employee__param,
									styles.employee__param_tgTag
								)}
							>
								<i className={styles.employee__icon}>
									<FaIcon name={iconNames.tg_tag} />
								</i>
								<h5 className={styles.employee__caption}>Тг-тэг:</h5>
								<p className={styles.employee__data}>{String(elem.tag)}</p>
							</div>
							<div
								className={cn(
									styles.employee__param,
									styles.employee__param_ecp
								)}
							>
								<i className={styles.employee__icon}>
									<FaIcon name={iconNames.ecp} />
								</i>
								<h5 className={styles.employee__caption}>Окончание ЭЦП:</h5>
								<p className={styles.employee__data}>{String(elem.date_ecp)}</p>
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
								<p className={styles.employee__data}>
									{String(elem.departament)}
								</p>
							</div>
							<div
								className={cn(
									styles.employee__param,
									styles.employee__param_job
								)}
							>
								<i className={styles.employee__icon}>
									<FaIcon name={iconNames.job} />
								</i>
								<h5 className={styles.employee__caption}>Должность</h5>
								<p className={styles.employee__data}>job</p>
							</div>
							<div
								className={cn(
									styles.employee__param,
									styles.employee__param_isHead
								)}
							>
								<i className={styles.employee__icon}>
									<FaIcon name={iconNames.is_head} />
								</i>
								<h5 className={styles.employee__caption}>Глава отдела:</h5>
								<p className={styles.employee__data}>{String(elem.is_head)}</p>
							</div>
							<div
								className={cn(
									styles.employee__param,
									styles.employee__param_birthday
								)}
							>
								<i className={styles.employee__icon}>
									<FaIcon name={iconNames.birthday} />
								</i>
								<h5 className={styles.employee__caption}>День рождения:</h5>
								<p className={styles.employee__data}>{String(elem.birthday)}</p>
							</div>
							<div
								className={cn(
									styles.employee__param,
									styles.employee__param_email
								)}
							>
								<i className={styles.employee__icon}>
									<FaIcon name={iconNames.email} />
								</i>
								<h5 className={styles.employee__caption}>Почта-мосрег:</h5>
								<p className={styles.employee__data}>{String(elem.email)}</p>
							</div>
							<div
								className={cn(
									styles.employee__param,
									styles.employee__param_telephone
								)}
							>
								<i className={styles.employee__icon}>
									<FaIcon name={iconNames.telephone} />
								</i>
								<h5 className={styles.employee__caption}>Телефон:</h5>
								<p className={styles.employee__data}>
									{String(elem.telephone)}
								</p>
							</div>
							<div
								className={cn(
									styles.employee__param,
									styles.employee__param_created
								)}
							>
								<i className={styles.employee__icon}>
									<FaIcon name={iconNames.created} />
								</i>
								<h5 className={styles.employee__caption}>Дата создания:</h5>
								<p className={styles.employee__data}>
									{String(elem.created_at)}
								</p>
							</div>
							<div
								className={cn(
									styles.employee__param,
									styles.employee__param_updated
								)}
							>
								<i className={styles.employee__icon}>
									<FaIcon name={iconNames.updated} />
								</i>
								<h5 className={styles.employee__caption}>Дата изменения:</h5>
								<p className={styles.employee__data}>
									{String(elem.updated_at)}
								</p>
							</div>
						</li>
					))}
				</ul>
			) : (
				<AuthControl />
			)}
		</Layout>
	)
}
