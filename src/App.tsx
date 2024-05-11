import { Header } from "./components/header/Header"
import { TopBar } from "./components/header/Topbar"
import { MenuNav } from "./components/header/menu-nav/MenuNav"


function App() {

  return (
    <>
      <TopBar />
      <Header />
      <MenuNav />
      <div className="w-full h-screen flex items-center justify-center">




        <h1 className="text-3xl">Template</h1>
      </div></>


  )
}

export default App
