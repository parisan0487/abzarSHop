"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Truck, ShieldCheck, RefreshCw, Wallet } from "lucide-react";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import toast from "react-hot-toast";
import Fetch from "@/utils/Fetch";
import { getFinalPrice, getDiscountPercent, formatPrice } from "@/utils/Price";
import useAuthStore from "@/store/authStore";

export default function FullProduct() {
  const [product, setProduct] = useState();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { isLoggedIn } = useAuthStore();

  const params = useParams();
  const slug = params.id;

  useEffect(() => {
    if (!slug) return;

    const fetchProduct = async () => {
      try {
        const response = await Fetch.get(`/api/products/${slug}`);
        if (response.status === 200) {
          setProduct(response.data);
        }
      } catch (error) { }
    };

    fetchProduct();
  }, [slug]);



  const addToCart = async () => {
    if (!isLoggedIn) {
      toast.error("ابتدا وارد حساب کاربری شوید");
      return;
    }

    try {
      await Fetch.post(
        "/api/cart/add",
        {
          productId: product._id,
          quantity: 1,
        },
        {
          token: true,
        }
      );
      toast.success("محصول با موفقیت به سبد خرید اضافه شد");
    } catch (err) {
      toast.error("خطا در افزودن محصول به سبد خرید");
    }
  };




  useEffect(() => {
    if (!product || !product.categories) return;

    const fetchRelated = async () => {
      try {
        const response = await Fetch.get(`/api/products/category/${product.categories[0]}`);
        if (response.status === 200) {
          // محصول فعلی رو حذف می‌کنیم از لیست مرتبط‌ها (تا خودش نمایش داده نشه)
          const filtered = response.data.filter((p) => p._id !== product._id);
          setRelatedProducts(filtered);
        }
      } catch (error) { }
    };

    fetchRelated();
  }, [product]);

  return (
    <div dir="rtl">
      <div className="flex flex-col md:flex-row gap-6 p-4 md:p-10 rounded-3xl mt-10">
        <div className="w-full lg:w-1/3 h-[25rem] rounded-2xl overflow-hidden flex flex-col p-2 ">
          {/* تصویر اصلی */}
          <div className="relative group overflow-hidden rounded-xl h-[75%] shadow-sm">
            {product?.images && (
              <Image
                src={product.images[selectedImageIndex]}
                alt={product.name}
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            )}
          </div>

          {product?.images?.length > 1 ? (
            <div className="flex gap-2 justify-center h-[13%] mt-6">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImageIndex(i)}
                  className={`w-16 h-16 rounded border-2 ${selectedImageIndex === i
                    ? "border-green-500"
                    : "border-transparent"
                    } overflow-hidden`}
                >
                  <Image
                    src={img}
                    alt={`تصویر ${i + 1}`}
                    width={64}
                    height={64}
                    className="w-full  object-cover"
                  />
                </button>
              ))}
            </div>
          ) : (
            <div className="" />
          )}
        </div>

        <div className="w-full lg:w-2/3 bg-[#231C35] p-6 rounded-2xl shadow-inner flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-1/2 flex flex-col gap-6 justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">
                {product?.name}
              </h1>

              <span className=" w-46 h-0.5 bg-gray-300 mt-2"></span>

              <div className="flex items-center gap-3 text-gray-500 text-sm mt-1">
                <span>محصولات جانبی</span>
              </div>

              <h3 className="text-white font-bold text-lg mt-4 mb-2">
                توضیحات محصول
              </h3>

              <ul className="list-disc pr-4 text-gray-300 space-y-1 text-sm leading-relaxed">
                {Array.isArray(product?.feature) ? (
                  product.feature.map((line, i) => <li key={i}>{line}</li>)
                ) : (
                  <li>{product?.feature}</li>
                )}
              </ul>
            </div>
          </div>

          <div className="w-full lg:w-1/2 bg-[#201d27] p-5 rounded-2xl shadow-inner border border-gray-300 flex flex-col justify-between">
            <div>
              <div className="text-center text-white font-bold text-sm mb-4">
                فروشنده
              </div>

              <ul className="space-y-3 text-sm text-white">
                <li className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-gray-500" />
                  ارسال توسط فروشگاه
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-gray-500" />
                  گارانتی اصالت و سلامت فیزیکی کالا
                </li>
                <li className="flex items-center gap-2">
                  <RefreshCw className="w-4 h-4 text-gray-500" />
                  ضمانت تعویض کالا
                </li>
                <li className="flex items-center gap-2">
                  <Wallet className="w-4 h-4 text-gray-500" />
                  هزینه حمل به عهده خریدار
                </li>
              </ul>

              {product?.price && (
                <>
                  <div className="flex justify-between items-center mt-6 mb-2">
                    <div className="min-h-[24px]">
                      {product.discount > 0 && (
                        <del className="text-gray-400 text-sm">
                          {formatPrice(product.price)} تومان
                        </del>
                      )}
                    </div>

                    {product.discount > 0 && (
                      <span className="text-white text-xs bg-gray-500 px-2 py-1 rounded-md">
                        {getDiscountPercent(product.price, product.discount)}٪ تخفیف
                      </span>
                    )}
                  </div>

                  <div className="text-xl font-bold text-[#007F5F] mb-4">
                    {formatPrice(getFinalPrice(product.price, product.discount))} تومان
                  </div>
                </>
              )}
            </div>

            <button
              onClick={addToCart}
              className="w-full bg-gray-500 hover:bg-[#009C73] text-white font-semibold py-2 rounded-xl transition"
            >
              افزودن به سبد خرید
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 p-6 bg-[#231C35] rounded-2xl shadow-md">
        <h2 className="text-xl font-bold text-white mb-4">
          توضیحات کامل محصول
        </h2>
        <p className="text-gray-200 leading-relaxed text-sm">
          {product?.description ||
            "توضیحات تکمیلی این محصول هنوز اضافه نشده است"}
        </p>
      </div>

      {relatedProducts.length > 0 && (
        <div className="mt-12 relative w-full md:h-[40rem] h-[40rem] rounded-xl overflow-hidden">
          <div className="flex items-center w-full mb-6">
            <h2 className="sm:text-xl font-bold text-white whitespace-nowrap flex-shrink-0">
              محصولات مرتبط
            </h2>
            
            <div className="flex items-center gap-1 mr-3">
              <span className="w-[2px] h-3 bg-purple-700"></span>
              <span className="w-[2px] h-4 bg-purple-700"></span>
              <span className="w-[2px] h-5 bg-purple-700"></span>
            </div>
            
            <div className="flex-grow border-t border-dashed border-purple-700 mt-1" />
          </div>

          <div className=" bg-gray-900 p-16 px-3 rounded-2xl bg-[url(/assets/img/Vector-3.svg)] bg-fixed">
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
                  {relatedProducts.map((product) => (
                    <SwiperSlide key={product.id}>
                      <ProductCard product={product} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
