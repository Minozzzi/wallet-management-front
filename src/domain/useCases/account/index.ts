import { CreateAccount as CreateAccountNamespace } from './createAccount'

export namespace Account {
	export namespace CreateAccount {
		export type Params = CreateAccountNamespace.Params
		export interface CreateAccount {
			fn(params: CreateAccount.Params): Promise<void>
		}
	}
}
