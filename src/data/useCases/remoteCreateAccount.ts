import { HttpClient, HttpStatusCode } from '@/data/protocols/http'
import { UnexpectedError, UsernameInUseError } from '@/domain/errors'
import { Account } from '@/domain/useCases'

export class RemoteCreateAccount
	implements Account.CreateAccount.CreateAccount
{
	constructor(
		private readonly url: string,
		private readonly httpClient: HttpClient<void>
	) {}

	async fn(params: RemoteCreateAccountNamespace.Params): Promise<void> {
		const payload = {
			name: params.name,
			username: params.username,
			password: params.password
		}

		const { statusCode } = await this.httpClient.request({
			url: this.url,
			method: 'post',
			body: payload
		})

		if (statusCode === HttpStatusCode.created) return

		if (statusCode === HttpStatusCode.badRequest) throw new UsernameInUseError()

		throw new UnexpectedError()
	}
}

export namespace RemoteCreateAccountNamespace {
	export type Params = Account.CreateAccount.Params
}
