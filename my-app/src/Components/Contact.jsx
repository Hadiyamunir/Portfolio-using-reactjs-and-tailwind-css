import React from 'react'
import facebook from './Images/fb.png'
import insta from './Images/instagram.png'
import linkedin from './Images/linkedin.png'

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent successfully!");
        e.target.reset();
      };
  return  <>
    <div id='contact'
    className="bg-black min-h-screen p-12 flex items-center justify-center">
      <div className="bg-pink-700 shadow-md rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Contact Me</h2>

        {/* contact info */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-white">Email</h3>
          <p className="text-gray-200">hadiyamunir55@gmail.com</p>
        </div>

        {/* social links */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-white">Follow Me</h3>
          <div className="flex space-x-4 mt-3">
            <a href="https://www.facebook.com/share/uW3SbHbRo4ec4wNb/" target="_blank">
              <img src={facebook} alt="Facebook"
                className="w-11 h-11 rounded-3xl hover:opacity-75"/>
            </a>
            <a href="https://www.instagram.com/hadiya_munir18/profilecard/?igsh=M2o0YmVob2didTlx" target="_blank">
              <img src={insta} alt="Instagram"
                className="w-11 h-11 rounded-3xl hover:opacity-75"/>
            </a>
            <a href="https://www.linkedin.com/in/hadiya-munir-724b34327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
              <img src={linkedin} alt="LinkedIn"
                className="w-11 h-11 rounded-3xl hover:opacity-75"/>
            </a>
          </div>
        </div>

        {/* form */}
        <form onSubmit={handleSubmit}>
          <h3 className="text-xl font-semibold text-white mb-4">Send a Message</h3>
          <div className="mb-4">
            <label className="block text-gray-200 mb-2" htmlForm="name">
              Name
            </label>
            <input
              id="name" type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-200 mb-2" htmlForm="email">
              Email
            </label>
            <input
              id="email" type="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-200 mb-2" htmlForm="message">
              Message
            </label>
            <textarea
              id="message" rows="4"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
           </textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500  text-white text-xl font-bold py-2 rounded-md hover:bg-pink-400 transition duration-300">
            Send
          </button>
        </form>
      </div>
    </div>
    </>
}

export default Contact;

