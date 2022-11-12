import { makeAxiosHttpClient } from '../http'
import { RemoteCreateAccount } from '@/data/useCases'
import { Account } from '@/domain/useCases'

export const makeRemoteCreateAccount =
	(): Account.CreateAccount.CreateAccount =>
		new RemoteCreateAccount('user', makeAxiosHttpClient<void>())
