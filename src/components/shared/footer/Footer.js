"use client"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#2b1b3b] text-white px-6 md:px-16 py-10 mt-15 mb-8 rounded-[1.5rem]">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-sm text-right">
        {/* ستون 1 */}
        <div>
          <h4 className="text-base font-semibold mb-2 border-b border-fuchsia-500 inline-block pb-1">
            دسته بندی محصولات
          </h4>
          <ul className="mt-4 space-y-2">
            <li>ساعت مچی زنانه <span className="text-fuchsia-500">•</span></li>
            <li>ساعت مچی مردانه <span className="text-fuchsia-500">•</span></li>
            <li>اکسسوری <span className="text-fuchsia-500">•</span></li>
            <li>ساعت دیواری <span className="text-fuchsia-500">•</span></li>
            <li>ساعت هوشمند <span className="text-fuchsia-500">•</span></li>
          </ul>
        </div>

        {/* ستون 2 */}
        <div>
          <h4 className="text-base font-semibold mb-2 border-b border-fuchsia-500 inline-block pb-1">
            لینک های مهم
          </h4>
          <ul className="mt-4 space-y-2">
            <li>صفحه اصلی <span className="text-fuchsia-500">•</span></li>
            <li>وبلاگ <span className="text-fuchsia-500">•</span></li>
            <li>درباره ما <span className="text-fuchsia-500">•</span></li>
            <li>تماس با ما <span className="text-fuchsia-500">•</span></li>
            <li>فروشگاه <span className="text-fuchsia-500">•</span></li>
          </ul>
        </div>

        {/* ستون 3 */}
        <div>
          <h4 className="text-base font-semibold mb-2 border-b border-fuchsia-500 inline-block pb-1">
            دسترسی سریع
          </h4>
          <ul className="mt-4 space-y-2">
            <li>حساب کاربری <span className="text-fuchsia-500">•</span></li>
            <li>پیشخوان <span className="text-fuchsia-500">•</span></li>
            <li>سفارش ها <span className="text-fuchsia-500">•</span></li>
            <li>آدرس <span className="text-fuchsia-500">•</span></li>
            <li>جزئیات حساب <span className="text-fuchsia-500">•</span></li>
          </ul>
        </div>

        {/* ستون 4 */}
        <div className="md:col-span-2">
          <div className="mb-6">
            <h4 className="text-base font-semibold mb-2">سایت فروشگاه ساعت</h4>
            <p className="text-gray-300 text-sm leading-6">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
              طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
              که لازم است.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* اعتماد */}
            <div>
              <h5 className="border-b border-fuchsia-500 inline-block mb-2 pb-1">به ما اعتماد کنید</h5>
              <div className="flex gap-2">
                <div className="bg-gray-700 rounded-lg px-4 py-2 text-center">نماد</div>
                <div className="bg-gray-700 rounded-lg px-4 py-2 text-center">نماد</div>
              </div>
            </div>

            {/* ارتباط */}
            <div className="text-sm space-y-2 rtl">
              <h5 className="border-b border-fuchsia-500 inline-block mb-2 pb-1">با ما در ارتباط باشید</h5>
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
