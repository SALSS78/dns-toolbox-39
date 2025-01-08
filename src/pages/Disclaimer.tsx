import React from 'react';

const Disclaimer = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Disclaimer</h1>
      <div className="prose">
        <p>Last updated: [Current Date]</p>
        
        <h2>1. Website Disclaimer</h2>
        <p>The information provided on this website is for general informational purposes only...</p>

        <h2>2. No Professional Advice</h2>
        <p>The contents of this website do not constitute professional advice...</p>

        <h2>3. Accuracy of Information</h2>
        <p>While we strive to keep the information up to date and correct...</p>

        <h2>4. External Links</h2>
        <p>Our website may contain links to external websites...</p>

        <h2>5. Contact Information</h2>
        <p>If you have any questions about this disclaimer, please contact us at [contact email].</p>
      </div>
    </div>
  );
};

export default Disclaimer;