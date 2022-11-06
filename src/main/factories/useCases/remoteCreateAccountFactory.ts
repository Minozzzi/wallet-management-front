import { makeApiUrl, makeAxiosHttpClient } from '../http'
import { RemoteCreateAccount } from '@/data/useCases'
import { Account, CreateAccount } from '@/domain/useCases'
import { ROUTES } from '@/main/routes/routes'

export const makeRemoteCreateAccount = (): CreateAccount =>
	new RemoteCreateAccount(
		makeApiUrl(ROUTES.signUp.path()),
		makeAxiosHttpClient<Account.Result>()
	)
