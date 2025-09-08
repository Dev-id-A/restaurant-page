import MenuSection from "../src/assets/Menu.jsx/MenuSection";
import { Link } from "react-router";
import menuJson from "../src/assets/Json/MenuJson";

function Menu({lang}) {
  return (
    <main className="w-screen h-screen overflow-hidden">
      <div className="relative w-full h-30 flex flex-row justify-center items-center">
        <Link to={"/"} className="absolute grid place-items-center border left-20 h-10 w-30">{menuJson.home[lang]}</Link>
        <h1 className="text-6xl">{menuJson.presentation[lang]}</h1>
      </div>
      
      <div className="py-10 h-[90vh]">
        <MenuSection {...{lang}}/>
      </div>
    </main>
  )
}

export default Menu