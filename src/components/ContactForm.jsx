// import React from 'react';
// import { useForm, ValidationError } from '@formspree/react';

// export default function ContactForm() {
//     const [state, handleSubmit] = useForm("mpwrdbqj");

//     if (state.succeeded) {
//         return <p className="text-green-600 text-center mt-4 text-lg">✅ Thanks! Your message has been sent.</p>;
//     }

//     return (
//         <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center 
// ">
//             <form onSubmit={handleSubmit} className="max-w-md w-full bg-gradient-to-b from-purple-200 via-violet-300 to-pink-400 p-8 rounded-3xl shadow-xl">
//                 <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center"> Send a Message</h2>

//                 <input
//                     type="text"
//                     name="name"
//                     placeholder="Full Name"
//                     required
//                     className="mb-4 w-full py-3 px-4 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
//                 />

//                 <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     required
//                     className="mb-4 w-full py-3 px-4 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
//                 />
//                 <ValidationError prefix="Email" field="email" errors={state.errors} />

//                 <input
//                     type="tel"
//                     name="phone"
//                     placeholder="Phone Number"
//                     required
//                     className="mb-4 w-full py-3 px-4 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
//                 />

//                 <textarea
//                     name="message"
//                     placeholder="Your Message"
//                     rows="4"
//                     required
//                     className="mb-4 w-full py-3 px-4 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
//                 />
//                 <ValidationError prefix="Message" field="message" errors={state.errors} />

//                 <button
//                     type="submit"
//                     disabled={state.submitting}
//                     className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-lg font-semibold transition ease-in-out duration-300 shadow-md disabled:opacity-50"
//                 >
//                     {state.submitting ? "Sending..." : "Submit"}
//                 </button>
//             </form>
//         </div>
//     );
// }

// import React, { useState } from 'react';
//     import emailjs from 'emailjs-com';
// import { assets } from '@/assets/assets';

// export default function ContactForm() {
//     const [form, setForm] = useState({
//         fullName: '',
//         mobile: '',
//         email: '',
//         message: '',
//     });

//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');
//     const [success, setSuccess] = useState('');

//     const handleChange = (e) => {
//         setForm({ ...form, [e.target.name]: e.target.value });
//     };

//     // const handleSubmit = async (e) => {
//     //     e.preventDefault();
//     //     setError('');
//     //     setSuccess('');

//     //     if (!form.fullName || !form.mobile || !form.email || !form.message) {
//     //         setError('All fields are required');
//     //         return;
//     //     }

//     //     try {
//     //         setLoading(true);

//     //         // Simulate API call (replace with your backend logic)
//     //         await new Promise((res) => setTimeout(res, 1500));

//     //         setSuccess('Thank you! We will get back to you shortly.');
//     //         setForm({ fullName: '', mobile: '', email: '', message: '' });
//     //     } catch (err) {
//     //         setError('Something went wrong. Please try again.');
//     //     } finally {
//     //         setLoading(false);
//     //     }
//     // };


// const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     if (!form.fullName || !form.mobile || !form.email || !form.message) {
//         setError('All fields are required');
//         return;
//     }

//     try {
//         setLoading(true);

//         await emailjs.send(
//             'service_geixxbk',       // e.g., service_g7s19hj
//             'template_5flhyog',      // e.g., template_w8e4t1l
//             {
//                 fullName: form.fullName,
//                 mobile: form.mobile,
//                 email: form.email,
//                 message: form.message,
//             },
//             'jcd-AyyeVt8q4RduS'    // public api
//         );

//         setSuccess('Your message was sent successfully!');  
//         setForm({ fullName: '', mobile: '', email: '', message: '' });
//     } catch (err) {
//         setError('Failed to send. Please try again.');
//     } finally {
//         setLoading(false);
//     }
// };

//     return (
// <section className="px-12 pt-20 pb-20 md:px-16 lg:px-32 bg-white">
//             <div className="flex flex-col lg:flex-row gap-10">
//                 {/* Left Content */}
//                 <div className="lg:w-1/2">
//                     <h2 className="text-4xl font-bold mb-4">Let’s Build the Future Together!</h2>
//                     <p className="text-gray-700 mb-6">
//                         The digital landscape is constantly changing, and we are here to help you stay ahead.
//                         From custom websites to mobile apps, cloud solutions, and immersive experiences,
//                         we offer the expertise and innovation needed to drive your business forward.
//                     </p>
//                     <img 
//                         src={assets.contactImg}
//                         alt="Contact"
//                         className="rounded-xl shadow-md"
//                     />
//                 </div>

