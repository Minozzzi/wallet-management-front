import { CategoryModel } from '@/domain/models'

export namespace CreateCategory {
	export type Params = CategoryModel.CreateData
	export type fn = (params: CreateCategory.Params) => Promise<void>
}
