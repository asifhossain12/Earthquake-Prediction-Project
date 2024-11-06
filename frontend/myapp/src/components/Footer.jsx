import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        
        
        <div className="mb-4 md:mb-0">
          <Link to="/" className="text-white hover:text-gray-300 mr-4">Home</Link>
          <Link to="/about" className="text-white hover:text-gray-300">About</Link>
        </div>

        
        <div className="flex space-x-4">
          <a href="https://github.com/asifhossain12" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="h-6 w-6 hover:text-gray-300" />
          </a>
          <a href="https://linkedin.com/in/asifhossain01" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="h-6 w-6 hover:text-gray-300" />
          </a>
          <a href="https://instagram.com/_.asif_12" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="h-6 w-6 hover:text-gray-300" />
          </a>
        </div>

        
        <div className="text-gray-200 text-sm mt-4 md:mt-0">
          &copy; {new Date().getFullYear()} Earthquake Prediction Project. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
