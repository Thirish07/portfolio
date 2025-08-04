
import React from 'react';
import { motion } from 'framer-motion';
import { UserIcon } from '@heroicons/react/24/solid';
import profileImage from '../assets/thirisala-photo.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden min-h-screen px-6 py-16 flex flex-col md:flex-row items-center justify-center gap-32 bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-gray-100"
    >
      {/* 🔵 Background Blobs */}
      <div className="absolute -top-10 -left-20 w-[400px] h-[400px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full opacity-20 blur-3xl animate-pulse z-0"></div>

      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gradient-to-br from-pink-500 via-indigo-500 to-blue-500 rounded-full opacity-10 blur-2xl animate-ping z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-20">
        {/* Left: Image */}
        <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-52 h-52 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl"
    >
  <img
    src={profileImage}
    alt="Thirisala"
    className="object-cover w-full h-full"
  />
</motion.div>

        {/* Right: Bio */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl text-center md:text-left"
        >
          {/* <h2 className="text-3xl font-bold mb-4">About Me</h2> */}
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center md:justify-start gap-2">
  <UserIcon className="w-7 h-7 text-blue-500" />
  About Me
</h2>
          <p className="text-lg leading-relaxed mb-6">
            Hi, I'm Thirisala -   a passionate Full Stack Developer with a strong foundation in modern web technologies and problem-solving. I thrive in dynamic environments, combining creativity and logic to build scalable, user-focused applications. With a hunger to learn and grow, I'm excited to contribute to impactful projects and collaborate with forward-thinking teams.
          </p>
          <a
            href="/Thirisala resume.pdf"
            download
            className="px-5 py-2.5 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition duration-300"
          >
            📄 Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
 