import {clsx} from "clsx";
import card from '@/common/images/card3.svg'

import s from './Card.module.scss'
import {IconButton} from "@/ui/components/IconButton";
import {IcClose} from "@/ui/components/IconsComponents/IcClose/IcClose";
import {Typography} from "@/ui/components/Typography";
import {Button} from "@/ui/components/Button";
import {CSSProperties, forwardRef} from "react";

type CardPropsType = {
    open: boolean
    onClickCloseBanner: (open: boolean) => void
    onClickBtnShopNow?: () => void
    style?: CSSProperties
    classNameWrapper?: string
}

export const Card = forwardRef<HTMLDivElement, CardPropsType>((props, ref) => {
    const {open, onClickCloseBanner, onClickBtnShopNow , style,classNameWrapper} = props
    const classNames = {
        wrapperCard: clsx(s.wrapperCard, classNameWrapper),
        image: clsx(s.image),
        description: clsx(s.description),
        btnClose: clsx(s.btnClose),
        imgBlock: clsx(s.imgBlock),
        btnCloseBlock: clsx(s.btnCloseBlock),
        discountText: clsx(s.discountText),
        descriptionText: clsx(s.descriptionText),
        goldSpan: clsx(s.goldSpan),
        trigger: clsx(s.trigger)
    }

    const onClickHandlerConfirm = () => {
        onClickBtnShopNow?.()
    }
    const onClickCloseHandler = () => {
        onClickCloseBanner?.(open)
    }
    return (
        <>
            {open && <div className={classNames.wrapperCard} ref={ref} style={style}>
                <img className={classNames.image} src={card} alt=""></img>
                <div className={classNames.description}>
                    <div className={classNames.btnCloseBlock}>
                        <IconButton onClick={onClickCloseHandler} className={classNames.btnClose}>
                            <IcClose size={1.5}/>
                        </IconButton>
                    </div>
                    <Typography variant={"Tangem2"}>
                        Black Friday
                    </Typography>
                    <div className={classNames.discountText}>
                        10%OFF
                    </div>
                    <Typography className={classNames.descriptionText}>
                        Use code <span className={classNames.goldSpan}>10FRIDAY</span> at checkout
                    </Typography>
                    <Button onClick={onClickHandlerConfirm} className={classNames.trigger} fullWidth>Shop now through
                        Monday</Button>
                </div>
            </div>}
        </>
    );
})
