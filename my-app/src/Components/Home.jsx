import React, { useState, useEffect } from 'react';
import homepicture from './Images/frontpage.jpeg'

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return <>
    <div id='home'
    className="min-h-screen bg-black flex items-center justify-center">
      <div className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Text section */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          {/*heading animation*/}
          <h1
            className={`text-4xl font-bold mb-4 text-pink-700 transition-opacity duration-1000 ease-in-out ${
              isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Hi, I'm Hadiya Munir
          </h1>
          <p className="text-lg text-white mb-6">
            Hi! I'm a Frontend web developer creating
            responsive and interactive web applications. Constantly seeking to upgrade my programming skills and knowledge. Explore my projects or get in touch to work together!</p>

          <a href="#contact"
            className="bg-pink-700 text-white px-6 py-3 rounded-lg hover:bg-pink-400 transition-colors duration-300">
            Contact Me
          </a>
        </div>

        {/* image section */}
        <div className="md:w-1/2 flex justify-center">
          <img src={homepicture} alt="Image"
            className="w-80 h-80 rounded-full shadow-lg"/>
        </div>
      </div>
    </div>
    </>
};

export default Home;
