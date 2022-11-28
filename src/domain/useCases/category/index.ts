import { ListCategory as ListCategoryNamespace } from './listCategory'
import { CategoryModel } from '@/domain/models'

export namespace Category {
	export namespace ListCategory {
		export type Filters = ListCategoryNamespace.Filters
		export interface ListCategory {
			fn(params: ListCategory.Filters): Promise<CategoryModel.CategoryTableData>
		}
	}
}
