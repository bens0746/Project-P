import React, { useRef } from "react";
import useAxios from "axios-hooks";
import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css/autoplay";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default function SlidsPages() {
  const [{ data: slidesData, loading, error }] = useAxios({
    url: "/api/slides",
  });
  const [{ data: homeFrontData }] = useAxios({
    url: "/api/homeFront",
  });

  return (
    <>
      <div className="">
        {homeFrontData?.map((homeFront, index) => (
          <div key={index}>
            <div className="py-8 px-[6%]">
              <h4 className=" font-fontEn3 text-primary my-3 leading-tight tracking-[10px] text-center text-[16px] lg:text-[20px] uppercase">
                {" "}
                cannabis shop
              </h4>
              <div className="border1">
                <h1 className=" font-fontEn text-primary pt-8 mx-3 text-center text-[55px] lg:text-[120px] uppercase">
                  {homeFront.name}
                </h1>
                <Swiper
                  className=""
                  modules={[Autoplay]}
                  autoplay={{ delay: 3000 }}
                >
                  {slidesData?.map((slides, index) => (
                    <SwiperSlide className="overflow-hidden" key={index}>
                      <img className="" src={slides.image} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
