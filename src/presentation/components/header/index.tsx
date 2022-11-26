import React from 'react'

import { Popover, PopoverItemProps } from '../popover'
import * as S from './styles'

type HeaderProps = {
	items: PopoverItemProps[]
}

export const Header: React.FC<HeaderProps> = ({ items }) => {
	return (
		<S.Header>
			<S.UserContent>
				<S.UserPhoto src='https://github.com/minozzzi.png' />
				<S.UserName>Guilherme Minozzi</S.UserName>
				<Popover items={items} />
			</S.UserContent>
		</S.Header>
	)
}
