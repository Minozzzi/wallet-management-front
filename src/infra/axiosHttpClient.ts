import axios from 'axios'

import { HttpClient, HttpRequest, HttpResponse } from '@/data/protocols/http'

export class AxiosHttpClient<T = unknown> implements HttpClient<T> {
	async request(data: HttpRequest): Promise<HttpResponse<T>> {
		const { status: statusCode, data: body } = await axios.request({
			...data
		})

		return {
			statusCode,
			body
		}
	}
}
