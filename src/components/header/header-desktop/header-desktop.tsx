import { Bag } from "../../../assets/header-icons/Bag"

import { LogoDesktop } from "../../../assets/header-icons/LogoDesktop"
import { MyAccount } from "../../../assets/header-icons/MyAccount"
import { WishList } from "../../../assets/header-icons/WishList"

export const HeaderDesktop = () => {
    return <>
        <div className="flex items-center justify-between max-w-[1598px] mx-auto py-6 ">

            <div className="w-100"><LogoDesktop /> </div>

            <div className="flex gap-[15px] h-[26px] w-full max-w-[791px] md:gap-0 md:h-[40px] bg-[#EFEFEF]   rounded-lg ">
                <input className="w-full border bg-[#EFEFEF]  text-[#353535] pl-6 rounded-lg font-normal text-sm leading-[21px] lg:border-r-[0] lg:rounded-tr-none  lg:rounded-br-none" type="text" placeholder="O Que Você Busca?" />
                <button className="bg-[#FAA500] text-sm font-normal leading-[21px] text-[#FFFFFF] w-full rounded-lg max-w-[119px]"> Buscar</button>
            </div>

            <nav className="w-full max-w-[422px] flex items-center justify-between">
                <div className="flex items-center gap-2 cursor-pointer"><MyAccount /> Minha conta</div>
                <div className="flex items-center gap-2 cursor-pointer"><WishList /> Minha conta</div>
                <div className="flex items-center gap-2  cursor-pointer pt-3 pb-[13px] pr-[14px] pl-[17px] rounded-lg border border-[#FAA500]"><Bag /> Meu carrinho</div>
            </nav>
        </div>

    </>
}