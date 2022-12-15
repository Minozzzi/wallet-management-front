import { ListBase } from '@/data/protocols/listing/listBase'

export type CommonTableData = {
	id: string
}

interface List<F, TD extends CommonTableData> {
	fn: ListBase<F, TD>
}

interface Delete {
	fn: (id: string) => Promise<void>
}

interface Create<FD> {
	fn: (params: FD) => Promise<void>
}

export type Services<F, TD extends CommonTableData, FD> = {
	list: List<F, TD>
	delete: Delete
	create: Create<FD>
}
