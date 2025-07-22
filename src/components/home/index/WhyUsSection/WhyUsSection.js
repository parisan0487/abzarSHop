"use client"
import Image from "next/image"
import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"

const stats = [
    { label: "رضایت مشتری", value: 85 },
    { label: "سرعت ارسال", value: 95 },
    { label: "قیمت منصفانه", value: 75 },
    { label: "مشاوره و فروش", value: 95 },
]

export default function WhyUsSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true }) // فقط یک بار انیمیشن اجرا شود
    const [filled, setFilled] = useState(false)

    useEffect(() => {
        if (isInView) {
            setFilled(true)
        }
    }, [isInView])

    return (
        <section
            ref={ref}
            className="text-white py-12 px-6 md:px-16 sm:mt-30 mt-20 rounded-[1.5rem] flex flex-col md:flex-row items-center gap-8"
        >
            {/* تصویر */}
            <motion.div
                className="md:w-1/2 w-full"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <div className="rounded-[1rem] overflow-hidden">
                    <Image
                        src="/assets/img/home-img.jpg"
                        alt="watch"
                        width={600}
                        height={400}
                        className="object-cover w-full h-auto"
                    />
                </div>
            </motion.div>

            {/* متن و نمودار */}
            <motion.div
                className="md:w-1/2 w-full text-right"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <h2 className="text-[23px] sm:text-2xl md:text-3xl font-bold mb-4">
                    چرا باید ما رو برای خرید <span className="text-purple-700">انتخاب</span> کنید ؟
                </h2>
                <p className="text-sm text-gray-300 leading-7 mb-6">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.
                    چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
                    مورد نیاز، و کاربردهای متنوع است.
                </p>

                <div className="space-y-4">
                    {stats.map((stat, index) => (
                        <div key={stat.label}>
                            <div className="flex justify-between mb-1 text-sm font-medium text-gray-200">
                                <span>{stat.label}:</span>
                                <span>{stat.value}%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                                <motion.div
                                    className="bg-purple-700 h-2 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={filled ? { width: `${stat.value}%` } : { width: 0 }}
                                    transition={{ duration: 1, delay: 0.2 + index * 0.2 }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
