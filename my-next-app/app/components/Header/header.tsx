import React from "react";

// Logo Component
const Logo = () => (
  <div className="absolute top-[32px] left-[605px] flex items-center justify-center w-[109px] h-[32px]">
    <h1 className="text-[24px] font-bold leading-[32px]">
      <span className="font-['Helvetica'] text-orange-500">Food</span>
      <span className="font-['Helvetica'] text-white">Tuck</span>
    </h1>
  </div>
);

// Navigation Links Component
const NavLinks = () => {
  const links = ["Home", "Menu", "Blog", "Pages", "About", "Shop", "Contact"];
  return (
    <ul className="flex items-center space-x-6">
      {links.map((link) => (
        <li key={link} className="text-white hover:text-orange-500">
          <a href={`#${link.toLowerCase()}`}>{link}</a>
        </li>
      ))}
    </ul>
  );
};

// Search Bar Component
const SearchBar = () => (
  <div className="flex items-center space-x-2">
    <input
      type="text"
      placeholder="Search..."
      className="w-[310px] h-[54px] px-4 bg-gray-800 text-white rounded-l-full focus:outline-none"
    />
    <button className="w-[54px] h-[54px] bg-orange-500 flex justify-center items-center rounded-r-full">
      <span className="text-white">🔍</span>
    </button>
    <button className="w-[54px] h-[54px] bg-gray-800 flex justify-center items-center">
      <span className="text-white">👜</span>
    </button>
  </div>
);

// Hero Content Component
const HeroContent = () => (
  <div className="absolute top-[200px] left-[300px] text-white max-w-[500px]">
    <p className="text-[32px] font-[400] font-[Great Vibes] leading-[40px] text-[#FF7F50]">
      It’s Quick & Amusing!
    </p>
    <h1 className="text-[64px] font-bold leading-[72px] mt-4">
      The Art of Speed <br /> Food Quality
    </h1>
    <p className="text-[16px] mt-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra
      dictum neque massa congue.
    </p>
    <button className="mt-6 w-[150px] h-[50px] bg-orange-500 text-white rounded-full">
      See Menu
    </button>
  </div>
);

// Food Image Component
const FoodImage = () => (
  <div className="absolute top-[150px] right-[300px]">
    <img
      src="eggs.svg" // Replace with actual food image URL
      alt="Food Dish"
      className="w-[472px] h-[356px] object-cover rounded-lg"
    />
  </div>
);

// Header Component
const Header = () => {
  return (
    <div className="relative w-[1920px] h-[950px] bg-black">
      {/* Background Image */}
      <img
        src="bg.svg" // Replace with actual background image URL
        alt="Header Background"
        className="absolute w-full h-full object-cover"
      />
      {/* Navigation Section */}
      <div className="absolute top-[45px] left-[300px] w-[1320px] h-[87px] bg-black text-white flex justify-between items-center px-6">
        <Logo />
        <NavLinks />
        <SearchBar />
      </div>
      {/* Hero Content */}
      <HeroContent />
      {/* Food Image */}
      <FoodImage />
    </div>
  );
};

export default Header;
