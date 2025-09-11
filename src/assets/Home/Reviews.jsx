import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import ReviewsJson from "../Json/ReviewsJson";


function Reviews({lang}) {
  return (
    <div className="flex justify-center text-royal w-full mt-20 h-100">
        <Swiper
        modules={[Autoplay]}
        loop
        centeredSlides
        slidesPerView={3}
        spaceBetween={50}
        speed={1500}
        autoplay={{delay: 5000, disableOnInteraction:false}}
        className="flex w-full h-full"
        >
          {ReviewsJson.map((review, index)=>(
            <SwiperSlide key={index}>
              <div className="flex flex-col gap-5 text-center justify-center border-3 rounded-xl h-full p-10">
                <h1>{review[lang]}</h1>
                <h2>-{review.author}</h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  )
}

export default Reviews