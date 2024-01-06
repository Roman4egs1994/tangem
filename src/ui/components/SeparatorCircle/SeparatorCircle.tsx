import s from './SeparatorCircle.module.scss'
import {clsx} from "clsx";

type SeparatorCircleProps ={
    className?: string
}


export const SeparatorCircle = ({className}:SeparatorCircleProps) => {

    const classNames = {
        circle: clsx(s.circle, className)
    }

    return (
        <div className={classNames.circle}></div>
    );
};
