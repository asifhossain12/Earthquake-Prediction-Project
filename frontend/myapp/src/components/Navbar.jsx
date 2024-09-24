import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
      <div className="text-white text-lg font-bold"><a href='/'>Earthquake</a></div>
      <div className="flex space-x-4">
        <a href="/" className="text-white hover:text-gray-200">Home</a>
        <a href="/about" className="text-white hover:text-gray-200">About</a>
      </div>
    </nav>
  );
};

export default Navbar;
