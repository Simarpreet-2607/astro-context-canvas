import { ReactNode } from "react";

interface PhoneFrameProps {
  children: ReactNode;
}

export const PhoneFrame = ({ children }: PhoneFrameProps) => {
  return (
    <div className="w-[375px] h-[812px] bg-white rounded-[44px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.35)] border border-black/5 overflow-hidden relative flex flex-col">
      {/* Status bar */}
      <div className="h-11 px-7 flex items-center justify-between text-astro-ink text-[13px] font-semibold flex-shrink-0 bg-white">
        <span>9:41</span>
        <div className="absolute left-1/2 -translate-x-1/2 top-2 w-[110px] h-[26px] bg-black rounded-full" />
        <div className="flex items-center gap-1">
          <span className="text-[10px]">●●●●</span>
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
            <rect x="0.5" y="0.5" width="13" height="9" rx="2" stroke="currentColor" />
            <rect x="2" y="2" width="10" height="6" rx="1" fill="currentColor" />
            <rect x="14" y="3" width="1.5" height="4" rx="0.5" fill="currentColor" />
          </svg>
        </div>
      </div>
      <div className="flex-1 overflow-hidden">{children}</div>
    </div>
  );
};
