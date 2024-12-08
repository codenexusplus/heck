import React from 'react';

/* Component: Latest News & Blog Section */
const LatestNewsBlog = () => {
  const blogs = [
    {
      img: '/burger2.svg', // Replace with actual image path
      date: '9 February 2023',
      title: 'Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis',
    },
    {
      img: '/crisp.svg', // Replace with actual image path
      date: '10 February 2023',
      title: 'Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A',
    },
    {
      img: '/burger.svg', // Replace with actual image path
      date: '10 February 2023',
      title: 'Curabitur Rutrum Velit Ac Congue Malesuada',
    },
  ];

  return (
    <div className="bg-black text-white py-16">
      <h2 className="text-orange-500 text-2xl font-bold text-center">
        Blog Post
      </h2>
      <h1 className="text-4xl font-bold text-center mb-8">
        Latest News & Blog
      </h1>
      <div className="flex justify-center gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden"
            style={{ width: '424px', height: '569px' }}
          >
            <img
              src={blog.img} //
              alt={blog.title}
              className="w-full h-[300px] object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-400 mb-2">{blog.date}</p>
              <h3 className="text-lg font-bold mb-4">{blog.title}</h3>
              <button className="text-orange-500 font-semibold hover:underline">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* Export Default: Header6 */
const Header6 = () => {
  return (
    <div>
      {/* Static Banner Image */}
      <img
        src="/rest.svg" // Replace with the actual image path
        alt="Food Banner"
        className="w-full object-cover"
        style={{ height: '558px', width: '3800px' }}
      />
      <LatestNewsBlog />
    </div>
  );
};

export default Header6;
