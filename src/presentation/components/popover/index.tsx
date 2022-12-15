import React, { useCallback, useState } from 'react'

import { Root, Portal } from '@radix-ui/react-popover'
import { CaretDown } from 'phosphor-react'

import * as S from './styles'

export type PopoverItemProps = {
	icon: React.ReactNode
	text: string
	onClick: () => void
}

type PopoverProps = {
	items: PopoverItemProps[]
}

export const Popover: React.FC<PopoverProps> = ({ items }) => {
	const [open, setOpen] = useState(false)

	const handleOnClick = useCallback((onClick: () => void) => {
		onClick()
		setOpen(false)
	}, [])

	return (
		<Root open={open} onOpenChange={() => setOpen(!open)}>
			<S.PopoverTrigger>
				<CaretDown />
			</S.PopoverTrigger>

			<Portal>
				<S.PopoverContent sideOffset={4}>
					{items.map(({ icon, text, onClick }) => (
						<S.PopoverItem key={text} onClick={() => handleOnClick(onClick)}>
							{icon}
							<S.PopoverItemText>{text}</S.PopoverItemText>
						</S.PopoverItem>
					))}
				</S.PopoverContent>
			</Portal>
		</Root>
	)
}
