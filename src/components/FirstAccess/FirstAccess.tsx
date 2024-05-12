import { useState } from "react"
import { AirPlane } from "../../assets/FirstAccess/Airplane"
import { Email } from "../../assets/FirstAccess/Email"
import ImageModal from '../../assets/FirstAccess/imageModal.png'

export const FirstAccess = () => {
    const [active, setActive] = useState(true)

    return (
        <>

            {active ? (
                <>
                    <div className="fixed w-full h-full bg-black backdrop-filter backdrop-blur-lg opacity-70  top-0 left-0  px-8  z-40 flex items-center justify-center  "></div>
                    <div className="w-full h-full fixed top-0 left-0  px-8  z-40 flex items-center justify-center  " >



                        <img className="hidden lg:block max-h-[530px]" src={ImageModal} alt="" />

                        <div className="bg-white w-full text-center mt-20 lg:mt-0  lg:h-full flex flex-col items-center px-5 pt-[40px] max-h-[530px] pb-6 relative max-w-[422px] lg:justify-center lg:px-[50px]">
                            <button className="text-white absolute right-0 top-[-24px] opacity-70" onClick={() => setActive(false)}>FECHAR</button>
                            <Email />
                            <p className="text-xs leading-5 text-[#464b54] mt-3 uppercase">Bem Vindo à MAEZTRA</p>
                            <p className="text-base leading-[23px] text-[#787D83] mt-3 lg:text-[20px]" >Receba em Primeira mão
                                <br />  <span className="font-bold">desconto e ofertas exclusivas</span></p>

                            <div className="mt-[26px] flex flex-col gap-[10px] w-full">
                                <input className="border px-[9px] border-[#C4C4C4] rounded-[5px] h-10 text-[12px]" type="text" placeholder="Digite seu e-mail" />
                                <button className="py-[10px] text-xs leading-5 font-bold text-white bg-[#FAA500] flex justify-center items-center gap-2 rounded-[10px]">Enviar <AirPlane /></button>
                            </div>
                        </div>
                    </div></>
            ) : <></>}
        </>
    )
}