// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Layout from './Layouts/Layout'
// import LandingPage from './Pages/LandingPage'
// import About from './Pages/About';
// import Contact from './Pages/Contact';
// import NavServices from './Pages/NavServices';
// import Signup from './components/SignUp';
// import Login from './components/Login';
// import Dashboard from './components/Dashboard';
// import PrivateRoute from './components/PrivateRoute';
// import AppointmentBooking from './components/AppointmentBooking';
// import ProfileManagement from './components/ProfileManagement';
// import VideoConsultation from './components/VideoConsultation';


// const App = () => (
//   <Router>
//     <Navbar />
//     <Routes>
//       {/* Public Routes */}
//       <Route path="/" element={<Layout />} />
//         <Route index element={<LandingPage />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/navservices" element={<NavServices />} />
      

//         {/* Authentication Routes */}
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />

//         {/* Protected Routes */}
//         <Route path="/dashboard" element={
//           <PrivateRoute>
//             <Dashboard />
//           </PrivateRoute>
//           }>
//           {/* Nested routes inside Dashboard */}
//             <Route path="appointments" element={<AppointmentBooking />} />
//             <Route path="profile" element={<ProfileManagement />} />
//             <Route path="consultation" element={<VideoConsultation />} />
//           <Route/>
//       </Route>
//     </Routes>
//   </Router>
// );

// export default App;

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layouts/Layout';
import LandingPage from './Pages/LandingPage';
import About from './Pages/About';
import Contact from './Pages/Contact';
import NavServices from './Pages/NavServices';
import Signup from './components/SignUp';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import AppointmentBooking from './components/AppointmentBooking';
import ProfileManagement from './components/ProfileManagement';
import VideoConsultation from './components/VideoConsultation';
import HowItWorks from './Pages/HowItWorks';
import ListDoctors from './Pages/ListDoctors';


const App = () => (
  <Router>
    <Routes>
      <Route element={<Layout />}>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/doctors" element={<ListDoctors/>} />
        
        <Route path="/navservices" element={<NavServices />} />

        {/* Authentication Routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }>
          {/* Nested routes inside Dashboard */}
          <Route path="appointments" element={<AppointmentBooking />} />
          <Route path="profile" element={<ProfileManagement />} />
          <Route path="consultation" element={<VideoConsultation />} />
        </Route>
      </Route>
    </Routes>
  </Router>
);

export default App;
