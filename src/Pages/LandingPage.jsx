import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import HowItWorks from "./HowItWorks";
import Doctors from "./ListDoctors";
import FAQ from "../components/FAQ";
import ViewAllDoctors from '../components/ViewAllDoctors';


const LandingPage = () => {
  return (
      <>
          <HeroSection />
          <Services />
          <Testimonials />
          <HowItWorks />
          <Doctors />
          <ViewAllDoctors/>
          <FAQ />
      </>
  )
}

export default LandingPage