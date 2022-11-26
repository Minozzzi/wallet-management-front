import React from 'react'

import { Root, Portal } from '@radix-ui/react-popover'
import { CaretDown } from 'phosphor-react'

import * as S from './styles'

export type PopoverItemProps = {
	icon: React.ReactNode
	text: string
}

type PopoverProps = {
	items: PopoverItemProps[]
}

export const Popover: React.FC<PopoverProps> = ({ items }) => (
	<Root>
		<S.PopoverTrigger>
			<CaretDown />
		</S.PopoverTrigger>

		<Portal>
			<S.PopoverContent sideOffset={4}>
				{items.map(({ icon, text }) => (
					<S.PopoverItem key={text}>
						{icon}
						<S.PopoverItemText>{text}</S.PopoverItemText>
					</S.PopoverItem>
				))}
			</S.PopoverContent>
		</Portal>
	</Root>
)
