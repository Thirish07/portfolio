import React from 'react';
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
  return (
    <section
      id="internship"
      className="min-h-screen flex flex-col items-center justify-start px-4 sm:px-6 lg:px-12 py-12 relative overflow-hidden text-gray-800 dark:text-white"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      <div className="absolute top-[-100px] left-[-100px] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 rounded-full opacity-20 blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Internships</h2>

        {/* Internship Cards */}
        <div className="flex flex-col gap-10">
          {internships.map((internship, idx) => (
            <div
              key={idx}
              className="w-full bg-white dark:bg-gray-900 rounded-xl shadow-xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 sm:gap-8 items-center md:items-start"
            >
              {/* Image */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={internship.image}
                  alt={internship.title}
                  className="w-full max-w-sm rounded-lg shadow-md object-cover"
                />
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-lg sm:text-2xl font-bold text-blue-600">{internship.title}</h3>
                <h4 className="text-sm sm:text-lg italic font-semibold text-indigo-500 mt-1">
                  {internship.role}
                </h4>
                <p className="text-xs sm:text-sm mt-2 text-gray-600 dark:text-gray-300">
                  {internship.duration}
                </p>
                <p className="text-sm sm:text-base mt-4 leading-relaxed text-gray-700 dark:text-gray-200">
                  {internship.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internship;
