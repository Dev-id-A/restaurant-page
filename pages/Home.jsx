import Navbar from "../src/assets/Navbar/Navbar"
import Presentation from "../src/assets/Home/Presentation"
import OurMeats from "../src/assets/Home/OurMeats"
import Button from "../src/assets/Home/Button"

function Home({lang, toggleFade}) {
  return (
<main className="h-screen bg-center bg-cover bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/img/chuleton-brasa.jpg')]">
      <Navbar {...{toggleFade}} />

      <div className="flex flex-col items-center justify-center">
        <img className="" src="/svg/the-grand.svg" alt="The grand logo" />
        <Presentation {...{lang}} />
        <OurMeats {...{lang}} />

        
        <h2 className="text-4xl text-royal font-yrsa mt-10">{lang == "es" ? 
          `Cada plato es una obra de arte. Explora nuestra carta y asegura tu mesa.`:
          "Each dish is a masterpiece. Explore our menu and reserve your table."}
          </h2>
        <section className="flex flex-row gap-30 mt-15 pb-20 text-royal font-yrsa">
          <Button children={lang == "es" ? "Menú":"Menu"} to={"menu"} />
          <Button children={lang=="es" ? "Reservar mesa":"Book a table"} to={"menu"} />
        </section>

      </div>
    </main>
  )
}

export default Home