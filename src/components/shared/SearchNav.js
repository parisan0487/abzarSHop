"use client";

import { useDeferredValue, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Fetch from "@/utils/Fetch";

export default function SearchNav () {
  const [value, setValue] = useState("");
  const search = useDeferredValue(value);
  const [products, setProducts] = useState([]);
  const pathname = usePathname();

  useEffect(() => {
    if (!search.trim()) {
      setProducts([]);
      return;
    }

    const debounceTimeout = setTimeout(() => {
      Fetch.get(
        `/api/products/search?q=${encodeURIComponent(search)}`
      )
        .then((res) => setProducts(res.data))
        .catch((err) => {
          setProducts([]);
        });
    }, 400);

    return () => clearTimeout(debounceTimeout);
  }, [search]);

  useEffect(() => {
    setProducts([]);
    setValue("");
  }, [pathname]);

  return (
    <div className="relative w-80 h-[44px] max-lg:w-64 rounded-xl p-2 flex items-center gap-3 md:ml-5 bg-[#3E445C]">
      <div className="w-10 h-10 flex items-center justify-center">
        <Image
          src="https://mehdibagheridev.ir/modista/wp-content/uploads/2024/12/Minimalistic-Magnifer.svg"
          width={15}
          height={15}
          alt="آیکن جستجو"
          className="w-5 h-5 active:scale-95 cursor-pointer "
          loading="eager"
          priority
        />
      </div>
      <input
        dir="rtl"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="جستجو..."
        className="w-full h-full pr-1 bg-transparent text-base text-white placeholder:text-white outline-none"
      />

      {products.length > 0 && (
        <div className="absolute top-14 left-0 w-full rounded-xl shadow-lg p-3 flex flex-col gap-2 z-10 max-h-80 overflow-y-auto bg-[#3E445C]">
          {products.map((item) => (
            <Link
              href={`/products/${item.slug}`}
              key={item.id}
              className="flex items-center justify-between gap-4 p-2 hover:bg-gray-800 rounded-xl transition-colors duration-200 cursor-pointer"
            >
              <div className="flex-shrink-0 w-12 h-12 overflow-hidden rounded-xl bg-gray-200">
                {item.images?.[0] ? (
                  <Image
                    src={item.images[0]}
                    width={48}
                    height={48}
                    alt="product-image"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 bg-gray-200 rounded-xl" />
                )}
              </div>
              <span
                dir="rtl"
                className="text-sm md:text-base font-medium text-white"
              >
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};


