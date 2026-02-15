// import Lottie from "lottie-react";
// import { useState } from "react";
// import heroAnimation from "../../assets/animations/heroAnimation.json";
// import SignupPromptModal from "../../pages/Auth/SignupPromptModal.jsx";

// export default function HeroSection() {
//   const [showSignupModal, setShowSignupModal] = useState(false);
//   return (
//     <section className=" mt-8 md:mt-[3rem] mb-12 md:mb-[6.3rem] px-16 md:px-[77px] py-8 md:py-13 grid grid-cols-1 lg:grid-cols-2 nest-hub:grid-cols-1 items-center">
//       <div className="px-0 lg:pl-[45px] sm:text-left md:text-left order-2 lg:order-1  nest-hub:order-2">
//         <h1 className="text-4xl md:text-[48px] lg:text-[60px] nest-hub:text-4xl text-[#000000] font-bold leading-tight md:leading-[1] mb-6 md:mb-[50px] pt-4 md:pt-[2.5rem] font-kantumruy">
//           Recruit <span className="text-[#8967B3]">affordable</span>{" "}
//           <br className="hidden lg:block nest-hub:hidden" />&{" "}
//           <span className="text-[#8967B3]">skilled</span> Ethiopian
//           professionals.
//         </h1>

//         <p className="text-[#000000] max-w-full md:max-w-[761px] font-kantumruy text-lg md:text-[27px] leading-relaxed md:leading-[1.3] mb-8 md:mb-[3rem]">
//           Web frontend, mobile app, backend, database, full-stack, data science,
//           UI/UX & product design, project management, scrum master, etc.
//         </p>

//         <button
//           onClick={() => setShowSignupModal(true)}
//           className="flex items-center justify-center rounded-[20px] bg-[#8967B3]
//              w-full md:max-w-[395px] h-[60px] md:h-[75px]
//              transition-transform hover:scale-105"
//         >
//           <span className="text-white font-kantumruy font-semibold text-xl md:text-[28px]">
//             Post your projects
//           </span>
//         </button>
//       </div>

//       {/* Lottie Animation: Appears first on mobile for better visual flow */}
//       <div className="order-1 lg:order-2">
//         <Lottie
//           animationData={heroAnimation}
//           alt="Developers finding Job using this web"
//           loop
//           className="w-full max-w-[400px] md:max-w-full mx-auto mb-8 md:mb-[2rem]"
//         />
//       </div>

//       <SignupPromptModal
//         isOpen={showSignupModal}
//         onClose={() => setShowSignupModal(false)}
//       />
//     </section>
//   );
// }

// import Lottie from "lottie-react";
// import { useState } from "react";
// import heroAnimation from "../../assets/animations/heroAnimation.json";
// import SignupPromptModal from "../../pages/Auth/SignupPromptModal.jsx";

// export default function HeroSection() {
//   const [showSignupModal, setShowSignupModal] = useState(false);

//   return (
//     <section
//       className="
//       max-w-[100%]
//         mt-8 md:mt-[3rem]
//         mb-12 md:mb-[6.3rem]
//         px-4 sm:px-6 md:px-12 lg:px-[60px] xl:px-[77px]
//         py-8 md:py-13
//         grid grid-cols-1
//         md:grid-cols-1
//         lg:grid-cols-2
//         nest-hub:grid-cols-1
//         ipad-pro:grid-cols-1
//         nest-hub-max:grid-cols-2
//         items-center
//       "
//     >
//       {/* TEXT */}
//       <div
//         className="
//           px-0
//           lg:pl-[45px]
//           text-left
//           order-2 lg:order-1 nest-hub:order-2 ipad-pro:order-2
//         "
//       >
//         <h1
//           className="
//             text-[32px] sm:text-[36px] md:text-[42px]
//             lg:text-[48px] nest-hub:text-[36px] ipad-pro:text-[36px] xl:text-[58px]
//             text-[#000000]
//             font-bold
//             leading-tight lg:leading-[1.2]
//             mb-6 md:mb-[40px] xl:mb-[50px]
//             pt-4 md:pt-[2.5rem]
//             font-kantumruy
//           "
//         >
//           Recruit <span className="text-[#8967B3]">affordable</span>{" "}
//           <br className="hidden lg:block nest-hub:hidden ipad-pro:hidden" />&{" "}
//           <span className="text-[#8967B3]">skilled</span> Ethiopian
//           professionals.
//         </h1>

