import React from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layouts/Layout';
import LandingPage from './Pages/LandingPage';
import About from './Pages/About';
import Contact from './Pages/Contact';
import ServicePage from './Pages/ServicePage';
import Signup from './auths/SignUp';
import Login from './auths/Login';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import AppointmentBooking from './components/AppointmentBooking';
import ProfileManagement from './components/ProfileManagement';
import VideoConsultation from './components/VideoConsultation';
import HowItWorks from './Pages/HowItWorks';
import ListDoctors from './Pages/ListDoctors';
import TermsAndConditions from './Pages/TermsAndConditions';


const App = () => (
<RecoilRoot>
  <Router>
    <Routes>
      <Route element={<Layout />}>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/doctors" element={<ListDoctors/>} />
        <Route path="/servicePage" element={<ServicePage />} />
        <Route path="/terms" element={<TermsAndConditions />} />

        {/* Authentication Routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route element={<Layout />}>
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
          <Route path="doctors" element={<ListDoctors />} />
           {/* <Route path="consultation" element={<VideoConsultation />} /> */}
        </Route>
      </Route>

        
      
    </Routes>
  </Router>
  </RecoilRoot>
);

export default App;
