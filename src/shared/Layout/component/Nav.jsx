import cn from 'classnames'
import { iconNames } from 'config/icons.data'
import Link from 'next/link'
import { useState } from 'react'
import AiIcon from 'ui/Icons/AiIcon'
import styles from '../Layout.module.scss'

const navList = [
	{
		title: 'Главная',
		url: '/',
		icon: iconNames.home,
	},
	{
		title: 'Реклама',
		url: '/advertising',
		icon: iconNames.advertising,
	},
	{
		title: 'Сотрудники',
		url: '/employees',
		icon: iconNames.employees,
	},
	{
		title: 'Рабочие места',
		url: '/workstations',
		icon: iconNames.workstations,
	},
	{
		title: 'Принтеры',
		url: '/printers',
		icon: iconNames.printers,
	},
	{
		title: 'Ссылки',
		url: '/urls',
		icon: iconNames.urls,
	},
]

export default function NavLayout() {
	const [isOpenMenu, setIsOpenMenu] = useState(false)

	return (
		<nav className={cn(styles.nav, { [styles.nav_open]: isOpenMenu })}>
			<div
				className={styles.nav__menu}
				onClick={() => setIsOpenMenu(!isOpenMenu)}
			></div>
			<div className={styles.nav__list}>
				{navList.map(elem => (
					<Link key={elem.url} href={elem.url} className={styles.nav__item}>
						<i className={styles.nav__icon}>
							<AiIcon name={elem.icon} />
						</i>
						<h5 className={styles.nav__caption}>{elem.title}</h5>
					</Link>
				))}
			</div>
		</nav>
	)
}
