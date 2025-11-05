import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sophia, 9 yrs",
      feedback:
        "I love playing and learning together! It feels like a game but I get smarter every day.",
      img: "https://media.istockphoto.com/id/1012801996/photo/innovative-creative-idea-for-copyrights-law-concept-with-kid-surprised-reading-book-with.jpg?s=612x612&w=0&k=20&c=TOGXzC_sIbc_nmj4m3F0-kh5BHmm8RM0Mkzf_O0CXRM=",
    },
    {
      name: "Aarav, 10 yrs",
      feedback:
        "The rewards are so cool! I always try to finish my lessons to unlock new badges.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb4sJQ9zWcYycRhTgyQNdSH3rjBsrED5vXXzz-zhYWQlOGv6DS6EB_FxTqOoukBotCmqQ&usqp=CAU",
    },
    {
      name: "Mia, 8 yrs",
      feedback:
        "This is the best way to study! I never get bored and I can show my stars to my friends.",
      img: "https://media.istockphoto.com/id/1011590372/photo/school-education-and-literacy-concept-with-asian-girl-kid-student-learning-and-reading-book.jpg?s=612x612&w=0&k=20&c=-AlTZJZmAabheF9eHyZ885FS-ryuTh2Etq4lZRWOlkk=",
    },
    {
      name: "Ryan, 11 yrs",
      feedback:
        "It feels like an adventure every time I log in. Learning is fun now!",
      img: "https://www.shutterstock.com/image-photo/portrait-little-boy-studying-classroom-600nw-2491116325.jpg",
    },
     {
      name: "Sophia, 9 yrs",
      feedback:
        "I love playing and learning together! It feels like a game but I get smarter every day.",
      img: "https://www.shutterstock.com/image-photo/wow-online-school-happy-schoolgirl-260nw-2316931519.jpg",
    },
    {
      name: "Aarav, 10 yrs",
      feedback:
        "The rewards are so cool! I always try to finish my lessons to unlock new badges.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuBSJfFzT9K5MAIxLwL8nJ8hMNMw1J494FhH8zEqTRluper4nZKOl0ebr4n5gJAeeLb9c&usqp=CAU",
    },
    {
      name: "Mia, 8 yrs",
      feedback:
        "This is the best way to study! I never get bored and I can show my stars to my friends.",
      img: "https://static.vecteezy.com/system/resources/thumbnails/030/648/596/small/a-girl-is-reading-a-book-with-the-titlea-girl-free-photo.jpg",
    },
    {
      name: "Ryan, 5 yrs",
      feedback:
        "It feels like an adventure every time I log in. Learning is fun now!",
      img: "https://img.freepik.com/premium-photo/cute-baby-boy-suit-using-laptop_837220-4541.jpg",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-slate-800 mb-4"
        >
          What Kids Say ✨
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-slate-500 max-w-xl mx-auto mb-12"
        >
          Real voices from curious minds enjoying their learning journey 🎮📚
        </motion.p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden"
            >
              {/* Stars */}
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Feedback */}
              <p className="text-slate-600 italic mb-6">"{t.feedback}"</p>

              {/* Profile */}
              <div className="flex items-center justify-center gap-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-14 h-14 rounded-full border-4 border-slate-200 object-cover"
                />
                <div>
                  <h4 className="text-lg font-bold text-slate-800">{t.name}</h4>
                  <span className="text-sm text-slate-500">Student</span>
                </div>
              </div>

              {/* Animated background circle */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 6 }}
                className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-pink-300 to-yellow-300 rounded-full opacity-20 blur-xl"
              ></motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}