// import leftArrowIcon from "../../assets/icons/leftArrowIcon.svg";
// import rightArrowIcon from "../../assets/icons/rightArrowIcon.svg";

// export default function Pagination({ currentPage, totalPages, onPageChange }) {
//   const visiblePages = () => {
//     const pages = [];

//     // First pages
//     for (let i = 1; i <= Math.min(9, totalPages); i++) {
//       pages.push(i);
//     }

//     // Ellipsis
//     if (totalPages > 10) {
//       pages.push("...");
//       pages.push(totalPages - 1);
//       pages.push(totalPages);
//     }

//     return pages;
//   };

//   return (
//     <div className="m-12 px-6">
//       <div className="flex items-center justify-between">
//         {/* Page numbers */}
//         <div className="flex items-center gap-2">
//           {visiblePages().map((page, index) =>
//             page === "..." ? (
//               <span key={index} className="px-3 py-2 text-gray-400 select-none">
//                 ...
//               </span>
//             ) : (
//               <button
//                 key={page}
//                 onClick={() => onPageChange(page)}
//                 className={`w-9 h-9 rounded-[11px] text-sm font-medium ${
//                   currentPage === page
//                     ? "bg-[#000000] text-white"
//                     : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//                 }`}
//               >
//                 {page}
//               </button>
//             )
//           )}
//         </div>

//         {/* Arrows */}
//         <div className="flex items-center gap-2">
//           <button
//             disabled={currentPage === 1}
//             onClick={() => onPageChange(currentPage - 1)}
//             className="w-9 h-9 rounded-[11px] bg-[#DFDFDF] flex items-center justify-center disabled:opacity-50"
//           >
//             <img src={leftArrowIcon} alt="Previous" />
//           </button>

//           <button
//             disabled={currentPage === totalPages}
//             onClick={() => onPageChange(currentPage + 1)}
//             className="w-9 h-9 rounded-[11px] bg-[#DFDFDF] flex items-center justify-center disabled:opacity-50"
//           >
//             <img src={rightArrowIcon} alt="Next" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import leftArrowIcon from "../../assets/icons/leftArrowIcon.svg";
// import rightArrowIcon from "../../assets/icons/rightArrowIcon.svg";

// export default function Pagination({ currentPage, totalPages, onPageChange }) {
//   const [screen, setScreen] = useState("desktop");

//   // Detect breakpoints: 300–600–900–1200
//   useEffect(() => {
//     const updateScreen = () => {
//       const w = window.innerWidth;
//       if (w < 600) setScreen("mobile");
//       else if (w < 900) setScreen("tablet");
//       else if (w < 1200) setScreen("laptop");
//       else setScreen("desktop");
//     };

//     updateScreen();
//     window.addEventListener("resize", updateScreen);
//     return () => window.removeEventListener("resize", updateScreen);
//   }, []);

//   const visiblePages = () => {
//     const pages = [];

//     // MOBILE → only 3 pages
//     if (screen === "mobile") {
//       const start = Math.max(1, currentPage - 1);
//       const end = Math.min(totalPages, start + 2);
//       for (let i = start; i <= end; i++) pages.push(i);
//       return pages;
//     }

//     // TABLET → 5 pages
//     if (screen === "tablet") {
//       const start = Math.max(1, currentPage - 2);
//       const end = Math.min(totalPages, start + 4);
//       for (let i = start; i <= end; i++) pages.push(i);
//       return pages;
//     }

//     // DESKTOP (UNCHANGED)
//     for (let i = 1; i <= Math.min(9, totalPages); i++) {
//       pages.push(i);
//     }

//     if (totalPages > 10) {
//       pages.push("...");
//       pages.push(totalPages - 1);
//       pages.push(totalPages);
//     }

//     return pages;
//   };

//   // Responsive spacing
//   const numberGap =
//     screen === "mobile" ? "gap-1" : screen === "tablet" ? "gap-2" : "gap-2";

//   const arrowGap =
//     screen === "mobile" ? "gap-1" : screen === "tablet" ? "gap-2" : "gap-2";

