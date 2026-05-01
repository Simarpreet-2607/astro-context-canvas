import { ChevronLeft, Clock, IndianRupee, Sparkles, RefreshCw, CheckCircle2 } from "lucide-react";
import { BottomNav } from "./BottomNav";

export const Screen3Summary = () => {
  return (
    <div className="h-full flex flex-col bg-background">
      <div className="px-5 pt-3 pb-3 flex items-center justify-between bg-white">
        <button className="w-9 h-9 rounded-full bg-astro-beige flex items-center justify-center">
          <ChevronLeft size={20} className="text-astro-ink" />
        </button>
        <h1 className="font-semibold text-astro-ink text-[15px]">Session Complete</h1>
        <div className="w-9" />
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide px-4 pb-4 space-y-4">
        {/* Hero */}
        <div className="bg-gradient-to-br from-astro-yellow-soft to-astro-beige-warm rounded-3xl p-5 text-center border border-astro-yellow/20">
          <div className="w-14 h-14 mx-auto rounded-full bg-astro-yellow flex items-center justify-center shadow-yellow">
            <CheckCircle2 size={28} className="text-astro-ink" strokeWidth={2.4} />
          </div>
          <h2 className="mt-3 font-semibold text-astro-ink text-[18px]">Session with Priya</h2>
          <p className="text-astro-ink-soft text-[12.5px] mt-0.5">Wrapped up successfully</p>
        </div>

        {/* Summary card */}
        <div className="bg-white rounded-3xl p-4 shadow-card border border-border">
          <h3 className="font-semibold text-astro-ink text-[15px] mb-3">Session Summary</h3>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-astro-beige rounded-2xl p-3">
              <div className="flex items-center gap-1.5 text-astro-mute text-[11px] mb-1">
                <Clock size={11} /> Duration
              </div>
              <div className="text-astro-ink font-semibold text-[15px]">14 mins</div>
            </div>
            <div className="bg-astro-beige rounded-2xl p-3">
              <div className="flex items-center gap-1.5 text-astro-mute text-[11px] mb-1">
                <IndianRupee size={11} /> Earnings
              </div>
              <div className="text-astro-ink font-semibold text-[15px]">₹420</div>
            </div>
          </div>

          <div className="bg-astro-yellow-soft/60 rounded-2xl p-3.5 border border-astro-yellow/30">
            <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-semibold text-astro-ink-soft mb-1.5">
              <Sparkles size={12} /> Key Insight Logged
            </div>
            <p className="text-[13px] text-astro-ink leading-relaxed font-medium">
              "Rahu in 10th house causing delay — clarity expected post May 15"
            </p>
          </div>
        </div>

        {/* Updated concern */}
        <div className="bg-white rounded-3xl p-4 shadow-card border border-border">
          <h3 className="font-semibold text-astro-ink text-[14px] mb-3">Updated Concern Status</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 bg-pill-orange-bg text-pill-orange-fg rounded-full pl-3 pr-4 py-2 text-[12.5px] font-medium">
                <RefreshCw size={12} /> Job switch — Follow up set
              </span>
              <span className="text-[10px] text-astro-green font-semibold">UPDATED</span>
            </div>
            <div className="flex items-center justify-between opacity-70">
              <span className="inline-flex items-center gap-2 bg-pill-pink-bg text-pill-pink-fg rounded-full pl-3 pr-4 py-2 text-[12.5px] font-medium">
                💔 Relationship uncertainty
              </span>
            </div>
            <div className="flex items-center justify-between opacity-70">
              <span className="inline-flex items-center gap-2 bg-pill-grey-bg text-pill-grey-fg rounded-full pl-3 pr-4 py-2 text-[12.5px] font-medium">
                🏥 Mother's health
              </span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="space-y-2">
          <button className="w-full bg-astro-yellow text-astro-ink font-semibold rounded-full py-4 text-[15px] shadow-yellow active:scale-[0.99] transition">
            Save to Client Context
          </button>
          <p className="text-center text-[11.5px] text-astro-mute leading-relaxed px-6">
            This will help your next astrologer continue where you left off
          </p>
        </div>
      </div>

      <BottomNav active="home" />
    </div>
  );
};
