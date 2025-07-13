import React from 'react'
import Hero from './Hero'
import KnowAboutUs from './KnowAboutUs'
import ServiceCards from './ServiceCards'
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import PortfolioHome from './PortfolioHome';

import FrequentAskQuestion from './FrequentAskQuestion';
import HappyClient from './HappyClient';
import WhyChoose from './WhyChoose';
import Strength from './Strength'; 
import OurProcess from './OurProcess';
import CallToAction from './CallToAction';
import CTASection from './CTA';

function Home() {
    const navigate = useNavigate();

    // Smoot Page navigation k liye function
    const smoothNavigate = (path) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => {
            navigate(path);
        }, 300);
    };
    return (
        <div>
            <Hero />
            <KnowAboutUs />
            <WhyChoose />
            {/* Our Services Section */}
            
                <CTASection/>
                {/* <section className="w-full min-h-[60vh] flex flex-col items-center justify-center text-center bg-gradient-to-tr from-blue-500 to-blue-100 px-4 py-12">
                    <button className="border border-blue-400 text-blue-500 px-6 py-2 rounded-full mb-6 hover:bg-blue-500 hover:text-white transition">
                        Our Services
                    </button>

                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight tracking-tight mb-6">
                        Shaping Ideas into Smart, Scalable Solutions
                    </h1>

                    <p className="max-w-2xl text-gray-600 text-base md:text-lg leading-relaxed">
                        Making complex tech simple — empowering businesses to move faster, work smarter, and dream bigger.
                    </p>
                </section> */}

                {/* Service Cards */}
                <ServiceCards />


        
            

            <PortfolioHome /> 
            <Strength />
            <CallToAction />
            <OurProcess />
            {/* <section className="w-full flex flex-col items-center justify-center px-4 py-16 space-y-10 md:space-y-16 bg-white overflow-hidden"> */}

                {/* Happpy client portion ismai company logo scroll  right to left  */}
                <HappyClient />
            {/* </section> */}


        </div> 
    )
}

export default Home
