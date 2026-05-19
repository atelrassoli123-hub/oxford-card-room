import React from "react";
import Nav        from "@/components/sections/Nav";
import Hero       from "@/components/sections/Hero";
import Manifesto  from "@/components/sections/Manifesto";
import Overview   from "@/components/sections/Overview";
import ThreeTables from "@/components/sections/ThreeTables";
import Timeline   from "@/components/sections/Timeline";
import Events     from "@/components/sections/Events";
import Partners   from "@/components/sections/Partners";
import Committee  from "@/components/sections/Committee";
import Newsletter from "@/components/sections/Newsletter";
import Footer     from "@/components/sections/Footer";

export default function Landing() {
  return (
    <main
      data-testid="landing-page"
      className="relative bg-[#050816] text-[#F0EAD6] overflow-x-hidden"
    >
      <Nav />
      <Hero />
      <Manifesto />
      <Overview />
      <ThreeTables />
      <Timeline />
      <Events />
      <Partners />
      <Committee />
      <Newsletter />
      <Footer />
    </main>
  );
}
