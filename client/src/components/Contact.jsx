import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ success: false, message: "Please fill all fields." });
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ success: true, message: data.message });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ success: false, message: data.message || "Error sending message." });
      }
    } catch (error) {
      setStatus({ success: false, message: "Network error. Try again later." });
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden min-h-screen px-6 py-20 bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-white"
    >
      {/* Background blobs like hero */}
      <div className="absolute -top-10 -left-20 w-[400px] h-[400px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-20 blur-3xl animate-pulse z-0"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gradient-to-r from-pink-500 via-indigo-500 to-blue-500 rounded-full opacity-10 blur-2xl animate-ping z-0"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-3xl mx-auto"
      >
        <h2 className="text-4xl font-extrabold mb-10 text-center tracking-tight">
           Let's Connect!!
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-8 md:p-12 flex flex-col gap-7"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-transparent transition shadow-sm hover:shadow-md"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-transparent transition shadow-sm hover:shadow-md"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 resize-none focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-transparent transition shadow-sm hover:shadow-md"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-full py-3 font-semibold text-lg shadow-lg hover:brightness-110 hover:shadow-2xl transition duration-300"
          >
            Send Message
          </button>

          <AnimatePresence>
            {status && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`mt-3 text-center font-semibold ${
                  status.success ? "text-green-600" : "text-red-600"
                }`}
              >
                {status.message}
              </motion.p>
            )}
          </AnimatePresence>
        </form>

        {/* Separator */}
        <div className="my-8 border-t border-gray-300 dark:border-gray-700 max-w-md mx-auto"></div>

        {/* Friendly text above social links */}
        <p className="text-center max-w-md mx-auto mb-6 text-lg font-semibold text-gray-700 dark:text-gray-300 tracking-wide italic">
          Let’s stay in touch! Connect with me on any of the platforms below:
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-10 text-gray-600 dark:text-gray-400 text-4xl md:text-5xl transition-colors">
          <a
            href="mailto:thirisala2004@gmail.com"
            className="hover:text-blue-600 dark:hover:text-blue-400"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/thirisala"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-gray-100"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/thirisala-govindaraj-665970356/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 dark:hover:text-blue-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </motion.div>
      
    </section>
  );
};

export default Contact;

