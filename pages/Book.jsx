import BookSection from "../src/assets/Book/BookSection"
import NumberBtn from "../src/assets/Book/NumberBtn"
import book from "../src/assets/Json/BookJson"
import Xbtn from "@/assets/Book/Xbtn"
import { useState } from "react"

function Book({lang, display, setDisplay}) {
    const today = new Date();
    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 30);

    const inputToday = today.toISOString().split("T")[0];
    const inputMaxDate = maxDate.toISOString().split("T")[0];


    let [guest, setGuest] = useState(1);
    let [time, setTime] = useState(14);

  return (
    <main className="text-2xl xl:text-6xl flex flex-col items-center justify-center pt-10 text-royal font-yrsa pb-10">

      
        <h1 className="uppercase">{book.bookTitle[lang]}</h1>
        
      <div className="flex flex-col gap-5 xl:gap-15 mt-5 xl:mt-10 p-5 xl:py-10 md:px-20 border-10 border-royal bg-[rgba(45,1,1,1)] text-2xl xl:text-5xl text-center">
        
        <div className="flex flex-col justify-center items-center">
          <Xbtn {...{setDisplay}}/>
          <h2>{book.guest[lang]}</h2>
          <BookSection parameter={guest} {...{guest, setGuest}}></BookSection>
        </div>

        <div className="flex flex-col justify-center items-center">
          <h2>{book.date[lang]}</h2>
          <input type="date" defaultValue={inputToday} min={inputToday} max={inputMaxDate} className="border-3 border-royal"/>
        </div>
        
        <div className="flex flex-col justify-center items-center">
          <h2>{book.time[lang]}</h2>
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