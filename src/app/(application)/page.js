// import Baner from "../../components/home/index/baner/baner";
// import Best from "../../components/home/index/best/best";
// import Guide from "../../components/home/index/guide/Opinion";
// import Header from "../../components/home/index/header/Header";
// import New from "../../components/home/index/new/New";
// import Offer from "../../components/home/index/offer/Offer";

// export default async function Home() {
//   const res = await fetch("https://researchback.onrender.com/api/products/", {
//     cache: "no-store",
//   });
//   const allProducts = await res.json();

//   const offerProducts = allProducts.filter((p) => p.categories?.includes("offer"));
//   const bestProducts = allProducts.filter((p) => p.categories?.includes("best"));
//   const newProducts = allProducts.filter((p) => p.categories?.includes("new"));

//   return (
//     <div className=" items-center justify-items-center min-h-screen font-kalameh">
//       <Header />
//       <Offer products={offerProducts} />
//       <Baner />
//       <Best products={bestProducts} />
//       <Guide />
//       <New products={newProducts} />
//     </div>
//   );
// }




import WhyUsSection from "@/components/home/index/WhyUsSection/WhyUsSection";
import Baner from "../../components/home/index/baner/baner";
import Best from "../../components/home/index/best/best";
import Guide from "../../components/home/index/guide/Opinion";
import Header from "../../components/home/index/header/Header";
import New from "../../components/home/index/new/New";
import Offer from "../../components/home/index/offer/Offer";

export default function Home() {
  // داده‌های الکی برای تست کامپوننت‌ها
  const dummyProducts = [
    {
      _id: "1",
      name: "پریز مشکی",
      id: "p001",
      price: 150000,
      discount: 20,
      description: "تی‌شرت نخی مناسب تابستان با طرح کارتونی جذاب.",
      feature: ["100٪ نخی", "قابل شست‌وشو", "رنگ ثابت"],
      categories: ["new", "offer"],
      producter: "برند کودک شادینا",
      images: ["/assets/img/mm.png"],
      variants: [
        { color: "قرمز", size: "M", stock: 10, price: 150000 },
        { color: "آبی", size: "L", stock: 5, price: 150000 },
      ],
      slug: "boy-tshirt-cartoon",
    },
    {
      _id: "2",
      name: "پریز مشکی",
      id: "p002",
      price: 180000,
      discount: 10,
      description: "شلوار نخی بسیار نرم و راحت مناسب خانه و خواب.",
      feature: ["سبک", "پارچه ضدحساسیت", "دوخت مقاوم"],
      categories: ["best"],
      producter: "شادینا مد",
      images: ["/assets/img/mm.png"],
      variants: [
        { color: "صورتی", size: "S", stock: 7, price: 180000 },
        { color: "بنفش", size: "M", stock: 3, price: 180000 },
      ],
      slug: "girl-comfy-pants",
    },
    {
      _id: "3",
      name: "پریز مشکی",
      id: "p003",
      price: 450000,
      discount: 30,
      description: "گرم و ضدآب، مناسب زمستان‌های سرد.",
      feature: ["ضدآب", "کلاه‌دار", "آستر پشم‌شیشه"],
      categories: ["new", "best"],
      producter: "کودک اسپورت",
      images: ["/assets/img/mm.png"],
      variants: [
        { color: "مشکی", size: "XL", stock: 2, price: 450000 },
      ],
      slug: "kids-winter-jacket",
    },
    {
      _id: "4",
      name: "پریز مشکی",
      id: "p003",
      price: 450000,
      discount: 30,
      description: "گرم و ضدآب، مناسب زمستان‌های سرد.",
      feature: ["ضدآب", "کلاه‌دار", "آستر پشم‌شیشه"],
      categories: ["new", "best"],
      producter: "کودک اسپورت",
      images: ["/assets/img/mm.png"],
      variants: [
        { color: "مشکی", size: "XL", stock: 2, price: 450000 },
      ],
      slug: "kids-winter-jacket",
    },
    {
      _id: "5",
      name: "پریز مشکی",
      id: "p003",
      price: 450000,
      discount: 30,
      description: "گرم و ضدآب، مناسب زمستان‌های سرد.",
      feature: ["ضدآب", "کلاه‌دار", "آستر پشم‌شیشه"],
      categories: ["new", "best"],
      producter: "کودک اسپورت",
      images: ["/assets/img/mm.png"],
      variants: [
        { color: "مشکی", size: "XL", stock: 2, price: 450000 },
      ],
      slug: "kids-winter-jacket",
    },
    {
      _id: "6",
      name: "پریز مشکی",
      id: "p003",
      price: 450000,
      discount: 30,
      description: "گرم و ضدآب، مناسب زمستان‌های سرد.",
      feature: ["ضدآب", "کلاه‌دار", "آستر پشم‌شیشه"],
      categories: ["new", "best"],
      producter: "کودک اسپورت",
      images: ["/assets/img/mm.png"],
      variants: [
        { color: "مشکی", size: "XL", stock: 2, price: 450000 },
      ],
      slug: "kids-winter-jacket",
    },
  ];


  return (
    <div className="items-center justify-items-center min-h-screen font-kalameh">
      <Header />
      <Offer products={dummyProducts} />
      <Guide />
      <Best products={dummyProducts} />
      <Baner />
      <New products={dummyProducts} />
      <WhyUsSection />
    </div>
  );
}
