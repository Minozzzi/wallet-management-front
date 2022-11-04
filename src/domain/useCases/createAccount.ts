import { AccountModel } from '../models'

export interface CreateAccount {
	fn: (params: Account.Params) => Promise<Account.Result>
}

export namespace Account {
	export type Params = {
		name: string
		username: string
		password: string
		passwordConfirmation: string
	}
	export type Result = AccountModel
}
