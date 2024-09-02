import React from 'react';
import { motion } from 'framer-motion';

const Mission = () => {
  return (
    <>
      {/* Motion div for medium screens and above */}
      <motion.div
        className="hidden md:flex justify-end items-end p-8 z-10 h-full"
        initial={{ x: 0 }}  // Start from the middle
        animate={{ x: '50%' }}  // Move to the right
        transition={{ duration: 1 }}  // Duration of the animation
      >
        <div className="max-w-2xl text-left">
            <h1 className='text-4xl text-white text-center font-bold'>Mission</h1>
            <p className="text-base sm:text-lg md:text-lg lg:text-lg text-white ">
            As a freelance software developer, my mission is to transform innovative ideas into functional, high-quality software solutions. I strive to deliver exceptional user experiences through custom designs and efficient code. My goal is to understand and meet each client's unique needs, ensuring that every project exceeds expectations. I am committed to continuous learning and leveraging the latest technologies to provide cutting-edge solutions. Ultimately, my mission is to empower businesses and individuals with technology that drives success and growth.
          </p>
        </div>
      </motion.div>

      {/* Static centered text for small screens */}
      <div className="flex md:hidden justify-center items-center p-8 z-10 h-full">
        <div className="max-w-2xl text-center">
        <h1 className='text-4xl text-white text-center font-bold'>Mission</h1>
          <p className="text-lg sm:text-xl text-white">
            As a freelance software developer, my mission is to transform innovative ideas into functional, high-quality software solutions. I strive to deliver exceptional user experiences through custom designs and efficient code. My goal is to understand and meet each client's unique needs, ensuring that every project exceeds expectations. I am committed to continuous learning and leveraging the latest technologies to provide cutting-edge solutions. Ultimately, my mission is to empower businesses and individuals with technology that drives success and growth.
          </p>
        </div>
      </div>
    </>
  );
};

export default Mission;
