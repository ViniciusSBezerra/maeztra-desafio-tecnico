import { Header } from "./components/header/Header"
import { TopBar } from "./components/header/Topbar"
import { MenuNav } from "./components/header/menu-nav/MenuNav"

import { Footer } from "./components/Footer/Footer"


import { Home } from "./pages/Home"

function App() {

  return (
    <>
      <TopBar />
      <Header />
      <MenuNav />

      <Home />
      <Footer />

    </>

  )
}

export default App
