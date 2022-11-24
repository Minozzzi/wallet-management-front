import { useNavigate } from 'react-router-dom'

export const useWalletManagementNavigate = () => {
	const basePath = '/login'
	const signedBasePath = '/'

	const navigate = useNavigate()
	const navigateToBasePath = () => navigate(basePath)
	const navigateToSignedBasePath = () => navigate(signedBasePath)

	return {
		navigate,
		navigateToBasePath,
		navigateToSignedBasePath
	}
}
