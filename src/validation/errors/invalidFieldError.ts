export class InvalidFieldError extends Error {
	constructor(private readonly field: string) {
		super(`O campo ${field} é inválido`)
		this.name = InvalidFieldError.name
	}
}
