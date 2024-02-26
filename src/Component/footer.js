import React from "react";
import { AiOutlineDown } from "react-icons/ai";

const footer = () => {
  return (
    <div className="bg-gray-800 w-full h-[25rem]">
      <div className="flex items-center justify-center  text-white">
        <div className="flex flex-col mt-10 mr-[18rem]">
          <h1 className="text-white uppercase mb-3">categories</h1>
          <p className="text-gray-400 mb-2">Web Builder</p>
          <p className="text-gray-400 mb-2">Hosting</p>
          <p className="text-gray-400 mb-2">Data Center</p>
          <p className="text-gray-400 mb-2">Robotic Automation</p>
        </div>
        <div className="flex flex-col mt-[4rem] mr-[15rem]">
          <h1 className="text-white uppercase mb-3">contact</h1>
          <p className="text-gray-400 mb-2">Contact</p>
          <p className="text-gray-400 mb-2">Privacy Policy</p>
          <p className="text-gray-400 mb-2">Terms Of Service</p>
          <p className="text-gray-400 mb-2">Categories</p>
          <p className="text-gray-400 mb-2">About</p>
        </div>
        <div className="flex mt-10">
          <p className="text-gray-400 mr-2">United States</p>
          <span className="mt-1 ">
            <AiOutlineDown className="text-gray-400" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default footer;
