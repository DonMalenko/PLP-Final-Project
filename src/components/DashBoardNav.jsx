import { Link } from 'react-router-dom';
import Logo from '../assets/images/Telemedicine_logo.png';

const DashBoardNav = () => {
    

  return (
    <nav className="bg-white shadow-md">
    <div className="container mx-auto px-1 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600"> <img className='inline h-6 w-8' src={Logo} alt="telemedicine-logo" /> Telemedicine</Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/dashboard/profile" className="text-white bg-blue-600 hover:text-black px-2">Profile</Link>
        </div>
      </div>
    </nav>
  );
};


export default DashBoardNav