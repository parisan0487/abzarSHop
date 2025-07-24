"use client"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-[#20223a] text-white px-6 py-8 mt-20 mb-8 rounded-[1.5rem] overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/assets/img/hame-img3.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.1, 
          pointerEvents: 'none', 
        }}
      />
      <div className="grid grid-cols-1 md:grid-cols-5 gap-20 text-right text-base leading-relaxed font-medium">

        {/* ستون 1 */}
        <div>
          <h4 className="text-lg font-bold mb-3 border-b border-dotted border-fuchsia-500 inline-block pb-1">
            دسته بندی محصولات
          </h4>
          <ul className="mt-4 space-y-8">
            <li>ساعت مچی زنانه <span className="text-fuchsia-500">•</span></li>
            <li>ساعت مچی مردانه <span className="text-fuchsia-500">•</span></li>
            <li>اکسسوری <span className="text-fuchsia-500">•</span></li>
            <li>ساعت دیواری <span className="text-fuchsia-500">•</span></li>
          </ul>
        </div>

        {/* ستون 2 */}
        <div>
          <h4 className="text-lg font-bold mb-3 border-b border-dotted border-fuchsia-500 inline-block pb-1">
            لینک‌های مهم
          </h4>
          <ul className="mt-4 space-y-8">
            <li>صفحه اصلی <span className="text-fuchsia-500">•</span></li>
            <li>درباره ما <span className="text-fuchsia-500">•</span></li>
            <li>تماس با ما <span className="text-fuchsia-500">•</span></li>
            <li>فروشگاه <span className="text-fuchsia-500">•</span></li>
          </ul>
        </div>

        {/* ستون 3 */}
        <div>
          <h4 className="text-lg font-bold mb-3 border-b border-dotted border-fuchsia-500 inline-block pb-1">
            دسترسی سریع
          </h4>
          <ul className="mt-4 space-y-8">
            <li>حساب کاربری <span className="text-fuchsia-500">•</span></li>
            <li>سفارش‌ها <span className="text-fuchsia-500">•</span></li>
            <li>آدرس <span className="text-fuchsia-500">•</span></li>
            <li>جزئیات حساب <span className="text-fuchsia-500">•</span></li>
          </ul>
        </div>

        {/* ستون 4 و 5 با هم */}
        <div className="md:col-span-2 flex flex-col justify-between h-full space-y-6">
          <div>
            <h4 className="text-xl font-bold mb-3">سایت فروشگاه ساعت</h4>
            <p className="text-gray-300 leading-loose text-[15px]">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            {/* اعتماد */}
            <div className="text-[15px] space-y-2 rtl">
              <h5 className="text-lg font-bold border-b border-dotted border-fuchsia-500 inline-block pb-1">
                به ما اعتماد کنید
              </h5>
              <div className="flex items-center gap-2">
                <div className="bg-gray-700 rounded-md px-6 py-6 text-center text-sm text-white"></div>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-gray-700 rounded-md px-6 py-6 text-center text-sm text-white"></div>
              </div>
            </div>

            {/* ارتباط */}
            <div className="text-[15px] space-y-2 rtl">
              <h5 className="text-lg font-bold border-b border-dotted border-fuchsia-500 inline-block pb-1">
                با ما در ارتباط باشید
              </h5>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-fuchsia-500" />
                <span>info@yoursite.ir</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-fuchsia-500" />
                <span>021-2344567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-fuchsia-500" />
                <span>کاشمر</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
