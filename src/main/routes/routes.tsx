import React from 'react'

import { MakeLoginPage } from '../factories/pages'
import { PrivateRouteProxy } from '../proxies/privateRouteProxy'
import { MakeSignUpPage } from '@/main/factories/pages/signUpFactory'

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
	category: {
		path: () => '/',
		component: (
			<PrivateRouteProxy>
				<h1>abacate</h1>
			</PrivateRouteProxy>
		)
	}
})
