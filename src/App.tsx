
import { BenefitsBar } from "./components/benefits-bar/BenefitsBar"
import { InfoCard } from "./components/infocard/InfoCard"
import { TagPartners } from "./components/tag-partners/TagPartners"

function App() {

  return (

    <>
      <div className="w-full h-screen flex items-center justify-center">
        <h1 className="text-3xl">Template</h1>

      </div>
      <BenefitsBar />

      <TagPartners />

      <InfoCard />


    </>




  )
}

export default App
