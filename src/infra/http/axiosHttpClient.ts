import axios, { AxiosResponse } from 'axios'

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
		let axiosResponse: AxiosResponse
		try {
			axiosResponse = await baseAxios.request({
				...data,
				data: data.body
			})
		} catch (error: any) {
			axiosResponse = error.response
		}

		return {
			statusCode: axiosResponse.status,
			body: axiosResponse.data
		}
	}
}
