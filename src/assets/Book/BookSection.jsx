import NumberBtn from "./NumberBtn"
import { useState } from "react"

function BookSection() {
  let [guest, setGuest] = useState(1);
  let [time, setTime] = useState(14);
  
  return (
    <section className="flex flex-row justify-center aling-center">
          <NumberBtn children={"-"} size={"size-20"} {...{guest, setGuest}}/>
          <div className="border-3 border-royal px-3 min-h-20 min-w-20 grid place-items-center">{guest}</div>
          <NumberBtn children={"+"} size={"size-20"} {...{guest, setGuest}}/>
    </section>
  )
}

export default BookSection