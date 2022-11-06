import { MakeSignUpPage } from '@/main/factories/pages/signUpFactory'

export const ROUTES = Object.freeze({
	signUp: {
		path: () => 'nova-conta',
		component: <MakeSignUpPage />
	}
})
