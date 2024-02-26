import React from "react";

const Card2 = () => {
  const cardsData = [
    {
      id: 1,
      image: "/image1.jpg",
      paragraph1: "20% Off",
      paragraph2: "WebBuilder 1",
      paragraph3: "Computer Modern Classic with Wix Support",
      spanContents1: "$39.96",
      spanContents2: "$49.96",
      spanContents3: "(20% Off)",
    },
    {
      id: 2,
      image: "/image1.jpg",
      image: "/image1.jpg",
      paragraph1: "20% Off",
      paragraph2: "WebBuilder 1",
      paragraph3: "Computer Modern Classic with Wix Support",
      spanContents1: "$39.96",
      spanContents2: "$49.96",
      spanContents3: "(20% Off)",
    },
    {
      id: 3,
      image: "/image1.jpg",
      paragraph1: "20% Off",
      paragraph2: "WebBuilder 1",
      paragraph3: "Computer Modern Classic with Wix Support",
      spanContents1: "$39.96",
      spanContents2: "$49.96",
      spanContents3: "(20% Off)",
    },
    // Add data for the other two similar cards
    // ...
  ];
  return (
    <div className="mx-auto container flex flex-col justify-center items-center ">
      <div className="flex justify-start text-gray-700 items-center text-3xl mb-5">
        Related Deals you might like for
      </div>
      <div className=" flex justify-center items-center ">
        {cardsData.map((card) => (
          <div
            key={card.id}
            className="bg-white p-6 flex flex-col max-w-[20rem] justify-center items-center rounded-md shadow-md mx-3"
          >
            <img
              src={card.image}
              alt="Card Image"
              className="mb-4 w-[54%] h-[54%]"
            />

            <p>
              <span className="bg-blue-50 mr-2 rounded-md p-1 text-blue-700 text-sm mb-2 ">
                {card.paragraph1}
              </span>{" "}
              <span className=" text-blue-700 bg-blue-50 rounded-md p-1 text-sm mb-2">
                Limited Time
              </span>
            </p>
            <p className="text-gray-500 font-bold">{card.paragraph2}</p>
            <p className="text-gray-700">{card.paragraph3}</p>

            <div className="flex mb-4">
              <span className="mr-2 text-2xl text-gray-500 ">
                {card.spanContents1}
              </span>
              <span className="mr-2 text-gray-400 text-sm">
                {card.spanContents2}
              </span>
              <span className="mr-1 text-red-400">{card.spanContents3}</span>
            </div>

            <button className="bg-blue-500 w-[14rem] text-white px-4 py-2 rounded-md hover:scale-105">
              View Deal
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card2;
