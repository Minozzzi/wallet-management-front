import React from 'react'

import * as S from './styles'

type LoadingProps = {
	/**
	 * It is the Loading size
	 */
	size?: number
}

export const Loading: React.FC<LoadingProps> = ({ size = 32 }) => {
	return <S.Loader size={size} />
}
