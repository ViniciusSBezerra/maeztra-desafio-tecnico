import { News } from "../../../assets/header-icons/News"

export const MenuNav = () => {
    return (
        <nav className="max-w-[1598px] mx-auto hidden lg:block">
            <ul className="flex justify-center gap-[15px] py-[14px] ">
                <li className=" text-sm leading-[21px] cursor-pointer text-[#FAA500] font-bold w-[147px] text-center flex items-center gap-2" > <News /> Novidades</li>
                <li className="font-normal text-sm leading-[21px] cursor-pointer text-[#353535] w-[147px] text-center hover:font-semibold hover:text-[#FAA500]">Vestidos</li>
                <li className="font-normal text-sm leading-[21px] cursor-pointer text-[#353535] w-[147px] text-center hover:font-semibold hover:text-[#FAA500]">Roupas</li>
                <li className="font-normal text-sm leading-[21px] cursor-pointer text-[#353535] w-[147px] text-center hover:font-semibold hover:text-[#FAA500]">Sapatos</li>
                <li className="font-normal text-sm leading-[21px] cursor-pointer text-[#353535] w-[147px] text-center hover:font-semibold hover:text-[#FAA500]">Lingerie</li>
                <li className="font-normal text-sm leading-[21px] cursor-pointer text-[#353535] w-[147px] text-center hover:font-semibold hover:text-[#FAA500]">Acessórios</li>
                <li className="font-normal text-sm leading-[21px] cursor-pointer text-[#353535] w-[147px] text-center hover:font-semibold hover:text-[#FAA500]">OUTLET</li>

            </ul>
        </nav>
    )
}