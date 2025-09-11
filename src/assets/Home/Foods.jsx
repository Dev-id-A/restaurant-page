import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function Foods() {
const carouselImg = [
  {
    src: "img/carousel/cava.jpg",
    alt: "Cava"
  },{
    src: "img/carousel/cookedMeat.jpg" ,
    alt: "Cooked meat"
  },{
    src: "img/carousel/jamon.jpg" ,
    alt: "Jamon"
  },{
    src: "img/carousel/meat.jpg" ,
    alt: "Meat"
  },{
    src: "img/carousel/meatKnife.jpg" ,
    alt: "Meat and knife"
  },{
    src: "img/carousel/reataurantImg.jpg" ,
    alt: "Restaurant image"
  },{
    src: "img/carousel/rib.jpg" ,
    alt: "Rib"
  },{
    src: "img/carousel/slicedMeat.jpg" ,
    alt: "Sliced meat"
  },{
    src: "img/carousel/variety.jpg" ,
    alt: "Variety of products"
  },{
    src: "img/carousel/wagyu.jpg" ,
    alt: "Wagyu"
  },{
    src: "img/carousel/wagyuuu.jpg" ,
    alt: "Wagyu"
  },{
    src: "img/carousel/caramel.jpg" ,
    alt: "Dessert"
  }
]

  return (
    <div className="w-full px-3">
        <Swiper
        modules={[Autoplay]}
        slidesPerView={4}
        slidesPerGroup={4}
        loop
        speed={1500}
        spaceBetween={20}
        autoplay={{delay: 5000, disableOnInteraction: false}}
        >

          {carouselImg.map((slide, index) =>(
            <SwiperSlide key={index}>
              <img 
              src={slide.src}
              alt={slide.alt}
              className="w-full h-100 object-cover"/>
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  )
}

export default Foods