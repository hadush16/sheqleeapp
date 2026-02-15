// import { useQuery } from "@tanstack/react-query";
// import { useState } from "react";
// import { getJobsByTag } from "../../services/jobs.service";

// import JobFilterForm from "../../components/forms/JobFilterForm";

// import Pagination from "../../components/ui/Pagination";
// import DeveloperCTA from "../../components/home/DeveloperCTA";
// import JobCard from "../../components/cards/JobCard";

// import noResultsIcon from "../../assets/icons/noResultsIcon.svg";
// import PlatformStatus from "../../components/home/PlatformStats";
// import { JOBS } from "../../utils/mockJobs";

// export default function AllJobsGuest() {
//   const { data } = useQuery({
//     queryKey: ["jobs"],
//     queryFn: getJobsByTag,
//   });

//   const jobs = Array.isArray(data) ? data : [];

//   const [filters, setFilters] = useState(null);

//   const titleOptions = [
//     ...new Set(jobs.map((j) => j.title)),
//     "NotExistingJob",
//   ].map((t) => ({ label: t, value: t }));

//   const typeOptions = [
//     ...new Set(jobs.map((j) => j.type)),
//     "NotExistingType",
//   ].map((t) => ({
//     label: t,
//     value: t,
//   }));

//   const levelOptions = [...new Set(jobs.map((j) => j.level))].map((l) => ({
//     label: l,
//     value: l,
//   }));

//   const filteredJobs =
//     filters === null
//       ? jobs
//       : jobs.filter((job) => {
//           const titleMatch = !filters.title || job.title === filters.title;
//           const typeMatch = !filters.type || job.type === filters.type;
//           const levelMatch = !filters.level || job.level === filters.level;

//           const searchMatch =
//             !filters.search ||
//             job.title.toLowerCase().includes(filters.search.toLowerCase()) ||
//             job.description
//               .toLowerCase()
//               .includes(filters.search.toLowerCase());

//           return titleMatch && typeMatch && levelMatch && searchMatch;
//         });

//   const showNoResults = filters && filteredJobs.length === 0;

//   return (
//     <>
//       <JobFilterForm
//         onApply={setFilters}
//         titleOptions={titleOptions}
//         typeOptions={typeOptions}
//         levelOptions={levelOptions}
//       />
//       {showNoResults ? (
//         <div className="flex flex-col items-center ">
//           <img src={noResultsIcon} className="w-24 mb-6" />
//           <p className="text-[22px]">No results found</p>
//         </div>
//       ) : (
{
  /* <>
  <section className="px-4 sm:px-8 md:px-[48px] lg:px-[72px] py-[80px]">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
      {JOBS.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  </section>

  <Pagination currentPage={1} totalPages={10} onPageChange={() => {}} />
</> */
}
//       )}
//       <DeveloperCTA />
//       {showNoResults || <PlatformStatus />}
//     </>
//   );
// }

import { useState, useEffect } from "react";

import JobFilterForm from "../../components/forms/JobFilterForm";
import Pagination from "../../components/ui/Pagination";
import DeveloperCTA from "../../components/home/DeveloperCTA";
import JobCard from "../../components/cards/JobCard";

import noResultsIcon from "../../assets/icons/noResultsIcon.svg";
import { JOBS } from "../../utils/mockJobs";

