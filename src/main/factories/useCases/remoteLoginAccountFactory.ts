import { makeAxiosHttpClient } from '../http'
import {
	RemoteLoginAccount,
	RemoteLoginAccountNamespace
} from '@/data/useCases'
import { Account } from '@/domain/useCases'

export const makeRemoteLoginAccount = (): Account.LoginAccount.LoginAccount =>
	new RemoteLoginAccount(
		'login',
		makeAxiosHttpClient<RemoteLoginAccountNamespace.Response>()
	)
