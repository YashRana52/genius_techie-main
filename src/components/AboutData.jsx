// import React from 'react';
// import Card from './Card';
// import { assets } from '@/assets/assets';

// function AboutData() {
//   return (
//     <section className="w-full bg-white py-12 px-6 md:px-16 bg-gradient-to-br from-gray-50 to-gray-200">
//       <div className="text-center mb-10">
//         <button className="px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition duration-300">
//           About Us
//         </button>
//         <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4">
//           Empowering Ideas Through Smart Technology
//         </h2>
//         <p className="mt-4 text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
//           At Genius Techie, we blend creativity and technology to deliver impactful digital experiences. Our solutions are user-centric, scalable, and built for the future.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
//         <Card
//           image={assets.aboutimg8}
//           title="Custom-Fit Solutions"
//           description="We tailor every solution to align with your unique goals and challenges—no one-size-fits-all approach."
//         />
//         <Card
//           image={assets.aboutimg1}
//           title="Multidisciplinary Team"
//           description="Our team includes designers, developers, and strategists who collaborate to bring every vision to life."
//         />
//         <Card
//           image={assets.aboutimg6}
//           title="Forward-Thinking Innovation"
//           description="We stay ahead with evolving technologies and adopt trends that help our clients grow faster and smarter."
//         />
//         <Card
//           image={assets.aboutimg5}
//           title="Client-First Philosophy"
//           description="We treat every project like a partnership—transparent communication, shared goals, and long-term success."
//         />
//       </div>
//     </section>
//   );
// }

// export default AboutData;

import React from 'react';
import Card from './Card';
import { assets } from '@/assets/assets';
import { motion } from 'framer-motion';

function AboutData() {
  return (
    <section className="w-full bg-[#0d1117] py-16 px-6 md:px-16 text-white overflow-hidden">
      {/* Heading Section */}
      <div className="text-center mb-16">
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="px-6 py-2 border-2 border-pink-500 text-pink-400 rounded-full hover:bg-pink-500 hover:text-white transition duration-300"
        >
          About Us
        </motion.button>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold mt-4 text-white"
        >
          Empowering Ideas Through Smart Technology
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="mt-4 text-gray-300 text-base md:text-lg max-w-3xl mx-auto"
        >
          At Genius Techie, we blend creativity and technology to deliver impactful digital experiences.
          Our solutions are user-centric, scalable, and built for the future.
        </motion.p>
      </div>

      {/* Cards Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto"
      >
        <Card
          image={assets.aboutimg8}
          title="Custom-Fit Solutions"
          description="We tailor every solution to align with your unique goals and challenges—no one-size-fits-all approach."
        />
        <Card
          image={assets.aboutimg1}
          title="Multidisciplinary Team"
          description="Our team includes designers, developers, and strategists who collaborate to bring every vision to life."
        />
        <Card
          image={assets.aboutimg6}
          title="Forward-Thinking Innovation"
          description="We stay ahead with evolving technologies and adopt trends that help our clients grow faster and smarter."
        />
        <Card
          image={assets.aboutimg5}
          title="Client-First Philosophy"
          description="We treat every project like a partnership—transparent communication, shared goals, and long-term success."
        />
      </motion.div>
    </section>
  );
}

export default AboutData;

