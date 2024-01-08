import {clsx} from "clsx";
import imgPresent from '@/common/images/imgPresent.svg'
import {Button} from "@/ui/components/Button";
import {IconButton} from "@/ui/components/IconButton";
import {IcClose} from "@/ui/components/IconsComponents/IcClose/IcClose";
import {Typography} from "@/ui/components/Typography";
import {SeparatorCircle} from "@/ui/components/SeparatorCircle/SeparatorCircle";
import {forwardRef, useRef} from "react";

import s from './Banner.module.scss'
import {IcNext} from "@/ui/components/IconsComponents/IcNext/IcNext";


type BannerProps = {
    open: boolean
    onClickCloseBanner: (open: boolean) => void
    onClickBtnShopNow?: () => void
}

export const Banner = forwardRef<HTMLDivElement, BannerProps>((props, ref) => {

    const {open = true, onClickBtnShopNow, onClickCloseBanner} = props

    const classNames = {
        comma: clsx(s.comma),
        wrapper: clsx(s.wrapper),
        imageBlock: clsx(s.imageBlock),
        image: clsx(s.image),
        textBanner: clsx(s.textBanner),
        bannerTriggers: clsx(s.bannerTriggers),
        circle: clsx(s.circle),
        yellowText: clsx(s.yellowText),
        blockTrigger: clsx(s.blockTrigger),
        triggerNext: clsx(s.triggerNext),
        yellowTextNoLetterS: clsx(s.yellowTextNoLetterS),
        textNone: clsx(s.textNone),
        btnClose: clsx(s.btnClose),
        mobileVer: clsx(s.mobileVer)
    }
    const endOfWrapper = useRef<HTMLButtonElement>(null);
    const startWrapper = useRef<HTMLDivElement>(null)

    const onclickFocusToEndWrapper = () => {
        if (endOfWrapper.current) {
            endOfWrapper.current.focus();
        }
    };
    const onclickFocusToStartWrapper = () => {
        if (startWrapper.current) {
            startWrapper.current.scrollLeft = 0
        }
    }
    const onClickHandlerConfirm = () => {
        onClickBtnShopNow?.()
    }
    const onClickCloseHandler = () => {
        onClickCloseBanner?.(open)
    }

    return (
        <>
            {open && <div ref={ref} className={s.banner}>
                <div ref={startWrapper} className={classNames.wrapper} >
                    <div  className={classNames.imageBlock}>
                        <img src={imgPresent} alt="image banner"/>
                    </div>
                    <div className={classNames.textBanner}>
                        <Typography variant={'Tangem'} asChild>
                            <span>Black Friday</span>
                        </Typography>{"\u00A0"}
                        <Typography variant={'Tangem'} asChild>
                            <span className={classNames.comma}>,</span>
                        </Typography>{"\u00A0"}
                        <Typography className={classNames.textNone} variant={'Tangem1'} asChild>
                            <span>, 24-27 Nov</span>
                        </Typography>
                        <SeparatorCircle className={classNames.circle}/>
                        <Typography className={classNames.yellowText} variant={'Tangem'} asChild>
                            <span>10%OFF</span>
                        </Typography>
                        <div className={classNames.blockTrigger}>
                            <IconButton className={classNames.triggerNext} onClick={onclickFocusToEndWrapper}>
                                <IcNext color={'rgba(217, 217, 217, 0.4)'} size={1.5}/>
                            </IconButton>
                        </div>
                        <SeparatorCircle className={classNames.circle}/>
                        <Typography className={classNames.mobileVer} variant={'Tangem1'} asChild>
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
                        <IconButton className={classNames.triggerNext} onClick={onclickFocusToStartWrapper}>
                            <IcNext color={'rgba(217, 217, 217, 0.4)'} size={1.5}/>
                        </IconButton>
                        <Button  variant={'tangem'} onClick={onClickHandlerConfirm}>Shop now</Button>
                        <IconButton ref={endOfWrapper} className={classNames.btnClose} onClick={onClickCloseHandler}><IcClose
                            size={1.5}/></IconButton>
                    </div>
                </div>
            </div>

            }
        </>
    );
})
