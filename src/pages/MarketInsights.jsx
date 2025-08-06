import React from 'react'
import Navbar from '../components/Navbar'
import MarketData from '../components/MarketData'
import Footer from '../components/Footer';
import bgimg from '../assets/bgimage.jpg';
import {
  ArrowRight,
  ShieldCheck,
  Lock,
  Award,
  Check,
  FilePlus,
} from "lucide-react";

// --- Analytics Reports Data ---
const reports = [
  {
    main: "Market Analysis",
    middle: "Q4 2024 Global Market Outlook",
    bottom:
      "Federal Reserve policy shifts and emerging market opportunities drive investment strategy adjustments...",
  },
  {
    main: "Investment Strategy",
    middle: "AI & Technology Sector Deep Dive",
    bottom:
      "Federal Reserve policy shifts and emerging market opportunities drive investment strategy adjustments...",
  },
  {
    main: "Economic Research",
    middle: "Inflation Dynamics and Bond Strategies",
    bottom:
      "Federal Reserve policy shifts and emerging market opportunities drive investment strategy adjustments...",
  },
];

// --- Analytics Card ---
const AnalyticsReportCard = ({ main, middle, bottom }) => (
  <div
    className="bg-[#F7FFFA] rounded-[12px] px-6 py-8 flex flex-col items-center w-full max-w-[1159px] mx-auto shadow"
    style={{ gap: 20, minHeight: 237 }}
  >
    <h3 className="font-sans font-normal text-[20px] text-center mb-1">{main}</h3>
    <h2 className="font-sans font-bold text-[20px] text-center mb-2">{middle}</h2>
    <p
      className="font-sans font-normal text-[12px] text-center text-[#20202099] max-w-[900px] mb-3"
      style={{ lineHeight: "100%" }}
    >
      {bottom}
    </p>
    <button
      className="mt-2 group px-5 py-2 rounded-lg font-sans font-bold text-[18px] leading-normal tracking-normal transition hover:bg-[#e5fbed]"
      type="button"
    >
      <span className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1F3742] to-[#06C752] bg-clip-text text-transparent text-center">
        Full Analytics Report
        <ArrowRight size={18} className="transition group-hover:translate-x-1" />
      </span>
    </button>
  </div>
);

// --- Security Section ---
const securityPoints = [
  "SIPC insurance up to $500,000",
  "Regular third-party security audits",
  "Transparent fee structure",
  "24/7 fraud monitoring",
];


const MarketInsights = () => {
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
                  Market Insights & Research
                </h2>
                <p className="text-[16px] md:text-[20px] font-sans max-w-[800px] text-white">
                  Stay ahead with our expert analysis, market research, and actionable insights from our team of seasoned investment professionals.
                </p>
              </div>
            </div>
      <section className="w-full flex flex-col items-center bg-white py-10 px-2">

      {/* ==== Analytics Reports ==== */}
      <div className="w-full flex flex-col gap-12 mb-16">
        {reports.map((r, idx) => (
          <AnalyticsReportCard key={idx} {...r} />
        ))}
      </div>

      {/* ==== Security Section ==== */}
      <div className="w-full px-1 py-8 flex flex-col items-center">
        {/* Icons Section */}
        <div className="w-full max-w-[965px] flex flex-col md:flex-row justify-center gap-[60px] md:gap-[120px] mb-8 ">
          <div className="flex flex-col items-center text-center flex-1">
            <ShieldCheck size={36} color="#4ecd79" strokeWidth={2.2} className="mb-2" />
            <span className="font-poppins font-semibold text-lg text-black mb-1">Regulatory Compliance</span>
            <span className="font-poppins text-sm text-black">
              Fully compliant with SEC, FINRA, and SIPC regulations
            </span>
          </div>
          <div className="flex flex-col items-center text-center flex-1">
            <Lock size={36} color="#222" strokeWidth={2.2} className="mb-2" />
            <span className="font-poppins font-semibold text-lg text-black mb-1">Data Security</span>
            <span className="font-poppins text-sm text-black">
              Bank-level encryption and security protocols
            </span>
          </div>
          <div className="flex flex-col items-center text-center flex-1">
            <Award size={36} color="#edc03b" strokeWidth={2.2} className="mb-2" />
            <span className="font-poppins font-semibold text-lg text-black mb-1">Fiduciary Standards</span>
            <span className="font-poppins text-sm text-black">
              Acting in your best interest at all times
            </span>
          </div>
        </div>

        {/* Fine print */}
        <div className="max-w-[965px] w-full flex flex-col md:flex-row justify-between mb-8">
          <div className="text-xs text-gray-500 mb-2 md:mb-0">
            SEC Registered . FINRA Member . SIPC Protected
          </div>
          <div className="text-xs text-gray-500 mb-2 md:mb-0">
            256-bit SSL, SOC 2 Certified, Multi-Factor Auth
          </div>
          <div className="text-xs text-gray-500">
            Fiduciary Duty, Transparent Fees, Best Execution
          </div>
        </div>

        {/* Highlighted Card */}
        <div className="bg-[#F7FFFA] border border-[#88EDB099] rounded-[20px] max-w-[1226px] w-full p-8 flex flex-col md:flex-row md:items-center">
          <div className="flex-1 mb-6 md:mb-0">
            <div className="font-poppins font-semibold text-2xl text-black mb-2">
              Your Investment Security is Our Priority
            </div>
            <p className="font-poppins text-base text-black mb-4">
              SigmaVault is committed to maintaining the highest standards of regulatory compliance and investment security. Our comprehensive approach ensures your assets are protected while providing transparent, fiduciary-level service.
            </p>
            <ul className="mb-6 space-y-2">
              {securityPoints.slice(0, 3).map((pt) => (
                <li key={pt} className="flex items-center font-sans text-base text-[#222]">
                  <div className="w-[26px] h-[26px] rounded-full bg-[#C9F3DD] flex items-center justify-center mr-2">
                    <Check size={16} color="#20bd6f" strokeWidth={3} />
                  </div>
                  {pt}
                </li>
              ))}
              {/* Last item and right-side metric/button */}
              <li className="flex justify-between items-end w-full gap-4">
                <div className="flex items-center font-sans text-base text-[#222] mb-4">
                  <div className="w-[26px] h-[26px] rounded-full bg-[#C9F3DD] flex items-center justify-center mr-2 ">
                    <Check size={16} color="#20bd6f" strokeWidth={3} />
                  </div>
                  24/7 fraud monitoring
                </div>
                {/* Right: Badge + Button */}
                <div className="flex flex-row items-end gap-4 min-w-[230px] mb-2">
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
      </div>

    </section>

      <Footer />
    </>
  )
}

export default MarketInsights