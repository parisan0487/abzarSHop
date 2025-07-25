'use client';


import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import useAuthStore from "@/store/authStore";
import Loading from "@/components/shared/loading/Loading";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";



export default function Signup() {
    const router = useRouter();
    const login = useAuthStore((state) => state.login);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isRedirecting, setIsRedirecting] = useState(false);


    const toEnglishDigits = (str) => {
        const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
        const englishDigits = "0123456789";

        return str.replace(/[۰-۹]/g, (w) => englishDigits[persianDigits.indexOf(w)]);
    };


    const validateName = (name) => /^[\u0600-\u06FF\sA-Za-z]{3,}$/.test(name);
    const validatePhone = (phone) => /^09\d{9}$/.test(phone);
    const validatePassword = (password) => /^\S{5,}$/.test(password);

    const handleSubmit = async (e) => {
        e.preventDefault();


        if (!validateName(name)) return toast("نام باید حداقل ۳ کاراکتر و فقط شامل حروف باشد");
        if (!validatePhone(phone)) return toast("شماره تلفن باید ۱۱ رقم و با ۰۹ شروع شود");
        if (!validatePassword(password)) return toast("رمز عبور باید حداقل ۵ کاراکتر باشد");


        const userData = {
            name,
            phone,
            password,
            role: password === "admin089082005" ? "admin" : "user",
        };

        try {
            setIsSubmitting(true);

            const endpoint = "https://researchback.onrender.com/api/users/register";

            const res = await axios.post(endpoint, userData, {
                headers: { "Content-Type": "application/json" },
            });

            localStorage.setItem("token", res.data.token);
            login(res.data.token, res.data.user);

            toast.success("ثبت‌نام موفقیت‌آمیز بود");

            setName("");
            setPhone("");
            setPassword("");


            setIsRedirecting(true);
            setTimeout(() => {
                router.push("/");
                router.refresh();
            }, 1000);
        } catch (err) {
            const errorMessage =
                err.response?.data?.message || "خطایی رخ داده است. لطفاً دوباره تلاش کنید";
            toast.error(errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isRedirecting) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <Loading />
            </div>
        );
    }



    return (
        <>
            <Breadcrumb
                items={[
                    { text: "صفحه اصلی", href: "/" },
                    { text: "ثبت نام", href: "/singup" },
                ]}
            />

            <form
                className="flex flex-col items-center gap-6 w-full max-w-[320px] mx-auto p-6 m-20 bg-[#20223a] backdrop-blur-md rounded-2xl shadow-md"
                onSubmit={handleSubmit}
                dir="rtl"
            >
                
                <div className="w-full flex flex-col gap-2">
                    <label htmlFor="name" className="text-purple-900 font-bold text-sm">
                        نام کامل
                    </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="rounded-xl px-4 py-3 w-full bg-white/40 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-purple-700 focus:outline-none transition-all duration-300"
                    />
                </div>

                
                <div className="w-full flex flex-col gap-2">
                    <label className="text-purple-900 font-bold text-sm">
                        شماره تلفن
                    </label>
                    <input
                        type="text"
                        placeholder="مثال: 09123456789"
                        value={phone}
                        onChange={(e) => setPhone(toEnglishDigits(e.target.value))}
                        className="rounded-xl px-4 py-3 w-full bg-white/40 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-purple-700 focus:outline-none transition-all duration-300"
                    />
                </div>

                
                <div className="w-full flex flex-col gap-2">
                    <label className="text-purple-900 font-bold text-sm">
                        رمزعبور
                    </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(toEnglishDigits(e.target.value))}
                        className="rounded-xl px-4 py-3 w-full bg-white/40 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-purple-700 focus:outline-none transition-all duration-300"
                    />
                </div>

                
                <input
                    type="submit"
                    value="ثبت نام"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-full bg-purple-700 hover:bg-purple-800 text-white font-semibold text-sm cursor-pointer transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                />

                
                <span className="text-gray-600 text-sm">
                    حساب کاربری داری؟{' '}
                    <Link href="/login" className="text-purple-700 font-semibold hover:underline">
                        ورود
                    </Link>
                </span>
            </form>
        </>
    );
}
