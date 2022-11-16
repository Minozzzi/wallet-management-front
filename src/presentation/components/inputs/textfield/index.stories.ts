import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from '.'

const meta: Meta<typeof TextField> = {
	title: 'Components/Inputs/TextField',
	component: TextField,
	tags: ['docsPage']
}

export default meta
type Story = StoryObj<typeof TextField>

export const Base: Story = {
	args: {
		label: 'Default Label',
		onChange: () => null,
		value: '',
		placeholder: 'Input placeholder'
	},
	argTypes: {
		onChange: {
			action: 'input changed'
		}
	}
}

export const WithError: Story = {
	args: {
		label: 'Default Label',
		onChange: () => null,
		value: 'email@gmail',
		error: 'Invalid email'
	}
}
