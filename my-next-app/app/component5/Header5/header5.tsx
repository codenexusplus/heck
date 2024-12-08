import React from 'react';

/* Component 1: Meet Our Chef Section */
const MeetOurChef = () => {
  return (
    <div className="bg-black text-white w-full h-[657px] flex flex-col items-center justify-center">
      {/* Title Section */}
      <h2 className="text-orange-500 text-2xl font-bold">Chefs</h2>
      <h1 className="text-4xl font-bold mt-2 mb-8">Meet Our Chef</h1>

      {/* Chef Profiles */}
      <div className="flex justify-center gap-6 mb-6">
        {[
          { name: 'D. Estwood', role: 'Chief Chef', img: '/chef1.jpg' },
          { name: 'D. Scorlesh', role: 'Assistant Chef', img: '/chef2.jpg' },
          { name: 'M. William', role: 'Advertising Chef', img: '/chef3.jpg' },
          { name: 'W. Readfroad', role: 'Chef', img: '/chef4.jpg' },
        ].map((chef, index) => (
          <div key={index} className="text-center">
            <img
              src="chef1.svg" // Replace with the actual image path
              alt={chef.name}
              className="rounded-lg"
              style={{ width: '312px', height: '391px' }}
            />
            <h3 className="text-lg font-bold mt-2">{chef.name}</h3>
            <p className="text-sm text-gray-400">{chef.role}</p>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600">
        See More
      </button>
    </div>
  );
};

/* Component 2: Client Testimonial Section */
const ClientTestimonial = () => {
  return (
    <div className="bg-black text-white w-full h-[770px] flex flex-col items-center justify-center">
      {/* Title Section */}
      <h2 className="text-orange-500 text-2xl font-bold">Testimonials</h2>
      <h1 className="text-4xl font-bold mt-2 mb-8">What Our Clients Are Saying</h1>

      {/* Testimonial Card */}
      <div
        className="bg-gray-800 rounded-lg p-8 flex flex-col items-center"
        style={{ width: '1273px', height: '770px' }}
      >
        {/* Client Image */}
        <img
          src="/client.jpg" // Replace with the actual image path
          alt="Client"
          className="rounded-full mb-6"
          style={{ width: '100px', height: '100px' }}
        />

        {/* Testimonial Content */}
        <p className="text-center text-lg text-gray-300 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.
        </p>
        <p className="text-center text-lg text-gray-300 mb-6">
          Ullamcorper elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus vel sit in consequat.
        </p>

        {/* Client Name */}
        <h3 className="text-xl font-bold text-center">Alaimin Hasan</h3>
        <p className="text-sm text-gray-400 mb-4">Food Specialist</p>

        {/* Rating */}
        <div className="flex justify-center mb-4">
          <span className="text-yellow-500 text-2xl">★</span>
          <span className="text-yellow-500 text-2xl">★</span>
          <span className="text-yellow-500 text-2xl">★</span>
          <span className="text-yellow-500 text-2xl">★</span>
          <span className="text-gray-500 text-2xl">★</span>
        </div>

        {/* Pagination */}
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
          <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

/* Export Components */
const Header5 = () => {
  return (
    <div>
      <MeetOurChef />
      <ClientTestimonial />
    </div>
  );
};

export default Header5;
