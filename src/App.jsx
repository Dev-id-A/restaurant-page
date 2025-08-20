import { Route, Routes } from "react-router"
import Home from "../pages/Home"
import FAQ from "../pages/FAQ"

function App() {

  return (
    <>
    <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="faq" element={<FAQ/>} />

    </Routes>
    </>
  )
}

export default App
