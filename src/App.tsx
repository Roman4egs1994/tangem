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
        if (!getItemOpenCardInLocalStorage && getItemOpenCardInLocalStorage !== '') {
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
                <div className={s.task}>
                    <h3>Техническое задание:</h3>
                    <ul>
                        <li>Сверстать страницу по макету в Figma.</li>
                        <li>Выполнить адаптив.</li>
                        <li>Высота страницы должна быть минимум в 2 раза больше размера вьюпорта.</li>
                        <li>Нижний баннер скрыт при загрузке страницы.</li>
                        <li>При прокрутке страницы, как только из области видимости исчезает верхний баннер, плавно появляется нижний баннер.</li>
                        <li>Если пользователь, нажимает кнопку закрыть, нижний баннер скрывается и после обновления страницы не должен больше появляться.</li>
                    </ul>
                </div>
                <Card
                    style={{position: 'fixed', bottom: '0px'}}
                    classNameWrapper={s.card}
                    onClickCloseBanner={onClickCloseCard}
                    open={openCard}
                />
            </Layout>
    )
}
