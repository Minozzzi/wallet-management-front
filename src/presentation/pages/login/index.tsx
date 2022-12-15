import React from 'react'

import { EnvelopeSimple, LockKey } from 'phosphor-react'

import { useLogin } from './hooks'
import * as S from './styles'
import {
	Button,
	Loading,
	PasswordInput,
	TextField
} from '@/presentation/components'
import { Validation } from '@/presentation/protocols'

export type LoginPageProps = {
	validation: Validation
}

export const LoginPage: React.FC<LoginPageProps> = params => {
	const {
		loading,
		touched,
		formData,
		handleChangeFormData,
		handleSubmit,
		handleValidate
	} = useLogin(params)

	return (
		<S.Container>
			<S.ImageBackground />

			<S.Content>
				<S.Title>Bem vindo novamente</S.Title>
				<S.Subtitle>
					Bem vindo novamente! Por favor insira suas credenciais
				</S.Subtitle>

				<S.Form onSubmit={handleSubmit}>
					<TextField
						label='Email *'
						value={formData.username}
						onChange={handleChangeFormData('username')}
						placeholder='Digite seu email'
						disabled={loading}
						touched={touched}
						icon={<EnvelopeSimple />}
						validator={() => handleValidate('username')}
					/>

					<PasswordInput
						label='Senha *'
						value={formData.password}
						onChange={handleChangeFormData('password')}
						placeholder='Digite uma senha forte'
						disabled={loading}
						touched={touched}
						icon={<LockKey />}
						// iconPosition='right'
						validator={() => handleValidate('password')}
					/>

					<Button disabled={loading} fullWidth type='submit'>
						{loading ? <Loading size={24} /> : 'Entrar'}
					</Button>
				</S.Form>
			</S.Content>
		</S.Container>
	)
}