//   return (
//     <div className="m-12 px-6">
//       <div className="flex items-center justify-between">
//         {/* Page numbers */}
//         <div className={`flex items-center ${numberGap}`}>
//           {visiblePages().map((page, index) =>
//             page === "..." ? (
//               <span key={index} className="px-2 py-2 text-gray-400 select-none">
//                 ...
//               </span>
//             ) : (
//               <button
//                 key={page}
//                 onClick={() => onPageChange(page)}
//                 className={`w-9 h-9 rounded-[11px] text-sm font-medium ${
//                   currentPage === page
//                     ? "bg-[#000000] text-white"
//                     : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//                 }`}
//               >
//                 {page}
//               </button>
//             )
//           )}
//         </div>

//         {/* Arrows */}
//         <div className={`flex items-center ${arrowGap}`}>
//           <button
//             disabled={currentPage === 1}
//             onClick={() => onPageChange(currentPage - 1)}
//             className="w-9 h-9 rounded-[11px] bg-[#DFDFDF] flex items-center justify-center disabled:opacity-50"
//           >
//             <img src={leftArrowIcon} alt="Previous" />
//           </button>

//           <button
//             disabled={currentPage === totalPages}
//             onClick={() => onPageChange(currentPage + 1)}
//             className="w-9 h-9 rounded-[11px] bg-[#DFDFDF] flex items-center justify-center disabled:opacity-50"
//           >
//             <img src={rightArrowIcon} alt="Next" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import leftArrowIcon from "../../assets/icons/leftArrowIcon.svg";
import rightArrowIcon from "../../assets/icons/rightArrowIcon.svg";
import rightArrowBlack from "../../assets/icons/rightArrowBlack.svg";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const [screen, setScreen] = useState("desktop");
  const [activeArrow, setActiveArrow] = useState("right");

  useEffect(() => {
    const updateScreen = () => {
      const w = window.innerWidth;
      if (w < 600) setScreen("mobile");
      else if (w < 900) setScreen("tablet");
      else setScreen("desktop");
    };

    updateScreen();
    window.addEventListener("resize", updateScreen);
    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  const visiblePages = () => {
    const pages = [];

    let start = Math.max(1, currentPage - (screen === "mobile" ? 1 : 2));
    let end = Math.min(totalPages, start + (screen === "mobile" ? 2 : 4));

    for (let i = start; i <= end; i++) pages.push(i);
    return pages;
  };

  return (
    <div className="pb-6 px-6 lg:mx-12 flex justify-between items-center">
      {/* Pages */}
      <div className="flex gap-2">
        {visiblePages().map((p) => (
          <button
            key={p}
            onClick={() => onPageChange(p)}
            className={`w-8 h-8 lg:w-9 lg:h-9 rounded-[11px]
              ${
                currentPage === p
                  ? "bg-black text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
          >
            {p}
          </button>
        ))}
      </div>

      {/* Arrows */}
      <div className="flex items-center gap-2">
        <button
          disabled={currentPage === 1}
          onClick={() => {
            onPageChange(currentPage - 1);
            setActiveArrow("left");
          }}
          className={`w-8 h-8 lg:w-9 lg:h-9 rounded-[11px] flex items-center justify-center ${
            activeArrow === "left" && currentPage > 1
              ? "bg-[#8967B3] text-white"
              : "bg-[#DFDFDF] text-black"
          } disabled:opacity-50`}
        >
          <img src={leftArrowIcon} alt="Prev" />
        </button>

        <button
          disabled={currentPage === totalPages}
          onClick={() => {
            onPageChange(currentPage + 1);
            setActiveArrow("right");
          }}
          className={`w-8 h-8 lg:w-9 lg:h-9 rounded-[11px] flex items-center justify-center ${
            activeArrow === "right" && currentPage < totalPages
              ? "bg-[#8967B3] text-white"
              : "bg-[#DFDFDF] text-black"
          } disabled:opacity-50`}
        >
          <img
            src={activeArrow === "right" ? rightArrowIcon : rightArrowBlack}
            alt="Next"
          />
        </button>
      </div>
    </div>
  );
}
