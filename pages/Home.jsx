import MainPage from "../src/assets/Home/MainPage"
import Presentation from "../src/assets/Home/Presentation"
import OurMeats from "../src/assets/Home/OurMeats"
import Button from "../src/assets/Home/Button"
import Foods from "../src/assets/Home/Foods"
import Reviews from "../src/assets/Home/Reviews"

function Home({lang, toggleFade}) {
  return (
<main className="pb-20 bg-gradient-to-r from-[rgba(9,9,9,1)] via-[rgba(30,18,0,1)] to-[rgba(9,9,9,1)]">

      <div className="flex flex-col items-center justify-center">
        <MainPage {...{toggleFade}} />
        <Presentation {...{lang}} />
        <OurMeats {...{lang}} />

        <section className="flex flex-col items-center justify-center py-30 gap-10 w-full text-center">
          <h2 className="text-4xl text-royal font-yrsa">{lang == "es" ? 
            `Cada plato es una obra de arte. ¡Explora nuestra carta y asegura tu mesa!`:
            "Each dish is a masterpiece. Explore our menu and reserve your table."}
          </h2>

            <div className="flex flex-row px-10 gap-5 justify-center w-full text-white font-yrsa">
              <Button children={lang == "es" ? "Menú":"Menu"} to={"menu"} src={"bg-[url('/img/home/menu.jpg')]"} />
              <Button children={lang=="es" ? "Reservar mesa":"Book a table"} to={"menu"} src={"bg-[url('/img/home/table.jpg')]"} />
            </div>
        </section>
        
            <Foods></Foods>

            <Reviews></Reviews>
        
      </div>
    </main>
  )
}

export default Home