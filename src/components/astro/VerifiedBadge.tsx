import { Check } from "lucide-react";

export const VerifiedBadge = ({ size = 16 }: { size?: number }) => (
  <span
    className="inline-flex items-center justify-center rounded-full bg-astro-green text-white border-2 border-white"
    style={{ width: size, height: size }}
  >
    <Check size={size * 0.6} strokeWidth={3} />
  </span>
);
