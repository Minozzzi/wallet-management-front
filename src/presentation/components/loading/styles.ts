import styled from 'styled-components'

import { sg } from '@/styles'

export const Loader = styled.span<{ size: number }>`
	width: ${({ size }) => size}px;
	height: ${({ size }) => size}px;

	background: ${sg.colors.white};
	border-radius: 50%;

	position: relative;
	animation: roll 1s ease-in-out infinite alternate;

	&:after {
		content: '';
		position: absolute;
		inset: 5px;
		border-radius: 50%;
		border: 5px solid;
		border-color: ${sg.colors.secondaryDark} transparent;
	}

	@keyframes roll {
		0% {
			transform: translateX(-150%) rotate(0deg) ${sg.colors.secondaryDark};
		}
		100% {
			transform: translateX(150%) rotate(360deg);
		}
	}
`
