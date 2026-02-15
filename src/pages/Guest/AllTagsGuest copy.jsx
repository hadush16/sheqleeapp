// import Breadcrumb from "../../components/ui/Breadcrumb";
// import TagCard from "../../components/cards/TagCard";
// import Pagination from "../../components/ui/Pagination";

// import allTagsIcon from "../../assets/icons/allTagsIcon.svg";
// import { TAGS } from "../../utils/tags.data";

// export default function AllTagsGuest() {
//   return (
//     <>
//       {/* Breadcrumb */}
//       <Breadcrumb sectionLabel="Tags" sectionTo="/tags" current="All" />

//       {/* Header */}
//       <section className="w-full py-[60px] text-center">
//         <div className="max-w-7xl mx-auto px-[72px]">
//           <img
//             src={allTagsIcon}
//             alt="All Tags"
//             className="mx-auto mb-6 w-[64px] h-[64px]"
//           />

//           <h1 className="text-[35px] font-kantumruy font-semibold">All Tags</h1>

//           <p className="mt-4 text-[27px] max-w-xl mx-auto opacity-80">
//             Job tags along with their respective number of jobs posted and
//             number of subscribers.
//           </p>
//         </div>
//       </section>

//       {/* Tags Grid */}
//       <section className="px-[72px] pb-[80px]">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[87px] gap-y-[30px]">
//           {TAGS.map((tag) => (
//             <TagCard key={tag.id} {...tag} />
//           ))}
//         </div>
//       </section>

//       {/* Pagination */}
//       <Pagination currentPage={1} totalPages={40} onPageChange={() => {}} />
//     </>
//   );
// }

// import Breadcrumb from "../../components/ui/Breadcrumb";
// import TagCard from "../../components/cards/TagCard";
// import Pagination from "../../components/ui/Pagination";

// import allTagsIcon from "../../assets/icons/allTagsIcon.svg";
// import { TAGS } from "../../utils/tags.data";

// export default function AllTagsGuest() {
//   return (
//     <>
//       {/* Breadcrumb (hidden on small screens) */}
//       <Breadcrumb items={[{ label: "Sheqlee", to: "/" }, { label: "Tags" }]} />

//       {/* HEADER */}
//       <section
//         className="
//           w-full

//           lg:pb-[52px]
//           md:py-[44px]
//           sm:py-[36px]
//           max-sm:py-[24px]
//         "
//       >
//         <div
//           className="
//             max-w-7xl mx-auto
//             px-[72px]
//             xl:px-[64px]
//             lg:px-[48px]
//             md:px-[36px]
//             sm:px-[24px]
//             max-sm:px-[14px]
//             text-center
//           "
//         >
//           {/* ICON */}
//           <img
//             src={allTagsIcon}
//             alt="All Tags"
//             className="
//               mx-auto mb-6
//               w-[70px] h-[70px]
//               lg:w-[75px] lg:h-[75px]
//               md:w-[56px] md:h-[56px]
//               sm:w-[48px] sm:h-[48px]
//               max-sm:w-[36px] max-sm:h-[36px]
//             "
//           />

//           {/* TITLE */}
//           <h1
//             className="
//               text-[35px]
//               xl:text-[45px]
//               lg:text-[32px]
//               md:text-[28px]
//               sm:text-[24px]
//               max-sm:text-[18px]
//               font-kantumruy
//               font-semibold
//             "
//           >
//             All Tags
//           </h1>

//           {/* DESCRIPTION */}
//           <p
//             className="
//               my-3

//               max-w-xl mx-auto
//               text-[23px]
//               xl:text-[26px]
//               lg:text-[20px]
//               md:text-[18px]
//               sm:text-[16px]
//               max-sm:text-[13px]
//               leading-[32px]
//               lg:leading-[33px]
//               md:leading-[28px]
//               sm:leading-[24px]
//               max-sm:leading-[20px]
//             "
//           >
//             Job tags along with their respective number of jobs posted and
//             number of subscribers.
//           </p>
//         </div>
//       </section>

//       {/* TAGS GRID */}
//       <section
//         className="
//           max-w-8xl mx-auto
//           px-[30px]

//           md:px-[36px]
//           sm:px-[24px]
//           max-sm:px-[14px]
//           pb-[80px]
//         "
//       >
//         <div
//           className="
//             grid
//             grid-cols-1
//             xl:grid-cols-3
//             md:grid-cols-2
//             sm:grid-cols-1
//             max-sm:grid-cols-1

