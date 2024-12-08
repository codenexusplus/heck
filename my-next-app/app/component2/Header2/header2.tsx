import React from 'react';

function Header2() {
  return (
    <div className="w-full h-[716px] bg-black text-white p-5 flex justify-center">
      {/* Working Area */}
      <div className="w-[1320px] h-full">
        {/* First Section: Food Category */}
        <div>
          <h2 className="text-center text-orange-500 text-3xl font-bold mb-3">
            Food Category
          </h2>
          <h3 className="text-center text-white text-2xl font-semibold mb-6">
            Choose Food Item
          </h3>
          <div className="grid grid-cols-4 gap-5 h-[329px]">
            {/* Row of Images */}
            <img
              src="/white.svg"
              alt="White Dish"
              className="w-[305px] h-[328px] rounded-lg object-cover"
            />
            <img
              src="/burger.svg"
              alt="Burger Dish"
              className="w-[305px] h-[328px] rounded-lg object-cover"
            />
            <img
              src="/pomi.svg"
              alt="Pomi Dish"
              className="w-[305px] h-[328px] rounded-lg object-cover"
            />
            <img
              src="/tortila.svg"
              alt="Tortila Dish"
              className="w-[305px] h-[328px] rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Second Section: Why Choose Us */}
        <div className="flex mt-10 gap-5 h-[387px]">
          {/* Left Image Grid */}
          <div className="w-3/5 grid grid-cols-2 gap-5">
            <img
              src="/burger2.svg"
              alt="Burger 2"
              className="w-[362px] h-[356px] rounded-lg object-cover"
            />
            <img
              src="/crisp.svg"
              alt="Crisp Dish"
              className="w-[281px] h-[231px] rounded-lg object-cover"
            />
            <img
              src="/burger3.svg"
              alt="Burger 3"
              className="w-[244px] h-[306px] rounded-lg object-cover"
            />
            <img
              src="/burger4.svg"
              alt="Burger 4"
              className="w-[221px] h-[226px] rounded-lg object-cover"
            />
          </div>

          {/* Right Text Section */}
          <div className="w-2/5 flex flex-col justify-center">
            <h3 className="text-orange-500 text-2xl font-semibold mb-3">
              Why Choose Us
            </h3>
            <h2 className="text-white text-4xl font-bold leading-snug mb-5">
              Extraordinary Taste <br /> And Experience
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            </p>
            <div className="flex items-center mb-5">
              <button className="bg-orange-500 text-white px-5 py-2 rounded-md mr-3">
                Fast Food
              </button>
              <button className="bg-orange-500 text-white px-5 py-2 rounded-md mr-3">
                Lunch
              </button>
              <button className="bg-orange-500 text-white px-5 py-2 rounded-md">
                Dinner
              </button>
            </div>
            <div className="bg-orange-500 text-white px-6 py-4 rounded-md text-center">
              <span className="text-2xl font-bold">30+</span>
              <p className="text-sm">Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header2;
