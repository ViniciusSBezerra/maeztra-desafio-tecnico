import { Footer } from "./components/Footer/Footer"


import { BenefitsBar } from "./components/benefits-bar/BenefitsBar"
import { InfoCard } from "./components/infocard/InfoCard"
import { Carousel } from "./components/slider-layout/SliderLayout"

import banner from "./assets/Slider/banner-principal.png"
import { TagPartners } from "./components/tag-partners/TagPartners"
import { SliderProduct } from "./components/slider-products/SliderProducts"

function App() {

  return (





    <>


      <Carousel images={[banner, banner, banner, banner]} />
      <BenefitsBar />

      <TagPartners />

      <SliderProduct />

      <InfoCard />

      <Footer />


    </>




  )
}

export default App
