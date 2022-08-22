import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 ">
      <div className="max-h-[500px] relative">
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Custom Made
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="hover:text-red-600">T</span>
            <span className="hover:text-blue-800">e</span>x
            <span className="hover:text-red-600">a</span>
            <span className="hover:text-blue-800">s</span> Built
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover"
          src="Texas Tech 5.jpg"
          alt="BTX Logo"
        />
      </div>
    </div>
  );
};

export default Hero;
