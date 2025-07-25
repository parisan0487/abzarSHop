"use client";
import { useState, useEffect } from "react";
import React from "react";
import Loading from "../shared/loading/Loading";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { getFinalPrice, getDiscountPercent, formatPrice } from "@/utils/Price";
import ProductCard from "../product/ProductCard";


export default function ProductShop({ data }) {
  const [products, setProducts] = useState(data);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [activeImages, setActiveImages] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [minPriceInput, setMinPriceInput] = useState("");
  const [maxPriceInput, setMaxPriceInput] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const isPriceFiltered = minPrice || maxPrice;


  const availableColors = ["سبز", "سفید", "مشکی", "ابی", "قرمز", "زرد"];
  const availableSizes = ["md", "lg", "xl", "2xl"];

  useEffect(() => {
    setLoading(false);
  }, []);

  const toggleSelection = (value, list, setList) => {
    if (list.includes(value)) {
      setList(list.filter((item) => item !== value));
    } else {
      setList([...list, value]);
    }
    setCurrentPage(1);
  };

  const normalizeColor = (color) => color?.replace(/\s/g, "");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = searchQuery
      ? product.name.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    const matchesColor =
      selectedColors.length > 0
        ? product.variants?.some((variant) =>
          selectedColors.includes(normalizeColor(variant.color))
        )
        : true;

    const matchesSize =
      selectedSizes.length > 0
        ? product.variants?.some((variant) =>
          selectedSizes.includes(variant.size)
        )
        : true;

    const matchesPrice =
      minPrice || maxPrice
        ? (() => {
          const price = product.price || 0;
          const meetsMin = minPrice ? price >= parseInt(minPrice) : true;
          const meetsMax = maxPrice ? price <= parseInt(maxPrice) : true;
          return meetsMin && meetsMax;
        })()
        : true;

    return matchesSearch && matchesColor && matchesSize && matchesPrice;
  });



  const productsPerPage = 9;
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );


  const enhancedProducts = paginatedProducts.map((product) => {
    const finalPrice = getFinalPrice(product.price, product.discount);
    const discountPercent = getDiscountPercent(product.price, product.discount);

    return {
      ...product,
      finalPrice,
      discountPercent,
    };
  });


  if (loading) return <Loading className="-top-30" />;
  if (error)
    return <div className="text-center text-red-500 py-10">{error}</div>;

  const colorMap = {
    قرمز: "#f87171",
    سبز: "#4ade80",
    مشکی: "#000000",
    سفید: "#ffffff",
    ابی: "#60a5fa",
    زرد: "#fde047",
  };

  if (loading) return <div className="text-center py-10">در حال بارگذاری</div>;
  if (error)
    return <div className="text-center text-red-500 py-10">{error}</div>;

  return (
    <>
      <Breadcrumb
        items={[
          { text: "صفحه اصلی", href: "/" },
          { text: "فروشگاه", href: "/shop" },
        ]}
      />
      <div className="flex flex-col md:flex-row px-4 py-6 gap-6">
        <div className="block md:hidden px-2 mb-4">
          <input
            type="text"
            placeholder="...جستجو محصولات"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full bg-[#20223a] px-4 py-3 mb-2 rounded-lg text-right outline-0 text-white placeholder-white"
          />
          <button
            className="bg-[#20223a] text-white px-4 py-2 rounded-md w-36"
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
          >
            {isMobileFilterOpen ? "بستن فیلترها" : "نمایش فیلترها"}
          </button>

          {isMobileFilterOpen && (
            <div className="bg-[#20223a] mt-4 p-4 rounded-lg space-y-4">
              <div>
                <p className="text-center text-white font-bold border-b pb-1 mb-2">
                  فیلتر بر اساس رنگ
                </p>
                <div className="flex flex-wrap gap-2 justify-end">
                  {availableColors.map((color) => {
                    const isSelected = selectedColors.includes(color);
                    return (
                      <button
                        key={color}
                        onClick={() =>
                          toggleSelection(
                            color,
                            selectedColors,
                            setSelectedColors
                          )
                        }
                        className={`w-8 h-8 rounded-full border-2 ${isSelected ? "border-purple-700" : "border-gray-400"
                          }`}
                        style={{ backgroundColor: colorMap[color] }}
                      />
                    );
                  })}
                </div>
              </div>

              <div className="bg-[#20223a] p-5 pb-4 mt-5 rounded-2xl">
                <h3 className="text-lg font-bold text-center mb-4 border-b text-white">
                  فیلتر بر اساس قیمت
                </h3>
                <div className="flex flex-col gap-2">
                  <input
                    type="number"
                    value={minPriceInput}
                    onChange={(e) => setMinPriceInput(e.target.value)}
                    placeholder="حداقل قیمت(از)"
                    className="w-full bg-gray-100 px-4 py-2 rounded-lg text-right outline-0"
                  />
                  <input
                    type="number"
                    value={maxPriceInput}
                    onChange={(e) => setMaxPriceInput(e.target.value)}
                    placeholder="حداکثر قیمت(تا)"
                    className="w-full bg-gray-100 px-4 py-2 rounded-lg text-right outline-0"
                  />

                  <button
                    onClick={() => {
                      if (isPriceFiltered) {
                        // بازنشانی فیلتر قیمت
                        setMinPrice("");
                        setMaxPrice("");
                        setMinPriceInput("");
                        setMaxPriceInput("");
                      } else {
                        // اعمال فیلتر قیمت
                        setMinPrice(minPriceInput);
                        setMaxPrice(maxPriceInput);
                      }
                      setCurrentPage(1);
                    }}
                    className={`mt-3 ${isPriceFiltered
                      ? "bg-gray-500 hover:bg-gray-600"
                      : "bg-purple-700 hover:bg-purple-800"
                      } text-white py-2 px-4 rounded-lg transition`}
                  >
                    {isPriceFiltered ? "بازنشانی فیلتر قیمت" : "اعمال فیلتر قیمت"}
                  </button>
                </div>
              </div>

              <div>
                <p className="text-center text-white font-bold border-b pb-1 mb-2">
                  فیلتر بر اساس سایز
                </p>
                <div className="flex flex-wrap gap-2 justify-end">
                  {availableSizes.map((size) => (
                    <button
                      key={size}
                      onClick={() =>
                        toggleSelection(size, selectedSizes, setSelectedSizes)
                      }
                      className={`px-3 py-1 rounded-full text-sm border transition-colors duration-200
                    ${selectedSizes.includes(size)
                          ? "bg-gray-500 text-white border-[#44e4d1] hover:bg-gray-600"
                          : "bg-white text-black border-gray-300 hover:bg-gray-100"}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="w-full md:w-4/5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" dir="rtl">
            {enhancedProducts.map((product) => {
              const imagesArray = Array.isArray(product.images)
                ? product.images
                : [product.images];
              const mainImage = activeImages[product.id] || imagesArray[0];

              return (
                <div
                  key={product.id}>
                  <ProductCard product={product} />
                </div>
              );
            })}
          </div>

          <div className="flex justify-center mt-6 gap-2 flex-wrap">
            {Array.from({ length: totalPages }).map((_, index) => {
              const page = index + 1;
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-1 rounded-md text-sm border transition-all ${currentPage === page
                    ? "bg-black text-white border-gray-300"
                    : "text-gray-700 border-gray-300 hover:bg-gray-100"
                    }`}
                >
                  {page}
                </button>
              );
            })}
          </div>
        </div>

        <div className="w-full md:w-3/12 hidden md:block">
          <div className="space-y-2 pb-4">
            <input
              type="text"
              placeholder="...جستجو محصولات"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full bg-[#20223a]  px-4 p-4 rounded-lg text-right text-white placeholder-white outline-0"
            />
          </div>

          <div className="bg-[#20223a]  p-5 pb-4 rounded-2xl">
            <p className="text-lg font-bold text-center mb-4 text-white border-b">
              فیلتر بر اساس رنگ
            </p>
            <div className="flex flex-wrap gap-3 justify-end">
              {availableColors.map((color) => {
                const isSelected = selectedColors.includes(color);
                return (
                  <button
                    key={color}
                    onClick={() =>
                      toggleSelection(color, selectedColors, setSelectedColors)
                    }
                    className={`w-8 h-8 rounded-full border-2 ${isSelected ? "border-purple-900 " : "border-gray-400"
                      }`}
                    style={{ backgroundColor: colorMap[color] }}
                  />
                );
              })}
            </div>
          </div>

          <div className="bg-[#20223a] p-5 pb-4 mt-5 rounded-2xl">
            <h3 className="text-lg font-bold text-center mb-4 border-b text-white">
              فیلتر بر اساس قیمت
            </h3>
            <div className="flex flex-col gap-2">
              <input
                type="number"
                value={minPriceInput}
                onChange={(e) => setMinPriceInput(e.target.value)}
                placeholder="حداقل قیمت(از)"
                className="w-full bg-gray-100 px-4 py-2 rounded-lg text-right outline-0"
              />
              <input
                type="number"
                value={maxPriceInput}
                onChange={(e) => setMaxPriceInput(e.target.value)}
                placeholder="حداکثر قیمت(تا)"
                className="w-full bg-gray-100 px-4 py-2 rounded-lg text-right outline-0"
              />

              <button
                onClick={() => {
                  if (isPriceFiltered) {
                    // بازنشانی فیلتر قیمت
                    setMinPrice("");
                    setMaxPrice("");
                    setMinPriceInput("");
                    setMaxPriceInput("");
                  } else {
                    // اعمال فیلتر قیمت
                    setMinPrice(minPriceInput);
                    setMaxPrice(maxPriceInput);
                  }
                  setCurrentPage(1);
                }}
                className={`mt-3 ${isPriceFiltered
                  ? "bg-gray-500 hover:bg-gray-600"
                  : "bg-purple-700 hover:bg-purple-800"
                  } text-white py-2 px-4 rounded-lg transition`}
              >
                {isPriceFiltered ? "بازنشانی فیلتر قیمت" : "اعمال فیلتر قیمت"}
              </button>
            </div>
          </div>



          <div className="bg-[#20223a]  p-5 pb-4 mt-5 rounded-2xl">
            <h3 className="text-lg font-bold text-center mb-4 border-b text-white">
              فیلتر بر اساس سایز
            </h3>
            <div className="flex flex-wrap gap-2 justify-end">
              {availableSizes.map((size) => (
                <button
                  key={size}
                  onClick={() =>
                    toggleSelection(size, selectedSizes, setSelectedSizes)
                  }
                  className={`px-3 py-1 rounded-full text-sm border transition-colors duration-200
                  ${selectedSizes.includes(size)
                      ? "bg-gray-500 text-white border-[#44e4d1] hover:bg-gray-600"
                      : "bg-white text-black border-gray-300 hover:bg-gray-100"}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div >
    </>
  );
}