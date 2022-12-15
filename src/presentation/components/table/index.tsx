import { useMemo } from 'react'

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

export type BaseTableProps<T> = Pick<
	TableProps<T>,
	'columns' | 'sorting' | 'setSorting'
>

export type TableProps<T> = {
	columns: ColumnDef<T>[]
	data: T[]
	sorting: SortingState
	setSorting: OnChangeFn<SortingState>
	pagination: {
		totalPages: number
		paginationTable: PaginationState
		setPaginationTable: OnChangeFn<PaginationState>
	}
}

export const Table = <T extends unknown>({
	columns,
	data,
	sorting,
	setSorting,
	pagination
}: TableProps<T>) => {
	const { totalPages, paginationTable, setPaginationTable } = pagination

	const {
		getFlatHeaders,
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
		manualPagination: true,
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
					{getFlatHeaders().map(header => (
						<>
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
						</>
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
