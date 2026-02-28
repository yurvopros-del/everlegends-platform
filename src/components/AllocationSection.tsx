import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { translations, t } from "@/lib/translations";

const DISPLAY_ORDER = [3, 1, 0, 2, 4]; // tier indices: 4th, 2nd, 1st, 3rd, 5th

const MEDAL_STYLES: Record<number, { gradient: string; border: string }> = {
  0: {
    gradient: "radial-gradient(circle at 35% 35%, #FFD700, #DAA520 40%, #B8860B 80%)",
    border: "1px solid #DAA520",
  },
  1: {
    gradient: "radial-gradient(circle at 35% 35%, #E8E8E8, #C0C0C0 40%, #708090 80%)",
    border: "1px solid #A0A0A0",
  },
  2: {
    gradient: "radial-gradient(circle at 35% 35%, #DEB887, #CD7F32 40%, #8B4513 80%)",
    border: "1px solid #CD7F32",
  },
};

const PILLAR_HEIGHTS = { 0: 480, 1: 384, 2: 384, 3: 288, 4: 288 };

function Medal({ rank }: { rank: number }) {
  const style = MEDAL_STYLES[rank];
  if (!style) return null;
  const size = rank === 0 ? 64 : 52;
  return (
    <div
      className="flex items-center justify-center shrink-0 mx-auto"
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: style.gradient,
        border: style.border,
        boxShadow: "inset 0 2px 4px rgba(0,0,0,0.4)",
      }}
    >
      <span
        className="font-black select-none"
        style={{
          fontSize: rank === 0 ? 22 : 18,
          color: rank === 0 ? "#5C4300" : rank === 1 ? "#404040" : "#3E1E00",
          textShadow: "0 1px 0 rgba(255,255,255,0.3)",
        }}
      >
        {String(rank + 1).padStart(2, "0")}
      </span>
    </div>
  );
}

