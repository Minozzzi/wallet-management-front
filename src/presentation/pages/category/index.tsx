import React from 'react'

import { useCategory } from './hook'
import { Category } from '@/domain/useCases'
import { TextField } from '@/presentation/components'
import { CrudContainer } from '@/presentation/containers'

type CategoryPageProps = {
	services: {
		list: Category.ListCategory.ListCategory
		delete: Category.DeleteCategory.DeleteCategory
		create: Category.CreateCategory.CreateCategory
	}
}

export const CategoryPage: React.FC<CategoryPageProps> = ({ services }) => {
	const { table, formData, handleChange } = useCategory()

	return (
		<CrudContainer<
			Category.ListCategory.Filters,
			Category.ListCategory.TableData,
			Category.CreateCategory.FormData
		>
			title='Categorias'
			table={table}
			filters={{
				name: ''
			}}
			services={services}
			notFoundText='Não há categorias cadastradas'
			form={{
				data: formData,
				submitButtonText: 'Cadastrar Categoria',
				render: () => (
					<TextField
						label='Nome'
						value={formData.name}
						onChange={handleChange('name')}
					/>
				)
			}}
			texts={{
				create: {
					success: 'Categoria cadastrada com sucesso',
					error: 'Erro ao cadastrar categoria'
				},
				delete: {
					success: 'Categoria deletada com sucesso',
					error: 'Erro ao deletar categoria'
				},
				list: {
					error: 'Erro ao listar categorias'
				}
			}}
		/>
	)
}
