import Logo from '../assets/images/Telemedicine_logo.png';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
    <div className="container mx-auto px-1 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold text-blue-600"> <img className='inline h-6 w-8' src={Logo} alt="telemedicine-logo" /> Telemedicine</NavLink>
        <div className="hidden md:flex space-x-6">
          <NavLink to="/" className="text-gray-700 hover:text-blue-600">Home</NavLink>
          <NavLink to="/how-it-works" className="text-gray-700 hover:text-blue-600">How It Works</NavLink>
          <NavLink to="/doctors" className="text-gray-700 hover:text-blue-600">Doctors</NavLink>
          <NavLink to="/navservices" className="text-gray-700 hover:text-blue-600">Services</NavLink>
        </div>
        <button className="md:hidden text-gray-700">
          {/* Hamburger icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
