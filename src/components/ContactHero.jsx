// import { assets } from '@/assets/assets'
// import React from 'react'
// import { Link } from 'react-router-dom'

// function ContactHero() {
//     return (
//         <div>
//             <section className="relative w-full h-[50vh] sm:h-[60vh] flex items-center justify-center text-center overflow-hidden">

//                 {/* Background Image */}
//                 <img
//                     src={assets.contact2}
//                     alt="About Banner"
//                     className="absolute inset-0 w-full h-full object-cover"
//                 />


//                 <div className="absolute inset-0 bg-gradient-to-b from-pink-500/30 via-purple-500/20 to-transparent animate-slideDown"></div>


//                 <div className="absolute inset-0 bg-black/40"></div>


//                 <div className="relative z-10 text-white px-4 animate-slideDown">
//                     <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4">
//                         Contact Us
//                     </h1>
//                     <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 text-base sm:text-lg md:text-xl">
//                         <Link to="/" className="hover:underline text-gray-200">Home</Link>
//                         <span className="hidden sm:block text-white text-xl sm:text-2xl">›</span>
//                         <span>Contact Us</span>
//                     </div>
//                 </div>

//             </section>




//         </div>
//     )
// }

// export default ContactHero

import { assets } from '@/assets/assets';
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function ContactHero() {
  return (
    <section className="relative w-full h-[60vh] flex items-center justify-center text-center overflow-hidden pt-16 sm:pt-20">
      {/* Background Image */}
      <img
        src={assets.contact2}
        alt="Contact Banner"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-500/30 via-purple-500/20 to-transparent" />
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Animated content */}
      <motion.div
        className="relative z-10 text-white px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Contact Us
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm sm:text-base">
          <Link to="/" className="hover:underline text-gray-300 transition duration-300 hover:text-white">
            Home
          </Link>
          <span className="hidden sm:block text-white text-xl">›</span>
          <span className="text-gray-100">Contact Us</span>
        </div>
      </motion.div>
    </section>
  );
}

export default ContactHero;
