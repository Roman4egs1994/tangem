import {ComponentPropsWithoutRef, CSSProperties, ElementRef, forwardRef} from 'react'
import {clsx} from "clsx";

import s from './Layout.module.scss'

type Props = ComponentPropsWithoutRef<'div'> & {
    contentMarginTop?: CSSProperties['marginTop']
}
export const Layout = forwardRef<ElementRef<'div'>, Props>(({className, children, ...rest}, ref) => {
        const classNames = {
            main: clsx(s.main)
        }
        return (
            <div ref={ref} {...rest}>
                {/*There should be a HEADER here*/}
                <main className={classNames.main}>{children}</main>
            </div>
        )
    }
)
