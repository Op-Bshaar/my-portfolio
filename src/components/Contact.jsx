import React from 'react'

const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-center text-3xl font-semibold text-gray-800 mb-6">Contact</h2>
        <form className="flex flex-col space-y-4">
          <input 
            type="text" 
            placeholder="Name" 
            className="w-full p-3 border text-gray-800 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full p-3 border text-gray-800 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
          />
          <input 
            type="text" 
            placeholder="Subject" 
            className="w-full p-3 border text-gray-800 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
          />
          <textarea 
            placeholder="Message" 
            className="w-full p-3 border text-gray-800 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 h-32 resize-none" 
          />
          <button 
            type="submit" 
            className="w-full py-3 text-gray-800 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
