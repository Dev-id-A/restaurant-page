import MenuBtn from "./MenuBtn"

function MenuSection() {
  return (
    <section className="flex flex-row justify-center size-full gap-20 p-10">
       <MenuBtn children={"Vinos"}></MenuBtn> 
       <MenuBtn children={"Carnes"}></MenuBtn> 
       <MenuBtn children={"Postres"}></MenuBtn> 
    </section>
  )
}

export default MenuSection