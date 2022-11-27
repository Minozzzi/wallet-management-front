import styled from 'styled-components'

import { sg } from '@/styles'

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	gap: ${sg.spacing.xxlarge};

	height: 100%;
`

export const Table = styled.table`
	width: 100%;
	border-collapse: separate;
	border-spacing: 0px ${sg.spacing.large};
`

export const TableHead = styled.thead`
	font-size: ${sg.fontSize.small};
	font-weight: bold;
	color: ${sg.colors.grayscale.black};
`

export const TableHeadCell = styled.th`
	display: flex;
	align-items: center;
	gap: ${sg.spacing.medium};

	text-align: left;
	padding: 0px ${sg.spacing.xxlarge};
	cursor: pointer;
`

export const TableBody = styled.tbody`
	background-color: ${sg.colors.white};
	color: ${sg.colors.grayscale.black};

	tr {
		box-shadow: 0px 2px 2px rgba(50, 50, 71, 0.06),
			0px 2px 4px rgba(50, 50, 71, 0.06);
	}
`

export const TableRow = styled.tr``

export const TableCell = styled.td<{ align?: string }>`
	padding: ${sg.spacing.xlarge} ${sg.spacing.xxlarge};
	text-align: left;
`

export const TableFoot = styled.tfoot`
	font-size: ${sg.fontSize.default};
	font-weight: bold;
	color: ${sg.colors.grayscale.black};

	td {
		padding: 0px ${sg.spacing.large};
	}
`
