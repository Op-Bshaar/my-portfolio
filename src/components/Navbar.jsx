import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';
import myImge from '../assets/photo_2024-07-07_17-02-46.jpg'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className='flex flex-wrap justify-between items-center p-5 bg-gray-800 text-white'>
      <div className='flex items-center space-x-4'>
        <img src = {myImge} aly ="myImge" className='w-14 h-14 ml-5' />
        <a href="#home" className='hidden md:block p-2 pl-10'>Home</a>
        <a href="#about" className='hidden md:block p-2'>About</a>
        <a href="#technology" className='hidden md:block p-2'>Technology</a>
        <a href="#projects" className='hidden md:block p-2'>Projects</a>
        <a href="#contact" className='hidden md:block p-2'>Contact</a>
      </div>
      <div className='flex flex-row space-x-4'>
        <a href="https://www.linkedin.com/in/bashar-abdalla-1b8084233/"><FaLinkedin  size={20} /></a>
        <a href="https://github.com/Op-Bshaar"><FaGithub size={20} /></a>
        <a href=""><FaInstagram size={20} /></a>
        <a href=""><FaFacebook size={20} /></a>
      </div>
      <div className='block md:hidden'>
        <button onClick={toggleMobileMenu} className='p-2 focus:outline-none'>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="flex flex-col space-y-4 mt-4 md:hidden w-full">
          <a href="#home" className='block p-2'>Home</a>
          <a href="#about" className='block p-2'>About</a>
          <a href="#technology" className='block p-2'>Technology</a>
          <a href="#projects" className='block p-2'>Projects</a>
          <a href="#contact" className='block p-2'>Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
