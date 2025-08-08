import React from "react";
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
  
    <div
      className="
        px-4 lg:px-20 py-6 w-full
        [@media(max-width:390px)]:px-3
        [@media(max-width:375px)]:px-2
      "
    >
      {/* Title */}
      <div
        className="
          text-[#C70606] font-bold text-lg mb-4 text-center lg:text-left
          [@media(max-width:390px)]:text-base
          [@media(max-width:375px)]:text-sm
        "
      >
        Live Market Data
      </div>

      {/* Mobile + Tablet (Scrollable Row) */}
     <div className="flex lg:hidden overflow-x-auto scrollbar-hide gap-6 w-full">

        {stats.map((item, index) => (
          <div
            key={index}
            className="
              flex-shrink-0 min-w-[130px] flex flex-col items-center text-center gap-1
              [@media(max-width:390px)]:min-w-[110px]
              [@media(max-width:375px)]:min-w-[105px]
            "
          >
            <div
              className="
                text-sm text-gray-600
                [@media(max-width:390px)]:text-xs
                [@media(max-width:375px)]:text-[11px]
              "
            >
              {item.title}
            </div>
            <div
              className="
                text-xl font-bold text-gray-800
                [@media(max-width:390px)]:text-lg
                [@media(max-width:375px)]:text-base
              "
            >
              {item.number}
            </div>
            <img
              src={item.img}
              alt={item.title}
              className="
                w-10 h-auto
                [@media(max-width:390px)]:w-8
                [@media(max-width:375px)]:w-7
              "
            />
          </div>
        ))}
      </div>

      {/* Desktop (Grid / Flex) */}
      <div className="hidden lg:flex lg:justify-evenly lg:items-center max-w-[1294px] mx-auto">
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center gap-1"
          >
            <div className="text-sm text-gray-600">{item.title}</div>
            <div className="text-xl font-bold text-gray-800">{item.number}</div>
            <img
              src={item.img}
              alt={item.title}
              className="w-12 h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketData;
