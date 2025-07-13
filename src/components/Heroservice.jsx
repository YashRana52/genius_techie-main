// import { assets } from "@/assets/assets";
// import React from "react";
// import { Link } from "react-router-dom";

// function Heroservice() {
//   return (
//     <section className="relative w-full h-[50vh] sm:h-[60vh] flex items-center justify-center text-center overflow-hidden">
//       {/* Background Image */}
//       <img
//         src={assets.service1}
//         alt="About Banner"
//         className="absolute inset-0 w-full h-full object-cover"
//       />

//       <div className="absolute inset-0 bg-gradient-to-b from-pink-500/30 via-purple-500/20 to-transparent animate-slideDown"></div>

//       <div className="absolute inset-0 bg-black/40"></div>

//       <div className="relative z-10 text-white px-4 animate-slideDown">
//         <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4">
//           Service
//         </h1>
//         <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 text-base sm:text-lg md:text-xl">
//           <Link to="/" className="hover:underline text-gray-200">
//             Home
//           </Link>
//           <span className="hidden sm:block text-white text-xl sm:text-2xl">
//             ›
//           </span>
//           <span>Service</span>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Heroservice;

import { assets } from "@/assets/assets";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Heroservice() {
  return (
    <section className="relative w-full h-[65vh] sm:h-[75vh] flex items-center justify-center text-center overflow-hidden pt-[60px] sm:pt-[70px]">
      {/* Background Image */}
      <img
        src={assets.service1}
        alt="Service Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Glass Gradient Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117]/30 via-black/30 to-black/30 backdrop-blur-md"></div> */}

      {/* Extra color tint */}
      <div className="absolute inset-0 bg-pink-500/10 mix-blend-overlay"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-white px-4"
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 drop-shadow-lg">
          Services
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm sm:text-lg text-gray-300">
          <Link to="/" className="hover:underline hover:text-pink-400 transition">
            Home
          </Link>
          <span className="hidden sm:block text-white text-xl">›</span>
          <span className="font-medium text-white">Services</span>
        </div>
      </motion.div>
    </section>
  );
}

export default Heroservice;
