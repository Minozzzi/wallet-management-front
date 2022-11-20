import { AccountModel } from '@/domain/models'

export namespace LoginAccount {
	export type Params = {
		username: string
		password: string
	}
	export type fn = (params: LoginAccount.Params) => Promise<AccountModel>
}
