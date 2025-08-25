import Navbar from "../src/assets/Home/Navbar"
import Presentation from "../src/assets/Home/Presentation"

function Home({lang, setLang}) {
  return (
<main className="h-screen bg-center bg-cover bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/chuleton-brasa.jpg')]">
      <Navbar {...{setLang}} />
      <div className="flex flex-col items-center justify-center">
        <img className="" src="/the-grand.svg" alt="The grand logo" />
        <Presentation {...{lang}} />
      </div>
    </main>
  )
}

export default Home