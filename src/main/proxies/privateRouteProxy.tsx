import React, { useMemo } from 'react'

import { SignOut, UserCircle } from 'phosphor-react'
import { Navigate } from 'react-router-dom'
import styled from 'styled-components'

import { ROUTES, menuItems } from '../routes'
import { Header, PopoverItemProps, Sidebar } from '@/presentation/components'
import { LoggedUserContainer } from '@/presentation/containers'
import { useAuth } from '@/presentation/store'

const Main = styled.main`
	width: 100vw;
	height: 100vh;

	display: grid;
	grid-template-columns: 320px 1fr;
	grid-template-rows: 80px 1fr;
	grid-template-areas:
		'Sidebar Header'
		'Sidebar Content';
`

export const PrivateRouteProxy: React.FC<{ children: React.ReactNode }> = ({
	children
}) => {
	const { auth, handleSignOut } = useAuth()

	const headerItems = useMemo<PopoverItemProps[]>(
		() => [
			{
				icon: <UserCircle size={22} />,
				text: 'Perfil',
				onClick: () => alert('Under Construction')
			},
			{
				icon: <SignOut size={22} />,
				text: 'Sair',
				onClick: handleSignOut
			}
		],
		[handleSignOut]
	)

	if (auth?.token)
		return (
			<Main>
				<Sidebar menuItems={menuItems} />
				<Header items={headerItems} />
				<LoggedUserContainer>{children}</LoggedUserContainer>
			</Main>
		)

	return <Navigate to={ROUTES.login.path()} />
}
