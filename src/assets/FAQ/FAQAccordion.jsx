import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import faq from "../Json/FAQJson"
import { ChevronDownIcon } from "lucide-react"

function FAQAccordion({lang}) {
  return (
    <div className="w-full p-6 flex justify-center py-20">
      <div className="w-1/2">
        <Accordion   
          type="single"
          collapsible
          className="w-full"
        >
          {faq.map((accordion, i)=> (
            <AccordionItem className="py-1 border-b-3 border-royal" value={`item-${i}`} key={i}>
              <AccordionTrigger className="text-xl">
                {accordion.ask[lang]}
              </AccordionTrigger>
              <AccordionContent className="px-5 text-lg">{accordion.answer[lang]}</AccordionContent>
            </AccordionItem>
          ))}
    </Accordion>
      </div>
    </div>
  )
}

export default FAQAccordion