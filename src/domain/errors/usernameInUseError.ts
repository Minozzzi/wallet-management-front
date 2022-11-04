export class UsernameInUseError extends Error {
	constructor() {
		super('Esse username já está em uso')
		this.name = UsernameInUseError.name
	}
}
