import React, {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState
} from 'react'

import toast from 'react-hot-toast'

import { useWalletManagementNavigate } from '../hooks/useWalletManagementHistory'
import { RemoteLoginAccountNamespace } from '@/data/useCases'
import { InvalidCredentialsError } from '@/domain/errors'
import { AccountModel } from '@/domain/models'
import { Account } from '@/domain/useCases'
import { makeLocalStorageAdapter } from '@/main/factories/cache'
import { makeRemoteLoginAccount } from '@/main/factories/useCases'

type AuthContextProps = {
	auth: AccountModel | null
	loading: boolean

	handleSignIn: (params: Account.LoginAccount.Params) => Promise<void>
	handleSignOut: () => void
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
	children
}) => {
	const { navigateToSignedBasePath } = useWalletManagementNavigate()

	const localStorageAdapter = makeLocalStorageAdapter()

	const [authData, setAuthData] = useState<AuthContextProps['auth'] | null>(
		() => {
			const auth = localStorageAdapter.get(
				localStorageAdapter.LOCAL_STORAGE_KEYS.AUTH
			) as AuthContextProps['auth']

			if (auth) return auth
			return null
		}
	)

	const [loading, setLoading] = useState(false)

	const handleSignIn = useCallback(
		async (params: RemoteLoginAccountNamespace.Params) => {
			try {
				setLoading(true)

				const remoteLoginAccount = makeRemoteLoginAccount()

				const currentAccount = await remoteLoginAccount.fn(params)

				setAuthData(currentAccount)
				navigateToSignedBasePath()
			} catch (error) {
				if (error instanceof InvalidCredentialsError) {
					toast.error('Credenciais inválidas')
					return
				}

				toast.error('Erro inesperado, tente novamente mais tarde')
			} finally {
				setLoading(false)
			}
		},
		[navigateToSignedBasePath]
	)

	const handleSignOut = useCallback(() => {
		setAuthData(null)
	}, [])

	useEffect(() => {
		if (authData) {
			localStorageAdapter.set(
				localStorageAdapter.LOCAL_STORAGE_KEYS.AUTH,
				authData
			)
			return
		}

		localStorageAdapter.set(localStorageAdapter.LOCAL_STORAGE_KEYS.AUTH)
	}, [authData, localStorageAdapter])

	return (
		<AuthContext.Provider
			value={{
				auth: authData,
				loading,
				handleSignIn,
				handleSignOut
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuth = () => useContext(AuthContext)
