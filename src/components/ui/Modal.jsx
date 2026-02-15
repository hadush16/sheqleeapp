// import { useEffect } from "react";
// import closeIcon from "../../assets/icons/close.svg";

// export default function Modal({ isOpen, onClose, children }) {
//   useEffect(() => {
//     if (!isOpen) return;

//     document.body.style.overflow = "hidden";

//     const handleKeyDown = (e) => {
//       if (e.key === "Escape") {
//         onClose();
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);

//     return () => {
//       document.body.style.overflow = "auto";
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [isOpen, onClose]);

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50">
//       <div className="absolute inset-0 bg-black/50 z-10" onClick={onClose} />

//       <button
//         onClick={onClose}
//         className="absolute top-[44px] right-[65px] z-30"
//         aria-label="Close modal"
//       >
//         <img src={closeIcon} alt="Close" className="w-8 h-8" />
//       </button>

//       <div className="absolute inset-0 z-20 flex items-center justify-center">
//         <div
//           className="bg-white rounded-2xl p-8 w-full max-w-md"
//           onClick={(e) => e.stopPropagation()}
//         >
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// }

import { useEffect } from "react";
import closeIcon from "../../assets/icons/close.svg";

export default function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" onClick={onClose} />

      {/* Close Button */}
      <button
        onClick={onClose}
        aria-label="Close modal"
        className="
          absolute z-30
          top-3 right-3
          md:top-6 md:right-6
          lg:top-[44px] lg:right-[65px]
        "
      >
        <img
          src={closeIcon}
          alt="Close"
          className="
            w-4 h-4
            md:w-6 md:h-6
            lg:w-8 lg:h-8
          "
        />
      </button>

      {/* Modal Container */}
      <div className="absolute inset-0 z-20 flex items-center justify-center px-3">
        <div
          onClick={(e) => e.stopPropagation()}
          className="
            bg-white rounded-2xl w-full

            /* Mobile (default) */
           max-w-[330px] p-3

            /* Tablet */
            md:max-w-sm md:p-6

            /* Desktop */
            lg:max-w-md lg:p-8
          "
        >
          {children}
        </div>
      </div>
    </div>
  );
}
