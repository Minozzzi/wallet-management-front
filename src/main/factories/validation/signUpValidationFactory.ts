import { ValidationBuilder } from '@/main/builders'
import { ValidationComposite } from '@/main/composite'

export const makeSignUpValidation = (): ValidationComposite =>
	ValidationComposite.build([
		...ValidationBuilder.field('name').required().build(),
		...ValidationBuilder.field('username').required().email().build(),
		...ValidationBuilder.field('password').password().build(),
		...ValidationBuilder.field('passwordConfirmation')
			.required()
			.sameAs('password')
			.build()
	])
