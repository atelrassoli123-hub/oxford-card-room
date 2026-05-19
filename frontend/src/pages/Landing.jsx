import React from "react";
import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import Overview from "@/components/sections/Overview";
import Format from "@/components/sections/Format";
import Timeline from "@/components/sections/Timeline";
import Events from "@/components/sections/Events";
import Partners from "@/components/sections/Partners";
import Committee from "@/components/sections/Committee";
import Newsletter from "@/components/sections/Newsletter";
import Footer from "@/components/sections/Footer";

export default function Landing() {
  return (
    <main data-testid="landing-page" className="relative bg-[#050505] text-neutral-100 overflow-x-hidden">
      <Nav />
      <Hero />
      <Overview />
      <Format />
      <Timeline />
      <Events />
      <Partners />
      <Committee />
      <Newsletter />
      <Footer />
    </main>
  );
}
