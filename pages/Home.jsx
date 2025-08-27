import MainPage from "../src/assets/Home/MainPage"
import Presentation from "../src/assets/Home/Presentation"
import OurMeats from "../src/assets/Home/OurMeats"
import Button from "../src/assets/Home/Button"
import Foods from "../src/assets/Home/Foods"

function Home({lang, toggleFade}) {
  return (
<main className="bg-[rgba(0,0,0,0.93)]">

      <div className="flex flex-col items-center justify-center">
        <MainPage {...{toggleFade}} />
        <Presentation {...{lang}} />
        <OurMeats {...{lang}} />

        <section className="flex flex-col items-center justify-center gap-20 w-[90%] text-center border bg-[rgba(58,34,0,0.69)]">
          <h2 className="text-4xl text-royal font-yrsa mt-10">{lang == "es" ? 
            `Cada plato es una obra de arte. Explora nuestra carta y asegura tu mesa.`:
            "Each dish is a masterpiece. Explore our menu and reserve your table."}
          </h2>

            <Foods></Foods>

            <div className="flex flex-row gap-30 mt-15 text-royal font-yrsa">
              <Button children={lang == "es" ? "Menú":"Menu"} to={"menu"} />
              <Button children={lang=="es" ? "Reservar mesa":"Book a table"} to={"menu"} />
            </div>
        </section>
      </div>
    </main>
  )
}

export default Home