/* jobAreas stays the same – unchanged */
// Job area → titles mapping
const jobAreas = {
  Frontend: [
    "Frontend Developer",
    "UI Developer",
    "React Developer",
    "Angular Developer",
    "Vue.js Developer",
  ],
  Backend: [
    "Backend Developer",
    "API Developer",
    "Node.js Developer",
    "Java Developer",
    "Python Developer",
    "PHP Developer",
  ],
  "Full Stack": ["Full Stack Developer"],
  "Mobile Development": [
    "Mobile App Developer",
    "Android Developer",
    "iOS Developer",
    "Flutter Developer",
    "React Native Developer",
  ],
  "DevOps & Infrastructure": [
    "DevOps Engineer",
    "Cloud Engineer",
    "Site Reliability Engineer (SRE)",
    "Platform Engineer",
    "Build & Release Engineer",
  ],
  "Quality & Testing": [
    "QA Engineer",
    "Quality Assurance Analyst",
    "Test Engineer",
    "Automation Test Engineer",
    "Manual Tester",
  ],
  "Data & AI": [
    "Data Analyst",
    "Data Engineer",
    "Machine Learning Engineer",
    "AI Engineer",
    "Data Scientist",
  ],
  Security: [
    "Security Engineer",
    "Application Security Engineer",
    "Cybersecurity Analyst",
    "Penetration Tester",
  ],
  "Game & Specialized Development": [
    "Game Developer",
    "AR/VR Developer",
    "Embedded Systems Developer",
    "Firmware Engineer",
  ],
  "Design & UX": ["UI/UX Designer", "Product Designer", "Interaction Designer"],
  "Management & Architecture": [
    "Software Architect",
    "Solutions Architect",
    "Engineering Manager",
    "Technical Project Manager",
    "Product Manager (technical)",
  ],
  "Emerging / Modern Titles": [
    "Web3 Developer",
    "Blockchain Developer",
    "AI Prompt Engineer",
    "Low-Code / No-Code Developer",
  ],
};

