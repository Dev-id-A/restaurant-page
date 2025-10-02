import homeLang from "../Json/HomeJson"

function OurMeats({lang}) {

  return (
    <section className="flex flex-col items-center xl:flex-row h-full xl:h-140 w-full px-3">

        <div className="flex flex-col flex-1 bg-black/30 justify-center items-center p-10 xl:px-40 gap-5">
          <img src="/img/home/meats-separador.png" alt="Frame" className="" />
            <h1 className="font-sancreek text-center text-royal text-md md:text-lg xl:text-2xl uppercase tracking-widest h-full">{homeLang.message[lang]}</h1>
          <img src="/img/home/meats-separador.png" alt="Frame" className=" rotate-z-180 " />
        </div>

        <img className="h-auto max-h-full w-fit object-contain" src="/img/home/vacas pastando 2.jpg" alt="Cows" />
    </section>
  )
}

export default OurMeats