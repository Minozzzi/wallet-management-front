import React, { useEffect, useState } from 'react'

import * as S from './styles'

type LoadingProps = {
	/**
	 * It is the Loading size
	 */
	size?: number

	/**
	 * It is the delay to show the Loading
	 */
	delay?: number
}

export const Loading: React.FC<LoadingProps> = ({ size = 32, delay = 0 }) => {
	const [show, setShow] = useState(false)

	useEffect(() => {
		let timeout: ReturnType<typeof setTimeout>

		if (delay > 0) timeout = setTimeout(() => setShow(true), delay)

		return () => {
			clearTimeout(timeout)
		}
	}, [delay])

	if (delay === 0) return <S.Loader size={size} />

	if (show) return <S.Loader size={size} />

	return null
}
