"use client"
import Breadcrumb from "@/components/ui/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <Breadcrumb
        items={[
          { text: "صفحه اصلی", href: "/" },
          { text: "درباره ما", href: "/about" },
        ]}
      />

     
    </>
  );
}
