import React from 'react';

const AdDisclosure = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Advertisement Disclosure</h1>
      <div className="prose">
        <p>Last updated: [Current Date]</p>
        
        <h2>1. Advertising Disclosure</h2>
        <p>This website contains advertisements and may receive compensation for clicks or purchases...</p>

        <h2>2. Third-Party Advertising</h2>
        <p>We use third-party advertising companies to serve ads when you visit our website...</p>

        <h2>3. Google AdSense</h2>
        <p>This website uses Google AdSense to display advertisements...</p>

        <h2>4. User Privacy</h2>
        <p>Our advertising partners may use cookies and web beacons to collect non-personal information...</p>

        <h2>5. Contact Information</h2>
        <p>For questions about our advertising policies, please contact us at [contact email].</p>
      </div>
    </div>
  );
};

export default AdDisclosure;