import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const PhilosophySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="content-max text-center">
        <motion.h2
          className="heading-lg text-foreground mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          TALENT SHOULD BE
          <br />
          <span className="gradient-text">REWARDED. PERIOD.</span>
        </motion.h2>

        <motion.p
          className="body-text max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We built EVERLEGENDS because the world's most talented athletes
          shouldn't need the right connections, the right zip code, or the right
          algorithm to be seen. Merit is the only filter.
        </motion.p>
      </div>
    </section>
  );
};

export default PhilosophySection;
