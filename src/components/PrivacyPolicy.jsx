import React from 'react';

function PrivacyPolicy () {
  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-600 mb-2"><strong>Effective Date:</strong> July 9, 2025</p>

      <p className="mb-4">
        At Genius Techie, we respect your privacy. This website is a portfolio site designed to showcase our work and allow potential clients to contact us. We keep your data safe and use it only for the purpose intended.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. What We Collect</h2>
      <ul className="list-disc ml-5 mb-4 text-gray-700">
        <li>Full name</li>
        <li>Mobile number</li>
        <li>Email address</li>
        <li>Message</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use It</h2>
      <ul className="list-disc ml-5 mb-4 text-gray-700">
        <li>Respond to your inquiry or project request.</li>
        <li>Follow up if you requested a consultation or demo.</li>
      </ul>
      <p className="mb-4">
        We do <strong>not</strong>:
      </p>
      <ul className="list-disc ml-5 mb-4 text-gray-700">
        <li>Use cookies or analytics tracking.</li>
        <li>Share or sell your data to any third parties.</li>
      </ul> 

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Retention</h2> 
      <p className="mb-4">
        We retain your message and contact info only for as long as necessary to fulfill your request or communication. You can request deletion of your data at any time by emailing us at <a href="mailto:geniusattechie@gmail.com" className="text">geniusattechie@gmail.com</a>.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Your Consent</h2>
      <p>
        By using our contact form, you consent to the use of your submitted information as described above.
      </p>
    </section>
  );
};

export default PrivacyPolicy;
