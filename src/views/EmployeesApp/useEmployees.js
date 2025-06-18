import { useQuery } from 'react-query'
import { ControlService } from 'services/Control.service'

export default function useEmployees() {
	// Запрос на сервер для получение временного периода
	const queryDataPersonal = useQuery(
		'Employees list',
		() => ControlService.getAllOperators(),
		{
			// Форматирование полученных данных
			select: ({ data }) => data,
		}
	)

	return { queryDataPersonal }
}
