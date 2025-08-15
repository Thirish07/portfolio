import React from 'react';
import { motion } from 'framer-motion';
import { UserIcon } from '@heroicons/react/24/solid';
import profileImage from '../assets/thirisala-photo.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden min-h-screen px-4 sm:px-6 py-12 sm:py-16 flex flex-col md:flex-row items-center justify-center gap-12 sm:gap-20 bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-gray-100"
    >
      {/* 🔵 Background Blobs */}
      <div className="absolute -top-10 -left-20 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full opacity-20 blur-3xl animate-pulse z-0"></div>
      <div className="absolute bottom-0 right-0 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-gradient-to-br from-pink-500 via-indigo-500 to-blue-500 rounded-full opacity-10 blur-2xl animate-ping z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-10 sm:gap-16">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-40 h-40 sm:w-52 sm:h-52 md:w-72 md:h-72 rounded-full overflow-hidden shadow-xl flex-shrink-0"
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
          className="max-w-lg text-center md:text-left px-2"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center justify-center md:justify-start gap-2">
            <UserIcon className="w-6 sm:w-7 h-6 sm:h-7 text-blue-500" />
            About Me
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-6">
            Hi, I'm <span className="font-semibold">Thirisala</span> — a passionate Full Stack Developer with a strong foundation in modern web technologies and problem-solving. I thrive in dynamic environments, combining creativity and logic to build scalable, user-focused applications. With a hunger to learn and grow, I'm excited to contribute to impactful projects and collaborate with forward-thinking teams.
          </p>
          <a
            href="https://drive.google.com/file/d/1pe7j2NFpMVoO0qw9wWp_GF7ieBVFVM1v/view?usp=drivesdk"
            download
            className="inline-block px-4 sm:px-5 py-2 text-sm sm:text-base bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition duration-300"
          >
            My Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
