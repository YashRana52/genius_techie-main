// import { assets } from '@/assets/assets';
// import React, { useEffect, useRef, useState } from 'react';

// export default function Project() {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const scrollRef = useRef(null);
//   const scrollInterval = useRef(null);

//   const projects = [
//     {
//       name: 'Myuze Play',  
//       description: 'An audiobook and original audio-shows platform delivering curated content in 30 minutes or less—perfect for busy listeners who crave quick, insightful listening experiences',
//       imageUrl: assets.myuze,
//       androidUrl: 'https://play.google.com/store/apps/details?id=com.myuze.play',
//       iosUrl: 'https://apps.apple.com/in/app/myuzeplay-audio-books-shows/id6593696695',
//       webUrl: 'https://myuzeplay.com',
//     },
   
//     {
//       name: 'Trucksup',
//       description: 'A logistics platform powering AI-driven truck booking, real-time tracking, and verified load matching—focused on simplifying operations for drivers and businesses across India',
//       imageUrl: assets.trucksup,
//       androidUrl: 'https://play.google.com/store/apps/details?id=com.logistics.trucksup',
//     },
//     {
//       name: 'Islamic Urdu Calendar',
//       description: 'A culturally tailored calendar app offering prayer times, festival dates, and Islamic event reminders in Urdu—designed for everyday convenience in regional contexts.', 
//       imageUrl: assets.urdu,
//       androidUrl: 'https://play.google.com/store/apps/details?id=sjaveed.Islamic.indiaCalendar',
//     },
//      {
//       name: 'Log-x view',
//       description: 'A mobile and web solution that enables solar plant owners to remotely monitor energy generation and performance—built with seamless data visualization and alerts.',
//       imageUrl: assets.logx,
//       androidUrl: 'https://play.google.com/store/apps/details?id=com.injectsolar',
//       iosUrl: 'https://apps.apple.com/in/app/logx-view/id1462429858',
//       webUrl: 'https://injectsolar.com'
//     },
//     {
//       name: 'Lystn',
//       description: 'An audio‑storytelling app offering localized and curated audio narratives—connecting listeners with engaging content on the go.',
//       imageUrl: assets.lystn,
//       androidUrl: 'https://play.google.com/store/apps/details?id=com.app.lystn',
//       iosUrl: 'https://apps.apple.com/pk/app/lystn-audiostories/id1586146781',
//     },
//     {
//       name: 'Walkie Talkie',
//       description: 'A push-to-talk app enabling instant voice communication—ideal for teams needing real-time coordination without traditional walkie‑talkie hardware.',
//       imageUrl: assets.walkie,
//       androidUrl: 'https://play.google.com/store/apps/details?id=network.talker.app',
//       iosUrl: 'https://apps.apple.com/us/app/talker-ptt-walkie-talkie/id1597656037',
//     },
//     {
//       name: 'Guru Deals', 
//       description: 'A deals aggregator app that collects and displays local discounts and coupon offers—offering users a convenient way to save on everyday purchases.',
//       imageUrl: assets.guruDeals,
//       androidUrl: 'https://play.google.com/store/apps/details?id=com.user.gurudeals',
//     },
//     {
//       name: 'CargoPro (formerly Liveasy)',
//       description: 'A freight and logistics platform that helps businesses book transport, track shipments, and manage loads efficiently—designed for seamless supply chain operations.',
//       imageUrl: assets.cargopro,
//       androidUrl: 'https://play.google.com/store/apps/details?id=com.liveasy.transport',
//     },
//     {
//       name: 'Telugu Panchangam Calendar2025',
//       description: 'A regional calendar app providing Telugu daily panchang (almanac) details, festivals, and muhurtham times—geared toward cultural planning and observances.',
//       imageUrl: assets.telugu,
//       androidUrl: 'https://play.google.com/store/apps/details?id=vikramnextgenapps.telugu.calendar',
//     },
//     {
//       name: 'Alonkar Fashion', 
//       description: 'A cross-platform shopping app featuring local products, in-app purchases, and e-commerce features—crafted for a seamless mobile shopping experience.',
//       imageUrl: assets.alonkar,
//       androidUrl: 'https://play.google.com/store/apps/details?id=com.alonkar.shopping',
//       iosUrl: 'https://apps.apple.com/in/app/alonkar-shopping/id6746260800',
//     }
//   ];

//   useEffect(() => {
//     startAutoScroll();
//     return stopAutoScroll;
//   }, []);

//   const startAutoScroll = () => {
//     scrollInterval.current = setInterval(() => {
//       const container = scrollRef.current;
//       if (!container) return;

//       container.scrollBy({ left: 1, behavior: 'smooth' });

//       const maxScroll = container.scrollWidth - container.clientWidth;
//       if (container.scrollLeft >= maxScroll) {
//         container.scrollLeft = 0;
//       }
//     }, 30);
//   };

//   const stopAutoScroll = () => {
//     if (scrollInterval.current) {
//       clearInterval(scrollInterval.current);
//     }
//   };

