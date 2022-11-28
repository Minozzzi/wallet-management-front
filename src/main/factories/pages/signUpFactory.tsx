import React from 'react'

import { makeSignUpValidation } from '../validation'
import { makeRemoteCreateAccount } from '@/main/factories/useCases/account'
import { SignUpPage } from '@/presentation'

export const MakeSignUpPage: React.FC = () => {
	return (
		<SignUpPage
			createAccount={makeRemoteCreateAccount()}
			validation={makeSignUpValidation()}
		/>
	)
}
