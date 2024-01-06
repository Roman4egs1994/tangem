import {clsx} from "clsx";
import imgPresent from '@/common/images/imgPresent.svg'
import {Button} from "@/ui/components/Button";
import {IconButton} from "@/ui/components/IconButton";
import {IcClose} from "@/ui/components/IconsComponents/IcClose/IcClose";
import {Typography} from "@/ui/components/Typography";
import {SeparatorCircle} from "@/ui/components/SeparatorCircle/SeparatorCircle";
import {forwardRef} from "react";

import s from './Banner.module.scss'


type BannerProps = {
    open: boolean
    onClickCloseBanner: (open: boolean) => void
    onClickBtnShopNow?: () => void
}

export const Banner = forwardRef<HTMLDivElement, BannerProps>((props, ref) => {

    const {open = true, onClickBtnShopNow, onClickCloseBanner} = props

    const classNames = {
        wrapper: clsx(s.wrapper),
        image: clsx(s.image),
        textBanner: clsx(s.textBanner),
        bannerTriggers: clsx(s.bannerTriggers),
        circle: clsx(s.circle),
        yellowText: clsx(s.yellowText),
        yellowTextNoLetterS: clsx(s.yellowTextNoLetterS),
        textNone: clsx(s.textNone),
        btnClose: clsx(s.btnClose)
    }

    const onClickHandlerConfirm = () => {
        onClickBtnShopNow?.()
    }
    const onClickCloseHandler = () => {
        onClickCloseBanner?.(open)
    }

    return (
        <>
            {open &&
                <div ref={ref} className={classNames.wrapper}>
                    <div className={s.imageBlock}>
                        <img className={classNames.image} src={imgPresent} alt="image banner"/>
                    </div>
                    <div className={classNames.textBanner}>
                        <Typography variant={'Tangem'} asChild>
                            <span>Black Friday</span>
                        </Typography>{"\u00A0"}
                        <Typography className={classNames.textNone} variant={'Tangem1'} asChild>
                            <span>, 24-27 Nov</span>
                        </Typography>
                        <SeparatorCircle className={classNames.circle}/>
                        <Typography className={classNames.yellowText} variant={'Tangem'} asChild>
                            <span>10%OFF</span>
                        </Typography>
                        <SeparatorCircle className={classNames.circle}/>
                        <Typography variant={'Tangem1'} asChild>
                            <span>Use code</span>
                        </Typography>{"\u00A0"}
                        <Typography className={classNames.yellowTextNoLetterS} variant={'Tangem'} asChild>
                            <span>10FRIDAY</span>
                        </Typography>{"\u00A0"}
                        <Typography className={classNames.textNone} variant={'Tangem1'} asChild>
                            <span>at checkout</span>
                        </Typography>{"\u00A0"}
                    </div>
                    <div className={classNames.bannerTriggers}>
                        <Button onClick={onClickHandlerConfirm}>Shop now</Button>
                        <IconButton className={classNames.btnClose} onClick={onClickCloseHandler}><IcClose
                            size={1.5}/></IconButton>
                    </div>
                </div>
            }
        </>
    );
})
