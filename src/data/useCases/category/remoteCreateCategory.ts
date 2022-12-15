import { HttpClient, HttpStatusCode } from '@/data/protocols/http'
import { UnexpectedError } from '@/domain/errors'
import { Category } from '@/domain/useCases'
import { CreateCategory } from '@/domain/useCases/category/createCategory'

export class RemoteCreateCategory
	implements Category.CreateCategory.CreateCategory
{
	constructor(
		private readonly url: string,
		private readonly httpClient: HttpClient<void>
	) {}

	fn: CreateCategory.fn = async params => {
		const { statusCode } = await this.httpClient.request({
			url: `${this.url}`,
			method: 'post',
			body: params
		})

		if (statusCode === HttpStatusCode.created) return

		throw new UnexpectedError()
	}
}
