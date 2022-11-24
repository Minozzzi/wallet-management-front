import React from 'react'

import { Navigate } from 'react-router-dom'

import { ROUTES } from '../routes'
import { Sidebar } from '@/presentation/components'
import { useAuth } from '@/presentation/store'

export const PrivateRouteProxy: React.FC<{ children: React.ReactNode }> = ({
	children
}) => {
	const { auth } = useAuth()

	if (auth?.token)
		return (
			<>
				<Sidebar />
				{children}
			</>
		)

	return <Navigate to={ROUTES.login.path()} />
}
