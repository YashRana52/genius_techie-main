// // import React from 'react';
// // import { FaLaptopCode, FaMobileAlt, FaNetworkWired } from 'react-icons/fa';

// // const services = [
// //     {
// //         icon: <FaLaptopCode size={30} className="text-blue-500" />,
// //         title: "Web Development",
// //         description: 
// //             "We design fast, secure, and user-friendly websites that help you grow your online presence and engage customers across all devices.",
// //     },
// //     {
// //         icon: <FaMobileAlt size={30} className="text-blue-500" />,
// //         title: "App Development",
// //         description:
// //             "We build user-friendly mobile apps that offer smooth performance, stunning design, and help businesses connect better with their audience.",
// //     },
// //     {
// //         icon: <FaNetworkWired size={30} className="text-blue-500" />,
// //         title: "IoT Development",
// //         description:
// //             "We create intelligent IoT systems that connect your devices, automate processes, and help you make better, faster decisions.",
// //     },
// // ];

// // export default function ServiceCards() {
// //     return (
// //         <section className="flex flex-col md:flex-row gap-6 justify-center items-center py-1 px-4 bg-gray-50">
// //             {services.map((service, index) => (
// //                 <div
// //                     key={index}
// //                     className="bg-white shadow-md rounded-xl p-6 max-w-sm text-center hover:shadow-xl transition"
// //                 >
// //                     <div className="flex justify-center items-center bg-orange-50 w-12 h-12 rounded-full mx-auto mb-4">
// //                         {service.icon}
// //                     </div>
// //                     <h3 className="text-2xl font-bold text-gray-800 mb-3 tracking-wide">
// //                         {service.title}
// //                     </h3>
// //                     <p className="text-gray-500 text-base leading-relaxed mb-5">
// //                         {service.description}
// //                     </p>

// //                     <a
// //                         href="/services"
// //                         className="text-blue-500 font-medium inline-flex items-center hover:underline"
// //                     >
// //                         Learn More &nbsp; <span>&#x2192;</span>
// //                     </a>
// //                 </div>

// //             ))}
// //         </section>

// //     );
// // }

// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaMobileAlt, FaLaptopCode, FaPencilRuler, FaCloudUploadAlt, FaTools, FaChartLine } from 'react-icons/fa';

// const services = [
//   {
//     icon: <FaMobileAlt size={34} className="text-blue-400" />,
//     title: 'Mobile Applications',
//     desc: 'We design high-quality mobile apps tailored to your business needs, ensuring great performance and a seamless user experience across all devices.',
//   },
//   { 
//     icon: <FaLaptopCode size={34} className="text-blue-400" />,
//     title: 'Website Development',
//     desc: 'From landing pages to full-scale platforms, we craft responsive and scalable websites that align with your goals and engage your audience effectively.',
//   },
//   {
//     icon: <FaPencilRuler size={34} className="text-blue-400" />,
//     title: 'User Interface Design',
//     desc: 'We create modern and intuitive UI designs that make your digital products easy to use and visually appealing.',
//   },
//   {
//     icon: <FaCloudUploadAlt size={34} className="text-blue-400" />,
//     title: 'Cloud Deployment',
//     desc: 'Our deployment services ensure your solution goes live securely, reliably, and at optimal performance with cloud-ready infrastructure.',
//   },
//   {
//     icon: <FaTools size={34} className="text-blue-400" />,
//     title: 'Product Maintenance',
//     desc: 'We offer ongoing maintenance and updates to keep your digital solutions running smoothly and up-to-date with the latest standards.',
//   },
//   {
//     icon: <FaChartLine size={34} className="text-blue-400" />,
//     title: 'Digital Growth Strategy',
//     desc: 'Get support with SEO, analytics, and optimization strategies to grow your brand visibility and reach new audiences.',
//   },
// ];

// export default function ServiceCards() {
//   return (
//     <section id="services" className="py-20 px-6 text-center bg-white">
//       {/* <h2 className="text-4xl font-extrabold text-blue-400 mb-14 tracking-tight">Our Services</h2> */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
//         {services.map((service, index) => ( 
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }} 
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             viewport={{ once: true }}
//             className="bg-white shadow-md p-6 rounded-2xl border border-gray-200
//                        hover:shadow-xl hover:border-blue-200 transition-all text-left
//                        group transform-gpu hover:rotate-[0.3deg] cursor-pointer"
//           >
//             <div className="mb-4 transform transition-transform group-hover:scale-110">
//               {service.icon}
//             </div>
//             <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-400 transition-colors duration-300">
//               {service.title}
//             </h3>
//             <p className="text-gray-600 mt-3 text-[0.95rem] leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
//               {service.desc}
//             </p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FaMobileAlt,
  FaLaptopCode,
  FaPencilRuler,
  FaCloudUploadAlt,
  FaTools,
  FaChartLine,
} from 'react-icons/fa';

const services = [
  {
    icon: <FaMobileAlt size={34} className="text-blue-400" />,
    title: 'Mobile Applications',
    desc: 'We design high-quality mobile apps tailored to your business needs, ensuring great performance and a seamless user experience across all devices.',
  },
  {
    icon: <FaLaptopCode size={34} className="text-blue-400" />,
    title: 'Website Development',
    desc: 'From landing pages to full-scale platforms, we craft responsive and scalable websites that align with your goals and engage your audience effectively.',
  },
  {
    icon: <FaPencilRuler size={34} className="text-blue-400" />,
    title: 'User Interface Design',
    desc: 'We create modern and intuitive UI designs that make your digital products easy to use and visually appealing.',
  },
  {
    icon: <FaCloudUploadAlt size={34} className="text-blue-400" />,
    title: 'Cloud Deployment',
    desc: 'Our deployment services ensure your solution goes live securely, reliably, and at optimal performance with cloud-ready infrastructure.',
  },
  {
    icon: <FaTools size={34} className="text-blue-400" />,
    title: 'Product Maintenance',
    desc: 'We offer ongoing maintenance and updates to keep your digital solutions running smoothly and up-to-date with the latest standards.',
  },
  {
    icon: <FaChartLine size={34} className="text-blue-400" />,
    title: 'Digital Growth Strategy',
    desc: 'Get support with SEO, analytics, and optimization strategies to grow your brand visibility and reach new audiences.',
  },
];

export default function ServiceCards() {
  const sectionRef = useRef();
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 px-6 bg-[#0d1117] text-white text-center min-h-screen"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10
                       shadow-md hover:shadow-xl hover:scale-[1.03] transition-all
                       text-left group transform-gpu hover:rotate-[0.3deg] cursor-pointer"
          >
            <div className="mb-4 transform transition-transform group-hover:scale-110">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-gray-400 mt-3 text-[0.95rem] leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

