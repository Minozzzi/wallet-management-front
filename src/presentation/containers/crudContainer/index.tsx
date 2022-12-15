import React, { useMemo } from 'react'

import { Funnel } from 'phosphor-react'

import { useCrudContainer } from './hook'
import * as S from './styles'
import { CommonTableData, Services } from './types'
import {
	BaseTableProps,
	Button,
	IconButton,
	Loading,
	SideModal,
	Table
} from '@/presentation/components'

export type FormProps<FD> = {
	data: FD
	submitButtonText: string
	render: () => React.ReactNode
}

export type Texts = {
	list: {
		error: string
	}
	delete: {
		success: string
		error: string
	}
	create: {
		success: string
		error: string
	}
}

type CrudContainerProps<F, TD extends CommonTableData, FD> = {
	title: string
	table: BaseTableProps<TD>
	filters: F
	services: Services<F, TD, FD>
	notFoundText: string
	form: FormProps<FD>
	texts: Texts
}

export const CrudContainer = <F, TD extends CommonTableData, FD>({
	title,
	table,
	services,
	notFoundText,
	form,
	texts
}: CrudContainerProps<F, TD, FD>) => {
	const {
		openForm,
		setOpenForm,
		columnsWithActions,
		fetchedData,
		pagination,
		setPagination,
		totalPages,
		loading,
		handleSubmitForm
	} = useCrudContainer<F, TD, FD>({
		services,
		form,
		table,
		texts
	})

	const renderContent = useMemo(() => {
		if (loading)
			return (
				<S.LoadingContainer>
					<Loading size={46} />
				</S.LoadingContainer>
			)

		if (!fetchedData)
			return <S.NotFoundContainer>{notFoundText}</S.NotFoundContainer>

		return (
			<Table<TD>
				{...table}
				columns={columnsWithActions}
				data={fetchedData}
				pagination={{
					totalPages,
					paginationTable: pagination,
					setPaginationTable: setPagination
				}}
			/>
		)
	}, [
		columnsWithActions,
		fetchedData,
		loading,
		notFoundText,
		pagination,
		setPagination,
		table,
		totalPages
	])

	return (
		<S.Container>
			<S.Header>
				<S.HeaderLeft>
					<S.Title>{title}</S.Title>
				</S.HeaderLeft>

				<S.HeaderRight>
					<IconButton icon={<Funnel />} onClick={() => null} />
					<Button onClick={() => setOpenForm(true)}>Adicionar</Button>
				</S.HeaderRight>
			</S.Header>

			{renderContent}

			<SideModal
				title='Nova Categoria'
				isOpen={openForm}
				handleOnClose={() => setOpenForm(false)}
			>
				<S.Form onSubmit={event => handleSubmitForm(event)}>
					<S.FormBody>{form.render()}</S.FormBody>

					<Button fullWidth type='submit' wrapperClassName='button-container'>
						{form.submitButtonText}
					</Button>
				</S.Form>
			</SideModal>
		</S.Container>
	)
}
