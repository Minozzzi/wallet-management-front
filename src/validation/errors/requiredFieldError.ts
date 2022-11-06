export class RequiredFieldError extends Error {
	constructor(readonly field: string) {
		super(`O campo ${field} é obrigatório`)
		this.name = RequiredFieldError.name
	}
}
