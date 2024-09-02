import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Technol = () => {
  const navigate=useNavigate()
  return (
    <>
      {/* Animated section for desktop view */}
      <motion.div
        className="hidden md:flex justify-end items-end p-8 z-10 h-full"
        initial={{ x: 0 }} // Start from the middle
        animate={{ x: '50%' }} // Move to the right
        transition={{ duration: 1 }} // Duration of the animation
      >
        <div className="max-w-2xl text-left">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white text-center">
            Technologies
          </h1>
          <p className="text-base sm:text-lg md:text-lg lg:text-lg text-white">
          <span className="text-blue-400">Next.js:</span> I use Next.js, a powerful React framework, to build scalable and efficient web applications.
            <br />
            <span className="text-blue-400">Databases:</span> I work with various databases, selecting the best one tailored to your specific project requirements.
            <br />
            <span className="text-blue-400">Backend Development:</span> I develop robust admin panels for e-commerce and other platforms, utilizing a range of backend technologies.
          </p>
          {/* Centering the button for desktop view */}
          <div className="flex justify-center mt-6">
            <button onClick={()=>navigate('/technologies')} className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600">
              View The Technologies I use
            </button>
          </div>
        </div>
      </motion.div>

      {/* Static centered text for small screens */}
      <div className="flex md:hidden justify-center items-center p-8 z-10 h-full">
        <div className="max-w-2xl text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white text-center">
            Services
          </h1>
          <p className="text-lg sm:text-xl text-white">
          <span className="text-blue-400">Next.js:</span> I use Next.js, a powerful React framework, to build scalable and efficient web applications.
            <br />
            <span className="text-blue-400">Databases:</span> I work with various databases, selecting the best one tailored to your specific project requirements.
            <br />
            <span className="text-blue-400">Backend Development:</span> I develop robust admin panels for e-commerce and other platforms, utilizing a range of backend technologies.
          </p>  
          {/* Centering the button for mobile view */}
          <div className="flex justify-center mt-6">
            <button onClick={()=>navigate('/technologies')} className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600">
            Learn About My Technology Stack
                        </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Technol;
