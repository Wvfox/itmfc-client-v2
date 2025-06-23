import Meta from 'shared/Meta/Meta'
import styles from './Layout.module.scss'
import NavLayout from './component/Nav'

export default function Layout({ children, tab, title }) {
	return (
		<Meta tab={tab}>
			<div className={styles.wrapper}>
				<picture className={styles.logo}></picture>
				<NavLayout />
				<header id='header' className={styles.header}>
					<h1 className={styles.header__title}>{title}</h1>
				</header>
				<main className={styles.main}>{children}</main>
			</div>
		</Meta>
	)
}
