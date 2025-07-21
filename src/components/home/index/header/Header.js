"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Truck, BadgeCheck, DollarSign } from "lucide-react";

export default function Header() {
  return (
    <section className="text-white py-12 px-4 rtl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="text-center md:text-right">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-2xl md:text-3xl font-bold mb-4 leading-relaxed"
          >
            با کمک ما <span className="text-purple-700">استایلتو</span> جذاب‌تر کن!!
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-stretch gap-4 mb-6 max-w-2xl mx-auto md:mx-0"
          >
            <div className="w-1 bg-purple-700 rounded-full" />
            <p className="leading-loose text-sm md:text-base text-gray-300">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
              طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
              لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
              ابزارهای کاربردی می‌باشد.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <button className="bg-purple-700 hover:bg-fuchsia-700 text-white px-6 py-2 rounded-lg flex items-center gap-2">
              <span>مشاهده ساعت های ما</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 mt-16 w-[27rem] max-[482px]:w-[23rem] max-[422px]:w-[20rem] lg:mx-0 mx-auto"
          >
            <div className="grid grid-cols-3 gap-6 text-center text-white">
              <div className="flex flex-col items-center">
                <Truck className="w-8 h-8 mb-2 text-purple-700" />
                <p className="text-sm md:text-base">ارسال فوق‌سریع</p>
              </div>
              <div className="flex flex-col items-center">
                <BadgeCheck className="w-8 h-8 mb-2 text-purple-700" />
                <p className="text-sm md:text-base">کالاهای اورجینال</p>
              </div>
              <div className="flex flex-col items-center">
                <DollarSign className="w-8 h-8 mb-2 text-purple-700" />
                <p className="text-sm md:text-base">قیمت مناسب</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="relative h-[300px] md:h-[220px] max-lg:hidden">
          <div
            className="absolute top-[-80px] left-0 rounded-3xl overflow-hidden w-[300px] h-[300px] md:w-[540px] md:h-[340px]"
            style={{
              boxShadow: "0 20px 50px rgba(203, 17, 186, 0.3)",
            }}
          >
            <Image
              src="/assets/img/home-img.jpg"
              alt="watch"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 300px, 1100px"
            />
          </div>
          <div
            className="bottom-[-120px] left-7 w-[200px] h-[200px] md:w-[320px] md:h-[200px] rounded-3xl overflow-hidden relative"
            style={{
              boxShadow: "0 20px 50px rgba(203, 17, 186, 0.3)",
            }}
          >
            <Image
              src="/assets/img/home-img4.jpg"
              alt="watch 2"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 200px, 250px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
