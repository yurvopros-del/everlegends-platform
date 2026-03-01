import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { translations, t } from "@/lib/translations";

import cupGold from "@/assets/cup-gold.png";
import medalGold from "@/assets/medal-gold.png";
import medalSilver from "@/assets/medal-silver.png";
import medalBronze from "@/assets/medal-bronze.png";

const DISPLAY_ORDER = [3, 1, 0, 2, 4];
const PILLAR_HEIGHTS = { 0: 480, 1: 384, 2: 384, 3: 288, 4: 288 };
const MEDAL_IMAGES = [medalGold, medalSilver, medalBronze];
const MEDAL_SIZES = { 0: 64, 1: 52, 2: 52 };

const SLAB_BG = `linear-gradient(180deg, #141414 0%, #0f0f0f 100%), repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 4px)`;
const SLAB_SHADOW = "inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -1px 0 rgba(0,0,0,0.6)";

/* ─── Cup with parallax ─── */
function GoldCup() {
  const [transform, setTransform] = useState("perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)");
  const [canHover, setCanHover] = useState(false);
  const rafRef = useRef(false);

  useEffect(() => {
    setCanHover(window.matchMedia("(hover:hover)").matches);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!canHover || rafRef.current) return;
      rafRef.current = true;
      requestAnimationFrame(() => {
        const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        const cx = (e.clientX - rect.left) / rect.width - 0.5;
        const cy = (e.clientY - rect.top) / rect.height - 0.5;
        const rotX = (cy * -8).toFixed(2);  // max ±4
        const rotY = (cx * 12).toFixed(2);  // max ±6
        const tY = (cy * -6).toFixed(2);    // max -3
        setTransform(`perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(${tY}px)`);
        rafRef.current = false;
      });
    },
    [canHover]
  );

  const handleMouseLeave = useCallback(() => {
    setTransform("perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)");
  }, []);

  return (
    <div
      className="flex justify-center mb-12 md:mb-16"
      onMouseMove={canHover ? handleMouseMove : undefined}
      onMouseLeave={canHover ? handleMouseLeave : undefined}
    >
      <div
        className="relative"
        style={{
          transform,
          transition: "transform 200ms ease-out",
          willChange: "transform",
        }}
      >
        <img
          src={cupGold}
          alt="Gold trophy"
          className="max-w-[180px] md:max-w-[280px] h-auto select-none"
          draggable={false}
        />
        {/* Base shadow */}
        <div
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-6"
          style={{
            background: "radial-gradient(ellipse at center, rgba(0,0,0,0.45) 0%, transparent 70%)",
          }}
        />
        {/* Reflection band */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ borderRadius: 2 }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.06) 50%, transparent 70%)",
              transform: "translateX(-100%)",
              transition: "transform 600ms ease-out",
            }}
          />
        </div>
      </div>
    </div>
  );
}

/* ─── Medal with embedded depth ─── */
function MedalImage({ tierIndex }: { tierIndex: number }) {
  const size = MEDAL_SIZES[tierIndex as keyof typeof MEDAL_SIZES] ?? 52;
  const src = MEDAL_IMAGES[tierIndex];
  if (!src) return null;

  return (
    <div className="relative flex flex-col items-center mb-4">
      {/* Medal */}
      <div
        className="relative group/medal"
        style={{ width: size, height: size }}
      >
        <img
          src={src}
          alt={`Rank ${tierIndex + 1} medal`}
          className="w-full h-full object-contain select-none"
          style={{
            boxShadow: "0 6px 12px rgba(0,0,0,0.6)",
            borderRadius: "50%",
          }}
          draggable={false}
        />
        {/* Light sweep overlay — desktop only via CSS media query */}
        <div
          className="absolute inset-0 overflow-hidden rounded-full pointer-events-none opacity-0 group-hover/medal:opacity-100"
          style={{ transition: "opacity 150ms ease-out" }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.25) 50%, transparent 70%)",
              animation: "medal-light-sweep 500ms ease-out forwards",
            }}
          />
        </div>
      </div>
      {/* Embedded shadow beneath medal */}
      <div
        className="mt-1"
        style={{
          width: size * 0.8,
          height: 8,
          background: "radial-gradient(ellipse at center, rgba(0,0,0,0.4) 0%, transparent 60%)",
        }}
      />
    </div>
  );
}

/* ─── Slab content (shared desktop/mobile) ─── */
function SlabContent({
  tierIndex,
  locale,
  isActive,
  onClick,
}: {
  tierIndex: number;
  locale: "en" | "ru";
  isActive: boolean;
  onClick: () => void;
}) {
  const tier = translations.allocation.tiers[tierIndex] as any;
  const isRank1 = tierIndex === 0;
  const isTier5 = tierIndex === 4;

  return (
    <div
      className="flex flex-col items-center justify-start pt-8 pb-6 px-4 h-full cursor-pointer"
      style={{
        background: SLAB_BG,
        borderRadius: 2,
        borderTop: "1px solid #505050",
        boxShadow: SLAB_SHADOW,
        border: isRank1
          ? "none"
          : `1px solid ${isTier5 ? "#2a2a2a" : isActive ? "#505050" : "#404040"}`,
        borderTopColor: "#505050",
      }}
      onClick={onClick}
    >
      {tierIndex < 3 ? (
        <MedalImage tierIndex={tierIndex} />
      ) : (
        <div className="mb-4">
          <span className="text-2xl font-black" style={{ color: "#606060" }}>
            {String(tierIndex + 1).padStart(2, "0")}
          </span>
        </div>
      )}

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

      {t(tier.sublabel, locale) && (
        <span
          className="mt-2 text-center uppercase"
          style={{ fontSize: 10, letterSpacing: "0.12em", color: "#606060" }}
        >
          {t(tier.sublabel, locale)}
        </span>
      )}

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

      <p
        className="mt-3 text-center leading-snug"
        style={{ fontSize: 11, color: "#707070", maxWidth: 180 }}
      >
        {t(tier.descriptor, locale)}
      </p>

      {isTier5 && (
        <div className="mt-auto w-3/4 mx-auto" style={{ borderTop: "1px solid #2a2a2a" }} />
      )}
    </div>
  );
}

