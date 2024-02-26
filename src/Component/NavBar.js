import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-3">
        <div className="flex mx-auto items-center justify-center container">
      <div className="flex items-center justify-between">
           <div className="flex items-center bg-white rounded-md px-2 mx-6">
            <AiOutlineSearch className="text-gray-500 text-2xl" />
            <input
              type="text"
              placeholder="Search"
              className="px-2 py-1 rounded-md focus:outline-none"
            />
          </div>
          <div>
            <a href="#" className="text-gray-200 mx-6">Categories</a>
          </div>
          <div>
            <a href="#" className="text-gray-200  mx-6">Website Builders</a>
          </div>
          <div>
            <a href="#" className="text-gray-200  mx-6">Today's Deals</a>
          </div>
        </div>
        
      </div>
     
    </nav>
  );
};

export default NavBar;
