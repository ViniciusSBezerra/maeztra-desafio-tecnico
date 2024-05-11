import { useState } from "react"
import { Plus } from "../../assets/generic-icons/Plus"

interface AccordionMenuProps {
    name: string
    links: string[]
}

export const AccordionMenu = ({ name, links }: AccordionMenuProps) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toogleMenu = () => {
        return setIsOpen(!isOpen)
    }


    return (
        <div className="w-full ">

            <button className="w-full flex justify-between items-center text-base font-bold leading-[18px]" onClick={toogleMenu}>{name}  <Plus /></button>


            {isOpen && <ul className="flex flex-col gap-2">
                {links.map((link) => <li className="text-xs leading-[18px] font-normal">{link}</li>)}
            </ul>}

        </div>
    )
}