//   return (
//     <div className="relative w-full py-10 bg-blue-50 overflow-hidden">
//       <div
//         ref={scrollRef}
//         onMouseEnter={stopAutoScroll}
//         onMouseLeave={startAutoScroll}
//         className="flex overflow-x-auto space-x-6 px-10 scroll-smooth scrollbar-hide"
//         style={{ scrollbarWidth: 'none' }} // For Firefox
//       >
//         {[...projects, ...projects].map((project, index) => (
//           <div
//             key={index}
//             onMouseEnter={() => setHoveredIndex(index)}
//             onMouseLeave={() => setHoveredIndex(null)}
//             className="w-80 min-w-[20rem] bg-white border rounded-2xl shadow-lg flex-shrink-0 overflow-hidden transition-all duration-300 hover:scale-[1.02]"
//           >
//             <img
//               src={project.imageUrl}
//               alt={project.name}
//               className="w-full h-80 object-cover"
//             />
//             <div className="p-5 flex flex-col justify-between h-[calc(100%-20rem)]">
//               <div>
//                 <h2 className="text-lg font-bold text-gray-800">{project.name}</h2>
//                 <p className="text-sm text-gray-600 mt-1 font-medium">
//                   {project.description || '—'}
//                 </p>
//               </div>
//               {hoveredIndex === index && (
//                 <div className="flex justify-center mt-5 gap-2 flex-wrap">
//                   {project.iosUrl && (
//                     <a
//                       href={project.iosUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="bg-gray-900 text-white text-sm px-4 py-2 rounded-full hover:bg-gray-800 shadow-md"
//                     >
//                       iOS
//                     </a>
//                   )}
//                   {project.androidUrl && (
//                     <a
//                       href={project.androidUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="bg-green-600 text-white text-sm px-4 py-2 rounded-full hover:bg-green-700 shadow-md"
//                     >
//                       Android
//                     </a>
//                   )}
//                     {project.webUrl && ( 
//                     <a
//                       href={project.webUrl}
//                       target="_blank" 
//                       rel="noopener noreferrer"
//                       className="bg-blue-900 text-white text-sm px-4 py-2 rounded-full hover:bg-blue-800 shadow-md"
//                     >
//                       Web
//                     </a>
//                   )}
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import { assets } from '@/assets/assets';
import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Make sure you have lucide-react installed

export default function Project() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const scrollRef = useRef(null);
  const scrollInterval = useRef(null);

  const cardWidth = 320; // width of each card incl. margin/padding

  const projects = [
    {
      name: 'Myuze Play',
      description:
        'An audiobook and original audio-shows platform delivering curated content in 30 minutes or less...',
      imageUrl: assets.myuze,
      androidUrl: 'https://play.google.com/store/apps/details?id=com.myuze.play',
      iosUrl: 'https://apps.apple.com/in/app/myuzeplay-audio-books-shows/id6593696695',
      webUrl: 'https://myuzeplay.com',
    },
    {
      name: 'Trucksup',
      description:
        'A logistics platform powering AI-driven truck booking and real-time tracking...',
      imageUrl: assets.trucksup,
      androidUrl: 'https://play.google.com/store/apps/details?id=com.logistics.trucksup',
    },
    // Add other projects here...
  ];

  useEffect(() => {
    startAutoScroll();
    return stopAutoScroll;
  }, []);

  const startAutoScroll = () => {
    scrollInterval.current = setInterval(() => {
      const container = scrollRef.current;
      if (!container) return;
      container.scrollBy({ left: 1, behavior: 'smooth' });
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft >= maxScroll) {
        container.scrollLeft = 0;
      }
    }, 30);
  };

  const stopAutoScroll = () => {
    if (scrollInterval.current) {
      clearInterval(scrollInterval.current);
    }
  };

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: cardWidth, behavior: 'smooth' });
  };

  return (
    <div className="relative w-full py-16 bg-[#0d1117] overflow-hidden">
      {/* Scroll buttons */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 z-20 transform -translate-y-1/2 p-2 bg-black/50 rounded-full text-white hover:bg-black/70"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 z-20 transform -translate-y-1/2 p-2 bg-black/50 rounded-full text-white hover:bg-black/70"
      >
        <ChevronRight size={24} />
      </button>

      <div
        ref={scrollRef}
        onMouseEnter={stopAutoScroll}
        onMouseLeave={startAutoScroll}
        className="flex overflow-x-auto space-x-6 px-6 scroll-smooth no-scrollbar"
      >
        {[...projects, ...projects].map((project, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="w-[18rem] sm:w-80 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-lg flex-shrink-0 overflow-hidden transition-all duration-300 hover:scale-[1.03]"
          >
            <img
              src={project.imageUrl}
              alt={project.name}
              className="w-full h-60 object-cover"
            />
            <div className="p-5 flex flex-col justify-between h-[calc(100%-15rem)]">
              <div>
                <h2 className="text-lg font-semibold text-white mb-1">{project.name}</h2>
                <p className="text-sm text-gray-300 leading-relaxed font-medium">
                  {project.description || '—'}
                </p>
              </div>
              {hoveredIndex === index && (
                <div className="flex justify-center mt-5 gap-2 flex-wrap">
                  {project.iosUrl && (
                    <a
                      href={project.iosUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 text-white text-xs px-4 py-2 rounded-full hover:bg-white/20 transition"
                    >
                      iOS
                    </a>
                  )}
                  {project.androidUrl && (
                    <a
                      href={project.androidUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 text-white text-xs px-4 py-2 rounded-full hover:bg-green-700 transition"
                    >
                      Android
                    </a>
                  )}
                  {project.webUrl && (
                    <a
                      href={project.webUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white text-xs px-4 py-2 rounded-full hover:bg-blue-700 transition"
                    >
                      Web
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

