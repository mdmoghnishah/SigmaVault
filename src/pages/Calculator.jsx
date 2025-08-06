import React from 'react'
import Navbar from '../components/Navbar'
import MarketData from '../components/MarketData'
import Footer from '../components/Footer';
import Security from '../components/Security'
import bgimg from '../assets/bgimage.jpg';
import {
  TrendingUp,
  Target,
  Calendar,
  PieChart,
  ArrowRight,
  Calculator as CalculatorIcon,
} from "lucide-react";

const tools = [
  {
    icon: <Target size={40} strokeWidth={2.3} className="text-green-600 mx-8 mb-4" />,
    title: "Goal Planner",
    description:
      "Set financial goals and create a roadmap to achieve them with personalized investment strategies.",
  },
  {
    icon: <TrendingUp size={40} strokeWidth={2.3} className="text-gray-700 mx-8 mb-4" />,
    title: "Risk Profiler",
    description:
      "Assess your risk tolerance and get recommendations for optimal portfolio allocation.",
  },
  {
    icon: <Calendar size={40} strokeWidth={2.3} className="text-yellow-500 mx-8 mb-4" />,
    title: "Retirement Calculator",
    description:
      "Plan for retirement with detailed projections and contribution optimization strategies.",
  },
  {
    icon: <PieChart size={40} strokeWidth={2.3} className="text-green-600 mx-8 mb-4" />,
    title: "Portfolio Optimizer",
    description:
      "Optimize your asset allocation based on your goals, timeline, and risk tolerance.",
  },
];
const Calculator = () => {
  return (
    <>
      <Navbar />
      <MarketData />
      <div className="relative w-full h-[186px]">
              <img src={bgimg} alt="Background" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0D3142]/80 to-[#128442]/80 z-10" />
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4">
                <h2 className="text-[25px] md:text-[40px] font-bold font-sans mb-2">
                 Investment Calculator & Planning Tools
                </h2>
                <p className="text-[16px] md:text-[20px] font-sans max-w-[800px] text-white">
                  Plan your financial future with our comprehensive suite of calculators and planning tools designed to help you make informed investment decisions.
                </p>
              </div>
            </div>
      <section className="w-full bg-white flex flex-col items-center justify-center py-10 px-2">
      {/* ====== Investment Projection + Growth Calculator Dual Card ====== */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start justify-center w-full mb-20">
        {/* Left Card: Investment Projection */}
        <div
          className="bg-[#F7FFFA] border-[1px] border-[#88EDB099] rounded-[20px] max-w-[613px] w-full px-[32px] py-[28px] flex flex-col items-center"
          style={{ minHeight: '572px' }}
        >
          {/* Header */}
          <div className="flex items-center gap-2 text-[#06C752] mb-2">
            <TrendingUp size={24} />
            <span className="font-sans font-bold text-[24px] leading-[100%] text-center text-[#06C752]">
              Investment Projection
            </span>
          </div>
          {/* Total Value */}
          <div className="text-[2.5rem] font-poppins font-bold text-[#06C752]">$113,669</div>
          <div className="font-poppins text-[#222] text-base mb-7 mt-1">
            Projected Portfolio Value
          </div>
          {/* Totals Block */}
          <div className="w-[500px] h-[66px] flex justify-between items-start mb-6">
            {/* Total Contributions */}
            <div className="flex flex-col items-center">
              <span className="font-sans font-bold text-[36px] text-[#222] leading-[1]">
                $70,000
              </span>
              <span className="font-sans text-[16px] mt-2 text-[#222]">
                Total Contributions
              </span>
            </div>
            {/* Total Gains */}
            <div className="flex flex-col items-center">
              <span className="font-sans font-bold text-[36px] text-[#06C752] leading-[1]">
                $43,669
              </span>
              <span className="font-sans text-[16px] mt-2 text-[#202020]">
                Total Gains
              </span>
            </div>
          </div>
          {/* Growth Breakdown */}
          <div className="w-full mb-2">
            <span className="font-sans font-bold text-[16px] text-[#222] leading-[24px]">
              Growth Breakdown
            </span>
          </div>
          <div className="w-full flex justify-between mb-7 font-poppins text-[16px]">
            <div className="flex flex-col gap-1">
              <span className="font-sans font-bold text-[#222]">
                Contributions:
              </span>
              <span className="font-sans font-bold text-[#222]">
                Investment Growth:
              </span>
            </div>
            <div className="flex flex-col items-end gap-1 font-semibold">
              <span>61.6%</span>
              <span>38.4%</span>
            </div>
          </div>
          {/* Buttons */}
          <div className="w-[412.3px] h-[106.23px] flex flex-col gap-[16px]">
            <button className="w-full h-[44px] bg-[#06C752] text-white rounded-[8px] font-sans font-bold text-[24px] leading-[24px] hover:brightness-110 transition">
              Start Trading
            </button>
            <button className="w-full h-[44px] border border-[#d1d5db] text-[#202020] bg-white rounded-[8px] font-sans font-bold text-[24px] leading-[24px] hover:bg-gray-100 transition">
              Download Report
            </button>
          </div>
        </div>
        {/* Right Card: Investment Growth Calculator */}
        <div className="flex-grow flex items-center justify-center">
          <div
            className="bg-[#D9D9D966] border-[2.4px] border-[#2020201A] rounded-[20px] w-[623px] h-[572px] px-[44px] py-[24px] flex flex-col gap-[24px] opacity-100"
            style={{ minWidth: "300px" }}
          >
            <h2 className="font-sans font-bold text-[28px] leading-[24px] text-[#222] text-center mb-4">
              Investment Growth Calculator
            </h2>
            <div className="flex flex-col gap-[12px]">
              {/* Initial Investment */}
              <div>
                <label className="block mb-2 font-poppins">Initial Investment Amount</label>
                <input
                  type="number"
                  placeholder="$0"
                  className="w-full h-[40px] rounded-[4px] border border-[#00000099] p-2"
                />
              </div>
              {/* Monthly Contribution */}
              <div>
                <label className="block mb-2 font-poppins">Monthly Contribution</label>
                <input
                  type="number"
                  placeholder="$0"
                  className="w-full h-[40px] rounded-[4px] border border-[#00000099] p-2"
                />
              </div>
              {/* Time Horizon Slider */}
              <div>
                <label className="block mb-2 font-poppins">Time Horizon: 10 years</label>
                <input
                  type="range"
                  min="1"
                  max="50"
                  defaultValue="10"
                  className="w-full h-[16px] border border-[#00000099] rounded-l-[4px] mb-1"
                />
                <div className="flex justify-between text-xs w-full h-[14px]">
                  <span>1 year</span>
                  <span>50 year</span>
                </div>
              </div>
              {/* Expected Annual Return Slider */}
              <div>
                <label className="block mb-2 font-poppins">
                  Expected Annual Return: 8%
                </label>
                <input
                  type="range"
                  min="1"
                  max="15"
                  defaultValue="8"
                  className="w-full h-[8px] border border-[#00000099] rounded-[4px] mb-1"
                />
                <div className="flex justify-between text-xs w-full h-[14px]">
                  <span>1%</span>
                  <span>15%</span>
                </div>
              </div>
              {/* Investment Goal Dropdown */}
              <div>
                <label
                  htmlFor="investmentGoal"
                  className="font-sans font-bold text-[20px] leading-[100%] text-[#000000] block mb-1"
                >
                  Investment Goal
                </label>
                <select
                  id="investmentGoal"
                  defaultValue="Retirement Goal"
                  className="w-full h-[40px] px-[9px] py-[8px] border border-[#00000099] rounded-[4px] font-sans text-[16px] text-black"
                >
                  <option>Retirement Goal</option>
                  <option>College Fund</option>
                  <option>Home Purchase</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ====== Tools Feature Section ====== */}
      <div className="w-full max-w-[1117px] mx-auto flex flex-col items-center py-10 px-2">
        {/* Tool Cards */}
        <div className="flex flex-col md:flex-row justify-between items-stretch gap-y-10 md:gap-x-[34px] w-full">
          {tools.map(({ icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col items-center md:items-start w-full max-w-[240px] min-w-[190px] mx-auto"
              style={{ gap: "10px" }}
            >
              {icon}
              <h3 className="font-poppins font-semibold text-lg text-center md:text-left text-black">
                {title}
              </h3>
              <p className="font-sans font-normal text-[16px] leading-[1.1] tracking-[0] text-center md:text-left text-[#202020] mb-2">
                {description}
              </p>
              <div className="mt-[8px] font-poppins font-bold text-black text-center md:text-left w-full">
                <span className="font-sans font-bold text-[16px] leading-[1] tracking-[0] cursor-pointer hover:underline">
                  Try Tool
                </span>
              </div>
            </div>
          ))}
        </div>
        {/* One Centered Button Below Cards */}
        <button
          className="mt-10 w-[335px] h-[48px] flex items-center justify-center gap-[10px] rounded-[6px] px-2 py-3 text-white font-semibold text-[16px]"
          style={{
            background:
              "linear-gradient(90deg, #223D45 0%, rgba(6, 199, 82, 0.8) 99.99%)",
          }}
        >
          <CalculatorIcon size={20} className="mr-1" />
          Access Planning tools
          <ArrowRight size={20} className="ml-1" />
        </button>
      </div>
    </section>

<Security />
      <Footer />
    </>
  )
}

export default Calculator