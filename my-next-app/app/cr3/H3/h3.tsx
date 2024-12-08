import React from 'react';

const WhyChooseUs = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-12 flex flex-wrap lg:flex-nowrap items-center gap-8">
        {/* Left Section: Images */}
        <div className="relative w-full lg:w-1/2">
          <div className="absolute top-0 left-0 w-1/2 h-full">
            <img
              src="/cutting-board.jpg"
              alt="Cutting board"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="relative w-2/3 mx-auto">
            <img
              src="/salad-bowl.jpg"
              alt="Salad bowl"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Right Section: Content */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-sm font-semibold text-green-600 mb-2">Why Choose Us</h3>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Why We Are the Best?</h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum. 
          </p>
          <p className="text-gray-600 mb-6">
            Varius sed pharetra dictum neque massa congue. Donec id elementum
            urna, vitae feugiat pretium donec id elementum.
          </p>
          <div className="grid grid-cols-2 gap-6">
            {/* Features */}
            <div className="flex items-center space-x-4">
              
              <div>
                <h4 className="font-semibold text-gray-800">Fast Delivery</h4>
                <p className="text-sm text-gray-600">Quick and reliable.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div>
                <h4 className="font-semibold text-gray-800">24/7 Services</h4>
                <p className="text-sm text-gray-600">Anytime, anywhere.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div>
                <h4 className="font-semibold text-gray-800">Fresh Food</h4>
                <p className="text-sm text-gray-600">Always fresh.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div>
                <h4 className="font-semibold text-gray-800">Quality Maintain</h4>
                <p className="text-sm text-gray-600">Top-notch quality.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
