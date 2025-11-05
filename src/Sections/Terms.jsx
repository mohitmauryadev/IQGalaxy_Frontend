// src/pages/Terms.jsx
export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto p-6 pt-18">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

      <p className="mb-4">
        Welcome to <strong>IQGalaxy</strong>. By using our platform, you agree to comply with these Terms of Service. Please read them carefully.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Use of Platform</h2>
      <p className="mb-4">
        IQGalaxy provides educational tools and gamified learning experiences. Users must use the platform responsibly and not engage in activities that violate laws or harm others.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Account Responsibility</h2>
      <p className="mb-4">
        Users are responsible for maintaining the confidentiality of their account information and for all activities under their account.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Content</h2>
      <p className="mb-4">
        All content provided on IQGalaxy is for educational purposes. Unauthorized copying, redistribution, or commercial use of content is prohibited.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Limitation of Liability</h2>
      <p className="mb-4">
        IQGalaxy is not liable for any direct or indirect damages arising from the use or inability to use the platform.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Termination</h2>
      <p className="mb-4">
        We may suspend or terminate access to the platform at our discretion for violations of these Terms.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Changes to Terms</h2>
      <p className="mb-4">
        We reserve the right to update these Terms at any time. Continued use of the platform implies acceptance of the updated Terms.
      </p>

      <p className="mt-6 text-sm text-gray-500">
        © {new Date().getFullYear()} IQGalaxy. All rights reserved.
      </p>
    </div>
  );
}
