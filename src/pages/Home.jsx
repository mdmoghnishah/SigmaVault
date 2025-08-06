import React from 'react'

import Navbar from '../components/Navbar'
import MarketData from '../components/MarketData'
import Footer from '../components/Footer';
import Security from '../components/Security';
import bgimage from '../assets/Frame21.png';
import bg from '../assets/unsplash_RxbkUG80Rag.png';
import { TrendingUp } from 'lucide-react';
import { Clock3 } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Search } from 'lucide-react';
import hedge from '../assets/Hedge.png';
import yourLogo from '../assets/Vector.png';
import rightarrow from '../assets/maki_arrow.png';
import { ArrowRight } from 'lucide-react'
import bgimg from '../assets/bgimage.jpg';
import dashboard from '../assets/dashboard.png';
import dashboardoverlay from '../assets/dashboardoverlay.png';
import {
  UserRound,
  ClipboardList,
  CreditCard,
  Lock,
  LayoutDashboard,
  Cloud,
} from 'lucide-react';
import { Target, LineChart, Calendar, PieChart, Table } from 'lucide-react';


const holdingsData = [
  'AAPL', 'GOOG', 'TSLV'
].map((symbol, index) => ({
  symbol,
  name: `${symbol} Inc`,
  amount: '$187,654',
  change: '+2.4%',
  allocation: '15.2%',
  isNegative: [1, 4, 7].includes(index)
}));



const insightsData = [
  {
    category: "Market Analysis",
    title: "Q4 2024 Global Market Outlook",
    description:
      "Federal Reserve policy shifts and emerging market opportunities drive investment strategy adjustments...",
    linkText: "Full Analytics Report",
  },
  {
    category: "Investment Strategy",
    title: "AI & Technology Sector Deep Dive",
    description:
      "Federal Reserve policy shifts and emerging market opportunities drive investment strategy adjustments...",
    linkText: "Full Analytics Report",
  },
  {
    category: "Economic Research",
    title: "Inflation Dynamics and Bond Strategies",
    description:
      "Federal Reserve policy shifts and emerging market opportunities drive investment strategy adjustments...",
    linkText: "Full Analytics Report",
  },
];


const cardData = [
  {
    icon: TrendingUp,
    title: "Growth Portfolios ",
    description: "Diversified equity portfolios designed for long-term capital appreciation with professional risk management.",
  },
  {
    icon: Clock3,
    title: "Balanced Funds",
    description: "Conservative-growth portfolios balancing stability and growth for moderate risk tolerance.",
  },
  {
    icon: hedge,
    title: "Hedge Strategies",
    description: "Advanced alternative investment strategies for sophisticated investors seeking alpha generation.",
  },
  {
    icon: Shield,
    title: "Fixed Income",
    description: "Conservative bond portfolios providing steady income with capital preservation focus.",
  },
  // Add more cards here...
];

