
// import React from 'react';
// import { AcademicCapIcon } from '@heroicons/react/24/solid';
// import { motion } from 'framer-motion';

// const educationData = [
//       {
//     title: "Sri Eshwar College of Engineering, Coimbatore",
//     degree: "B.Tech in Information Technology",
//     grade: "CGPA: 8.16 / 10",
//     duration: "Oct 2021 - May 2025",
//   },
//    {
//     title: "SRT Universal Matriculation HSc School, Sathyamangalam",
//     degree: "12th - State Board",
//     grade: "Percentage: 92.3%",
//     duration: "Jun 2020 - Apr 2021",
//   },
//   {
//     title: "Holy Redeemer's Matriculation School, Bhavanisagar",
//     degree: "10th - State Board",
//     grade: "Percentage: 92.8%",
//     duration: "Jun 2018 - Apr 2019",
//   },
 

// ];

// const Education = () => {
//   return (
//     <section
//       id="education"
//       className="relative min-h-screen px-6 py-20 bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-white"
//     >
//       {/* 🔮 Background Blobs */}
//       <div className="absolute -top-20 -left-32 w-[400px] h-[400px] bg-gradient-to-tr from-blue-400 via-purple-500 to-pink-500 rounded-full opacity-20 blur-3xl animate-pulse z-0"></div>
//       <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gradient-to-br from-pink-500 via-indigo-500 to-blue-500 rounded-full opacity-10 blur-2xl animate-ping z-0"></div>

//       <div className="relative z-10 max-w-4xl mx-auto">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-3xl font-bold mb-16 flex items-center gap-3 justify-center"
//         >
//           <AcademicCapIcon className="w-7 h-7 text-blue-600" />
//           Education
//         </motion.h2>

//         <div className="relative border-l-4 border-blue-500 ml-4 space-y-12">
//           {educationData.map((edu, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//               className="relative pl-10"
//             >
//               {/* Dot */}
//               <div className="absolute -left-[10px] top-2 w-5 h-5 bg-blue-600 rounded-full border-4 border-white dark:border-gray-950 z-10" />

//               {/* Card */}
//               <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
//                 <h3 className="text-lg font-bold">{edu.title}</h3>
//                 <p className="text-blue-600 font-semibold italic mt-1">{edu.degree}</p>
//                 <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">{edu.grade}</p>
//                 <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{edu.duration}</p>


//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Education;


import React from 'react';
import { AcademicCapIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

const educationData = [
  {
    title: "Sri Eshwar College of Engineering, Coimbatore",
    degree: "B.Tech in Information Technology",
    grade: "CGPA: 8.16 / 10",
    duration: "Oct 2021 - May 2025",
  },
  {
    title: "SRT Universal Matriculation HSc School, Sathyamangalam",
    degree: "12th - State Board",
    grade: "Percentage: 92.3%",
    duration: "Jun 2020 - Apr 2021",
  },
  {
    title: "Holy Redeemer's Matriculation School, Bhavanisagar",
    degree: "10th - State Board",
    grade: "Percentage: 92.8%",
    duration: "Jun 2018 - Apr 2019",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="relative min-h-screen px-4 sm:px-6 lg:px-12 py-16 sm:py-20 bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-white"
    >
      {/* 🔮 Background Blobs */}
      <div className="absolute -top-20 -left-32 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-gradient-to-tr from-blue-400 via-purple-500 to-pink-500 rounded-full opacity-20 blur-3xl animate-pulse z-0"></div>
      <div className="absolute bottom-0 right-0 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-gradient-to-br from-pink-500 via-indigo-500 to-blue-500 rounded-full opacity-10 blur-2xl animate-ping z-0"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-bold mb-12 sm:mb-16 flex items-center gap-3 justify-center text-center"
        >
          <AcademicCapIcon className="w-6 sm:w-7 h-6 sm:h-7 text-blue-600" />
          Education
        </motion.h2>

        <div className="relative border-l-4 border-blue-500 ml-2 sm:ml-4 space-y-10 sm:space-y-12">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 sm:pl-10"
            >
              {/* Dot */}
              <div className="absolute -left-[9px] sm:-left-[10px] top-2 w-4 sm:w-5 h-4 sm:h-5 bg-blue-600 rounded-full border-4 border-white dark:border-gray-950 z-10" />

              {/* Card */}
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold">{edu.title}</h3>
                <p className="text-blue-600 font-semibold italic mt-1 text-sm sm:text-base">
                  {edu.degree}
                </p>
                <p className="text-xs sm:text-sm mt-1 text-gray-700 dark:text-gray-300">
                  {edu.grade}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-2">
                  {edu.duration}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
