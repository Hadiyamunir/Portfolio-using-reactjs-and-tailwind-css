import React from 'react'
import img1 from './Images/education.jpeg'
import img2 from './Images/html.png'
import img3 from './Images/css.png'
import img4 from './Images/js.webp'
import img5 from './Images/mysql.webp'
import img6 from './Images/python.png'
import img7 from './Images/reactjs.webp'
import img8 from './Images/c.png'
import img9 from './Images/csharp.png'
import img10 from './Images/tailwind.png'

const About = () => {
  return <>
    <div id='about'
    className="min-h-screen p-6 bg-black">

      {/* About me */}
      <section className="text-center mt-12 mb-12">
        <h1 className="text-4xl text-pink-700 font-bold mb-6">About Me</h1>
        <p className="text-lg text-white max-w-2xl mx-auto">
          I'm a motivated software engineering student at Sindh Madressatul Islam University, with a keen interest in leveraging technology to drive positive change. With a solid foundation in programming and software development, I'm eager to explore new opportunities and push the boundaries of innovation.</p>
      </section>

      {/*education*/}
      <section className="mb-12">
        <h2 className="text-3xl text-pink-500 font-bold mb-6 text-center">Education</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {/*matric*/}
          <div className="bg-gray-800 shadow-md p-6 rounded-lg max-w-xs transition-transform duration-300 hover:scale-105">
            <img src={img1} alt="Matric"
              className="w-20 h-20 object-cover mx-auto mb-4 rounded-3xl"/>
            <h3 className="text-xl text-pink-600 font-semibold mb-2 text-center">Matriculation</h3>
            <p className="text-center text-white">Trinity Methodist Higher Secondary School, 2019-2021</p>
          </div>
          {/*intermediate*/}
          <div className="bg-gray-800 shadow-md p-6 rounded-lg max-w-xs transition-transform duration-300 hover:scale-105">
            <img src={img1} alt="Inter"
              className="w-20 h-20 object-cover mx-auto mb-4 rounded-3xl"/>
            <h3 className="text-xl text-pink-600 font-semibold mb-2 text-center">Intermediate</h3>
            <p className="text-center text-white">St.Lawrence College, 2021-2023</p>
          </div>
          {/*university*/}
          <div className="bg-gray-800 shadow-md p-6 rounded-lg max-w-xs transition-transform duration-300 hover:scale-105">
            <img src={img1} alt="University"
              className="w-20 h-20 object-cover mx-auto mb-4 rounded-3xl"/>
            <h3 className="text-xl text-pink-600 font-semibold mb-2 text-center">University</h3>
            <p className="text-center text-white">Sindh Madressatul Islam University</p>
          </div>
        </div>
      </section>

      {/*skills*/}
      <section>
        <h2 className="text-3xl text-pink-500 font-bold mb-6 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-6 mb-10">
            <img
              src={img2} alt="HTML"
              className="w-16 h-16 object-cover"/>
            <img src={img3} alt="CSS"
              className="w-16 h-16 object-cover"/>
           <img src={img4} alt="JavaScript"
              className="w-16 h-16 object-cover"/>
            <img src={img5} alt="MySql"
              className="w-16 h-16 object-cover"/>
            <img src={img6} alt="Python"
              className="w-16 h-16 object-cover"/>
               <img src={img7} alt="Reactjs"
              className="w-16 h-16 object-cover"/>
            <img src={img8} alt="C"
              className="w-16 h-16 object-cover"/>
            <img src={img9} alt="C#"
              className="w-16 h-16 object-cover"/>
            <img src={img10} alt="Tailwind"
              className="w-16 h-16 object-cover"/>
        </div>
      </section>
    </div>
    </>
}

export default About;
