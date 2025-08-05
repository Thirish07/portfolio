
// import React from 'react';
// import { motion } from 'framer-motion';
// import mernImg from '../assets/mern.jpg';
// import awsImg from '../assets/aws_rcv6t.jpg';
// import mernCertificate from '../assets/mern-certificate.jpg';
// import awsCertificate from '../assets/aws-certificate.jpg';

// const internships = [
//   {
//     company: 'Channel B.Tech',
//     domain: 'MERN Stack Development',
//     duration: "19 Jun' 23 - 08 July' 23",
//     description:
//       'Developed a robust MERN stack web application using React, Node.js, Express, and MongoDB. Created a responsive front-end, seamless server integration, and scalable database structure. Worked collaboratively to meet deadlines and build a complete project.',
//     image: mernImg,
//     certificate: mernCertificate,
//     align: 'left',
//   },
//   {
//     company: '1CloudHub',
//     domain: 'AWS and DevOps',
//     duration: "18 Dec' 23 - 29 Dec' 23",
//     description:
//       'Implemented and optimized cloud-based solutions with AWS (EC2, S3, Lambda, RDS). Participated in deployment and maintenance tasks while contributing to reliable system design in team settings.',
//     image: awsImg,
//     certificate: awsCertificate,
//     align: 'right',
//   },
// ];

// const Internship = () => {
//   return (
//     <section
//       id="internships"
//       className="relative min-h-screen px-6 py-24 bg-gradient-to-br from-indigo-100 via-white to-purple-200 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white overflow-hidden"
//     >
//       {/* 🔵 Hero-style Background Blobs */}
//       <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full opacity-20 blur-3xl animate-pulse z-0"></div>
//       <div className="absolute bottom-[-80px] right-[-80px] w-[300px] h-[300px] bg-gradient-to-br from-pink-500 via-indigo-500 to-blue-500 rounded-full opacity-10 blur-2xl animate-ping z-0"></div>

//       <div className="relative z-10 max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold mb-16 text-center">
//           🚀 Internships
//         </h2>

//         <div className="space-y-20">
//           {internships.map((internship, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className={`flex flex-col md:flex-row items-center ${
//                 internship.align === 'right' ? 'md:flex-row-reverse' : ''
//               } gap-10 bg-gradient-to-br from-white via-indigo-50 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 rounded-2xl shadow-2xl p-6 md:p-10`}
//             >
//               {/* Image */}
//               <div className="md:w-1/2 w-full">
//                 <img
//                   src={internship.image}
//                   alt={`${internship.company} Internship`}
//                   className="rounded-lg shadow-lg w-full h-auto object-contain"
//                 />
//               </div>

//               {/* Details */}
//               <div className="md:w-1/2 w-full text-center md:text-left">
//                 <h3 className="text-2xl font-extrabold text-indigo-700 dark:text-indigo-300">
//                   {internship.company}
//                 </h3>
//                 <p className="text-md text-gray-700 dark:text-gray-300 italic mt-1 mb-2">
//                   {internship.domain}
//                 </p>
//                 <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
//                   {internship.duration}
//                 </p>
//                 <p className="mb-6 text-base leading-relaxed text-gray-800 dark:text-gray-200">
//                   {internship.description}
//                 </p>

//                 <a
//                   href={internship.certificate}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block px-6 py-2 bg-indigo-600 text-white font-semibold rounded-xl shadow hover:bg-indigo-700 transition duration-300"
//                 >
//                   📄 View Certificate
//                 </a>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Internship;
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import mernCert from '../assets/mern.jpg';
import awsCert from '../assets/aws_rcv6t.jpg';

const internships = [
  {
    title: 'Channel B.Tech',
    role: 'MERN Stack Development',
    date: "19 Jun' 23 - 08 July' 23",
    description:
      "I've adeptly mastered a range of MERN stack tools to develop a robust web application. Utilizing React, I crafted a responsive front-end, with Express and Node.js ensuring seamless server operations. MongoDB efficiently managed data, optimizing performance and scalability. This experience significantly enhanced my web development skills and underscored my ability to deliver top-tier projects within collaborative team environments.",
    image: mernCert,
  },
  {
    title: '1CloudHub',
    role: 'AWS and DevOps',
    date: '18 Dec 23 - 29 Dec 23',
    description:
      "Played pivotal role in implementing and optimizing cloud-based solutions during AWS internship. Demonstrated proficiency in leveraging AWS services (EC2, S3, Lambda, RDS) to architect scalable, reliable systems. Contributed to deployment and maintenance of applications on AWS cloud infrastructure through active team participation.",
    image: awsCert,
  },
];

const Internship = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // const handleScroll = (e) => {
  //   if (e.deltaY > 0 && index < internships.length - 1) {
  //     setDirection(1);
  //     setIndex((prev) => Math.min(prev + 1, internships.length - 1));
  //   } else if (e.deltaY < 0 && index > 0) {
  //     setDirection(-1);
  //     setIndex((prev) => Math.max(prev - 1, 0));
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('wheel', handleScroll, { passive: true });
  //   return () => window.removeEventListener('wheel', handleScroll);
  // }, [index]);
  useEffect(() => {
  let isThrottled = false;

  const handleScroll = (e) => {
    if (isThrottled) return;

    if (e.deltaY > 0 && index < internships.length - 1) {
      setDirection(1);
      setIndex((prev) => Math.min(prev + 1, internships.length - 1));
    } else if (e.deltaY < 0 && index > 0) {
      setDirection(-1);
      setIndex((prev) => Math.max(prev - 1, 0));
    }

    isThrottled = true;
    setTimeout(() => {
      isThrottled = false;
    }, 800); // Adjust delay (ms) between scrolls
  };

  window.addEventListener('wheel', handleScroll, { passive: true });
  return () => window.removeEventListener('wheel', handleScroll);
}, [index]);


  const internship = internships[index];

  return (
    <section
      id="internship"
      className="relative min-h-screen px-6 py-24 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-950 dark:to-gray-900 text-gray-800 dark:text-white overflow-hidden"
    >
      <h2 className="text-3xl font-bold mb-12 text-center">Internships</h2>

      <div className="relative h-[500px] md:h-[550px] max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: direction > 0 ? 100 : -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: direction > 0 ? -100 : 100 }}
            transition={{ duration: 0.6 }}
            className="absolute w-full h-full flex flex-col md:flex-row items-center justify-between gap-8 bg-white dark:bg-gray-800 shadow-2xl p-10 rounded-xl"
          >
            {/* Left Side - Content */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">{internship.title}</h3>
              <p className="text-lg font-semibold mt-2">{internship.role}</p>
              <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">{internship.date}</p>
              <p className="text-base leading-relaxed text-gray-700 dark:text-gray-200">
                {internship.description}
              </p>
            </div>

            {/* Right Side - Certificate */}
            <div className="flex-1 flex justify-center">
              <img
                src={internship.image}
                alt="Certificate"
                className="w-[300px] h-auto rounded-lg shadow-lg border border-gray-300 dark:border-gray-600"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Internship;
