import { useRecoilValue } from 'recoil';
import { ThemeMode } from '../../Recoil/State';

const HowItWorks = () => {
const themeMode = useRecoilValue(ThemeMode);


  const steps = [
    { step: "1", title: "Sign Up", description: "Create an account and complete your profile." },
    { step: "2", title: "Find a Doctor", description: "Browse through our list of doctors and choose one that fits your needs." },
    { step: "3", title: "Book an Appointment", description: "Schedule a consultation with your selected doctor." },
    { step: "4", title: "Start Consultation", description: "Join the consultation session from the comfort of your home." },
  ];

  return (
    <section className={`py-5 ${themeMode === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-600'}`}>
      <h2 className="text-3xl font-bold text-center mb-6">How It Works</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step) => (
          <div key={step.step} className={`text-center p-6 ${themeMode === 'dark' ? 'bg-gray-700 text-gray-100 ' : 'bg-white text-gray-600'} shadow-md rounded-md`}>
            <div className="text-4xl font-bold mb-2">{step.step}</div>
            <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
