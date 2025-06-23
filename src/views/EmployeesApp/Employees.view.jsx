import Layout from 'shared/Layout/Layout'
import AuthControl from 'ui/AuthControl/AuthControl'
import QueryDataStatus from 'utils/QueryData/queryDataStatus'
import ItemEmployees from './components/Item'
import styles from './Employees.module.scss'
import useEmployees from './useEmployees'

export default function EmployeesView({ tab }) {
	const { queryDataPersonal } = useEmployees()
	return (
		<Layout tab={tab} title='Список сотрудников'>
			{QueryDataStatus(queryDataPersonal) ? (
				<ul className={styles.employee__list}>
					{queryDataPersonal.data.map(elem => (
						<ItemEmployees key={elem.id} item={elem} />
					))}
				</ul>
			) : (
				<AuthControl />
			)}
		</Layout>
	)
}
