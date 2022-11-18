import styled from 'styled-components'

import { loginBackground } from '@/assets/imgs'
import { sg } from '@/styles'

export const Container = styled.section`
	display: flex;
	justify-content: space-between;
	height: 100%;
`

export const ImageBackground = styled.section`
	display: flex;
	flex: 1;

	background-image: ${`url(${loginBackground})`};
	background-size: cover;
	background-position: center;

	${sg.media.lessThan('small')} {
		display: none;
	}
`

export const Content = styled.section`
	display: flex;
	flex: 1;

	flex-direction: column;
	justify-content: flex-start;

	padding: 0 64px;

	${sg.media.lessThan('small')} {
		padding: 0 16px;
	}
`

export const Title = styled.h2`
	margin: 120px 0 ${sg.spacing.large} 0;

	${sg.media.lessThan('small')} {
		font-size: ${sg.fontSize.xxlarge};

		margin: 32px 0 ${sg.spacing.small} 0;
	}
`

export const Subtitle = styled.h6`
	color: ${sg.colors.grayscale.secondaryText};
	margin-bottom: 48px;

	${sg.media.lessThan('small')} {
		font-size: ${sg.fontSize.small};

		margin-bottom: 32px;
	}
`

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;

	gap: ${sg.spacing.xlarge};

	width: 80%;

	& > *:nth-last-child(2) {
		margin-bottom: ${sg.spacing.xxxlarge};
	}

	${sg.media.lessThan('small')} {
		gap: ${sg.spacing.large};

		width: 100%;
	}
`
