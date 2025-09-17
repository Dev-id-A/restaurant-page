import MainPage from "../src/assets/Home/MainPage"
import Presentation from "../src/assets/Home/Presentation"
import OurMeats from "../src/assets/Home/OurMeats"
import Button from "../src/assets/Home/Button"
import Foods from "../src/assets/Home/Foods"
import Reviews from "../src/assets/Home/Reviews"
import homeLang from "../src/assets/Json/HomeJson"
import FAQBtn from "../src/assets/Home/FAQBtn"
import Ubication from "../src/assets/Home/Ubication"

function Home({lang, toggleFade}) {
  return (
<main className="bg-black text-royal">
  

      <div className="flex flex-col items-center justify-center">
        <MainPage {...{toggleFade}} />

        <Presentation {...{lang}} />

        <OurMeats {...{lang}} />

        <section className="flex flex-col items-center justify-center py-30 gap-10 w-full text-center">
          <h2 className="text-4xl font-yrsa">{homeLang.slogan[lang]}
          </h2>

            <div className="flex flex-row px-10 gap-5 justify-center w-full font-yrsa">
              <Button children={homeLang.menu[lang]} to={"menu"} src={"bg-[url('/img/home/menu.jpg')]"} />
              <Button children={homeLang.book[lang]} to={"book"} src={"bg-[url('/img/home/table.jpg')]"} />
            </div>
        </section>
        
            <Foods></Foods>

        <section className="flex flex-row w-full h-150 gap-30 px-5">
          <div className="flex items-center w-1/2 text-center text-3xl leading-relaxed">
            <h2>{homeLang.reviewTitle[lang]}</h2>
          </div>
          
          <div className=" flex items-center w-1/2">
            <Reviews {...{lang}}/>
          </div>
        </section>

        <section className="flex flex-col items-center text-2xl text-center gap-10">
          <h2>{homeLang.faqTitle[lang]}</h2>
          <FAQBtn {...{lang}} />
        </section>
        
        <section className="w-full h-fit flex flex-row mt-15 border-t-3">
          <Ubication />
          <div className="w-1/2 flex flex-col justify-center align-center ml-auto text-3xl gap-5">
            <h6>Contacto</h6>
            <a className="underline ml-5" href="mailto:dev.id.a.contact@gmail.com">-dev.id.a.contact@gmail.com</a>
            <h6>Ubicación</h6>
            <h6 className="ml-5">-5JHQ+RRW Campamento, España.</h6>
            <h6>© David Aranzana, todos los derechos reservados.</h6>
          </div>
        </section>
        
      </div>
    </main>
  )
}

export default Home