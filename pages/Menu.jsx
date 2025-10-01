import MenuSection from "../src/assets/Menu/MenuSection";
import menuJson from "../src/assets/Json/MenuJson";
import LinkBtn from "../src/assets/FAQ/LinkBtn";
import { useEffect } from "react";

function Menu({lang}) {
  useEffect(()=> window.scrollTo(0,0));
  return (
    <main className="flex flex-col bg-black text-royal min-h-screen font-luxurious">

      <div className="flex flex-col justify-center items-center">
        <LinkBtn {...{lang}}/>

          <h1 className="mt-10 text-4xl md:mt-0 md:text-6xl">{menuJson.presentation[lang]}</h1>
      </div>

        <MenuSection {...{lang}}/>

    </main>

  )
}

export default Menu