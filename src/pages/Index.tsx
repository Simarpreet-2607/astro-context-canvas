import { useState } from "react";
import { PhoneFrame } from "@/components/astro/PhoneFrame";
import { Screen1Incoming } from "@/components/astro/Screen1Incoming";
import { Screen2Chat } from "@/components/astro/Screen2Chat";
import { Screen3Summary } from "@/components/astro/Screen3Summary";

const tabs = [
  { id: 1, label: "Incoming" },
  { id: 2, label: "In Session" },
  { id: 3, label: "Summary" },
] as const;

const Index = () => {
  const [active, setActive] = useState<1 | 2 | 3>(1);

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-astro-beige via-background to-astro-beige-warm flex flex-col items-center justify-center py-10 px-4">
      <header className="text-center mb-6">
        <div className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-3 py-1 text-[11px] font-semibold text-astro-ink-soft shadow-soft">
          <span className="w-1.5 h-1.5 rounded-full bg-astro-yellow" />
          ASTROTALK · INTERNAL CONCEPT
        </div>
        <h1 className="mt-3 text-2xl font-semibold text-astro-ink">Life Context Card</h1>
        <p className="text-astro-ink-soft text-sm mt-1 max-w-md">
          Pre-session intelligence for astrologers — built into the AstroTalk experience.
        </p>
      </header>

      {/* Tab switcher */}
      <div className="bg-white rounded-full p-1 shadow-card border border-border flex gap-1 mb-6">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActive(t.id as 1 | 2 | 3)}
            className={`px-4 py-2 rounded-full text-[12.5px] font-semibold transition ${
              active === t.id
                ? "bg-astro-yellow text-astro-ink shadow-yellow"
                : "text-astro-ink-soft"
            }`}
          >
            {t.id}. {t.label}
          </button>
        ))}
      </div>

      <PhoneFrame>
        {active === 1 && <Screen1Incoming />}
        {active === 2 && <Screen2Chat />}
        {active === 3 && <Screen3Summary />}
      </PhoneFrame>

      <footer className="mt-6 text-[11px] text-astro-mute">
        Tap tabs above to navigate · 375 × 812 viewport
      </footer>
    </main>
  );
};

export default Index;
