import React from "react";

const FixedSizeImage = () => {
  return (
    <div className="flex justify-center items-center">
      <img
        src="/food.svg" // Replace with the actual image URL or path
        alt="Descriptive Alt Text"
        className="object-cover"
        style={{ width: "1320px", height: "941px" }}
      />
    </div>
  );
};

export default FixedSizeImage;
