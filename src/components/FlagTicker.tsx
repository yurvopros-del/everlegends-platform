const FLAGS = [
  { flag: "🇺🇸", code: "USA" }, { flag: "🇧🇷", code: "BRA" }, { flag: "🇬🇧", code: "GBR" }, { flag: "🇯🇵", code: "JPN" },
  { flag: "🇳🇬", code: "NGA" }, { flag: "🇮🇳", code: "IND" }, { flag: "🇩🇪", code: "GER" }, { flag: "🇰🇷", code: "KOR" },
  { flag: "🇲🇽", code: "MEX" }, { flag: "🇦🇺", code: "AUS" }, { flag: "🇰🇪", code: "KEN" }, { flag: "🇫🇷", code: "FRA" },
  { flag: "🇷🇺", code: "RUS" }, { flag: "🇨🇳", code: "CHN" }, { flag: "🇸🇦", code: "KSA" }, { flag: "🇿🇦", code: "RSA" },
  { flag: "🇦🇷", code: "ARG" }, { flag: "🇨🇦", code: "CAN" }, { flag: "🇮🇹", code: "ITA" }, { flag: "🇪🇸", code: "ESP" },
  { flag: "🇵🇱", code: "POL" }, { flag: "🇹🇷", code: "TUR" }, { flag: "🇸🇪", code: "SWE" }, { flag: "🇳🇴", code: "NOR" },
  { flag: "🇳🇱", code: "NED" }, { flag: "🇵🇹", code: "POR" }, { flag: "🇨🇴", code: "COL" }, { flag: "🇪🇬", code: "EGY" },
  { flag: "🇵🇭", code: "PHI" }, { flag: "🇹🇭", code: "THA" }, { flag: "🇯🇲", code: "JAM" }, { flag: "🇬🇭", code: "GHA" },
  { flag: "🇨🇭", code: "SUI" }, { flag: "🇦🇹", code: "AUT" }, { flag: "🇭🇷", code: "CRO" }, { flag: "🇷🇸", code: "SRB" },
  { flag: "🇺🇦", code: "UKR" }, { flag: "🇨🇿", code: "CZE" }, { flag: "🇷🇴", code: "ROU" }, { flag: "🇭🇺", code: "HUN" },
  { flag: "🇮🇱", code: "ISR" }, { flag: "🇦🇪", code: "UAE" }, { flag: "🇮🇩", code: "INA" }, { flag: "🇻🇳", code: "VIE" },
  { flag: "🇨🇱", code: "CHI" }, { flag: "🇵🇪", code: "PER" }, { flag: "🇲🇦", code: "MAR" }, { flag: "🇩🇰", code: "DEN" },
  { flag: "🇫🇮", code: "FIN" }, { flag: "🇮🇪", code: "IRL" },
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
        {[...FLAGS, ...FLAGS].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-1.5 mx-4 text-sm opacity-45 select-none"
            aria-hidden="true"
          >
            <span className="text-base">{item.flag}</span>
            <span className="text-[10px] font-semibold tracking-[0.15em] text-muted-foreground">{item.code}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default FlagTicker;
