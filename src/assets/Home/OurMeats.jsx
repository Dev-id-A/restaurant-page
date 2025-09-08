import homeLang from "../Json/HomeJson"

function OurMeats({lang}) {

  return (
    <section className="flex flex-row h-140 w-full px-3">
        <div className="flex flex-1 bg-black justify-center items-center px-50">
            <h1 className="font-yrsa text-center text-white text-3xl">{homeLang.message[lang]}</h1>
        </div>
        <img className="h-auto max-h-full w-fit object-contain" src="/img/home/vacas pastando 2.jpg" alt="Cows" />
    </section>
  )
}

export default OurMeats