// import { useState } from 'react';
// import { ChevronUp, ChevronDown } from 'lucide-react';

// const faqData = [ 
//     {
//     question: "What kind of projects do you specialize in?",
//     answer: "We specialize in cross-platform mobile apps using Flutter, custom websites, admin panels, and smart features powered by APIs and AI tools. Whether it's an MVP or a full product, we adapt to your goals."
//   },
//   {
//     question: "Do you work with startups or established businesses?",
//     answer: "Both. We've helped early-stage startups launch MVPs and also worked with growing businesses looking to scale or improve existing systems."
//   },
//   {
//     question: "What if I only have an idea or rough plan?",
//     answer: "No problem! We can help you refine your idea, plan features, and suggest the right tech stack. You don’t need everything figured out to get started."
//   },
//   {
//     question: "How involved will I be during the project?",
//     answer: "We believe in transparent, collaborative development. You’ll receive regular updates, and we’ll involve you in key decisions to make sure the product reflects your vision."
//   },
//     {
//         question: "Do you offer customized solutions based on client requirements?",
//         answer: "Yes, every project is tailored according to the client's specific needs and goals to ensure a perfect fit."
//     }, 
//     {
//         question: "What is your typical project development process?",
//         answer: "The process usually involves requirement analysis, planning, design, development, testing, deployment, and post-launch support."
//     },
//     {
//         question: "How long does it take to complete a project?",
//         answer: "Project timelines depend on complexity and scope. It can range from a couple of weeks for small projects to several months for larger, more complex solutions."
//     }
// ];


// export default function FrequentAskQuestion() {
//     const [openIndex, setOpenIndex] = useState(null);

//     const toggleFAQ = (index) => {
//         setOpenIndex(openIndex === index ? null : index);
//     };

//     return (
//         <div className="max-w-6xl mx-auto my-8 p-4">
//             <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
//             {faqData.map((faq, index) => (
//                 <div key={index} className="mb-2 border rounded bg-blue-50">
//                     <button
//                         onClick={() => toggleFAQ(index)}
//                         className="flex justify-between items-center w-full p-4 text-left focus:outline-none"
//                     >
//                         <span className="text-lg font-medium">{faq.question}</span>
//                         {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
//                     </button>
//                     {openIndex === index && (
//                         <div className="p-4 text-gray-700">
//                             {faq.answer}
//                         </div>
//                     )}
//                 </div>
//             ))}
//         </div>
//     );
// }

import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: "What kind of projects do you specialize in?",
    answer:
      "We specialize in cross-platform mobile apps using Flutter, custom websites, admin panels, and smart features powered by APIs and AI tools. Whether it's an MVP or a full product, we adapt to your goals.",
  },
  {
    question: "Do you work with startups or established businesses?",
    answer:
      "Both. We've helped early-stage startups launch MVPs and also worked with growing businesses looking to scale or improve existing systems.",
  },
  {
    question: "What if I only have an idea or rough plan?",
    answer:
      "No problem! We can help you refine your idea, plan features, and suggest the right tech stack. You don’t need everything figured out to get started.",
  },
  {
    question: "How involved will I be during the project?",
    answer:
      "We believe in transparent, collaborative development. You’ll receive regular updates, and we’ll involve you in key decisions to make sure the product reflects your vision.",
  },
  {
    question: "Do you offer customized solutions based on client requirements?",
    answer:
      "Yes, every project is tailored according to the client's specific needs and goals to ensure a perfect fit.",
  },
  {
    question: "What is your typical project development process?",
    answer:
      "The process usually involves requirement analysis, planning, design, development, testing, deployment, and post-launch support.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Project timelines depend on complexity and scope. It can range from a couple of weeks for small projects to several months for larger, more complex solutions.",
  },
];

export default function FrequentAskQuestion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#0d1117] text-white py-20 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-purple-400 mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`rounded-xl border border-white/10 bg-[#161b22] transition-all duration-300 shadow-lg ${
                openIndex === index ? 'shadow-purple-400/20' : 'hover:shadow-white/10'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none transition-colors"
              >
                <span className="text-lg md:text-xl font-semibold text-white">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-purple-400" />
                ) : (
                  <ChevronDown className="text-gray-400" />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 px-6 ${
                  openIndex === index ? 'max-h-[500px] pb-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-300 text-base leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

