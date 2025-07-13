// import React, { useEffect, useState, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// const testimonials = [
//     {
//   text: "Working with Genius Techie has been a smooth experience. They're always available, quick to respond, and solve any issues without delay. Having a reliable tech partner available around the clock has been a huge relief.",
//   name: "Kunal Arora",
//   position: "Project Head, Virtux Digital", 
//   image: "https://randomuser.me/api/portraits/men/60.jpg"
// }, 
//   {
//   text: "The final product exceeded our expectations. From design to functionality, everything was polished and delivered professionally. Our app has received great feedback from our users.",
//   name: "Virendra",
//   position: "CEO, Trucksup",
//   image: "https://randomuser.me/api/portraits/men/52.jpg"
// },
//     {
//   text: "I had no tech background, but Genius Techie explained everything clearly and delivered a solution tailored exactly to our business needs. Highly recommended for startups.",
//   name: "Vijay Babu",
//   position: "Operations Manager, Vibhame Technology",
//   image: "https://randomuser.me/api/portraits/men/61.jpg"
// },
//   {
//   text: "They understood our vision clearly and implemented features that made our app user-friendly and scalable. The team showed great attention to detail and professionalism.",
//   name: "Maan Ashwal",
//   position: "Founder, Himangi Enterprises",
//   image: "https://randomuser.me/api/portraits/men/53.jpg"
// },
//   {
//   text: "From the first call to final delivery, Genius Techie kept everything transparent and well-organized. They delivered a fast, stable solution that our team now depends on daily.",
//   name: "Adbhud Kumar",
//   position: "Founder, Rejoice",
//   image: "https://randomuser.me/api/portraits/men/63.jpg"
// }

// ];

// const ClientSay = () => {
//   const [current, setCurrent] = useState(0);
//   const [paused, setPaused] = useState(false);
//   const intervalRef = useRef(null);

//   // Auto scroll
//   useEffect(() => {
//     if (!paused) {
//       intervalRef.current = setInterval(() => {
//         setCurrent((prev) => (prev + 1) % testimonials.length);
//       }, 4000);
//     }

//     return () => clearInterval(intervalRef.current);
//   }, [paused]);

//   const handlePrev = () => {
//     setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   const handleNext = () => {
//     setCurrent((prev) => (prev + 1) % testimonials.length);
//   };

//   return (
//     <div
//       className="w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white py-16 px-4"
//       onMouseEnter={() => setPaused(true)}
//       onMouseLeave={() => setPaused(false)}
//     >
//       <h2 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight tracking-tight mb-12">
//         What Our Clients Say
//       </h2>

//       <div className="relative w-full max-w-3xl">
//         {/* Arrows */}
//         <button
//           onClick={handlePrev}
//           className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white p-3 rounded-full shadow hover:scale-105 transition"
//         >
//           <FaChevronLeft className="text-blue-600 text-xl" />
//         </button>

//         <button
//           onClick={handleNext}
//           className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white p-3 rounded-full shadow hover:scale-105 transition"
//         >
//           <FaChevronRight className="text-blue-600 text-xl" />
//         </button>

//         {/* Testimonials */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={current}
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -50 }}
//             transition={{ duration: 0.5 }}
//             className="w-full"
//           >
//             <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center border border-blue-100">
//               <p className="text-gray-700 text-lg italic text-center mb-6 leading-relaxed">
//                 "{testimonials[current].text}"
//               </p>
//               <div className="flex items-center gap-4">
//                 <img
//                   src={testimonials[current].image}
//                   alt={testimonials[current].name}
//                   className="w-16 h-16 rounded-full object-cover border-2 border-blue-300 shadow-md"
//                 />
//                 <div className="text-center">
//                   <p className="font-semibold text-xl text-gray-800">{testimonials[current].name}</p>
//                   <p className="text-sm text-gray-500">{testimonials[current].position}</p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default ClientSay;

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    text: "Working with Genius Techie has been a smooth experience. They're always available, quick to respond, and solve any issues without delay.",
    name: "Kunal Arora",
    position: "Project Head, Virtux Digital",
    image: "https://randomuser.me/api/portraits/men/60.jpg"
  },
  {
    text: "The final product exceeded our expectations. From design to functionality, everything was polished and delivered professionally.",
    name: "Virendra",
    position: "CEO, Trucksup",
    image: "https://randomuser.me/api/portraits/men/52.jpg"
  },
  {
    text: "I had no tech background, but Genius Techie explained everything clearly and delivered a solution tailored exactly to our business needs.",
    name: "Vijay Babu",
    position: "Operations Manager, Vibhame Technology",
    image: "https://randomuser.me/api/portraits/men/61.jpg"
  },
  {
    text: "They understood our vision clearly and implemented features that made our app user-friendly and scalable.",
    name: "Maan Ashwal",
    position: "Founder, Himangi Enterprises",
    image: "https://randomuser.me/api/portraits/men/53.jpg"
  },
  {
    text: "From the first call to final delivery, Genius Techie kept everything transparent and well-organized.",
    name: "Adbhud Kumar",
    position: "Founder, Rejoice",
    image: "https://randomuser.me/api/portraits/men/63.jpg"
  }
];

const ClientSay = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [paused]);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section
      className="relative w-full flex flex-col items-center justify-center bg-[#0d1117] text-white px-4 py-20 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background gradients */}
      <div className="absolute top-[-100px] left-[-120px] w-[250px] h-[250px] bg-blue-600 blur-3xl opacity-20 animate-pulse rounded-full" />
      <div className="absolute bottom-[-100px] right-[-120px] w-[250px] h-[250px] bg-purple-500 blur-2xl opacity-20 animate-pulse rounded-full" />

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-extrabold text-center mb-12 z-10"
      >
        What Our <span className="text-blue-400">Clients Say</span>
      </motion.h2>

      <div className="relative w-full max-w-3xl z-10">
        {/* Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-lg p-3 rounded-full shadow transition"
        >
          <FaChevronLeft className="text-blue-300 text-xl" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-lg p-3 rounded-full shadow transition"
        >
          <FaChevronRight className="text-blue-300 text-xl" />
        </button>

        {/* Animated testimonial card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <div className="bg-white/10 border border-white/10 p-8 rounded-2xl shadow-xl backdrop-blur-md flex flex-col items-center text-center">
              <p className="text-gray-100 text-lg italic mb-6 leading-relaxed">
                "{testimonials[current].text}"
              </p>
              <div className="flex flex-col items-center gap-2">
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-300 shadow-md"
                />
                <p className="font-semibold text-lg text-white">{testimonials[current].name}</p>
                <p className="text-sm text-blue-300">{testimonials[current].position}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ClientSay;
