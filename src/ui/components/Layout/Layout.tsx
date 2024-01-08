import {ComponentPropsWithoutRef, CSSProperties} from 'react'
import clsx from "clsx";

import s from './Layout.module.scss'

type LayoutProps = ComponentPropsWithoutRef<'div'> & {
    contentMarginTop?: CSSProperties['marginTop']
}
export const Layout = ({className, children, ...rest}: LayoutProps) => {
    const classNames = {
        main: clsx(s.main, className),
        layout: clsx( className),
    }
    return (
        <div {...rest}>
            {/*There should be a HEADER here*/}
            <main className={classNames.main}>{children}</main>
        </div>
    )
}
