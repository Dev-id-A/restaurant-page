import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import faq from "../Json/FAQJson"

function FAQAccordion({lang}) {
  return (
    <div className="w-full p-6 flex justify-center mt-10">
      <div className="w-1/2 border-1 border-royal rounded-lg">
        <Accordion   
          type="single"
          collapsible
          className="w-full"
        >
          {faq.map((accordion, i)=> (
            <AccordionItem className="px-2 py-1 border-b-1 border-royal" value={`item-${i}`} key={i}>
              <AccordionTrigger className="text-2xl font-sancreek">
                {accordion.ask[lang]}
              </AccordionTrigger>
              <AccordionContent className="px-5 text-xl font-luxurious text-white">{accordion.answer[lang]}</AccordionContent>
            </AccordionItem>
          ))}
    </Accordion>
      </div>
    </div>
  )
}

export default FAQAccordion