import HeroSection from "../components/LandingPage utils/HeroSection";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import HowItWorks from "../components/LandingPage utils/HowItWorks";
import Doctors from '../components/LandingPage utils/ListDoctors';
import FAQ from "../components/LandingPage utils/FAQ";


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