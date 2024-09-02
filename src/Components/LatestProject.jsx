import React from 'react';
import ImageCarousel from '../modules/Carousel';
import { useNavigate } from 'react-router-dom';

const LatestProject = () => {
  const navigate=useNavigate()
  return (
    <div className="flex justify-center items-center p-8 z-10 h-full">
      <div className="max-w-4xl text-center">
        <h1 className="uppercase text-3xl sm:text-4xl font-bold mb-4 text-white text-center">
          Our Latest Project
        </h1>
        <div>
          <ImageCarousel />
        </div>
        <div className="pt-8"> {/* Add padding to separate from the carousel */}
          <h1 className="uppercase text-3xl sm:text-4xl font-bold mb-4 pt-4 text-white text-left">
            Technologies Used
          </h1>
          <ul className="text-lg text-gray-100 text-left space-y-2"> {/* Increase font size and add space between items */}
            <li>REACT</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
          </ul>
        </div>
        <div className="flex justify-center mt-6">
            <button  onClick={()=>navigate('/portfolio')} className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600">
            See Portfolio
            </button>
          </div>
      </div>
    </div>
  );
};

export default LatestProject;
