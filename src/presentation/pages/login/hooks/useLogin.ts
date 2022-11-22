import { useCallback, useMemo, useState } from 'react'

import toast from 'react-hot-toast'

import { LoginPageProps } from '..'
import { RemoteLoginAccountNamespace } from '@/data/useCases'
import { useAuth } from '@/presentation/store'

export const useLogin = ({ validation }: LoginPageProps) => {
	const authHookData = useAuth()

	const { handleSignIn } = authHookData

	const [touched, setTouched] = useState(false)

	const [formData, setFormData] = useState<RemoteLoginAccountNamespace.Params>({
		username: '',
		password: ''
	})

	const formIsValid = useMemo(
		() =>
			Object.keys(formData).every(
				key =>
					!validation.validate({
						input: formData,
						fieldName: key
					})
			),
		[formData, validation]
	)

	const handleChangeFormData =
		<T extends keyof RemoteLoginAccountNamespace.Params>(key: T) =>
		(value: RemoteLoginAccountNamespace.Params[T]) => {
			setFormData(state => (state ? { ...state, [key]: value } : state))
		}

	const handleValidate = useCallback(
		(field: keyof RemoteLoginAccountNamespace.Params): string =>
			validation.validate({
				fieldName: field,
				input: formData
			}) || '',
		[formData, validation]
	)

	const handleSubmit = useCallback(async () => {
		setTouched(true)
		if (!formIsValid) return toast.error('Preencha os campos obrigatórios')
		await handleSignIn(formData)
	}, [formData, formIsValid, handleSignIn])

	return {
		...authHookData,
		formData,
		touched,
		handleChangeFormData,
		handleValidate,
		handleSubmit
	}
}
