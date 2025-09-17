import MenuSection from "../src/assets/Menu.jsx/MenuSection";
import menuJson from "../src/assets/Json/MenuJson";
import LinkBtn from "../src/assets/FAQ/LinkBtn";

function Menu({lang}) {
  return (
    <main className="w-screen h-screen overflow-hidden bg-black text-royal">

      <div className="relative w-full h-30 flex flex-row justify-center items-center">

        <LinkBtn {...{lang}}/>

        <h1 className="text-6xl">{menuJson.presentation[lang]}</h1>

      </div>
      
      <div className="py-10 h-[90vh]">
        <MenuSection {...{lang}}/>
      </div>

    </main>

  )
}

export default Menu