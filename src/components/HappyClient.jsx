// import { assets } from '@/assets/assets';
// import React from 'react';

// const logos = [
//   { src: assets.forzamedi_logo, alt: 'Forzamedi', bgColor: '#ffffff' },
//   { src: assets.simmiLogo, alt: 'Simmi Foundation', bgColor: '#ffffff' },
//   { src: assets.walkieLogo, alt: 'Walkie Talkie', bgColor: '#1a2233' },
//   { src: assets.trucksupLogo, alt: 'Trucksup', bgColor: '#ffffff' },
//   { src: assets.vurtux, alt: 'Virtux Digital', bgColor: '#ffffff' },
//   { src: assets.logx_logo, alt: 'Solar Inject', bgColor: '#8EB0C4' },
//   { src: assets.alonkar_logo, alt: 'Alonkar Fashion', bgColor: '#ffffff' },
//   {src: assets.cargo_logo, alt: 'Cargopro', bgColor: '#ffffff' }, 
//   { src: assets.ozosoft, alt: 'Ozosoft', bgColor: '#ffffff' },
// ];

// function HappyClient() {
//   return (
//     <div className="py-10 bg-white text-center overflow-hidden">
//       <h2 className="text-2xl md:text-3xl font-semibold mb-8">
//         Join Our <span className="text-violet-500">10+</span> Happy Clients
//       </h2>

//       {/* Scrollable container */}
//       <div className="relative w-full overflow-hidden">
//         <div className="flex gap-10 animate-scroll-horizontal w-max">
//           {logos.concat(logos).map((logo, index) => (
//             <div
//               key={index}
//               style={{
//                 backgroundColor: logo.bgColor,
//                 height: '100px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 borderRadius: '0.5rem',
//                 padding: '1rem', 
//                 border: '1px solid #e5e7eb',
//                 boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
//               }}
//             >
//               <img
//                 src={logo.src}
//                 alt={logo.alt}
//                 style={{
//                   height: '100%',
//                   width: 'auto',
//                   objectFit: 'contain',
//                 }}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HappyClient;
// import { assets } from '@/assets/assets';
// import React from 'react';
// import { motion } from 'framer-motion';

// const logos = [
//   { src: assets.forzamedi_logo, alt: 'Forzamedi', bgColor: '#ffffff' },
//   { src: assets.simmiLogo, alt: 'Simmi Foundation', bgColor: '#ffffff' },
//   { src: assets.walkieLogo, alt: 'Walkie Talkie', bgColor: '#1a2233' },
//   { src: assets.trucksupLogo, alt: 'Trucksup', bgColor: '#ffffff' },
//   { src: assets.vurtux, alt: 'Virtux Digital', bgColor: '#ffffff' },
//   { src: assets.logx_logo, alt: 'Solar Inject', bgColor: '#8EB0C4' },
//   { src: assets.alonkar_logo, alt: 'Alonkar Fashion', bgColor: '#ffffff' },
//   { src: assets.cargo_logo, alt: 'Cargopro', bgColor: '#ffffff' },
//   { src: assets.ozosoft, alt: 'Ozosoft', bgColor: '#ffffff' },
// ];

// const HappyClient = () => {
//   return (
//     <section className="py-20 bg-[#0d1117] text-white relative overflow-hidden">
//       <motion.h2
//         className="text-3xl md:text-4xl font-extrabold text-center mb-12"
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, ease: 'easeOut' }}
//         viewport={{ once: false, amount: 0.4 }}
//       >
//         Join Our <span className="text-violet-400">10+</span> Happy Clients
//       </motion.h2>

//       <motion.div
//         className="relative overflow-hidden w-full"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8, ease: 'easeOut' }}
//         viewport={{ once: false, amount: 0.3 }}
//          style={{ WebkitOverflowScrolling: 'touch' }}
//       >
//         <motion.div
//           className="flex gap-6 md:gap-10 px-2 md:px-4 w-max"
//           style={{
//             animation: 'scrollX 25s linear infinite',
//              minWidth: '600px',
//           }}
//           initial={{ x: 100, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           transition={{ duration: 1, ease: 'easeOut' }}
//           viewport={{ once: false, amount: 0.3 }}
//         >
//           {[...logos, ...logos].map((logo, index) => (
//             <motion.div
//               key={index}
//               className="rounded-xl p-4 min-w-[100px] h-[80px] flex items-center justify-center border border-white/10 shadow-md backdrop-blur-md bg-white/10 transition hover:scale-105"
//               style={{ backgroundColor: logo.bgColor }}
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ delay: index * 0.05, duration: 0.5 }}
//               viewport={{ once: false }}
//             >
//               <img
//                 src={logo.src}
//                 alt={logo.alt}
//                 className="max-h-[80px] object-contain max-w-[100px]"
//               />
//             </motion.div>
//           ))}
//         </motion.div>
//       </motion.div>

//       {/* Keyframe CSS */}
//       <style>{`
//         @keyframes scrollX {
//           0% { transform: translateX(0%); }
//           100% { transform: translateX(-50%); }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default HappyClient;

import { assets } from '@/assets/assets';
import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  { src: assets.forzamedi_logo, alt: 'Forzamedi', bgColor: '#ffffff' },
  { src: assets.simmiLogo, alt: 'Simmi Foundation', bgColor: '#ffffff' },
  { src: assets.walkieLogo, alt: 'Walkie Talkie', bgColor: '#1a2233' },
  { src: assets.trucksupLogo, alt: 'Trucksup', bgColor: '#ffffff' },
  { src: assets.vurtux, alt: 'Virtux Digital', bgColor: '#ffffff' },
  { src: assets.logx_logo, alt: 'Solar Inject', bgColor: '#8EB0C4' },
  { src: assets.alonkar_logo, alt: 'Alonkar Fashion', bgColor: '#ffffff' },
  { src: assets.cargo_logo, alt: 'Cargopro', bgColor: '#ffffff' },
  { src: assets.ozosoft, alt: 'Ozosoft', bgColor: '#ffffff' },
];

const HappyClient = () => {
  return (
    <section className="py-20 bg-[#0d1117] text-white relative overflow-hidden">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.4 }}
      >
        Join Our <span className="text-violet-400">10+</span> Happy Clients
      </motion.h2>

      {/* Scrollable and animated logo row */}
      <div className="relative w-full overflow-x-auto">
        <div
          className="flex gap-6 md:gap-10 w-max animate-scrollX px-2 md:px-4"
          style={{
            minWidth: '600px',
            animation: 'scrollX 25s linear infinite',
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="rounded-xl p-3 min-w-[90px] h-[70px] flex items-center justify-center border border-white/10 shadow-md backdrop-blur-md bg-white/10 transition hover:scale-105"
              style={{ backgroundColor: logo.bgColor }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-[60px] object-contain max-w-[80px] w-auto"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Keyframe CSS */}
      <style>{`
        @keyframes scrollX {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        /* Hide scrollbar for all browsers */
        .overflow-x-auto::-webkit-scrollbar { display: none; }
        .overflow-x-auto { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default HappyClient;