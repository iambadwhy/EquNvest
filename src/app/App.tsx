import svgPaths from "../imports/svg-ctjz8up4kh";
import svgArrow from "../imports/svg-b4hqrccxw4";
import imgHero1 from "../../assets/Hero 1.png";
import imgImageContainer from "../../assets/Image container.png";
import imgFrame33 from "../../assets/Frame 33.png";
import imgFrame34 from "../../assets/Frame 49.png";
import imgFrame35 from "../../assets/Frame 50.png";
import imgFrame36 from "../../assets/Frame 51.png";
import imgFrame37 from "../../assets/Frame 52.png";
import imgHero4 from "../../assets/Hero 4.png";
import imgPricingCards1 from "../../assets/Pricing cards 1.png";
import { useState, type ReactNode } from "react";
import Disclaimer from "../imports/Frame50";
import PrivacyPolicy from "../imports/Frame51";
import TermsOfUse from "../imports/Frame52";
import LogoWhite from "../imports/Frame47-8-994";
import LogoBlack from "../imports/Frame48";

function ArrowIcon() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[10px]">
      <div className="-rotate-45 flex-none">
        <div className="h-0 relative w-[14.142px]">
          <div className="absolute inset-[-7.36px_-7.07%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1421 14.7279">
              <path d={svgArrow.p582da80} fill="white" id="Arrow 1" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 68; // Fixed header height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setOpenDropdown(null);
  };

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-black z-50 border-b border-gray-900">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16 py-3 flex items-center justify-between gap-4">
        <div className="flex gap-2 items-center shrink-0">
          <LogoWhite />
        </div>
        
        <nav className="hidden lg:flex gap-6 items-center relative">
          {/* Asset Class Portfolio Dropdown */}
          <div className="relative">
            <button 
              onClick={() => toggleDropdown('portfolio')}
              className="text-[#eaeaea] text-xs font-medium hover:text-white transition-colors flex items-center gap-1"
            >
              Asset Class Portfolio
              <svg className={`w-3 h-3 transition-transform ${openDropdown === 'portfolio' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'portfolio' && (
              <div className="absolute top-full left-0 mt-2 bg-black border border-gray-800 min-w-[200px] py-2 shadow-xl">
                <button onClick={() => scrollToSection('hospitality')} className="w-full text-left px-4 py-2 text-xs text-[#eaeaea] hover:bg-gray-900 hover:text-white transition-colors">
                  Hospitality
                </button>
                <button onClick={() => scrollToSection('multifamily')} className="w-full text-left px-4 py-2 text-xs text-[#eaeaea] hover:bg-gray-900 hover:text-white transition-colors">
                  Multifamily
                </button>
                <button onClick={() => scrollToSection('assisted-living')} className="w-full text-left px-4 py-2 text-xs text-[#eaeaea] hover:bg-gray-900 hover:text-white transition-colors">
                  Assisted Living
                </button>
                <button onClick={() => scrollToSection('retail-business')} className="w-full text-left px-4 py-2 text-xs text-[#eaeaea] hover:bg-gray-900 hover:text-white transition-colors">
                  Retail Businesses
                </button>
                <button onClick={() => scrollToSection('mobile-home')} className="w-full text-left px-4 py-2 text-xs text-[#eaeaea] hover:bg-gray-900 hover:text-white transition-colors">
                  Mobile Home Parks
                </button>
                <button onClick={() => scrollToSection('asset-portfolio')} className="w-full text-left px-4 py-2 text-xs text-[#eaeaea] hover:bg-gray-900 hover:text-white transition-colors">
                  All Asset Classes
                </button>
              </div>
            )}
          </div>

          {/* Capital Raise Dropdown */}
          <div className="relative">
            <button 
              onClick={() => toggleDropdown('capital')}
              className="text-[#eaeaea] text-xs font-medium hover:text-white transition-colors flex items-center gap-1"
            >
              Capital Raise
              <svg className={`w-3 h-3 transition-transform ${openDropdown === 'capital' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'capital' && (
              <div className="absolute top-full left-0 mt-2 bg-black border border-gray-800 min-w-[200px] py-2 shadow-xl">
                <button onClick={() => scrollToSection('gp-model')} className="w-full text-left px-4 py-2 text-xs text-[#eaeaea] hover:bg-gray-900 hover:text-white transition-colors">
                  General Partner (GP)
                </button>
                <button onClick={() => scrollToSection('lp-model')} className="w-full text-left px-4 py-2 text-xs text-[#eaeaea] hover:bg-gray-900 hover:text-white transition-colors">
                  Limited Partner (LP)
                </button>
                <button onClick={() => scrollToSection('capital-participation')} className="w-full text-left px-4 py-2 text-xs text-[#eaeaea] hover:bg-gray-900 hover:text-white transition-colors">
                  How It Works
                </button>
                <button onClick={() => scrollToSection('comparison-table')} className="w-full text-left px-4 py-2 text-xs text-[#eaeaea] hover:bg-gray-900 hover:text-white transition-colors">
                  Why EquNvest
                </button>
              </div>
            )}
          </div>

          {/* About Dropdown */}
          <div className="relative">
            <button 
              onClick={() => toggleDropdown('about')}
              className="text-[#eaeaea] text-xs font-medium hover:text-white transition-colors flex items-center gap-1"
            >
              About
              <svg className={`w-3 h-3 transition-transform ${openDropdown === 'about' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'about' && (
              <div className="absolute top-full left-0 mt-2 bg-black border border-gray-800 min-w-[200px] py-2 shadow-xl">
                <button onClick={() => scrollToSection('about')} className="w-full text-left px-4 py-2 text-xs text-[#eaeaea] hover:bg-gray-900 hover:text-white transition-colors">
                  About EquNvest
                </button>
                <button onClick={() => scrollToSection('about')} className="w-full text-left px-4 py-2 text-xs text-[#eaeaea] hover:bg-gray-900 hover:text-white transition-colors">
                  Team
                </button>
                <button onClick={() => scrollToSection('about')} className="w-full text-left px-4 py-2 text-xs text-[#eaeaea] hover:bg-gray-900 hover:text-white transition-colors">
                  Investment Philosophy
                </button>
                <button onClick={() => scrollToSection('capital-participation')} className="w-full text-left px-4 py-2 text-xs text-[#eaeaea] hover:bg-gray-900 hover:text-white transition-colors">
                  Partners & Operators
                </button>
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-5">
          <a href="tel:+17202738832" className="text-[#eaeaea] hover:text-white transition-colors" title="+1 (720) 273 8832">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </a>
          <a href="mailto:mahesh@mcnairregroup.com" className="text-[#eaeaea] hover:text-white transition-colors" title="mahesh@mcnairregroup.com">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
          <a href="mailto:mahesh@mcnairregroup.com" className="bg-[#155dfc] hover:bg-[#1248d1] transition-colors text-white px-4 py-2 text-sm font-medium whitespace-nowrap flex items-center gap-2">
            <span>Let's Talk</span>
            <ArrowIcon />
          </a>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center pt-[68px]">
      <div className="absolute inset-0">
        <img alt="" className="absolute object-cover size-full" src={imgHero1} />
        <div className="absolute bg-black/20 inset-0" />
      </div>
      
      <div className="relative w-full">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-32">
          <div className="max-w-3xl">
            <p className="text-white text-sm md:text-base mb-6 font-medium">
              EquNvest partners in and structures asset-backed opportunities across hospitality, housing, senior care, and operating businesses.
            </p>
            
            <h1 className="font-['Aboreto'] text-white text-3xl md:text-4xl lg:text-5xl tracking-tight uppercase leading-tight mb-8">
              EquNvest deploys disciplined private capital into vetted, asset-backed opportunities designed for long-term compounding.
            </h1>
            
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => {
                  const el = document.getElementById('asset-portfolio');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#155dfc] hover:bg-[#1248d1] transition-colors text-white flex items-center justify-between gap-4 px-4 py-3 text-sm font-medium min-w-[280px] md:min-w-[340px]"
              >
                <span>View Asset Portfolio</span>
                <ArrowIcon />
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('capital-participation');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white hover:bg-gray-100 transition-colors text-black px-6 py-3 text-sm font-medium"
              >
                Explore Capital Raise
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="w-full">
        <div className="flex flex-col lg:flex-row items-stretch">
          <div className="w-full lg:w-1/2 relative min-h-[400px] md:min-h-[500px]">
            <img alt="" className="absolute inset-0 object-cover size-full" src={imgImageContainer} />
          </div>
          
          <div className="w-full lg:w-1/2 bg-white">
            <div className="px-6 md:px-12 lg:px-16 py-12 md:py-16">
              <div className="font-['Aboreto'] uppercase mb-6">
                <p className="text-xl md:text-2xl tracking-tight">ABOUT</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight">EQUNVEST</h2>
              </div>
              
              <p className="text-sm mb-8 font-light">
                EquNvest is an asset-focused investment platform dedicated to identifying, structuring, and participating in real-asset opportunities across real estate and operating businesses.
              </p>
              
              <div className="space-y-2">
                <div className="bg-gray-100/50 px-3 py-2">
                  <p className="text-sm font-medium uppercase">• Capital preservation first</p>
                </div>
                <div className="bg-gray-100/50 px-3 py-2">
                  <p className="text-sm font-medium uppercase">• Disciplined underwriting</p>
                </div>
                <div className="bg-gray-100/50 px-3 py-2">
                  <p className="text-sm font-medium uppercase">• Operator-driven execution</p>
                </div>
                <div className="bg-gray-100/50 px-3 py-2">
                  <p className="text-sm font-medium uppercase">• Transparent partnerships</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AssetCard({ image, category, title, description, cashFlow, irr, risk, riskColor, riskBg, style, role, holdPeriod }: any) {
  return (
    <div className="bg-white shadow-lg flex flex-col h-full">
      <div className="h-48 relative">
        <img alt="" className="absolute inset-0 object-cover size-full" src={image} />
        <div className="absolute top-2 left-2">
          <p className="font-['Aboreto'] text-white text-sm uppercase tracking-tight">{category}</p>
        </div>
      </div>
      
      <div className="p-6 flex flex-col gap-4 flex-1">
        <div>
          <p className="font-['Aboreto'] text-2xl uppercase tracking-tight mb-1 leading-tight">{title}</p>
          <p className="text-xs">{description}</p>
        </div>
        
        <div className="flex gap-2">
          <div className="bg-[#f0f5ff] flex-1 p-2">
            <p className="text-[8px] text-gray-600 mb-1">Cash Flow</p>
            <p className="text-xs font-semibold text-[#155dfc]">{cashFlow}</p>
          </div>
          <div className="bg-[#f0f5ff] flex-1 p-2">
            <p className="text-[8px] text-gray-600 mb-1">Target IRR</p>
            <p className="text-xs font-semibold text-[#155dfc]">{irr}</p>
          </div>
          <div className={`${riskBg} flex-1 p-2`}>
            <p className="text-[8px] text-gray-600 mb-1">Risk Level</p>
            <p className={`text-xs font-semibold ${riskColor}`}>{risk}</p>
          </div>
        </div>
        
        <div className="space-y-2 text-xs border-t pt-3 mt-auto">
          <div className="flex justify-between py-1 border-b border-gray-200">
            <p className="font-light">Investment Style</p>
            <p className="font-semibold">{style}</p>
          </div>
          <div className="flex justify-between py-1 border-b border-gray-200">
            <p className="font-light">Investor Role</p>
            <p className="font-semibold">{role}</p>
          </div>
          <div className="flex justify-between py-1 border-b border-gray-200">
            <p className="font-light">Hold Period</p>
            <p className="font-semibold">{holdPeriod}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AssetPortfolio() {
  return (
    <section id="asset-portfolio" className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <h2 className="font-['Aboreto'] text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-tight mb-4">
              Asset Class Portfolio
            </h2>
            <p className="text-sm font-light max-w-2xl">
              Our portfolio spans diversified real estate and operating assets designed for cash flow, appreciation, and downside protection.
            </p>
          </div>
          <a href="mailto:mahesh@mcnairregroup.com" className="bg-[#155dfc] hover:bg-[#1248d1] transition-colors text-white px-6 py-3 text-sm font-medium whitespace-nowrap shrink-0 flex items-center gap-2">
            <span>Let's Talk</span>
            <ArrowIcon />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div id="hospitality">
            <AssetCard 
              image={imgFrame33}
              category="HOSPITALITY"
              title="Hotels, Resorts & Boutique Stays"
              description="Value-add repositioning and brand upgrades"
              cashFlow="4% – 8%"
              irr="12% – 20%+"
              risk="Medium–High"
              riskColor="text-[#f78c00]"
              riskBg="bg-[#fff8f0]"
              style="Value-Add"
              role="LP or GP"
              holdPeriod="3 – 7 years"
            />
          </div>
          
          <div id="multifamily">
            <AssetCard 
              image={imgFrame34}
              category="MULTIFAMILY"
              title="Apartment Communities"
              description="Value-add renovations and stabilized cash flow"
              cashFlow="5% – 9%"
              irr="10% – 16%"
              risk="Medium"
              riskColor="text-[#f78c00]"
              riskBg="bg-[#fff8f0]"
              style="Value-Add / Stabilized"
              role="LP or GP"
              holdPeriod="3 – 10 years"
            />
          </div>
          
          <div id="retail-business">
            <AssetCard 
              image={imgFrame35}
              category="HOSPITALITY BUSINESS"
              title="Retail Businesses"
              description="Operating businesses with real estate upside"
              cashFlow="8% – 15%"
              irr="15% – 25%+"
              risk="High"
              riskColor="text-[#ff7268]"
              riskBg="bg-[#fff0f0]"
              style="Business + RE"
              role="Equity Partner"
              holdPeriod="3 – 6 years"
            />
          </div>
          
          <div id="mobile-home">
            <AssetCard 
              image={imgFrame36}
              category="MANUFACTURED HOUSING"
              title="Mobile Home Parks"
              description="Infrastructure upgrades and rent optimization"
              cashFlow="7% – 12%"
              irr="13% – 18%"
              risk="Low–Medium"
              riskColor="text-[#00c213]"
              riskBg="bg-[#e4ffe8]"
              style="Value-Add Infrastructure"
              role="LP or GP"
              holdPeriod="5 – 10 years"
            />
          </div>
          
          <div id="assisted-living">
            <AssetCard 
              image={imgFrame37}
              category="SENIOR LIVING"
              title="Assisted Living Facilities"
              description="Operational turnaround with demographic tailwinds"
              cashFlow="6% – 10%"
              irr="14% – 20%+"
              risk="Medium–High"
              riskColor="text-[#f78c00]"
              riskBg="bg-[#fff8f0]"
              style="Operational Turnaround"
              role="LP/GP + Operator"
              holdPeriod="4 – 8 years"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ComparisonTable() {
  return (
    <section id="comparison-table" className="relative min-h-[600px] flex items-center">
      <div className="absolute inset-0">
        <img alt="" className="absolute object-cover size-full" src={imgHero4} />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      </div>
      
      <div className="relative w-full">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20">
          <div className="mb-8">
            <h2 className="font-['Aboreto'] text-white text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight leading-tight mb-4">
              Investment Performance Comparison
            </h2>
            <p className="text-white text-sm font-medium max-w-xl">
              See how private real estate and operating businesses compare to traditional investment vehicles
            </p>
          </div>
          
          <div className="relative">
            {/* Scroll indicator for mobile */}
            <div className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none z-10 pr-2">
              <svg className="w-5 h-5 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            
            <div className="bg-black/70 backdrop-blur-sm overflow-x-auto -mx-6 md:mx-0">
              <div className="p-6 md:p-8 min-w-max md:min-w-0">
                <table className="w-full text-white text-sm">
                  <thead>
                    <tr className="border-b border-gray-600">
                      <th className="text-left pb-3 pr-4 font-semibold whitespace-nowrap">Investment Type</th>
                      <th className="text-left pb-3 pr-4 font-semibold whitespace-nowrap">Typical Annual Return</th>
                      <th className="text-left pb-3 pr-4 font-semibold whitespace-nowrap">Liquidity</th>
                      <th className="text-left pb-3 font-semibold whitespace-nowrap">Risk Profile</th>
                    </tr>
                  </thead>
                  <tbody className="font-['Aboreto']">
                    <tr className="border-b border-gray-800">
                      <td className="py-3 pr-4 whitespace-nowrap">Savings Account</td>
                      <td className="py-3 pr-4 whitespace-nowrap">3% – 5%</td>
                      <td className="py-3 pr-4 whitespace-nowrap">High</td>
                      <td className="py-3 whitespace-nowrap">Very Low</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 pr-4 whitespace-nowrap">CDs / Bonds</td>
                      <td className="py-3 pr-4 whitespace-nowrap">4% – 6%</td>
                      <td className="py-3 pr-4 whitespace-nowrap">Medium</td>
                      <td className="py-3 whitespace-nowrap">Low</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 pr-4 whitespace-nowrap">Stock Market (Long-term Avg)</td>
                      <td className="py-3 pr-4 whitespace-nowrap">8% – 10%</td>
                      <td className="py-3 pr-4 whitespace-nowrap">High</td>
                      <td className="py-3 whitespace-nowrap">Medium</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 pr-4 whitespace-nowrap">Public REITs</td>
                      <td className="py-3 pr-4 whitespace-nowrap">7% – 10%</td>
                      <td className="py-3 pr-4 whitespace-nowrap">High</td>
                      <td className="py-3 whitespace-nowrap">Medium</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 pr-4 whitespace-nowrap">Private Real Estate (LP)</td>
                      <td className="py-3 pr-4 whitespace-nowrap">10% – 16%</td>
                      <td className="py-3 pr-4 whitespace-nowrap">Low</td>
                      <td className="py-3 whitespace-nowrap">Medium</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 whitespace-nowrap">Operating Businesses</td>
                      <td className="py-3 pr-4 whitespace-nowrap">15% – 25%+</td>
                      <td className="py-3 pr-4 whitespace-nowrap">Very Low</td>
                      <td className="py-3 whitespace-nowrap">High</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ParticipationCard({ title, subtitle, content, buttonText }: any) {
  return (
    <div className="bg-[#fffcfc] shadow-[0px_0px_4.4px_0px_rgba(0,0,0,0.06),0px_5px_19px_0px_rgba(0,0,0,0.08)] shrink-0 w-[344px] flex flex-col">
      <div className="flex flex-col gap-8 px-6 pt-8 pb-6 flex-1">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="font-['Aboreto'] text-[31px] uppercase tracking-[-0.155px] leading-[0.8] text-black">
              <p>{title}</p>
            </div>
            <div className="font-['Aboreto'] text-[16px] uppercase tracking-[-0.08px] leading-[1.1] text-[#155dfc] whitespace-pre-wrap">
              {subtitle}
            </div>
          </div>
          
          <div className="h-[348px] flex flex-col text-[#383838] leading-[1.4] tracking-[-0.06px] whitespace-pre-wrap">
            {content}
          </div>
        </div>
        
        <a href="mailto:mahesh@mcnairregroup.com" className="w-full bg-[#155dfc] hover:bg-[#1248d1] transition-colors text-white px-4 py-3 flex items-center justify-between">
          <span className="font-['Inter'] font-medium text-[14px] tracking-[-0.07px] leading-[1.45]">{buttonText}</span>
          <ArrowIcon />
        </a>
      </div>
    </div>
  );
}

function CapitalParticipation() {
  return (
    <section id="capital-participation" className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img alt="" className="absolute object-cover size-full" src={imgPricingCards1} />
      </div>
      
      <div className="relative max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="mb-12">
          <p className="text-white text-sm font-medium mb-4">How We Participate</p>
          <h2 className="font-['Aboreto'] text-white text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-tight">
            Capital Participation Models
          </h2>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-4">
          <div id="gp-model" className="flex">
            <ParticipationCard 
              title="General Partner"
              subtitle={<><p className="mb-0">Active Sponsorship & </p><p>Asset Management</p></>}
              content={
                <>
                  <p className="font-['Aboreto'] text-[16px] mb-[2px]">Role & Responsibility </p>
                  <p className="font-['Inter'] font-bold text-[12px] mb-[12px]">Source deals, execute business plans, manage operations, provide ongoing asset/fund-level decisions </p>
                  
                  <p className="font-['Aboreto'] text-[16px] mb-[2px]">Profit Split </p>
                  <p className="font-['Inter'] font-bold text-[12px] mb-[12px]">Promote (typically 20%+ of profits above a hurdle) • Co-invest capital alongside LPs </p>
                  
                  <p className="font-['Aboreto'] text-[16px] mb-[2px]">Why be a Partner (GP)? </p>
                  <p className="font-['Inter'] font-bold text-[12px] mb-[12px]">Higher upside via promote • Decision-making control • Reputational & portfolio scalability </p>
                  
                  <p className="font-['Aboreto'] text-[16px] mb-[2px]">Ideal For </p>
                  <p className="font-['Inter'] font-bold text-[12px] mb-[12px]">Operators, sponsors, and active real estate professionals </p>
                  
                  <p className="font-['Aboreto'] text-[16px] mb-[2px]">Target Return </p>
                  <p className="font-['Inter'] font-bold text-[12px] mb-[12px]">15% – 30%+ including promote</p>
                </>
              }
              buttonText="Learn More"
            />
          </div>
          
          <div id="lp-model" className="flex">
            <ParticipationCard 
              title="Limited Partner"
              subtitle={<><p className="mb-0">Passive Investment & </p><p>Preferred Returns</p></>}
              content={
                <>
                  <p className="font-['Aboreto'] text-[16px] mb-[2px]">Role & Responsibility </p>
                  <p className="font-['Inter'] font-bold text-[12px] mb-[12px]">Commit capital. Receive updates. No active operational duties or liabilities beyond the investment </p>
                  
                  <p className="font-['Aboreto'] text-[16px] mb-[2px]">Profit Split </p>
                  <p className="font-['Inter'] font-bold text-[12px] mb-[12px]">Preferred return (typically 6-8% annually) • 70-80% of profits until promote kicks in • Return of capital prioritized </p>
                  
                  <p className="font-['Aboreto'] text-[16px] mb-[2px]">Why invest as LP? </p>
                  <p className="font-['Inter'] font-bold text-[12px] mb-[12px]">Passive income with downside protection • No management burden • Access to institutional-quality deals </p>
                  
                  <p className="font-['Aboreto'] text-[16px] mb-[2px]">Ideal For </p>
                  <p className="font-['Inter'] font-bold text-[12px] mb-[12px]">Accredited investors seeking passive, diversified real estate exposure </p>
                  
                  <p className="font-['Aboreto'] text-[16px] mb-[2px]">Target Return </p>
                  <p className="font-['Inter'] font-bold text-[12px]">10% – 18% IRR</p>
                </>
              }
              buttonText="Learn More"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Overlay({ onClose, children }: { onClose: () => void; children: ReactNode }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-4xl max-h-[90vh] mx-4 overflow-hidden flex flex-col">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 transition-colors text-white p-2 rounded-full"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}

function Footer({ onOpenOverlay }: { onOpenOverlay: (type: 'disclaimer' | 'privacy' | 'terms') => void }) {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <div className="flex gap-2 items-center mb-2">
              <LogoBlack />
            </div>
            <p className="text-sm font-medium mb-6">Asset-Backed Investment Platform</p>
            <div className="flex flex-col gap-2">
              <a href="tel:+17202738832" className="bg-gray-100 hover:bg-gray-200 transition-colors px-4 py-3 text-sm font-medium flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+1 (720) 273 8832</span>
              </a>
              <a href="mailto:mahesh@mcnairregroup.com" className="bg-gray-100 hover:bg-gray-200 transition-colors px-4 py-3 text-sm font-medium flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 17 13">
                  <path d={svgPaths.p11c3c280} stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>mahesh@mcnairregroup.com</span>
              </a>
            </div>
          </div>
          
          <div>
            <p className="font-['Aboreto'] text-sm mb-4 opacity-75">Company</p>
            <ul className="space-y-3 text-sm opacity-60">
              <li><a href="#" className="hover:opacity-100 transition-opacity">About</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Team</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <p className="font-['Aboreto'] text-sm mb-4 opacity-75">Legal</p>
            <ul className="space-y-3 text-sm opacity-60">
              <li>
                <button 
                  onClick={() => onOpenOverlay('disclaimer')}
                  className="hover:opacity-100 transition-opacity text-left text-sm font-normal"
                >
                  Disclaimers
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenOverlay('privacy')}
                  className="hover:opacity-100 transition-opacity text-left text-sm font-normal"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenOverlay('terms')}
                  className="hover:opacity-100 transition-opacity text-left text-sm font-normal"
                >
                  Terms of Use
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <p className="font-['Aboreto'] text-sm mb-4 opacity-75">Follow Us</p>
            <div className="flex gap-4">
              <button className="w-6 h-6 opacity-45 hover:opacity-100 transition-opacity">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d={svgPaths.p3c382d72} />
                </svg>
              </button>
              <button className="w-6 h-6 opacity-45 hover:opacity-100 transition-opacity">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path clipRule="evenodd" d={svgPaths.p1fcf5070} fillRule="evenodd" />
                  <path d={svgPaths.pe7ea00} fill="white" />
                  <path d={svgPaths.p1ab31680} fill="white" />
                  <path d={svgPaths.p28c6df0} fill="white" />
                </svg>
              </button>
              <button className="w-6 h-6 opacity-45 hover:opacity-100 transition-opacity">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d={svgPaths.pdaf0200} />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [overlayType, setOverlayType] = useState<'disclaimer' | 'privacy' | 'terms' | null>(null);

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <AssetPortfolio />
      <ComparisonTable />
      <CapitalParticipation />
      <Footer onOpenOverlay={setOverlayType} />
      
      {overlayType === 'disclaimer' && (
        <Overlay onClose={() => setOverlayType(null)}>
          <Disclaimer />
        </Overlay>
      )}
      
      {overlayType === 'privacy' && (
        <Overlay onClose={() => setOverlayType(null)}>
          <PrivacyPolicy />
        </Overlay>
      )}
      
      {overlayType === 'terms' && (
        <Overlay onClose={() => setOverlayType(null)}>
          <TermsOfUse />
        </Overlay>
      )}
    </div>
  );
}