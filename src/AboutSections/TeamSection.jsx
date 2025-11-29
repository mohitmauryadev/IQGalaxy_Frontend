import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
    {
    name: "Piyush Kumar",
    role: "Lead Developer & Team Leader",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQE94aPw7wC-mA/profile-displayphoto-crop_800_800/B56ZjTrgdOHMAI-/0/1755898056761?e=1763596800&v=beta&t=-cQJWWvUHUf-pqeVyTrhvuiVz86vn1mbeYt3FOULss4",
    description:
      "Project Manager & CEO, guiding IQGalaxy with strategic vision, strong leadership, and innovative direction",
  },
  {
    name: "Mohit Maurya",
    role: "Full Stack Developer",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQHYqoxkmsm_DQ/profile-displayphoto-scale_200_200/B56ZhsNtRVHMAc-/0/1754162191552?e=2147483647&v=beta&t=ICpZVQhICf00i8p4NCppyUhz6zsNKPY_VdRJ41A68mE",
    description:
      "Visionary founder, driving IQGalaxy's innovation with expertise in web & app development, blending creativity with technology.",
  },
  {
    name: "Piyush Shakya",
    role: "Head of Content & Frontend Developer",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQGbTTjDvDxzsQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1723461978409?e=2147483647&v=beta&t=YVa5K-MY2ZzCssbaqPZtPBXxBsiUOQjz6rjGkIrpTTs",
    description:
      "Crafts engaging designs and creative learning experiences, ensuring IQGalaxy stays modern, interactive, and child-friendly.",
  },
  
  {
    name: "Paras Sahu",
    role: "UI/UX Designer",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQGeEbP3nrtzJA/profile-displayphoto-shrink_800_800/B56ZpQCMbyKEAc-/0/1762279346734?e=1766016000&v=beta&t=vXmTZG_dMgbanWrhDAT1-EONeWhK6MRIEOh72hkkGkw",
    description:
      "Explores AI and modern tools to enhance adaptive learning, bringing intelligence and personalization to IQGalaxy.",
  },
   {
    name: "Neeraj Kumar Gupta",
    role: "Content Writer",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQGeEbP3nrtzJA/profile-displayphoto-shrink_800_800/B56ZpQCMbyKEAc-/0/1762279346734?e=1766016000&v=beta&t=vXmTZG_dMgbanWrhDAT1-EONeWhK6MRIEOh72hkkGkw",
    description:
      "Designs structured, fun, and effective learning content, aligning modern education with gamified learning experiences.",
  },
];

export default function TeamSection() {
  return (
    <section className="py-16 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Meet Our Team
        </motion.h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Behind IQGalaxy is a passionate team of innovators, educators, and
          tech enthusiasts working together to shape the future of learning.
        </p>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 shadow-lg rounded-2xl p-6 hover:shadow-2xl transition duration-300 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 rounded-full object-cover border-4 border-indigo-200 mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-indigo-600 font-medium mb-2">
                {member.role}
              </p>
              <p className="text-sm text-gray-600">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
