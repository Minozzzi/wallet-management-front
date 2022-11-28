import styled from 'styled-components'

import { sg } from '@/styles'

export const Overlay = styled.section`
	background: ${`${sg.colors.black}${sg.opacity[30]}`};

	position: absolute;
	left: 0;
	top: 0;

	width: 100%;
	height: 100%;

	display: flex;
	align-items: flex-start;
	justify-content: flex-end;
	overflow-x: hidden;
`

export const Container = styled.div`
	position: relative;
	background: ${sg.colors.white};

	height: 100%;
	width: 480px;

	padding: ${sg.spacing.xxlarge};
	overflow-y: auto;

	display: flex;
	flex-direction: column;

	transition: transform 0.4s ease-in-out;

	&.open {
		transform: translateX(0);
	}

	&.close {
		transform: translateX(100%);
	}
`

export const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export const Title = styled.h4`
	text-transform: uppercase;
	color: ${sg.colors.grayscale.black};
`

export const Content = styled.form`
	display: flex;
	flex-direction: column;
	flex-grow: 1;

	margin-top: ${sg.spacing.xxxlarge};
	gap: ${sg.spacing.xxlarge};
`
