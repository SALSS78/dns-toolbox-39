import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import SmtpTester from './components/SmtpTester';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import Disclaimer from './pages/Disclaimer';
import AdDisclosure from './pages/AdDisclosure';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<SmtpTester />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/ad-disclosure" element={<AdDisclosure />} />
      </Route>
    </Routes>
  );
};

export default App;