import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getFinalPrice, getDiscountPercent, formatPrice } from "@/utils/Price";

export default function ProductCard({ product }) {
  function toPersianDigits(number) {
    return number.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
  }

  return (
    <div>
      <div
        className="bg-[#231C35] rounded-2xl p-4 shadow-lg relative text-right 
        transition-transform duration-300 ease-in-out
        hover:-translate-y-2 hover:z-10
        group text-white"
      >
        {/* تصویر و درصد تخفیف */}
        <div className="relative w-full h-64 mb-4 rounded-md overflow-hidden ">
          <Link href={`/products/${product.slug}`}>
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-contain p-6"
            />
            <div className="absolute top-2 left-2">
              {product.discount > 0 ? (
                <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-md">
                  {getDiscountPercent(product.price, product.discount)}٪
                </span>
              ) : (
                <span className="invisible text-xs px-2 py-1 rounded-full">
                  ۰۰٪
                </span>
              )}
            </div>
          </Link>
        </div>

        {/* عنوان */}
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-semibold text-base text-purple-700 mb-3 leading-6">
            {product.name}
          </h3>
        </Link>

        {/* قیمت قبلی */}
        {product.discount > 0 ? (
          <p className="line-through text-gray-400 text-sm mb-1">
            {toPersianDigits(formatPrice(product.price))} تومان
          </p>
        ) : (
          <p className="invisible text-sm mb-1">_</p>
        )}

        {/* دکمه و قیمت نهایی */}
        <div className="flex justify-between items-center mt-2">
          <button
            className=" text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1 transition"
          >
            <ShoppingBag size={18} color="#CB11BA" />
            خرید
          </button>

          <p className="font-bold text-white text-base">
            {toPersianDigits(
              formatPrice(
                product.discount > 0
                  ? getFinalPrice(product.price, product.discount)
                  : product.price
              )
            )}{" "}
            تومان
          </p>
        </div>
      </div>
    </div>
  );
}
