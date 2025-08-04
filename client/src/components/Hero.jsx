// import React from 'react';
// import { motion } from 'framer-motion';
// import SkillSphere from './SkillSphere';

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="relative overflow-hidden min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 pt-10 md:pt-16"
//     >
//       {/* 🔵 Background Blob Top Left */}
//       <div className="absolute -top-10 -left-20 w-[400px] h-[400px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-20 blur-3xl animate-pulse z-0"></div>

//       {/* 🔴 Background Blob Bottom Right */}
//       <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gradient-to-r from-pink-500 via-indigo-500 to-blue-500 rounded-full opacity-10 blur-2xl animate-ping z-0"></div>

//       {/* 💬 Content */}
//       <div className="relative z-10 w-full flex flex-col-reverse md:flex-row items-center justify-center gap-10">
//         {/* Left Side */}
//         <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl">
//           <motion.h1
//             initial={{ opacity: 0, y: -30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white"
//           >
//             Hi, I'm{' '}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-text-shimmer">
//               Thirisala G
//             </span>
//             <br />
//             <span className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300">
//               Full Stack Developer & Programmer
//             </span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//             className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300"
//           >
//             Fresh perspective, real-world skills.
//           </motion.p>

//           <div className="mt-6 flex gap-4 flex-wrap justify-center md:justify-start">
//             <a
//               href="/Thirisala resume.pdf"
//               download
//               className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
//             >
//               📄 Download Resume
//             </a>
//             <a
//               href="mailto:thirisala2004@gmail.com"
//               className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
//             >
//               📧 Mail Me
//             </a>
//           </div>
//         </div>

//         {/* Right Side — 3D Sphere */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.5, duration: 0.8 }}
//           className="w-full md:w-[400px] h-[400px]"
//         >
//           <SkillSphere />
//         </motion.div>
//       </div>

//       {/* ⬇ Scroll Indicator */}
//       <a
//         href="#about"
//         className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10"
//       >
//         <div className="w-8 h-8 animate-bounce text-blue-400 dark:text-blue-300 text-2xl">
//           ↓
//         </div>
//       </a>
//     </section>
//   );
// };

// export default Hero;
import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import SkillSphere from './SkillSphere';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-[85vh] flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 pt-6"

    >
      {/* 🔵 Background Blob Top Left */}
      <div className="absolute -top-10 -left-20 w-[400px] h-[400px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-20 blur-3xl animate-pulse z-0"></div>

      {/* 🔴 Background Blob Bottom Right */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gradient-to-r from-pink-500 via-indigo-500 to-blue-500 rounded-full opacity-10 blur-2xl animate-ping z-0"></div>

      {/* 💬 Content */}
      <div className="relative z-10 w-full flex flex-col-reverse md:flex-row items-center justify-center gap-10">
        {/* Left Side */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white"
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
            className="mt-2 text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300 h-10"
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
            className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300"
          >
            Fresh perspective, real-world skills.
          </motion.p>

          <div className="mt-6 flex gap-4 flex-wrap justify-center md:justify-start">
            <a
              href="/Thirisala resume.pdf"
              download
              className="px-5 py-2.5 text-sm md:text-base font-medium text-white bg-blue-600 rounded-xl shadow hover:bg-blue-700 transition duration-300"
            >
               My Resume
            </a>
            <a
              href="mailto:thirisala2004@gmail.com"
              className="px-5 py-2.5 text-sm md:text-base font-medium text-white bg-gray-900 rounded-xl shadow hover:bg-gray-800 transition duration-300"
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
          className="w-full md:w-[400px] h-[400px]"
        >
          <SkillSphere />
        </motion.div>
      </div>

      {/* ⬇ Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-8 h-8 animate-bounce text-blue-400 dark:text-blue-300 text-2xl">
          ↓
        </div>
      </a>
    </section>
  );
};

export default Hero;
