import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "COMPETE",
    description: "Enter real athletic challenges designed to measure true ability.",
  },
  {
    number: "02",
    title: "PROVE",
    description: "Your performance is verified, recorded, and ranked transparently.",
  },
  {
    number: "03",
    title: "RISE",
    description: "Earn rewards and recognition based on merit alone.",
  },
];

const SystemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="system" className="section-padding" ref={ref}>
      <div className="content-max">
        <motion.p
          className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-4 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          How It Works
        </motion.p>
        <motion.h2
          className="heading-lg text-foreground mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          THE SYSTEM
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className={`py-8 md:py-0 md:px-10 ${
                i < steps.length - 1 ? "border-b md:border-b-0 md:border-r border-border" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
            >
              <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground mb-4 block">
                {step.number}
              </span>
              <h3 className="heading-md gradient-text mb-4">{step.title}</h3>
              <p className="body-text text-sm md:text-base">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemSection;
