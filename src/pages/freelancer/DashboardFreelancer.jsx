// import { useState } from "react";
// import JobCard from "../../components/cards/JobCard";
// import Pagination from "../../components/ui/Pagination";
// import PlatformStatus from "../../components/home/PlatformStats";
// import DeveloperCTA from "../../components/home/DeveloperCTA";

// import DashboardFilterForm from "../../components/forms/DashboardFilterForm";

// import dashboardIcon from "../../assets/icons/dashboardIcon.svg";
// import noResultsIcon from "../../assets/icons/noResultsIcon.svg";

// import { JOBS } from "../../utils/mockJobs";

// export default function DashboardFreelancer() {
//   const [filters, setFilters] = useState(null);

//   const filteredJobs =
//     filters === null
//       ? JOBS
//       : JOBS.filter((job) => {
//           const categoryMatch =
//             !filters.category || job.category === filters.category;

//           const typeMatch = !filters.type || job.type === filters.type;

//           const levelMatch = !filters.level || job.level === filters.level;

//           const techMatch =
//             !filters.tech ||
//             job.tags?.some(
//               (t) => t.toLowerCase() === filters.tech.toLowerCase()
//             );

//           return categoryMatch && typeMatch && levelMatch && techMatch;
//         });

//   const showNoResults = filters && filteredJobs.length === 0;

//   return (
//     <>
//       {/* FILTER HEADER */}
//       <DashboardFilterForm
//         icon={dashboardIcon}
//         title="Dashboard"
//         description="These are jobs for you based on your skills."
//         onApply={setFilters}
//       />

//       {/* RESULTS */}
//       {showNoResults ? (
//         <div className="flex flex-col items-center mt-20">
//           <img src={noResultsIcon} className="w-24 mb-6" />
//           <p className="text-[22px]">No results found</p>
//         </div>
//       ) : (
//         <>
//           <section className="px-4 sm:px-8 md:px-[48px] lg:px-[72px] py-[80px]">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
//               {filteredJobs.map((job) => (
//                 <JobCard key={job.id} job={job} />
//               ))}
//             </div>
//           </section>

//           <Pagination currentPage={1} totalPages={10} onPageChange={() => {}} />
//         </>
//       )}

//       <DeveloperCTA />
//       {!showNoResults && <PlatformStatus />}
//     </>
//   );
// }

import { useState, useEffect } from "react";

import DashboardFilterForm from "../../components/forms/DashboardFilterForm";
import Pagination from "../../components/ui/Pagination";
import DeveloperCTA from "../../components/home/DeveloperCTA";
import PlatformStatus from "../../components/home/PlatformStats";
import JobCard from "../../components/cards/JobCard";

import dashboardIcon from "../../assets/icons/dashboardIcon.svg";
import noResultsIcon from "../../assets/icons/noResultsIcon.svg";

import { fetchJobs } from "../../api/jobs";

export default function DashboardFreelancer() {
  const EMPTY_FILTERS = {
    category: "",
    type: "",
    level: "",
    tag: "",
  };

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [draftFilters, setDraftFilters] = useState(EMPTY_FILTERS);
  const [appliedFilters, setAppliedFilters] = useState(null);

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(18);
  const [columns, setColumns] = useState(3);

  // ---------------- FETCH ----------------
  useEffect(() => {
    const loadJobs = async () => {
      try {
        const data = await fetchJobs();
        setJobs(data);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to load jobs");
      } finally {
        setLoading(false);
      }
    };

    loadJobs();
  }, []);

  // ---------------- RESPONSIVE ----------------
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

  // ---------------- NORMALIZE ----------------
  const jobList = jobs.map((job) => ({
    id: job._id,
    title: job.title,
    description: job.description,
    shortDescription: job.shortDescription,
    category: job.category?.name || "",
    type: job.employmentType,
    level: job.experienceLevel,
    tags: job.tags?.map((t) => t.name) || [],
    requirements: job.requirements || "",
    company: job.company?.name || "",
    location: job.location || "",
    createdAt: job.createdAt,
    salary: job.salary || null,
  }));

  // ---------------- OPTIONS ----------------
  const categoryOptions = [
    ...new Set(jobList.map((j) => j.category).filter(Boolean)),
  ].map((c) => ({ label: c, value: c }));

  const typeOptions = [
    ...new Set(jobList.map((j) => j.type).filter(Boolean)),
  ].map((t) => ({ label: t, value: t }));

  const levelOptions = [
    ...new Set(jobList.map((j) => j.level).filter(Boolean)),
  ].map((l) => ({ label: l, value: l }));

  const tagOptions = [...new Set(jobList.flatMap((j) => j.tags || []))].map(
    (t) => ({ label: t, value: t }),
  );

  // ---------------- FILTER ----------------
  const filteredJobs = appliedFilters
    ? jobList.filter((job) => {
        const categoryMatch =
          !appliedFilters.category || job.category === appliedFilters.category;
        const typeMatch =
          !appliedFilters.type || job.type === appliedFilters.type;
        const levelMatch =
          !appliedFilters.level || job.level === appliedFilters.level;
        const tagMatch =
          !appliedFilters.tag ||
          job.tags.some(
            (t) => t.toLowerCase() === appliedFilters.tag.toLowerCase(),
          );

        return categoryMatch && typeMatch && levelMatch && tagMatch;
      })
    : jobList;

  const totalPages = Math.ceil(filteredJobs.length / pageSize);

  const visibleJobs = filteredJobs.slice(
    (page - 1) * pageSize,
    page * pageSize,
  );

  const showNoResults = filteredJobs.length === 0;

  if (loading)
    return (
      <div className="min-h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="min-h-screen flex justify-center items-center text-red-600">
        {error}
      </div>
    );

  return (
    <>
      <DashboardFilterForm
        icon={dashboardIcon}
        title="Dashboard"
        description="These are jobs for you based on your skills."
        filters={draftFilters}
        onChange={setDraftFilters}
        categoryOptions={categoryOptions}
        typeOptions={typeOptions}
        levelOptions={levelOptions}
        tagOptions={tagOptions}
        onApply={() => {
          setAppliedFilters(draftFilters);
          setDraftFilters(EMPTY_FILTERS);
          setPage(1);
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
                grid gap-y-6 lg:gap-y-[38px]
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
    </>
  );
}
