import { CreateAccount as CreateAccountNamespace } from './createAccount'
import { LoginAccount as LoginAccountNamespace } from './loginAccount'
import { AccountModel } from '@/domain/models'

export namespace Account {
	export namespace CreateAccount {
		export type Params = CreateAccountNamespace.Params
		export interface CreateAccount {
			fn(params: CreateAccount.Params): Promise<void>
		}
	}
	export namespace LoginAccount {
		export type Params = LoginAccountNamespace.Params
		export interface LoginAccount {
			fn(params: LoginAccount.Params): Promise<AccountModel>
		}
	}
}
