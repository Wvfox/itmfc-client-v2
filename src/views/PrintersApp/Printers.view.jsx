import cn from 'classnames'
import { iconNames } from 'config/icons.data'
import Layout from 'shared/Layout/Layout'
import FaIcon from 'ui/Icons/FaIcon'
import QueryDataStatus from 'utils/QueryData/queryDataStatus'
import styles from './Printers.module.scss'
import usePrinters from './usePrinters'

export default function PrintersView({ tab }) {
	const { queryDataPrinters } = usePrinters()
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
								</li>
							))}
					</ul>
				</section>
			</div>
		</Layout>
	)
}
