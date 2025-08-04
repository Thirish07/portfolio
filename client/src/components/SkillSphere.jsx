import React, { useEffect, useRef } from 'react';

const SkillSphere = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const skills = [
      'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express.js',
      'MongoDB', 'PostgreSQL', 'Java', 'OOPs', 'SQL', 'Git', 'Tailwind CSS'
    ];

    const options = {
      radius: 160,
      maxSpeed: 'normal',
      initSpeed: 'fast',
      keep: true,
    };

    // Remove any previously generated tags (prevents duplicate spheres)
    if (container && container.firstChild) {
      container.innerHTML = '';
    }

    if (window.TagCloud && container) {
      window.TagCloud(container, skills, options);
    }

    // Clean up on unmount
    return () => {
      if (container) container.innerHTML = '';
    };
  }, []);

  return (
    <div className="flex justify-center items-center h-full">
      <span
        ref={containerRef}
        className="tagcloud text-blue-500 dark:text-blue-300 text-lg"
      ></span>
    </div>
  );
};

export default SkillSphere;
