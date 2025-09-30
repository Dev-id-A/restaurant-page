import MainPage from "../src/assets/Home/MainPage"
import Presentation from "../src/assets/Home/Presentation"
import OurMeats from "../src/assets/Home/OurMeats"
import Button from "../src/assets/Home/Button"
import Foods from "../src/assets/Home/Foods"
import Reviews from "../src/assets/Home/Reviews"
import homeLang from "../src/assets/Json/HomeJson"
import FAQBtn from "../src/assets/Home/FAQBtn"
import Ubication from "../src/assets/Home/Ubication"
import Book from "./Book"
import { useState } from "react"

function Home({lang, toggleFade}) {
  const [bookDisplay, setBookDisplay] = useState("hidden");

  const changeDisplay = () => {
    if(bookDisplay == "hidden"){
      return setBookDisplay("block");
    } else if (bookDisplay == "block"){
      return setBookDisplay("hidden");
    }
    return;
  }

  return (
<main className="bg-gradient-to-r from-[rgba(24,14,0,1)] to-[rgba(4,4,4,1)] text-royal">

    <div className={`bg-[rgba(0,0,0,0.7)] min-h-screen min-w-screen z-10 fixed ${bookDisplay}`}>
      <Book lang={lang} {...{bookDisplay, setBookDisplay, changeDisplay}}></Book>
    </div>
      

      <div className="flex flex-col items-center justify-center">
        <MainPage {...{toggleFade}} />

        <Presentation {...{lang}} />

        <section className="flex flex-col items-center justify-center pb-20 px-3 xl:px-0 gap-10 w-full text-center">
          <h2 className="text-3xl xl:text-4xl font-yrsa">{homeLang.slogan[lang]}
          </h2>

            <div className="flex flex-col md:flex-row px-3 xl:px-10 gap-5 justify-center w-full font-luxurious">
              <Button children={homeLang.menu[lang]} to={"menu"} src={"bg-[url('/img/home/menu.jpg')]"} />
              <Button children={homeLang.book[lang]} click={changeDisplay} src={"bg-[url('/img/home/table.jpg')]"} />
            </div>
        </section>

        <OurMeats {...{lang}} />
        
        <Foods></Foods>

        <section className="flex flex-col xl:flex-row w-full xl:h-150 gap-5 py-25 xl:gap-30 px-5 font-teko">
          <div className="flex items-center w-full xl:w-1/2 text-center text-2xl xl:text-4xl leading-relaxed">
            <h2>{homeLang.reviewTitle[lang]}</h2>
          </div>
          
          <div className="flex items-center w-full xl:w-1/2">
            <Reviews {...{lang}}/>
          </div>
        </section>

        <section className="flex flex-col items-center text-lg xl:text-3xl text-center px-5 xl:px-0 gap-10 font-luxurious">
          <h2 className="text-xl xl:text-3xl">{homeLang.faqTitle[lang]}</h2>
          <FAQBtn {...{lang}} />
        </section>
        
        <section className="w-full h-fit flex flex-col lg:flex-row mt-15 border-t-3 border-royal bg-gradient-to-t from-[rgba(76,61,40,1)] to-[rgba(4,4,4,1)]">
          <Ubication />
          <div className="w-full lg:w-1/2 flex flex-col justify-center align-center ml-auto md:text-center lg:text-left text-md xl:text-2xl gap-5 p-3 xl:p-0 ">
            <h6>{homeLang.contact[lang]}</h6>
            <a className="underline ml-5 italic" href="mailto:dev.id.a.contact@gmail.com">-dev.id.a.contact@gmail.com</a>
            <h6>{homeLang.ubication[lang]}</h6>
            <h6 className="ml-5 italic">-5JHQ+RRW Campamento, {homeLang.place[lang]}.</h6>
            <h6>© David Aranzana, {homeLang.rights[lang]}.</h6>
          </div>
        </section>
        
      </div>
    </main>
  )
}

export default Home