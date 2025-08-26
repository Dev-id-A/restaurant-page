import Navbar from "../src/assets/Navbar/Navbar"
import Presentation from "../src/assets/Home/Presentation"
import OurMeats from "../src/assets/Home/OurMeats"

function Home({lang, toggleFade}) {
  return (
<main className="h-screen bg-center bg-cover bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/img/chuleton-brasa.jpg')]">
      <Navbar {...{toggleFade}} />
      <div className="flex flex-col items-center justify-center">
        <img className="" src="/svg/the-grand.svg" alt="The grand logo" />
        <Presentation {...{lang}} />
        <OurMeats {...{lang}} />
      </div>
    </main>
  )
}

export default Home