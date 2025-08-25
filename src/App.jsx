import { Route, Routes } from "react-router"
import Home from "../pages/Home"
import FAQ from "../pages/FAQ"
import Menu from "../pages/Menu"
import { useEffect, useState } from "react"

function App() {
  const [lang, setLang] = useState("es");

  return (
    <>
    <Routes>

      <Route path="/" element={<Home {...{lang, setLang}} />} />
      <Route path="faq" element={<FAQ/>} />
      <Route path="menu" element={<Menu />} />
    </Routes>
    </>
  )
}

export default App
