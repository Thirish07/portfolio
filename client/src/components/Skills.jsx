
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// import {
//   FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaGithub,
//   FaJava, FaDatabase,
// } from 'react-icons/fa';
// import {
//   SiTailwindcss, SiMongodb, SiPostgresql, SiExpress, SiRedux, SiBootstrap, SiVisualstudio, SiPostman,
// } from 'react-icons/si';

// const VsCodeIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 256 256"
//     className="w-8 h-8"
//   >
//       <path fill="#0065A9" d="M128 0l-.4 0c-3.5 0-7 1.1-9.8 3.2L9.6 88.5c-8.3 6.2-8.3 18.7 0 24.9l31.5 23.4 109.4-81.3 80.6 60.5 22.9-17.2c8.3-6.2 8.3-18.7 0-24.9L137.8 3.2c-2.9-2.1-6.3-3.2-9.8-3.2z"/>
//       <path fill="#007ACC" d="M9.6 142.6l108.2 80.3c2.9 2.1 6.3 3.2 9.8 3.2 3.5 0 7-1.1 9.8-3.2l117.9-87.5c8.3-6.2 8.3-18.7 0-24.9l-22.9-17.2-80.6 60.5-109.4-81.3L9.6 142.6z"/>
//       <path fill="#1F9CF0" d="M148.9 61.3l-109.4 81.3 109.4 81.3c2.9 2.1 6.3 3.2 9.8 3.2 3.5 0 7-1.1 9.8-3.2l117.9-87.5c8.3-6.2 8.3-18.7 0-24.9l-117.9-87.5c-2.9-2.1-6.3-3.2-9.8-3.2-3.5 0-7 1.1-9.8 3.2z"/>
//   </svg>
// );

// const skills = {
//   Frontend: [
//     { name: 'HTML', icon: <FaHtml5 className="text-orange-600" /> },
//     { name: 'CSS', icon: <FaCss3Alt className="text-blue-600" /> },
//     { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500" /> },
//     { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" /> },
//     { name: 'React.js', icon: <FaReact className="text-sky-500" /> },
//     { name: 'Redux', icon: <SiRedux className="text-purple-600" /> },
//     { name: 'Bootstrap', icon: <SiBootstrap className="text-indigo-500" /> },
//   ],
//   Backend: [
//     { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
//     { name: 'Express.js', icon: <SiExpress className="text-gray-300" /> },
//     { name: 'REST API', icon: <FaNodeJs className="text-blue-500" /> },
//   ],
//   Database: [
//     { name: 'MongoDB', icon: <SiMongodb className="text-green-700" /> },
//     { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-700" /> },
//   ],
//   Programming: [
//     { name: 'Java', icon: <FaJava className="text-red-500" /> },
//     { name: 'OOPs', icon: <FaJava className="text-purple-500" /> },
//     { name: 'SQL', icon: <FaDatabase className="text-gray-600" /> },
//   ],
//   Tools: [
//   { name: 'Git', icon: <FaGitAlt className="text-orange-500" /> },
//   { name: 'GitHub', icon: <FaGithub className="text-gray-800 dark:text-white" /> },
//   { name: 'Postman', icon: <SiPostman className="text-pink-600" /> },
//   { name: 'VS Code', icon: <VsCodeIcon /> },
// ],

// };



// const categories = ['All', ...Object.keys(skills)];

// const SkillBadge = ({ skill }) => (
//   <motion.div
//     whileHover={{ scale: 1.1 }}
//     className="flex flex-col items-center gap-2 w-24 p-3 rounded-xl bg-gray-200 dark:bg-gray-800 shadow-md"
//   >
//     <div className="text-3xl">{skill.icon}</div>
//     <div className="text-sm font-semibold text-gray-700 dark:text-gray-100 text-center">{skill.name}</div>
//   </motion.div>
// );

// const Skills = () => {
//   const [selectedCategory, setSelectedCategory] = useState('All');

//   const getFilteredSkills = () => {
//     if (selectedCategory === 'All') {
//       return Object.values(skills).flat();
//     }
//     return skills[selectedCategory];
//   };

//   return (
//     <section
//       id="skills"
//      className="min-h-screen px-6 py-20 relative overflow-hidden text-gray-800 dark:text-white"
//      >
//     <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
//     <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full opacity-20 blur-3xl"></div>
//     <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 rounded-full opacity-20 blur-3xl"></div>
//     <div className="relative z-10 max-w-6xl mx-auto text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-3xl font-bold mb-12"
//         >
//           🚀 My Skills
//         </motion.h2>

