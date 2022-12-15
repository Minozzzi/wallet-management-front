import { HttpClient, HttpStatusCode } from '@/data/protocols/http'
import { UnexpectedError } from '@/domain/errors'
import { Category } from '@/domain/useCases'
import { DeleteCategory } from '@/domain/useCases/category/deleteCategory'

export class RemoteDeleteCategory
	implements Category.DeleteCategory.DeleteCategory
{
	constructor(
		private readonly url: string,
		private readonly httpClient: HttpClient<void>
	) {}

	fn: DeleteCategory.fn = async id => {
		const { statusCode } = await this.httpClient.request({
			url: `${this.url}/${id}`,
			method: 'delete'
		})

		if (statusCode === HttpStatusCode.noContent) return

		throw new UnexpectedError()
	}
}
