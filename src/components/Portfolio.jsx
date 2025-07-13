import React from 'react';
import Project from './Project';
import { Link } from 'react-router-dom';
import ClientSay from './ClientSay';
import HappyClient from './HappyClient';
import OurProcess from './OurProcess';

function Portfolio() {
    const handleContactClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="w-full flex flex-col items-center bg-[#0d1117] text-white">

            {/* Web Projects Section */}
            <section className="w-full min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-12">
                <button className="border border-blue-400 text-blue-500 px-6 py-2 rounded-full mb-6 hover:bg-blue-500 hover:text-white transition">
                    Our Works
                </button>
                {/* <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight tracking-tight mb-6">
                    App Projects
                </h1> */}
                <Project />
            </section>
<OurProcess />
            {/* App Projects Section
            <section className="w-full min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-12">
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight tracking-tight mb-6">
                    App Projects
                </h1>
                <Project direction="right" />
            </section> */}

            {/* Client Testimonials Section */}
            {/* <section className="w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white py-16 px-4 mb-20">
                <ClientSay />
            </section>

            <section className="w-full flex flex-col items-center justify-center px-4 py-16 space-y-10 md:space-y-16 bg-white">

                <HappyClient />
            </section> */}
            {/* Testimonials Section: ClientSay */}
<section className="w-full flex flex-col items-center justify-center bg-[#0d1117] text-white py-20 px-4 relative overflow-hidden">

  {/* Gradient glowing background blobs */}
  <div className="absolute top-[-100px] left-[-100px] w-[250px] h-[250px] bg-blue-600 rounded-full blur-3xl opacity-30 animate-pulse" />
  <div className="absolute bottom-[-120px] right-[-100px] w-[250px] h-[250px] bg-pink-500 rounded-full blur-2xl opacity-20 animate-pulse" />

  
  {/* ClientSay Component */}
  <div className="z-10 w-full max-w-6xl">
    <ClientSay />
  </div>
</section>

{/* Clients Logos Section: HappyClient */}
<section className="w-full flex flex-col items-center justify-center px-4 py-20 bg-[#0b0f19] text-white relative overflow-hidden">

  

  {/* Animated logo list */}
  <div className="w-full z-10">
    <HappyClient />
  </div>

  {/* Gradient edges for subtle glow effect */}
  <div className="absolute top-[-80px] left-0 w-[180px] h-[180px] bg-purple-700 blur-2xl opacity-20" />
  <div className="absolute bottom-[-100px] right-0 w-[200px] h-[200px] bg-blue-500 blur-3xl opacity-20" />
</section>

        </div>
    );
}

export default Portfolio;
