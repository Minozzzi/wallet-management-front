export type ListBaseResponse<TD> = {
	results: TD[]
	totalPages: number
}

export type ListBase<F, TD> = (filters: F) => Promise<ListBaseResponse<TD>>
