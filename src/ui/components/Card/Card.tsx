import {clsx} from "clsx";

import s from './Card.module.scss'

export const Card = () => {

    const classNames = {
        wrapperCard:clsx(s.wrapperCard)
    }

    return (
        <div className={classNames.wrapperCard}>
            <div>

            </div>
            <div>

            </div>
        </div>
    );
};
