import { useState } from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";
import Footer from "../Sections/Footer";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({ loading: false, success: null, message: "" });

  // ✅ Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, message: "" });

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/contact`, formData); // ⚠️ Update port if needed
      if (res.data.success) {
        setStatus({ loading: false, success: true, message: "✅ Email sent successfully!" });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({ loading: false, success: false, message: "❌ Failed to send email" });
      }
    } catch (err) {
      console.error("Email send error:", err);
      setStatus({
        loading: false,
        success: false,
        message: "⚠️ Server error. Please try again later.",
      });
    }
  };

  return (
    <div>
      <div className="relative bg-gradient-to-b from-white via-slate-50 to-white min-h-screen overflow-hidden py-20 px-6 md:px-20">
        {/* Animated Background Blobs */}
        <motion.div
          className="absolute top-10 left-10 w-48 h-48 bg-purple-300 rounded-full opacity-20 blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 12 }}
        />
        <motion.div
          className="absolute bottom-10 right-20 w-56 h-56 bg-pink-300 rounded-full opacity-20 blur-3xl"
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 15 }}
        />

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-[#ffbf00] text-center mb-6"
        >
          Contact <span className="text-indigo-600">IQGalaxy</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-slate-600 max-w-2xl mx-auto mb-16"
        >
          Reach out to us anytime! We love to hear from parents, teachers, or curious kids. 🚀
        </motion.p>

        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col gap-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
              required
            ></textarea>

            <button
              type="submit"
              disabled={status.loading}
              className={`px-6 py-4 font-semibold rounded-2xl transition ${
                status.loading
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-[linear-gradient(130deg,#007bff,#ffc107)] text-green-900 hover:bg-[linear-gradient(130deg,#ffc107,#007bff)]"
              }`}
            >
              {status.loading ? "Sending..." : "Send Message"}
            </button>

            {/* ✅ Message Feedback */}
            {status.message && (
              <p
                className={`text-center font-medium ${
                  status.success ? "text-green-600" : "text-red-600"
                }`}
              >
                {status.message}
              </p>
            )}
          </motion.form>

          {/* Contact Info + Social Media */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-10"
          >
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">Get in Touch</h2>
              <p className="text-slate-600">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:iqgalaxy.ai@gmail.com"
                  className="text-indigo-600 hover:underline"
                >
                  iqgalaxy.ai@gmail.com
                </a>
              </p>
              <p className="text-slate-600">
                <strong>Address:</strong> Lucknow, Uttar Pradesh, India
              </p>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">Follow Us</h2>
              <div className="flex gap-6">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-8 h-8 text-blue-600 hover:scale-110 transition" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-8 h-8 text-blue-400 hover:scale-110 transition" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-8 h-8 text-pink-500 hover:scale-110 transition" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-8 h-8 text-blue-700 hover:scale-110 transition" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <Youtube className="w-8 h-8 text-red-600 hover:scale-110 transition" />
                </a>
              </div>
            </div>

            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="text-center mt-6"
            >
              <p className="text-slate-500">We love to hear from you! 🌟</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
