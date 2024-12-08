import React from 'react';

const Home = () => {
  return (
    <div className="space-y-10">
      {/* Container 1: Navbar and Hero Section */}
      <div className="w-full bg-black py-5" style={{ height: '410px', maxWidth: '1920px', margin: 'auto' }}>
        {/* Navigation Bar */}
        <div className="flex justify-between items-center px-10 py-4">
          {/* Left Side: Logo */}
          <div className="text-white font-bold text-xl flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-black font-bold">F</span> {/* Logo Placeholder */}
            </div>
            <span>FoodTruck</span>
          </div>

          {/* Center: Navigation Links */}
          <nav className="flex space-x-8 text-white text-sm font-medium">
            <a href="#home" className="hover:text-orange-500 transition">Home</a>
            <a href="#menu" className="hover:text-orange-500 transition">Menu</a>
            <a href="#blog" className="hover:text-orange-500 transition">Blog</a>
            <a href="#pages" className="hover:text-orange-500 transition">Pages</a>
            <a href="#about" className="hover:text-orange-500 transition">About</a>
            <a href="#contact" className="hover:text-orange-500 transition">Contact</a>
          </nav>

          {/* Right Side: Icons */}
          <div className="flex space-x-6 items-center text-white">
            {/* Search Icon */}
            <div className="w-5 h-5 hover:text-orange-500 transition cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 7.65a7.5 7.5 0 010 10.7z" />
              </svg>
            </div>
            {/* User Icon */}
            <div className="w-5 h-5 hover:text-orange-500 transition cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9A3.75 3.75 0 1012 12.75 3.75 3.75 0 0015.75 9zM3 21v-.75a4.5 4.5 0 014.5-4.5h9a4.5 4.5 0 014.5 4.5V21" />
              </svg>
            </div>
            {/* Bag Icon */}
            <div className="w-5 h-5 hover:text-orange-500 transition cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5V3.75a3.75 3.75 0 00-7.5 0V7.5H3.75A3.75 3.75 0 000 11.25v10.5A3.75 3.75 0 003.75 24h16.5A3.75 3.75 0 0024 21.75v-10.5a3.75 3.75 0 00-3.75-3.75H12zM6 7.5V3.75a1.5 1.5 0 013 0V7.5H6z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="h-full flex flex-col items-center justify-center text-center py-5">
          <h1 className="text-white text-4xl font-bold" style={{ width: '225px', height: '56px' }}>
            Our Menu
          </h1>
        </div>
      </div>

      {/* Container 2: Image Placeholder */}
      <div className="container mx-auto py-5" style={{ height: '628px', maxWidth: '1320px' }}>
        <div className="h-full bg-gray-200 flex items-center justify-center">
          <img src="/images/container2.svg" alt="Container 2" className="w-full h-auto" />
        </div>
      </div>

      {/* Container 3: Image Placeholder */}
      <div className="container mx-auto py-5" style={{ height: '628px', maxWidth: '1320px' }}>
        <div className="h-full bg-gray-300 flex items-center justify-center">
          <img src="/images/container3.svg" alt="Container 3" className="w-full h-auto" />
        </div>
      </div>

      {/* Container 4: Image Placeholder */}
      <div className="w-full bg-gray-400 py-5" style={{ height: '468px', maxWidth: '1923px', margin: 'auto' }}>
        <div className="h-full flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/container4.svg')" }}>
          <p className="text-black text-xl">Footer content or summary goes here</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
