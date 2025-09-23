import FAQAccordion from "../src/assets/FAQ/FAQAccordion"
import faqPage from "../src/assets/Json/FAQPageJson"
import LinkBtn from "../src/assets/FAQ/LinkBtn"

function FAQ({lang}) {
  return (
    <main className="bg-black w-screen h-screen text-royal overflow-x-hidden">

      <div className="flex flex-col justify-center items-center">

          <LinkBtn {...{lang}}/>

          <h1 className="mt-10 xl:mt-0 text-2xl md:text-3xl lg:text-6xl font-sancreek uppercase">{faqPage.title[lang]}</h1>
          
      </div>
        
      
      <FAQAccordion {...{lang}}/>
    </main>
  )
}

export default FAQ