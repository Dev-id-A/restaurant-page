import { Route, Routes } from "react-router"
import Home from "../pages/Home"
import FAQ from "../pages/FAQ"
import Menu from "../pages/Menu"

function App() {

  return (
    <>
    <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="faq" element={<FAQ/>} />
      <Route path="menu" element={<Menu />} />
    </Routes>
    </>
  )
}

export default App
