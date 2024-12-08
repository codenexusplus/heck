import React from 'react';

const H1 = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">Foodtuck</h1>
          <nav className="space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Menu
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Blog
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Pages
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Shop
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative">
        <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-gray-800">
              Enjoy Healthy Life <br /> & Tasty Food.
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
              sed pharetra dictum neque massa congue.
            </p>
            <div className="space-x-4">
              <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                Show more
              </button>
              <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400">
                Place an order
              </button>
            </div>
          </div>

          {/* Image Content */}
          <div className="w-full md:w-1/2 mt-10 md:mt-0">
            <div className="relative">
              <img
                src="/healthy-food.png"
                alt="Healthy Food"
                className="rounded-full shadow-lg"
              />
              <div className="absolute inset-0 bg-green-100 opacity-30 rounded-full"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default H1;
