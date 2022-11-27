import React from 'react'

import * as S from './styles'

type IconButtonProps = {
	icon: React.ReactNode
	onClick: () => void
}

export const IconButton: React.FC<IconButtonProps> = ({ icon, onClick }) => {
	return <S.IconButton onClick={onClick}>{icon}</S.IconButton>
}
