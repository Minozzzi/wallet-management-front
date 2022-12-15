import { RemoteCreateCategory } from '@/data/useCases/category'
import { Category } from '@/domain/useCases'
import { makeAxiosHttpClient } from '@/main/factories/http'

export const makeRemoteCreateCategory =
	(): Category.CreateCategory.CreateCategory =>
		new RemoteCreateCategory('category', makeAxiosHttpClient<void>())
