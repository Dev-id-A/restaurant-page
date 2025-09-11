import homeLang from "../Json/HomeJson"

function OurMeats({lang}) {

  return (
    <section className="flex flex-row h-140 w-full px-3">

        <div className="relative flex flex-1 bg-black/15 justify-center items-center px-50">
          <img src="/img/home/marco.png" alt="Frame" className="absolute left-0 bottom-0" />
            <h1 className="font-yrsa text-center text-royal text-3xl">{homeLang.message[lang]}</h1>
          <img src="/img/home/marco.png" alt="Frame" className="absolute rotate-z-180 right-0 top-0" />
        </div>

        <img className="h-auto max-h-full w-fit object-contain" src="/img/home/vacas pastando 2.jpg" alt="Cows" />
    </section>
  )
}

export default OurMeats