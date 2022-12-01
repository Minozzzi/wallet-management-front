import React, { useCallback, useEffect, useState } from 'react'

import { WarningCircle } from 'phosphor-react'

import * as S from './styles'

export type TextFieldProps = {
	/**
	 * It is the label of the text field
	 */
	label: string

	/**
	 * It is on change event
	 */
	onChange: (value: string) => void

	/**
	 * It is the type of the text field
	 */
	type?: 'text' | 'password'

	/**
	 * It is the value of the text field
	 */
	value?: string

	/**
	 * It is the placeholder of the text field
	 */
	placeholder?: string

	/**
	 * It is the icon of the text field
	 */
	icon?: React.ReactNode

	/**
	 * It is the place where the icon will be placed
	 */
	iconPosition?: 'left' | 'right'

	/**
	 * It is the password icon of the text field
	 */
	passwordIcon?: React.ReactNode

	/**
	 * It is if the text field is disabled
	 */
	disabled?: boolean

	/**
	 * It is the error message of the text field
	 */
	error?: string

	/**
	 * It is the text field has touched
	 */
	touched?: boolean

	/**
	 * It is the dependency of another field of the form to validate the text field
	 */
	validationDependency?: unknown

	/**
	 * It is the text field validator, used to validate the value of text field
	 */
	validator?: () => string | null
}

/**
 * Text Field is a component that represents a input text to the user write something on it
 */
export const TextField: React.FC<TextFieldProps> = ({
	label,
	onChange,
	type = 'text',
	value = '',
	placeholder = '',
	icon,
	iconPosition = 'left',
	passwordIcon,
	disabled = false,
	error = '',
	touched = false,
	validationDependency,
	validator
}) => {
	const [inputError, setInputError] = useState<string | null>(error)
	const [inputTouched, setInputTouched] = useState(touched)

	const handleCheckErrors = useCallback(
		() => validator && inputTouched && setInputError(validator()),
		[inputTouched, setInputError, validator]
	)

	const handleOnChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setInputTouched(true)
			handleCheckErrors()
			onChange(event.target.value)
		},
		[handleCheckErrors, onChange]
	)

	const handleOnBlur = useCallback(() => {
		handleCheckErrors()
	}, [handleCheckErrors])

	useEffect(() => {
		handleCheckErrors()

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value, validationDependency])

	useEffect(() => {
		if (touched !== undefined) {
			if (inputTouched !== touched) setInputTouched(touched)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [touched])

	useEffect(() => {
		if (inputTouched) handleCheckErrors()
	}, [handleCheckErrors, inputTouched])

	return (
		<S.Container>
			<S.Label>{label}</S.Label>

			<S.InputContainer
				iconPosition={iconPosition}
				hasPasswordIcon={!!passwordIcon}
			>
				<S.Icon className='icon'>{icon}</S.Icon>
				<S.Icon className='password-icon'>{passwordIcon}</S.Icon>

				<S.Input
					value={value}
					type={type}
					onChange={handleOnChange}
					onBlur={handleOnBlur}
					disabled={disabled}
					placeholder={placeholder}
					hasError={!!inputError}
					iconPosition={iconPosition}
					hasIcon={!!icon}
				/>

				{!!inputError && <WarningCircle className='error-icon' />}
			</S.InputContainer>

			{!!inputError && <S.Error>{inputError}</S.Error>}
		</S.Container>
	)
}
