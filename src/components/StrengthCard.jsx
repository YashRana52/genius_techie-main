// const StrengthCard = ({ icon, title, description }) => {
//   return (
//     <div className="w-full max-w-[500px] border border-blue-400 rounded-xl p-5 bg-white hover:shadow-lg transition-all duration-300 mx-auto">
//       <div className="flex justify-between items-start gap-4">
//         <div className="flex-1">
//           <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
//             {title}
//           </h3>
//           <p className="text-gray-700 text-sm md:text-base leading-relaxed">
//             {description}
//           </p>
//         </div>
//         <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
//           <img src={icon} alt="icon" className="w-10 h-10 object-contain" />
//         </div>
//       </div>
//     </div>
//   ); 
// };
// export default StrengthCard;

import { motion } from "framer-motion";

const StrengthCard = ({ icon, title, description, direction = "left" }) => {
  const slideVariants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -80 : 80,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={slideVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      className="w-full max-w-[500px] bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 transition-all duration-300 hover:shadow-md shadow-white/5 group mx-auto"
    >
      <div className="flex justify-between items-start gap-4">
        {/* Text Content */}
        <div className="flex-1">
          <h3 className="text-base md:text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            {description}
          </p>
        </div>

        {/* Icon with glass circular background and slight hover tilt */}
        <motion.div
          whileHover={{ rotate: [0, 4, -4, 0], transition: { duration: 0.5 } }}
          className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-md"
        >
          <img src={icon} alt="icon" className="w-7 h-7 object-contain" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default StrengthCard;
