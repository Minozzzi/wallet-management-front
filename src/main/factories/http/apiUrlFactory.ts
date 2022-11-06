export const makeApiUrl = (path: string): string =>
	`${process.env.VUE_APP_API_URL}/${path.replace(/^\//, '')}`
