// import React from "react";
// import { assets } from "@/assets/assets";
// import { useNavigate } from "react-router-dom";

// function KnowAboutUs() {
//   const navigate = useNavigate();

//   const smoothNavigate = (path) => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     setTimeout(() => {
//       navigate(path);
//     }, 300);
//   };

//   return (
//     <section className="w-full bg-[#0d1117] py-12 px-6 md:px-16  ">
//       <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
//         {/* Text Content */}
//         <div className="text-center lg:text-left space-y-6 max-w-xl">
//           {/* <button className="px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition duration-300">
//                         Know About Us
//                     </button> */}
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
//             <span className="text-purple-500">Simple Solutions</span>,{" "}
//             <span className="text-pink-500"> Real Impact</span>
//           </h2>

//           <p className="font-poppins text-gray-700 text-base md:text-lg leading-relaxed font-medium">
//             We turn your ideas into powerful digital products, from
//             intuitive mobile apps to smart web platforms. At GeniusTechie,
//             our freelance team builds solutions that drive growth, boost
//             efficiency, and bring your vision to life with clarity and care.{" "}
//           </p>
//           <div>
//             <button
//               onClick={() => smoothNavigate("/contact")}
//               className="border border-orange-500 text-orange-500 px-4 py-2 rounded-full mb-4 hover:bg-orange-500 hover:text-white transition"
//             >
//               Contact Us
//             </button>
//             <button
//               onClick={() => smoothNavigate("/services")}
//               className="border border-blue-500 text-white bg-blue-500 px-4 py-2 rounded-full mb-4 hover:bg-transparent hover:text-blue-500 transition ml-3"
//             >
//               Our Services
//             </button>
//           </div>
//         </div>

//         {/* Image */}
//         <div className="relative w-full max-w-xs mx-auto lg:mx-0">
//           <img
//             src={assets.mobile_application}
//             alt="Software Development"
//             className="rounded-xl shadow-xl w-full object-cover animate-float"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default KnowAboutUs;

import React, { useRef } from "react";
import { assets } from "@/assets/assets";
import { useNavigate } from "react-router-dom";
import { motion, useInView, AnimatePresence } from "framer-motion";

function KnowAboutUs() {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.3 });

  const smoothNavigate = (path) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      navigate(path);
    }, 300);
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -100,
      transition: { duration: 0.6, ease: "easeIn" },
    },
  };

  return (
    <section
      ref={ref}
      className="w-full bg-[#0d1117] py-20 px-6 md:px-20 min-h-[80vh] relative overflow-hidden"
    >
      <AnimatePresence>
        {isInView && (
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-16"
          >
            {/* Text Content */}
            <motion.div
              className="text-center lg:text-left space-y-8 max-w-2xl"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold leading-snug text-white">
                <span className="text-purple-500 drop-shadow-md">
                  Simple Solutions
                </span>
                ,{" "}
                <span className="text-pink-500 drop-shadow-md">
                  Real Impact
                </span>
              </h2>

              <p className="font-poppins text-gray-400 text-base md:text-lg leading-relaxed font-medium">
                We turn your ideas into powerful digital products, from
                intuitive mobile apps to smart web platforms. At GeniusTechie,
                our freelance team builds solutions that drive growth, boost
                efficiency, and bring your vision to life with clarity and care.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => smoothNavigate("/contact")}
                  className="border border-orange-500 text-orange-500 px-6 py-2 rounded-full transition-all duration-300 hover:bg-orange-500 hover:text-white shadow hover:shadow-orange-500/50"
                >
                  Contact Us
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => smoothNavigate("/services")}
                  className="border border-blue-500 text-white bg-blue-500 px-6 py-2 rounded-full transition-all duration-300 hover:bg-transparent hover:text-blue-500 shadow hover:shadow-blue-500/50"
                >
                  Our Services
                </motion.button>
              </div>
            </motion.div>

            {/* Image Section */}
            <motion.div
              className="relative w-full max-w-sm"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img
                src={assets.mobile_application}
                alt="Software Development"
                className="rounded-3xl shadow-2xl w-full object-cover"
              />
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400 blur opacity-20 z-[-1]"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default KnowAboutUs;