//         <p
//           className="
//             text-[#000000]
//             max-w-full md:max-w-[680px] xl:max-w-[761px]
//             font-kantumruy
//             text-[16px] sm:text-[18px] md:text-[22px]
//             lg:text-[24px] xl:text-[27px]
//             leading-relaxed md:leading-[1.3]
//             mb-8 md:mb-[3rem]
//           "
//         >
//           Web frontend, mobile app, backend, database, full-stack, data science,
//           UI/UX & product design, project management, scrum master, etc.
//         </p>

//         <button
//           onClick={() => setShowSignupModal(true)}
//           className="
//             flex items-center justify-center
//             rounded-[15px]
//             bg-[#8967B3]
//             w-full sm:max-w-[280px] md:max-w-[320px]
//             lg:max-w-[360px] xl:max-w-[395px]
//             h-[52px] md:h-[60px] lg:h-[65px] nest-hub:h-[52px] ipad-pro:h-[52px] xl:h-[75px]
//             transition-transform hover:scale-105
//           "
//         >
//           <span
//             className="
//               text-white
//               font-kantumruy
//               font-semibold
//               text-[16px] sm:text-[18px]
//               md:text-[22px] lg:text-[24px] xl:text-[28px]
//             "
//           >
//             Post your projects
//           </span>
//         </button>
//       </div>

//       {/* LOTTIE */}
//       <div
//         className="
//           order-1 lg:order-2 nest-hub:order-2 nest-hub:order-1 ipad-pro:order-1
//           flex justify-center
//         "
//       >
//         <Lottie
//           animationData={heroAnimation}
//           alt="Developers finding Job using this web"
//           loop
//           className="
//             w-full
//             max-w-[260px] sm:max-w-[300px]
//             md:max-w-[360px]
//             lg:max-w-[420px] nest-hub:max-w-[300px] ipad-pro:max-w-[300px]
//             xl:max-w-full
//             mx-auto
//             mb-8 md:mb-[2rem]
//           "
//         />
//       </div>

//       <SignupPromptModal
//         isOpen={showSignupModal}
//         onClose={() => setShowSignupModal(false)}
//       />
//     </section>
//   );
// }

import Lottie from "lottie-react";
import { useState } from "react";
import heroAnimation from "../../assets/animations/heroAnimation.json";
import SignupPromptModal from "../../pages/Auth/SignupPromptModal.jsx";

export default function HeroSection() {
  const [showSignupModal, setShowSignupModal] = useState(false);

  return (
    <section
      className="
    mt-12 md:mt-[3rem]
    mb-12 md:mb-[6.3rem]
    px-6 sm:px-10 md:px-[77px]
    grid grid-cols-1 lg:grid-cols-2
    items-center
    gap-10 lg:gap-0

    mx-auto
    lg:max-w-[1058px]
    xl:max-w-[1457px]
  "
    >
      {/* TEXT CONTENT */}
      <div
        className="
          order-2 lg:order-1
          text-left
          lg:pl-[45px]
        "
      >
        <h1
          className="
            text-4xl sm:text-[55px] lg:text-[45px] xl:text-[60px]
           
            ipad-pro:text-[45px]
            text-[#000000]
            font-bold font-kantumruy
            leading-tight lg:leading-[1]
            mb-6 lg:mb-[50px] pt-20
          "
        >
          Recruit <span className="text-[#8967B3]">affordable</span>{" "}
          <span className="hidden lg:inline">
            <br />
          </span>
          & <span className="text-[#8967B3]">skilled</span> Ethiopian
          professionals.
        </h1>

        <p
          className="
            text-lg sm:text-[26px] lg:text-[19px] xl:text-[27px]
            leading-relaxed lg:leading-[1.3]
            max-w-xl lg:max-w-[761px]
            
            mb-8 lg:mb-[3rem]
            font-kantumruy
          "
        >
          Web frontend, mobile app, backend, database, full-stack, data science,
          UI/UX & product design, project management, scrum master, etc.
        </p>

        <button
          onClick={() => setShowSignupModal(true)}
          className="
            
            flex items-center justify-center
            rounded-[11px] md:rounded-[15px]
            bg-[#8967B3]
            w-[260px] sm:w-[350px] px-5 sm:max-w-[395px] sm:px-0
            h-[60px] md:h-[75px]
            transition-transform hover:scale-105
          "
        >
          <span className="text-white font-kantumruy font-semibold text-xl md:text-[28px]">
            Post your projects
          </span>
        </button>
      </div>

      {/* ANIMATION */}
      <div className="order-1 lg:order-2 flex justify-center">
        <Lottie
          animationData={heroAnimation}
          loop
          className="
            max-w-full
          
          "
        />
      </div>

      <SignupPromptModal
        isOpen={showSignupModal}
        onClose={() => setShowSignupModal(false)}
      />
    </section>
  );
}