//                 {/* Right Form */}
//                 <div className="lg:w-1/2 bg-white p-6 border border-gray-200 rounded-lg shadow-md">
//                     <form onSubmit={handleSubmit} className="space-y-5">
//                         <div>
//                             <label className="block font-medium mb-1">Full Name</label>
//                             <input
//                                 type="text"
//                                 name="fullName"
//                                 value={form.fullName}
//                                 onChange={handleChange}
//                                 placeholder="Enter Full Name"
//                                 className="w-full border border-blue-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             />
//                         </div>

//                         <div>
//                             <label className="block font-medium mb-1">Mobile Number</label>
//                             <input
//                                 type="tel"
//                                 name="mobile"
//                                 value={form.mobile}
//                                 onChange={handleChange}
//                                 placeholder="Enter Mobile Number"
//                                 className="w-full border border-blue-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             />
//                         </div>

//                         <div>
//                             <label className="block font-medium mb-1">Email</label>
//                             <input
//                                 type="email"
//                                 name="email"
//                                 value={form.email}
//                                 onChange={handleChange}
//                                 placeholder="Enter Email"
//                                 className="w-full border border-blue-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             />
//                         </div>

//                         <div>
//                             <label className="block font-medium mb-1">Message</label>
//                             <textarea
//                                 name="message"
//                                 value={form.message}
//                                 onChange={handleChange}
//                                 placeholder="Enter Message"
//                                 rows={4}
//                                 className="w-full border border-blue-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             />
//                         </div>

//                         {error && <p className="text-red-500 text-sm">{error}</p>}
//                         {success && <p className="text-green-600 text-sm">{success}</p>}

//                         <button
//                             type="submit"
//                             className={`w-full bg-[#0091c2] text-white py-2.5 rounded-md hover:bg-[#0078a1] transition-all duration-200 font-medium ${loading && 'opacity-70 cursor-not-allowed'}`}
//                             disabled={loading}
//                         >
//                             {loading ? 'Submitting...' : 'Submit'}
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </section>
//     );
// }

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { assets } from '@/assets/assets';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [form, setForm] = useState({
    fullName: '',
    mobile: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!form.fullName || !form.mobile || !form.email || !form.message) {
      setError('All fields are required');
      return;
    }

    try {
      setLoading(true);
      await emailjs.send(
        'service_geixxbk',
        'template_5flhyog',
        {
          fullName: form.fullName,
          mobile: form.mobile,
          email: form.email,
          message: form.message,
        },
        'jcd-AyyeVt8q4RduS'
      );

      setSuccess('Your message was sent successfully!');
      setForm({ fullName: '', mobile: '', email: '', message: '' });
    } catch (err) {
      setError('Failed to send. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-6 sm:px-10 md:px-20 py-20 bg-[#0d1117]">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto text-white"
      >
        {/* Left Info */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
            Let’s Build the Future Together!
          </h2>
          <p className="text-gray-300 mb-6 text-base sm:text-lg leading-relaxed">
            The digital landscape is constantly changing, and we are here to help you stay ahead.
            From custom websites to mobile apps, cloud solutions, and immersive experiences,
            we offer the expertise and innovation needed to drive your business forward.
          </p>
          <img
            src={assets.contactImg}
            alt="Contact"
            className="rounded-2xl shadow-2xl border border-white/20"
          />
        </div>

        {/* Right Form */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="lg:w-1/2 bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-purple-400/30 shadow-xl"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block font-semibold mb-1 text-purple-300">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Enter Full Name"
                className="w-full px-4 py-2 border border-purple-500/30 bg-[#0d1117] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1 text-purple-300">Mobile Number</label>
              <input
                type="tel"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                placeholder="Enter Mobile Number"
                className="w-full px-4 py-2 border border-purple-500/30 bg-[#0d1117] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1 text-purple-300">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter Email"
                className="w-full px-4 py-2 border border-purple-500/30 bg-[#0d1117] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1 text-purple-300">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Enter your message"
                rows={4}
                className="w-full px-4 py-2 border border-purple-500/30 bg-[#0d1117] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
              />
            </div>

            {error && <p className="text-red-400 text-sm">{error}</p>}
            {success && <p className="text-green-400 text-sm">{success}</p>}

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-300 ${
                loading && 'opacity-60 cursor-not-allowed'
              }`}
            >
              {loading ? 'Submitting...' : 'Send Message 🚀'}
            </button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
