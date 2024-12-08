import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* About Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section: Images */}
          <div className="space-y-4">
            <img src="/tortila.svg" alt="Tacos" className="w-full rounded-md shadow-lg" />
            <img src="/salad.svg" alt="Salad" className="w-full rounded-md shadow-lg" />
          </div>

          {/* Right Section: Text */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-800">
              Food is an important part of a balanced diet
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
            </p>
            <div className="space-x-4">
              <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                Show more
              </button>
              <button className="flex items-center bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400">
                 className="w-5 h-5 text-gray-800 mr-2" /
                Watch video
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Food Category Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Food Category
          </h2>
          <p className="text-center text-gray-600 mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue.
          </p>

          <div className="flex space-x-6 overflow-x-auto pb-4">
            {/* Food Items */}
            <div className="min-w-[250px] bg-gray-50 p-4 rounded-lg shadow-md text-center">
              <img
                src="/cupcake.jpg"
                alt="Grand Italiano"
                className="w-full h-[150px] object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800">Grand Italiano</h3>
              <p className="text-gray-600">25 items</p>
            </div>

            <div className="min-w-[250px] bg-gray-50 p-4 rounded-lg shadow-md text-center">
              <img
                src="/tortila.jpg"
                alt="Penne Salmon"
                className="w-full h-[150px] object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800">Penne Salmon</h3>
              <p className="text-gray-600">23 items</p>
            </div>

            <div className="min-w-[250px] bg-gray-50 p-4 rounded-lg shadow-md text-center">
              <img
                src="/tortila.svg"
                alt="Molto Tagliatelle"
                className="w-full h-[150px] object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800">Molto Tagliatelle</h3>
              <p className="text-gray-600">20 items</p>
            </div>

            <div className="min-w-[250px] bg-gray-50 p-4 rounded-lg shadow-md text-center">
              <img
                src="/stake.svg"
                alt="Pepperoni Pizza"
                className="w-full h-[150px] object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800">Pepperoni Pizza</h3>
              <p className="text-gray-600">26 items</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
