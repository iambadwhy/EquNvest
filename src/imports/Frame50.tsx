export default function Frame() {
  return (
    <div className="bg-black content-stretch flex flex-col font-['Aboreto:Regular',sans-serif] gap-[10px] items-start not-italic p-[32px] relative size-full text-white">
      <h2 className="block leading-[0.8] relative shrink-0 text-[28px] md:text-[40px] lg:text-[56px] tracking-[-2.24px] uppercase w-full">Disclaimer*</h2>
      <div className="leading-[1.45] relative shrink-0 text-[12px] tracking-[-0.06px] w-full">
        <p className="mb-0">The information provided on this website is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any securities.</p>
        <p className="mb-0">Any investment opportunity described herein will be made only through formal offering documents, including a Private Placement Memorandum (PPM), subscription agreement, and related materials.</p>
        <p className="mb-0">Investments in private placements involve risk, including possible loss of principal. Past performance is not indicative of future results.</p>
        <p className="mb-0">Forward-looking statements regarding projected returns, timelines, or financial performance are based on current assumptions and involve inherent risks and uncertainties.</p>
        <p className="mb-0">EquNvest LLC does not guarantee any specific investment outcome or return.</p>
        <p>Investors should conduct their own due diligence and consult financial, legal, and tax advisors before making any investment decision.</p>
      </div>
    </div>
  );
}