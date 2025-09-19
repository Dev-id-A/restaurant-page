import BookSection from "../src/assets/Book/BookSection"
import NumberBtn from "../src/assets/Book/NumberBtn"
import LinkBtn from "../src/assets/FAQ/LinkBtn"

function Book({lang}) {
  return (
    <main className="bg-black h-screen text-6xl flex flex-col items-center text-royal">

        
          <LinkBtn {...{lang}} />
        

        <h1>Book</h1>
      

        <div className="flex flex-col justify-center items-center gap-3 mt-30">
          <h2 className="text-5xl text-center">Personas</h2>
          <BookSection></BookSection>
        </div>
        
        <div className="flex flex-col justify-center items-center gap-3">
          <h2 className="text-5xl text-center">Hora</h2>
          <BookSection></BookSection>
        </div>
        

        <NumberBtn size={"px-10 py-5"} children={"Reservar"}/>
      

    </main>

  )
}

export default Book