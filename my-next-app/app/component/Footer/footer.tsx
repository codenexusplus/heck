import React from 'react';

const Footer = () => {
  return (
    <div
      className="bg-black text-white"
      style={{ width: '1923.73px', height: '740.15px' }}
    >
      <div className="container mx-auto py-12 px-8">
        {/* Top Section */}
        <div className="text-center mb-8">
          <h2 className="text-orange-500 text-2xl font-bold">
            Still You Need Our Support?
          </h2>
          <p className="text-gray-400">
            Don’t wait, make a smart & logical quote here. It’s pretty easy.
          </p>
          <div className="flex justify-center items-center mt-4">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="px-4 py-2 rounded-l-md w-1/3 text-black focus:outline-none"
            />
            <button className="bg-orange-500 px-6 py-2 rounded-r-md text-white hover:bg-orange-600">
              Subscribe Now
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p className="text-gray-400 mb-4">
              Corporate clients and leisure travelers have been relying on
              Obuslink for dependable service in major cities across the world.
            </p>
            <p className="flex items-center text-gray-400">
              <span className="bg-orange-500 w-10 h-10 flex items-center justify-center rounded-full mr-3">
                🕒
              </span>
              <span>
                <strong>Opening Hours:</strong>
                <br />
                Mon-Sat: 9:00 - 6:00 <br />
                Sunday: Closed
              </span>
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li>About</li>
              <li>News</li>
              <li>Partners</li>
              <li>Team</li>
              <li>Menu</li>
              <li>Contacts</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Help?</h3>
            <ul className="space-y-2">
              <li>FAQ</li>
              <li>Terms & Conditions</li>
              <li>Reporting</li>
              <li>Documentation</li>
              <li>Support Policy</li>
              <li>Privacy</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Recent Post</h3>
            <div className="flex items-center mb-4">
              <img
                src="/recent1.jpg"
                alt="Post"
                className="w-14 h-12 rounded mr-3"
              />
              <div>
                <p className="text-sm text-gray-400">20 Feb 2022</p>
                <p className="text-gray-200">Keep Your Business</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <img
                src="/recent2.jpg"
                alt="Post"
                className="w-14 h-12 rounded mr-3"
              />
              <div>
                <p className="text-sm text-gray-400">20 Feb 2022</p>
                <p className="text-gray-200">Keep Your Business</p>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src="/recent3.jpg"
                alt="Post"
                className="w-14 h-12 rounded mr-3"
              />
              <div>
                <p className="text-sm text-gray-400">20 Feb 2022</p>
                <p className="text-gray-200">Keep Your Business</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
