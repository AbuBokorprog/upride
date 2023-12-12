import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Rating } from "@smastrom/react-rating";
import { ImQuotesLeft } from "react-icons/im";
import "@smastrom/react-rating/style.css";
import { FreeMode, Pagination } from "swiper/modules";

interface ReviewsInfo {
  id: string;
  user_name: string;
  description: string;
  user_profile: string;
  rating: number;
}

const ClientSays: React.FC = () => {
  const [reviews, setReviews] = useState<ReviewsInfo[]>();

  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <div className="my-10 lg:my-20 mx-2 md:mx-10">
      <div className="my-10 lg:my-20">
        <h2>What our clients say</h2>
        <div className="mt-4 md:flex gap-4 items-center md:justify-between">
          <p>Quality training and easy to get driving license</p>
        </div>
      </div>

      <div className="my-4">
        <>
          <Swiper
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },

              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              800: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            <div>
              {reviews?.map((r: ReviewsInfo) => (
                <SwiperSlide
                  key={r.id}
                  className="bg-white mb-14 p-6 shadow-xl rounded-lg dark:bg-secondary-800 dark:border-secondary-800"
                >
                  <div className="">
                    <ImQuotesLeft className="text-primary w-14 h-14" />
                    <h6 className="text-accent">{r.description}</h6>
                  </div>
                  <div className="flex w-56 justify-start my-4 p-2 gap-4 items-center rounded-3xl shadow-xl">
                    <div>
                      <img
                        src={r.user_profile}
                        alt="image"
                        className="rounded-3xl"
                      />
                    </div>
                    <div>
                      <h6>{r?.user_name}</h6>
                      <Rating style={{ maxWidth: 120 }} value={3} readOnly />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </>
      </div>
    </div>
  );
};

export default ClientSays;
