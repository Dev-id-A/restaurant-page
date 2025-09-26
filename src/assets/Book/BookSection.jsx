import NumberBtn from "./NumberBtn"
import { useState } from "react"

function BookSection({parameter, guest, setGuest, time, setTime}) {
  
  return (
    <section className="flex flex-row justify-center aling-center">
          <NumberBtn children={"-"} size={"size-20"} {...{guest, setGuest, time, setTime, parameter}}/>
          <div className="border-3 border-royal px-3 min-h-20 min-w-20 grid place-items-center">{parameter == time ? time + ":00":guest}</div>
          <NumberBtn children={"+"} size={"size-20"} {...{guest, setGuest, time, setTime, parameter}}/>
    </section>
  )
}

export default BookSection