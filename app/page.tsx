import Hero from "@/components/Hero";
import Services from "@/components/Services";
import DataCards from "@/components/DataCards";
import GrowthCta from "@/components/GrowthCta";
import AiTeam from "@/components/AiTeam";
import Integrations from "@/components/Integrations";
import Works from "@/components/Works";
import FinalCta from "@/components/FinalCta";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <DataCards />
        <GrowthCta />
        <AiTeam />
        <Integrations />
        <Works />
        <FinalCta />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
