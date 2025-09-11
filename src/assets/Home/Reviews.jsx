import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import ReviewsJson from "../Json/ReviewsJson";
import { useState } from "react";


function Reviews({lang}) {
  const [actualIndex, setActualIndex] = useState(0);

  return (
    <div className="text-royal w-full h-100">
        <Swiper
        modules={[Autoplay]}
        loop
        centeredSlides
        slidesPerView={3}
        spaceBetween={50}
        speed={1500}
        autoplay={{delay: 5000, disableOnInteraction: false}}
        className="w-full h-full"
        onSlideChange={(swiper)=> setActualIndex(swiper.realIndex)}
        >
          {ReviewsJson.map((review, index)=>(
            <SwiperSlide key={index}>
              <div className="h-full flex items-center justify-center">
                <div className={`flex flex-col justify-center border-3 text-center rounded-xl p-10 gap-5 animation-all duration-1000 
                  ${actualIndex === index ? "h-full":"size-50"}`}>
                  <h1 className={`${actualIndex === index ? "opacity-100":"opacity-0"}`}>{review[lang]}</h1>
                  <h2 className={`${actualIndex === index ? "opacity-100":"opacity-0"}`}>-{review.author}</h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  )
}

export default Reviews