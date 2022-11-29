import { HttpClient, HttpStatusCode } from '@/data/protocols/http'
import { ListBaseResponse } from '@/data/protocols/listing'
import { UnexpectedError } from '@/domain/errors'
import { Category } from '@/domain/useCases'
import { ListCategory } from '@/domain/useCases/category/listCategory'

export class RemoteListCategory implements Category.ListCategory.ListCategory {
	constructor(
		private readonly url: string,
		private readonly httpClient: HttpClient<
			ListBaseResponse<Category.ListCategory.TableData>,
			Category.ListCategory.Filters
		>
	) {}

	fn: ListCategory.fn = async filters => {
		const { statusCode, body } = await this.httpClient.request({
			url: this.url,
			method: 'get',
			filters
		})

		if (statusCode === HttpStatusCode.ok && body?.results)
			return {
				results: body.results,
				totalPages: body.totalPages
			}

		throw new UnexpectedError()
	}
}
