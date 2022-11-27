import React, { useMemo, useState } from 'react'

import {
	ColumnDef,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	PaginationState,
	useReactTable,
	SortingState,
	getSortedRowModel,
	OnChangeFn
} from '@tanstack/react-table'
import { SortAscending, SortDescending } from 'phosphor-react'

import { Pagination } from '../pagination'
import * as S from './styles'

export type TableProps<T> = {
	columns: ColumnDef<T>[]
	data: T[]
	sorting: SortingState
	setSorting: OnChangeFn<SortingState>
	pagination: {
		totalPages: number
		pageSize: number
	}
}

export const Table = <T extends unknown>({
	columns,
	data,
	sorting,
	setSorting,
	pagination
}: TableProps<T>) => {
	const { totalPages, pageSize = 10 } = pagination

	const [paginationTable, setPaginationTable] = useState<PaginationState>({
		pageIndex: 0,
		pageSize
	})

	const {
		getHeaderGroups,
		getRowModel,
		getCanPreviousPage,
		getCanNextPage,
		nextPage,
		previousPage,
		setPageIndex,
		getState
	} = useReactTable({
		columns,
		data,
		state: {
			pagination: paginationTable,
			sorting
		},
		pageCount: totalPages,
		onPaginationChange: setPaginationTable,
		onSortingChange: setSorting,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel()
	})

	const currentPage = useMemo(
		() => getState().pagination.pageIndex + 1,
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[getState, paginationTable]
	)

	return (
		<S.Container>
			<S.Table>
				<S.TableHead>
					{getHeaderGroups().map(headerGroup => (
						<S.TableRow key={headerGroup.id}>
							{headerGroup.headers.map(header => (
								<S.TableHeadCell
									key={header.id}
									colSpan={header.colSpan}
									onClick={header.column.getToggleSortingHandler()}
								>
									{flexRender(
										header.column.columnDef.header,
										header.getContext()
									)}
									{{
										asc: <SortDescending size={16} />,
										desc: <SortAscending size={16} />
									}[header.column.getIsSorted() as string] ?? null}
								</S.TableHeadCell>
							))}
						</S.TableRow>
					))}
				</S.TableHead>

				<S.TableBody>
					{getRowModel().rows.map(row => (
						<S.TableRow key={row.id}>
							{row.getVisibleCells().map(cell => (
								<S.TableCell key={cell.id}>
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</S.TableCell>
							))}
						</S.TableRow>
					))}
				</S.TableBody>

				<S.TableFoot></S.TableFoot>
			</S.Table>

			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				hasPreviousPage={getCanPreviousPage()}
				handlePreviousPage={() => previousPage()}
				hasNextPage={getCanNextPage()}
				handleNextPage={() => nextPage()}
				handleSetPageIndex={setPageIndex}
			/>
		</S.Container>
	)
}
