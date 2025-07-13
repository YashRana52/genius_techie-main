// import React from 'react';
// import { assets } from '@/assets/assets';
// import Choose from './Choose';
// import { motion } from 'framer-motion';

// function WhyChoose() {
//     return (
//         <section className="py-16 px-4 md:px-8 bg-gray-50">
//             <div className="max-w-7xl mx-auto text-center mb-12">
//                 <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Why Choose Us</h2>
//                 <p className="text-gray-600 max-w-xl mx-auto">
//                     Discover what sets us apart in delivering outstanding digital solutions.
//                 </p>
//             </div> 

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                 <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
//                     <Choose
//                         icon={assets.icon5}
//                         title="Innovative Designs"
//                         description="Transforming ideas into visually stunning and purposeful designs that engage, inspire, and leave a lasting impression"
//                         hoverClass="hover:bg-gradient-to-br hover:from-orange-500 hover:to-yellow-600"
//                         iconBg="bg-orange-400"
//                     />
//                 </motion.div>

//                 <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
//                     <Choose
//                         icon={assets.icon3}
//                         title="Expert Team"
//                         description="Our team of seasoned experts brings a wealth of experience, technical mastery, and innovative thinking to every project we undertake."
//                         hoverClass="hover:bg-gradient-to-br hover:from-green-500 hover:to-lime-600"
//                         iconBg="bg-green-400"
//                     />
//                 </motion.div>

//                 <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
//                     <Choose
//                         icon={assets.icon4}
//                         title="Timely Delivery"
//                         description="Our commitment to punctuality guarantees that your projects are completed efficiently and delivered right when you need them."
//                         hoverClass="hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-400"
//                         iconBg="bg-purple-400"
//                     />
//                 </motion.div>

//                 <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
//                     <Choose
//                         icon={assets.icon1}
//                         title="24x7 Support"
//                         description="Our dedicated support team is available 24x7 to promptly assist you, ensuring seamless operation and peace of mind at every step."
//                         hoverClass="hover:bg-gradient-to-br hover:from-indigo-500 hover:to-violet-400"
//                         iconBg="bg-indigo-400"
//                     />
//                 </motion.div>
//             </div>
//         </section>
//     );
// }

// export default WhyChoose;


import React, { useRef } from "react";
import { assets } from "@/assets/assets";
import Choose from "./Choose";
import { motion, useInView, AnimatePresence } from "framer-motion";

function WhyChoose() {
  const ref = useRef();
  const isInView = useInView(ref, { once: false, threshold: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
    exit: {
      opacity: 0,
      y: -60,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -40,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section
      ref={ref}
      className="py-20 px-4 md:px-8 bg-[#0d1117] text-white overflow-hidden min-h-[80vh]"
    >
      <AnimatePresence>
        {isInView && (
          <motion.div
            key="whychoose-section"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Heading */}
            <motion.div
              className="max-w-7xl mx-auto text-center mb-12"
              variants={cardVariants}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">
                Why Choose Us
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Discover what sets us apart in delivering outstanding digital
                solutions.
              </p>
            </motion.div>

            {/* Cards */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div variants={cardVariants}>
                <Choose
                  icon={assets.icon5}
                  title="Innovative Designs"
                  description="Transforming ideas into visually stunning and purposeful designs that engage, inspire, and leave a lasting impression"
                  hoverClass="hover:bg-gradient-to-br hover:from-orange-500 hover:to-yellow-600"
                  iconBg="bg-orange-400"
                />
              </motion.div>

              <motion.div variants={cardVariants}>
                <Choose
                  icon={assets.icon3}
                  title="Expert Team"
                  description="Our team of seasoned experts brings a wealth of experience, technical mastery, and innovative thinking to every project we undertake."
                  hoverClass="hover:bg-gradient-to-br hover:from-green-500 hover:to-lime-600"
                  iconBg="bg-green-400"
                />
              </motion.div>

              <motion.div variants={cardVariants}>
                <Choose
                  icon={assets.icon4}
                  title="Timely Delivery"
                  description="Our commitment to punctuality guarantees that your projects are completed efficiently and delivered right when you need them."
                  hoverClass="hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-400"
                  iconBg="bg-purple-400"
                />
              </motion.div>

              <motion.div variants={cardVariants}>
                <Choose
                  icon={assets.icon1}
                  title="24x7 Support"
                  description="Our dedicated support team is available 24x7 to promptly assist you, ensuring seamless operation and peace of mind at every step."
                  hoverClass="hover:bg-gradient-to-br hover:from-indigo-500 hover:to-violet-400"
                  iconBg="bg-indigo-400"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default WhyChoose;
