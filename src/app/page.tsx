import Image from "next/image";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import Camp from "@/components/home/Camp";
import Features from "@/components/home/Features";
import GetApp from "@/components/home/GetApp";
import Guide from "@/components/home/Guide";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        <Hero />
        <Camp />
        <Guide />
        <Features />
        <GetApp />
      </main>
      <Footer />
    </>
  );
}
