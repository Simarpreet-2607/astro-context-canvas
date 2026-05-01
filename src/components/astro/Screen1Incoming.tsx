import { Sparkles, ChevronLeft, MoreHorizontal, Calendar, Clock } from "lucide-react";
import { BottomNav } from "./BottomNav";
import { VerifiedBadge } from "./VerifiedBadge";

const Avatar = ({ name }: { name: string }) => (
  <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-astro-yellow to-orange-300 flex items-center justify-center text-astro-ink font-semibold text-lg flex-shrink-0">
    {name.charAt(0)}
    <div className="absolute -bottom-0.5 -right-0.5">
      <VerifiedBadge size={18} />
    </div>
  </div>
);

export const Screen1Incoming = () => {
  return (
    <div className="h-full flex flex-col bg-background">
      {/* Header */}
      <div className="px-5 pt-3 pb-3 flex items-center justify-between bg-white">
        <button className="w-9 h-9 rounded-full bg-astro-beige flex items-center justify-center">
          <ChevronLeft size={20} className="text-astro-ink" />
        </button>
        <h1 className="font-semibold text-astro-ink text-[15px]">Incoming Session</h1>
        <button className="w-9 h-9 rounded-full bg-astro-beige flex items-center justify-center">
          <MoreHorizontal size={18} className="text-astro-ink" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide px-4 pb-4 space-y-4">
        {/* Incoming chat request */}
        <div className="bg-white rounded-3xl p-4 shadow-card border border-border">
          <div className="flex items-start gap-3">
            <Avatar name="Priya" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="font-semibold text-astro-ink text-[16px]">Priya S.</h2>
                <span className="text-astro-ink-soft text-[13px]">♏ Scorpio</span>
              </div>
              <div className="mt-1.5 inline-flex items-center gap-1.5 bg-astro-yellow text-astro-ink rounded-full px-2.5 py-1 text-[11px] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-astro-ink animate-pulse" />
                NEW CHAT REQUEST
              </div>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-[1fr_auto] gap-2.5">
            <button className="bg-astro-yellow text-astro-ink font-semibold rounded-full py-3.5 text-[15px] shadow-yellow active:scale-[0.98] transition">
              Accept
            </button>
            <button className="border border-border text-astro-ink-soft font-medium rounded-full px-6 text-[14px]">
              Decline
            </button>
          </div>
        </div>

        {/* Client Life Context */}
        <div className="bg-white rounded-3xl p-4 shadow-card border border-border">
          <div className="flex items-start gap-2.5">
            <div className="w-9 h-9 rounded-full bg-astro-yellow-soft flex items-center justify-center flex-shrink-0">
              <Sparkles size={18} className="text-astro-ink" fill="hsl(var(--astro-yellow))" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-astro-ink text-[15px]">Client Life Context</h3>
              <p className="text-astro-mute text-[12px] leading-tight">
                AI-summarised from past sessions
              </p>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-[11px] uppercase tracking-wider text-astro-mute font-semibold mb-2">
              Active Concerns
            </p>
            <div className="flex flex-col gap-2">
              <span className="inline-flex items-center gap-2 bg-pill-orange-bg text-pill-orange-fg rounded-full pl-3 pr-4 py-2 text-[13px] font-medium self-start max-w-full">
                <span>🧳</span>
                <span className="truncate">Job switch — waiting for offer from TCS</span>
              </span>
              <span className="inline-flex items-center gap-2 bg-pill-pink-bg text-pill-pink-fg rounded-full pl-3 pr-4 py-2 text-[13px] font-medium self-start">
                <span>💔</span>
                <span>Relationship uncertainty with partner</span>
              </span>
              <span className="inline-flex items-center gap-2 bg-pill-grey-bg text-pill-grey-fg rounded-full pl-3 pr-4 py-2 text-[13px] font-medium self-start">
                <span>🏥</span>
                <span>Mother's health — ongoing concern</span>
              </span>
            </div>
          </div>
        </div>

        {/* Last Session */}
        <div className="bg-astro-beige-warm rounded-3xl p-4 border border-border/50">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-astro-ink text-[14px]">Last Session</h3>
            <span className="text-[11px] text-astro-mute">View all</span>
          </div>
          <div className="bg-white rounded-2xl p-3.5 space-y-2.5">
            <div className="flex items-center gap-3 text-[12px] text-astro-ink-soft">
              <span className="inline-flex items-center gap-1">
                <Calendar size={12} /> April 18, 2025
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock size={12} /> 14 mins
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-astro-yellow-soft flex items-center justify-center text-[10px] font-bold text-astro-ink">
                R
              </div>
              <span className="text-[13px] text-astro-ink font-medium">Pt. Ramesh Ji</span>
            </div>
            <p className="text-[12.5px] text-astro-ink-soft leading-relaxed">
              Saturn transit affecting career house till June. Advised chanting Hanuman Chalisa on Saturdays.
            </p>
            <div className="pt-1">
              <span className="inline-flex items-center gap-1.5 bg-pill-orange-bg text-pill-orange-fg rounded-full px-2.5 py-1 text-[11px] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-pill-orange-fg" />
                Open concern: Job offer still pending
              </span>
            </div>
          </div>
        </div>
      </div>

      <BottomNav active="chat" />
    </div>
  );
};
