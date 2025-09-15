import MainPage from "../src/assets/Home/MainPage"
import Presentation from "../src/assets/Home/Presentation"
import OurMeats from "../src/assets/Home/OurMeats"
import Button from "../src/assets/Home/Button"
import Foods from "../src/assets/Home/Foods"
import Reviews from "../src/assets/Home/Reviews"
import homeLang from "../src/assets/Json/HomeJson"
import FAQBtn from "../src/assets/Home/FAQBtn"

function Home({lang, toggleFade}) {
  return (
<main className="pb-20 bg-black">
  

      <div className="flex flex-col items-center justify-center">
        <MainPage {...{toggleFade}} />

        <Presentation {...{lang}} />

        <OurMeats {...{lang}} />

        <section className="flex flex-col items-center justify-center py-30 gap-10 w-full text-center">
          <h2 className="text-4xl text-royal font-yrsa">{homeLang.slogan[lang]}
          </h2>

            <div className="flex flex-row px-10 gap-5 justify-center w-full text-royal font-yrsa">
              <Button children={homeLang.menu[lang]} to={"menu"} src={"bg-[url('/img/home/menu.jpg')]"} />
              <Button children={homeLang.book[lang]} to={"book"} src={"bg-[url('/img/home/table.jpg')]"} />
            </div>
        </section>
        
            <Foods></Foods>

        <section className="flex flex-row w-full h-150 gap-30 px-5">
          <div className="flex items-center text-royal w-1/2 text-center text-3xl leading-relaxed">
            <h2>{homeLang.reviewTitle[lang]}</h2>
          </div>
          
          <div className=" flex items-center w-1/2">
            <Reviews {...{lang}}/>
          </div>
        </section>

        <section className="flex flex-col items-center text-royal text-2xl text-center gap-10">
          <h2>Preguntas frecuentes: descubre cómo cuidamos cada detalle.</h2>
          <FAQBtn></FAQBtn>
        </section>
        
      </div>
    </main>
  )
}

export default Home