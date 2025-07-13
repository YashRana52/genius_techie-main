import React from 'react';
import ContactHero from './ContactHero';
import ContactForm from './ContactForm';
import Location from './Location';

import HappyClient from './HappyClient';

function Contact() { 
    return (
        <div>
            <section
                className="min-h-screen relative bg-gradient-to-b from-purple-200 via-violet-300 to-pink-400

"
            >
                <div className="absolute inset-0 z-0"></div>
                <div className="relative z-10">
                    {/* contact page ka hero sectiopn */}
                    <ContactHero />
                                                <ContactForm />

    
                </div>
            </section>
            {/* happy client review */}
            <HappyClient />
        </div>
    );
}

export default Contact;



 