import svgPaths from "./svg-yra3vpu3di";
import imgPricingCards1 from "../../assets/Pricing cards 1.png";

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start leading-[0] min-h-px min-w-px not-italic relative text-white">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[14px] tracking-[-0.07px] w-[543px]">
        <p className="leading-[1.2]">How We Participate</p>
      </div>
      <div className="flex flex-col font-['Aboreto:Regular',sans-serif] justify-center min-w-full relative shrink-0 text-[56px] tracking-[-2.24px] uppercase w-[min-content]">
        <h2 className="block leading-[0.8]">{`Capital Participation Models `}</h2>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col font-['Aboreto:Regular',sans-serif] gap-[8px] items-start not-italic relative shrink-0 uppercase w-full">
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[31px] text-black tracking-[-0.155px] w-full">
        <p className="leading-[0.8]">{`General Partner `}</p>
      </div>
      <div className="flex flex-col justify-center leading-[1.1] relative shrink-0 text-[#155dfc] text-[16px] tracking-[-0.08px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Active Sponsorship & `}</p>
        <p>Asset Management</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full" data-name="Header">
      <Frame2 />
      <div className="flex flex-col font-['Aboreto:Regular','Noto_Sans:Bold',sans-serif] h-[348px] justify-center leading-[1.4] relative shrink-0 text-[#383838] text-[0px] tracking-[-0.06px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700" }}>
        <p className="mb-[2px] text-[16px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700" }}>{`Role & Responsibility `}</p>
        <p className="font-['Inter:Bold','Noto_Sans:Bold',sans-serif] font-bold mb-[12px] not-italic text-[12px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700" }}>{`Source deals, execute business plans, manage operations, provide ongoing asset/fund-level decisions `}</p>
        <p className="mb-[2px] text-[16px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700" }}>{`Profit Split `}</p>
        <p className="font-['Inter:Bold','Noto_Sans:Bold',sans-serif] font-bold mb-[12px] not-italic text-[12px]">{`Promote (typically 20%+ of profits above a hurdle) • Co-invest capital alongside LPs `}</p>
        <p className="mb-[2px] text-[16px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700" }}>{`Why be a Partner (GP)? `}</p>
        <p className="font-['Inter:Bold','Noto_Sans:Bold',sans-serif] font-bold mb-[12px] not-italic text-[12px]">{`Higher upside via promote • Decision-making control • Reputational & portfolio scalability `}</p>
        <p className="mb-[2px] text-[16px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700" }}>{`Ideal For `}</p>
        <p className="font-['Inter:Bold','Noto_Sans:Bold',sans-serif] font-bold mb-[12px] not-italic text-[12px]">{`Operators, sponsors, and active real estate professionals `}</p>
        <p className="mb-[2px] text-[16px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700" }}>{`Target Return `}</p>
        <p className="font-['Inter:Bold','Noto_Sans:Bold',sans-serif] font-bold mb-[12px] not-italic text-[12px]">15% – 30%+ including promote</p>
        <p className="text-[12px]">&nbsp;</p>
      </div>
    </div>
  );
}

