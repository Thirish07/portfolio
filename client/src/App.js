// import React from 'react';
// import Navbar from './components/Navbar';

// function App() {
//   return (
//     <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
//       <Navbar />
//       <main className="flex flex-col items-center justify-center py-20 text-center text-2xl font-semibold">
//         Hello Thirisala 👋 — Portfolio Coming Soon!
//       </main>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Internship from './components/Internship';
import Skills from './components/Skills';


function App() {
  return (
    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Internship/>
      <Skills />
    </div>
  );
}

export default App;
