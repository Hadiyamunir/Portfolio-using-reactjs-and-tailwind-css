import React from 'react'
import project1 from './Images/cosmetic.png'
import project2 from './Images/restaurant.png'
import project3 from './Images/jewellery.png'
import project4 from './Images/calculator.png'
import project5 from './Images/tourism-management.jpg'

const Project = () => {
  return  <>
    <div id='project'
    className="min-h-screen p-16 bg-black">
      <h1 className="text-3xl text-pink-700 font-bold text-center mb-8">My Projects</h1>

      <div className="flex flex-wrap justify-center gap-6">
        {/* Project 1 */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md w-full max-w-xs transition-transform duration-300 hover:scale-105">
          <img src={project1} alt="Project One"
            className="w-full h-40 object-cover rounded-md mb-4"/>
          <h2 className="text-xl text-white font-semibold mb-5">Cosmetic Webpage</h2>
          <div className="flex justify-center space-x-4">
            <a href="https://simple-webpage-using-html-and-css.vercel.app/" target="_blank"
              className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-300 transition-colors duration-300">
              Live Demo
            </a>
            <a href="https://github.com/Hadiyamunir/Simple-Webpage-using-HTML-and-CSS" target="_blank"
              className="bg-pink-800 text-white px-4 py-2 rounded hover:bg-pink-400 transition-colors duration-300">
              GitHub Repo
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md w-full max-w-xs transition-transform duration-300 hover:scale-105">
          <img src={project2} alt="Project Two"
             className="w-full h-40 object-cover rounded-md mb-4"/>
          <h2 className="text-xl text-white font-semibold mb-5">Restaurant Webpage</h2>
          <div className="flex justify-center space-x-4">
            <a href="https://restaurant-webpage-using-html-and-css.vercel.app/" target="_blank"
              className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-300 transition-colors duration-300">
              Live Demo
            </a>
            <a href="https://github.com/Hadiyamunir/Restaurant-webpage-using-html-and-css" target="_blank"
              className="bg-pink-800 text-white px-4 py-2 rounded hover:bg-pink-400 transition-colors duration-300">
              GitHub Repo
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md w-full max-w-xs transition-transform duration-300 hover:scale-105">
          <img src={project3} alt="Project Three"
            className="w-full h-40 object-cover rounded-md mb-4"/>
          <h2 className="text-xl text-white font-semibold mb-5">Jewellery Webpage</h2>
          <div className="flex justify-center space-x-4">
            <a href="https://webpage-using-html-css-and-javascript.vercel.app/" target="_blank"
              className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-300 transition-colors duration-300">
              Live Demo
            </a>
            <a href="https://github.com/Hadiyamunir/Webpage-using-html-css-and-javascript/tree/main/Jewellery%20Webpage" target="_blank"
              className="bg-pink-800 text-white px-4 py-2 rounded hover:bg-pink-400 transition-colors duration-300">
              GitHub Repo
            </a>
          </div>
        </div>

        {/* Project 4 */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md w-full max-w-xs transition-transform duration-300 hover:scale-105">
          <img src={project4} alt="Project Four"
            className="w-full h-40 object-cover rounded-md mb-4"/>
          <h2 className="text-xl text-white font-semibold mb-5">Simple Calculator</h2>
          <div className="flex justify-center space-x-4">
            <a href="https://java-script-pearl.vercel.app/" target="_blank"
              className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-300 transition-colors duration-300">
              Live Demo
            </a>
            <a href="https://github.com/Hadiyamunir/JavaScript/tree/main/Simple%20Calculator" target="_blank"
              className="bg-pink-800 text-white px-4 py-2 rounded hover:bg-pink-400 transition-colors duration-300">
              GitHub Repo
            </a>
          </div>
        </div>

        {/* Project 5 */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md w-full max-w-xs transition-transform duration-300 hover:scale-105">
          <img src={project5} alt="Project Five"
            className="w-full h-40 object-cover rounded-md mb-4"/>
          <h2 className="text-xl text-white font-semibold mb-5">Tourism Management System</h2>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/Hadiyamunir/Tourism-Management-System" target="_blank"
              className="bg-pink-800 text-white px-4 py-2 rounded hover:bg-pink-400 transition-colors duration-300">
              GitHub Repo
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
}

export default Project;

