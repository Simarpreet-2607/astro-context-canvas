import { useState } from "react";
import { ChevronLeft, Phone, MoreVertical, ChevronDown, ChevronUp, Send, Plus, Sparkles } from "lucide-react";

export const Screen2Chat = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="h-full flex flex-col bg-background">
      {/* Top bar */}
      <div className="px-4 pt-3 pb-3 bg-white border-b border-border flex items-center gap-3">
        <button>
          <ChevronLeft size={22} className="text-astro-ink" />
        </button>
        <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-astro-yellow to-orange-300 flex items-center justify-center text-astro-ink font-semibold text-sm flex-shrink-0">
          P
          <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-astro-green border-2 border-white" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <h2 className="font-semibold text-astro-ink text-[14px] truncate">Priya S.</h2>
            <span className="text-[11px] text-astro-green font-medium">● Online</span>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-astro-mute mt-0.5">
            <span className="font-mono font-semibold text-astro-ink">02:34</span>
            <span>·</span>
            <span>₹72 used</span>
          </div>
        </div>
        <button className="w-9 h-9 rounded-full bg-astro-beige flex items-center justify-center">
          <Phone size={16} className="text-astro-ink" />
        </button>
        <button>
          <MoreVertical size={20} className="text-astro-ink" />
        </button>
      </div>

      {/* Sticky context banner */}
      <div className="bg-astro-beige-warm border-b border-border/60">
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full px-4 py-2.5 flex items-center gap-2 text-left"
        >
          <span className="text-[14px]">📋</span>
          <span className="text-[12.5px] text-astro-ink flex-1 truncate font-medium">
            <span className="text-astro-mute font-normal">Context: </span>
            Job switch · Relationship · Mother's health
          </span>
          {expanded ? (
            <ChevronUp size={16} className="text-astro-ink-soft" />
          ) : (
            <ChevronDown size={16} className="text-astro-ink-soft" />
          )}
        </button>
        {expanded && (
          <div className="px-4 pb-3 space-y-2 animate-in slide-in-from-top-1">
            <div className="flex items-center gap-2 text-[11px] text-astro-mute font-semibold uppercase tracking-wider">
              <Sparkles size={11} /> AI Context Card
            </div>
            <span className="inline-flex items-center gap-1.5 bg-pill-orange-bg text-pill-orange-fg rounded-full px-2.5 py-1 text-[11px] font-medium mr-1">
              🧳 Job switch (TCS offer pending)
            </span>
            <span className="inline-flex items-center gap-1.5 bg-pill-pink-bg text-pill-pink-fg rounded-full px-2.5 py-1 text-[11px] font-medium mr-1">
              💔 Relationship uncertainty
            </span>
            <span className="inline-flex items-center gap-1.5 bg-pill-grey-bg text-pill-grey-fg rounded-full px-2.5 py-1 text-[11px] font-medium">
              🏥 Mother's health
            </span>
            <p className="text-[11.5px] text-astro-ink-soft pt-1 leading-relaxed">
              Last session: Saturn transit advice (Apr 18, Pt. Ramesh Ji)
            </p>
          </div>
        )}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto scrollbar-hide px-4 py-4 space-y-3 bg-background">
        <div className="text-center">
          <span className="text-[10px] text-astro-mute bg-white px-3 py-1 rounded-full border border-border">
            Today
          </span>
        </div>

        {/* astrologer left */}
        <div className="flex justify-start">
          <div className="max-w-[78%] bg-white rounded-2xl rounded-tl-md px-3.5 py-2.5 shadow-soft border border-border/60">
            <p className="text-[13.5px] text-astro-ink leading-relaxed">
              Namaste Priya 🙏 I have your context. Let's start with the job offer concern.
            </p>
            <span className="text-[10px] text-astro-mute block mt-1">10:24 AM</span>
          </div>
        </div>

        {/* user right */}
        <div className="flex justify-end">
          <div className="max-w-[78%] bg-astro-yellow rounded-2xl rounded-tr-md px-3.5 py-2.5 shadow-soft">
            <p className="text-[13.5px] text-astro-ink leading-relaxed">
              Yes panditji, still no update from TCS. Getting anxious 😟
            </p>
            <span className="text-[10px] text-astro-ink/60 block mt-1 text-right">10:25 AM</span>
          </div>
        </div>

        <div className="flex justify-start">
          <div className="max-w-[78%] bg-white rounded-2xl rounded-tl-md px-3.5 py-2.5 shadow-soft border border-border/60">
            <p className="text-[13.5px] text-astro-ink leading-relaxed">
              Looking at your chart, Rahu is in your 10th house — this is causing a delay, not denial. Share your DOB once more for confirmation.
            </p>
            <span className="text-[10px] text-astro-mute block mt-1">10:25 AM</span>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="max-w-[78%] bg-astro-yellow rounded-2xl rounded-tr-md px-3.5 py-2.5 shadow-soft">
            <p className="text-[13.5px] text-astro-ink leading-relaxed">
              14 Nov 1996, 9:42 PM, Pune
            </p>
            <span className="text-[10px] text-astro-ink/60 block mt-1 text-right">10:26 AM</span>
          </div>
        </div>
      </div>

      {/* Input */}
      <div className="px-3 py-2.5 bg-white border-t border-border flex items-center gap-2 flex-shrink-0">
        <button className="w-9 h-9 rounded-full bg-astro-beige flex items-center justify-center">
          <Plus size={18} className="text-astro-ink" />
        </button>
        <div className="flex-1 bg-astro-beige rounded-full px-4 py-2.5">
          <input
            placeholder="Type a message..."
            className="bg-transparent w-full text-[13px] text-astro-ink outline-none placeholder:text-astro-mute"
          />
        </div>
        <button className="w-10 h-10 rounded-full bg-astro-yellow flex items-center justify-center shadow-yellow">
          <Send size={16} className="text-astro-ink" />
        </button>
      </div>
    </div>
  );
};
