import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold">SMTP Tester</Link>
          <div className="space-x-4">
            <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link to="/privacy-policy" className="text-gray-600 hover:text-gray-900">Privacy</Link>
            <Link to="/terms-of-service" className="text-gray-600 hover:text-gray-900">Terms</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;