import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";


// import Features from "@/components/Features";
// import Hero from "@/components/Hero";
// import Highlights from "@/components/Highlights";
// import HowItWorks from "@/components/HowItWorks";
// import Model from "@/components/Model";

const Features = dynamic(() => import("@/components/Features"), { ssr: false });
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const Highlights = dynamic(() => import("@/components/Highlights"), { ssr: false });
const HowItWorks = dynamic(() => import("@/components/HowItWorks"), { ssr: false });
const Model = dynamic(() => import("@/components/Model"), { ssr: false });


export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
}
