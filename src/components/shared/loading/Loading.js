"use client";

import { PropagateLoader } from "react-spinners";
import MiniLoading from "./MiniLoading";

export default function Loading({ className = "" }) {
  return (
    <div
      className={`flex flex-col justify-center items-center min-h-screen gap-4 ${className}`}
    >
      <p className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-900 via-purple-500 to-purple-600 font-semibold animate-bounce">
        لطفاً صبر کنید
      </p>
      <MiniLoading />
    </div>
  );
}
