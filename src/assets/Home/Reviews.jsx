import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function Reviews() {
const reviews = [{
  review: "Lorem",
  author: "ipsum"
},{
  review: "sit",
  author: "Yo también"
},{
  review: "Dolorum minima",
  author: "consectetur adipisicing"
},{
  review: "quidem harum quisquam",
  author: "Vel oditn"
},{
  review: "Quo, aut.",
  author: "Vel oditn"
}]

  return (
    <div className="flex justify-center text-white w-full mt-20 h-30">
        <Swiper
        modules={[Autoplay]}
        loop
        centeredSlides
        slidesPerView={3}
        spaceBetween={200}
        speed={1500}
        autoplay={{delay: 5000, disableOnInteraction:false}}
        className="flex w-full h-full"
        >
          {reviews.map((review, index)=>(
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-center border-3 rounded-xl h-full">
                <h1>{review.review}</h1>
                <h2>{review.author}</h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  )
}

export default Reviews