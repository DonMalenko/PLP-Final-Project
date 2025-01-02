import React from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layouts/Layout';
import LandingPage from './Pages/LandingPage';
import About from './Pages/About';
import Signup from './auths/SignUp';
import Login from './auths/Login';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/Routes/PrivateRoute';
import AppointmentBooking from './components/AppointmentBooking';
import ProfileManagement from './components/ProfileManagement';
import VideoConsultation from './components/VideoConsultation';
import ListDoctors from './components/LandingPage utils/ListDoctors';
import Contact from './Pages/Contact';
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
