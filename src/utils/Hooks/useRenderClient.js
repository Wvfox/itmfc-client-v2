import { useEffect, useState } from 'react'

// Хук для проверки клиентская или серверная часть

export default function useRenderClient() {
	const [isRenderClient, setIsRenderClient] = useState(false)

	useEffect(() => {
		!isRenderClient && setIsRenderClient(true)
	}, [isRenderClient])

	return { isRenderClient }
}
