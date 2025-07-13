// import React from 'react'
// import { assets } from '@/assets/assets';
// import StrengthCard from './StrengthCard'

// function Strength() {
//   return (
// <section className="w-full px-6 md:px-16 py-12 space-y-10">
//   <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

//     {/* Left Column: Card Stack */}
//     <div className="flex flex-col gap-8 items-st">
//       <StrengthCard
//         icon={assets.target}
//         title="Product-Centric Approach"
//         description="We focus on building real, usable products — not just mockups. Every feature is crafted with purpose to solve a real user problem and drive results."
//       />
//       <StrengthCard
//         icon={assets.programmer}
//         title="Built by Developers, Not Middlemen"
//         description="You work directly with the core developers, and our expert team — for faster execution, fewer delays, and better quality control."
//       />
//     </div>

//     {/* Right Column: Image 1 */}
//     <div className="flex justify-center items-center">
//       <img 
//         src={assets.tech_workspace}
//         alt="Professional Team"
//         className="rounded-xl w-full max-w-[550px] max-h-[420px] object-cover"
//       />
//     </div>

//     {/* Left Column: Image 2 */}
//     <div className="flex justify-center items-center">
//       <img
//         src={assets.cybersecurity_collaboration}
//         alt="Secure Collaboration"
//         className="rounded-xl w-full max-w-[550px] max-h-[420px] object-cover"
//       />
//     </div>

//     {/* Right Column: Card Stack */}
//     <div className="flex flex-col gap-8 items-start">
//       <StrengthCard
//         icon={assets.devices}
//         title="Cross-Platform, Future-Ready"
//         description="We build Flutter apps and modern web platforms that work seamlessly across devices, making your tech investment efficient and scalable."
//       />
//       <StrengthCard
//         icon={assets.brain}
//         title="Startup-Minded, Always Agile"
//         description="We're lean, fast, and flexible — just like the startups we work with. Quick pivots, rapid iterations, and clear communication at every step."
//       />
//     </div>
//   </div>
// </section>

//   )
// }

// export default Strength;

import React from "react";
import { assets } from "@/assets/assets";
import StrengthCard from "./StrengthCard";
import { motion } from "framer-motion";

function Strength() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full bg-[#0d1117] text-white px-6 md:px-16 py-16 overflow-hidden">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto"
      >
        {/* Left Card Stack */}
        <motion.div variants={itemVariants} className="flex flex-col gap-8">
          <StrengthCard
            icon={assets.target}
            direction="left"

            title="Product-Centric Approach"
            description="We focus on building real, usable products — not just mockups. Every feature is crafted with purpose to solve a real user problem and drive results."
          />
          <StrengthCard
            icon={assets.programmer}
            direction="left"
            title="Built by Developers, Not Middlemen"
            description="You work directly with the core developers, and our expert team — for faster execution, fewer delays, and better quality control."
          />
        </motion.div>

        {/* Right Image 1 */}
        <motion.div variants={itemVariants} className="flex justify-center">
          <img
            src={assets.tech_workspace}
            alt="Professional Team"
            className="rounded-xl w-full max-w-[550px] max-h-[370px] object-cover shadow-lg"
          />
        </motion.div>

        {/* Left Image 2 */}
        <motion.div variants={itemVariants} className="flex justify-center">
          <img
            src={assets.cybersecurity_collaboration}
            alt="Secure Collaboration"
            className="rounded-xl w-full max-w-[550px] max-h-[370px] object-cover shadow-lg"
          />
        </motion.div>

        {/* Right Card Stack */}
        <motion.div variants={itemVariants} className="flex flex-col gap-8">
          <StrengthCard
            icon={assets.devices}
            direction="right"
            title="Cross-Platform, Future-Ready"
            description="We build Flutter apps and modern web platforms that work seamlessly across devices, making your tech investment efficient and scalable."
          />
          <StrengthCard
            icon={assets.brain}
            direction="right"
            title="Startup-Minded, Always Agile"
            description="We're lean, fast, and flexible — just like the startups we work with. Quick pivots, rapid iterations, and clear communication at every step."
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Strength;
