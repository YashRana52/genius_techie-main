// import React from 'react';

// const Choose = ({ icon, title, description, hoverClass, iconBg }) => {
//     return (
//         <div
//             className={`p-6 rounded-xl bg-white shadow-md 
//                         transition-all duration-500 ease-in-out 
//                         hover:scale-105 hover:shadow-2xl 
//                         group cursor-pointer relative overflow-hidden ${hoverClass}`}
//         >
//             <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 bg-white transition duration-500 z-0"></div>

//             <div className={`w-14 h-14 flex items-center justify-center ${iconBg} rounded-lg mb-4 z-10 relative 
//                             transition-all duration-500 group-hover:bg-white group-hover:rotate-12`}>
//                 <img src={icon} alt="icon" className="w-7 h-7 transition-transform duration-500 group-hover:scale-125" />
//             </div>

//             <h3 className="text-lg font-semibold mb-2 text-gray-800 group-hover:text-white transition-colors duration-500 relative z-10">
//                 {title}
//             </h3>
//             <p className="text-gray-600 group-hover:text-white text-sm leading-relaxed transition-colors duration-500 relative z-10">
//                 {description}
//             </p>
//         </div>
//     );
// };

// export default Choose;

import React from "react";

const Choose = ({ icon, title, description, hoverClass, iconBg }) => {
  return (
    <div
      className={`p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10
                  shadow-md transition-all duration-500 ease-in-out 
                  hover:scale-105 hover:shadow-xl group cursor-pointer relative overflow-hidden ${hoverClass}`}
    >
      {/* Shine overlay */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 bg-white transition duration-500 z-0"></div>

      {/* Icon container */}
      <div
        className={`w-14 h-14 flex items-center justify-center ${iconBg} 
                    rounded-lg mb-4 z-10 relative transition-all duration-500 
                    group-hover:bg-white group-hover:rotate-12`}
      >
        <img
          src={icon}
          alt="icon"
          className="w-7 h-7 transition-transform duration-500 group-hover:scale-125"
        />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-white transition-colors duration-500 relative z-10">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 group-hover:text-white text-sm leading-relaxed transition-colors duration-500 relative z-10">
        {description}
      </p>
    </div>
  );
};

export default Choose;
