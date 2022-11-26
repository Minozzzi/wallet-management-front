import styled from 'styled-components'

import { sg } from '@/styles'

export const Header = styled.header`
	grid-area: Header;
	background-color: ${sg.colors.white};

	display: flex;
	align-items: center;
	justify-content: flex-end;

	padding: ${sg.spacing.xxlarge} ${sg.spacing.xxxlarge};
`

export const UserContent = styled.div`
	display: flex;
	align-items: center;

	gap: ${sg.spacing.large};
	padding: ${sg.spacing.medium};

	border-radius: 48px;
	background-color: ${sg.colors.highlight};
`

export const UserPhoto = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
`

export const UserName = styled.span`
	color: ${sg.colors.grayscale.black};
	font-weight: 600;
`
