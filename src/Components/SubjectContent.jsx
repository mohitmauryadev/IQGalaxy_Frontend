import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Footer from "../Sections/Footer";

const SubjectContent = () => {
  const { subjectId } = useParams();
  const [subject, setSubject] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!subjectId) return;
    axios
      .get(`${import.meta.env.VITE_API_URL}/subjects/${subjectId}`)
      .then((res) => setSubject(res.data))
      .catch((err) => {
        console.error("Error:", err);
        setError("Unable to load subject data.");
      });
  }, [subjectId]);

  if (error)
    return (
      <p className="text-center mt-20 text-xl font-semibold text-red-600">
        {error}
      </p>
    );

  if (!subject)
    return (
      <p className="text-center mt-20 text-xl font-semibold text-gray-600">
        Loading...
      </p>
    );

  return (
    <div>
    <div className="max-w-4xl mx-auto mt-16 px-6 pt-20">
    

      {/* Topic Title */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-purple-700 text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        {subject.topicName}
      </motion.h1>

        {/* Topic Image */}
      {subject.imageURL && (
        <motion.img
          src={subject.imageURL}
          alt={subject.topicName}
          className="mx-auto rounded-xl shadow-lg w-full max-w-md mb-8 object-cover"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
      )}

      {/* Content */}
      <motion.div
        className="bg-white shadow-md rounded-2xl p-8 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <p className="text-gray-700 text-lg leading-relaxed mb-6">{subject.content}</p>

        {/* Key Points */}
        {subject.keyPoints?.length > 0 && (
          <ul className="list-disc list-inside mb-6">
            {subject.keyPoints.map((point, i) => (
              <li key={i} className="text-gray-700 mb-2">
                {point}
              </li>
            ))}
          </ul>
        )}

        {/* Video */}
        {subject.videoURL && (
          <div className="relative w-full pt-[56.25%] mb-6">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
              src={subject.videoURL.replace("watch?v=", "embed/")}
              title="Subject Video"
              allowFullScreen
            />
          </div>
        )}
      </motion.div>
    </div>
    <Footer/>
    </div>
  );
};

export default SubjectContent;
