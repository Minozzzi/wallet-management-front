import React, { useMemo } from 'react'

import * as S from './styles'
import { buttonThemes, ButtonThemes } from './theme'

export type ButtonProps = {
	/**
	 * It is the Button content
	 */
	children: React.ReactNode

	/**
	 * It is if the Button is disabled
	 */
	disabled?: boolean

	/**
	 * It is the reference of the Button element
	 */
	ref?: React.MutableRefObject<null>

	/**
	 * It is the Button theme
	 */
	theme?: keyof typeof ButtonThemes

	/**
	 * It is the Button type
	 */
	type?: 'submit' | 'button'

	/**
	 * It is the Button icon
	 */
	icon?: React.ReactNode

	/**
	 * It is if the Button is full width
	 */
	fullWidth?: boolean

	/** It is wrapper className */
	wrapperClassName?: string

	/**
	 * It is the Button onClick function
	 */
	onClick?: () => void
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			children,
			disabled = false,
			theme = ButtonThemes.primary,
			type = 'button',
			icon,
			fullWidth = false,
			wrapperClassName,
			onClick = () => null,
			...props
		},
		ref
	) => {
		const buttonTheme = useMemo(() => buttonThemes[theme], [theme])

		return (
			<S.Wrapper className={wrapperClassName}>
				<S.Button
					buttonTheme={buttonTheme}
					ref={ref}
					type={type}
					fullWidth={fullWidth}
					disabled={disabled}
					onClick={onClick}
					{...props}
				>
					{icon}
					{children}
				</S.Button>
			</S.Wrapper>
		)
	}
)
