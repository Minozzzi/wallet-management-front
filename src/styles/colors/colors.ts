import { darken, lighten } from 'polished'

export const colors = Object.freeze({
	white: '#FFFFFF',
	black: '#000000',

	primary: '#C8EE44',
	primaryLight: lighten(0.15, '#C8EE44'),
	primaryDark: darken(0.15, '#C8EE44'),

	secondary: '#29A073',
	secondaryLight: lighten(0.15, '#29A073'),
	secondaryDark: darken(0.15, '#29A073'),

	error: '#D51A52',
	errorLight: lighten(0.15, '#D51A52'),

	success: '#00B998',
	info: '#0F0BAB',
	warning: '#FF9500',

	highlight: '#FDFDFD',

	grayscale: {
		black: '#343434',
		secondaryText: '#929EAE',
		hintText: '#4B3A5A',
		border: '#ABA7AF',
		disable: '#D4D2D5',
		spacer: '#D9D1E0',
		spacerLight: '#E5E0EB'
	}
})

export const opacity = Object.freeze({
	100: 'FF',
	90: 'E5',
	80: 'CC',
	70: 'B2',
	60: '99',
	50: '7F',
	40: '65',
	30: '4C',
	20: '32',
	10: '19',
	0: '00'
})
