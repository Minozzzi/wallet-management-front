import { CreateCategory as CreateCategoryNamespace } from './createCategory'
import { DeleteCategory as DeleteCategoryNamespace } from './deleteCategory'
import { ListCategory as ListCategoryNamespace } from './listCategory'
import { CategoryModel } from '@/domain/models'

export namespace Category {
	export namespace ListCategory {
		export type Filters = ListCategoryNamespace.Filters
		export type TableData = CategoryModel.TableData
		export interface ListCategory {
			fn: ListCategoryNamespace.fn
		}
	}
	export namespace DeleteCategory {
		export interface DeleteCategory {
			fn: DeleteCategoryNamespace.fn
		}
	}
	export namespace CreateCategory {
		export type FormData = CategoryModel.CreateData
		export interface CreateCategory {
			fn: CreateCategoryNamespace.fn
		}
	}
}
