// import { FaArrowRight } from "react-icons/fa";
// import { motion } from "framer-motion";

// const processSteps = [
//   {
//     id: 1,
//     title: "Discover",
//     description: "Research and understand the problem space.",
//     color: "from-blue-400 to-blue-600",
//     arrowColor: "text-blue-400",
//   },
//   {
//     id: 2,
//     title: "Design",
//     description: "Create wireframes and prototypes.",
//     color: "from-purple-400 to-purple-600",
//     arrowColor: "text-purple-400",
//   },
//   {
//     id: 3,
//     title: "Develop",
//     description: "Build the solution with modern technologies.",
//     color: "from-pink-400 to-pink-600",
//     arrowColor: "text-pink-400",
//   },
//   {
//     id: 4,
//     title: "Deploy",
//     description: "Launch the product to the world.",
//     color: "from-orange-400 to-orange-600",
//     arrowColor: "text-orange-400",
//   },
//   {
//     id: 5,
//     title: "Support",
//     description: "Provide ongoing maintenance and updates.",
//     color: "from-green-400 to-green-600",
//     arrowColor: "text-green-400",
//   },
// ];

// const OurProcess = () => {
//   return (
//     <section className="bg-white py-10 px-2 sm:px-6">
//       <div className="text-center mb-8">
//        <button className="border border-blue-400 text-blue-500 px-6 py-2 rounded-full mb-6 hover:bg-blue-500 hover:text-white transition">
//                     Our Process
//                 </button>
//       </div>

//       <div className="flex flex-wrap justify-center items-center gap-4 max-w-[1300px] mx-auto overflow-x-auto px-2 sm:px-4">
//         {processSteps.map((step, index) => (
//           <motion.div
//             key={step.id}
//             className="flex items-center"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             whileHover="hover"
//             viewport={{ once: true }}
//             transition={{
//               duration: 0.5,
//               delay: index * 0.2,
//               type: "spring",
//               stiffness: 100,
//             }}
//           >
//             <motion.div
//               variants={{
//                 hover: {
//                   scale: 1.1,
//                 },
//               }}
//               className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br ${step.color} text-white font-bold text-xl sm:text-2xl flex items-center justify-center shadow-lg mx-auto transition-transform duration-300 ease-in-out`}
//             >
//               {step.id}
//             </motion.div>

//             <div className="text-center w-[160px] mt-3">
//               <h3 className="text-base sm:text-lg font-semibold text-gray-900">{step.title}</h3>
//               <p className="mt-1 text-xs sm:text-sm text-gray-600">{step.description}</p>
//             </div>

//             {index !== processSteps.length - 1 && (
//               <FaArrowRight className={`mx-2 sm:mx-3 text-lg sm:text-xl ${step.arrowColor}`} />
//             )}
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default OurProcess;

import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const processSteps = [
  {
    id: 1,
    title: "Discover",
    description: "Research and understand the problem space.",
    color: "from-blue-400 to-blue-600",
    arrowColor: "text-blue-400",
  },
  {
    id: 2,
    title: "Design",
    description: "Create wireframes and prototypes.",
    color: "from-purple-400 to-purple-600",
    arrowColor: "text-purple-400",
  },
  {
    id: 3,
    title: "Develop",
    description: "Build the solution with modern technologies.",
    color: "from-pink-400 to-pink-600",
    arrowColor: "text-pink-400",
  },
  {
    id: 4,
    title: "Deploy",
    description: "Launch the product to the world.",
    color: "from-orange-400 to-orange-600",
    arrowColor: "text-orange-400",
  },
  {
    id: 5,
    title: "Support",
    description: "Provide ongoing maintenance and updates.",
    color: "from-green-400 to-green-600",
    arrowColor: "text-green-400",
  },
];

const OurProcess = () => {
  return (
    <section className="bg-[#0d1117] text-white py-20 px-4 sm:px-6 overflow-hidden">
       <motion.div className="text-center mb-8">
        <button className="border border-blue-400 text-blue-500 px-6 py-2 rounded-full mb-6 hover:bg-blue-500 hover:text-white transition">
                     Our Process
                 </button>
                 <p className="text-sm text-gray-400">
                   A step-by-step guide to our workflow
                 </p>
      </motion.div>

      <div className="flex flex-wrap justify-center items-center gap-6 max-w-6xl mx-auto px-2 sm:px-4">
        {processSteps.map((step, index) => (
          <motion.div
            key={step.id}
            className="flex items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.2,
              duration: 0.7,
              ease: "easeOut",
            }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br ${step.color} text-white font-bold text-xl sm:text-2xl flex items-center justify-center shadow-xl transition duration-300`}
            >
              {step.id}
            </motion.div>

            <div className="text-center w-[160px] mt-3 px-2">
              <h3 className="text-base sm:text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-gray-400 leading-snug">
                {step.description}
              </p>
            </div>

            {index !== processSteps.length - 1 && (
              <FaArrowRight
                className={`mx-2 sm:mx-3 text-lg sm:text-xl ${step.arrowColor}`}
              />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurProcess;
