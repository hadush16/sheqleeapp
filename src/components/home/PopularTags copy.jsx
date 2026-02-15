// import TagCard from "../cards/TagCard";
// import popularTagsDetailIcon from "../../assets/icons/popularTagsDetailIcon.svg";
// import { Link } from "react-router-dom";
// import { TAGS } from "../../utils/tags.data";

// const PREVIEW_COUNT = 6;

// export default function PopularTags() {
//   const remainingCount = Math.max(TAGS.length - PREVIEW_COUNT, 0);

//   return (
//     <section className="bg-[#F7F7F7] px-4 sm:px-8 lg:px-[72px] pb-6 lg:pb-[30px]">
//       {/* Header */}
//       <div className="flex items-center justify-between pt-2 lg:pt-[25px] mb-4 lg:mb-[30px]">
//         <h2 className="text-lg sm:text-2xl lg:text-[38px] font-kantumruy font-medium">
//           Popular tags
//         </h2>

//         <Link
//           to="/tags"
//           className="flex items-center gap-2 lg:gap-3 font-kantumruy font-medium text-xs sm:text-sm lg:text-[17px]"
//         >
//           <span className="relative">
//             {remainingCount > 0
//               ? `${remainingCount}+ more tags`
//               : "View all tags"}
//             <span className="absolute left-0 -bottom-[5px] lg:-bottom-[7.5px] w-[40px] lg:w-[54px] h-[4px] lg:h-[5.4px] bg-[#8967B3]" />
//           </span>

//           <img
//             src={popularTagsDetailIcon}
//             alt=""
//             className="w-[7px] h-[12px] lg:w-[9px] lg:h-[16px]"
//           />
//         </Link>
//       </div>

//       {/* Grid */}
//       <div
//         className="
//           grid
//           grid-cols-1
//           sm:grid-cols-2
//           lg:grid-cols-3
//           gap-y-4 sm:gap-y-6 lg:gap-y-[30px]
//           gap-x-4 sm:gap-x-6 lg:gap-x-[87px]
//         "
//       >
//         {TAGS.slice(0, PREVIEW_COUNT).map((tag) => (
//           <TagCard key={tag.id} {...tag} />
//         ))}
//       </div>

//       {/* Mobile pagination dots */}
//       <div className="flex justify-center gap-2 mt-6 lg:hidden">
//         <span className="w-2 h-2 rounded-full bg-[#8967B3]" />
//         <span className="w-2 h-2 rounded-full bg-[#CFCFCF]" />
//         <span className="w-2 h-2 rounded-full bg-[#CFCFCF]" />
//       </div>
//     </section>
//   );
// }
// import { useEffect, useState } from "react";
// import TagCard from "../cards/TagCard";
// import popularTagsDetailIcon from "../../assets/icons/popularTagsDetailIcon.svg";
// import { Link } from "react-router-dom";
// import { TAGS } from "../../utils/tags.data";

// export default function PopularTags() {
//   const [page, setPage] = useState(0);
//   const [pageSize, setPageSize] = useState(9);
//   const [columns, setColumns] = useState(3);

//   /* ------------------------------------------------
//      RESPONSIVE RULES (FINAL)
//      <640      → 1 col × 3 rows = 3
//      640–1279  → 2 col × 3 rows = 6
//      ≥1280     → 3 col × 3 rows = 9 (NO pagination)
//   -------------------------------------------------*/
//   useEffect(() => {
//     const updateLayout = () => {
//       if (window.innerWidth < 640) {
//         setColumns(1);
//         setPageSize(3);
//       } else if (window.innerWidth < 1280) {
//         setColumns(2);
//         setPageSize(4);
//       } else {
//         setColumns(3);
//         setPageSize(6);
//       }
//       setPage(0);
//     };

//     updateLayout();
//     window.addEventListener("resize", updateLayout);
//     return () => window.removeEventListener("resize", updateLayout);
//   }, []);

//   const totalPages = Math.ceil(TAGS.length / pageSize);

//   const visibleTags =
//     columns === 3
//       ? TAGS.slice(0, 6) // desktop → always first 9
//       : TAGS.slice(page * pageSize, page * pageSize + pageSize);

//   const hiddenCount =
//     columns === 3
//       ? TAGS.length - 6
//       : TAGS.length - (page * pageSize + visibleTags.length);

//   return (
//     <section className="bg-[#F7F7F7] px-4 sm:px-8 lg:px-[72px] pb-6 lg:pb-[30px]">
//       {/* HEADER */}
//       <div className="flex items-center justify-between pt-2 lg:pt-[25px] mb-4 lg:mb-[30px]">
//         <h2 className="text-lg sm:text-2xl lg:text-[38px] font-kantumruy font-medium">
//           Popular tags
//         </h2>

//         <Link
//           to="/tags"
//           className="flex items-center gap-2 lg:gap-3 font-kantumruy font-medium text-[15px] sm:text-[20px] lg:text-[27px]"
//         >
//           <span className="relative">
//             {hiddenCount > 0 ? `${hiddenCount}+ more tags` : "View all tags"}
//             <span className="absolute left-0 -bottom-[5px] lg:-bottom-[7.5px] w-[40px] lg:w-[54px] h-[4px] lg:h-[5.4px] bg-[#8967B3]" />
//           </span>

//           <img
//             src={popularTagsDetailIcon}
//             alt="dot to separate jobs and subscribers"
//             className="w-[7px] h-[12px] lg:w-[9px] lg:h-[16px]"
//           />
//         </Link>
//       </div>

