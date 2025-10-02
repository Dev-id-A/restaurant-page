import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import ReviewsJson from "../Json/ReviewsJson";
import { useState } from "react";


function Reviews({lang}) {
  const [actualIndex, setActualIndex] = useState(0);

  return (
    <div className="text-royal w-full h-80 xl:h-100">
        <Swiper
        modules={[Autoplay]}
        loop
        centeredSlides
        breakpoints={{
          0: {slidesPerView: 1},
          1024: {slidesPerView: 3}
        }}
        spaceBetween={50}
        speed={1500}
        autoplay={{delay: 7000, disableOnInteraction: false}}
        className="w-full h-full"
        onSlideChange={(swiper)=> setActualIndex(swiper.realIndex)}
        grabCursor
        >
          {ReviewsJson.map((review, index, e)=>(
            <SwiperSlide key={index}>
              <div className="h-full flex items-center justify-center" >
                <div className={`flex flex-col justify-center border-3 border-royal text-center text-md xl:text-lg rounded-xl p-5 gap-5 
                animation-all duration-1000 
                  ${actualIndex === index ? "md:w-1/2 lg:w-full h-full":"size-40"}`}>
                  <h1 className={`animation-all duration-1000 ${actualIndex === index ? "opacity-100":"text-[4px] opacity-70"}`}>{review[lang]}</h1>
                  <h2 className={`animation-all duration-1000 ${actualIndex === index ? "opacity-100":"text-[4px] opacity-70"}`}>-{review.author}</h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  )
}

export default Reviews