function PrimaryButton() {
  return (
    <button className="bg-[#155dfc] cursor-pointer relative shrink-0 w-full" data-name="Primary button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative w-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.07px] whitespace-nowrap">
            <p className="leading-[1.45]">Learn More</p>
          </div>
          <div className="flex items-center justify-center relative shrink-0 size-[10px]" style={{ "--transform-inner-width": "68", "--transform-inner-height": "16" } as React.CSSProperties}>
            <div className="-rotate-45 flex-none">
              <div className="h-0 relative w-[14.142px]">
                <div className="absolute inset-[-7.36px_-7.07%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1421 14.7279">
                    <path d={svgPaths.p582da80} fill="var(--stroke-0, white)" id="Arrow 1" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

function Card() {
  return (
    <div className="bg-[#fffcfc] relative self-stretch shadow-[0px_0px_4.4px_0px_rgba(0,0,0,0.06),0px_5px_19px_0px_rgba(0,0,0,0.08)] shrink-0 w-[344px]" data-name="Card 4">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start pb-[24px] pt-[32px] px-[24px] relative size-full">
          <Header />
          <PrimaryButton />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col font-['Aboreto:Regular',sans-serif] gap-[8px] items-start not-italic relative shrink-0 uppercase w-full">
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[31px] text-black tracking-[-0.155px] w-full">
        <p className="leading-[0.8]">LIMITED PARTNER</p>
      </div>
      <div className="flex flex-col justify-center leading-[1.1] relative shrink-0 text-[#155dfc] text-[16px] tracking-[-0.08px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Passive Investment & `}</p>
        <p>Preferred Returns</p>
      </div>
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full" data-name="Header">
      <Frame3 />
      <div className="flex flex-col font-['Aboreto:Regular','Noto_Sans:Bold',sans-serif] h-[348px] justify-center leading-[1.4] relative shrink-0 text-[#383838] text-[0px] tracking-[-0.06px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700" }}>
        <p className="mb-[2px] text-[16px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700" }}>{`Role & Responsibility `}</p>
        <p className="font-['Inter:Bold','Noto_Sans:Bold',sans-serif] font-bold mb-[12px] not-italic text-[12px]">{`Commit capital. Receive updates. No active operational duties or liabilities beyond the investment `}</p>
        <p className="mb-[2px] text-[16px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700" }}>{`Profit Split `}</p>
        <p className="font-['Inter:Bold','Noto_Sans:Bold',sans-serif] font-bold mb-[12px] not-italic text-[12px]">{`Preferred return (typically 6-8% annually) • 70-80% of profits until promote kicks in • Return of capital prioritized `}</p>
        <p className="mb-[2px] text-[16px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700" }}>{`Why invest as LP? `}</p>
        <p className="font-['Inter:Bold','Noto_Sans:Bold',sans-serif] font-bold mb-[12px] not-italic text-[12px]">{`Passive income with downside protection • No management burden • Access to institutional-quality deals `}</p>
        <p className="mb-[2px] text-[16px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700" }}>{`Ideal For `}</p>
        <p className="font-['Inter:Bold','Noto_Sans:Bold',sans-serif] font-bold mb-[12px] not-italic text-[12px]">{`Accredited investors seeking passive, diversified real estate exposure `}</p>
        <p className="mb-[2px] text-[16px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700" }}>{`Target Return `}</p>
        <p className="font-['Inter:Bold','Noto_Sans:Bold',sans-serif] font-bold not-italic text-[12px]">10% – 18% IRR</p>
      </div>
    </div>
  );
}

function PrimaryButton1() {
  return (
    <button className="bg-[#155dfc] cursor-pointer relative shrink-0 w-full" data-name="Primary button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative w-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.07px] whitespace-nowrap">
            <p className="leading-[1.45]">Learn More</p>
          </div>
          <div className="flex items-center justify-center relative shrink-0 size-[10px]" style={{ "--transform-inner-width": "68", "--transform-inner-height": "16" } as React.CSSProperties}>
            <div className="-rotate-45 flex-none">
              <div className="h-0 relative w-[14.142px]">
                <div className="absolute inset-[-7.36px_-7.07%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1421 14.7279">
                    <path d={svgPaths.p582da80} fill="var(--stroke-0, white)" id="Arrow 1" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

function Card1() {
  return (
    <div className="bg-[#fffcfc] relative self-stretch shadow-[0px_0px_4.4px_0px_rgba(0,0,0,0.06),0px_5px_19px_0px_rgba(0,0,0,0.08)] shrink-0 w-[344px]" data-name="Card 5">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start pb-[24px] pt-[32px] px-[24px] relative size-full">
          <Header1 />
          <PrimaryButton1 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[32px] h-[567px] items-start relative shrink-0">
      <Card />
      <Card1 />
    </div>
  );
}

function Frame4() {
  return (
    <li className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Frame1 />
      <Frame />
    </li>
  );
}

export default function PricingCards() {
  return (
    <ul className="content-stretch flex flex-col items-start px-[64px] py-[120px] relative size-full" data-name="Pricing cards 1">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPricingCards1} />
      <Frame4 />
    </ul>
  );
}