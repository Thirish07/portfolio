import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import mernImage from '../assets/mern.jpg';
import awsImage from '../assets/aws_rcv6t.jpg';

const internships = [
  {
    title: 'Channel B.tech',
    role: 'MERN Stack Development',
    duration: "19 Jun' 23 - 08 July' 23",
    description:
      "I've adeptly mastered a range of MERN stack tools to develop a robust web application. Utilizing React, I crafted a responsive front-end, with Express and Node.js ensuring seamless server operations. MongoDB efficiently managed data, optimizing performance and scalability.",
    image: mernImage,
  },
  {
    title: '1CloudHub',
    role: 'AWS and DevOps',
    duration: '18 Dec 23 - 29 Dec 23',
    description:
      'Played pivotal role in implementing and optimizing cloud-based solutions during AWS internship. Demonstrated proficiency in leveraging AWS services (EC2, S3, Lambda, RDS) to architect scalable, reliable systems.',
    image: awsImage,
  },
];

const Internship = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = down, -1 = up

  useEffect(() => {
    let isThrottled = false;

    const handleScroll = (e) => {
      if (isThrottled) return;

      if (e.deltaY > 0 && index < internships.length - 1) {
        setDirection(1);
        setIndex((prev) => prev + 1);
      } else if (e.deltaY < 0 && index > 0) {
        setDirection(-1);
        setIndex((prev) => prev - 1);
      }

      isThrottled = true;
      setTimeout(() => {
        isThrottled = false;
      }, 2200); // throttle duration
    };

    window.addEventListener('wheel', handleScroll, { passive: true });
    return () => window.removeEventListener('wheel', handleScroll);
  }, [index]);

  const slideVariants = {
    initial: (direction) => ({
      y: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7 },
    },
    exit: (direction) => ({
      y: direction > 0 ? -100 : 100,
      opacity: 0,
      transition: { duration: 0.7 },
    }),
  };

  const internship = internships[index];

  return (
    <section
      id="internship"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden text-gray-800 dark:text-white"
    >
      {/* 🌈 Hero-like Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 rounded-full opacity-20 blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl">
        <h2 className="text-3xl font-bold mb-4 text-center">Internships</h2>

        <div className="relative w-full h-[500px]">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute w-full h-full bg-white dark:bg-gray-900 rounded-xl shadow-xl p-8 flex flex-col md:flex-row gap-8 items-center justify-between"
            >
              {/* Left: Image */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={internship.image}
                  alt={internship.title}
                  className="max-h-72 rounded-lg shadow-md"
                />
              </div>

              {/* Right: Content */}
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold text-blue-600">{internship.title}</h3>
                <h4 className="text-lg italic font-semibold text-indigo-500 mt-1">{internship.role}</h4>
                <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">{internship.duration}</p>
                <p className="text-base mt-4 leading-relaxed text-gray-700 dark:text-gray-200">
                  {internship.description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Internship;
