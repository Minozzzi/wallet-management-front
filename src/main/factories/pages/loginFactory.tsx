import React from 'react'

import { makeLoginValidation } from '../validation'
import { LoginPage } from '@/presentation'

export const MakeLoginPage: React.FC = () => {
	return <LoginPage validation={makeLoginValidation()} />
}
