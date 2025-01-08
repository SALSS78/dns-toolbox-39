import React from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './Navbar';
import Footer from './Footer';
import AdComponent from './AdComponent';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Toaster position="top-right" />
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-4">
        <AdComponent slot="top-banner" />
        <Outlet />
        <AdComponent slot="bottom-banner" />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;