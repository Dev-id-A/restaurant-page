import homeLang from "../Json/HomeJson"

function Presentation({lang}) {

  return (
    <main className="h-screen w-auto flex flex-col justify-center items-center py-5 font-yrsa text-center text-royal">

      <img src="/img/home/separador.png" alt="separator" className="h-auto w-[60vh] rotate-x-180"/>
      
        <h1 className="text-5xl">{homeLang.about[lang]}</h1>
        <p className="text-4xl mt-20 px-100">{homeLang.description[lang]}</p>

      <img src="/img/home/separador.png" alt="separator" className="h-auto w-[60vh]"/>

    </main>
  )
}

export default Presentation