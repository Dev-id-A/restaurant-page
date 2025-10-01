import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import faq from "../Json/FAQJson"

function FAQAccordion({lang}) {
  return (
    <div className="w-full flex justify-center mt-10 text-center p-1 py-5
    md:p-6">
      <div className="w-full border-1 border-royal rounded-lg
      md:w-2/3
      xl:w-1/2">
        <Accordion   
          type="single"
          collapsible
          className="w-full"
        >
          {faq.map((accordion, i)=> (
            <AccordionItem className="px-2 py-1 border-b-1 border-royal" value={`item-${i}`} key={i}>
              <AccordionTrigger className="text-xl lg:text-2xl font-sancreek">
                {accordion.ask[lang]}
              </AccordionTrigger>
              <AccordionContent className="px-5 text-lg lg:text-xl font-luxirious text-white">{accordion.answer[lang]}</AccordionContent>
            </AccordionItem>
          ))}
    </Accordion>
      </div>
    </div>
  )
}

export default FAQAccordion