//             gap-x-[87px]
//             xl:gap-x-[64px]
//             lg:gap-x-[48px]
//             md:gap-x-[32px]
//             sm:gap-x-0
//             max-sm:gap-x-0

//             gap-y-[30px]
//             md:gap-y-[24px]
//             sm:gap-y-[18px]
//             max-sm:gap-y-[14px]
//           "
//         >
//           {TAGS.map((tag) => (
//             <TagCard
//               key={tag.id}
//               id={tag.id}
//               name={tag.name}
//               jobs={tag.jobs}
//               subscribers={tag.subscribers}
//             />
//           ))}
//         </div>
//       </section>

//       {/* PAGINATION */}
//       <div className="px-[14px] sm:px-0 pb-[60px]">
//         <Pagination currentPage={1} totalPages={3} onPageChange={() => {}} />
//       </div>
//     </>
//   );
// }

import { useState, useEffect } from "react";

import Breadcrumb from "../../components/ui/Breadcrumb";
import TagCard from "../../components/cards/TagCard";
import Pagination from "../../components/ui/Pagination";

import allTagsIcon from "../../assets/icons/allTagsIcon.svg";
import { TAGS } from "../../utils/tags.data";

export default function AllTagsGuest() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(24);
  const [columns, setColumns] = useState(3);

  // Responsive layout logic
  useEffect(() => {
    const updateLayout = () => {
      const w = window.innerWidth;

      if (w < 768) {
        setColumns(1);
        setPageSize(10);
      } else if (w < 1280) {
        setColumns(2);
        setPageSize(16);
      } else {
        setColumns(3);
        setPageSize(24);
      }

      setPage(1); // reset page when resizing
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const totalPages = Math.ceil(TAGS.length / pageSize);
  const visibleTags = TAGS.slice((page - 1) * pageSize, page * pageSize);

  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: "Sheqlee", to: "/" }, { label: "Tags" }]} />

      {/* HEADER */}
      <section className="w-full lg:pb-[52px] md:py-[44px] sm:py-[36px] max-sm:py-[24px]">
        <div className="max-w-7xl mx-auto px-[72px] xl:px-[64px] lg:px-[48px] md:px-[36px] sm:px-[24px] max-sm:px-[14px] text-center">
          <img
            src={allTagsIcon}
            alt="All Tags"
            className="mx-auto mb-6 w-[70px] h-[70px] lg:w-[75px] lg:h-[75px] md:w-[56px] md:h-[56px] sm:w-[48px] sm:h-[48px] max-sm:w-[36px] max-sm:h-[36px]"
          />

          <h1 className="text-[35px] xl:text-[45px] lg:text-[32px] md:text-[28px] sm:text-[24px] max-sm:text-[18px] font-kantumruy font-semibold">
            All Tags
          </h1>

          <p className="my-3 max-w-xl mx-auto text-[23px] xl:text-[26px] lg:text-[20px] md:text-[18px] sm:text-[16px] max-sm:text-[13px] leading-[32px] lg:leading-[33px] md:leading-[28px] sm:leading-[24px] max-sm:leading-[20px]">
            Job tags along with their respective number of jobs posted and
            number of subscribers.
          </p>
        </div>
      </section>

      {/* TAGS GRID */}
      <section className="max-w-8xl mx-auto px-[30px] md:px-[36px] sm:px-[24px] max-sm:px-[14px] pb-[80px]">
        <div
          className={`
            grid
            gap-x-[87px]
            xl:gap-x-[64px]
            lg:gap-x-[48px]
            md:gap-x-[32px]
            sm:gap-x-0
            max-sm:gap-x-0

            gap-y-[30px]
            md:gap-y-[24px]
            sm:gap-y-[18px]
            max-sm:gap-y-[14px]

            ${columns === 1 ? "grid-cols-1" : ""}
            ${columns === 2 ? "grid-cols-2" : ""}
            ${columns === 3 ? "grid-cols-3" : ""}
          `}
        >
          {visibleTags.map((tag) => (
            <TagCard
              key={tag.id}
              id={tag.id}
              name={tag.name}
              jobs={tag.jobs}
              subscribers={tag.subscribers}
              bgClass="bg-[#F7F7F7]"
            />
          ))}
        </div>
      </section>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="px-[14px] sm:px-0 pb-[60px]">
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </div>
      )}
    </>
  );
}
