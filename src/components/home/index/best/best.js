"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import ProductCard from "../../../product/ProductCard";

export default function Best({ products }) {
  return (
    <div className="relative py-10 w-full h-[40rem] md:mt-40 mt-28 rounded-xl overflow-hidden ">
      <div className="flex flex-wrap justify-center items-center content-center">


        <div className="flex items-center mb-10 w-full">
          <div className="flex-grow h-0.5 bg-white opacity-30" />
          <h2 className="px-4 text-3xl font-bold text-center whitespace-nowrap">
            <span className="text-purple-700">محبوب ترین</span>{" "}
            <span className="text-white">محصولات</span>
          </h2>
          <div className="flex-grow h-0.5 bg-white opacity-30" />
        </div>

        <div className="w-[90%] md:w-full max-w-7xl mx-auto px-3">
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
  );
};


