import { ptBR } from '@mui/material/locale'
import { createTheme } from '@mui/material/styles'

import { sg } from './styleGuide'

export const materialUiTheme = createTheme(
	{
		palette: {
			primary: {
				main: sg.themeColors.primary,
				dark: sg.themeColors.primaryDark,
				light: sg.themeColors.primaryLight
			},
			secondary: {
				main: sg.themeColors.secondary,
				dark: sg.themeColors.secondaryDark,
				light: sg.themeColors.secondaryLight
			},
			error: {
				main: sg.themeColors.error,
				dark: sg.themeColors.errorDark,
				light: sg.themeColors.errorLight
			},
			warning: {
				main: sg.themeColors.warning,
				dark: sg.themeColors.warningDark,
				light: sg.themeColors.warningLight
			},
			info: {
				main: sg.themeColors.info,
				dark: sg.themeColors.infoDark,
				light: sg.themeColors.infoLight
			},
			success: {
				main: sg.themeColors.success,
				dark: sg.themeColors.successDark,
				light: sg.themeColors.successLight
			}
		},
		typography: {
			allVariants: {
				fontFamily: sg.fontFamily.primary
			},
			h1: { fontSize: sg.heading[1] },
			h2: { fontSize: sg.heading[2] },
			h3: { fontSize: sg.heading[3] },
			h4: { fontSize: sg.heading[4] },
			h5: { fontSize: sg.heading[5] },
			h6: { fontSize: sg.heading[6] }
		},
		breakpoints: {
			values: {
				xs: sg.breakpoints.xsmall,
				sm: sg.breakpoints.small,
				md: sg.breakpoints.medium,
				lg: sg.breakpoints.large,
				xl: sg.breakpoints.xlarge
			}
		}
	},
	ptBR
)
