import menuJson from "../Json/MenuJson"
import MenuBtn from "./MenuBtn"

function MenuSection({lang}) {
  return (
    <section className="bg-black flex-1 flex flex-col justify-center items-center h-full w-full gap-20 px-10 py-10
    md:flex-row md:gap-5 md:py-0
    xl:mt-0 xl:gap-10 xl:py-10">
       {menuJson.menuSection.map((btn, i)=>
        <MenuBtn key={i} children={btn[lang]} image={btn.image} menu={btn.menu[lang]}></MenuBtn>
      )}
    </section>
  )
}

export default MenuSection