import * as FaIcons from 'react-icons/fa'
import useRenderClient from 'utils/Hooks/useRenderClient'

export default function FaIcon({ name }) {
	const { isRenderClient } = useRenderClient()
	const IconComponent = FaIcons[name]

	if (isRenderClient)
		return name ? (
			<IconComponent style={{ pointerEvents: 'none' }} />
		) : (
			<FaIcons.FaFlag />
		)
	else return null
}
