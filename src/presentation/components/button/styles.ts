import styled, { css } from 'styled-components'

import { ButtonThemeProps } from './theme'
import { sg } from '@/styles'

export const Wrapper = styled.section`
	display: flex;
	justify-content: center;
`

export const Button = styled.button<{
	buttonTheme: ButtonThemeProps
	fullWidth: boolean
}>`
	display: flex;
	align-items: center;
	justify-content: center;

	position: relative;

	cursor: pointer;

	font-size: ${sg.fontSize.default};
	font-family: ${sg.fontFamily.primary};

	border: none;
	border-radius: ${sg.spacing.medium};

	padding: ${sg.spacing.large} ${sg.spacing.xxlarge};

	svg {
		position: absolute;
		left: 24px;

		font-size: ${sg.fontSize.large};

		margin-right: ${sg.spacing.medium};
	}

	${({ buttonTheme, disabled }) =>
		css`
			color: ${buttonTheme.color};
			background: ${buttonTheme.background};

			${!disabled &&
			css`
				&:hover {
					background: ${buttonTheme.backgroundHover};
				}
			`}
		`}

	${({ fullWidth }) =>
		fullWidth &&
		css`
			width: 100%;
		`}

	${({ disabled }) =>
		disabled &&
		css`
			cursor: not-allowed;
		`}
`
