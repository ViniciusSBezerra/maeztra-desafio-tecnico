import { Maeztra } from "../../assets/Brand/Maeztra"
import { Vtex } from "../../assets/Brand/Vtex"
import { MasterCard } from "../../assets/Payment/Master-card"
import { Visa } from "../../assets/Payment/Visa"
import { Facebook } from "../../assets/social-medias/Facebook"
import { Instagram } from "../../assets/social-medias/Instagram"
import { Linkedin } from "../../assets/social-medias/Linkedin"
import { Youtube } from "../../assets/social-medias/Youtube"
import { NewsLetter } from "../news-letter/News-Letter"
import { AccordionMenu } from "./Footer-menu-mobile"
import { useMediaQuery } from "react-responsive"

export const Footer = () => {

    const footerMenuController = useMediaQuery({ query: "(min-width: 768px)" })

    return (
        <>

            <NewsLetter />


            {footerMenuController ? (<div className="flex w-full max-w-[952px] pt-[43px] pb-16  justify-between mx-auto">
                <div className="flex  flex-col gap-6">
                    <p className="text-base font-bold leading-[18px]">Informações</p>

                    <ul className="flex  flex-col gap-6">
                        <li className="text-xs leading-[18px] font-normal">Quem Somos</li>
                        <li className="text-xs leading-[18px] font-normal">Prazo de Envio</li>
                        <li className="text-xs leading-[18px] font-normal">Trocas e Devoluções</li>
                        <li className="text-xs leading-[18px] font-normal">Promoções e Cupons</li>
                    </ul>
                </div>
                <div className="flex  flex-col gap-6">
                    <p className="text-base font-bold leading-[18px]">Minha Conta</p>
                    <ul className="flex  flex-col gap-6">
                        <li className="text-xs leading-[18px] font-normal">Minha Conta</li>
                        <li className="text-xs leading-[18px] font-normal">Meus Pedidos</li>
                        <li className="text-xs leading-[18px] font-normal">Cadastre-se</li>

                    </ul>
                </div>
                <div className="flex  flex-col gap-6">
                    <p className="text-base font-bold leading-[18px]">Onde nos Encontrar</p>

                    <ul className="flex  flex-col gap-6">
                        <li className="text-xs leading-[18px] font-normal">Lojas</li>
                        <li className="text-xs leading-[18px] font-normal">Endereço</li>


                    </ul>

                </div>
            </div>) : (
                <div className="w-full bg-white px-[31px] py-[40px] flex flex-col gap-4">
                    <AccordionMenu name="Informações" links={["Quem Somos", "Prazo de Envio", "Trocas e Devoluções", "Promoções e Cupons"]} />
                    <AccordionMenu name="Minha Conta" links={["Minha Conta", "Meus Pedidos", "Cadastre-se"]} />
                    <AccordionMenu name="Onde nos Encontrar" links={["Lojas", "Endereço"]} />

                </div>

            )}


            <footer className="w-full bg-[#353535]  px-[31px] pt-6 pb-[32.3px]">



                <div className="max-w-[1598px] mx-auto flex flex-col relative bottom-0 gap-8 md:flex-row md:justify-between w-full ">
                    <div className="flex gap-6 justify-center items-center md:gap-[22px]">
                        <Facebook />
                        <Linkedin />
                        <Instagram />
                        <Youtube />
                    </div>

                    <div className="flex gap-6 justify-center items-center md:gap-[22px]">
                        <Visa />
                        <MasterCard />
                        <Visa />
                        <MasterCard />
                    </div>

                    <div className="flex gap-6 justify-center items-center md:gap-[22px]">
                        <Vtex />
                        <Maeztra />
                    </div>

                </div>

            </footer>
        </>
    )
}

