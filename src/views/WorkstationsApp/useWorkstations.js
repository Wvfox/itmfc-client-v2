import { useQuery } from 'react-query'
import { ControlService } from 'services/Control.service'

export default function useWorkstations() {
	// Запрос на сервер для получение временного периода
	const queryDataWorkstations = useQuery(
		'Workstations list',
		() => ControlService.getAllWorkstations(),
		{
			// Форматирование полученных данных
			select: ({ data }) => data,
		}
	)

	return { queryDataWorkstations }
}
