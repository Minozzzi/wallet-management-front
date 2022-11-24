import React from 'react'

import { useLocation } from 'react-router-dom'

import * as S from './styles'

export type MenuItem = {
	icon: React.ReactNode
	label: string
	path: string
}

type SidebarProps = {
	menuItems: Readonly<MenuItem[]>
}

export const Sidebar: React.FC<SidebarProps> = ({ menuItems }) => {
	const currentPath = useLocation().pathname

	return (
		<S.Sidebar>
			<S.Logo>Wallet Management</S.Logo>

			<S.Menu>
				{menuItems.map(item => (
					<S.MenuItem
						key={item.path}
						active={String(item.path === currentPath)}
						to={item.path}
					>
						{item.icon}
						<S.MenuItemLabel>{item.label}</S.MenuItemLabel>
					</S.MenuItem>
				))}
			</S.Menu>
		</S.Sidebar>
	)
}
