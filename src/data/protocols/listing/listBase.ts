export type ListBaseRequest<F> = {
	filters: F
	pagination: {
		page: number
	}
}

export type ListBaseResponse<TD> = {
	results: TD[]
	totalPages: number
}

export type ListBase<F, TD> = (
	params: ListBaseRequest<F>
) => Promise<ListBaseResponse<TD>>
