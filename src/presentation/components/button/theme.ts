import { sg } from '@/styles'

export enum ButtonThemes {
	primary = 'primary',
	secondary = 'secondary',
	error = 'error'
}

export type ButtonThemeProps = {
	color: string
	background: string
	backgroundHover: string
}

export const buttonThemes: { [key in ButtonThemes]: ButtonThemeProps } = {
	primary: {
		color: sg.colors.grayscale.black,
		background: sg.colors.primary,
		backgroundHover: sg.colors.primaryLight
	},
	secondary: {
		color: sg.colors.white + sg.opacity[90],
		background: sg.colors.secondary,
		backgroundHover: sg.colors.secondaryLight
	},
	error: {
		color: sg.colors.white + sg.opacity[90],
		background: sg.colors.error,
		backgroundHover: sg.colors.errorLight
	}
}
