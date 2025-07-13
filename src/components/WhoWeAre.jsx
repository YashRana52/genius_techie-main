// import React from "react";
// import { assets } from "@/assets/assets";
// import { useNavigate } from "react-router-dom";

// function WhoWeAre() {
//   const navigate = useNavigate();

//   const smoothNavigate = (path) => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     setTimeout(() => {
//       navigate(path);
//     }, 300);
//   };

//   return (
//     <section className="w-full bg-gray-50 py-12 px-6 md:px-16  bg-blue-50">
//       <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
//         {/* Text Content */}
//         <div className="text-center lg:text-left space-y-6 max-w-xl">
//           {/* <button className="px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition duration-300">
//                         Know About Us
//                     </button> */}
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
//             <span className="text-purple-500">GeniusTechie </span>-{" "}
//             <span className="text-pink-500"> Your Reliable Tech Partner</span>
//           </h2>
 
//           <p className="font-poppins text-gray-700 text-base md:text-lg leading-relaxed font-medium">
//            At GeniusTechie, we’re more than just developers — we’re problem-solvers, creators, and long-term partners. Our team specializes in crafting cross-platform mobile apps, modern websites, and smart AI-driven solutions tailored for startups, entrepreneurs, and businesses of all sizes.

// With a lean, agile approach and hands-on execution, we deliver real, usable products that solve real-world challenges. Our mission is simple:
// to empower growing businesses with scalable technology — without the overhead of big agencies.

// Whether you're launching your first MVP or improving an existing product, we’re here to turn your ideas into powerful, future-ready solutions.{" "}
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
//             src={assets.about}
//             alt="Software Development"
//             className="rounded-xl shadow-xl w-full object-cover animate-float"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default WhoWeAre;

import React from "react";
import { assets } from "@/assets/assets";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function WhoWeAre() {
  const navigate = useNavigate();

  const smoothNavigate = (path) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      navigate(path);
    }, 300);
  };

  return (
    <section className="w-full bg-[#0d1117] py-20 px-6 md:px-16 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center lg:text-left space-y-6 max-w-xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug tracking-tight">
            <span className="text-purple-400">GeniusTechie</span> -{" "}
            <span className="text-pink-500">Your Reliable Tech Partner</span>
          </h2>

          <p className="text-gray-300 text-base md:text-lg font-medium leading-relaxed">
            At GeniusTechie, we’re more than just developers — we’re problem-solvers, creators,
            and long-term partners. Our team specializes in crafting cross-platform mobile apps,
            modern websites, and smart AI-driven solutions tailored for startups, entrepreneurs,
            and businesses of all sizes.
            <br /><br />
            With a lean, agile approach and hands-on execution, we deliver real, usable products
            that solve real-world challenges. Our mission is simple: to empower growing businesses
            with scalable technology — without the overhead of big agencies.
            <br /><br />
            Whether you're launching your first MVP or improving an existing product, we’re here
            to turn your ideas into powerful, future-ready solutions.
          </p>

          <div className="pt-4 space-x-4">
            <button
              onClick={() => smoothNavigate("/contact")}
              className="bg-transparent border border-pink-500 text-pink-400 px-5 py-2 rounded-full hover:bg-pink-600 hover:text-white transition duration-300"
            >
              Contact Us
            </button>
            <button
              onClick={() => smoothNavigate("/services")}
              className="bg-gradient-to-r from-purple-500 to-blue-500 px-5 py-2 text-white rounded-full hover:from-blue-600 hover:to-purple-600 transition duration-300"
            >
              Our Services
            </button>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full max-w-sm"
        >
          <div className="relative w-full">
            <img
              src={assets.about}
              alt="Software Development"
              className="rounded-2xl shadow-xl border border-purple-500/30 object-cover animate-float w-full"
            />
            <div className="absolute inset-0 rounded-2xl border-2 border-pink-500/10 animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default WhoWeAre;
