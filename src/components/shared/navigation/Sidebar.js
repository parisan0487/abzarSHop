import { useEffect, useState } from "react";
import { X, Search, ChevronDown } from "lucide-react";
import clsx from "clsx";
import Link from "next/link";
import SearchNav from "../SearchNav";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const currentPage = "صفحه اصلی";
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
    setSubmenuOpen(false);
  }, [pathname]);

  const navItems = [
    { title: "صفحه اصلی", href: "/" },
    {
      title: "دسته بندی",
      href: "/shop",
      children: [
        { href: "/shop/handmade-jewelry", title: "موبایل" },
        { href: "/shop/wooden-handicrufts", title: "لپتاپ" },
        { href: "/shop/clay-crafts", title: "اکسسوری" },
        { href: "/shop/metal-crafts", title: "هدفون" },
      ],
    },
    { title: "فروشگاه", href: "/shop" },
    { title: "تماس با ما", href: "/contact" },
    { title: "درباره ما", href: "/about" },
  ];

  return (
    <div className="min-[1020px]:hidden">
      <div onClick={() => setIsOpen(true)} className="p-2 cursor-pointer">
        <div className="w-6 h-5 flex flex-col justify-between cursor-pointer group">
          <span className="h-1 bg-purple-700 w-full rounded transition-all duration-300"></span>
          <span className="h-1 bg-purple-700 w-full self-start rounded transition-all duration-300 ml-1"></span>
          <span className="h-1 bg-purple-700 w-full rounded transition-all duration-300"></span>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm animate-fadeIn"
          onClick={() => setIsOpen(false)}
        ></div>
      )}


      <div
        className={clsx(
          "fixed top-0 right-0 w-[300px] h-full bg-[#20223a] z-50 shadow-xl px-4 py-5",
          "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-end mb-4" dir="rtl">
          <X
            className="text-gray-400 cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>

        <div className=" mb-7">
          <SearchNav />
        </div>

        <ul className="flex flex-col gap-2 text-right px-2" dir="rtl">
          {navItems.map((item, index) => (
            <li key={index}>
              <div>
                <div
                  className={clsx(
                    "flex items-center justify-between cursor-pointer px-3 py-2 rounded-xl text-white hover:[#CB11BA] transition-colors"
                  )}
                  onClick={() => {
                    if (item.children) {
                      setSubmenuOpen((prev) => !prev);
                    } else {
                      setIsOpen(false);
                    }
                  }}
                >
                  {item.children ? (
                    <>
                      <span>{item.title}</span>
                      <ChevronDown
                        size={18}
                        className={clsx(
                          "transition-transform",
                          submenuOpen && "rotate-180"
                        )}
                      />
                    </>
                  ) : (
                    <Link href={item.href} onClick={() => setIsOpen(false)}>
                      <span>{item.title}</span>
                    </Link>
                  )}
                </div>

                {item.children && submenuOpen && (
                  <ul className="pr-5 pl-2 mt-1 flex flex-col gap-1 text-sm">
                    {item.children.map((sub, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href={sub.href}
                          onClick={() => setIsOpen(false)}
                          className="block text-gray-400 hover:[#CB11BA] rounded-xl px-3 py-1 transition"
                        >
                          {sub.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};


