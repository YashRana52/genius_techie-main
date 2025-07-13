// import React from 'react'
// import Project from './Project';

// import ClientSay from './ClientSay';

// import FrequentAskQuestion from './FrequentAskQuestion';
// function PortfolioHome() {
//     const handleContactClick = () => {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//     };
//     return (

//         <div className="w-full flex flex-col items-center ">

//             {/* Web Projects Section */}
//             <section className="w-full min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-12">
//                 <button className="border border-blue-400 text-blue-500 px-6 py-2 rounded-full mb-6 hover:bg-blue-500 hover:text-white transition">
//                     Portfolio
//                 </button>
        
//                 {/* Project ko left se right move krane k liye Props passkrna yha pe */}
//                 <Project direction="left" />
//             </section>








//         </div>




//     )
// }

// export default PortfolioHome

// import React, { useRef } from "react";
// import Project from "./Project";
// import { motion, useInView } from "framer-motion";

// function PortfolioHome() {
//   const sectionRef = useRef();
//   const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

//   return (
//     <div className="w-full flex flex-col items-center bg-[#0d1117] text-white py-20 px-4">
//       {/* Animated Portfolio Section */}
//       <section
//         ref={sectionRef}
//         className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center text-center gap-10 overflow-hidden"
//       >
//         {/* Animated Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="relative"
//         >
//           <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight relative z-10">
//             <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//               Portfolio
//             </span>
//           </h2>
//           <div className="mt-3 w-20 h-[2px] bg-blue-400 mx-auto rounded-full" />
//           <p className="mt-4 text-gray-400 text-base max-w-md mx-auto">
//             Take a look at some of our recent projects.
//           </p>
//         </motion.div>

//         {/* Animated Project Section */}
//         <motion.div
//           initial={{ opacity: 0, x: -60 }}
//           animate={isInView ? { opacity: 1, x: 0 } : {}}
//           transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
//           className="w-full"
//         >
//           <Project direction="left" />
//         </motion.div>
//       </section>
//     </div>
//   );
// }

// export default PortfolioHome;
import React, { useRef } from "react";
import Project from "./Project";
import { motion, useInView } from "framer-motion";

function PortfolioHome() {
  const sectionRef = useRef();
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  return (
    <div className="w-full flex flex-col items-center bg-[#0d1117] text-white py-20">
      {/* Animated Portfolio Section */}
      <section
        ref={sectionRef}
        className="w-full flex flex-col items-center justify-center text-center gap-10 overflow-hidden"
      >
        {/* Animated Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight relative z-10">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <div className="mt-3 w-20 h-[2px] bg-blue-400 mx-auto rounded-full" />
          <p className="mt-4 text-gray-400 text-base max-w-md mx-auto">
            Take a look at some of our recent projects.
          </p>
        </motion.div>

        {/* Animated Project Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          className="w-full"
        >
          <Project direction="left" />
        </motion.div>
      </section>
    </div>
  );
}

export default PortfolioHome;
