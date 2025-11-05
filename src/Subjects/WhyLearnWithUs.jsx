import React from "react";

export default function WhyLearnWithUs() {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-purple-100 to-pink-100">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-purple-700 mb-6">
          🌟 Why Learn With Us?
        </h2>
        <p className="text-lg text-gray-700 mb-12">
          IQGalaxy ek aisa platform hai jo learning ko boring nahi balki
          <span className="font-semibold text-purple-600"> adventure </span> 
          banata hai! 🚀
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:scale-105 transition">
            <div className="text-5xl mb-4">🎮</div>
            <h3 className="text-xl font-bold mb-2">Gamified Learning</h3>
            <p className="text-gray-600">
              Har subject ko interactive games ke through sikhna – 
              taaki padhai kabhi boring na lage.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:scale-105 transition">
            <div className="text-5xl mb-4">🤖</div>
            <h3 className="text-xl font-bold mb-2">AI-Powered Quizzes</h3>
            <p className="text-gray-600">
              Har level ke hisaab se automatic quizzes – 
              jo tumhe challenge aur motivate karte hain.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:scale-105 transition">
            <div className="text-5xl mb-4">🌍</div>
            <h3 className="text-xl font-bold mb-2">Real-World Knowledge</h3>
            <p className="text-gray-600">
              Sirf books hi nahi, balki culture, science aur technology ke 
              real-life examples ke saath learning.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:scale-105 transition">
            <div className="text-5xl mb-4">👩‍🏫</div>
            <h3 className="text-xl font-bold mb-2">Expert Mentors</h3>
            <p className="text-gray-600">
              Experienced teachers aur AI mentors jo har step par 
              tumhari madad karte hain.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:scale-105 transition">
            <div className="text-5xl mb-4">🎨</div>
            <h3 className="text-xl font-bold mb-2">Creative Learning</h3>
            <p className="text-gray-600">
              Drawing, stories aur activities ke through subjects ko 
              aur interesting banaya gaya hai.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:scale-105 transition">
            <div className="text-5xl mb-4">🏆</div>
            <h3 className="text-xl font-bold mb-2">Rewards & Achievements</h3>
            <p className="text-gray-600">
              Har progress par stars, badges aur leaderboard – 
              taaki motivation high rahe!
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}