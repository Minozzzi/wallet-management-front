import React from 'react'

import {
	MakeSignUpPage,
	MakeLoginPage,
	MakeCategoryPage
} from '@/main/factories/pages/'

type RouteProps = {
	path: () => string
	component: React.ReactNode
}

type RoutesProps = {
	[key: string]: RouteProps
}

export const ROUTES = Object.freeze<RoutesProps>({
	login: {
		path: () => '/login',
		component: <MakeLoginPage />
	},
	signUp: {
		path: () => 'nova-conta',
		component: <MakeSignUpPage />
	},
	dashboard: {
		path: () => '/',
		component: <h1>Under construction!</h1>
	},
	category: {
		path: () => '/category',
		component: <MakeCategoryPage />
	}
})
