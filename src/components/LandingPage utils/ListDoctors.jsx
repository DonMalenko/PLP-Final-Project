import { useRecoilValue } from 'recoil';
import { ThemeMode } from '../../Recoil/State';
import Doctor from '../LandingPage utils/Doctor';

const ListDoctors = () => {
  const themeMode = useRecoilValue(ThemeMode);

  const doctors = [
    { name: "Dr. Sarah Johnson", specialty: "Cardiologist", location: "New York, USA" },
    { name: "Dr. James Wilson", specialty: "Dermatologist", location: "London, UK" },
    { name: "Dr. Mary Brown", specialty: "Pediatrician", location: "Toronto, Canada" },
  ];

  return (
    <section className={`p-10 ${themeMode === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-600'}`}>
      <h2 className="text-3xl font-bold text-center mb-6">Our Doctors</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor, index) => (

          <Doctor key={index} doctor={doctor} />          
        ))}
          </div>
    </section>
  );
};

export default ListDoctors;
