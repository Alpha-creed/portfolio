import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate=useNavigate()
  return (
    <>
      {/* Animated section for desktop view */}
      <motion.div
        className="hidden md:flex justify-end items-end p-8 z-10 h-full"
        initial={{ x: 0 }} // Start from the middle
        animate={{ x: '-50%' }} // Move to the right
        transition={{ duration: 1 }} // Duration of the animation
      >
        <div className="max-w-2xl text-right">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white text-center">
            Services
          </h1>
          <p className="text-base sm:text-lg md:text-lg lg:text-lg text-white">
            <span className="text-blue-400">Website Development:</span> I can build anything from a basic informative site to a complex e-commerce platform, tailored to your needs.
            <br />
            <span className="text-blue-400">Website Design:</span> I’ll craft a visually stunning website that perfectly aligns with your brand identity and engages your audience effectively.
            <br />
            <span className="text-blue-400">E-commerce Solutions:</span> I specialize in setting up and optimizing online stores to enhance growth and maximize revenue for your business.
            <br />
            <span className="text-blue-400">Custom Web Applications:</span> Need a bespoke web application tailored to your unique needs? I provide custom solutions to meet your specific requirements.
            <br />
            <span className="text-blue-400">Website Maintenance:</span> I offer ongoing support and maintenance to ensure your website remains in top shape and performs smoothly over time.
          </p>
          {/* Centering the button for desktop view */}
          <div className="flex justify-center mt-6">
            <button onClick={()=>navigate('/services')} className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600">
              Get In Touch
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
            <span className="text-blue-400">Website Development:</span> I can build anything from a basic informative site to a complex e-commerce platform, tailored to your needs.
            <br />
            <span className="text-blue-400">Website Design:</span> I’ll craft a visually stunning website that perfectly aligns with your brand identity and engages your audience effectively.
            <br />
            <span className="text-blue-400">E-commerce Solutions:</span> I specialize in setting up and optimizing online stores to enhance growth and maximize revenue for your business.
            <br />
            <span className="text-blue-400">Custom Web Applications:</span> Need a bespoke web application tailored to your unique needs? I provide custom solutions to meet your specific requirements.
            <br />
            <span className="text-blue-400">Website Maintenance:</span> I offer ongoing support and maintenance to ensure your website remains in top shape and performs smoothly over time.
          </p>
          {/* Centering the button for mobile view */}
          <div className="flex justify-center mt-6">
            <button  onClick={()=>navigate('/services')} className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600">
            Get In Touch
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
