import Footer from "@/components/main/footer";
import Hero from "@/components/main/hero";
import Introcards from "@/components/main/introcards";
import Joinwaitlist from "@/components/main/joinwaitlist";
import Partners from "@/components/main/partners";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto pb-20 space-y-20">
      {/* hero section */}
      <Hero />

      {/* intro cards */}
      <Introcards />

      {/* parners */}
      <Partners />

      {/* join waitlist */}
      <Joinwaitlist />

      {/* footer */}
      <Footer />
    </div>
  );
}
