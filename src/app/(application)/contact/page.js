"use client"
import Breadcrumb from "@/components/ui/Breadcrumb";
import { Instagram, Send } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formPayload = new URLSearchParams();
    formPayload.append("email", formData.email);
    formPayload.append(
      "message",
      `
        نام: ${formData.name}
        شماره تماس: ${formData.phone}
        موضوع: ${formData.subject}
        پیام: ${formData.message}
      `
    );

    try {
      const res = await fetch("https://formspree.io/f/mdkekzbb", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formPayload,
      });

      const result = await res.json();

      if (res.ok) {
        toast.success("پیام شما با موفقیت ارسال شد");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error(result?.errors?.[0]?.message || "ارسال پیام با مشکل مواجه شد");
      }
    } catch (error) {
      toast.error("خطا در ارتباط با سرور");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container">
      <Breadcrumb
        items={[
          { text: "صفحه اصلی", href: "/" },
          { text: "تماس با ما", href: "/contact-us" },
        ]}
      />

      <section className="text-white py-10" dir="rtl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-30">
          {/* فرم سمت راست */}
          <div className="bg-[#2f254f] p-6 rounded-xl">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="نام"
                className="bg-[#3c325d] p-3 rounded-md outline-none"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                type="text"
                placeholder="نام خانوادگی"
                className="bg-[#3c325d] p-3 rounded-md outline-none"
              />
              <input
                type="email"
                placeholder="آدرس ایمیل"
                className="bg-[#3c325d] p-3 rounded-md outline-none"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <input
                type="text"
                placeholder="شماره تماس"
                className="bg-[#3c325d] p-3 rounded-md outline-none"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
              <input
                type="text"
                placeholder="موضوع پیام"
                className="bg-[#3c325d] p-3 rounded-md outline-none md:col-span-2"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
              <textarea
                placeholder="متن پیام"
                className="bg-[#3c325d] p-3 rounded-md outline-none md:col-span-2 h-40"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
              <button
                type="submit"
                className="bg-purple-900 text-white py-2 px-6 rounded-md flex items-center gap-2 hover:bg-[#d100d1] md:col-span-2 w-fit"
              >
                <span className="text-xl">✔</span>
                ارسال پیام
              </button>
            </form>
          </div>

          {/* متن و اطلاعات تماس */}
          <div className="flex flex-col gap-6 justify-center">
            <h2 className="text-2xl font-bold">
              با ما در <span className="text-purple-900">ارتباط</span> باش !
            </h2>
            <p className="text-sm leading-7 text-gray-300">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
              طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
              لازم است.
            </p>

            <div className="flex flex-col gap-4 text-sm text-gray-300">
              <div>
                <strong>آدرس</strong>
                <br /> میدان امام
              </div>
              <div>
                <strong>ایمیل</strong>
                <br /> info@domain.com
              </div>
              <div>
                <strong>شماره</strong>
                <br /> 035-345678
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <a href="https://t.me/yourchannel" className="text-xl text-white hover:text-[#229ED9]" target="_blank" rel="noopener noreferrer">
                <Send size={24} />
              </a>
              <a href="https://instagram.com/yourprofile" className="text-xl text-white hover:text-[#E1306C]" target="_blank" rel="noopener noreferrer">
                <Instagram size={24} />
              </a>
            </div>


          </div>
        </div>
      </section>

    </div>
  );
}
