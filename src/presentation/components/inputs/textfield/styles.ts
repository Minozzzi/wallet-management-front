import styled, { css } from 'styled-components'

import { sg } from '@/styles'

export const Container = styled.section`
	display: flex;
	flex-direction: column;

	gap: ${sg.spacing.small};
`

export const Label = styled.label`
	font-family: ${sg.fontFamily.primary};
	font-size: ${sg.fontSize.small};
	font-weight: 600;

	color: ${sg.colors.grayscale.hintText};
`

type InputContainerProps = {
	iconPosition: 'left' | 'right'
}

export const InputContainer = styled.div<InputContainerProps>`
	display: flex;
	align-items: center;

	position: relative;

	.icon {
		position: absolute;
		${({ iconPosition }) => css`
			${iconPosition}: ${sg.spacing.xlarge};
		`}
	}

	.error-icon {
		color: ${sg.colors.error};
		position: absolute;
		right: ${({ iconPosition }) =>
			iconPosition === 'right'
				? `calc(${sg.spacing.xlarge} + ${sg.spacing.xxlarge});`
				: `${sg.spacing.xlarge};`};
	}
`

export const Icon = styled.i`
	display: flex;
	align-items: center;
`

type InputProps = {
	hasError: boolean
	hasIcon: boolean
	iconPosition: 'left' | 'right'
}

export const Input = styled.input<InputProps>`
	background-color: ${sg.colors.white};
	border: 1px solid
		${props =>
			props.hasError ? sg.colors.error : sg.colors.grayscale.spacerLight};
	border-radius: ${sg.spacing.small};
	box-sizing: border-box;

	color: ${sg.colors.grayscale.black};

	font-size: ${sg.fontSize.small};
	font-weight: 400;
	font-family: ${sg.fontFamily.primary};

	height: 44px;
	width: 100%;
	padding: ${sg.spacing.xlarge};

	outline: none;

	${({ iconPosition, hasIcon }) =>
		hasIcon && `padding-${iconPosition}: calc(${sg.spacing.xlarge} + 24px);`}

	${props =>
		!props.hasError &&
		css`
			:active,
			:focus {
				border: 1px solid ${sg.colors.secondary};
				box-shadow: inset 0px 4px 5px rgba(33, 1, 38, 0.03);
			}
		`}

	:disabled {
		color: ${sg.colors.grayscale.border};
		background-color: ${sg.colors.grayscale.disable};
		border: 1px solid ${sg.colors.grayscale.spacerLight};
	}

	::placeholder {
		color: ${sg.colors.grayscale.border};
		font-size: ${sg.fontSize.small};
		font-weight: 400;
		font-family: ${sg.fontFamily.primary};
	}
`

export const Error = styled.span`
	color: ${sg.colors.error};
	text-align: end;

	font-family: ${sg.fontFamily.primary};
	font-size: ${sg.fontSize.small};
	font-weight: 400;
`
