import Lottie from 'lottie-react'
import telemedicineAnimation from '../../assets/animations/telemedicine.json';
import GetStart from '../GetStart';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center text-center bg-blue-50 py-20">
      <Lottie animationData={telemedicineAnimation} className="w-1/2 h-auto" />
      <h1 className="text-4xl font-bold mt-8">Connect with Top Doctors Anytime, Anywhere</h1>
      <p className="text-lg mt-4 max-w-md">
        Book appointments, consult with certified doctors, and access your medical history.
      </p>
      <GetStart />
    </div>
  );
};

export default HeroSection;
