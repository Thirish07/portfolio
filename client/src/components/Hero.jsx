import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import SkillSphere from './SkillSphere';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-[115vh] flex flex-col md:flex-row items-center justify-center gap-8 px-4 sm:px-8 md:px-12 pt-12 pb-12"
    >
      {/* 🔵 Background Blob Top Left */}
      <div className="absolute -top-30 -left-20 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-20 blur-3xl animate-pulse z-0"></div>

      {/* 🔴 Background Blob Bottom Right */}
      <div className="absolute bottom-0 right-0 w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] bg-gradient-to-r from-pink-500 via-indigo-500 to-blue-500 rounded-full opacity-10 blur-2xl animate-ping z-0"></div>

      {/* 💬 Content */}
      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-center gap-10 max-w-7xl mx-auto">
        
        {/* Left Side */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug text-gray-800 dark:text-white"
          >
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-text-shimmer">
              Thirisala G
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-2 text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300 h-10"
          >
            <Typewriter
              words={['Full Stack Developer', 'Programmer']}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={60}
              delaySpeed={1500}
            />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-md"
          >
            Fresh perspective, real-world skills.
          </motion.p>

          {/* Buttons */}
          <div className="mt-6 flex gap-4 flex-wrap justify-center md:justify-start w-full sm:w-auto">
            <a
              href="https://drive.google.com/file/d/1pe7j2NFpMVoO0qw9wWp_GF7ieBVFVM1v/view?usp=drivesdk"
              download
              className="px-5 py-2.5 text-sm sm:text-base font-medium text-white bg-blue-600 rounded-xl shadow hover:bg-blue-700 transition duration-300 w-full sm:w-auto text-center"
            >
              My Resume
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 text-sm sm:text-base font-medium text-white bg-gray-900 rounded-xl shadow hover:bg-gray-800 transition duration-300 w-full sm:w-auto text-center"
            >
              Mail Me
            </a>
          </div>
        </div>

        {/* Right Side — 3D Sphere */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] h-[250px] sm:h-[350px] md:h-[400px]"
        >
          <SkillSphere />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
