import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Foundation } from "@/components/Foundation";
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { Pulse } from "@/components/Pulse";
import { SmoothScroll } from "@/components/SmoothScroll";
import { SpecialtyShowcase } from "@/components/SpecialtyShowcase";
import { Voice } from "@/components/Voice";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Navigation />
      <main className="relative">
        <Hero />
        <Foundation />
        <SpecialtyShowcase />
        <Pulse />
        <Voice />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
