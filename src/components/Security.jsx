import React from 'react'

import { ShieldCheck, Lock, Award, Check, FilePlus } from "lucide-react";

const securityPoints = [
  "Advanced encryption algorithms",
  "Multi-factor authentication",
  "Regular third-party audits"
];

const Security = () => {
  return (
    <section className="w-full px-4 py-12 flex flex-col items-center mt-20">
      <div className="w-full max-w-[965px] flex flex-col md:flex-row justify-center gap-[60px] md:gap-[120px] mb-8">
        <div className="flex flex-col items-center text-center flex-1">
          <ShieldCheck size={36} color="#4ecd79" strokeWidth={2.2} className="mb-2" />
          <span className="font-poppins font-semibold text-lg text-black mb-1">Regulatory Compliance</span>
          <span className="font-poppins text-sm text-black">Fully compliant with SEC, FINRA, and SIPC regulations</span>
        </div>
        <div className="flex flex-col items-center text-center flex-1">
          <Lock size={36} color="#222" strokeWidth={2.2} className="mb-2" />
          <span className="font-poppins font-semibold text-lg text-black mb-1">Data Security</span>
          <span className="font-poppins text-sm text-black">Bank-level encryption and security protocols</span>
        </div>
        <div className="flex flex-col items-center text-center flex-1">
          <Award size={36} color="#edc03b" strokeWidth={2.2} className="mb-2" />
          <span className="font-poppins font-semibold text-lg text-black mb-1">Fiduciary Standards</span>
          <span className="font-poppins text-sm text-black">Acting in your best interest at all times</span>
        </div>
      </div>

      <div className="max-w-[965px] w-full flex flex-col md:flex-row justify-between mb-8">
        <div className="text-xs text-gray-500 mb-2 md:mb-0">SEC Registered · FINRA Member · SIPC Protected</div>
        <div className="text-xs text-gray-500 mb-2 md:mb-0">256-bit SSL, SOC 2 Certified, Multi-Factor Auth</div>
        <div className="text-xs text-gray-500">Fiduciary Duty, Transparent Fees, Best Execution</div>
      </div>

      <div className="bg-[#F7FFFA] border border-[#88EDB099] rounded-[20px] max-w-[1226px] w-full p-8 flex flex-col md:flex-row md:items-center mt-20 mb-15">
        <div className="flex-1">
          <div className="font-poppins font-semibold text-2xl text-black mb-2">
            Your Investment Security is Our Priority
          </div>
          <p className="font-poppins text-base text-black mb-4">
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

            <li className="flex justify-between items-end w-full gap-4">
              <div className="flex items-center font-sans text-base text-[#222] mb-4">
                <div className="w-[26px] h-[26px] rounded-full bg-[#C9F3DD] flex items-center justify-center mr-2">
                  <Check size={16} color="#20bd6f" strokeWidth={3} />
                </div>
                24/7 fraud monitoring
              </div>

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
    </section>
  );
};

export default Security;
