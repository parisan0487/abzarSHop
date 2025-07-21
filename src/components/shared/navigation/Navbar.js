"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  User,
  HelpCircle,
  Phone,
  ShoppingCart,
  ShoppingCartIcon,
  Flame,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchNav from "../SearchNav";
import useAuthStore from "@/store/authStore";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const timeoutRef = useRef(null);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const checkAuth = useAuthStore((state) => state.checkAuth);
  const pathname = usePathname();

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setSubmenuOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setSubmenuOpen(false);
    }, 300);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const linkHref = isLoggedIn ? "/account" : "/register";

  const navLinks = [
    { href: "/contact", label: "تماس با ما" },
    { href: "/about", label: "درباره ما" },
    { href: "/shop", label: "فروشگاه" },
    { href: "/", label: "صفحه اصلی" },
  ];

  return (
    <header className="flex justify-between gap-4 items-center px-3 bg-[#20223a] text-right rounded-xl mt-5">
      <div className="flex items-center gap-2">
        <Link href="/basket">
          <button className="p-3 rounded-xl bg-[#3E445C] hover:bg-purple-700">
            <ShoppingCartIcon className="text-white" size={20} />
          </button>
        </Link>
        <Link href={linkHref}>
          <button className="p-3 rounded-xl bg-[#3E445C] hover:bg-purple-700">
            <User className="text-white" size={20} />
          </button>
        </Link>
        <div className="relative max-[652px]:hidden">
          <SearchNav />
        </div>
      </div>

      <nav className="max-[1020px]:hidden">
        <ul className="flex gap-4 text-md items-center">
          {navLinks.map((item) => {
            return (
              <li key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 relative text-white hover:text-[#CB11BA]`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}

          <li
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <p className="flex items-center gap-1 cursor-pointer relative group text-white hover:text-[#CB11BA] transition-all">
              <span className="text-2xl mb-2 transform group-hover:translate-x-1 transition-transform duration-300">
              &#8964;
              </span>
              دسته بندی ها
            </p>


            {submenuOpen && (
              <ul className="absolute top-full right-0 flex flex-col bg-[#5B5271] gap-2 shadow-xl rounded-xl p-2 mt-2 z-50 min-w-[180px] text-sm text-center">
                {[
                  { href: "/shop/handmade-jewelry", label: "لپتاپ" },
                  { href: "/shop/wooden-handicrufts", label: "هدفون" },
                  { href: "/shop/clay-crafts", label: "موبایل" },
                  { href: "/shop/metal-crafts", label: "اکسسوری" },
                ].map((item) => (
                  <li key={item.href} className="relative group">
                    <Link
                      href={item.href}
                      className="block px-4 py-2 rounded-md text-black hover:text-[#CB11BA] bg-[#FFFFFF]  transition-all duration-300 font-medium"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-2">
        <Link href="/">
          <Image
            src="/assets/img/logo.png"
            alt="لوگو"
            width={90}
            height={90}
          />
        </Link>
      </div>

      <Sidebar />
    </header>
  );
};


