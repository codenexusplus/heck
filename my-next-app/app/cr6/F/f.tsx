import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-200 text-gray-800 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* Foodtuck - Newsletter Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Foodtuck</h3>
          <p className="text-sm mb-4">
            Subscribe our newsletter and get discount 25% off
          </p>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-3 py-2 border rounded-l-lg focus:outline-none"
            />
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded-r-lg hover:bg-green-700"
            >
              ➤
            </button>
          </form>
          <div className="flex mt-4 space-x-4 text-green-600">
            <a href="#" aria-label="Pinterest">
              <i className="fab fa-pinterest"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="text-sm space-y-2">
            <li>
              <i className="fas fa-map-marker-alt mr-2"></i>
              Kolkata India, 3rd Floor, Office 45
            </li>
            <li>
              <i className="fas fa-phone-alt mr-2"></i>
              00965 - 96659886
            </li>
            <li>
              <i className="fas fa-envelope mr-2"></i>
              M.Alyaqout@4house.Co
            </li>
            <li>
              <i className="fas fa-clock mr-2"></i>
              Sun - Sat / 10:00 AM - 8:00 PM
            </li>
          </ul>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Links</h3>
          <ul className="text-sm space-y-2">
            <li>
              <a href="#" className="hover:text-green-600">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600">
                Our Menu
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600">
                Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Instagram Gallery Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Instagram Gallery</h3>
          <div className="grid grid-cols-3 gap-2">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="w-full h-20 bg-gray-300 rounded"
                style={{
                  backgroundImage: `url(/images/gallery-${index + 1}.jpg)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-green-300 text-center text-sm py-4 mt-10">
        <p>Copyright © 2000-2020 logo.com. All rights reserved</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-green-600">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-green-600">
            Term of Use
          </a>
          <a href="#" className="hover:text-green-600">
            Partner
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
