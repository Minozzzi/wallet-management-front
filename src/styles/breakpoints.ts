export const breakpoints = {
	xlarge: 4000,
	large: 1920,
	medium: 1280,
	small: 960,
	xsmall: 600
}

export type Breakpoints = keyof typeof breakpoints

function extractBreakpointValue(breakpoint: number | Breakpoints): string {
	const size = (<any>breakpoints)[breakpoint] || breakpoint
	return `${size}px`
}

export const media = {
	lessThan: (breakpoint: number | Breakpoints): string => {
		return `@media(max-width: ${extractBreakpointValue(breakpoint)})`
	},
	between: (
		first: number | Breakpoints,
		second: number | Breakpoints
	): string => {
		const parsedFirst = extractBreakpointValue(first)
		const parsedSecond = extractBreakpointValue(second)

		return `@media (min-width: ${parsedFirst}) and (max-width: ${parsedSecond})`
	},
	greaterThan: (breakpoint: number | Breakpoints): string => {
		return `@media(min-width: ${extractBreakpointValue(breakpoint)})`
	}
}
