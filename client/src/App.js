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

function App() {
  return (
    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
