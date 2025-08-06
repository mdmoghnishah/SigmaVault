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
    icon: <Target size={40} strokeWidth={2.3} className="text-green-600 mx-auto md:mx-8 mb-4" />,
    title: "Goal Planner",
    description:
      "Set financial goals and create a roadmap to achieve them with personalized investment strategies.",
  },
  {
    icon: <TrendingUp size={40} strokeWidth={2.3} className="text-gray-700 mx-auto md:mx-8 mb-4" />,
    title: "Risk Profiler",
    description:
      "Assess your risk tolerance and get recommendations for optimal portfolio allocation.",
  },
  {
    icon: <Calendar size={40} strokeWidth={2.3} className="text-yellow-500 mx-auto md:mx-8 mb-4" />,
    title: "Retirement Calculator",
    description:
      "Plan for retirement with detailed projections and contribution optimization strategies.",
  },
  {
    icon: <PieChart size={40} strokeWidth={2.3} className="text-green-600 mx-auto md:mx-8 mb-4" />,
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
          <h2 className="text-[22px] md:text-[30px] lg:text-[40px] font-bold font-sans mb-2">
            Investment Calculator & Planning Tools
          </h2>
          <p className="text-[14px] md:text-[16px] lg:text-[20px] font-sans max-w-[800px]">
            Plan your financial future with our comprehensive suite of calculators and planning tools designed to help you make informed investment decisions.
          </p>
        </div>
      </div>

      <section className="w-full bg-white flex flex-col items-center justify-center py-10 px-4 sm:px-6 lg:px-10">
        {/* Dual Card Section */}
        <div className="flex flex-col lg:flex-row gap-10 w-full max-w-7xl mb-20">
          {/* Investment Projection Card */}
          <div className="bg-[#F7FFFA] border border-[#88EDB099] rounded-2xl w-full px-6 py-8 flex flex-col items-center">
            <div className="flex items-center gap-2 text-[#06C752] mb-2">
              <TrendingUp size={24} />
              <span className="text-xl md:text-2xl font-bold text-center text-[#06C752]">
                Investment Projection
              </span>
            </div>
            <div className="text-3xl md:text-4xl font-bold text-[#06C752]">$113,669</div>
            <div className="text-base text-[#222] my-2">Projected Portfolio Value</div>

            <div className="w-full flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-[#222]">$70,000</span>
                <span className="text-base text-[#222] mt-2">Total Contributions</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-[#06C752]">$43,669</span>
                <span className="text-base text-[#202020] mt-2">Total Gains</span>
              </div>
            </div>

            <div className="w-full mb-2">
              <span className="text-base font-bold text-[#222]">Growth Breakdown</span>
            </div>
            <div className="w-full flex justify-between text-sm md:text-base mb-6">
              <div className="flex flex-col gap-1">
                <span className="font-bold text-[#222]">Contributions:</span>
                <span className="font-bold text-[#222]">Investment Growth:</span>
              </div>
              <div className="flex flex-col items-end gap-1 font-semibold">
                <span>61.6%</span>
                <span>38.4%</span>
              </div>
            </div>

            <div className="w-full flex flex-col gap-4">
              <button className="w-full h-12 bg-[#06C752] text-white rounded-md font-bold text-lg hover:brightness-110 transition">
                Start Trading
              </button>
              <button className="w-full h-12 border border-gray-300 text-black bg-white rounded-md font-bold text-lg hover:bg-gray-100 transition">
                Download Report
              </button>
            </div>
          </div>

          {/* Growth Calculator Card */}
          <div className="bg-[#D9D9D966] border-2 border-[#2020201A] rounded-2xl w-full px-6 py-6">
            <h2 className="text-xl md:text-2xl font-bold text-center text-[#222] mb-6">
              Investment Growth Calculator
            </h2>

            <div className="flex flex-col gap-4">
              <div>
                <label className="block mb-1 font-medium">Initial Investment Amount</label>
                <input type="number" placeholder="$0" className="w-full h-10 border p-2 rounded" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Monthly Contribution</label>
                <input type="number" placeholder="$0" className="w-full h-10 border p-2 rounded" />
              </div>
              <div>
                <label className="block mb-1">Time Horizon: 10 years</label>
                <input type="range" min="1" max="50" defaultValue="10" className="w-full" />
                <div className="flex justify-between text-xs">
                  <span>1 year</span>
                  <span>50 years</span>
                </div>
              </div>
              <div>
                <label className="block mb-1">Expected Annual Return: 8%</label>
                <input type="range" min="1" max="15" defaultValue="8" className="w-full" />
                <div className="flex justify-between text-xs">
                  <span>1%</span>
                  <span>15%</span>
                </div>
              </div>
              <div>
                <label className="block font-bold text-base mb-1">Investment Goal</label>
                <select className="w-full h-10 px-2 border rounded">
                  <option>Retirement Goal</option>
                  <option>College Fund</option>
                  <option>Home Purchase</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Tools Section */}
        <div className="w-full max-w-7xl flex flex-col items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
            {tools.map(({ icon, title, description }) => (
              <div key={title} className="flex flex-col items-center text-center md:text-left md:items-start">
                {icon}
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-sm text-[#202020]">{description}</p>
                <span className="mt-2 font-bold text-sm cursor-pointer hover:underline">Try Tool</span>
              </div>
            ))}
          </div>

          <button className="mt-10 w-full max-w-xs h-12 bg-gradient-to-r from-[#223D45] to-[#06C752cc] text-white font-semibold rounded-md flex items-center justify-center gap-2">
            <CalculatorIcon size={20} />
            Access Planning Tools
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      <Security />
      <Footer />
    </>
  )
}

export default Calculator
