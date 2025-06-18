import cn from 'classnames'
import { iconNames } from 'config/icons.data'
import Layout from 'shared/Layout/Layout'
import AiIcon from 'ui/Icons/AiIcon'
import FaIcon from 'ui/Icons/FaIcon'
import QueryDataStatus from 'utils/QueryData/queryDataStatus'
import styles from './Workstations.module.scss'
import useWorkstations from './useWorkstations'

export default function WorkstationsView({ tab }) {
	const { queryDataWorkstations } = useWorkstations()
	return (
		<Layout tab={tab} title='Список рабочих мест'>
			<div className={styles.workstations}>
				<ul className={styles.workstations__list}>
					{QueryDataStatus(queryDataWorkstations) &&
						queryDataWorkstations.data.map(elem => (
							<li key={elem.id} className={styles.workstations__container}>
								<div className={styles.workstations__header}>
									<h4 className={styles.workstations__title}>
										{String(elem.name_desktop)}
									</h4>
								</div>
								<div className={styles.workstations__body}>
									<div
										className={cn(
											styles.workstations__info,
											styles.workstations__item
										)}
									>
										<div className={styles.workstations__param}>
											<i className={styles.workstations__icon}>
												<AiIcon name={iconNames.workstations} />
											</i>
											<h5 className={styles.workstations__caption}>
												IP-адрес:
											</h5>
											<p className={styles.workstations__data}>
												{String(elem.ip_desktop)}
											</p>
										</div>
										<div className={styles.workstations__param}>
											<i className={styles.workstations__icon}>
												<FaIcon name={iconNames.mac} />
											</i>
											<h5 className={styles.workstations__caption}>
												MAC-адрес:
											</h5>
											<p className={styles.workstations__data}>
												{String(elem.mac_desktop)}
											</p>
										</div>
										<div className={styles.workstations__param}>
											<i className={styles.workstations__icon}>
												<FaIcon name={iconNames.assistant} />
											</i>
											<h4 className={styles.workstations__caption}>
												Ассистент:
											</h4>
											<p className={styles.workstations__data}>
												{String(elem.ip_assistant)}
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
											<h4 className={styles.workstations__caption}>
												IP-адрес:
											</h4>
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
										История
									</button>
								</div>
							</li>
						))}
				</ul>
			</div>
		</Layout>
	)
}
