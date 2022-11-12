import axios from 'axios'

import { HttpClient, HttpRequest, HttpResponse } from '@/data/protocols/http'
import { env } from '@/main/env'

export const baseAxios = axios.create({
	baseURL: env.VITE_API_BASE_URL,
	headers: {
		'Content-Type': 'application/json'
	},
	timeout: 30 * 1000,
	validateStatus: (status: number) => status >= 200 && status < 300
})

export class AxiosHttpClient<T = unknown> implements HttpClient<T> {
	async request(data: HttpRequest): Promise<HttpResponse<T>> {
		const { status: statusCode, data: body } = await baseAxios.request({
			...data
		})

		return {
			statusCode,
			body
		}
	}
}
