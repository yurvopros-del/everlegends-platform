const FLAGS = [
  "🇺🇸", "🇧🇷", "🇬🇧", "🇯🇵", "🇳🇬", "🇮🇳", "🇩🇪", "🇰🇷", "🇲🇽", "🇦🇺",
  "🇰🇪", "🇫🇷", "🇷🇺", "🇨🇳", "🇸🇦", "🇿🇦", "🇦🇷", "🇨🇦", "🇮🇹", "🇪🇸",
  "🇵🇱", "🇹🇷", "🇸🇪", "🇳🇴", "🇳🇱", "🇵🇹", "🇨🇴", "🇪🇬", "🇵🇭", "🇹🇭",
  "🇯🇲", "🇬🇭", "🇨🇭", "🇦🇹", "🇭🇷", "🇷🇸", "🇺🇦", "🇨🇿", "🇷🇴", "🇭🇺",
  "🇮🇱", "🇦🇪", "🇮🇩", "🇻🇳", "🇨🇱", "🇵🇪", "🇲🇦", "🇩🇰", "🇫🇮", "🇮🇪",
];

interface FlagTickerProps {
  direction?: "left" | "right";
}

const FlagTicker = ({ direction = "left" }: FlagTickerProps) => {
  const animationClass = direction === "left" ? "animate-flag-scroll-left" : "animate-flag-scroll-right";

  return (
    <div className="relative w-full overflow-hidden py-3">
      {/* Gradient accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--gradient-mid)/0.2)] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--gradient-mid)/0.2)] to-transparent" />

      {/* Edge fades */}
      <div className="absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

      {/* Scrolling flags */}
      <div className={`flex whitespace-nowrap ${animationClass}`}>
        {[...FLAGS, ...FLAGS].map((flag, i) => (
          <span
            key={i}
            className="inline-block mx-3 text-base opacity-30 select-none"
            aria-hidden="true"
          >
            {flag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default FlagTicker;
