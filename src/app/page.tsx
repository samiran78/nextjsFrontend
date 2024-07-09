import FeaturedCourses from "@/Components/FeaturedCourses";
import Instractors from "@/Components/Instractors";
import TestiMonalsCards from "@/Components/TestiMonalsCards";
import HeroSection from "@/Components/Ui/HeroSection";
import UpcomingWebners from "@/Components/UpcomingWebners";
import WhyChooseusdAts from "@/Components/WhyChooseusdAts";
import Footerr from "@/Components/Footerr";
import Image from "next/image";
export default function Home() {
  return (
  <main className="min-h-screen bg-black/10 antialiased bg-grid-white/[0.02]" >
    <h1 className="text-2xl bg-pink-500 text-center underline">nextjs 1</h1>
    {/* //navbar under layout so herosection should be under this section. */}
    <HeroSection />
    <FeaturedCourses />
    <WhyChooseusdAts />
    <TestiMonalsCards />
    <UpcomingWebners />
    <Instractors />
    <Footerr />
  </main>
  );
}
