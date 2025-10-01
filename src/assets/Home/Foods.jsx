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
    <div className="w-full px-3 pt-25">
        <Swiper
        modules={[Autoplay]}
        breakpoints={{
          0: {slidesPerView: 1, slidesPerGroup: 1},
          640: {slidesPerView: 2, slidesPerGroup: 2},
          1024: {slidesPerView: 4, slidesPerGroup: 1}
        }}
        loop
        speed={1500}
        spaceBetween={20}
        autoplay={{delay: 7000, disableOnInteraction: false}}
        >

          {carouselImg.map((slide, index) =>(
            <SwiperSlide key={index}>
              <img 
              src={slide.src}
              alt={slide.alt}
              className="w-full h-80 xl:h-100 object-cover border-y-3 border-royal"/>
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  )
}

export default Foods