import { darken, lighten } from 'polished'

export const colors = Object.freeze({
	white: '#FFFFFF',
	black: '#000000',

	primary: '#C8EE44',
	secondary: '#29A073',

	error: '#E5363D',
	success: '#19D076',

	blueGrey: '#ECEFF1',

	grey300: '#E0E0E0',
	grey500: '#9E9E9E',
	grey800: '#424242'
})

export const themeColors = {
	highlight: colors.blueGrey,

	primary: colors.primary,
	primaryLight: lighten(0.15, colors.primary),
	primaryDark: darken(0.15, colors.primary),

	secondary: colors.secondary,
	secondaryLight: lighten(0.15, colors.secondary),
	secondaryDark: darken(0.15, colors.secondary),

	error: colors.error,
	success: colors.success
}

export const opacity = Object.freeze({
	100: 'ff',
	90: 'e5',
	80: 'cc',
	70: 'b2',
	60: '99',
	50: '7f',
	40: '65',
	30: '4c',
	20: '32',
	10: '19',
	0: '00'
})
