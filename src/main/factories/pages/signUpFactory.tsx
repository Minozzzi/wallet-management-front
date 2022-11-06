import React from 'react'

import { makeSignUpValidation } from '../validation'
import { makeRemoteCreateAccount } from '@/main/factories/useCases'
import { SignUpPage } from '@/presentation'

export const MakeSignUpPage: React.FC = () => {
	return (
		<SignUpPage
			createAccount={makeRemoteCreateAccount()}
			validation={makeSignUpValidation()}
		/>
	)
}
