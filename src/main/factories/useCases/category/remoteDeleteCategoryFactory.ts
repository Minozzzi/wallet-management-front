import { RemoteDeleteCategory } from '@/data/useCases/category'
import { Category } from '@/domain/useCases'
import { makeAxiosHttpClient } from '@/main/factories/http'

export const makeRemoteDeleteCategory =
	(): Category.DeleteCategory.DeleteCategory =>
		new RemoteDeleteCategory('category', makeAxiosHttpClient<void>())
