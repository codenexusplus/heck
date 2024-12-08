import React from 'react';

function Header() {
  return (
    <div
      className="w-full h-[950px] bg-black text-white flex justify-center items-center"
    >
      <h1 className="text-3xl font-bold">Welcome to Our Website</h1>
    </div>
  );
}

function Header1() {
  return (
    <div
      className="w-[1320px] h-[562px] bg-gray-900 text-white border border-gray-600 p-5 mx-auto"
    >
      {/* Text Section */}
      <div className="flex">
        <div className="w-1/2 pr-5">
          <h1 className="text-4xl font-bold text-orange-500">
            We Create the Best Foody Product
          </h1>
          <p className="my-5 text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center">
              <span className="text-orange-500 mr-3">✔</span>
              Lacus nisi, et ac dapibus sit eu velit in consequat.
            </li>
            <li className="flex items-center">
              <span className="text-orange-500 mr-3">✔</span>
              Quisque diam pellentesque bibendum non dui volutpat fringilla.
            </li>
            <li className="flex items-center">
              <span className="text-orange-500 mr-3">✔</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
          </ul>
          <button className="mt-5 px-5 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
            Read More
          </button>
        </div>

        {/* Image Section */}
        <div className="w-1/2 flex flex-col gap-3 items-end">
          <img
            src="/egg1.svg"
            alt="Egg Dish"
            className="w-full h-[280px] rounded-lg object-cover"
          />
          <div className="flex gap-3 w-full">
            <img
              src="/fried.svg"
              alt="Fried Dish"
              className="w-1/2 h-[130px] rounded-lg object-cover"
            />
            <img
              src="/sand.svg"
              alt="Sandwich Dish"
              className="w-1/2 h-[130px] rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header1;
