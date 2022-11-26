import * as Popover from '@radix-ui/react-popover'
import styled from 'styled-components'

import { sg } from '@/styles'

export const PopoverTrigger = styled(Popover.Trigger)`
	display: inline-flex;
	align-items: center;
	justify-content: center;

	border-radius: ${sg.spacing.medium};
	padding: 0 ${sg.spacing.large};

	cursor: pointer;

	font-size: ${sg.fontSize.default};
	font-weight: 500;

	height: 34px;
	background-color: ${sg.colors.white};

	color: ${sg.colors.grayscale.black};
	box-shadow: inset 0px 4px 5px rgba(33, 1, 38, 0.03);

	&:hover {
		background-color: ${sg.colors.grayscale.spacerLight};
	}

	&:focus {
		box-shadow: 0 0 0 2px ${sg.colors.black};
	}
`

export const PopoverContent = styled(Popover.Content)`
	border-radius: ${sg.spacing.medium};

	width: max-content;
	min-width: 200px;

	font-size: ${sg.fontSize.default};
	color: ${sg.colors.grayscale.black};
	background-color: ${sg.colors.white};

	box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
		hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
`

export const PopoverItem = styled.div`
	display: flex;
	align-items: center;

	cursor: pointer;

	gap: ${sg.spacing.medium};
	padding: ${sg.spacing.large};

	&:hover {
		background-color: ${sg.colors.grayscale.spacerLight};
	}

	&:not(:last-child) {
		border-bottom: 1px solid ${sg.colors.grayscale.border};
	}
`

export const PopoverItemText = styled.span`
	font-size: ${sg.fontSize.default};
	font-weight: 500;
`