export default function AllJobsGuest({ jobs }) {
  const jobList = Array.isArray(jobs) ? jobs : JOBS;

  /* ---------------- FILTER STATE ---------------- */
  // const [draftFilters, setDraftFilters] = useState({
  //   title: "",
  //   type: "",
  //   level: "",
  //   search: "",
  // });

  const EMPTY_FILTERS = {
    title: "",
    type: "",
    level: "",
    search: "",
  };

  const [draftFilters, setDraftFilters] = useState(EMPTY_FILTERS);

  const [appliedFilters, setAppliedFilters] = useState(null);

  const titleOptions = Object.keys(jobAreas).map((area) => ({
    label: area,
    value: area,
  }));

  const typeOptions = [...new Set(jobList.map((j) => j.type))].map((t) => ({
    label: t,
    value: t,
  }));

  const levelOptions = [...new Set(jobList.map((j) => j.level))].map((l) => ({
    label: l,
    value: l,
  }));

  /* ---------------- PAGINATION STATE ---------------- */
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(18);
  const [columns, setColumns] = useState(3);

  /* ---------------- RESPONSIVE LAYOUT ---------------- */
  useEffect(() => {
    const updateLayout = () => {
      const w = window.innerWidth;

      if (w < 1024) {
        setColumns(1);
        setPageSize(6);
      } else if (w < 1280) {
        setColumns(2);
        setPageSize(12);
      } else {
        setColumns(3);
        setPageSize(18);
      }

      setPage(1);
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  /* ---------------- FILTER LOGIC ---------------- */
  const filteredJobs = appliedFilters
    ? jobList.filter((job) => {
        const titleMatch =
          !appliedFilters.title ||
          jobAreas[appliedFilters.title]?.includes(job.title);

        const typeMatch =
          !appliedFilters.type || job.type === appliedFilters.type;

        const levelMatch =
          !appliedFilters.level || job.level === appliedFilters.level;

        const search = appliedFilters.search?.toLowerCase() || "";

        const searchMatch =
          !search ||
          job.title?.toLowerCase().includes(search) ||
          job.description?.toLowerCase().includes(search) ||
          job.skills?.some((s) => s?.toLowerCase().includes(search)) ||
          job.tags?.some((t) => t?.toLowerCase().includes(search));

        return titleMatch && typeMatch && levelMatch && searchMatch;
      })
    : jobList;

  const totalPages = Math.ceil(filteredJobs.length / pageSize);

  const visibleJobs = filteredJobs.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  const showNoResults = filteredJobs.length === 0;

  return (
    <>
      <JobFilterForm
        filters={draftFilters}
        onChange={setDraftFilters}
        titleOptions={titleOptions}
        typeOptions={typeOptions}
        levelOptions={levelOptions}
        onApply={() => {
          setAppliedFilters(draftFilters); // apply filter
          setDraftFilters(EMPTY_FILTERS); // ✅ RESET UI
          setPage(1); // reset pagination
        }}
      />

      {showNoResults ? (
        <div className="flex flex-col items-center my-[120px]">
          <img src={noResultsIcon} className="w-[60px] mb-6" />
          <p className="text-[30px]">No results found</p>
        </div>
      ) : (
        <>
          <section className="px-4 sm:px-8 md:px-[48px] lg:px-[72px] py-[80px]">
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
              {visibleJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </section>

          {totalPages > 1 && (
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          )}
        </>
      )}

      <DeveloperCTA />
    </>
  );
}

// import { useQuery } from "@tanstack/react-query";
// import { useState } from "react";
// import { getJobsByTag } from "../../services/jobs.service";

// import JobFilterForm from "../../components/forms/JobFilterForm";
// import Pagination from "../../components/ui/Pagination";
// import DeveloperCTA from "../../components/home/DeveloperCTA";
// import JobCard from "../../components/cards/JobCard";

// import noResultsIcon from "../../assets/icons/noResultsIcon.svg";
// import PlatformStatus from "../../components/home/PlatformStats";
// import { JOBS } from "../../utils/mockJobs";

// // Job area → titles mapping
// const jobAreas = {
//   Frontend: [
//     "Frontend Developer",
//     "UI Developer",
//     "React Developer",
//     "Angular Developer",
//     "Vue.js Developer",
//   ],
//   Backend: [
//     "Backend Developer",
//     "API Developer",
//     "Node.js Developer",
//     "Java Developer",
//     "Python Developer",
//     "PHP Developer",
//   ],
//   "Full Stack": ["Full Stack Developer"],
//   "Mobile Development": [
//     "Mobile App Developer",
//     "Android Developer",
//     "iOS Developer",
//     "Flutter Developer",
//     "React Native Developer",
//   ],
//   "DevOps & Infrastructure": [
//     "DevOps Engineer",
//     "Cloud Engineer",
//     "Site Reliability Engineer (SRE)",
//     "Platform Engineer",
//     "Build & Release Engineer",
//   ],
//   "Quality & Testing": [
//     "QA Engineer",
//     "Quality Assurance Analyst",
//     "Test Engineer",
//     "Automation Test Engineer",
//     "Manual Tester",
//   ],
//   "Data & AI": [
//     "Data Analyst",
//     "Data Engineer",
//     "Machine Learning Engineer",
//     "AI Engineer",
//     "Data Scientist",
//   ],
//   Security: [
//     "Security Engineer",
//     "Application Security Engineer",
//     "Cybersecurity Analyst",
//     "Penetration Tester",
//   ],
//   "Game & Specialized Development": [
//     "Game Developer",
//     "AR/VR Developer",
//     "Embedded Systems Developer",
//     "Firmware Engineer",
//   ],
//   "Design & UX": ["UI/UX Designer", "Product Designer", "Interaction Designer"],
//   "Management & Architecture": [
//     "Software Architect",
//     "Solutions Architect",
//     "Engineering Manager",
//     "Technical Project Manager",
//     "Product Manager (technical)",
//   ],
//   "Emerging / Modern Titles": [
//     "Web3 Developer",
//     "Blockchain Developer",
//     "AI Prompt Engineer",
//     "Low-Code / No-Code Developer",
//   ],
// };

// export default function AllJobsGuest() {
//   const { data } = useQuery({ queryKey: ["jobs"], queryFn: getJobsByTag });
//   const jobs = Array.isArray(data) ? data : JOBS;

//   const [filters, setFilters] = useState({
//     title: "",
//     type: "",
//     level: "",
//     search: "",
//   });
//   const [currentPage, setCurrentPage] = useState(1);

//   // Pagination config
//   const rowsPerPage = 3;
//   const columns = 3;
//   const cardsPerPage = rowsPerPage * columns;

//   const titleOptions = Object.keys(jobAreas).map((area) => ({
//     label: area,
//     value: area,
//   }));
//   const typeOptions = [...new Set(jobs.map((j) => j.type))].map((t) => ({
//     label: t,
//     value: t,
//   }));
//   const levelOptions = [...new Set(jobs.map((j) => j.level))].map((l) => ({
//     label: l,
//     value: l,
//   }));

//   // FILTER LOGIC
//   const filteredJobs = jobs.filter((job) => {
//     const titleMatch =
//       !filters.title || jobAreas[filters.title]?.includes(job.title);
//     const typeMatch = !filters.type || job.type === filters.type;
//     const levelMatch = !filters.level || job.level === filters.level;
//     const search = filters.search?.toLowerCase() || "";
//     const searchMatch =
//       !search ||
//       (job.title?.toLowerCase() || "").includes(search) ||
//       (job.description?.toLowerCase() || "").includes(search) ||
//       job.skills?.some((s) => (s?.toLowerCase() || "").includes(search)) ||
//       job.tags?.some((t) => (t?.toLowerCase() || "").includes(search));
//     return titleMatch && typeMatch && levelMatch && searchMatch;
//   });

//   // PAGINATION LOGIC
//   const totalPages = Math.ceil(filteredJobs.length / cardsPerPage);
//   const startIndex = (currentPage - 1) * cardsPerPage;
//   const paginatedJobs = filteredJobs.slice(
//     startIndex,
//     startIndex + cardsPerPage
//   );

//   const showNoResults = filteredJobs.length === 0;

//   return (
//     <>
//       <JobFilterForm
//         onApply={(f) => {
//           setFilters(f);
//           setCurrentPage(1); // reset page
//         }}
//         titleOptions={titleOptions}
//         typeOptions={typeOptions}
//         levelOptions={levelOptions}
//       />

//       {showNoResults ? (
//         <div className="flex flex-col items-center mt-20">
//           <img src={noResultsIcon} className="w-24 mb-6" />
//           <p className="text-[22px]">No results found</p>
//         </div>
//       ) : (
//         <>
//           <section className="px-4 sm:px-8 md:px-[48px] lg:px-[72px] py-[80px]">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
//               {JOBS.map((job) => (
//                 <JobCard key={job.id} job={job} />
//               ))}
//             </div>
//           </section>

//           <Pagination
//             currentPage={currentPage}
//             totalPages={totalPages}
//             onPageChange={setCurrentPage}
//           />
//         </>
//       )}

//       <DeveloperCTA />
//       {!showNoResults && <PlatformStatus />}
//     </>
//   );
// }

// import { useEffect, useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// import { getJobsByTag } from "../../services/jobs.service";

// import JobFilterForm from "../../components/forms/JobFilterForm";
// import Pagination from "../../components/ui/Pagination";
// import DeveloperCTA from "../../components/home/DeveloperCTA";
// import JobCard from "../../components/cards/JobCard";

// import noResultsIcon from "../../assets/icons/noResultsIcon.svg";
// import { JOBS } from "../../utils/mockJobs";

// const jobAreas = {
//   Frontend: [
//     "Frontend Developer",
//     "UI Developer",
//     "React Developer",
//     "Angular Developer",
//     "Vue.js Developer",
//   ],
//   Backend: [
//     "Backend Developer",
//     "API Developer",
//     "Node.js Developer",
//     "Java Developer",
//     "Python Developer",
//     "PHP Developer",
//   ],
//   "Full Stack": ["Full Stack Developer"],
//   "Mobile Development": [
//     "Mobile App Developer",
//     "Android Developer",
//     "iOS Developer",
//     "Flutter Developer",
//     "React Native Developer",
//   ],
//   "DevOps & Infrastructure": [
//     "DevOps Engineer",
//     "Cloud Engineer",
//     "Site Reliability Engineer (SRE)",
//     "Platform Engineer",
//     "Build & Release Engineer",
//   ],
//   "Quality & Testing": [
//     "QA Engineer",
//     "Quality Assurance Analyst",
//     "Test Engineer",
//     "Automation Test Engineer",
//     "Manual Tester",
//   ],
//   "Data & AI": [
//     "Data Analyst",
//     "Data Engineer",
//     "Machine Learning Engineer",
//     "AI Engineer",
//     "Data Scientist",
//   ],
//   Security: [
//     "Security Engineer",
//     "Application Security Engineer",
//     "Cybersecurity Analyst",
//     "Penetration Tester",
//   ],
//   "Game & Specialized Development": [
//     "Game Developer",
//     "AR/VR Developer",
//     "Embedded Systems Developer",
//     "Firmware Engineer",
//   ],
//   "Design & UX": ["UI/UX Designer", "Product Designer", "Interaction Designer"],
//   "Management & Architecture": [
//     "Software Architect",
//     "Solutions Architect",
//     "Engineering Manager",
//     "Technical Project Manager",
//     "Product Manager (technical)",
//   ],
//   "Emerging / Modern Titles": [
//     "Web3 Developer",
//     "Blockchain Developer",
//     "AI Prompt Engineer",
//     "Low-Code / No-Code Developer",
//   ],
// };

// export default function AllJobsGuest() {
//   const { data } = useQuery({ queryKey: ["jobs"], queryFn: getJobsByTag });
//   const jobs = Array.isArray(data) ? data : JOBS;

//   const [filters, setFilters] = useState({
//     title: "",
//     type: "",
//     level: "",
//     search: "",
//   });
//   const [currentPage, setCurrentPage] = useState(1);
//   const [columns, setColumns] = useState(3);
//   const rowsPerPage = 6; // fixed

//   const [cardsPerPage, setCardsPerPage] = useState(rowsPerPage * columns);

//   // Responsive columns
//   useEffect(() => {
//     const updateLayout = () => {
//       const w = window.innerWidth;
//       if (w < 600) setColumns(1);
//       else if (w < 1024) setColumns(2);
//       else setColumns(3);

//       setCurrentPage(1);
//     };
//     updateLayout();
//     window.addEventListener("resize", updateLayout);
//     return () => window.removeEventListener("resize", updateLayout);
//   }, []);

//   // Update cards per page whenever columns change
//   useEffect(() => {
//     setCardsPerPage(rowsPerPage * columns);
//   }, [columns]);

//   const titleOptions = Object.keys(jobAreas).map((area) => ({
//     label: area,
//     value: area,
//   }));
//   const typeOptions = [...new Set(jobs.map((j) => j.type))].map((t) => ({
//     label: t,
//     value: t,
//   }));
//   const levelOptions = [...new Set(jobs.map((j) => j.level))].map((l) => ({
//     label: l,
//     value: l,
//   }));

//   // FILTER LOGIC
//   const filteredJobs = jobs.filter((job) => {
//     const titleMatch =
//       !filters.title || jobAreas[filters.title]?.includes(job.title);
//     const typeMatch = !filters.type || job.type === filters.type;
//     const levelMatch = !filters.level || job.level === filters.level;
//     const search = filters.search?.toLowerCase() || "";
//     const searchMatch =
//       !search ||
//       (job.title?.toLowerCase() || "").includes(search) ||
//       (job.description?.toLowerCase() || "").includes(search) ||
//       job.skills?.some((s) => (s?.toLowerCase() || "").includes(search)) ||
//       job.tags?.some((t) => (t?.toLowerCase() || "").includes(search));
//     return titleMatch && typeMatch && levelMatch && searchMatch;
//   });

//   const totalPages = Math.ceil(filteredJobs.length / cardsPerPage);
//   const startIndex = (currentPage - 1) * cardsPerPage;
//   const paginatedJobs = filteredJobs.slice(
//     startIndex,
//     startIndex + cardsPerPage
//   );

//   const showNoResults = filteredJobs.length === 0;

//   return (
//     <>
//       <JobFilterForm
//         onApply={(f) => {
//           setFilters(f);
//           setCurrentPage(1);
//         }}
//         titleOptions={titleOptions}
//         typeOptions={typeOptions}
//         levelOptions={levelOptions}
//       />

//       {showNoResults ? (
//         <div className="flex flex-col items-center mt-20">
//           <img src={noResultsIcon} className="w-24 mb-6" />
//           <p className="text-[22px]">No results found</p>
//         </div>
//       ) : (
//         <>
//           <section className="px-4 sm:px-8 md:px-[48px] lg:px-[72px] py-[80px]">
//             <div
//               className={`grid gap-[30px] ${
//                 columns === 1
//                   ? "grid-cols-1"
//                   : columns === 2
//                   ? "grid-cols-2"
//                   : "grid-cols-3"
//               }`}
//             >
//               {paginatedJobs.map((job) => (
//                 <div key={job.id} className="w-full">
//                   <JobCard job={job} />
//                 </div>
//               ))}
//             </div>
//           </section>

//           <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />
//         </>
//       )}

//       <DeveloperCTA />
//     </>
//   );
// }

// import { useEffect, useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// import { getJobsByTag } from "../../services/jobs.service";

// import JobFilterForm from "../../components/forms/JobFilterForm";
// import Pagination from "../../components/ui/Pagination";
// import DeveloperCTA from "../../components/home/DeveloperCTA";
// import JobCard from "../../components/cards/JobCard";

// import noResultsIcon from "../../assets/icons/noResultsIcon.svg";
// import { JOBS } from "../../utils/mockJobs";

// /* ---------------- JOB AREAS ---------------- */
// const jobAreas = {
//   Frontend: [
//     "Frontend Developer",
//     "UI Developer",
//     "React Developer",
//     "Angular Developer",
//     "Vue.js Developer",
//   ],
//   Backend: [
//     "Backend Developer",
//     "API Developer",
//     "Node.js Developer",
//     "Java Developer",
//     "Python Developer",
//     "PHP Developer",
//   ],
//   "Full Stack": ["Full Stack Developer"],
//   "Mobile Development": [
//     "Mobile App Developer",
//     "Android Developer",
//     "iOS Developer",
//     "Flutter Developer",
//     "React Native Developer",
//   ],
//   "DevOps & Infrastructure": [
//     "DevOps Engineer",
//     "Cloud Engineer",
//     "Site Reliability Engineer (SRE)",
//     "Platform Engineer",
//     "Build & Release Engineer",
//   ],
//   "Quality & Testing": [
//     "QA Engineer",
//     "Quality Assurance Analyst",
//     "Test Engineer",
//     "Automation Test Engineer",
//     "Manual Tester",
//   ],
//   "Data & AI": [
//     "Data Analyst",
//     "Data Engineer",
//     "Machine Learning Engineer",
//     "AI Engineer",
//     "Data Scientist",
//   ],
//   Security: [
//     "Security Engineer",
//     "Application Security Engineer",
//     "Cybersecurity Analyst",
//     "Penetration Tester",
//   ],
//   "Game & Specialized Development": [
//     "Game Developer",
//     "AR/VR Developer",
//     "Embedded Systems Developer",
//     "Firmware Engineer",
//   ],
//   "Design & UX": ["UI/UX Designer", "Product Designer", "Interaction Designer"],
//   "Management & Architecture": [
//     "Software Architect",
//     "Solutions Architect",
//     "Engineering Manager",
//     "Technical Project Manager",
//     "Product Manager (technical)",
//   ],
//   "Emerging / Modern Titles": [
//     "Web3 Developer",
//     "Blockchain Developer",
//     "AI Prompt Engineer",
//     "Low-Code / No-Code Developer",
//   ],
// };

// export default function AllJobsGuest() {
//   const { data } = useQuery({ queryKey: ["jobs"], queryFn: getJobsByTag });
//   const jobs = Array.isArray(data) ? data : JOBS;

//   /* ---------------- STATE ---------------- */
//   const [filters, setFilters] = useState({
//     title: "",
//     type: "",
//     level: "",
//     search: "",
//   });
//   const [currentPage, setCurrentPage] = useState(1);

//   const CARDS_PER_PAGE = 18;

//   /* ---------------- RESPONSIVE LOGIC ---------------- */

//   /* ---------------- FILTER ---------------- */
//   const filteredJobs = jobs.filter((job) => {
//     const titleMatch =
//       !filters.title || jobAreas[filters.title]?.includes(job.title);
//     const typeMatch = !filters.type || job.type === filters.type;
//     const levelMatch = !filters.level || job.level === filters.level;
//     const search = filters.search?.toLowerCase() || "";

//     const searchMatch =
//       !search ||
//       job.title?.toLowerCase().includes(search) ||
//       job.description?.toLowerCase().includes(search) ||
//       job.skills?.some((s) => s?.toLowerCase().includes(search)) ||
//       job.tags?.some((t) => t?.toLowerCase().includes(search));

//     return titleMatch && typeMatch && levelMatch && searchMatch;
//   });

//   /* ---------------- PAGINATION (PRODUCT LIST LOGIC) ---------------- */
//   const indexOfLastCard = currentPage * CARDS_PER_PAGE;
//   const indexOfFirstCard = indexOfLastCard - CARDS_PER_PAGE;
//   const currentJobs = filteredJobs.slice(indexOfFirstCard, indexOfLastCard);

//   const totalPages = Math.ceil(filteredJobs.length / CARDS_PER_PAGE);

//   const showNoResults = filteredJobs.length === 0;

//   useEffect(() => {
//     setCurrentPage(1);
//   }, [filters, jobs]);

//   /* ---------------- RENDER ---------------- */
//   return (
//     <>
//       <JobFilterForm
//         onApply={(f) => {
//           setFilters(f);
//           setCurrentPage(1);
//         }}
//         titleOptions={Object.keys(jobAreas).map((a) => ({
//           label: a,
//           value: a,
//         }))}
//         typeOptions={[...new Set(jobs.map((j) => j.type))].map((t) => ({
//           label: t,
//           value: t,
//         }))}
//         levelOptions={[...new Set(jobs.map((j) => j.level))].map((l) => ({
//           label: l,
//           value: l,
//         }))}
//       />

//       {showNoResults ? (
// <div className="flex flex-col items-center mb-[120px] mt-[135px]">
//   <img src={noResultsIcon} className="w-[60px] mb-6" />
//   <p className="text-[30px] font-kantumruy">No results found</p>
// </div>
//       ) : (
//         <>
//           <section className="px-4 sm:px-8 md:px-[48px] lg:px-[72px] py-[80px]">
//             <div
//               className="
//   grid gap-[30px]
//   grid-cols-1
//   sm:grid-cols-2
//   lg:grid-cols-3
// "
//             >
//               {JOBS.map((job) => (
//                 <JobCard key={job.id} job={job} />
//               ))}
//             </div>
//           </section>

//           <Pagination
//             currentPage={currentPage}
//             totalPages={totalPages}
//             onPageChange={setCurrentPage}
//           />
//         </>
//       )}

//       <DeveloperCTA />
//     </>
//   );
// }
