import { AxiosHttpClient } from '@/infra'

export const makeAxiosHttpClient = <T = unknown>(): AxiosHttpClient<T> =>
	new AxiosHttpClient<T>()
