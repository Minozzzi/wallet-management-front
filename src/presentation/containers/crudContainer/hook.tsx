import React, { useCallback, useEffect, useMemo, useState } from 'react'

import { ColumnDef, PaginationState } from '@tanstack/react-table'
import { Pencil, Trash } from 'phosphor-react'
import toast from 'react-hot-toast'

import { FormProps, Texts } from '.'
import { CommonTableData, Services } from './types'
import { BaseTableProps, Popover } from '@/presentation/components'
import { sg } from '@/styles'

type UseCrudContainer<F, TD extends CommonTableData, FD> = {
	services: Services<F, TD, FD>
	form: FormProps<FD>
	table: BaseTableProps<TD>
	texts: Texts
}

export const useCrudContainer = <F, TD extends CommonTableData, FD>({
	services: { list, delete: deleteResource, create },
	form,
	table,
	texts
}: UseCrudContainer<F, TD, FD>) => {
	const [openForm, setOpenForm] = useState(false)

	const [loading, setLoading] = useState(true)

	const [filters, setFilters] = useState<F>({} as F)

	const [pagination, setPagination] = useState<PaginationState>({
		pageIndex: 0,
		pageSize: 10
	})
	const [totalPages, setTotalPages] = useState(1)

	const [fetchedData, setFetchedData] = useState<TD[]>([])

	const page = useMemo(() => pagination.pageIndex + 1, [pagination.pageIndex])

	const handleFetchData = useCallback(async () => {
		try {
			const { results, totalPages } = await list.fn({
				filters,
				pagination: {
					page
				}
			})
			setFetchedData(results)
			setTotalPages(totalPages)
		} catch {
			toast.error(texts.list.error)
		} finally {
			setLoading(false)
		}
	}, [filters, list, page, texts.list.error])

	useEffect(() => {
		handleFetchData()
	}, [handleFetchData])

	const handleDelete = useCallback(
		async (id: string) => {
			try {
				await deleteResource.fn(id)
				toast.success(texts.delete.success)
			} catch {
				toast.error(texts.delete.error)
			} finally {
				handleFetchData()
			}
		},
		[deleteResource, handleFetchData, texts.delete.error, texts.delete.success]
	)

	const handleSubmitForm = useCallback(
		async (event: React.FormEvent<HTMLFormElement>) => {
			try {
				event.preventDefault()
				await create.fn(form.data)
				toast.success(texts.create.success)
			} catch {
				toast.error(texts.create.error)
			} finally {
				handleFetchData()
				setOpenForm(false)
			}
		},
		[
			create,
			form.data,
			handleFetchData,
			texts.create.error,
			texts.create.success
		]
	)

	const columnsWithActions = useMemo<Array<ColumnDef<TD>>>(
		() => [
			...table.columns,
			{
				header: 'Ações',
				id: 'actions',
				cell: ({ row }) => {
					const { id } = row.original

					return (
						<Popover
							items={[
								{
									icon: <Pencil size={18} color={sg.colors.info} />,
									text: 'Editar',
									onClick: () => alert('Editar')
								},
								{
									icon: <Trash size={18} color={sg.colors.error} />,
									text: 'Excluir',
									onClick: () => handleDelete(id)
								}
							]}
						/>
					)
				}
			}
		],
		[handleDelete, table.columns]
	)

	return {
		openForm,
		setOpenForm,
		columnsWithActions,
		fetchedData,
		loading,
		pagination,
		setPagination,
		totalPages,
		setFilters,
		handleDelete,
		handleSubmitForm
	}
}
