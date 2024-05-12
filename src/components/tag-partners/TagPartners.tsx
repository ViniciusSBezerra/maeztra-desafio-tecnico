import AnnTaylor from "../../assets/TagPartners/anntaylor.png"
import Commar from "../../assets/TagPartners/comma.png"
import Forever21 from "../../assets/TagPartners/forever.png"
import Melissa from "../../assets/TagPartners/melissa.png"
import Zara from "../../assets/TagPartners/zara.png"


export const TagPartners = () => {
    return <section className="mt-10 lg:mt-20 flex flex-col gap-6 lg:gap-[17px]  ">
        <p className="font-bold text-2xl leading-[36.5px] lg:text-[32px] lg:leading-[48.67px] text-center">Marcas Parceiras</p>

        <div className="pl-[31px] md:pl-0 flex overflow-x-auto gap-[15px] mx-auto">
            <img className="max-w-[308px] w-full h-16" src={Commar} alt="Melissa" />
            <img className="max-w-[308px] w-full h-16" src={Melissa} alt="Melissa" />
            <img className="max-w-[308px] w-full h-16" src={Forever21} alt="Forever21" />
            <img className="max-w-[308px] w-full h-16" src={Zara} alt="Zara" />
            <img className="max-w-[308px] w-full h-16" src={AnnTaylor} alt="AnnTaylor" />
        </div>
    </section>
}