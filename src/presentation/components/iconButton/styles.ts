import styled from 'styled-components'

import { Button } from '../button'
import { sg } from '@/styles'

export const IconButton = styled(Button)`
	display: flex;
	align-items: center;
	justify-content: center;

	svg {
		all: unset;
		font-size: ${sg.fontSize.xlarge};
	}
`
