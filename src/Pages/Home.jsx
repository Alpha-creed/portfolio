import React from 'react';
import Header from '../Components/Header';
import background from '../assets/background.jpg';
import Intro from '../Components/Intro';
import introImg from '../assets/introImg.jpg'
import Advert from '../Components/Advert';
import Mission from '../Components/Mission';
import LatestProject from '../Components/LatestProject';
import Services from '../Components/Services';
import Technol from '../Components/Technol';
import Contact from '../Components/Contact';
const Home = () => {
  return (
    <div className="relative w-full h-screen ">
      {/* Background image */}
      <img
        src={background}
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full opacity-70"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
     
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen">
        <div className="text-center p-4 text-white flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold">
            Websites & Apps Development
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl">
            Transforming Concepts into Reality with Code
          </p>
        </div>
      </div>
      
      {/* Intro components */}
      <div className="relative z-10  bg-opacity-50 pt-20">
      <img
        src={introImg}
        alt="Img"
        className="absolute inset-0 object-cover w-full h-full opacity-70"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
        <div className="flex flex-col items-center ">
          <Intro />
          <Advert />
          <Mission />
          <LatestProject />
          <Services />
          <Technol/>
          <Contact/>
          <br/>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
