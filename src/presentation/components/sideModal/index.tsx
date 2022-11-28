import React from 'react'

import { X } from 'phosphor-react'

import { IconButton } from '../iconButton'
import * as S from './styles'

type SideModalProps = {
	title: string
	isOpen: boolean
	children: React.ReactNode
	handleOnClose: () => void
}

export const SideModal: React.FC<SideModalProps> = ({
	title,
	isOpen,
	children,
	handleOnClose
}) => {
	if (!isOpen) return null

	return (
		<S.Overlay onClick={handleOnClose}>
			<S.Container
				className={isOpen ? 'open' : 'close'}
				onClick={e => e.stopPropagation()}
			>
				<S.Header>
					<S.Title>{title}</S.Title>
					<IconButton
						icon={<X />}
						hasBackground={false}
						onClick={handleOnClose}
					/>
				</S.Header>

				<S.Content>{children}</S.Content>
			</S.Container>
		</S.Overlay>
	)
}
