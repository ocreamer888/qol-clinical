import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Features } from "@/components/sections/Features";
import { CTABanner } from "@/components/sections/CTABanner";
import { Partners } from "@/components/sections/Partners";
import { Membership } from "@/components/sections/Membership";
import { Treatments } from "@/components/sections/Treatments";
import { Doctors } from "@/components/sections/Doctors";
import { ContactForm } from "@/components/sections/ContactForm";
import { Footer } from "@/components/sections/Footer";
import { NavBar } from "@/components/sections/NavBar";
import { CTAsection } from "@/components/sections/CTAsection";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <About />
      <Features />
      <CTABanner />
      <Treatments />
      <Doctors />
      <CTAsection />
      <Footer />
    </main>
  );
}
