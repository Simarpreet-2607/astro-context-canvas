import { Home, MessageCircle, Phone, Sparkles } from "lucide-react";

interface BottomNavProps {
  active?: "home" | "chat" | "call" | "remedies";
}

const items = [
  { key: "home", label: "Home", Icon: Home },
  { key: "chat", label: "Chat", Icon: MessageCircle },
  { key: "call", label: "Call", Icon: Phone },
  { key: "remedies", label: "Remedies", Icon: Sparkles },
] as const;

export const BottomNav = ({ active = "chat" }: BottomNavProps) => {
  return (
    <div className="border-t border-border bg-white px-2 pt-2 pb-5 flex items-center justify-around flex-shrink-0">
      {items.map(({ key, label, Icon }) => {
        const isActive = key === active;
        return (
          <button
            key={key}
            className="flex flex-col items-center gap-0.5 px-3 py-1"
          >
            <Icon
              size={22}
              className={isActive ? "text-astro-ink" : "text-astro-mute"}
              strokeWidth={isActive ? 2.4 : 1.8}
            />
            <span
              className={`text-[10px] font-medium ${
                isActive ? "text-astro-ink" : "text-astro-mute"
              }`}
            >
              {label}
            </span>
            {isActive && (
              <div className="w-1 h-1 rounded-full bg-astro-yellow mt-0.5" />
            )}
          </button>
        );
      })}
    </div>
  );
};
