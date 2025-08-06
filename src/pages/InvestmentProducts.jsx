import React from 'react'
import Navbar from '../components/Navbar'
import MarketData from '../components/MarketData'
import Footer from '../components/Footer';
import bgimg from '../assets/bgimage.jpg';
import { ShieldCheck, Lock, Award, Check, FilePlus, TrendingUp, PieChart, Briefcase } from "lucide-react";


const cardData = [
  {
    icon: (
      <TrendingUp
        size={64}
        color="#06C752"
        style={{
          width: "96px",
          height: "64px",
          transform: "rotate(0deg)",
          opacity: 1,
          borderRadius: "0.2px",
        }}
      />
    ),
    borderColor: "#88EDB0",
    title: "Growth Portfolios",
    minInvestment: "$1,000",
    expectedReturn: "8-12%",
    risk: { text: "Medium-High", color: "text-[#D4B13E]" },
    desc: "Diversified equity portfolios designed for long-term capital appreciation with professional risk management.",
    desc2:
      "Diversified equity portfolios are professionally managed collections of company stocks built to grow your money significantly over the long term by spreading out risk.",
  },
  {
    icon: (
      <PieChart
        size={36}
        color="#D4B13E"
        style={{
          width: "88px",
          height: "88px",
          transform: "rotate(0deg)",
          opacity: 1,
        }}
      />
    ),
    borderColor: "#D4B13E",
    title: "Balanced Funds",
    minInvestment: "$500",
    expectedReturn: "5-8%",
    risk: { text: "Medium", color: "text-[#D4B13E]" },
    desc: "Balanced funds are tailored to combine moderate risk and returns using a mix of equities and fixed income instruments.",
    desc2: "Ideal for investors seeking stable returns and capital preservation over time.",
  },
  {
    icon: (
      <Briefcase
        size={64}
        color="#000000"
        style={{
          width: "98px",
          height: "72px",
          transform: "rotate(0deg)",
          opacity: 1,
        }}
      />
    ),
    borderColor: "#717AFF",
    title: "Hedge Strategies",
    minInvestment: "$500",
    expectedReturn: "5-8%",
    risk: { text: "Medium", color: "text-[#D4B13E]" },
    desc: "Hedge strategies aim to limit downside risk using advanced portfolio management techniques.",
    desc2: "Perfect for experienced investors looking to stabilize returns across market cycles.",
  },
  {
    icon: (
      <ShieldCheck
        size={48}
        color="#06C752"
        style={{
          width: "74px",
          height: "92px",
          transform: "rotate(0deg)",
          opacity: 1,
        }}
      />
    ),
    borderColor: "#06C752",
    title: "Fixed Income",
    minInvestment: "$500",
    expectedReturn: "5-8%",
    risk: { text: "Medium", color: "text-[#D4B13E]" },
    desc: "Fixed income options offer predictable returns with low volatility, backed by high-quality debt instruments.",
    desc2: "Best suited for conservative investors seeking consistent income and capital preservation.",
  },
];

const securityPoints = [
  "SIPC insurance up to $500,000",
  "Regular third-party security audits",
  "Transparent fee structure",
  "24/7 fraud monitoring",
];


