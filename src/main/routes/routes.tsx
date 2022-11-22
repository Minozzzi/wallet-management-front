import { MakeLoginPage } from '../factories/pages'
import { MakeSignUpPage } from '@/main/factories/pages/signUpFactory'

export const ROUTES = Object.freeze({
	login: {
		path: () => '/',
		component: <MakeLoginPage />
	},
	signUp: {
		path: () => 'nova-conta',
		component: <MakeSignUpPage />
	}
})
