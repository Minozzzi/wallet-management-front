import { RemoteCreateAccount } from '@/data/useCases/account'
import { Account } from '@/domain/useCases'
import { makeAxiosHttpClient } from '@/main/factories/http'

export const makeRemoteCreateAccount =
	(): Account.CreateAccount.CreateAccount =>
		new RemoteCreateAccount('user', makeAxiosHttpClient<void>())
