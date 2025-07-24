'use client';

import Link from 'next/link';

export default function Opinion() {
  return (
    <div
      className="rounded-3xl overflow-hidden relative text-black py-8 px-6 w-full mb-10 shadow-xl"
      style={{
        backgroundImage: "url('/assets/img/k.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        boxShadow: '0 20px 50px rgba(203, 17, 186, 0.3)'
      }}
    >

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold leading-relaxed">
          شیک ترین و جدید ترین{" "}
          <span className="text-purple-700">پریزهای دنیا</span>
          <br />
          بدون واسطه از ما
        </h2>

        <Link href="/products">
          <button className="mt-6 bg-white text-purple-700 text-sm font-medium px-4 py-2 rounded-md hover:bg-pink-100 transition">
            ← مشاهده همه
          </button>
        </Link>
      </div>
    </div>
  );
}
