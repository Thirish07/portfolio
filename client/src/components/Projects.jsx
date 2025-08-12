
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import githubImg from "../assets/github.jpeg";
import jobImg from "../assets/job.jpeg";
import driveImg from "../assets/drive.jpeg";

const projects = [
  {
    title: "GitHub Clone",
    description:
      "Developed a GitHub clone using React.js, Express.js, Node.js, and MongoDB. Features include user authentication, REST APIs, and responsive UI. Demonstrates full-stack skills and scalable deployment.",
    tech: "HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB",
    image: githubImg,
    github: "https://github.com/thirisala/Github_clone",
    demo: "https://your-demo-link.com",
  },
  {
    title: "Job Portal",
    description:
      "Built a dynamic job portal with React.js frontend and Express.js, Node.js, MongoDB backend. Includes responsive design, efficient data management, and Git for version control.",
    tech: "HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB",
    image: jobImg,
    github: "https://github.com/thirisala/job-lane",
    demo: "https://your-demo-link.com",
  },
  {
    title: "Drive Printing System",
    description:
      "A full-stack cloud storage platform with the PERN stack. Supports file/folder uploads, sharing with roles, recent activity, trash restore, and OTP authentication.",
    tech: "PostgreSQL, Express.js, React.js, Node.js, HTML, CSS, JavaScript, Redis",
    image: driveImg,
    github: "https://github.com/thirisala/drive-auth",
    demo: "https://your-demo-link.com",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-20 bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-white relative"
    >
      {/* Hero-style background glow */}
      <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-10 blur-3xl z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-12"
        >
          💻 My Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-900 shadow-lg rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 flex flex-col"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="flex-1 p-5 flex flex-col">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
                  {project.title}
                </h3>
                <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
                <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                  <strong>Tech Stack:</strong> {project.tech}
                </p>

                {/* Buttons */}
                <div className="mt-auto flex gap-3 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 text-sm"
                  >
                    <FaGithub /> GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 text-sm"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
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

