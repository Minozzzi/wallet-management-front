export namespace CreateAccount {
	export type Params = {
		name: string
		username: string
		password: string
		passwordConfirmation: string
	}
	export type fn = (params: CreateAccount.Params) => Promise<void>
}
