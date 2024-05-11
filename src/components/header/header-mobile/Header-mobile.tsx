import { Bag } from "../../../assets/header-icons/Bag"
import { Logo } from "../../../assets/header-icons/Logo"
import { Menu } from "../../../assets/header-icons/Menu"
import { Search } from "../../../assets/header-icons/Search"

export const HeaderMobile = () => {
    return <div className=" px-4 py-7 flex items-center justify-between">

        <div className="flex gap-[15px] items-center ">

            <Menu />
            <Logo />

        </div>

        <div className="flex gap-[31px] items-center " >
            <Search />
            <Bag />

        </div>

    </div>
}