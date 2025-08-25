function Presentation({lang}) {
const presentation = {
  aboutES: "Sobre nosotros...",
  aboutEN: "About us...",
  lemaES: "The Grand es más que un restaurante, es una experiencia",
  lemaEN: "The Grand is more than a restaurant, it's an experience",
  descriptionES: 'En The Grand creemos que cada visita debe sentirse como un banquete real. Nuestro equipo, altamente capacitado, atiende con excelencia y dedicación, cuidando cada detalle para que cada plato sea una obra de arte. Aquí, la hospitalidad se vive como un auténtico dogma: <em>"El cliente es el rey"</em>. Un lugar donde elegancia, sabor y servicio se combinan para crear recuerdos inolvidables.',
  descriptionEN: 'At The Grand, we believe every visit should feel like a royal banquet. Our highly trained team delivers excellence and dedication, carefully crafting every detail so that each dish becomes a true work of art. Here, hospitality is more than a value—it is a principle: <em>"The customer is king"</em>. A place where elegance, flavor, and service come together to create unforgettable memories.'
};


  return (
    <main className="text-center text-[rgb(212,175,55)]">
      <h1 className="text-4xl">{lang == "es" ? presentation.aboutES:presentation.aboutEN}</h1>
        <h2 className="text-2xl mt-3">{lang == "es" ? presentation.lemaES:presentation.lemaEN}</h2>
        <p className="text-lg mt-10 px-100">{lang == "es" ? presentation.descriptionES:presentation.descriptionEN}</p>
    </main>
  )
}

export default Presentation