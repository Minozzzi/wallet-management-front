import React from 'react'

import { makeRemoteListCategory } from '@/main/factories/useCases/category'
import { PrivateRouteProxy } from '@/main/proxies'
import { CategoryPage } from '@/presentation'

export const MakeCategoryPage: React.FC = () => {
	return (
		<PrivateRouteProxy>
			<CategoryPage
				services={{
					list: makeRemoteListCategory()
				}}
			/>
		</PrivateRouteProxy>
	)
}
