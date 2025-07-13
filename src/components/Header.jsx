// import { useState } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import { Menu, X } from 'lucide-react'; // Hamburger and Close icons from lucide-react
// import { assets } from '@/assets/assets';

// export default function Header() {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <header className="shadow sticky z-50 top-0 bg-white">
//             <nav className="border-gray-200 px-4 lg:px-6 py-2.5">
//                 <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
//                     <Link to="/" className="flex items-center">
//                         <img
//                             src={assets.company_text}
//                             // width={150} 
//                             className="mr-2 h-12"
//                             alt="Logo"
//                         />
//                     </Link>
   
//                     {/* Hamburger Icon for Mobile */}
//                     <div className="lg:hidden">
//                         <button
//                             onClick={toggleMenu}
//                             className="text-gray-700 focus:outline-none"
//                         >
//                             {isOpen ? <X size={28} /> : <Menu size={28} />}
//                         </button>
//                     </div>
  
//                     {/* Desktop Menu */}
//                     <div className="hidden lg:flex lg:w-auto lg:order-1">
//                         <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
//                             {['/', '/services', '/contact', '/about'].map((path, idx) => (
//                                 <li key={idx}>
//                                     <NavLink to={path === '/' ? '/' : path}
//                                         className={({ isActive }) =>
//                                             `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive ? "text-orange-600" : "text-gray-500"} hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                         }
//                                     >
//                                         {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
//                                     </NavLink>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div>

//                 {/* Mobile Dropdown Menu */}
//                 {isOpen && (
//                     <div className="lg:hidden mt-4">
//                         <ul className="flex flex-col font-medium space-y-2">
//                             {['/', '/services', '/contact', '/about'].map((path, idx) => (
//                                 <li key={idx}>
//                                     <NavLink
//                                         to={path === '/' ? '/' : path}
//                                         onClick={() => setIsOpen(false)}
//                                         className={({ isActive }) =>
//                                             `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive ? 'text-orange-600' : 'text-gray-500'
//                                             } hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                         }
//                                     >
//                                         {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
//                                     </NavLink>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 )}
//             </nav>
//         </header>
//     );
// }

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { assets } from "@/assets/assets";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
    { path: "/about", label: "About" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0d1117] backdrop-blur-md shadow-md transition-all duration-300">
      <nav className="px-4 lg:px-8 py-3 max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={assets.company_text}
            alt="Logo"
            className="h-10 md:h-12"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex space-x-8 text-white font-medium text-sm tracking-wide">
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `transition-all duration-300 hover:text-orange-400 ${
                    isActive ? "text-orange-500" : "text-gray-300"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden bg-[#0d1117] px-4 pt-2 pb-4 transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col space-y-4 text-white font-medium">
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block transition-all duration-300 hover:text-orange-400 ${
                    isActive ? "text-orange-500" : "text-gray-300"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
