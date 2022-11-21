import { ValidationBuilder } from '@/main/builders'
import { ValidationComposite } from '@/main/composite'

export const makeLoginValidation = (): ValidationComposite =>
	ValidationComposite.build([
		...ValidationBuilder.field('username').required().email().build(),
		...ValidationBuilder.field('password').password().build()
	])
