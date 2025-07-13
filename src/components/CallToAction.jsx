// // File: components/CallToAction.jsx

// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// const CallToAction = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
//       {/* Hoverable stacked cards */}
//       <motion.div
//         className="relative max-w-6xl mx-auto cursor-pointer group"
//         whileHover="hover"
//         initial="rest"
//         animate="rest"
//       >
//         {/* Back Card */}
//         <motion.div
//           variants={{
//             rest: { rotate: 0, y: 8, scale: 1 },
//             hover: { rotate: 4, y: 16, scale: 1.02 },
//           }}
//           transition={{ duration: 0.3 }}
//           className="absolute top-0 left-0 w-full h-full bg-orange-200 rounded-3xl z-0 shadow-xl"
//         ></motion.div>

//         {/* Front Card */}
//         <motion.div
//           variants={{
//             rest: { rotate: 0, scale: 1 },
//             hover: { rotate: -2, scale: 1.02 },
//           }}
//           transition={{ duration: 0.3 }}
//           className="relative w-full bg-white rounded-3xl z-10 shadow-2xl p-10"
//         >
//           <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
//             <div>
//               <h2 className="text-2xl sm:text-2xl font-bold text-gray-900">
//       Let's Build Something That Actually Works for You
//               </h2>
//               <p className="mt-2 text-gray-600 text font-medium">
//                       Whether you’re launching an MVP, scaling your business, or need a smart solution — our team is ready to deliver. Let’s turn your ideas into a high-performing product.
//               </p>
            
//             </div> 

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => navigate("/contact")}
//               className="mt-5 sm:mt-2 bg-orange-700 hover:bg-orange-800 text-white px-2 py-2 rounded-full font-semibold shadow-md transition duration-300"
//             >
// Start Your Project Today            </motion.button>
//           </div>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default CallToAction;

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#0d1117] text-white overflow-hidden">
      <motion.div
        className="relative max-w-6xl mx-auto cursor-pointer group"
        whileHover="hover"
        initial="rest"
        animate="rest"
      >
        {/* Back Card */}
        <motion.div
          variants={{
            rest: { rotate: 0, y: 8, scale: 1 },
            hover: { rotate: 4, y: 16, scale: 1.02 },
          }}
          transition={{ duration: 0.3 }}
          className="absolute top-0 left-0 w-full h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl z-0 shadow-xl"
        ></motion.div>

        {/* Front Card */}
        <motion.div
          variants={{
            rest: { rotate: 0, scale: 1 },
            hover: { rotate: -2, scale: 1.02 },
          }}
          transition={{ duration: 0.3 }}
          className="relative w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl z-10 shadow-2xl p-10"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-6">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-2xl font-bold text-white leading-tight">
                Let's Build Something That Actually Works for You
              </h2>
              <p className="mt-3 text-gray-300 text-sm sm:text-base font-medium leading-relaxed">
                Whether you’re launching an MVP, scaling your business, or need a smart solution — our team is ready to deliver. Let’s turn your ideas into a high-performing product.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contact")}
              className="mt-5 sm:mt-0 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-semibold shadow-md transition duration-300"
            >
              Start Your Project Today
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CallToAction;
