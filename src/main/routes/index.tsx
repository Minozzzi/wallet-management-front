import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { ROUTES } from './routes'

export const Router: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				{Object.values(ROUTES).map(route => (
					<Route
						key={route.path()}
						path={route.path()}
						element={route.component}
					/>
				))}

				<Route path='*' element={<div>404</div>} />
			</Routes>
		</BrowserRouter>
	)
}
