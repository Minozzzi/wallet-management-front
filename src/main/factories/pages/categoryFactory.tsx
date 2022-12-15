import React from 'react'

import {
	makeRemoteCreateCategory,
	makeRemoteDeleteCategory,
	makeRemoteListCategory
} from '@/main/factories/useCases/category'
import { PrivateRouteProxy } from '@/main/proxies'
import { CategoryPage } from '@/presentation'

export const MakeCategoryPage: React.FC = () => {
	return (
		<PrivateRouteProxy>
			<CategoryPage
				services={{
					list: makeRemoteListCategory(),
					delete: makeRemoteDeleteCategory(),
					create: makeRemoteCreateCategory()
				}}
			/>
		</PrivateRouteProxy>
	)
}
