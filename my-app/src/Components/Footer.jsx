import React from 'react'
import facebook from './Images/fb.png'
import insta from './Images/instagram.png'
import linkedin from './Images/linkedin.png'
import github from './Images/github.png'


const Footer = () => {
  return <>
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="mb-2">&copy; {new Date().getFullYear()}. All rights reserved.</p>

        {/* links */}
        <div className="flex justify-center space-x-4">
          <a href="https://www.facebook.com/share/uW3SbHbRo4ec4wNb/" target="_blank">
            <img src={facebook} alt="Facebook" className='w-10 h=10 rounded-3xl'/>
          </a>
          <a href="https://www.instagram.com/hadiya_munir18/profilecard/?igsh=M2o0YmVob2didTlx" target="_blank">
            <img src={insta} alt="Instagram" className='w-10 h=10 rounded-3xl'/>
          </a>
          <a href="https://www.linkedin.com/in/hadiya-munir-724b34327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
            <img src= {linkedin} alt="LinkedIn" className='w-10 h=10 rounded-3xl'/>
          </a>
          <a href="https://github.com/Hadiyamunir" target="_blank">
            <img src={github} alt="GitHub" className='w-10 h=10 rounded-3xl'/>
          </a>
        </div>
      </div>
    </footer>
    </>
}

export default Footer;
