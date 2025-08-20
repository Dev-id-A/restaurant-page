import Navbar from "../src/assets/Navbar"
import Presentation from "../src/assets/Presentation"

function Home() {
  return (
    <main>
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <img className="size-100" src="/the-grand.svg" alt="The grand logo" />
        <Presentation />
      </div>
    </main>
  )
}

export default Home