import Logo from '../assets/images/Telemedicine_logo.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

const activeLink = ({ isActive }) =>
    isActive ? "text-white bg-blue-600 hover:text-black px-2" : "text-white-500 hover:text-blue-600"

  return (
    <nav className="bg-white shadow-md">
    <div className="container mx-auto px-1 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold text-blue-600"> <img className='inline h-6 w-8' src={Logo} alt="telemedicine-logo" /> Telemedicine</NavLink>
        <div className="hidden md:flex space-x-6">
          <NavLink to="/" className={activeLink}>Home</NavLink>
          <NavLink to="/how-it-works" className={activeLink}>How It Works</NavLink>
          <NavLink to="/doctors" className={activeLink}>Doctors</NavLink>
          <NavLink to="/servicePage" className={activeLink}>Services</NavLink>
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