const Home = () => {
  return (
    <>
      <Navbar />
      <MarketData />
      <div className="hidden sm:flex relative w-full min-h-[400px] sm:min-h-[480px] md:min-h-[520px] lg:min-h-[584px] items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 py-10 sm:py-12 bg-gradient-to-r from-[#0D3142] to-[#128442] overflow-hidden">
  {/* Background Image with Opacity */}
  <div
    className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-35 z-0"
    style={{
      backgroundImage: `url(${bg})`,
    }}
  ></div>

  {/* Foreground Image or Content */}
  <div className="relative z-10 w-full max-w-[884px] px-2 sm:px-4">
    <img
      src={bgimage}
      alt="Foreground"
      className="w-full h-auto object-contain"
    />
  </div>
</div>

      <section className="w-full bg-white px-4 sm:px-6 lg:px-16 py-16">
        {/* Section Heading */}
        <div className="max-w-[1240px] mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] mb-4">
            Investment Products & Offerings
          </h2>
          <p className="text-sm sm:text-base text-[#0A0A0A99] font-sans max-w-xl mx-auto">
            Choose from our carefully curated investment products designed to meet diverse financial goals and risk preferences.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-[1240px] mx-auto">
          {cardData.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition duration-300"
            >
              <div className="w-full h-20 flex items-center justify-center">
                {typeof card.icon === 'string' ? (
                  <img src={card.icon} alt={card.title} className="w-12 h-12 object-contain" />
                ) : (
                  React.createElement(card.icon, {
                    size: 48,
                    className: card.icon === Clock3 ? "text-[#D4A33E]" : "text-[#06C752]",
                  })
                )}
              </div>
              <h3 className="mt-4 text-lg font-semibold  text-[#000000]">{card.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{card.description}</p>
            </div>
          ))}
        </div>


        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <button
            className="w-full sm:w-[320px] h-12 flex items-center justify-center rounded-lg font-medium text-white px-4 sm:px-6 py-3 hover:opacity-90 transition"
            style={{
              background: "linear-gradient(90deg, #223D45 0%, rgba(6, 199, 82, 0.8) 99.99%)",
            }}
          >
            {/* Left Icon */}
            <img
              src={yourLogo}
              alt="Logo"
              className="w-5 h-5 object-contain mr-2"
            />

            {/* Button Text */}
            <span className="whitespace-nowrap">View All Investment Options</span>

            {/* Right Icon */}
            <img
              src={rightarrow}
              alt="Arrow Icon"
              className="w-5 h-5 object-contain ml-2"
            />
          </button>


        </div>
      </section>

      <section id="MarketInsights" className="w-full bg-white px-4 sm:px-6 lg:px-16 py-16">
        {/* Heading */}
        <div className="max-w-[1240px] mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] mb-4">
            Market Insights & Research
          </h2>
          <p className="text-sm sm:text-base text-[#0A0A0A99] font-sans max-w-xl mx-auto">
            Stay ahead with our expert analysis, market research, and actionable insights from our team of seasoned investment professionals.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-[1040px] mx-auto">
          {insightsData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between bg-[#F7FFFA] min-h-[234px] p-6 rounded-md items-center text-center"
            >
              {/* Category */}
              <h4 className="text-sm font-semibold text-[#0A0A0A99] mb-1">
                {item.category}
              </h4>

              {/* Title */}
              <h3 className="text-lg font-bold text-black mb-2">{item.title}</h3>

              {/* Description */}
              <p className="text-sm text-[#666] mb-4 leading-snug">
                {item.description}
              </p>

              {/* Link */}
              <a
                href="#"
                className="text-sm font-bold hover:underline inline-flex items-center justify-center bg-gradient-to-r from-[#1F3742] to-[#06C752] bg-clip-text text-transparent"
              >
                {item.linkText}
                <span className="ml-10">
                  <ArrowRight size={28} className="text-[#06C752]" />
                </span>
              </a>
            </div>
          ))}
        </div>



        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <button
            className="w-full sm:w-auto flex items-center justify-center gap-2 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
            style={{
              background: "linear-gradient(90deg, #223D45 0%, rgba(6, 199, 82, 0.8) 99.99%)",
            }}
          >
            <Search size={18} />
            Access All the Research
            <span className="ml-1">
              <img src={rightarrow} alt="Right arrow" className="w-7 h-7 object-contain inline-block" />
            </span>

          </button>
        </div>
      </section>


      <section id="portfolio-performance" className="w-full px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-[28px] md:text-[40px] font-bold text-black flex justify-center items-center gap-2 mb-4">

            Portfolio Performance Tracker
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            Stay ahead with our expert analysis, market research, and actionable insights from our team of seasoned investment professionals.
          </p>
        </div>
        <div className="px-6 py-4">
          <h2 className="text-[28px] md:text-[30px] font-bold text-black text-left flex items-center gap-2">
            <Target className="w-8 h-8 md:w-10 md:h-10 text-[#06C752]" />
            Portfolio Overview
          </h2>
        </div>

        <div className="w-full flex flex-wrap gap-x-10 md:gap-x-20 text-sm px-6 md:px-16">
          {[
            ['Total Value', '$1,234,363'],
            ['Today', '$1,234,363'],
            ['Today %', '+1.75%', 'text-green-600'],
            ['YTD Return', '+12.75%', 'text-green-600']
          ].map(([label, value, color]) => (
            <div className="flex flex-col min-w-[120px] sm:min-w-[140px]" key={label}>
              <p className={`text-xl font-semibold ${color || 'text-black'}`}>{value}</p>
              <p className="text-gray-500">{label}</p>
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="mx-auto flex justify-center gap-8 w-full">

          {/* Main Image */}
          <img
            src={dashboard}
            alt="Dashboard"
            className="w-2/3 h-auto object-contain rounded-lg"
          />

          {/* Overlay Image */}
          <img
            src={dashboardoverlay}
            alt="Overlay"
            className="w-[120px] sm:w-[180px] md:w-[300px] h-auto object-contain z-2"
          />
        </div>


      </section>




      <section className="max-w-7xl mx-auto px-4 sm:px-10 md:px-20 bg-[#F7FFFA]">
        <div className='flex gap-2 items-center'>
          <Clock3 className="w-6 h-6 text-[#06C752] mb-2" />
          <h2 className="text-2xl font-bold mb-4 text-center">Top Holdings</h2>
        </div>

        <div className="space-y-3">
          {holdingsData.map((item, index) => (
            <div
              key={index}
              className="w-full flex flex-col sm:flex-row sm:flex-wrap md:flex-nowrap items-start sm:items-center justify-between px-4 py-2 rounded-md text-sm"
              style={{
                backgroundColor: item.isNegative ? '#064DC733' : '#88EDB033'
              }}
            >
              {/* Symbol + Name */}
              <div className="flex items-center gap-3 flex-1 min-w-[120px] mb-2 sm:mb-0">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-black bg-[#E2E4E8]">
                  {item.symbol}
                </div>
                <div className="flex flex-col justify-center">
                  <p className="font-bold text-black leading-none">{item.symbol}</p>
                  <p className="text-xs font-semibold text-gray-600 leading-none">{item.name}</p>
                </div>
              </div>

              {/* Amount + Change */}
              <div className="flex flex-col items-start sm:items-center justify-center min-w-[120px] mb-2 sm:mb-0">
                <p className="font-semibold leading-none text-black">{item.amount}</p>
                <div
                  className={`flex items-center gap-1 text-xs leading-none ${item.isNegative ? 'text-red-600' : 'text-green-600'
                    }`}
                >
                  <TrendingUp className="w-4 h-4" />
                  <span>{item.change}</span>
                </div>
              </div>

              {/* Allocation + Buttons */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-end flex-1 min-w-[120px] gap-2 sm:gap-4 md:gap-12">
                <div className="text-left sm:text-right flex flex-col justify-center">
                  <p className="text-xs text-black font-bold leading-none">Allocation</p>
                  <p className="font-semibold text-black leading-none">{item.allocation}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="w-12 h-5 rounded" style={{ backgroundColor: '#06C752' }} />
                  <button className="w-12 h-5 rounded" style={{ backgroundColor: '#C7060699' }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Button */}
      <div className="flex justify-center mt-12">
        <button
          className="w-full sm:w-auto flex items-center justify-center gap-2 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
          style={{
            background: "linear-gradient(90deg, #223D45 0%, rgba(6, 199, 82, 0.8) 99.99%)",
          }}
        >
          <LayoutDashboard size={18} />
          Access Dashboard
          <span className="ml-1">
            <img src={rightarrow} alt="Right arrow" className="w-7 h-7 object-contain inline-block" />
          </span>
        </button>
      </div>
      <section id="onboarding" className="bg-white text-center py-10 px-6 md:px-20 lg:px-40">


        {/* Title and Description */}
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Onboarding & Compliance</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Get started with confidence through our streamlined onboarding process and comprehensive compliance framework designed to protect your investments.
        </p>

        {/* Step Heading */}
        <h3 className="text-xl font-semibold mb-6">Simple 4-Step Onboarding Process</h3>

        {/* Steps */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm md:text-base max-w-5xl mx-auto gap-10 md:gap-4">
          {/* Step 1 */}
          <div className="flex flex-col items-center w-40">
            <UserRound className="text-green-600 w-8 h-8 mb-2" />
            <h4 className="font-semibold mb-1">Account Registration</h4>
            <p className="text-gray-500 mb-1">5 minutes</p>
            <p className="text-gray-500 text-xs">Complete your personal information and identity verification</p>
          </div>

          <ArrowRight className="hidden md:block text-gray-400 w-5 h-5" />

          {/* Step 2 */}
          <div className="flex flex-col items-center w-40">
            <ClipboardList className="text-green-600 w-8 h-8 mb-2" />
            <h4 className="font-semibold mb-1">Risk Assessment</h4>
            <p className="text-gray-500 mb-1">10 minutes</p>
            <p className="text-gray-500 text-xs">Determine your investment profile and risk tolerance</p>
          </div>

          <ArrowRight className="hidden md:block text-gray-400 w-5 h-5" />

          {/* Step 3 */}
          <div className="flex flex-col items-center w-40">
            <CreditCard className="text-green-600 w-8 h-8 mb-2" />
            <h4 className="font-semibold mb-1">Account Funding</h4>
            <p className="text-gray-500 mb-1">3 minutes</p>
            <p className="text-gray-500 text-xs">Link your bank account and make your initial deposit</p>
          </div>

          <ArrowRight className="hidden md:block text-gray-400 w-5 h-5" />

          {/* Step 4 */}
          <div className="flex flex-col items-center w-40">
            <Cloud className="text-green-600 w-8 h-8 mb-2" />
            <h4 className="font-semibold mb-1">Portfolio Setup</h4>
            <p className="text-gray-500 mb-1">3 minutes</p>
            <p className="text-gray-500 text-xs">Choose your investment strategy and begin investing</p>
          </div>
        </div>

        {/* Start Account Button */}
        <div className="mt-10">
          <button className="bg-[#0A5C3D] text-white px-6 py-3 rounded-full flex items-center mx-auto gap-2 hover:opacity-90 transition">
            Start Your Account
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-xs text-gray-500 mt-2">
            No minimum deposit required • Account setup takes less than 15 minutes
          </p>
        </div>
      </section>
      <section id="investment-calculator" className="w-full py-20 bg-white px-4">
        {/* Section Heading */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-4">
            Investment Calculator & Planning
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Plan your financial future with our comprehensive suite of calculators and planning tools designed to help you make informed investment decisions.
          </p>
        </div>

        {/* Card */}
        <div className="flex justify-center">
          <div
            className="bg-[#F7FFFA] border border-[#88EDB099] rounded-[20px] max-w-[613px] w-full px-[32px] py-[28px] flex flex-col items-center"
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
            <div className="text-[2.5rem] font-poppins font-bold text-[#06C752]">
              $113,669
            </div>
            <div className="font-poppins text-[#222] text-base mb-7 mt-1">
              Projected Portfolio Value
            </div>

            {/* Totals Block */}
            <div className="w-[500px] max-w-full h-[66px] flex justify-between items-start mb-6">
              <div className="flex flex-col items-center">
                <span className="font-sans font-bold text-[36px] text-[#222] leading-[1]">
                  $70,000
                </span>
                <span className="font-sans text-[16px] mt-2 text-[#222]">
                  Total Contributions
                </span>
              </div>
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
            <div className="w-[412.3px] max-w-full h-auto flex flex-col gap-[16px]">
              <button className="w-full h-[44px] bg-[#06C752] text-white rounded-[8px] font-sans font-bold text-[24px] leading-[24px] hover:brightness-110 transition">
                Start Trading
              </button>
              <button className="w-full h-[44px] border border-[#d1d5db] text-[#202020] bg-white rounded-[8px] font-sans font-bold text-[24px] leading-[24px] hover:bg-gray-100 transition">
                Download Report
              </button>
            </div>
          </div>
        </div>
      </section>






      <section className="w-full px-4 md:px-10 py-16 bg-white">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {/* Goal Planner */}
          <div className="flex flex-col items-center">
            <Target className="text-green-600 w-10 h-10 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Goal Planner</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-2 px-2">
              Set financial goals and create a roadmap to achieve them with personalized investment strategies.
            </p>
            <span className="text-sm font-bold text-black">Try Tool</span>
          </div>

          {/* Risk Profiler */}
          <div className="flex flex-col items-center">
            <LineChart className="text-gray-700 w-10 h-10 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Risk Profiler</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-2 px-2">
              Assess your risk tolerance and get recommendations for optimal portfolio allocation.
            </p>
            <span className="text-sm font-bold text-black">Try Tool</span>
          </div>

          {/* Retirement Calculator */}
          <div className="flex flex-col items-center">
            <Calendar className="text-yellow-600 w-10 h-10 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Retirement Calculator</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-2 px-2">
              Plan for retirement with detailed projections and contribution optimization strategies.
            </p>
            <span className="text-sm font-bold mt-4 text-black">Try Tool</span>
          </div>

          {/* Portfolio Optimizer */}
          <div className="flex flex-col items-center">
            <PieChart className="text-green-600 w-10 h-10 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Portfolio Optimizer</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-2 px-2">
              Optimize your asset allocation based on your goals, timeline, and risk tolerance.
            </p>
            <span className="text-sm font-bold mt-4 text-black">Try Tool</span>
          </div>
        </div>

        {/* Access Button */}
        <div className="mt-12 flex justify-center">
          <button className="flex items-center gap-2 px-6 py-3 text-white font-semibold text-sm rounded-md bg-gradient-to-r from-[#1c8a4c] to-[#3eb96f] shadow-md hover:opacity-90 transition">
            <Table className="w-5 h-5" />
            Access Planning tools
          </button>
        </div>
      </section>


      <Security />
      <Footer />
    </>

  )
}

export default Home