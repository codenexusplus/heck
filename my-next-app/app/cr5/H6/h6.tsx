import React from "react";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Responsive Website</title>
      </Head>
      <div className="bg-gray-100 min-h-screen">
        {/* Menu Section */}
        <section className="bg-white py-12">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Menu</h2>
            <p className="text-gray-600">Explore our delicious offerings!</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="p-4 border rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold">
                    Alder Grilled Chinook Salmon
                  </h3>
                  <p className="text-gray-600">
                    Toasted French bread topped with romano, cheddar
                  </p>
                  <p className="text-gray-800 font-bold mt-2">$32</p>
                  <p className="text-gray-500 text-sm mt-1">580 CAL</p>
                </div>
              ))}
            </div>
            <button className="mt-8 px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              View Menu
            </button>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto text-center space-y-8">
            <img
              src="/testi.svg"
              alt="Delicious Food"
              className="mx-auto rounded-lg shadow-lg"
              width="1320"
              height="479"
            />
            <img
              src="clients.svg"
              alt="Restaurant Ambience"
              className="mx-auto rounded-lg shadow-lg"
              width="1320"
              height="752"
            />
            <img
              src="blog.svg"
              alt="Special Offer"
              className="mx-auto rounded-lg shadow-lg"
              width="1320"
              height="299"
            />
          </div>
        </section>

        {/* Team Member Section */}
        <section className="bg-green-500 py-12 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Team Member</h2>
            <p className="text-gray-100">
              Meet the people behind our success.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
              {[
                { name: "Mark Henry", role: "Owner" },
                { name: "Lucky Helen", role: "Chef" },
                { name: "Moon Henry", role: "Founder" },
                { name: "Tom Monrow", role: "Specialist" },
              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-white text-gray-800 rounded-lg shadow-lg p-4"
                >
                  <div className="h-40 bg-gray-200 rounded mb-4"></div>
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                  <div className="flex justify-center mt-4 space-x-4">
                    <a href="#" className="text-green-500">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="text-green-500">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-green-500">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
