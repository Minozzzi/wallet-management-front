export type HttpMethod = 'get' | 'post' | 'delete' | 'patch'

export enum HttpStatusCode {
	ok = 200,
	noContent = 204,
	badRequest = 400,
	unauthorized = 401,
	forbidden = 403,
	notFound = 404,
	serverError = 500
}

export type HttpRequest = {
	url: string
	method: HttpMethod
	body?: unknown
	headers?: any
}

export type HttpResponse<T = unknown> = {
	statusCode: HttpStatusCode
	body?: T
}

export interface HttpClient<T = unknown> {
	request: (data: HttpRequest) => Promise<HttpResponse<T>>
}
