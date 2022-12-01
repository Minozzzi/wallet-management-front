import React, { useMemo, useState } from 'react'

import { Eye, EyeClosed } from 'phosphor-react'

import { TextField, TextFieldProps } from '../textfield'

type PasswordInputProps = TextFieldProps

export const PasswordInput: React.FC<PasswordInputProps> = props => {
	const [viewPassword, setViewPassword] = useState(false)

	const icon = useMemo(() => {
		if (!viewPassword)
			return <EyeClosed onClick={() => setViewPassword(!viewPassword)} />

		return <Eye onClick={() => setViewPassword(!viewPassword)} />
	}, [viewPassword])

	return (
		<TextField
			type={viewPassword ? 'text' : 'password'}
			passwordIcon={icon}
			{...props}
		/>
	)
}
