import React from 'react'

import { EnvelopeSimple, LockKey, User } from 'phosphor-react'

import { useSignUp } from './hooks/useSignUp'
import * as S from './styles'
import { Account } from '@/domain/useCases'
import { Button, Loading, TextField } from '@/presentation/components'
import { Validation } from '@/presentation/protocols'

type SignUpPageProps = {
	createAccount: Account.CreateAccount.CreateAccount
	validation: Validation
}

export namespace SignUpPageNamespace {
	export type Props = SignUpPageProps
	export type FormDataProps = Account.CreateAccount.Params
}

export const SignUpPage: React.FC<SignUpPageNamespace.Props> = params => {
	const {
		formData,
		loading,
		touched,
		handleChangeFormData,
		handleValidate,
		handleSubmit
	} = useSignUp(params)

	return (
		<S.Container>
			<S.ImageBackground />

			<S.Content>
				<S.Title>Criar uma nova conta</S.Title>
				<S.Subtitle>
					Preencha algumas informações para poder acessar a plataforma
				</S.Subtitle>

				<S.Form>
					<TextField
						label='Nome completo *'
						value={formData.name}
						onChange={handleChangeFormData('name')}
						placeholder='Digite seu nome'
						disabled={loading}
						touched={touched}
						icon={<User />}
						validator={() => handleValidate('name')}
					/>

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

					<TextField
						label='Senha *'
						value={formData.password}
						onChange={handleChangeFormData('password')}
						placeholder='Digite uma senha forte'
						disabled={loading}
						touched={touched}
						icon={<LockKey />}
						validator={() => handleValidate('password')}
					/>

					<TextField
						label='Confirmar senha *'
						value={formData.passwordConfirmation}
						onChange={handleChangeFormData('passwordConfirmation')}
						placeholder='Confirme sua senha'
						disabled={loading}
						touched={touched}
						icon={<LockKey />}
						validator={() => handleValidate('passwordConfirmation')}
						validationDependency={formData.password}
					/>

					<Button disabled={loading} fullWidth onClick={handleSubmit}>
						{loading ? <Loading size={24} /> : 'Criar conta'}
					</Button>
				</S.Form>
			</S.Content>
		</S.Container>
	)
}