const InvestmentProducts = () => {
  return (
    <>
      <Navbar />
      <MarketData />
      {/* Header Section */}
<div className="relative w-full h-[186px]">
  <img src={bgimg} alt="Background" className="w-full h-full object-cover" />
  <div className="absolute inset-0 bg-gradient-to-r from-[#0D3142]/80 to-[#128442]/80 z-10" />
  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4">
    <h2 className="text-[25px] md:text-[40px] font-bold font-sans mb-2">
      Investment Products & Offerings
    </h2>
    <p className="text-[16px] md:text-[20px] font-sans max-w-[800px] text-white">
      Choose from our carefully curated investment products designed to meet diverse financial goals and risk preferences.
    </p>
  </div>
</div>

<section className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
  {/* Portfolio Cards */}
  <div className="flex flex-col gap-10">
    {cardData.map((card) => (
      <div
        key={card.title}
        className="flex flex-col md:flex-row items-start rounded-[18px] bg-white px-4 py-6 shadow-sm w-full border-2"
        style={{
          borderColor: `${card.borderColor}55`,
          gap: "1px",
          minHeight: "289px",
        }}
      >
        <div className="mr-0 md:mr-6 mb-4 md:mt-2">{card.icon}</div>

        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-4 gap-4">
            <span className="font-sans font-bold text-[24px] md:text-[30px] leading-[100%] text-black">
              {card.title}
            </span>
            <div
              className="grid grid-cols-2 gap-x-2 text-[13px] font-sans w-full sm:w-[337px]"
              style={{
                height: "69px",
                opacity: 1,
              }}
            >
              <div>Min Investment:</div>
              <div className="text-right pr-4 text-[#06C752] font-semibold">{card.minInvestment}</div>

              <div>Expected Return:</div>
              <div className="text-right pr-4 text-[#C70606] font-semibold">
                {card.expectedReturn}
              </div>

              <div>Risk Level:</div>
              <div className={`${card.risk.color} text-right pr-4 whitespace-nowrap font-semibold`}>
                {card.risk.text}
              </div>
            </div>
          </div>

          <p className="font-sans font-normal text-[16px] leading-[150%] text-[#222] mb-6">
            {card.desc}
          </p>
          <p className="font-sans font-normal text-[16px] leading-[150%] text-[#222]">
            {card.desc2}
          </p>
        </div>
      </div>
    ))}
  </div>

  {/* Security Section */}
  <section className="w-full px-4 py-12 flex flex-col items-center">
    <div className="w-full max-w-[965px] flex flex-col md:flex-row justify-center gap-10 md:gap-[60px] mb-8">
      <div className="flex flex-col items-center text-center flex-1">
        <ShieldCheck size={36} color="#4ecd79" strokeWidth={2.2} className="mb-2" />
        <span className="font-poppins font-semibold text-lg text-black mb-1">Regulatory Compliance</span>
        <span className="font-poppins text-sm text-black text-center">Fully compliant with SEC, FINRA, and SIPC regulations</span>
      </div>
      <div className="flex flex-col items-center text-center flex-1">
        <Lock size={36} color="#222" strokeWidth={2.2} className="mb-2" />
        <span className="font-poppins font-semibold text-lg text-black mb-1">Data Security</span>
        <span className="font-poppins text-sm text-black text-center">Bank-level encryption and security protocols</span>
      </div>
      <div className="flex flex-col items-center text-center flex-1">
        <Award size={36} color="#edc03b" strokeWidth={2.2} className="mb-2" />
        <span className="font-poppins font-semibold text-lg text-black mb-1">Fiduciary Standards</span>
        <span className="font-poppins text-sm text-black text-center">Acting in your best interest at all times</span>
      </div>
    </div>

    <div className="max-w-[965px] w-full flex flex-col md:flex-row justify-between mb-8 text-center md:text-left">
      <div className="text-xs text-gray-500 mb-2 md:mb-0">SEC Registered . FINRA Member . SIPC Protected</div>
      <div className="text-xs text-gray-500 mb-2 md:mb-0">256-bit SSL, SOC 2 Certified, Multi-Factor Auth</div>
      <div className="text-xs text-gray-500">Fiduciary Duty, Transparent Fees, Best Execution</div>
    </div>

    <div className="bg-[#F7FFFA] border border-[#88EDB099] rounded-[20px] max-w-[1226px] w-full p-6 sm:p-8 flex flex-col md:flex-row md:items-center">
      <div className="flex-1">
        <div className="font-poppins font-semibold text-xl sm:text-2xl text-black mb-2">
          Your Investment Security is Our Priority
        </div>
        <p className="font-poppins text-sm sm:text-base text-black mb-4">
          SigmaVault is committed to maintaining the highest standards of regulatory compliance and investment security. Our comprehensive approach ensures your assets are protected while providing transparent, fiduciary-level service.
        </p>

        <ul className="mb-6 space-y-2">
          {securityPoints.slice(0, 3).map((point) => (
            <li key={point} className="flex items-center font-sans text-base text-[#222]">
              <div className="w-[26px] h-[26px] rounded-full bg-[#C9F3DD] flex items-center justify-center mr-2">
                <Check size={16} color="#20bd6f" strokeWidth={3} />
              </div>
              {point}
            </li>
          ))}
          <li className="flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-4">
            <div className="flex items-center font-sans text-base text-[#222]">
              <div className="w-[26px] h-[26px] rounded-full bg-[#C9F3DD] flex items-center justify-center mr-2">
                <Check size={16} color="#20bd6f" strokeWidth={3} />
              </div>
              24/7 fraud monitoring
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 w-full sm:w-auto">
              <div className="flex items-center gap-2">
                <ShieldCheck size={24} color="#32C378" strokeWidth={2.5} />
                <div className="leading-tight">
                  <div className="font-sans font-bold text-[18px] text-black">$2.5B+</div>
                  <div className="font-sans text-[13px] text-[#333]">Assets Protected</div>
                </div>
              </div>

              <button className="flex items-center gap-2 border border-[#32C378] text-[#20bd6f] font-sans font-semibold rounded-full px-4 py-1.5 text-sm hover:bg-[#f4fff9] transition-all">
                <FilePlus size={16} color="#32C378" strokeWidth={2} />
                View Compliance Details
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</section>

  
      <Footer />
      </>
  )
}

export default InvestmentProducts