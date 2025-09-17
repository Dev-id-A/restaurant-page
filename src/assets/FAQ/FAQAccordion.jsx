import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion"
import faq from "../Json/FAQJson"
import { ChevronDownIcon } from "lucide-react"

function FAQAccordion({lang}) {
  return (
    <div className="w-full p-6 flex justify-center text-2xl">
      <div className="w-1/2">
        <Accordion
                  
          type="single"
          
          className="w-full"
          defaultValue="item-1"
        >
          {faq.map((accordion, i)=> (
            <AccordionItem className="border-3" value={`item-${i}`} key={i}>
              <AccordionTrigger className="flex flex-row justify-between items-center w-full hover:cursor-pointer py-3">
                {accordion.ask[lang]}
                <ChevronDownIcon/>
              </AccordionTrigger>
              <AccordionContent className="px-5">{accordion.answer[lang]}</AccordionContent>
            </AccordionItem>
          ))}
    </Accordion>
      </div>
    </div>
  )
}

export default FAQAccordion