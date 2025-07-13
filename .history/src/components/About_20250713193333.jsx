import { assets } from '@/assets/assets'
import React from 'react'
import { Link } from 'react-router-dom'
import KnowAboutUs from '@/components/KnowAboutUs'
import AboutData from './AboutData'
import Choose from './Choose'
import FrequentAskQuestion from './FrequentAskQuestion'
import HappyClient from './HappyClient'
import ClientSay from './ClientSay'
import Brand from './Brand'
import WhyChoose from './WhyChoose'
import WhoWeAre from './WhoWeAre'

function About() {
    return (
        <div>

            <section className="relative w-full h-[50vh] sm:h-[60vh] flex items-center justify-center text-center overflow-hidden">

                {/* Background Image */}
                <img
                    src={assets.about2}
                    alt="About Banner"
                    className="absolute inset-0 w-full h-full object-cover"
                />


                <div className="absolute inset-0 bg-gradient-to-b from-pink-500/30 via-purple-500/20 to-transparent animate-slideDown"></div>


                <div className="absolute inset-0 bg-black/40"></div>


                <div className="relative z-10 text-white px-4 animate-slideDown">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4">
                        About Us
                    </h1>
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 text-base sm:text-lg md:text-xl">
                        <Link to="/" className="hover:underline text-gray-200">Home</Link>
                        <span className="hidden sm:block text-white text-xl sm:text-2xl">›</span>
                        <span>About Us</span>
                    </div>
                </div>

            </section>


            <WhoWeAre />
            <AboutData />
        
            <WhyChoose />

            {/* Happy client section */} 
            <FrequentAskQuestion />

                {/* <HappyClient /> */}

            {/* jiski company h uski information */}
             {/* <section className="w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white py-16 px-4 mb-20"> */}
                <ClientSay />
            {/* </section> */}




        </div>
    )
}

export default About;
