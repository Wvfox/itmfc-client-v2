import { useQuery } from 'react-query'
import { ControlService } from 'services/Control.service'

export default function usePrinters() {
	// Запрос на сервер для получение временного периода
	const queryDataPrinters = useQuery(
		'Printers list',
		() => ControlService.getAllPrinters(),
		{
			// Форматирование полученных данных
			select: ({ data }) => data,
		}
	)

	return { queryDataPrinters }
}
