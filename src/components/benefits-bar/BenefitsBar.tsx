
import { BenefitsBarCard } from "./BenefitsBarCard"

import world from "../../assets/benefitsbar/world.png"
import home from "../../assets/benefitsbar/home.png"
import box from "../../assets/benefitsbar/box.png"
import discount from "../../assets/benefitsbar/discount.png"
import truck from "../../assets/benefitsbar/truck.png"


export const BenefitsBar = () => {
    return <section className="flex flex-col max-w-[1598px] mx-auto mt-6">
        <p className="font-bold text-base leading-[24.34px] w-full text-center">Por que comprar na Maeztra?</p>

        <div className="flex gap-4 mt-4 overflow-x-auto">
            <BenefitsBarCard children={world} text="Produto de Alta Qualidade" title="Produtos importados" />
            <BenefitsBarCard children={home} text="Produtos mais perto de você!" title="Estoque no Brazil" />
            <BenefitsBarCard children={box} text="Trocas em até 48 horas, vejas as regras" title="Trocas Garantidas" />
            <BenefitsBarCard children={discount} text="Pagando à vista no Cartão" title="Ganhe 5% off" />
            <BenefitsBarCard children={truck} text="Em compras acima de R$ 499,00" title="Frete Grátis" />
        </div>
    </section>
}