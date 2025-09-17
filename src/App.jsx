import { Route, Routes } from "react-router"
import Home from "../pages/Home"
import FAQ from "../pages/FAQ"
import Menu from "../pages/Menu"
import { useEffect, useState } from "react"
import Layout from "../pages/Layout"
import Book from "../pages/Book"

function App() {
  const [lang, setLang] = useState("es");
  const [fadeLang, setFadeLang] = useState(false);

  const toggleFade = (langParam) => {
    if(langParam !== lang){
    setLang(langParam)
    setFadeLang(true)
    setTimeout(()=> 
      setFadeLang(false)
    ,500)
  }
  };

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout {...{fadeLang}} />}>

        <Route index element={<Home {...{lang, toggleFade}} />} />
        <Route path="faq" element={<FAQ {...{lang, toggleFade}}/>} />
        <Route path="menu" element={<Menu {...{lang, toggleFade}} />} />
        <Route path="book" element={<Book {...{lang, toggleFade}} />} />

      </Route>
    </Routes>
    </>
  )
}

export default App
