function OurMeats({lang}) {
const message = {
  es: "Nuestras carnes provienen de ganaderías responsables, donde los animales crecen en libertad y sin hormonas ni químicos. Apostamos por una producción ética y sostenible que realza el sabor auténtico de cada corte.",
  en: "Our meats come from responsible farms, where animals are raised free-range and without hormones or chemicals. We are committed to ethical, sustainable practices that bring out the true flavor of every cut."
};


  return (
    <section className="flex flex-row h-90 w-full px-10 mb-20">
        <div className="flex flex-1 bg-black justify-center items-center px-50">
            <h1 className="font-yrsa text-center text-white text-3xl">{lang == "es" ? message.es:message.en}</h1>
        </div>
        <img className="h-auto max-h-full w-fit object-contain" src="public/img/vacas pastando 2.jpg" alt="Cows" />
    </section>
  )
}

export default OurMeats