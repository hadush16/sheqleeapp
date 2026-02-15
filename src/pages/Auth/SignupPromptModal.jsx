// import Button from "../../components/ui/Button";
// import Modal from "../../components/ui/Modal";
// import { useNavigate } from "react-router-dom";

// export default function SignupPromptModal({
//   isOpen,
//   onClose,
//   message = "Please register or login as a client to post jobs.",
// }) {
//   const navigate = useNavigate();

//   return (
//     <Modal isOpen={isOpen} onClose={onClose}>
//       <div className="text-center space-y-6">
//         <p className="text-[#000000] text-[29px] text-center tracking-0 font-kantumruy font-medium mb-[56px] tracking-0">
//           {message}
//         </p>

//         <div className="flex justify-center gap-4">
//           <Button
//             onClick={() => navigate("/signup/company")}
//             className="px-6 py-2 rounded-[11px] bg-[#8967B3] text-white"
//           >
//             Sign up
//           </Button>

//           <Button
//             onClick={() => navigate("/login")}
//             className="!text-[#000000] px-6 py-2 rounded-[11px] border-[4px] border-[#8967B3]"
//           >
//             Log in
//           </Button>
//         </div>
//       </div>
//     </Modal>
//   );
// }

// import Button from "../../components/ui/Button";
// import Modal from "../../components/ui/Modal";
// import { useNavigate } from "react-router-dom";

// export default function SignupPromptModal({
//   isOpen,
//   onClose,
//   message = "Please register or login as a client to post jobs.",
// }) {
//   const navigate = useNavigate();

//   return (
//     <Modal isOpen={isOpen} onClose={onClose}>
//       {/* CONTAINER */}
//       <div
//         className="
//           text-center
//           mx-auto

//           /* Desktop (≥1200px) — untouched */
//           max-w-md
//           p-2
//           space-y-6

//           /* Tablet (600–899px) */
//           max-[900px]:max-w-sm
//           max-[900px]:p-6
//           max-[900px]:space-y-5

//           /* Mobile (≤600px) */
//           max-[600px]:max-w-[280px]
//           max-[600px]:p-4
//           max-[600px]:space-y-4
//         "
//       >
//         {/* MESSAGE */}
//         <p
//           className="
//             text-[#000000]
//             font-kantumruy
//             font-medium
//             tracking-0

//             /* Desktop */
//             text-[27px]
//             mb-[40px]

//             /* Tablet */
//             max-[900px]:text-[17px]
//             max-[900px]:mb-5

//             /* Mobile */
//             max-[600px]:text-[12px]
//             max-[600px]:mb-3
//           "
//         >
//           {message}
//         </p>

//         {/* DESKTOP + TABLET BUTTONS */}
//         <div className="hidden max-[600px]:hidden sm:flex justify-center gap-4">
//           <Button
//             onClick={() => navigate("/signup/company")}
//             className="
//               bg-[#8967B3]
//               text-white
//               rounded-[11px]

//               /* Desktop */
//               px-6 py-2 text-base

//               /* Tablet */
//               max-[900px]:px-3
//               max-[900px]:py-1
//               max-[900px]:text-[12px]
//             "
//           >
//             Sign up
//           </Button>

//           <Button
//             onClick={() => navigate("/login")}
//             className="
//               !text-[#000000]
//               border-[4px]
//               border-[#8967B3]
//               rounded-[11px]

//               /* Desktop */
//               px-6 py-2 text-base

//               /* Tablet */
//               max-[900px]:px-3
//               max-[900px]:py-1
//               max-[900px]:text-[12px]
//             "
//           >
//             Log in
//           </Button>
//         </div>

//         {/* MOBILE ONLY SINGLE BUTTON */}
//         <div className="flex justify-center min-[601px] sm:hidden">
//           <Button
//             onClick={() => navigate("/signup/company")}
//             className="
//               bg-[#8967B3]
//               text-white
//               rounded-[9px]
//               px-5
//               py-2
//               text-[13px]
//             "
//           >
//             Ok, sign up
//           </Button>
//         </div>
//       </div>
//     </Modal>
//   );
// }

import Button from "../../components/ui/Button";
import Modal from "../../components/ui/Modal";
import { useNavigate } from "react-router-dom";

export default function SignupPromptModal({
  isOpen,
  onClose,
  message = "Please register or login as a client to post jobs.",
}) {
  const navigate = useNavigate();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div
        className="
          text-center mx-auto space-y-3

          /* Mobile */
           p-3

          /* Tablet */
          md:max-w-sm md:p-6 md:space-y-5

          /* Desktop */
          lg:max-w-md lg:p-2 lg:space-y-6
        "
      >
        {/* Message */}
        <p
          className="
            text-black font-kantumruy font-medium

            /* Mobile */
            text-[17px] mb-2

            /* Tablet */
            md:text-[17px] md:mb-5

            /* Desktop */
            lg:text-[27px] lg:mb-[40px]
          "
        >
          {message}
        </p>

        {/* Desktop + Tablet Buttons */}

        <div className="hidden md:flex justify-center gap-4">
          <Button
            onClick={() => navigate("/professional-signup")}
            className="
              bg-[#8967B3] text-white rounded-[11px]
              px-3 py-1 text-[12px]
              lg:px-6 lg:py-2 lg:text-base
            "
          >
            Sign up
          </Button>

          <Button
            onClick={() => navigate("/login")}
            className="
              !text-black border-[4px] border-[#8967B3] rounded-[11px]
              px-3 py-1 text-[12px]
              lg:px-6 lg:py-2 lg:text-base
            "
          >
            Log in
          </Button>
        </div>

        {/* Mobile only button */}
        <div className="flex justify-center md:hidden">
          <Button
            onClick={() => navigate("/signup/company")}
            className="
              bg-[#8967B3] text-white rounded-[9px]
              px-[30px] py-[7px] text-[17px] font-kantumruy font-semibold tracking-normal mt-2
            "
          >
            Ok, sign up
          </Button>
        </div>
      </div>
    </Modal>
  );
}
