import styled from 'styled-components'

import { sg } from '@/styles'

export const Container = styled.section`
	display: flex;
	flex-direction: column;

	height: 100%;
`

export const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;

	margin-bottom: 64px;
`

export const HeaderLeft = styled.div`
	display: flex;
`

export const HeaderRight = styled.div`
	display: flex;
	gap: ${sg.spacing.large};
`

export const Title = styled.h2`
	text-transform: uppercase;
	color: ${sg.colors.grayscale.black};
`

export const LoadingContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	height: 50%;
`

export const NotFoundContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	height: 50%;
`

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	height: 100%;
`

export const FormBody = styled.div`
	display: flex;
	flex-direction: column;

	gap: ${sg.spacing.xxlarge};
`
