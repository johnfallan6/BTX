import React from "react";
import {products} from "../Data/products.js"

const ProductCards = () => {
  return (
    <div className="max-w-[1640px] grid md:grid-cols-3 mx-auto p-4 py-12 gap-8">
      {/* Card */}
      {products.map(({ id, title, src, alt }) => (
        <div className="relative rounded-xl text-white">
          <div key={id} className="rounded-xl">
            {/* overlay */}
            <div className="absolute w-full gap-6 h-full bg-black/20 rounded-xl">
              <p className="text-2xl font-bold px-2 py-4 capitalize">{title}</p>
              <button className="border-white bg-slate-200/80 hover:scale-110 duration-200 hover:bg-slate-600 hover:text-white text-black mx-3 absolute bottom-4">
                Order Now!
              </button>
            </div>
            <img
              className="max-h-[200px] md:max-h-[250px] w-full object-cover rounded-xl hover:scale-105 duration-300"
              src={src}
              alt={alt}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
