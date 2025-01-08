import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-8">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-600">
            © {new Date().getFullYear()} SMTP Tester. All rights reserved.
          </div>
          <div className="space-x-4 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-sm text-gray-600 hover:text-gray-900">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-sm text-gray-600 hover:text-gray-900">Terms of Service</Link>
            <Link to="/cookie-policy" className="text-sm text-gray-600 hover:text-gray-900">Cookie Policy</Link>
            <Link to="/disclaimer" className="text-sm text-gray-600 hover:text-gray-900">Disclaimer</Link>
            <Link to="/ad-disclosure" className="text-sm text-gray-600 hover:text-gray-900">Ad Disclosure</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;