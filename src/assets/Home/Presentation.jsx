import homeLang from "../Json/HomeJson"

function Presentation({lang}) {

  return (
    <main className="flex flex-col justify-center items-center py-20 font-yrsa text-center text-royal">
      <h1 className="text-5xl">{homeLang.about[lang]}</h1>
        <p className="text-4xl mt-20 px-100">{homeLang.description[lang]}</p>
    </main>
  )
}

export default Presentation