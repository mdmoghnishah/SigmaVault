import React from 'react'
import Navbar from '../components/Navbar'
import MarketData from '../components/MarketData'
import Footer from '../components/Footer';
import bgimg from '../assets/bgimage.jpg';
import dashboard from '../assets/dashboard.png';
import dashboardoverlay from '../assets/dashboardoverlay.png';
import {
  TrendingUp,
  ShieldCheck,
  Lock,
  Award,
  Check,
  FilePlus,
  Target
} from 'lucide-react';

const PortfolioTracker = () => {
  const securityPoints = [
    'SIPC insurance up to $500,000',
    'Regular third-party security audits',
    'Transparent fee structure',
    '24/7 fraud monitoring'
  ];

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
            Portfolio Performance Tracker
          </h2>
          <p className="text-[16px] md:text-[20px] font-sans max-w-[800px] text-white">
            Monitor your investments in real-time with comprehensive analytics, performance tracking, and detailed portfolio insights.
          </p>
        </div>
      </div>

      {/* Portfolio Overview */}
      <div className="bg-white rounded-2xl mx-4 md:mx-20 my-6">
        <div className="px-6 py-4">
          <h2 className="text-[28px] md:text-[40px] font-bold text-black text-left flex items-center gap-2">
            <Target className="w-8 h-8 md:w-10 md:h-10 text-[#06C752]" />
            Portfolio Overview
          </h2>
        </div>

        <div className="w-full flex flex-wrap gap-y-6 gap-x-10 md:gap-x-20 text-sm px-6 md:px-16">
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

        {/* Images Section */}
        <div className="relative w-full lg:max-w-6xl mx-auto px-4 sm:px-6 mt-12"> {/* Increase margin-top here */}
          {/* Main Image */}
          <img
            src={dashboard}
            alt="Dashboard"
            className="w-full h-auto object-cover rounded-lg"
          />

          {/* Text Badge */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 text-green-900 text-sm sm:text-base md:text-2xl font-bold px-3 sm:px-4 py-1 sm:py-2 flex items-center gap-2 bg-white/70 rounded-md z-10">
            <Lock className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            Authentic For more Credentials.
          </div>

          {/* Overlay Image (no upward shift) */}
          <div className="absolute right-0 -top-16 sm:-top-20 md:-top-32 z-10">
            <img
              src={dashboardoverlay}
              alt="Overlay Image"
              className="w-[120px] sm:w-[180px] md:w-[348px] h-auto object-contain"
            />
          </div>
        </div>


      </div>

      {/* Top Holdings */}
      <div className="max-w-7xl mx-auto px-4 sm:px-10 md:px-20 py-6">
        <h2 className="text-2xl font-bold mb-4">Top Holdings</h2>
        <div className="space-y-3">
          {[
            'AAPL', 'GOOG', 'TSLV', 'MSFT', 'AMZN',
            'NVDA', 'META', 'TSLA', 'NFLX'
          ].map((symbol, index) => {
            const item = {
              symbol,
              name: `${symbol} Inc`,
              amount: '$187,654',
              change: '+2.4%',
              allocation: '15.2%',
              isNegative: [1, 4, 7].includes(index)
            };

            return (
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
                  <div className={`flex items-center gap-1 text-xs leading-none ${item.isNegative ? 'text-red-600' : 'text-green-600'}`}>
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
            );
          })}
        </div>
      </div>

      {/* Security Section */}
      <section className="w-full px-4 md:px-10 py-12 flex flex-col items-center mt-20">
        <div className="w-full max-w-[965px] flex flex-col md:flex-row justify-center gap-10 md:gap-20 mb-8">
          {[
            {
              icon: <ShieldCheck size={36} color="#4ecd79" strokeWidth={2.2} />,
              title: 'Regulatory Compliance',
              desc: 'Fully compliant with SEC, FINRA, and SIPC regulations'
            },
            {
              icon: <Lock size={36} color="#222" strokeWidth={2.2} />,
              title: 'Data Security',
              desc: 'Bank-level encryption and security protocols'
            },
            {
              icon: <Award size={36} color="#edc03b" strokeWidth={2.2} />,
              title: 'Fiduciary Standards',
              desc: 'Acting in your best interest at all times'
            }
          ].map(({ icon, title, desc }, i) => (
            <div key={i} className="flex flex-col items-center text-center flex-1">
              <div className="mb-2">{icon}</div>
              <span className="font-semibold text-lg text-black mb-1">{title}</span>
              <span className="text-sm text-black">{desc}</span>
            </div>
          ))}
        </div>

        <div className="max-w-[965px] w-full flex flex-col md:flex-row justify-between text-xs text-gray-500 mb-8 gap-4 text-center md:text-left">
          <div>SEC Registered · FINRA Member · SIPC Protected</div>
          <div>256-bit SSL, SOC 2 Certified, Multi-Factor Auth</div>
          <div>Fiduciary Duty, Transparent Fees, Best Execution</div>
        </div>

        <div className="bg-[#F7FFFA] border border-[#88EDB099] rounded-[20px] max-w-[1226px] w-full p-6 md:p-8 flex flex-col gap-6 mt-20">
          <div className="text-xl md:text-2xl font-semibold text-black">
            Your Investment Security is Our Priority
          </div>
          <p className="text-sm md:text-base text-black">
            SigmaVault is committed to maintaining the highest standards of regulatory compliance and investment security. Our comprehensive approach ensures your assets are protected while providing transparent, fiduciary-level service.
          </p>

          <ul className="space-y-2">
            {securityPoints.map((point, i) => (
              <li key={i} className="flex items-center text-sm md:text-base text-[#222]">
                <div className="w-[24px] h-[24px] md:w-[26px] md:h-[26px] rounded-full bg-[#C9F3DD] flex items-center justify-center mr-2">
                  <Check size={16} color="#20bd6f" strokeWidth={3} />
                </div>
                {point}
              </li>
            ))}
          </ul>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div className="flex items-center gap-2">
              <ShieldCheck size={24} color="#32C378" strokeWidth={2.5} />
              <div className="leading-tight">
                <div className="font-bold text-[16px] md:text-[18px] text-black">$2.5B+</div>
                <div className="text-[12px] md:text-[13px] text-[#333]">Assets Protected</div>
              </div>
            </div>
            <button className="flex items-center gap-2 border border-[#32C378] text-[#20bd6f] font-semibold rounded-full px-4 py-1.5 text-xs md:text-sm hover:bg-[#f4fff9] transition-all">
              <FilePlus size={16} color="#32C378" strokeWidth={2} />
              View Compliance Details
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PortfolioTracker