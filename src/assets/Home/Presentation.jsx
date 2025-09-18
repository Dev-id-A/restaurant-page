import homeLang from "../Json/HomeJson"

function Presentation({lang}) {

  return (
    <main className="flex flex-col gap-10 h-screen w-auto flex flex-col justify-center items-center py-5 font-yrsa text-center text-royal">

      <img src="/img/home/separador.png" alt="separator" className="h-auto w-[60vh] rotate-x-180"/>
      
        <h1 className="text-6xl font-teko">{homeLang.about[lang]}</h1>
        <p className="text-4xl italic mt-3 px-70 font-luxurious">{homeLang.description[lang]}</p>

      <img src="/img/home/separador.png" alt="separator" className="h-auto w-[60vh]"/>

    </main>
  )
}

export default Presentation