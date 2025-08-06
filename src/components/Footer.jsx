import React from 'react'
import Logo from '../assets/fluent-mdl2_market.png';
import { FaFacebook, FaLinkedin, FaEnvelope } from 'react-icons/fa';




// make sure path is correct

const Footer = () => {
    return (
         <footer className="bg-[#0B1D41] text-white w-full px-6 sm:px-10 md:px-16 py-10 text-sm">
      {/* Top Section */}
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between gap-10">
        
        {/* Left */}
        <div className="lg:w-[420px]">
          <div className="flex items-center gap-2 mb-4">
            <img src={Logo} alt="Logo" className="w-[44px] h-[40px]" />
            <h2 className="text-2xl font-bold bg-gradient-to-r from-[#06C752] to-[#06C752] bg-clip-text text-transparent">
              Sigma Vault
            </h2>
          </div>
          <p className="text-[#FFFFFFA3] leading-6">
            Professional investment management and financial advisory services designed to help you achieve your long-term financial goals with confidence and security.
          </p>
          <div className="mt-4 space-y-1 text-gray-300 text-sm">
            <p>📞 +1 (555) 123-4567</p>
            <p>📧 invest@sigmavault.com</p>
            <p>📍 New York, NY 10001</p>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-12 text-sm">
          {[
            {
              title: 'Products & Services',
              items: ['Investment Portfolios', 'Mutual Funds', 'Hedge Funds', 'Retirement Planning', 'Wealth Management', 'Advisory Services']
            },
            {
              title: 'Resources',
              items: ['Market Research', 'Investment Calculator', 'Educational Content', 'Market Insights', 'Performance Reports', 'Tax Documents']
            },
            {
              title: 'Company',
              items: ['About SigmaVault', 'Leadership Team', 'Careers', 'Press Releases', 'Investor Relations', 'Contact Us']
            },
            {
              title: 'Legal & Support',
              items: ['Privacy Policy', 'Terms of Service', 'Compliance', 'Security', 'Help Center', 'Client Support']
            }
          ].map((section, i) => (
            <div key={i}>
              <h3 className="font-semibold mb-2">{section.title}</h3>
              <ul className="space-y-1 text-gray-300">
                {section.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="mt-12 border-t border-gray-600 pt-6 text-xs leading-relaxed">
        {/* Footer Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-center md:text-left">

          {/* Left: Copyright */}
          <div className="w-full md:w-1/3">
            <p className="font-bold">© 2024 SigmaVault Financial Services. All rights reserved.</p>
          </div>

          {/* Center: Social Icons */}
          <div className="w-full md:w-1/3 flex justify-center gap-4 text-xl">
            <a href="mailto:invest@sigmavault.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#06C752]">
              <FaEnvelope />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#06C752]">
              <FaFacebook />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#06C752]">
              <FaLinkedin />
            </a>
          </div>

          {/* Right: Compliance */}
          <div className="w-full md:w-1/3 text-center md:text-right text-gray-300">
            <p>
              <span className="font-semibold">SEC Registered Investment Advisor</span><br />
              <span className="font-semibold">FINRA Member</span> | <span className="font-semibold">SIPC Protected</span>
            </p>
          </div>
        </div>

        {/* Disclosure Text */}
        <p className="mt-6 max-w-4xl text-left mx-auto text-gray-300">
          <span className="font-semibold">Important Disclosure:</span> Investing involves risk, including potential loss of principal. Past performance does not guarantee future results. SigmaVault Financial Services is a registered investment advisor. All investment advisory services are provided by SigmaVault Financial Services.
          <br /><br />
          Securities offered through SigmaVault Securities, member FINRA/SIPC. Investment advisory services offered through SigmaVault Financial Services, a registered investment advisor. SigmaVault Securities and SigmaVault Financial Services are separate entities.
        </p>
      </div>
    </footer>
    )
}

export default Footer