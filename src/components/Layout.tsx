import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import AdComponent from './AdComponent';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-8">
        <AdComponent slot="top-banner" />
        <Outlet />
        <AdComponent slot="bottom-banner" />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;