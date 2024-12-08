import React from 'react';

function NewComponent() {
  return (
    <div className="w-full bg-black text-white p-5">
      {/* Total Container (1920px x 469px) */}
      <div className="mx-auto w-[1920px] h-[469px] flex justify-between relative top-[3197px] left-[-1px]">
        {/* First Image (Chef) */}
        <div className="flex flex-col items-center w-[218px] h-[247px]">
          <img
            src="/chef.jpg" // Use your actual image path
            alt="Chef"
            className="w-[218px] h-[247px] object-cover rounded-lg"
          />
          <p className="text-center text-white mt-2 font-semibold">Professional Chefs</p>
        </div>
        
        {/* Space Between Images */}
        <div className="w-[45px]"></div>
        
        {/* Second Image (Group) */}
        <div className="flex flex-col items-center w-[162px] h-[247px]">
          <img
            src="/group.jpg" // Use your actual image path
            alt="Group"
            className="w-[162px] h-[247px] object-cover rounded-lg"
          />
          <p className="text-center text-white mt-2 font-semibold">Items of Food</p>
        </div>
        
        {/* Space Between Images */}
        <div className="w-[45px]"></div>

        {/* Third Image (Fork) */}
        <div className="flex flex-col items-center w-[248px] h-[247px]">
          <img
            src="/fork.jpg" // Use your actual image path
            alt="Fork"
            className="w-[248px] h-[247px] object-cover rounded-lg"
          />
          <p className="text-center text-white mt-2 font-semibold">Years of Experienced</p>
        </div>
        
        {/* Space Between Images */}
        <div className="w-[45px]"></div>

        {/* Fourth Image (Pizza) */}
        <div className="flex flex-col items-center w-[206px] h-[247px]">
          <img
            src="/pizza.jpg" // Use your actual image path
            alt="Pizza"
            className="w-[206px] h-[247px] object-cover rounded-lg"
          />
          <p className="text-center text-white mt-2 font-semibold">Happy Customers</p>
        </div>
      </div>

      {/* Mid Section (1319px x 247px) */}
      <div className="mx-auto w-[1319px] h-[247px] flex justify-between mt-8">
        {/* First Image in Middle Layout */}
        <div className="flex flex-col items-center w-[218px] h-[247px]">
          <img
            src="/chef.svg" // Use your actual image path
            alt="Chef"
            className="w-[218px] h-[247px] object-cover rounded-lg"
          />
          <p className="text-center text-white mt-2 font-semibold">Professional Chefs</p>
        </div>
        
        {/* Space Between Images */}
        <div className="w-[45px]"></div>
        
        {/* Second Image in Middle Layout */}
        <div className="flex flex-col items-center w-[162px] h-[247px]">
          <img
            src="/group.svg" // Use your actual image path
            alt="Group"
            className="w-[162px] h-[247px] object-cover rounded-lg"
          />
          <p className="text-center text-white mt-2 font-semibold">Items of Food</p>
        </div>
        
        {/* Space Between Images */}
        <div className="w-[45px]"></div>

        {/* Third Image in Middle Layout */}
        <div className="flex flex-col items-center w-[248px] h-[247px]">
          <img
            src="/fork.svg" // Use your actual image path
            alt="Fork"
            className="w-[248px] h-[247px] object-cover rounded-lg"
          />
          <p className="text-center text-white mt-2 font-semibold">Years of Experienced</p>
        </div>
        
        {/* Space Between Images */}
        <div className="w-[45px]"></div>

        {/* Fourth Image in Middle Layout */}
        <div className="flex flex-col items-center w-[206px] h-[247px]">
          <img
            src="/piza.svg" // Use your actual image path
            alt="Pizza"
            className="w-[206px] h-[247px] object-cover rounded-lg"
          />
          <p className="text-center text-white mt-2 font-semibold">Happy Customers</p>
        </div>
      </div>
    </div>
  );
}

export default NewComponent;
