
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaGithub,
  FaJava, FaDatabase,
} from 'react-icons/fa';
import {
  SiTailwindcss, SiMongodb, SiPostgresql, SiExpress, SiJavascript,
} from 'react-icons/si';

const skills = {
  Frontend: [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-600" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-600" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500" /> },
    { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" /> },
    { name: 'React.js', icon: <FaReact className="text-sky-500" /> },
    { name: 'Redux', icon: <SiJavascript className="text-purple-500" /> },
    { name: 'Bootstrap', icon: <FaCss3Alt className="text-indigo-400" /> },
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
    { name: 'Postman', icon: <FaGithub className="text-pink-600" /> },
    { name: 'VS Code', icon: <FaReact className="text-blue-500" /> },
  ],
};


const categories = ['All', ...Object.keys(skills)];

const SkillBadge = ({ skill }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    className="flex flex-col items-center gap-2 w-24 p-3 rounded-xl bg-gray-200 dark:bg-gray-800 shadow-md"
  >
    <div className="text-3xl">{skill.icon}</div>
    <div className="text-sm font-semibold text-gray-700 dark:text-gray-100 text-center">{skill.name}</div>
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
      className="min-h-screen px-6 py-20 bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-white relative"
    >
      {/* 💫 Background Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full opacity-10 blur-3xl z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-12"
        >
          🚀 My Skills
        </motion.h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full border text-sm font-semibold transition-all duration-300 ${
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
        <div className="flex flex-wrap gap-6 justify-center">
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


