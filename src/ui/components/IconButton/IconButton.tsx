import React, {ComponentPropsWithoutRef, forwardRef} from 'react'
import {clsx} from 'clsx'

import s from './IconButton.module.scss'
import {Slot} from "@radix-ui/react-slot";

export type ButtonIconProps = {
    asChild?: boolean  /** Allows you to be both a button and a link (polymorphic component) */
    children: React.ReactNode
    className?: string
    icon?: string
    variant?: 'primary' | 'secondary'
} & ComponentPropsWithoutRef<"button">

export const IconButton = forwardRef<HTMLButtonElement, ButtonIconProps>((props, ref) => {

        const {asChild, children, className, variant = 'tangem', ...rest} = props

        const iconButtonClasses = {
            button: clsx(
                s.button,
                variant && s[variant],
                className
            ),
        }

        const Component = asChild ? Slot : 'button'

        return (
            <Component className={iconButtonClasses.button} {...rest} ref={ref}>
                {children}
            </Component>
        )
    }
)