const AllocationSection = () => {
  const locale = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [selectedTier, setSelectedTier] = useState<number | null>(null);

  const { kicker, title, tiers, disclaimer } = translations.allocation;

  const handleClick = (tierIndex: number) => {
    setSelectedTier((prev) => (prev === tierIndex ? null : tierIndex));
  };

  const renderPillar = (tierIndex: number, displayIndex: number) => {
    const tier = tiers[tierIndex] as any;
    const isActive = selectedTier === tierIndex;
    const isRank1 = tierIndex === 0;
    const isTier5 = tierIndex === 4;
    const height = PILLAR_HEIGHTS[tierIndex as keyof typeof PILLAR_HEIGHTS];

    const pillarContent = (
      <div
        className="flex flex-col items-center justify-start pt-8 pb-6 px-4 h-full cursor-pointer transition-colors duration-200"
        style={{
          background: "#0F0F0F",
          borderRadius: 2,
          border: isRank1
            ? "none"
            : `1px solid ${isTier5 ? "#2a2a2a" : isActive ? "#505050" : "#404040"}`,
        }}
        onClick={() => handleClick(tierIndex)}
      >
        {/* Medal or rank number */}
        <div className="mb-4">
          {tierIndex < 3 ? (
            <Medal rank={tierIndex} />
          ) : (
            <span className="text-2xl font-black" style={{ color: "#606060" }}>
              {String(tierIndex + 1).padStart(2, "0")}
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          className="text-center font-extrabold uppercase leading-tight"
          style={{
            fontSize: isRank1 ? 14 : 12,
            letterSpacing: isTier5 ? "0.15em" : "0.08em",
            color: "#e0e0e0",
          }}
        >
          {t(tier.title, locale)}
        </h3>

        {/* Sublabel */}
        {t(tier.sublabel, locale) && (
          <span
            className="mt-2 text-center uppercase"
            style={{ fontSize: 10, letterSpacing: "0.12em", color: "#606060" }}
          >
            {t(tier.sublabel, locale)}
          </span>
        )}

        {/* Amount */}
        <span
          className="mt-4 font-black"
          style={{
            fontSize: isRank1 ? 28 : 22,
            fontVariantNumeric: "tabular-nums",
            color: isRank1 ? "#ffffff" : "#c0c0c0",
          }}
        >
          {tier.amount}
        </span>

        {/* Descriptor */}
        <p
          className="mt-3 text-center leading-snug"
          style={{ fontSize: 11, color: "#707070", maxWidth: 180 }}
        >
          {t(tier.descriptor, locale)}
        </p>

        {/* Tier 5 accent line */}
        {isTier5 && (
          <div className="mt-auto w-3/4 mx-auto" style={{ borderTop: "1px solid #2a2a2a" }} />
        )}
      </div>
    );

    // Rank 1 gets gradient border wrapper
    if (isRank1) {
      return (
        <motion.div
          key={tierIndex}
          className="hidden md:block"
          style={{
            flex: "0 0 18%",
            height,
            background: "linear-gradient(135deg, #00E0C6, #0047AB)",
            borderRadius: 2,
            padding: 1,
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 * displayIndex, ease: "linear" }}
        >
          {pillarContent}
        </motion.div>
      );
    }

    return (
      <motion.div
        key={tierIndex}
        className="hidden md:block"
        style={{ flex: "0 0 14%", height }}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.15 * displayIndex, ease: "linear" }}
      >
        {pillarContent}
      </motion.div>
    );
  };

  // Mobile pillar (natural order)
  const renderMobilePillar = (tierIndex: number) => {
    const tier = tiers[tierIndex] as any;
    const isActive = selectedTier === tierIndex;
    const isRank1 = tierIndex === 0;
    const isTier5 = tierIndex === 4;

    const inner = (
      <div
        className="flex flex-col items-center py-8 px-6 cursor-pointer transition-colors duration-200"
        style={{
          background: "#0F0F0F",
          borderRadius: 2,
          border: isRank1
            ? "none"
            : `1px solid ${isTier5 ? "#2a2a2a" : isActive ? "#505050" : "#404040"}`,
        }}
        onClick={() => handleClick(tierIndex)}
      >
        <div className="mb-3">
          {tierIndex < 3 ? (
            <Medal rank={tierIndex} />
          ) : (
            <span className="text-xl font-black" style={{ color: "#606060" }}>
              {String(tierIndex + 1).padStart(2, "0")}
            </span>
          )}
        </div>
        <h3
          className="text-center font-extrabold uppercase"
          style={{ fontSize: 13, letterSpacing: isTier5 ? "0.15em" : "0.08em", color: "#e0e0e0" }}
        >
          {t(tier.title, locale)}
        </h3>
        <span
          className="mt-3 font-black"
          style={{ fontSize: 24, fontVariantNumeric: "tabular-nums", color: isRank1 ? "#fff" : "#c0c0c0" }}
        >
          {tier.amount}
        </span>
        <p className="mt-2 text-center" style={{ fontSize: 11, color: "#707070" }}>
          {t(tier.descriptor, locale)}
        </p>
      </div>
    );

    const detailContent = selectedTier === tierIndex ? (
      <AnimatePresence>
        <motion.div
          key={`mobile-detail-${tierIndex}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "linear" }}
          style={{ background: "#0A0A0A", borderTop: "1px solid #1a1a1a", overflow: "hidden" }}
        >
          <div className="px-6 py-5 space-y-3">
            {(tier.detail.lines as any[]).map((line: any, li: number) => (
              <div key={li}>
                <span className="text-[10px] uppercase tracking-[0.15em] block" style={{ color: "#505050" }}>
                  {t(line.label, locale)}
                </span>
                <span className="text-sm" style={{ color: "#a0a0a0" }}>
                  {t(line.value, locale)}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    ) : null;

    return (
      <motion.div
        key={tierIndex}
        className="md:hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 * tierIndex, ease: "linear" }}
      >
        {isRank1 ? (
          <div style={{ background: "linear-gradient(135deg, #00E0C6, #0047AB)", borderRadius: 2, padding: 1 }}>
            {inner}
          </div>
        ) : (
          inner
        )}
        {detailContent}
      </motion.div>
    );
  };

  // Desktop detail panel
  const desktopDetail = selectedTier !== null ? (
    <AnimatePresence>
      <motion.div
        key={`desktop-detail-${selectedTier}`}
        className="hidden md:block"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3, ease: "linear" }}
        style={{ background: "#0A0A0A", borderTop: "1px solid #1a1a1a", overflow: "hidden" }}
      >
        <div className="content-max py-8">
          <div className="flex flex-wrap gap-x-16 gap-y-4">
            {((tiers[selectedTier] as any).detail.lines as any[]).map((line: any, li: number) => (
              <div key={li}>
                <span className="text-[10px] uppercase tracking-[0.15em] block" style={{ color: "#505050" }}>
                  {t(line.label, locale)}
                </span>
                <span className="text-sm mt-1 block" style={{ color: "#a0a0a0" }}>
                  {t(line.value, locale)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  ) : null;

  const disclaimerText = t(disclaimer, locale)?.trim();

  return (
    <section ref={ref} className="bg-black bg-grid-overlay py-24 md:py-32 lg:py-40">
      {/* Header */}
      <div className="content-max text-center mb-16">
        <motion.div
          className="text-xs tracking-[0.1em] uppercase"
          style={{ color: "#606060" }}
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "linear" }}
        >
          {t(kicker, locale)}
        </motion.div>
        <motion.h2
          className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight"
          style={{ color: "#ffffff" }}
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08, ease: "linear" }}
        >
          {t(title, locale)}
        </motion.h2>
      </div>

      {/* Desktop pyramidal layout */}
      <div className="content-max">
        <div className="hidden md:flex items-end justify-center gap-4">
          {DISPLAY_ORDER.map((tierIndex, displayIndex) =>
            renderPillar(tierIndex, displayIndex)
          )}
        </div>
      </div>

      {/* Desktop detail panel */}
      {desktopDetail}

      {/* Mobile layout */}
      <div className="content-max md:hidden space-y-3">
        {[0, 1, 2, 3, 4].map((tierIndex) => renderMobilePillar(tierIndex))}
      </div>

      {/* Disclaimer */}
      {disclaimerText && (
        <motion.p
          className="content-max text-center mt-12"
          style={{ fontSize: 11, color: "#505050", letterSpacing: "0.03em" }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6, ease: "linear" }}
        >
          {disclaimerText}
        </motion.p>
      )}
    </section>
  );
};

export default AllocationSection;
