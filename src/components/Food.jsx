import React, { useState } from "react"; // Import useState
import { data } from "../assets/data";

const Food = () => {
  const [foods, setFoods] = useState(data);

  // Filter Type
  const filterType = (category) => {
    setFoods(data.filter((item) => item.category === category));
  };

  // Filter Price (Optional: Implementing filter price logic)
  const filterPrice = (price) => {
    setFoods(data.filter((item) => item.price === price));
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      {/* Heading */}
      <h1 className="text-orange-600 font-bold text-4xl text-center tracking-wide">
        Top Rated Menu Items
      </h1>

      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between mt-4">
        {/* Filter Type */}
        <div>
          <p className="font-bold text-gray-700 py-2">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <button
              onClick={() => setFoods(data)}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
            >
              All
            </button>
            {["burger", "pizza", "salad", "chicken"].map((category) => (
              <button
                key={category}
                onClick={() => filterType(category)}
                className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}{" "}
                {/* Capitalize first letter */}
              </button>
            ))}
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className="font-bold text-gray-700 mt-2 py-2">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            {["$", "$$", "$$$", "$$$$"].map((price) => (
              <button
                key={price}
                onClick={() => filterPrice(price)}
                className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
              >
                {price}
              </button>
            ))}
          </div>
        </div>
      </div>
      <hr className="mt-2" />

      {/* Display Foods Images */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, i) => (
          <div
            key={i}
            className="border shadow-2xl rounded-lg hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-orange-500 p-1 rounded-full text-white">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
