import React from "react";
import { BiCheckCircle } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import Card1 from "./Card1";
import productData from './ProductData';
import Card2 from "./Card2";
import Signup from "./Signup";
import Footer from './footer';

const MainPage = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div>
          <h1 className="mt-6 mb-3 w-[58rem] text-gray-800 text-5xl">
            Best Website builders in the US
          </h1>
          <hr className="border-t-2 border-gray-200" />
          <div className="flex justify-between items-start">
            <div className="flex  justify-start items-center">
              <BiCheckCircle className="text-gray-500" size={20} />
              <div className="text-gray-600 mx-1 py-2">
                Last Updated - February 22, 2020
              </div>
              <BsInfoCircle className="bg-transparent text-gray-600 ml-4" />
              <div className="text-gray-600 mx-2 py-2">
                Advertising Disclosure
              </div>
            </div>
            <div className="flex justify-normal items-center">
              <div className="text-gray-600 mx-3 py-2">Top Relevant</div>
              <AiOutlineDown className="text-gray-600" />
            </div>
          </div>
          <hr className="border-t-2 border-gray-200 mb-3" />
        </div>
      </div>
      <div className="flex items-center justify-center mb-3">
        <button className="px-8 mr-1 text-gray-600 bg-gray-100 bg-opacity-25 hover:bg-opacity-50 py-2 rounded">
          Tools
        </button>
        <button className="mx-4 text-gray-600 bg-gray-100 bg-opacity-25 hover:bg-opacity-50 py-2 px-8 rounded">
          AWS Builder
        </button>
        <button className="mx-3 text-gray-600 bg-gray-100 bg-opacity-25 hover:bg-opacity-50 py-2 px-8 rounded">
          Start Build
        </button>
        <button className="mx-3 text-gray-600 bg-gray-100 bg-opacity-25 hover:bg-opacity-50 py-2 px-8 rounded">
          Build Supplies
        </button>
        <button className="mx-3 text-gray-600 bg-gray-100 bg-opacity-25 hover:bg-opacity-50 py-2 px-8 rounded">
          Tooling
        </button>
        <button className="mx-3 text-gray-600 bg-gray-100 bg-opacity-25 hover:bg-opacity-50 py-2 px-8 rounded">
          BlueHosting
        </button>
      </div>

      <div className="ml-[19rem] text-gray-500 mb-4">
        Home &gt; Hosting for all &gt; Hosting &gt; Hosting6 &gt; Hosting5
      </div>
      <div>
        {productData.map((product) => (
          <Card1 key={product.id} productData={product} />
        ))}
      </div>
     
        <Card2/>
       <Signup/>
       <Footer/>
    </div>
  );
};

export default MainPage;
