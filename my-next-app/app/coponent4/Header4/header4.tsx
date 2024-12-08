import React from 'react';

const Header4 = () => {
  return (
    <div className="bg-black text-white w-full h-[656px] flex flex-col items-center justify-center">
      {/* Title Section */}
      <h1 className="text-orange-500 text-3xl font-bold text-center">Choose & Pick</h1>
      <h2 className="text-4xl font-bold text-center mt-2 mb-8">From Our Menu</h2>

      {/* Menu Categories */}
      <div className="flex justify-center gap-6 text-yellow-500 font-semibold mb-10">
        <button className="hover:text-orange-500">Breakfast</button>
        <button className="hover:text-orange-500">Lunch</button>
        <button className="hover:text-orange-500">Dinner</button>
        <button className="hover:text-orange-500">Dessert</button>
        <button className="hover:text-orange-500">Drink</button>
        <button className="hover:text-orange-500">Snack</button>
        <button className="hover:text-orange-500">Soups</button>
      </div>

      {/* Content Section */}
      <div className="flex w-[1320px] h-full relative">
        {/* Left - Main Salad Image */}
        <div
          className="absolute"
          style={{ left: '79px', top: '50%', transform: 'translateY(-50%)' }}
        >
          <img
            src="/image.svg" // Replace this with the path to your image
            alt="Lettuce Leaf"
            className="rounded-full"
            style={{ width: '366px', height: '362px' }}
          />
        </div>

        {/* Right - Menu Items */}
        <div
          className="absolute flex flex-wrap gap-4"
          style={{
            left: '376px',
            top: '50%',
            transform: 'translateY(-50%)',
            paddingLeft: '100px', // Add padding to the left of the text area
          }}
        >
          {[ 
            { name: 'Lettuce Leaf', price: '12.5$', desc: 'Lacus nisi, et ac dapibus velit in consequat.', img: '/lettuce.jpg' },
            { name: 'Fresh Breakfast', price: '14.5$', desc: 'Lacus nisi, et ac dapibus velit in consequat.', img: '/breakfast.jpg' },
            { name: 'Mild Butter', price: '12.5$', desc: 'Lacus nisi, et ac dapibus velit in consequat.', img: '/butter.jpg' },
            { name: 'Fresh Bread', price: '12.5$', desc: 'Lacus nisi, et ac dapibus velit in consequat.', img: '/bread.jpg' },
            { name: 'Glow Cheese', price: '12.5$', desc: 'Lacus nisi, et ac dapibus velit in consequat.', img: '/cheese.jpg' },
            { name: 'Italian Pizza', price: '14.5$', desc: 'Lacus nisi, et ac dapibus velit in consequat.', img: '/pizza.jpg' },
            { name: 'Slice Beef', price: '12.5$', desc: 'Lacus nisi, et ac dapibus velit in consequat.', img: '/beef.jpg' },
            { name: 'Mushroom Pizza', price: '12.5$', desc: 'Lacus nisi, et ac dapibus velit in consequat.', img: '/mushroom.jpg' },
          ].map((item, index) => (
            <div key={index} className="flex items-center mb-4">
              {/* Small Image */}
              <img
                src="image1.svg"
                alt={item.name}
                className="rounded-full mr-4"
                style={{ width: '80px', height: '79px' }}
              />
              {/* Text Content */}
              <div>
                <h3 className="text-lg font-bold">
                  {item.name} - <span className="text-orange-500">{item.price}</span>
                </h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header4;
