// import Handshake from "../../assets/images/Handshake.png";
// import company from "../../assets/images/company.png";
// import programmers from "../../assets/images/programmers.png";

// export default function PlatformStatus() {
//   return (
//     <section className="w-full py-14 px-6 bg-[#FFFFFF] mb-3">
//       {/* TITLE */}
//       <h2 className="text-center text-[45px] text-[#000000] tracking-0 font-kantumruy font-medium mb-[60px]">
//         Platform stats
//       </h2>

//       {/* STATS GRID */}
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
//         {/* STAT 1 */}
//         <div className="flex flex-col items-center gap-4">
//           <img
//             src={Handshake}
//             alt="total jobs icon"
//             className="w-[85px] h-[85px]"
//           />

//           <h3 className="text-[26px] font-bold">100K+</h3>
//           <p className="text-[15px] leading-snug">
//             Total jobs posted on <br /> Sheqlee to date
//           </p>
//         </div>

//         {/* STAT 2 */}
//         <div className="flex flex-col items-center gap-4">
//           <img
//             src={programmers}
//             alt="ethiopian professionals icon"
//             className="w-[85px] h-[85px]"
//           />

//           <h3 className="text-[26px] font-bold">15K+</h3>
//           <p className="text-[15px] leading-snug">
//             Ethiopian professionals <br /> signed up so far
//           </p>
//         </div>

//         {/* STAT 3 */}
//         <div className="flex flex-col items-center gap-4">
//           <img
//             src={company}
//             alt="companies icon"
//             className="w-[85px] h-[85px]"
//           />

//           <h3 className="text-[26px] font-bold">1K+</h3>
//           <p className="text-[15px] leading-snug">
//             Korean companies <br /> posting jobs daily
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useNavigate } from "react-router-dom";

import Handshake from "../../assets/images/Handshake.png";
import company from "../../assets/images/company.png";
import programmers from "../../assets/images/programmers.png";

export default function PlatformStatus() {
  const navigate = useNavigate();

  return (
    <section className="w-full py-14 px-6 bg-[#FFFFFF] mb-3">
      {/* TITLE */}
      <h2 className="text-center text-[45px] text-[#000000] tracking-0 font-kantumruy font-medium mb-[60px]">
        Platform stats
      </h2>

      {/* STATS GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {/* STAT 1 */}
        <div className="flex flex-col items-center gap-4">
          <img
            src={Handshake}
            alt="total jobs icon"
            className="w-[85px] h-[85px]"
          />
          <h3 className="text-[26px] font-bold">100K+</h3>
          <p className="text-[15px] leading-snug">
            Total jobs posted on <br /> Sheqlee to date
          </p>
        </div>

        {/* STAT 2 */}
        <div className="flex flex-col items-center gap-4">
          <img
            src={programmers}
            alt="ethiopian professionals icon"
            className="w-[85px] h-[85px]"
          />
          <h3 className="text-[26px] font-bold">15K+</h3>
          <p className="text-[15px] leading-snug">
            Ethiopian professionals <br /> signed up so far
          </p>
        </div>

        {/* STAT 3 — CLICKABLE */}
        <div
          onClick={() => navigate("/companies")}
          className="
            flex flex-col items-center gap-4
            cursor-pointer
            transition-transform
            hover:scale-105
          "
        >
          <img
            src={company}
            alt="companies icon"
            className="w-[85px] h-[85px]"
          />
          <h3 className="text-[26px] font-bold">1K+</h3>
          <p className="text-[15px] leading-snug">
            Korean companies <br /> posting jobs daily
          </p>
        </div>
      </div>
    </section>
  );
}
