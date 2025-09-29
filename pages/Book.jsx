import BookSection from "../src/assets/Book/BookSection"
import NumberBtn from "../src/assets/Book/NumberBtn"
import LinkBtn from "../src/assets/FAQ/LinkBtn"
import book from "../src/assets/Json/BookJson"
import { useState } from "react"

function Book({lang}) {
    const today = new Date();
    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 30);

    const inputToday = today.toISOString().split("T")[0];
    const inputMaxDate = maxDate.toISOString().split("T")[0];


    let [guest, setGuest] = useState(1);
    let [time, setTime] = useState(14);

  return (
    <main className="bg-black min-h-screen text-6xl flex flex-col items-center text-royal font-yrsa pb-10
    xl:pb-0 xl:overflow-hidden">

        <LinkBtn {...{lang}} />

        <h1 className="uppercase">{book.bookTitle[lang]}</h1>

      <div className="flex flex-col gap-15 mt-10 py-10 px-20 border-16 border-royal bg-[rgba(45,1,1,1)]">

        <div className="flex flex-col justify-center items-center gap-3">
          <h2 className="text-5xl text-center">{book.guest[lang]}</h2>
          <BookSection parameter={guest} {...{guest, setGuest}}></BookSection>
        </div>

        <div className="flex flex-col justify-center items-center gap-3">
          <h2 className="text-5xl text-center">{book.date[lang]}</h2>
          <input type="date" defaultValue={inputToday} min={inputToday} max={inputMaxDate} className="border-3 border-royal"/>
        </div>
        
        <div className="flex flex-col justify-center items-center gap-3">
          <h2 className="text-5xl text-center">{book.time[lang]}</h2>
          <BookSection parameter={time} {...{time, setTime}}></BookSection>
        </div>
        
        <button className="bg-black flex justify-center items-center border-1 border-royal hover:cursor-pointer px-10 py-5
        hover:scale-110 animation-all duration-500">
          <a href="mailto:dev.id.a.contact@gmail.com" target="_blank">{book.bookBnt[lang]}</a></button>

      </div>
      
    </main>

  )
}

export default Book