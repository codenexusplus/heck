import React from "react";

const CoffeeShop = ({  }) => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="w-full bg-black text-white h-[914px]">
        {/* Top Navigation */}
        <div className="flex items-center justify-between px-8 py-4">
          {/* Logo and Menu */}
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold">Foodtuck</h1>
            <nav className="flex space-x-6">
              {["Home", "Menu", "Blog", "Pages", "About", "Shop", "Contact"].map((item) => (
                <a key={item} href="#" className="text-sm hover:text-yellow-500">
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <button className="hover:text-yellow-500">
              <i className="fas fa-search"></i>
            </button>
            <button className="hover:text-yellow-500">
              <i className="fas fa-user"></i>
            </button>
            <button className="hover:text-yellow-500">
              <i className="fas fa-shopping-bag"></i>
            </button>
          </div>
        </div>

        {/* Hero Content */}
        <div className="flex items-center justify-center h-full px-8">
          {/* Text Content */}
          <div className="text-left max-w-md">
            <h1 className="text-5xl font-bold mb-4 leading-tight">
              Heal the World with Coffee
            </h1>
            <p className="text-lg mb-6">Enjoy premium coffee made with passion and love.</p>
            <div className="flex space-x-4">
              <button className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-lg font-semibold">
                Order Now
              </button>
              <button className="border border-yellow-500 px-6 py-3 rounded-lg hover:bg-yellow-500 hover:text-black">
                Learn More
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <img
            src="/foamy.svg"
            alt="Coffee Cup"
            className="ml-12 w-[536px] h-[596px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Featured Section */}
      <div className="max-w-[1367px] mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-center justify-center">
          <img
            src="/foamy.svg"
            alt="Premium Coffee"
            className="w-[762.12px] h-[720px] object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">
            We are the Best Quality Coffee Maker
          </h2>
          <p className="text-lg mb-6">
            Discover premium coffee crafted to perfection using the finest beans and
            state-of-the-art techniques.
          </p>
          <ul className="space-y-4">
            <li>✔️ Fresh & Organic Beans</li>
            <li>✔️ Skilled Baristas</li>
            <li>✔️ Delivered Quality & Choice</li>
          </ul>
          <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-lg font-semibold">
            Learn More
          </button>
        </div>
      </div>

      {/* Coffee Categories */}
      <div className="max-w-[1320px] mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-8">Coffee Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left - Category List */}
          <ul className="space-y-4">
            {[
              { name: "Cappuccino", description: "Rich and frothy coffee perfection." },
              { name: "Cafe Latte", description: "Smooth and creamy coffee delight." },
              { name: "Dark Coffee", description: "Bold and flavorful coffee experience." },
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <span className="font-bold text-lg">☕ {item.name}</span>
                <p className="ml-4 text-sm text-gray-600">{item.description}</p>
              </li>
            ))}
          </ul>

          {/* Right - Image */}
          <div className="flex justify-center items-center">
            <img
              src="/cup.svg"
              alt="Coffee Cup"
              className="w-full max-w-[350px] h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Best Quality Section */}
      <div className="max-w-[1319px] mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-8">
          Best Quality Food and Coffee Maker
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img
            src="/why.svg"
            alt="Coffee Shop"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <ul className="space-y-4">
            {[
              {
                title: "High-Quality Coffee",
                description: "Experience the richness of high-quality coffee, sourced from the best farms.",
              },
              {
                title: "Best Chef & Team",
                description: "Enjoy creations by our expert chefs and professional baristas.",
              },
              {
                title: "Promote Local Beans",
                description: "Supporting local farmers with every cup.",
              },
            ].map((item, index) => (
              <li key={index}>
                <h4 className="text-lg font-bold">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CoffeeShop;
