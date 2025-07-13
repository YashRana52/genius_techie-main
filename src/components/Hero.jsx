import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import GLOBE from "vanta/dist/vanta.globe.min";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Hero() {
  // Vanta 3-D Animation use kiya yhape
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          // color: 0xff3f81,
          // backgroundColor: 0x0a0a0a,
          color: 0x6366f1,           // Neon Indigo (adjust for vibrancy)
  color2: 0x9333ea,          // Secondary hue (Purple)
  backgroundColor: 0x0d1117, // Matches your site background
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  const handleStrategyCall = () => {
    navigate("/contact");
  };

  return (
    <section
      ref={vantaRef}
      className="relative bg-[#0d1117] h-screen flex items-center justify-center text-center text-white overflow-hidden px-4 sm:px-6"
    >
      {/* Content */}
      <div className="relative z-10 max-w-3xl w-full">
          <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="inline-block px-6 py-2 rounded-full mb-6 text-xs sm:text-sm font-semibold 
        text-blue-400 border border-blue-500 bg-blue-500/10 backdrop-blur-sm 
        shadow-md shadow-blue-500/20 animate-pulse"
    >
      <span className="tracking-widest uppercase">IT Services</span>
    </motion.div>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold font-raleway leading-snug sm:leading-tight">
          Transforming Ideas into{" "}
          <span className="text-purple-400">Digital</span> Reality
        </h1>
        <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed sm:leading-loose">
          We helps startups and businesses build reliable cross-platform mobile
          apps and websites with smart features and AI integrations — delivered
          on time, transparently, and without agency overhead. Let's shape the
          future together with innovation and technology.
        </p>

        <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleStrategyCall}
      className="mt-8 px-6 py-3 text-sm sm:text-base font-medium rounded-full
        bg-gradient-to-tr from-blue-500 via-purple-600 to-pink-500
        hover:from-transparent hover:to-transparent hover:bg-transparent
        border border-pink-500 text-white hover:text-pink-400 
        transition-all duration-300 shadow-md shadow-pink-500/30"
    >
      Book Free Strategy Call
    </motion.button>
      </div>
    </section>
  );
}

export default Hero;
