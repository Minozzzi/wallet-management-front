import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '.'

const meta: Meta<typeof Button> = {
	title: 'Components/Button',
	component: Button,
	tags: ['docsPage']
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
	args: {
		children: 'Primary',
		theme: 'primary',
		type: 'button'
	}
}

export const Secondary: Story = {
	args: {
		children: 'Secondary',
		theme: 'secondary',
		type: 'button'
	}
}

export const Error: Story = {
	args: {
		children: 'Error',
		theme: 'error',
		type: 'button'
	}
}
