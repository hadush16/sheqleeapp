// import { useState } from "react";
// import Breadcrumb from "../../components/ui/Breadcrumb";

// import faqIcon from "../../assets/icons/faqIcon.svg";
// import chevronIcon from "../../assets/icons/chevronDown.svg";

// import { FAQS } from "../../utils/faq.data";

// export default function FAQGuest() {
//   const [activeTab, setActiveTab] = useState("freelancers");
//   const [openId, setOpenId] = useState(null);

//   const faqs = FAQS[activeTab];

//   const toggleFAQ = (id) => {
//     setOpenId(openId === id ? null : id);
//   };

//   return (
//     <>
//       {/* BREADCRUMB */}
//       <Breadcrumb sectionLabel="Qagnew" sectionTo="/" current="FAQ" />

//       {/* HEADER */}
//       <section className="px-4 sm:px-6">
//         <div className="max-w-3xl mx-auto text-center py-8 sm:py-12">
//           <img src={faqIcon} alt="FAQ" className="mx-auto w-10 sm:w-12 mb-3" />

//           <h1 className="text-xl sm:text-2xl font-bold">FAQ</h1>

//           <p className="mt-2 text-sm sm:text-base text-gray-600">
//             The following are some of the most commonly asked questions by our
//             users.
//           </p>

//           {/* TABS — FIXED TO SINGLE CONTAINER */}
//           <div className="flex justify-center mt-6">
//             <div className="flex bg-[#E5E5E5] rounded-xl p-1">
//               {["freelancers", "companies"].map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => {
//                     setActiveTab(tab);
//                     setOpenId(null);
//                   }}
//                   className={`
//                     px-5 py-2 rounded-lg
//                     text-sm sm:text-base font-medium
//                     transition
//                     ${
//                       activeTab === tab
//                         ? "bg-black text-white"
//                         : "text-gray-700"
//                     }
//                   `}
//                 >
//                   {tab === "freelancers" ? "Freelancers" : "Companies"}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ LIST */}
//       <section className="px-3 sm:px-6 pb-16">
//         <div className="max-w-3xl mx-auto space-y-3">
//           {faqs.map((item) => {
//             const isOpen = openId === item.id;

//             return (
//               <div
//                 key={item.id}
//                 className="bg-[#E5E5E5] rounded-lg overflow-hidden"
//               >
//                 {/* QUESTION */}
//                 <button
//                   onClick={() => toggleFAQ(item.id)}
//                   className="w-full flex items-center justify-between px-4 py-3 text-left"
//                   aria-expanded={isOpen}
//                 >
//                   <span className="text-sm sm:text-base font-medium text-gray-800">
//                     {item.question}
//                   </span>

//                   <img
//                     src={chevronIcon}
//                     alt=""
//                     className={`
//                       w-4 h-4 transition-transform
//                       ${isOpen ? "rotate-180" : ""}
//                     `}
//                   />
//                 </button>

//                 {/* ANSWER */}
//                 {isOpen && (
//                   <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">
//                     {item.answer}
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </section>
//     </>
//   );
// }

import { useState } from "react";
import Breadcrumb from "../../components/ui/Breadcrumb";

import faqIcon from "../../assets/icons/faqIcon.svg";
import chevronIcon from "../../assets/icons/chevronDown.svg";

import { FAQS } from "../../utils/faq.data";
import Pagination from "../../components/ui/Pagination";
import DeveloperCTA from "../../components/home/DeveloperCTA";

export default function FAQGuest() {
  const [activeTab, setActiveTab] = useState("freelancers");
  const [openId, setOpenId] = useState(null);

  const faqs = FAQS[activeTab];

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      {/* BREADCRUMB */}
      <Breadcrumb sectionLabel="Qagnew" sectionTo="/" current="FAQ" />

      {/* HEADER */}
      <section className="px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center py-8 sm:py-12">
          <img src={faqIcon} alt="FAQ" className="mx-auto w-10 sm:w-12 mb-3" />

          <h1 className="text-xl sm:text-2xl font-bold">FAQ</h1>

          <p className="mt-2 text-sm sm:text-base text-gray-600">
            The following are some of the most commonly asked questions by our
            users.
          </p>

          {/* TABS — HIDDEN ON MOBILE (≤600px) */}
          <div className="hidden sm:flex justify-center mt-6">
            <div className="flex bg-[#E5E5E5] rounded-xl p-1">
              {["freelancers", "companies"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setOpenId(null);
                  }}
                  className={`
                    px-5 py-2 rounded-lg
                    text-sm sm:text-base font-medium
                    transition
                    ${
                      activeTab === tab
                        ? "bg-black text-white"
                        : "text-gray-700"
                    }
                  `}
                >
                  {tab === "freelancers" ? "Freelancers" : "Companies"}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ LIST */}
      <section className="px-3 sm:px-6 pb-16">
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="bg-[#E5E5E5] rounded-lg overflow-hidden"
              >
                {/* QUESTION */}
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full flex items-center justify-between px-4 py-3 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-medium text-gray-800">
                    {item.question}
                  </span>

                  <img
                    src={chevronIcon}
                    alt=""
                    className={`
                      w-4 h-4 transition-transform
                      ${isOpen ? "rotate-180" : ""}
                    `}
                  />
                </button>

                {/* ANSWER — LIGHTER BACKGROUND */}
                {isOpen && (
                  <div className="px-4 pb-4 pt-2 text-sm text-gray-700 leading-relaxed bg-[#F5F5F5]">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
      <div className="px-[14px] sm:px-0 pb-[60px]">
        <Pagination currentPage={1} totalPages={40} onPageChange={() => {}} />
      </div>
      <DeveloperCTA />
    </>
  );
}
