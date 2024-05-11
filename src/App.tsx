

import { BenefitsBar } from "./components/benefits-bar/BenefitsBar"
import { InfoCard } from "./components/infocard/InfoCard"
import { Carousel } from "./components/slider-layout/SliderLayout"

import banner from "./assets/Slider/banner-principal.png"
import { TagPartners } from "./components/tag-partners/TagPartners"

function App() {

  return (

    <>


      <Carousel images={[banner, banner, banner, banner]} />
      <BenefitsBar />

      <TagPartners />

      <InfoCard />


    </>




  )
}

export default App
