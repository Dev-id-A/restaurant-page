import BookSection from "../src/assets/Book/BookSection"
import NumberBtn from "../src/assets/Book/NumberBtn"
import LinkBtn from "../src/assets/FAQ/LinkBtn"
import book from "../src/assets/Json/BookJson"

function Book({lang}) {


  return (
    <main className="bg-black min-h-screen text-6xl flex flex-col items-center text-royal pb-10
    xl:pb-0 xl:overflow-hidden">

        <LinkBtn {...{lang}} />

        <h1>{book.bookTitle[lang]}</h1>

      <div className="flex flex-col gap-20 mt-10 py-10 px-20 border-3 border-royal bg-[rgb(56,56,56)]">

        <div className="flex flex-col justify-center items-center gap-3">
          <h2 className="text-5xl text-center">{book.guest[lang]}</h2>
          <BookSection></BookSection>
        </div>

        <div className="flex flex-col justify-center items-center gap-3">
          <h2 className="text-5xl text-center">{book.date[lang]}</h2>
          <input type="date" defaultValue={new Date().toISOString().split("T")[0]} className="border-3 border-royal"/>
        </div>
        
        <div className="flex flex-col justify-center items-center gap-3">
          <h2 className="text-5xl text-center">{book.time[lang]}</h2>
          <BookSection></BookSection>
        </div>
        

        <NumberBtn size={"px-10 py-5"} children={`${book.bookBnt[lang]}`}/>

      </div>
      
    </main>

  )
}

export default Book