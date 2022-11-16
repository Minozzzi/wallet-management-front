export class InvalidFieldError extends Error {
	constructor(message?: string) {
		super(message || `O campo é inválido`)
		this.name = InvalidFieldError.name
	}
}
