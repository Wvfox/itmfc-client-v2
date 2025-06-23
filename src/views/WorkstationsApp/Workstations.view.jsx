import Layout from 'shared/Layout/Layout'
import QueryDataStatus from 'utils/QueryData/queryDataStatus'
import styles from './Workstations.module.scss'
import ItemWorkstations from './components/Item'
import NewWorkstations from './components/New'
import useWorkstations from './useWorkstations'

export default function WorkstationsView({ tab }) {
	const { queryDataWorkstations } = useWorkstations()

	return (
		<Layout tab={tab} title='Список рабочих мест'>
			<div className={styles.workstations}>
				<ul className={styles.workstations__list}>
					{QueryDataStatus(queryDataWorkstations) &&
						queryDataWorkstations.data.map(elem => (
							<ItemWorkstations key={elem.id} item={elem} />
						))}
					<NewWorkstations />
				</ul>
			</div>
		</Layout>
	)
}
