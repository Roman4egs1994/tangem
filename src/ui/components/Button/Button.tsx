import { ComponentPropsWithoutRef, ReactNode, forwardRef } from 'react'
import {Slot} from "@radix-ui/react-slot";
import {clsx} from "clsx";

import s from './Button.module.scss'


export type ButtonProps = {
  asChild?: boolean
  children?: ReactNode
  className?: string
  fullWidth?: boolean
  variant?: 'link' | 'primary' | 'secondary' | 'tertiary' | 'tangem'
} & ComponentPropsWithoutRef<'button'>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { asChild, children, className, fullWidth, variant = 'tangem', ...rest } = props

  const isLink = asChild && variant === 'link'
  const classNames = clsx(
    s.button,
    variant && s[variant],
    isLink && s.link,
    fullWidth && s.fullWidth,
    className
  )

  const Component = asChild ? Slot : 'button'

  return (
    <Component className={classNames} ref={ref} {...rest}>
      {children}
    </Component>
  )
})
