import { Tag } from 'phosphor-react'

import { ROUTES } from './routes'
import { MenuItem } from '@/presentation/components'

export const menuItems = Object.freeze<MenuItem>([
	{ label: 'Categoria', icon: <Tag size={28} />, path: ROUTES.category.path() }
])
