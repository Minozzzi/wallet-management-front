import {
	RemoteLoginAccount,
	RemoteLoginAccountNamespace
} from '@/data/useCases/account'
import { Account } from '@/domain/useCases'
import { makeAxiosHttpClient } from '@/main/factories/http'

export const makeRemoteLoginAccount = (): Account.LoginAccount.LoginAccount =>
	new RemoteLoginAccount(
		'login',
		makeAxiosHttpClient<RemoteLoginAccountNamespace.Response>()
	)
