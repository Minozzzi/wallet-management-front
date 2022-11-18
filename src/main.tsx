import React from 'react'

import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'

import { GlobalStyles, sg } from './styles'
import { Router } from '@/main/routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<GlobalStyles />
		<Router />
		<Toaster
			position='top-right'
			gutter={Number(sg.spacing.xxlarge.replace('px', ''))}
		/>
	</React.StrictMode>
)
