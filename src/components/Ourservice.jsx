// import React from "react";
// import ServiceCards from "./ServiceCards";
// import { useNavigate } from "react-router-dom";

// function Ourservice() {
//   return (
//     <div>
//       <section className="w-full min-h-[60vh] flex flex-col items-center justify-center text-center bg-gradient-to-tr from-blue-50 to-blue-100 px-4 py-12">
//         <button className="border border-blue-400 text-blue-500 px-6 py-2 rounded-full mb-6 hover:bg-blue-500 hover:text-white transition">
//           Our Services
//         </button>

//         <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight tracking-tight mb-6">
//           Smart Digital Solutions Built for Growth
//         </h1>

//         <p className="max-w-2xl text-gray-600 text-base md:text-lg leading-relaxed">
//           From modern mobile apps to intelligent web platforms, we provide
//           tailored development services designed to meet your business goals.
//           Our team combines cross-platform expertise, clean UI/UX, and AI-driven
//           innovation to build scalable products that work — fast, reliable, and
//           future-ready.{" "}
//         </p>
//       </section>
//       <ServiceCards />
//     </div>
//   );
// }

// export default Ourservice;

import React from "react";
import ServiceCards from "./ServiceCards";
import { motion } from "framer-motion";

function Ourservice() {
  return (
    <div>
      {/* Hero Section */}
      <section className="w-full min-h-[65vh] flex flex-col items-center justify-center text-center bg-[#0d1117] text-white px-4 py-16 relative overflow-hidden">

        {/* Glowing gradient blobs */}
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-pink-500 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-[-120px] right-[-100px] w-[300px] h-[300px] bg-purple-600 rounded-full blur-2xl opacity-30 animate-pulse" />

        {/* Animated Button */}
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="border border-blue-500 text-blue-400 px-6 py-2 rounded-full mb-6 hover:bg-blue-500/10 backdrop-blur-md hover:text-white transition duration-300"
        >
          Our Services
        </motion.button>

        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6 drop-shadow"
        >
          Smart Digital Solutions Built for Growth
        </motion.h1>

        {/* Animated Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-2xl text-gray-400 text-base sm:text-lg leading-relaxed"
        >
          From modern mobile apps to intelligent web platforms, we provide tailored development services
          designed to meet your business goals. Our team combines cross-platform expertise, clean UI/UX,
          and AI-driven innovation to build scalable products that work — fast, reliable, and future-ready.
        </motion.p>
      </section>

      {/* Service Cards Section */}
      <ServiceCards />
    </div>
  );
}

export default Ourservice;
