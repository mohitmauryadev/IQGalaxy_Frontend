// src/pages/Privacy.jsx
export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto p-6 pt-18">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        At <strong>IQGalaxy</strong>, we value the privacy and trust of our users. This Privacy Policy explains how we collect, use, and protect your personal information.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Personal information such as name, email, and account details.</li>
        <li>Usage data to improve our platform and user experience.</li>
        <li>Cookies and analytics data to enhance performance.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">How We Use Information</h2>
      <ul className="list-disc list-inside mb-4">
        <li>To provide and improve our educational platform.</li>
        <li>To personalize your experience and content.</li>
        <li>To send important updates, newsletters, and announcements.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Data Protection</h2>
      <p className="mb-4">
        We implement appropriate security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Third-Party Services</h2>
      <p className="mb-4">
        We may use third-party services like analytics or hosting providers. These services are bound to protect your information according to their privacy policies.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Children's Privacy</h2>
      <p className="mb-4">
        IQGalaxy is designed for children under parental supervision. We do not knowingly collect personal information from children without consent.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Changes to This Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. All changes will be posted on this page with the updated date.
      </p>

      <p className="mt-6 text-sm text-gray-500">
        © {new Date().getFullYear()} IQGalaxy. All rights reserved.
      </p>
    </div>
  );
}
