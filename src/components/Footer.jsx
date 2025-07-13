// import { Link } from 'react-router-dom';
// import { assets } from '@/assets/assets';
// import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

// export default function Footer() {
//     return (
//         <footer className="bg-gray-50 border-t border-gray-200 text-gray-600 text-sm">
//             <div className="max-w-screen-xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center sm:items-start gap-6 sm:gap-0">
//                 {/* Logo */}
//                 <div className="flex-shrink-0">
//                     <Link to="/" className="flex items-center">
//                         <img
//                             src={assets.company_logo}
//                             alt="Genius Techie"
//                             className="h-12 sm:h-20 w-auto" // h-10 mobile, h-16 desktop
//                         />
//                     </Link>
//                 </div> 

//                 {/* Navigation */}
//                 <div className="flex flex-wrap justify-center sm:justify-start gap-6 text-center sm:text-left">
//                     <div>
//                         <h3 className="font-semibold text-gray-800 mb-2">Quick Links</h3> 
//                         <ul className="space-y-1">
//                             <li><Link to="/" className="hover:text-blue-500">Home</Link></li> 
//                             <li><Link to="/about" className="hover:text-blue-500">About</Link></li>
//                             <li><Link to="/services" className="hover:text-blue-500">Services</Link></li>
//                             <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
//                         </ul>
//                     </div>
//                     <div>
//                         <h3 className="font-semibold text-gray-800 mb-2">Legal</h3>
//                         <ul className="space-y-1">
//                             <li><Link to="/privacy-policy" className="hover:text-blue-500">Privacy Policy</Link></li>
//                             <li><Link to="/terms" className="hover:text-blue-500">Terms & Conditions</Link></li>
//                         </ul>
//                     </div>
//                     <div>
//                         <h3 className="font-semibold text-gray-800 mb-2">Connect</h3>
//                         <div className="flex space-x-4 justify-center sm:justify-start text-lg mt-1">
//                             <a href="https://github.com/YashRana52" target="_blank" rel="noreferrer" className="hover:text-black"><FaGithub /></a>
//                             <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-700"><FaLinkedin /></a>
//                             <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-600"><FaFacebook /></a>
//                             <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-600"><FaInstagram /></a>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Copyright */}
//             <div className="border-t border-gray-200 text-center py-4 text-xs text-gray-500">
//                 © {new Date().getFullYear()} <span className="font-medium text-gray-700">Genius Techie</span>. All rights reserved.
//             </div>
//         </footer>
//     );
// }

// import { Link } from "react-router-dom";
// import { assets } from "@/assets/assets";
// import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="bg-blue-50 text-gray-800 pt-10 border-t">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">

//           {/* Logo + Tagline */}
//           <div className="text-center md:text-left max-w-sm">
//             <img
//               src={assets.company_logo}
//               alt="Genius Techie Logo"
//               className="h-20 mx-auto md:mx-0"
//             />
//             {/* <p className="mt-4 text-sm text-gray-700">
//               We help startups and businesses with reliable mobile apps, smart websites, and AI integrations.
//             </p> */}
//           </div>

//           {/* Contact Details */}
//           <div className="text-center md:text-left"> 
//             <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
//             <p className="text-sm"><strong>Phone:</strong> +91 70524 22066, +91 63860 37892</p>
//             <p className="text-sm"><strong>Email:</strong> <a href="mailto:geniusattechie@gmail.com">geniusattechie@gmail.com</a></p>
//             <p className="text-sm"><strong>Location:</strong> Varanasi, India</p>
//           </div>
//         </div>

//         <hr className="my-8 border-blue-300" />

//         {/* Bottom section */}
//         <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-4 pb-6">
//           <div className="flex space-x-4">
//             <a href="https://linkedin.com" target="_blank" rel="noreferrer">
//               <FaLinkedinIn className="w-5 h-5 hover:text-blue-700" />
//             </a>
//             <a href="https://facebook.com" target="_blank" rel="noreferrer">
//               <FaFacebookF className="w-5 h-5 hover:text-blue-700" />
//             </a>
//             <a href="https://instagram.com" target="_blank" rel="noreferrer">
//               <FaInstagram className="w-5 h-5 hover:text-pink-500" />
//             </a>
//             <a href="https://wa.me/916386037892" target="_blank" rel="noreferrer">
//               <FaWhatsapp className="w-5 h-5 hover:text-green-500" />
//             </a>
//           </div>

//           <p className="text-center text-gray-600">
//             © 2025 <strong>Genius Techie</strong>. All rights reserved.
//           </p>

//           <div className="flex space-x-4">
//             <Link to="/terms" className="hover:underline">Terms & Conditions</Link>
//             <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
import { Link } from "react-router-dom";
import { assets } from "@/assets/assets";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#101827] text-white pt-16 border-t border-white/10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
          {/* Logo */}
          <div className="text-center md:text-left max-w-sm">
            <img
              src={assets.company_logo}
              alt="Genius Techie Logo"
              className="h-20 mx-auto md:mx-0"
            />
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-3 text-white">Contact Us</h3>
            <p className="text-sm text-gray-400">
              <strong>Phone:</strong> +91 70524 22066, +91 63860 37892
            </p>
            <p className="text-sm text-gray-400">
              <strong>Email:</strong>{" "}
              <a href="mailto:geniusattechie@gmail.com" className="hover:underline text-blue-400">
                geniusattechie@gmail.com
              </a>
            </p>
            <p className="text-sm text-gray-400">
              <strong>Location:</strong> Varanasi, India
            </p>
          </div>
        </div>

        <hr className="my-10 border-white/10" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-6 pb-8">
          <div className="flex space-x-4">
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-blue-600 transition"
            >
              <FaLinkedinIn className="text-white w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-blue-500 transition"
            >
              <FaFacebookF className="text-white w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-pink-500 transition"
            >
              <FaInstagram className="text-white w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://wa.me/916386037892"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-green-500 transition"
            >
              <FaWhatsapp className="text-white w-4 h-4" />
            </motion.a>
          </div>

          <p className="text-gray-500 text-center">
            © 2025 <strong className="text-white">Genius Techie</strong>. All rights reserved.
          </p>

          <div className="flex space-x-4 text-gray-400">
            <Link to="/terms" className="hover:text-white hover:underline transition">
              Terms & Conditions
            </Link>
            <Link to="/privacy-policy" className="hover:text-white hover:underline transition">
              Privacy Policy
            </Link>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}

