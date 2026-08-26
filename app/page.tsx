import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import Services from "@/components/Services";
import DataCards from "@/components/DataCards";
import Automation from "@/components/Automation";
import AiTeam from "@/components/AiTeam";
import Integrations from "@/components/Integrations";
import Packages from "@/components/Packages";
import GrowthCta from "@/components/GrowthCta";
import Works from "@/components/Works";
import FinalCta from "@/components/FinalCta";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <LogoMarquee />
        <Services />
        <DataCards />
        <Automation />
        <AiTeam />
        <Integrations />
        <Packages />
        <GrowthCta />
        <Works />
        <FinalCta />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
