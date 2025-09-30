import NumberBtn from "./NumberBtn"
import { useState } from "react"

function BookSection({parameter, guest, setGuest, time, setTime}) {
  
  return (
    <section className="flex flex-row justify-center aling-center">
          <NumberBtn children={"-"} {...{guest, setGuest, time, setTime, parameter}}/>
          <div className="bg-[rgba(80,2,2,1)] border-1 border-royal px-3 min-w-18 min-h-18 xl:min-h-20 xl:min-w-20 grid place-items-center">{parameter == time ? time + ":00":guest}</div>
          <NumberBtn children={"+"} {...{guest, setGuest, time, setTime, parameter}}/>
    </section>
  )
}

export default BookSection