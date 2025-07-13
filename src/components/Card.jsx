// import React from 'react';
// import { useInView } from 'react-intersection-observer';
// import { motion } from 'framer-motion';

// function Card({ image, title, description }) {
//     const { ref, inView } = useInView({
//         triggerOnce: true,
//         threshold: 0.2,
//     });

//     return (
//         <motion.div
//             ref={ref}
//             initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
//             animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
//             transition={{ duration: 0.8, ease: 'easeOut' }}
//             className="bg-white rounded-xl shadow-md overflow-hidden group"
//         >
//             <div className="relative w-full h-60">
//                 <img
//                     src={image}
//                     alt={title}
//                     className="w-full h-60 object-cover rounded-t-xl"
//                 />
//                 <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300 rounded-t-xl"></div>
//             </div>
//             <div className="p-6 text-center">
//                 <h2 className="text-2xl font-extrabold text-black tracking-wide">{title}</h2>
//                 <p className="text-gray-600">{description}</p>
//             </div>

//         </motion.div>
//     );
// }

// export default Card;
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

function Card({ image, title, description }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
      animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="bg-[#161b22] border border-white/10 rounded-xl shadow-xl overflow-hidden group transition-all duration-300 hover:shadow-blue-500/30"
    >
      {/* Image Section */}
      <div className="relative w-full h-60">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-t-xl"
        />
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 rounded-t-xl" />
      </div>

      {/* Text Content */}
      <div className="p-6 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-purple-400 tracking-wide mb-2">
          {title}
        </h2>
        <p className="text-gray-300 text-sm md:text-base">{description}</p>
      </div>
    </motion.div>
  );
}

export default Card;

