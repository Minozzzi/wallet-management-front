import { useCallback, useMemo, useState } from 'react'

import toast from 'react-hot-toast'

import { SignUpPageNamespace } from '..'
import { Account } from '@/domain/useCases'

export namespace UseSignUpNamespace {
	export type Props = SignUpPageNamespace.Props
	export type FormDataProps = Account.CreateAccount.Params
}

const INITIAL_FORM_DATA: UseSignUpNamespace.FormDataProps = {
	name: '',
	username: '',
	password: '',
	passwordConfirmation: ''
}

export const useSignUp = ({
	createAccount,
	validation
}: UseSignUpNamespace.Props) => {
	const [loading, setLoading] = useState(false)
	const [touched, setTouched] = useState(false)

	const [formData, setFormData] =
		useState<Account.CreateAccount.Params>(INITIAL_FORM_DATA)

	const formIsValid = useMemo(
		() =>
			Object.keys(formData).every(key =>
				validation.validate({
					input: formData,
					fieldName: key
				})
			),
		[formData, validation]
	)

	const handleChangeFormData = useCallback(
		<T extends keyof UseSignUpNamespace.FormDataProps>(key: T) =>
			(value: UseSignUpNamespace.FormDataProps[T]) => {
				setFormData(state => (state ? { ...state, [key]: value } : state))
			},
		[]
	)

	const handleSubmit = useCallback(async () => {
		try {
			setLoading(true)
			setTouched(true)

			if (!formIsValid) return toast.error('Preencha os campos obrigatórios')

			await createAccount.fn(formData)
		} catch {
			toast.error('Erro ao criar conta')
		} finally {
			setLoading(false)
		}
	}, [createAccount, formData, formIsValid])

	const handleValidate = useCallback(
		(field: keyof UseSignUpNamespace.FormDataProps): string =>
			validation.validate({
				fieldName: field,
				input: formData
			}) || '',
		[formData, validation]
	)

	return {
		loading,
		touched,
		formData,
		formIsValid,
		handleChangeFormData,
		handleSubmit,
		handleValidate
	}
}
