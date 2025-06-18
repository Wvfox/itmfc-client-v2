import * as AiIcons from 'react-icons/ai'
import useRenderClient from 'utils/Hooks/useRenderClient'

export default function AiIcon({ name }) {
	const { isRenderClient } = useRenderClient()
	const IconComponent = AiIcons[name]

	if (isRenderClient)
		return name ? (
			<IconComponent style={{ pointerEvents: 'none' }} />
		) : (
			<AiIcons.AiFillFileUnknown />
		)
	else return null
}
