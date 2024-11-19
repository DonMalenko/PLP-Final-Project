
import React from 'react';
import { Outlet } from 'react-router-dom';
import DashBoardNav from '../components/DashboardNav';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <>
      <DashBoardNav />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
