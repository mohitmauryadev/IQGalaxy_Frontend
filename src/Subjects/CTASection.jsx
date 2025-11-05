import React from "react";

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-6">
          🚀 Ready to Start Your Learning Adventure?
        </h2>
        <p className="text-lg mb-8">
          Join thousands of curious minds on IQGalaxy and explore knowledge in a
          fun, interactive, and gamified way. Learning has never been this
          exciting!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-2xl shadow-lg hover:bg-yellow-500 transition">
            Start Learning Now
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-white font-bold rounded-2xl shadow-lg hover:bg-white hover:text-indigo-700 transition">
            Explore Subjects
          </button>
        </div>

        <div className="mt-12">
          <p className="text-sm opacity-80">
            🎯 Fun • 📚 Knowledge • 🏆 Achievement • 🌍 Global Community
          </p>
        </div>
      </div>
    </section>
  );
}