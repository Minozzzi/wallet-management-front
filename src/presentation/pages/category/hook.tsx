import { useMemo, useState } from 'react'

import { SortingState } from '@tanstack/react-table'

import { Category } from '@/domain/useCases'
import { BaseTableProps } from '@/presentation/components'
import { useHandleChangeFormData } from '@/presentation/hooks'

export const useCategory = () => {
	const [sorting, setSorting] = useState<SortingState>([])
	const [formData, setFormData] = useState<Category.CreateCategory.FormData>({
		name: ''
	})

	const { handleChange } =
		useHandleChangeFormData<Category.CreateCategory.FormData>({
			formData,
			setFormData
		})

	const table = useMemo<BaseTableProps<Category.ListCategory.TableData>>(
		() => ({
			columns: [
				{
					header: 'Nome',
					accessorKey: 'name'
				}
			],
			sorting,
			setSorting
		}),
		[sorting]
	)

	return {
		table,
		formData,
		handleChange,
		sorting,
		setSorting
	}
}
