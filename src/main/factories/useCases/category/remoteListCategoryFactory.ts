import { ListBaseResponse } from '@/data/protocols/listing'
import { RemoteListCategory } from '@/data/useCases/category'
import { Category } from '@/domain/useCases'
import { makeAxiosHttpClient } from '@/main/factories/http'

export const makeRemoteListCategory = (): Category.ListCategory.ListCategory =>
	new RemoteListCategory(
		'category',
		makeAxiosHttpClient<ListBaseResponse<Category.ListCategory.TableData>>()
	)