/* ─── Detail panel ─── */
function DetailPanel({
  tierIndex,
  locale,
  className,
}: {
  tierIndex: number;
  locale: "en" | "ru";
  className?: string;
}) {
  const tier = translations.allocation.tiers[tierIndex] as any;

  return (
    <motion.div
      key={`detail-${tierIndex}`}
      className={className}
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3, ease: "linear" }}
      style={{ background: "#0A0A0A", borderTop: "1px solid #1a1a1a", overflow: "hidden" }}
    >
      <div className="px-6 py-5 md:py-8">
        <div className="flex flex-wrap gap-x-16 gap-y-4">
          {(tier.detail.lines as any[]).map((line: any, li: number) => (
            <div key={li}>
              <span
                className="text-[10px] uppercase tracking-[0.15em] block"
                style={{ color: "#505050" }}
              >
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
  );
}

/* ─── Main Section ─── */
const AllocationSection = () => {
  const locale = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [selectedTier, setSelectedTier] = useState<number | null>(null);
  const [hoveredTier, setHoveredTier] = useState<number | null>(null);
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    setCanHover(window.matchMedia("(hover:hover)").matches);
  }, []);

  const { kicker, title, subtitle, tiers, disclaimer } = translations.allocation;

  const handleClick = (i: number) => setSelectedTier((p) => (p === i ? null : i));
  const disclaimerText = t(disclaimer, locale)?.trim();

  /* ─── Desktop pillar ─── */
  const renderPillar = (tierIndex: number, displayIndex: number) => {
    const isRank1 = tierIndex === 0;
    const height = PILLAR_HEIGHTS[tierIndex as keyof typeof PILLAR_HEIGHTS];
    const isHovered = hoveredTier === tierIndex;
    const someoneHovered = hoveredTier !== null;

    const hoverStyle = canHover
      ? {
          transform: isHovered
            ? "perspective(900px) rotateX(2deg) rotateY(4deg) translateY(-4px) translate3d(0,0,0)"
            : "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px) translate3d(0,0,0)",
          opacity: someoneHovered && !isHovered ? 0.85 : 1,
          transition: "transform 0.25s ease-out, opacity 0.25s linear",
          willChange: "transform" as const,
        }
      : {};

    const pillar = (
      <SlabContent
        tierIndex={tierIndex}
        locale={locale}
        isActive={selectedTier === tierIndex}
        onClick={() => handleClick(tierIndex)}
      />
    );

    const wrapper = isRank1 ? (
      <div
        style={{
          background: "linear-gradient(135deg, #00E0C6, #0047AB)",
          borderRadius: 2,
          padding: 1,
          height: "100%",
        }}
      >
        {pillar}
      </div>
    ) : (
      pillar
    );

    return (
      <motion.div
        key={tierIndex}
        className="hidden md:block"
        style={{
          flex: isRank1 ? "0 0 18%" : "0 0 14%",
          height,
          ...hoverStyle,
        }}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: someoneHovered && !isHovered ? 0.85 : 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.15 * displayIndex, ease: "linear" }}
        onMouseEnter={canHover ? () => setHoveredTier(tierIndex) : undefined}
        onMouseLeave={canHover ? () => setHoveredTier(null) : undefined}
      >
        {wrapper}
      </motion.div>
    );
  };

  /* ─── Mobile pillar ─── */
  const renderMobilePillar = (tierIndex: number) => {
    const isRank1 = tierIndex === 0;

    const inner = (
      <SlabContent
        tierIndex={tierIndex}
        locale={locale}
        isActive={selectedTier === tierIndex}
        onClick={() => handleClick(tierIndex)}
      />
    );

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
        <AnimatePresence>
          {selectedTier === tierIndex && (
            <DetailPanel tierIndex={tierIndex} locale={locale} />
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <section ref={ref} className="bg-black bg-grid-overlay py-24 md:py-32 lg:py-40">
      {/* Cup */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "linear" }}
      >
        <GoldCup />
      </motion.div>

      {/* Header */}
      <div className="content-max text-center mb-16">
        <motion.div
          className="text-xs tracking-[0.1em] uppercase"
          style={{ color: "#606060" }}
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1, ease: "linear" }}
        >
          {t(kicker, locale)}
        </motion.div>
        <motion.h2
          className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide"
          style={{ color: "#ffffff" }}
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.18, ease: "linear" }}
        >
          {t(title, locale)}
        </motion.h2>
        <motion.p
          className="mt-4 text-base md:text-lg mx-auto"
          style={{ color: "#808080", maxWidth: 720 }}
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.26, ease: "linear" }}
        >
          {t(subtitle, locale)}
        </motion.p>
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
      <AnimatePresence>
        {selectedTier !== null && (
          <DetailPanel
            tierIndex={selectedTier}
            locale={locale}
            className="hidden md:block content-max"
          />
        )}
      </AnimatePresence>

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
