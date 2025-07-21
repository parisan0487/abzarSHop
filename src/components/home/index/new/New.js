"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "../../../product/ProductCard";

export default function New({ products }) {
  return (
    <div className="relative py-10 w-full h-[40rem] rounded-xl mt-16 overflow-hidden">
      <div className="flex items-center mb-10 w-full">
        <div className="flex-grow h-0.5 bg-white opacity-30" />
        <h2 className="px-4 text-3xl font-bold text-center whitespace-nowrap">
          <span className="text-purple-700">جدید ترین</span>{" "}
          <span className="text-white">محصولات</span>
        </h2>
        <div className="flex-grow h-0.5 bg-white opacity-30" />
      </div>

      <div className=" bg-gray-900 p-16 px-3 rounded-2xl bg-[url(/assets/img/Vector-3.svg)]">
        <div className="flex flex-wrap justify-center items-center content-center">
          <div className="w-[90%] md:w-full max-w-7xl mx-auto ">
            <Swiper
              loop
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              slidesPerView={1}
              spaceBetween={16}
              breakpoints={{
                640: { slidesPerView: 1.5 },
                768: { slidesPerView: 2.5 },
                1024: { slidesPerView: 4 },
              }}
              modules={[Navigation, Autoplay]}
              className="overflow-visible"
              style={{ overflow: "visible" }}
            >
              {products.map((product) => (
                <SwiperSlide key={product._id}>
                  <ProductCard product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};


