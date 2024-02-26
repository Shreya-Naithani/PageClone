import React from "react";
import { FaStar } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import "./ProductData";

const Card1 = ({ productData }) => {
  if (!productData) {
    return <div>No product data available</div>;
  }
  const { id, image, name, grade, rating, description, highlights, heading } =
    productData;
  return (
    <div
      key={id}
      className="flex full-screen-container max-w-4xl mx-auto bg-white p-4 shadow-md rounded-md mb-3 mt-5 "
    >
      <div className="w-1/3 ">
        <button className="flex items-center bg-orange-500 text-white px-4 py-2 rounded">
          <FaTrophy />
          <span className=" ml-1 mr-2">Best Choice</span>
        </button>
           <div className="flex items-center justify-center">
        <div className="w-[54%] h-[54%] flex flex-col items-center justify-center mt-3 mr-4">
          <img
            src={image}
            alt="Product"
            className=" mb-2 flex items-center justify-center rounded-md"
          />
          <p className="text-gray-500 flex items-center justify-center">
            {name}
          </p>
        </div>
        </div>
      </div>

      {/* Right side (details) */}
      <div className="w-2/3 ml-4">
        <p className="text-gray-700 mb-2">
          <span className="font-bold text-gray-600">{heading} </span>
          <span className="text-gray-700">{description}</span>
        </p>

        <div className="mb-4">
          <h3 className="font-bold text-gray-700 mb-1">Main highlights</h3>
          <p className="list-disc list-inside text-gray-700">{highlights}</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <select className=" text-blue-700 outline-none px-2 py-1 rounded">
              <option>Show More</option>
            </select>
          </div>
        </div>
      </div>
      <div className="space-x-2 ">
        <div className="flex flex-col ml-10 bg-blue-50 rounded-md p-2">
          <div className="flex flex-col justify-center items-center">
            <span className="text-blue-800 text-4xl">{rating}</span>
            <span className="text-blue-800 mb-2">{grade}</span>
            <div className="flex text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
        </div>
        <button className="bg-blue-500 mt-[8rem] w-[12rem] text-white px-4 py-2 rounded-md hover:scale-105">
          View
        </button>
      </div>
    </div>
  );
};

export default Card1;
