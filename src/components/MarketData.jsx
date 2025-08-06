import React from 'react'
import iconImage from "../assets/Frame24.png";
import iconImage1 from "../assets/Frame25.png";
import iconImage2 from "../assets/Frame26.png";
import iconImage3 from "../assets/Frame27.png";
import iconImage4 from "../assets/Frame28.png";
import iconImage5 from "../assets/Frame29.png";
import iconImage6 from "../assets/Frame30.png";

const stats = [
    { title: "NASADAQ", number: 1200, img: iconImage },
    { title: "DCIW", number: 450, img: iconImage1 },
    { title: "VIX", number: 11235, img: iconImage2 },
    { title: "S&P 500 ", number: 1237, img: iconImage3 },
    { title: "TRENT ", number: 7323, img: iconImage4 },
    { title: "DIXON ", number: 7123, img: iconImage5 },
    { title: "RELIANCE", number: 2237, img: iconImage6 },
    { title: "JIO", number: 1327, img: iconImage6 },
];


const MarketData = () => {
    return (
       <div className="px-4 md:px-20 py-6 w-full">
  {/* Title */}
  <div className="text-[#C70606] font-bold text-lg mb-4 text-center md:text-left">
    Live MarketData
  </div>

  {/* Scrollable Stats Section with Hidden Scrollbar */}
  <div className="md:flex md:justify-evenly md:items-center w-full max-w-[1294px] mx-auto overflow-x-auto md:overflow-visible scrollbar-hide">
    <div className="flex md:flex-row gap-6 md:gap-0 w-max md:w-full px-2">
      {stats.map((item, index) => (
        <div
          key={index}
          className="min-w-[150px] flex-shrink-0 flex flex-col items-center text-center gap-1"
        >
          <div className="text-sm text-gray-600">{item.title}</div>
          <div className="text-xl font-bold text-gray-800">{item.number}</div>
          <img
            src={item.img}
            alt={item.title}
            className="w-[40px] h-[14px]"
          />
        </div>
      ))}
    </div>
  </div>
</div>




    )
}

export default MarketData