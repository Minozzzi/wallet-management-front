import { HttpClient, HttpStatusCode } from '@/data/protocols/http'
import { InvalidCredentialsError, UnexpectedError } from '@/domain/errors'
import { AccountModel } from '@/domain/models'
import { Account } from '@/domain/useCases'

export class RemoteLoginAccount implements Account.LoginAccount.LoginAccount {
	constructor(
		private readonly url: string,
		private readonly httpClient: HttpClient<AccountModel>
	) {}

	async fn(
		params: RemoteLoginAccountNamespace.Params
	): Promise<RemoteLoginAccountNamespace.Response> {
		const payload = {
			...params
		}

		const { statusCode, body } = await this.httpClient.request({
			url: this.url,
			method: 'post',
			body: payload
		})

		if (statusCode === HttpStatusCode.unauthorized)
			throw new InvalidCredentialsError()

		if (statusCode === HttpStatusCode.ok && !!body) return body

		throw new UnexpectedError()
	}
}

export namespace RemoteLoginAccountNamespace {
	export type Params = Account.LoginAccount.Params
	export type Response = AccountModel
}
