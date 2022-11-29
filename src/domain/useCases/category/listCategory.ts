import { ListBase } from '../../../data/protocols/listing/listBase'
import { CategoryModel } from '@/domain/models'

export namespace ListCategory {
	export type Filters = {
		name: string
	}
	export type fn = ListBase<ListCategory.Filters, CategoryModel.TableData>
}
