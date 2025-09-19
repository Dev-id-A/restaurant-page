import FAQAccordion from "../src/assets/FAQ/FAQAccordion"
import faqPage from "../src/assets/Json/FAQPageJson"
import LinkBtn from "../src/assets/FAQ/LinkBtn"

function FAQ({lang}) {
  return (
    <main className="bg-black w-screen h-screen text-royal">

      <div className="flex flex-col justify-center items-center">

          <LinkBtn {...{lang}}/>

          <h1 className="text-6xl">{faqPage.title[lang]}</h1>
          
      </div>
        
      
      <FAQAccordion {...{lang}}/>
    </main>
  )
}

export default FAQ