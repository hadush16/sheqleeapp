// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import JobCard from "../cards/JobCard";
// import latestJobsDetaiIcon from "../../assets/icons/latestJobsDetaiIcon.svg";
// import { JOBS } from "../../utils/mockJobs";

// export default function LatestJobs({ jobs }) {
//   const jobList = Array.isArray(jobs) ? jobs : JOBS;

//   const [page, setPage] = useState(0);
//   const [pageSize, setPageSize] = useState(9);
//   const [columns, setColumns] = useState(3);

//   useEffect(() => {
//     const updateLayout = () => {
//       if (window.innerWidth < 640) {
//         setColumns(1);
//         setPageSize(3);
//       } else if (window.innerWidth > 640 && window.innerWidth < 1024) {
//         setColumns(1);
//         setPageSize(3);
//       } else if (window.innerWidth < 1280) {
//         setColumns(2);
//         setPageSize(6);
//       } else {
//         setColumns(3);
//         setPageSize(9);
//       }
//       setPage(0);
//     };

//     updateLayout();
//     window.addEventListener("resize", updateLayout);
//     return () => window.removeEventListener("resize", updateLayout);
//   }, []);

//   const totalPages = Math.ceil(JOBS.length / pageSize);

//   const visibleJOBS =
//     columns === 3
//       ? JOBS.slice(0, 9) // desktop → always first 9
//       : JOBS.slice(page * pageSize, page * pageSize + pageSize);

//   const hiddenCount =
//     columns === 3
//       ? JOBS.length - 9
//       : JOBS.length - (page * pageSize + visibleJOBS.length);

//   return (
//     <section className="mt-6 lg:mt-[41px] px-4 sm:px-8 lg:px-[72px] mb-[38px] lg:max-w-9xl">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-12 lg:mb-[45px]">
//         <h2 className="text-lg sm:text-2xl lg:text-[38px] font-kantumruy font-medium">
//           Latest job posts
//         </h2>

//         <Link
//           to="/jobs"
//           className="flex items-center gap-2 lg:gap-3 font-kantumruy font-medium text-[15px] sm:text-[20px] lg:text-[22px]"
//         >
//           <span className="relative">
//             {hiddenCount > 0 ? `${hiddenCount}+ more Jobs` : "View all Jobs"}
//             <span className="absolute left-0 -bottom-[5px] lg:-bottom-[7.5px] w-[40px] lg:w-[70px] h-[4px] lg:h-[5.4px] bg-[#8967B3]" />
//           </span>

//           <img
//             src={latestJobsDetaiIcon}
//             alt="More latest jobs icon to show all the list jobs"
//             className="w-[7px] h-[12px] lg:w-[9px] lg:h-[16px]"
//           />
//         </Link>
//       </div>

//       {/* Grid */}
//       <div
//         className={`

//           grid
//           grid-cols-1
//           sm:grid-cols-1
//           lg:grid-cols-2
//           xl:grid-cols-3

//           nest-hub:mx-auto
//           ipad-pro:grid-cols-1
//           gap-y-6 lg:gap-y-[38px]
//           gap-x-4 sm:gap-x-6 lg:gap-x-[49px]

//           ${columns === 1 ? "grid-cols-1" : ""}
//           ${columns === 2 ? "grid-cols-2" : ""}
//           ${columns === 3 ? "grid-cols-3" : ""}

//         `}
//       >
//         {visibleJOBS.map((job) => (
//           <JobCard key={job.id} job={job} />
//         ))}
//       </div>

//       {/* Mobile pagination */}
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
import { Link } from "react-router-dom";
import JobCard from "../cards/JobCard";
import latestJobsDetaiIcon from "../../assets/icons/latestJobsDetaiIcon.svg";
import { JOBS } from "../../utils/mockJobs";

export default function LatestJobs({ jobs }) {
  const jobList = Array.isArray(jobs) ? jobs : JOBS;

  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(9);
  const [columns, setColumns] = useState(3);
  const [activeDot, setActiveDot] = useState("left");

  useEffect(() => {
    const updateLayout = () => {
      const w = window.innerWidth;

      if (w < 640) {
        setColumns(1);
        setPageSize(3);
      } else if (w < 1024) {
        setColumns(1);
        setPageSize(3);
      } else if (w < 1280) {
        setColumns(2);
        setPageSize(6);
      } else {
        setColumns(3);
        setPageSize(9);
      }

      setPage(0);
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const totalPages = Math.ceil(jobList.length / pageSize);

  const visibleJOBS =
    columns === 3
      ? jobList.slice(0, 9)
      : jobList.slice(page * pageSize, page * pageSize + pageSize);

  const hiddenCount =
    columns === 3
      ? jobList.length - 9
      : jobList.length - (page * pageSize + visibleJOBS.length);

  const goPrev = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const goNext = () => {
    if (page < totalPages - 1) {
      setPage(page + 1);
    }
  };

  return (
    <section className="mt-6 lg:mt-[41px] px-4 sm:px-8 lg:px-[72px] mb-[38px] lg:max-w-9xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-12 lg:mb-[45px]">
        <h2 className="text-lg sm:text-2xl lg:text-[38px] font-kantumruy font-medium">
          Latest job posts
        </h2>

        <Link
          to="/jobs"
          className="flex items-center gap-2 lg:gap-3 font-kantumruy font-medium text-[15px] sm:text-[20px] lg:text-[22px]"
        >
          <span className="relative">
            {hiddenCount > 0 ? `${hiddenCount}+ more Jobs` : "View all Jobs"}
            <span className="absolute left-0 -bottom-[5px] lg:-bottom-[7.5px] w-[40px] lg:w-[70px] h-[4px] lg:h-[5.4px] bg-[#8967B3]" />
          </span>

          <img
            src={latestJobsDetaiIcon}
            alt="More latest jobs"
            className="w-[7px] h-[12px] lg:w-[9px] lg:h-[16px]"
          />
        </Link>
      </div>

      {/* Grid */}
      <div
        className={`
          grid
          gap-y-6 lg:gap-y-[38px]
          gap-x-4 sm:gap-x-6 lg:gap-x-[49px]
          ${columns === 1 ? "grid-cols-1" : ""}
          ${columns === 2 ? "grid-cols-2" : ""}
          ${columns === 3 ? "grid-cols-3" : ""}
        `}
      >
        {visibleJOBS.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      {/* ✅ Fixed 3-dot mobile pagination */}
      {columns !== 3 && totalPages > 1 && (
        <div className="flex justify-center gap-3 mt-6 mb-6">
          {/* LEFT DOT — previous (default active) */}
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
