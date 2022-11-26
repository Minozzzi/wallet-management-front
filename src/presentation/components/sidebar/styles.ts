import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

import { sg } from '@/styles'

export const Sidebar = styled.aside`
	grid-area: Sidebar;
	position: fixed;
	top: 0;
	left: 0;

	height: 100vh;
	width: 320px;

	background-color: ${sg.colors.white};
`

export const Logo = styled.div`
	display: grid;
	place-items: center;

	color: ${sg.colors.secondaryDark};

	height: 120px;

	font-weight: 600;
	font-family: ${sg.fontFamily.logo};
	font-size: ${sg.fontSize.xlarge};
`

export const Menu = styled.div`
	position: relative;
`

type MenuItemProps = {
	active: string
}

export const MenuItem = styled(Link)<MenuItemProps>`
	all: unset;

	display: flex;
	align-items: center;
	cursor: pointer;

	border-radius: ${sg.spacing.large};

	gap: ${sg.spacing.xlarge};
	margin: ${sg.spacing.xlarge} ${sg.spacing.xxxlarge};
	padding: ${sg.spacing.xlarge} ${sg.spacing.xxxlarge};

	transition: color 0.3s ease-in-out;

	color: ${sg.colors.grayscale.secondaryText};

	${({ active }) =>
		active === 'true' &&
		css`
			color: ${sg.colors.grayscale.black};
			background-color: ${sg.colors.primary};
		`};
`

export const MenuItemLink = styled(Link)``

export const MenuItemLabel = styled.span`
	font-size: ${sg.fontSize.large};
`
