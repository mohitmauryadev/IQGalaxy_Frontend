import React from "react";

export default function SuccessStories() {
  const stories = [
    {
      name: "Aarav",
      grade: "Class 3",
      story:
        "I improved my Maths score from 40% to 85% in just 3 months with IQGalaxy. Learning feels like playing!",
      image: "https://previews.123rf.com/images/muralinathypr/muralinathypr1307/muralinathypr130700018/20858106-indian-cute-school-boy.jpg",
    },
    {
      name: "Sanya",
      grade: "Class 4",
      story:
        "English grammar was always hard for me, but now I can write essays without mistakes. Thanks to the fun games!",
      image: "https://thumbs.dreamstime.com/b/child-girl-schoolgirl-elementary-school-student-123686003.jpg",
    },
    {
      name: "Krishna",
      grade: "Class 6",
      story:
        "Science experiments here made me fall in love with learning. I even won my school’s science fair!",
      image: "https://thumbs.dreamstime.com/b/portrait-elementary-pupil-looking-camera-cute-child-boy-classroom-near-blackboard-desk-happy-school-kids-lesson-172395467.jpg",
    },
    {
      name: "Meera",
      grade: "Class 5",
      story:
        "IQGalaxy helped me improve my GK and confidence. Now I participate in every quiz competition fearlessly!",
      image: "https://thumbs.dreamstime.com/b/cute-funny-smart-schoolgirl-books-back-to-school-kids-happy-child-clever-girl-go-to-first-grade-day-fall-copy-space-227178216.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-purple-700 mb-6">
          🌟 Success Stories
        </h2>
        <p className="text-gray-600 mb-12 text-lg">
          See how children are growing smarter, more confident, and happier with{" "}
          <span className="font-semibold text-purple-600">IQGalaxy</span>.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stories.map((s, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition duration-300 border border-purple-100"
            >
              <img
                src={s.image}
                alt={s.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 shadow-md"
              />
              <h3 className="text-xl font-bold text-purple-700">{s.name}</h3>
              <p className="text-sm text-gray-500 mb-3">{s.grade}</p>
              <p className="text-gray-600 italic">“{s.story}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}