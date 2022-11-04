import { HttpClient, HttpStatusCode } from '@/data/protocols/http'
import { UnexpectedError, UsernameInUseError } from '@/domain/errors'
import { Account, CreateAccount } from '@/domain/useCases'

export class RemoteCreateAccount implements CreateAccount {
	constructor(
		private readonly url: string,
		private readonly httpClient: HttpClient<RemoteCreateAccountNamespace.Result>
	) {}

	async fn(
		params: RemoteCreateAccountNamespace.Params
	): Promise<RemoteCreateAccountNamespace.Result> {
		const { statusCode, body } = await this.httpClient.request({
			url: this.url,
			method: 'post',
			body: params
		})

		if (statusCode === HttpStatusCode.ok && body) return body

		if (statusCode === HttpStatusCode.forbidden) throw new UsernameInUseError()

		throw new UnexpectedError()
	}
}

export namespace RemoteCreateAccountNamespace {
	export type Params = Account.Params
	export type Result = Account.Result
}
