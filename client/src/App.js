import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Internship from './components/Internship';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  return (
    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Internship/>
      <Skills />
      <Projects/>
      <Contact/>
      <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-6 text-center text-sm select-none">
        <p>© {new Date().getFullYear()} Thirisala G. All rights reserved.</p>
        
      </footer>
    </div>
  );
}

export default App;
