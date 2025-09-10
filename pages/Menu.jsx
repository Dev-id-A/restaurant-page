import MenuSection from "../src/assets/Menu.jsx/MenuSection";
import { Link } from "react-router";
import menuJson from "../src/assets/Json/MenuJson";

function Menu({lang}) {
  return (
    <main className="w-screen h-screen overflow-hidden bg-gradient-to-r from-[rgba(9,9,9,1)] via-[rgba(30,18,0,1)] to-[rgba(9,9,9,1)]">
      <div className="relative w-full h-30 flex flex-row justify-center items-center">

        <Link to={"/"} className="absolute grid place-items-center left-20 h-10 w-30 text-white">
        <svg className="absolute inset-0" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 10L8 14L6 14L-2.62268e-07 8L6 2L8 2L8 6L16 6L16 10L8 10Z"></path>
        </svg>
          <p className="absolute top-11 left-15 text-black text-xl">{menuJson.home[lang]}</p>
        </Link>

        <h1 className="text-6xl text-white">{menuJson.presentation[lang]}</h1>

      </div>
      
      <div className="py-10 h-[90vh]">
        <MenuSection {...{lang}}/>
      </div>
    </main>
  )
}

export default Menu