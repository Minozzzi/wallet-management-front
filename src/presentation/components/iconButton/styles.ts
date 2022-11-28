import styled, { css } from 'styled-components'

import { Button } from '../button'
import { sg } from '@/styles'

type IconButtonProps = {
	hasBackground: boolean
}

export const IconButton = styled(Button)<IconButtonProps>`
	display: flex;
	align-items: center;
	justify-content: center;

	${({ hasBackground }) =>
		!hasBackground &&
		css`
			background: transparent;

			&:hover {
				background: transparent;
			}

			padding: 0;
		`}

	svg {
		all: unset;
		font-size: ${sg.fontSize.xlarge};
	}
`
