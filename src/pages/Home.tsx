import { BenefitsBar } from "../components/benefits-bar/BenefitsBar"
import { InfoCard } from "../components/infocard/InfoCard"
import { Carousel } from "../components/slider-layout/SliderLayout"
import { SliderProduct } from "../components/slider-products/SliderProducts"
import { TagPartners } from "../components/tag-partners/TagPartners"
import banner from '../assets/Slider/banner-principal.png'

export const Home = () => {
    return (
        <>
            <Carousel images={[banner, banner, banner, banner]} />
            <BenefitsBar />

            <TagPartners />

            <SliderProduct />

            <InfoCard /></>
    )
}