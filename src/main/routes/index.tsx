import React from 'react'

import { Route, Routes } from 'react-router-dom'

import { ROUTES } from './routes'

export { ROUTES } from './routes'
export { menuItems } from './menu'

export const Router: React.FC = () => {
	return (
		<Routes>
			{Object.entries(ROUTES).map(([key, route]) => (
				<Route key={key} path={route.path()} element={route.component} />
			))}

			<Route path='*' element={<h1>404</h1>} />
		</Routes>
	)
}
