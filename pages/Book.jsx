import BookSection from "../src/assets/Book/BookSection"
import NumberBtn from "../src/assets/Book/NumberBtn"
import LinkBtn from "../src/assets/FAQ/LinkBtn"

function Book({lang}) {
  return (
    <main className="relative bg-black h-screen flex flex-col justify-center items-center gap-40 text-6xl text-royal">

      <div className="relative w-full h-30 flex flex-row justify-center items-center">

        <LinkBtn {...{lang}}/>

        <h1 className="absolute top-10">Book</h1>

      </div>
      

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