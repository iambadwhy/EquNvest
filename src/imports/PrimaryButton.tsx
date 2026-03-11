import svgPaths from "./svg-b4hqrccxw4";

export default function PrimaryButton() {
  return (
    <button className="bg-[#155dfc] content-stretch cursor-pointer flex items-center justify-between px-[16px] py-[12px] relative size-full" data-name="Primary button">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.07px] whitespace-nowrap">
        <p className="leading-[1.45]">View Asset Portfolio</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0 size-[10px]" style={{ "--transform-inner-width": "118", "--transform-inner-height": "16" } as React.CSSProperties}>
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
    </button>
  );
}