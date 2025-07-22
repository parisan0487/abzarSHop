"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3, // فاصله زمانی بین انیمیشن هر فرزند
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Baner() {
  return (
    <section className="text-white py-12 px-4 rtl">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 items-center max-sm:mt-[-80px] max-w-7xl mx-auto">
        {/* متن */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center lg:text-right flex flex-col gap-4 lg:mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="px-4 py-11 text-3xl font-bold text-center"
          >
            <span className="text-purple-700">انواع ساعت های ست</span>{" "}
            <span className="text-white">با بهترین قیمت و کیفیت !</span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="flex items-stretch gap-4 mb-6 max-w-2xl mx-auto md:mx-0"
          >
            <div className="w-1 bg-fuchsia-500 rounded-full" />
            <p className="leading-loose text-sm md:text-base text-gray-300">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
              طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
              لازم است...
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-start gap-4 mb-10"
          >
            <button className="flex-1 max-w-[200px] min-w-[120px] bg-purple-700 hover:bg-fuchsia-700 text-white px-4 py-2 rounded-lg flex items-center justify-between gap-2 text-sm">
              <span>مشاهده ساعت‌های ما</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </motion.div>
        </motion.div>

        {/* تصویر */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="h-[280px] sm:h-[320px] md:h-[360px] w-full"
        >
          <div
            className="translate-x-0 rounded-3xl overflow-hidden max-lg:mr-8 max-[520px]:mr-0! sm:w-[580px] h-[280px] sm:h-[340px] md:h-[300px]"
            style={{
              boxShadow: "0 20px 50px rgba(203, 17, 186, 0.3)",
            }}
          >
            <Image
              src="/assets/img/home-img.jpg"
              alt="watch"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 540px"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
