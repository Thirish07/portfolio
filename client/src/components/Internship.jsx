// import React, { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import mernCert from '../assets/mern.jpg';
// import awsCert from '../assets/aws_rcv6t.jpg';

// const internships = [
//   {
//     title: 'Channel B.Tech',
//     role: 'MERN Stack Development',
//     date: "19 Jun' 23 - 08 July' 23",
//     description:
//       "I've adeptly mastered a range of MERN stack tools to develop a robust web application. Utilizing React, I crafted a responsive front-end, with Express and Node.js ensuring seamless server operations. MongoDB efficiently managed data, optimizing performance and scalability. This experience significantly enhanced my web development skills and underscored my ability to deliver top-tier projects within collaborative team environments.",
//     image: mernCert,
//   },
//   {
//     title: '1CloudHub',
//     role: 'AWS and DevOps',
//     date: '18 Dec 23 - 29 Dec 23',
//     description:
//       "Played pivotal role in implementing and optimizing cloud-based solutions during AWS internship. Demonstrated proficiency in leveraging AWS services (EC2, S3, Lambda, RDS) to architect scalable, reliable systems. Contributed to deployment and maintenance of applications on AWS cloud infrastructure through active team participation.",
//     image: awsCert,
//   },
// ];

// const Internship = () => {
//   const [index, setIndex] = useState(0);
//   const [direction, setDirection] = useState(1);

//   // const handleScroll = (e) => {
//   //   if (e.deltaY > 0 && index < internships.length - 1) {
//   //     setDirection(1);
//   //     setIndex((prev) => Math.min(prev + 1, internships.length - 1));
//   //   } else if (e.deltaY < 0 && index > 0) {
//   //     setDirection(-1);
//   //     setIndex((prev) => Math.max(prev - 1, 0));
//   //   }
//   // };

//   // useEffect(() => {
//   //   window.addEventListener('wheel', handleScroll, { passive: true });
//   //   return () => window.removeEventListener('wheel', handleScroll);
//   // }, [index]);
//   useEffect(() => {
//   let isThrottled = false;

//   const handleScroll = (e) => {
//     if (isThrottled) return;

//     if (e.deltaY > 0 && index < internships.length - 1) {
//       setDirection(1);
//       setIndex((prev) => Math.min(prev + 1, internships.length - 1));
//     } else if (e.deltaY < 0 && index > 0) {
//       setDirection(-1);
//       setIndex((prev) => Math.max(prev - 1, 0));
//     }

//     isThrottled = true;
//     setTimeout(() => {
//       isThrottled = false;
//     }, 800); // Adjust delay (ms) between scrolls
//   };

//   window.addEventListener('wheel', handleScroll, { passive: true });
//   return () => window.removeEventListener('wheel', handleScroll);
// }, [index]);


//   const internship = internships[index];

//   return (
//     <section
//       id="internship"
//       className="relative min-h-screen px-6 py-24 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-950 dark:to-gray-900 text-gray-800 dark:text-white overflow-hidden"
//     >
//       <h2 className="text-3xl font-bold mb-12 text-center">Internships</h2>

//       <div className="relative h-[500px] md:h-[550px] max-w-6xl mx-auto">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: direction > 0 ? 100 : -100 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: direction > 0 ? -100 : 100 }}
//             transition={{ duration: 0.6 }}
//             className="absolute w-full h-full flex flex-col md:flex-row items-center justify-between gap-8 bg-white dark:bg-gray-800 shadow-2xl p-10 rounded-xl"
//           >
//             {/* Left Side - Content */}
//             <div className="flex-1">
//               <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">{internship.title}</h3>
//               <p className="text-lg font-semibold mt-2">{internship.role}</p>
//               <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">{internship.date}</p>
//               <p className="text-base leading-relaxed text-gray-700 dark:text-gray-200">
//                 {internship.description}
//               </p>
//             </div>

//             {/* Right Side - Certificate */}
//             <div className="flex-1 flex justify-center">
//               <img
//                 src={internship.image}
//                 alt="Certificate"
//                 className="w-[300px] h-auto rounded-lg shadow-lg border border-gray-300 dark:border-gray-600"
//               />
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// };

// export default Internship;
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
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-white overflow-hidden"
    >
      <h2 className="text-3xl font-bold mb-4">Internships</h2>
      

      <div className="relative w-full max-w-5xl h-[500px]">
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
    </section>
  );
};

export default Internship;
