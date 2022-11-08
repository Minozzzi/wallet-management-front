import React from 'react'

import ReactDOM from 'react-dom/client'

import { GlobalStyles } from './styles'
import { Router } from '@/main/routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<GlobalStyles />
		<Router />
	</React.StrictMode>
)
