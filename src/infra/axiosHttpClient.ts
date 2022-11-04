import axios from 'axios'

import { HttpClient, HttpRequest, HttpResponse } from '@/data/protocols/http'

export class AxiosHttpClient implements HttpClient {
	async request(data: HttpRequest): Promise<HttpResponse> {
		const { status: statusCode, data: body } = await axios.request({
			...data
		})

		return {
			statusCode,
			body
		}
	}
}
