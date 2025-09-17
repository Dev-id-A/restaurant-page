import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion"
import faq from "../Json/FAQJson"
import { ChevronDown, ChevronDownIcon } from "lucide-react"

function FAQAccordion({lang}) {
  return (
    <div className="w-full p-6 flex justify-center">
      <div className="w-full max-w-lg">
        <Accordion
                  
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          {faq.map((accordion, i)=> (
            <AccordionItem className="border-3" value={`item-${i}`} key={i}>
              <AccordionTrigger className="flex flex-row justify-between items-center w-full border-b-3">{accordion.ask[lang]}<ChevronDownIcon className="flex"/></AccordionTrigger>
              <AccordionContent className="px-2">{accordion.answer[lang]}</AccordionContent>
            </AccordionItem>
          ))}
    </Accordion>
      </div>
    </div>
  )
}

export default FAQAccordion