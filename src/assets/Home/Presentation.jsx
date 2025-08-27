function Presentation({lang}) {
const presentation = {
  aboutES: "Un viaje sensorial entre aromas, texturas y tradición.",
  aboutEN: "A sensory journey through aromas, textures, and tradition.",
  descriptionES: <>Sumérgete en el calor de nuestras parrillas y vive una cena inolvidable, porque The Grand no es solo un restaurante: <b>The Grand es una experiencia única.</b> Especializados en carnes selectas a la brasa, trabajamos con piezas de la más alta calidad y una técnica impecable que realza cada sabor. Nuestros clientes nos califican con <b>5 estrellas</b>, reconociendo el compromiso y la pasión que ponemos en cada plato. <br />¡Reserva tu mesa y descubre por qué cada visita a The Grand se convierte en un recuerdo que querrás repetir una y otra vez!</>,
  descriptionEN: <>Immerse yourself in the warmth of our grills and enjoy an unforgettable dinner, because The Grand is not just a restaurant: <b>The Grand is a one-of-a-kind experience.</b> Specializing in premium cuts cooked over open flames, we work with only the highest-quality meats and flawless techniques that elevate every flavor. Our guests rate us <b>5 stars</b>, recognizing the dedication and passion behind every dish. <br />Book your table and discover why every visit to The Grand becomes a memory you'll want to relive again and again!</>
};



  return (
    <main className="font-yrsa text-center text-royal mt-25 pb-20">
      <h1 className="text-5xl">{lang == "es" ? presentation.aboutES:presentation.aboutEN}</h1>
        <p className="text-3xl mt-10 px-75">{lang == "es" ? presentation.descriptionES:presentation.descriptionEN}</p>
    </main>
  )
}

export default Presentation