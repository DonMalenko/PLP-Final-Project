import Logo from '../assets/images/Telemedicine_logo.png';
import { NavLink, useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { ThemeMode } from '../Recoil/State';
import { useState } from 'react';

const Navbar = () => {
  const [themeMode, setThemeMode] = useRecoilState(ThemeMode);
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu

  const toggleTheme = () => {
    const newMode = themeMode === 'dark' ? 'light' : 'dark';
    setThemeMode(newMode);
    localStorage.setItem('themeMode', newMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu visibility
  };

  const activeLink = ({ isActive }) =>
    isActive
      ? 'text-white bg-blue-600 pt-1 hover:text-black'
      : 'text-gray-500 pt-1 hover:text-blue-600';

  const isLandingPage = location.pathname === '/';
  const isDashboard = location.pathname.startsWith('/dashboard');

  return (
    <nav className={`${themeMode === 'dark' ? "bg-gray-900 text-gray-100 shadow-md" : "bg-gray-100 text-gray-900 shadow-md"  }`}>
      <div className="container mx-auto px-1 py-4 flex justify-between items-center">
        <NavLink
          to="/"
          className={`${themeMode === 'dark' ? 'text-gray-100' : ' text-blue-600'} text-2xl font-bold flex items-center`}
        >
          <img
            className="inline h-6 w-8 mr-2"
            src={Logo}
            alt="telemedicine-logo"
          />
          Telemedicine
        </NavLink>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className={`${
              themeMode === 'dark' ? 'hover:bg-gray-900' : 'hover:bg-gray-200'
            } p-1.5 rounded-lg`}
          >
            {themeMode === 'dark' ? '🌞' : '🌙'}
          </button>

          {isLandingPage && (
            <div className="hidden md:flex space-x-6">
              <NavLink to="/" className={activeLink}>
                Home
              </NavLink>
              <NavLink to="/about" className={activeLink}>
                About Us
              </NavLink>
              <NavLink to="/contact" className={activeLink}>
                Contact Us
              </NavLink>
            </div>
          )}

          {isDashboard && (
            <div className="flex items-center space-x-4">
              <span className={`${themeMode === 'dark' ?  'text-gray-100' : 'text-gray-900'}`}>Welcome, User!</span>
              <img
                src="https://via.placeholder.com/40"
                alt="User Profile"
                className="rounded-full h-10 w-10"
              />
            </div>
          )}

          {isLandingPage && (
            <button onClick={toggleMenu} className={`md:hidden ${themeMode === 'dark' ? 'text-gray-100' : 'text-gray-700'}`}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu - Render only when menuOpen is true */}
      {isLandingPage && menuOpen && (
        <div className="md:hidden flex flex-col p-2 shadow-md">
          <NavLink to="/" className={activeLink} onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/how-it-works" className={activeLink} onClick={() => setMenuOpen(false)}>
            How It Works
          </NavLink>
          <NavLink to="/doctors" className={activeLink} onClick={() => setMenuOpen(false)}>
            Doctors
          </NavLink>
          <NavLink to="/servicePage" className={activeLink} onClick={() => setMenuOpen(false)}>
            Services
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
