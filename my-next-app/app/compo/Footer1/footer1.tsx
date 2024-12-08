import React from 'react';

const FooterContainer = () => {
  return (
    <div className="w-[1920px] h-[100px] bg-[#FFA500] flex justify-between items-center px-6">
      {/* Text at the left */}
      <p className="text-white text-sm">
        Copyright © 2022 by Ayeman. All Rights Reserved.
      </p>

      {/* Image at the right side with size 240x34 */}
      <img
        src="sicon.svg" // Replace with the actual image path
        alt="Right Side Image"
        className="w-[240px] h-[34px]"
      />
    </div>
  );
};

export default FooterContainer;
