import {Layout} from "@/ui/components/Layout/Layout";
import {Banner} from "@/ui/components/Banner/Banner";
import {useState} from "react";
import {Card} from "@/ui/components/Card/Card";

export function App() {

    const [openBanner, setOpenBanner] = useState(true)
    const onClickCloseBanner = () => {
        setOpenBanner(false)
    }
    return (
        <Layout>
            <Banner open={openBanner} onClickCloseBanner={onClickCloseBanner}/>
            <div style={{height: '300px'}}>

            </div>
            <Card/>
            <div style={{height: '300px'}}>

            </div>
        </Layout>
    )
}