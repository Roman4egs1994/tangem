import {Layout} from "@/ui/components/Layout/Layout";
import {Banner} from "@/ui/components/Banner/Banner";
import {useEffect, useState} from "react";
import {Card} from "@/ui/components/Card/Card";
import s from './App.module.scss'
import {getMeaningInLocalStorage, setLocalStorageItem} from "@/common/utils/localStorageUtils";

export function App() {

    const [openBanner, setOpenBanner] = useState(true)
    const [openCard, setOpenCard] = useState(false)
    const getItemOpenCardInLocalStorage = getMeaningInLocalStorage('openDiscountCard',)

    useEffect(() => {
        if (!getItemOpenCardInLocalStorage) {
            return
        }
        const checkScroll = () => {
            const scrollY = window.scrollY;
            const scrollThreshold = 200;
            if (scrollY > scrollThreshold && !openCard) {
                setOpenCard(true)
            }
        }
        window.addEventListener('scroll', checkScroll)
        return () => {
            window.removeEventListener('scroll', checkScroll)
        }
    }, [openCard])

    const onClickCloseBanner = () => {
        setOpenBanner(false)
    }
    const onClickCloseCard = () => {
        setOpenCard(false)
        setLocalStorageItem('openDiscountCard', false)
    }
    return (
            <Layout>
                <Banner open={openBanner} onClickCloseBanner={onClickCloseBanner}/>
                <Card
                    style={{position: 'fixed', bottom: '0px'}}
                    classNameWrapper={s.card}
                    onClickCloseBanner={onClickCloseCard}
                    open={openCard}
                />
            </Layout>
    )
}