//         {/* Category Tabs */}
//         <div className="flex flex-wrap justify-center gap-4 mb-10">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setSelectedCategory(cat)}
//               className={`px-4 py-2 rounded-full border text-sm font-semibold transition-all duration-300 ${
//                 selectedCategory === cat
//                   ? 'bg-blue-600 text-white border-blue-600'
//                   : 'bg-transparent border-gray-500 dark:border-gray-300 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white'
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Skills Grid */}
//         <div className="flex flex-wrap gap-6 justify-center">
//           <AnimatePresence>
//             {getFilteredSkills().map((skill, index) => (
//               <SkillBadge key={index} skill={skill} />
//             ))}
//           </AnimatePresence>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaGithub,
  FaJava, FaDatabase,
} from 'react-icons/fa';
import {
  SiTailwindcss, SiMongodb, SiPostgresql, SiExpress, SiRedux, SiBootstrap, SiVisualstudio, SiPostman,
} from 'react-icons/si';

const VsCodeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    className="w-7 h-7 sm:w-8 sm:h-8"
  >
    <path fill="#0065A9" d="M128 0l-.4 0c-3.5 0-7 1.1-9.8 3.2L9.6 88.5c-8.3 6.2-8.3 18.7 0 24.9l31.5 23.4 109.4-81.3 80.6 60.5 22.9-17.2c8.3-6.2 8.3-18.7 0-24.9L137.8 3.2c-2.9-2.1-6.3-3.2-9.8-3.2z"/>
    <path fill="#007ACC" d="M9.6 142.6l108.2 80.3c2.9 2.1 6.3 3.2 9.8 3.2 3.5 0 7-1.1 9.8-3.2l117.9-87.5c8.3-6.2 8.3-18.7 0-24.9l-22.9-17.2-80.6 60.5-109.4-81.3L9.6 142.6z"/>
    <path fill="#1F9CF0" d="M148.9 61.3l-109.4 81.3 109.4 81.3c2.9 2.1 6.3 3.2 9.8 3.2 3.5 0 7-1.1 9.8-3.2l117.9-87.5c8.3-6.2 8.3-18.7 0-24.9l-117.9-87.5c-2.9-2.1-6.3-3.2-9.8-3.2-3.5 0-7 1.1-9.8 3.2z"/>
  </svg>
);

const skills = {
  Frontend: [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-600" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-600" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500" /> },
    { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" /> },
    { name: 'React.js', icon: <FaReact className="text-sky-500" /> },
    { name: 'Redux', icon: <SiRedux className="text-purple-600" /> },
    { name: 'Bootstrap', icon: <SiBootstrap className="text-indigo-500" /> },
  ],
  Backend: [
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
    { name: 'Express.js', icon: <SiExpress className="text-gray-300" /> },
    { name: 'REST API', icon: <FaNodeJs className="text-blue-500" /> },
  ],
  Database: [
    { name: 'MongoDB', icon: <SiMongodb className="text-green-700" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-700" /> },
  ],
  Programming: [
    { name: 'Java', icon: <FaJava className="text-red-500" /> },
    { name: 'OOPs', icon: <FaJava className="text-purple-500" /> },
    { name: 'SQL', icon: <FaDatabase className="text-gray-600" /> },
  ],
  Tools: [
    { name: 'Git', icon: <FaGitAlt className="text-orange-500" /> },
    { name: 'GitHub', icon: <FaGithub className="text-gray-800 dark:text-white" /> },
    { name: 'Postman', icon: <SiPostman className="text-pink-600" /> },
    { name: 'VS Code', icon: <VsCodeIcon /> },
  ],
};

const categories = ['All', ...Object.keys(skills)];

const SkillBadge = ({ skill }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    className="flex flex-col items-center gap-2 p-3 rounded-xl bg-gray-200 dark:bg-gray-800 shadow-md w-full sm:w-28"
  >
    <div className="text-2xl sm:text-3xl">{skill.icon}</div>
    <div className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-100 text-center">{skill.name}</div>
  </motion.div>
);

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const getFilteredSkills = () => {
    if (selectedCategory === 'All') {
      return Object.values(skills).flat();
    }
    return skills[selectedCategory];
  };

  return (
    <section
      id="skills"
      className="min-h-screen px-4 sm:px-6 py-14 sm:py-20 relative overflow-hidden text-gray-800 dark:text-white"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      <div className="absolute top-[-100px] left-[-100px] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 rounded-full opacity-20 blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-bold mb-10 sm:mb-12"
        >
          🚀 My Skills
        </motion.h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border text-xs sm:text-sm font-semibold transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-transparent border-gray-500 dark:border-gray-300 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          <AnimatePresence>
            {getFilteredSkills().map((skill, index) => (
              <SkillBadge key={index} skill={skill} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skills;

