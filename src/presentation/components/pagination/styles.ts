import styled from 'styled-components'

import { Button } from '../button'
import { sg } from '@/styles'

export const Pagination = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`

export const HaveMore = styled.div`
	display: flex;
	align-items: flex-end;

	margin: 0px ${sg.spacing.medium};
`

type PaginationButtonGoPageProps = {
	disabled: boolean
}

export const ButtonGoPage = styled.button<PaginationButtonGoPageProps>`
	display: flex;
	cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
	background: none;
	font-size: ${sg.fontSize.large};
`

export const PaginationItem = styled(Button)`
	padding: ${sg.spacing.medium} ${sg.spacing.large};
	margin: 0 ${sg.spacing.medium};

	font-size: ${sg.fontSize.small};
`
