import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import githubImg from "../assets/github.jpeg";
import jobImg from "../assets/job.jpeg";
//import driveImg from "../assets/drive.jpeg";
import my_blogImg from "../assets/my_blog.png";

const projects = [
  {
    title: "GitHub Clone",
    description:
      "Developed a GitHub clone using React.js, Express.js, Node.js, and MongoDB. Features include user authentication, REST APIs, and responsive UI.",
    tech: "HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB",
    image: githubImg,
    github: "https://github.com/Thirish07/GITHUB-Clone",
    demo: "https://your-demo-link.com",
  },
  {
    title: "Job Portal",
    description:
      "Built a dynamic job portal with React.js frontend and Express.js, Node.js, MongoDB backend. Includes responsive design and efficient data management.",
    tech: "HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB",
    image: jobImg,
    github: "https://github.com/Thirish07/job-lane",
    demo: "https://your-demo-link.com",
  },
  {
    title: "Blog Management System",
    description:
      "A secure blog platform using Node.js, Express.js, and MongoDB with authentication, categories, comments, likes, and Cloudinary integration for seamless content management and engagement.",
    tech: "MongoDB, Express.js, React.js, Node.js, HTML, CSS, JavaScript",
    image:my_blogImg ,
    github: "https://github.com/Thirish07/My_Blogg",
    demo: "https://your-demo-link.com",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden min-h-screen px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-white"
    >
      {/* Background Blobs */}
      <div className="absolute -top-10 -left-20 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-20 blur-3xl animate-pulse z-0"></div>
      <div className="absolute bottom-0 right-0 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-gradient-to-r from-pink-500 via-indigo-500 to-blue-500 rounded-full opacity-10 blur-2xl animate-ping z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-bold mb-12"
        >
          💻 My Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white dark:bg-gray-900 shadow-lg rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 flex flex-col hover:shadow-2xl transition-all"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 sm:h-48 object-cover"
              />

              {/* Content */}
              <div className="flex-1 p-4 sm:p-5 flex flex-col">
                <h3 className="text-lg sm:text-xl font-bold text-blue-600 dark:text-blue-400">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm mt-2 text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>
                <p className="mt-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  <strong>Tech Stack:</strong> {project.tech}
                </p>

                {/* Buttons */}
                <div className="mt-auto flex gap-3 pt-4 flex-wrap">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 text-xs sm:text-sm"
                  >
                    <FaGithub /> GitHub Link
                  </a>
                  {/* <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 text-xs sm:text-sm"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