//       {/* GRID */}
//       <div
//         className={`
//           grid
//           gap-y-4 sm:gap-y-6 lg:gap-y-[30px]
//           gap-x-4 sm:gap-x-6 lg:gap-x-[87px]
//           ${columns === 1 ? "grid-cols-1" : ""}
//           ${columns === 2 ? "grid-cols-2" : ""}
//           ${columns === 3 ? "grid-cols-3" : ""}
//         `}
//       >
//         {visibleTags.map((tag) => (
//           <TagCard key={tag.id} {...tag} />
//         ))}
//       </div>

//       {/* PAGINATION DOTS (PHONE + TABLET ONLY) */}
//       {columns !== 3 && (
//         <div className="flex justify-center gap-2 mt-6 mb-6">
//           {Array.from({ length: totalPages }).map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setPage(index)}
//               className={`w-4 h-4 rounded-full transition ${
//                 index === page ? "bg-[#8967B3]" : "bg-[#CFCFCF]"
//               }`}
//             />
//           ))}
//         </div>
//       )}
//     </section>
//   );
// }

import { useEffect, useState } from "react";
import TagCard from "../cards/TagCard";
import popularTagsDetailIcon from "../../assets/icons/popularTagsDetailIcon.svg";
import { Link } from "react-router-dom";
import { TAGS } from "../../utils/tags.data";

export default function PopularTags() {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(9);
  const [columns, setColumns] = useState(3);

  // ✅ DOT STATE (same rule as LatestJobs)
  const [activeDot, setActiveDot] = useState("left"); // default purple

  /* ------------------------------------------------
     RESPONSIVE RULES
     <640      → 1 col × 3 rows
     640–1279  → 2 col × 3 rows
     ≥1280     → 3 col × 3 rows (NO pagination)
  -------------------------------------------------*/
  useEffect(() => {
    const updateLayout = () => {
      if (window.innerWidth < 640) {
        setColumns(1);
        setPageSize(3);
      } else if (window.innerWidth < 1280) {
        setColumns(2);
        setPageSize(4);
      } else {
        setColumns(3);
        setPageSize(6);
      }
      setPage(0);
      setActiveDot("left"); // reset dot on resize
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const totalPages = Math.ceil(TAGS.length / pageSize);

  const visibleTags =
    columns === 3
      ? TAGS.slice(0, 6)
      : TAGS.slice(page * pageSize, page * pageSize + pageSize);

  const hiddenCount =
    columns === 3
      ? TAGS.length - 6
      : TAGS.length - (page * pageSize + visibleTags.length);

  const goPrev = () => {
    if (page > 0) setPage(page - 1);
  };

  const goNext = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  return (
    <section className="bg-[#F7F7F7] px-4 sm:px-8 lg:px-[72px] pb-6 lg:pb-[30px]">
      {/* HEADER */}
      <div className="flex items-center justify-between pt-2 lg:pt-[25px] mb-4 lg:mb-[30px]">
        <h2 className="text-lg sm:text-2xl lg:text-[38px] font-kantumruy font-medium">
          Popular tags
        </h2>

        <Link
          to="/tags"
          className="flex items-center gap-2 lg:gap-3 font-kantumruy font-medium text-[15px] sm:text-[20px] lg:text-[27px]"
        >
          <span className="relative">
            {hiddenCount > 0 ? `${hiddenCount}+ more tags` : "View all tags"}
            <span className="absolute left-0 -bottom-[5px] lg:-bottom-[7.5px] w-[40px] lg:w-[54px] h-[4px] lg:h-[5.4px] bg-[#8967B3]" />
          </span>

          <img
            src={popularTagsDetailIcon}
            alt="more tags"
            className="w-[7px] h-[12px] lg:w-[9px] lg:h-[16px]"
          />
        </Link>
      </div>

      {/* GRID */}
      <div
        className={`
          grid
          gap-y-4 sm:gap-y-6 lg:gap-y-[30px]
          gap-x-4 sm:gap-x-6 lg:gap-x-[87px]
          ${columns === 1 ? "grid-cols-1" : ""}
          ${columns === 2 ? "grid-cols-2" : ""}
          ${columns === 3 ? "grid-cols-3" : ""}
        `}
      >
        {visibleTags.map((tag) => (
          <TagCard key={tag.id} {...tag} />
        ))}
      </div>

      {/* ✅ FIXED 3 DOT PAGINATION (MOBILE + TABLET) */}
      {columns !== 3 && totalPages > 1 && (
        <div className="flex justify-center gap-3 mt-6 mb-6">
          {/* LEFT DOT — previous */}
          <button
            onClick={() => {
              goPrev();
              setActiveDot("left");
            }}
            className={`w-4 h-4 rounded-full transition
              ${activeDot === "left" ? "bg-[#8967B3]" : "bg-[#CFCFCF]"}`}
          />

          {/* MIDDLE DOT — no navigation */}
          <button
            onClick={() => setActiveDot("middle")}
            className={`w-4 h-4 rounded-full transition
              ${activeDot === "middle" ? "bg-[#8967B3]" : "bg-[#CFCFCF]"}`}
          />

          {/* RIGHT DOT — next */}
          <button
            onClick={() => {
              goNext();
              setActiveDot("right");
            }}
            className={`w-4 h-4 rounded-full transition
              ${activeDot === "right" ? "bg-[#8967B3]" : "bg-[#CFCFCF]"}`}
          />
        </div>
      )}
    </section>
  );
}
