import menuJson from "../Json/MenuJson"
import MenuBtn from "./MenuBtn"

function MenuSection({lang}) {
  return (
    <section className="flex flex-row justify-center size-full gap-20 p-10">
       {menuJson.menuSection.map((btn, i)=>
        <MenuBtn key={i} children={btn[lang]} image={btn.image} menu={btn.menu[lang]}></MenuBtn>
      )}
    </section>
  )
}

export default MenuSection