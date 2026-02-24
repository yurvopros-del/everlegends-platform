import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const specs = [
  { label: "Verification", value: "Blockchain-backed performance records" },
  { label: "Rankings", value: "Real-time global leaderboards" },
  { label: "Rewards", value: "Merit-based token distribution" },
  { label: "Challenges", value: "Weekly & seasonal competitions" },
  { label: "Eligibility", value: "Open to all athletes worldwide" },
  { label: "Integrity", value: "AI-powered anti-fraud detection" },
];

const RewardsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="rewards" className="section-padding bg-surface" ref={ref}>
      <div className="content-max">
        <motion.p
          className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          Technical Specifications
        </motion.p>
        <motion.h2
          className="heading-lg text-foreground mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          THE REWARD SYSTEM
        </motion.h2>

        <div className="space-y-0">
          {specs.map((spec, i) => (
            <motion.div
              key={spec.label}
              className="gradient-border flex flex-col md:flex-row md:items-center justify-between py-6 gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
            >
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
                {spec.label}
              </span>
              <span className="text-sm md:text-base font-light text-foreground">
                {spec.value}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RewardsSection;
