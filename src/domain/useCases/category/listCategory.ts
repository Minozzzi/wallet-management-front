import { CategoryModel } from '@/domain/models'

export namespace ListCategory {
	export type Filters = {
		name: string
	}
	export type fn = (
		filters: ListCategory.Filters
	) => Promise<CategoryModel.TableData>
}
