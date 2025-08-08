import React from 'react';
import { ShieldCheck, Lock, Award, Check, FilePlus } from "lucide-react";

const securityPoints = [
  "Advanced encryption algorithms",
  "Multi-factor authentication",
  "Regular third-party audits"
];

const Security = () => {
  return (
    <section className="w-full px-4 py-12 flex flex-col items-center mt-20">
      
      {/* Top Icons */}
      <div className="w-full max-w-[965px] flex flex-col md:flex-row flex-wrap justify-center gap-10 md:gap-[60px] lg:gap-[120px] mb-8">
        <div className="flex flex-col items-center text-center flex-1 min-w-[220px]">
          <ShieldCheck size={36} color="#4ecd79" strokeWidth={2.2} className="mb-2" />
          <span className="font-poppins font-semibold text-lg text-black mb-1">Regulatory Compliance</span>
          <span className="font-poppins text-sm text-black">Fully compliant with SEC, FINRA, and SIPC regulations</span>
        </div>
        <div className="flex flex-col items-center text-center flex-1 min-w-[220px]">
          <Lock size={36} color="#222" strokeWidth={2.2} className="mb-2" />
          <span className="font-poppins font-semibold text-lg text-black mb-1">Data Security</span>
          <span className="font-poppins text-sm text-black">Bank-level encryption and security protocols</span>
        </div>
        <div className="flex flex-col items-center text-center flex-1 min-w-[220px]">
          <Award size={36} color="#edc03b" strokeWidth={2.2} className="mb-2" />
          <span className="font-poppins font-semibold text-lg text-black mb-1">Fiduciary Standards</span>
          <span className="font-poppins text-sm text-black">Acting in your best interest at all times</span>
        </div>
      </div>

      {/* Compliance info row */}
      <div className="max-w-[965px] w-full flex flex-col md:flex-row flex-wrap justify-between items-center gap-2 mb-8 text-center md:text-left">
        <div className="text-xs text-gray-500">SEC Registered · FINRA Member · SIPC Protected</div>
        <div className="text-xs text-gray-500">256-bit SSL, SOC 2 Certified, Multi-Factor Auth</div>
        <div className="text-xs text-gray-500">Fiduciary Duty, Transparent Fees, Best Execution</div>
      </div>

      {/* Main security box */}
      <div className="bg-[#F7FFFA] border border-[#88EDB099] rounded-[20px] w-full max-w-full md:max-w-[1226px] p-6 md:p-8 flex flex-col md:flex-row md:items-center mt-10">
        <div className="flex-1">
          <div className="font-poppins font-semibold text-xl md:text-2xl text-black mb-2">
            Your Investment Security is Our Priority
          </div>
          <p className="font-poppins text-sm md:text-base text-black mb-4">
            SigmaVault is committed to maintaining the highest standards of regulatory compliance and investment security. Our comprehensive approach ensures your assets are protected while providing transparent, fiduciary-level service.
          </p>

          <ul className="mb-6 space-y-2">
            {securityPoints.map((point) => (
              <li key={point} className="flex items-center font-sans text-sm md:text-base text-[#222]">
                <div className="w-[24px] h-[24px] rounded-full bg-[#C9F3DD] flex items-center justify-center mr-2 flex-shrink-0">
                  <Check size={14} color="#20bd6f" strokeWidth={3} />
                </div>
                {point}
              </li>
            ))}

            <li className="flex flex-col lg:flex-row lg:justify-between w-full gap-4">
              <div className="flex items-center font-sans text-sm md:text-base text-[#222]">
                <div className="w-[24px] h-[24px] rounded-full bg-[#C9F3DD] flex items-center justify-center mr-2 flex-shrink-0">
                  <Check size={14} color="#20bd6f" strokeWidth={3} />
                </div>
                24/7 fraud monitoring
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={24} color="#32C378" strokeWidth={2.5} />
                  <div className="leading-tight">
                    <div className="font-sans font-bold text-[16px] md:text-[18px] text-black">$2.5B+</div>
                    <div className="font-sans text-[12px] md:text-[13px] text-[#333]">Assets Protected</div>
                  </div>
                </div>

                <button className="flex items-center gap-2 border border-[#32C378] text-[#20bd6f] font-sans font-semibold rounded-full px-3 py-1 text-xs md:text-sm hover:bg-[#f4fff9] transition-all">
                  <FilePlus size={14} color="#32C378" strokeWidth={2} />
                  View Compliance Details
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Security;
