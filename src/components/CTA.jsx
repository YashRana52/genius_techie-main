import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function CTASection() {
  const ref = useRef();
  const isInView = useInView(ref, { once: false, threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="w-full min-h-[60vh] flex flex-col items-center justify-center text-center bg-[#0d1117] px-4 py-16 overflow-hidden"
    >
      {isInView && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Tag Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="border border-blue-500 text-blue-400 px-6 py-2 rounded-full mb-6 hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            Our Services
          </motion.button>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight mb-6"
          >
            Shaping Ideas into{" "}
            <span className="text-blue-400">Smart, Scalable</span> Solutions
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="max-w-2xl text-gray-400 text-base md:text-lg leading-relaxed mx-auto"
          >
            Making complex tech simple — empowering businesses to move faster,
            work smarter, and dream bigger.
          </motion.p>
        </motion.div>
      )}
    </section>
  );
}

export default CTASection;
