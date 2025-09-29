import homeLang from "../Json/HomeJson"

function OurMeats({lang}) {

  return (
    <section className="flex flex-col xl:flex-row h-140 w-full px-3">

        <div className="relative flex flex-1 bg-black/30 justify-center items-center px-10 xl:px-40">
          <img src="/img/home/marco.png" alt="Frame" className="absolute left-0 bottom-0" />
            <h1 className="font-sancreek text-center text-royal text-xl xl:text-4xl uppercase tracking-widest">{homeLang.message[lang]}</h1>
          <img src="/img/home/marco.png" alt="Frame" className="absolute rotate-z-180 right-0 top-0" />
        </div>

        <img className="h-auto max-h-full w-fit object-contain" src="/img/home/vacas pastando 2.jpg" alt="Cows" />
    </section>
  )
}

export default OurMeats