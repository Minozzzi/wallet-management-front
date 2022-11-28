import { ListCategory as ListCategoryNamespace } from './listCategory'
import { CategoryModel } from '@/domain/models'

export namespace Category {
	export namespace ListCategory {
		export type Filters = ListCategoryNamespace.Filters
		export type TableData = CategoryModel.TableData
		export interface ListCategory {
			fn(params: ListCategory.Filters): Promise<CategoryModel.TableData>
		}
	}
}
