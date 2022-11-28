import React from 'react'

import * as S from './styles'

type IconButtonProps = {
	icon: React.ReactNode
	hasBackground?: boolean
	onClick: () => void
}

export const IconButton: React.FC<IconButtonProps> = ({
	icon,
	hasBackground = true,
	onClick
}) => {
	return (
		<S.IconButton hasBackground={hasBackground} onClick={onClick}>
			{icon}
		</S.IconButton>
	)
}
