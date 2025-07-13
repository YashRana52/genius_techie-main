import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Location() {
    return (
        <div className="min-h-screen flex justify-center items-center p-6">
            <div className="bg-gradient-to-b from-purple-200 via-violet-300 to-pink-400 rounded-3xl shadow-xl p-8 max-w-md w-full text-center relative">

                {/* Profile Image */}
                <div className="flex justify-center mb-4">
                    <img
                        className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-white shadow-md -mt-20 bg-gray-100"
                        src="https://avatars.githubusercontent.com/u/176314557?v=4"
                        alt="profileImg1"
                    />
                </div>

                <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded-full mb-4 hover:bg-orange-500 hover:text-white transition">
                    Contact Us
                </button>
                <h2 className="text-3xl font-bold mb-4 text-gray-800">Reach Out to Us</h2>
                <p className="text-gray-500 mb-6 text-base leading-relaxed font-medium">
                    Looking to transform your ideas into reality? Whether you need expert advice, technical solutions, or wish to collaborate on an exciting project, we are here to provide dedicated support and innovative solutions tailored to your needs.
                </p>

                {/* Contact Info */}
                <div className="flex items-center mb-4 text-left space-x-4">
                    <FaPhoneAlt className="text-orange-500 text-xl" />
                    <div>
                        <p className="font-semibold text-gray-700">Call Us</p>
                        <p className="text-gray-600">+91 9569633102</p>
                    </div>
                </div>

                <div className="flex items-center mb-4 text-left space-x-4">
                    <FaEnvelope className="text-orange-500 text-xl" />
                    <div>
                        <p className="font-semibold text-gray-700">Email</p>
                        <p className="text-gray-600">yashrana097@gmail.com</p>
                    </div>
                </div>

                <div className="flex items-center text-left space-x-4">
                    <FaMapMarkerAlt className="text-orange-500 text-xl" />
                    <div>
                        <p className="font-semibold text-gray-700">Location</p>
                        <p className="text-gray-600">IET Lucknow, Uttar Pradesh</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
