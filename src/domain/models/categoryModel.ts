export namespace CategoryModel {
	export type TableData = {
		id: string
		name: string
	}
	export type CreateData = {
		name: string
	}
	export type UpdateData = {
		id: string
	} & CreateData
}
