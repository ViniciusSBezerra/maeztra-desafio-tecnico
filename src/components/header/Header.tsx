import { useMediaQuery } from "react-responsive"
import { HeaderMobile } from "./header-mobile/Header-mobile"
import { HeaderDesktop } from "./header-desktop/header-desktop"

export const Header = () => {
    const footerMenuController = useMediaQuery({ query: "(min-width: 1024px)" })
    return (
        <header className="shadow-lg ">  {footerMenuController ? (<HeaderDesktop />) : (<HeaderMobile />)}</header>
    )
}


