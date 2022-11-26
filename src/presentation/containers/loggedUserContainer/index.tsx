import React from 'react'

import * as S from './styles'

type LoggedUserContainerProps = {
	children: React.ReactNode
}

export const LoggedUserContainer: React.FC<LoggedUserContainerProps> = ({
	children
}) => {
	return <S.Content>{children}</S.Content>
}
