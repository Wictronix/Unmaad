import Image from "next/image";
import { Metadata } from "next";
import { sharedMetadata } from "./shared-metadata";

export const metadata: Metadata = {
  ...sharedMetadata,
  title: "Home | Unmaad 2026",
};



import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/pages/home/HeroSection";
import Street from "@/app/pages/home/Street";
import UnmaadJunction from "@/app/pages/home/UnmaadJunction";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col font-sans text-white">
      <HeroSection />
      <Street />
      <UnmaadJunction />
      <Footer />
    </main>
  );
}

