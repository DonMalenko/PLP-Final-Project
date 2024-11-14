import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import HowItWorks from "../components/HowItWorks";
import Doctors from "../components/ListDoctors";
import FAQ from "../components/FAQ";


const LandingPage = () => {
  return (
      <>
          <HeroSection />
          <Services />
          <Testimonials />
          <HowItWorks />
          <Doctors />
          <FAQ />
      </>
  )
}

export default LandingPage