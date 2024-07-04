// src/components/LandingPage.jsx
import React from 'react';
import bgImage from "../assets/images/bgImage.jpg";

const LandingPage = () => {
  return (
    <div className='h-screen bg-cover bg-center relative' style={{ backgroundImage: `url(${bgImage})` }}>
      <div className='absolute inset-0 flex flex-col items-center top-40 text-center px-6 sm:px-0'>
        <div className='text-white text-2xl sm:text-4xl lg:text-4xl mb-4 font-semibold'>
          Experience the Future of Driving
        </div>
        <div className='text-white text-base sm:text-lg lg:text-xl mb-8 sm:mx-6'>
          Discover the latest in automotive technology and performance with our cutting-edge car models.
        </div>
        <div className='flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6'>
          <button className='bg-blue text-white py-2 px-20 sm:px-8 sm:py-2 lg:py-[6px] rounded-md text-sm sm:text-lg lg:text-md lg:px-10 transition-colors'>
            Explore Models
          </button>
          <button className='border-2 border-white text-white bg-transparent py-2 px-20 sm:px-8 sm:py-2 lg:py-[6px] rounded-md text-sm sm:text-lg lg:text-md lg:px-10 hover:bg-white hover:text-blue transition-colors'>
            Schedule Test Drive
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
