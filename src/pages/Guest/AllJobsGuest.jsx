import { useState, useEffect } from "react";

import JobFilterForm from "../../components/forms/JobFilterForm";
import Pagination from "../../components/ui/Pagination";
import DeveloperCTA from "../../components/home/DeveloperCTA";
import JobCard from "../../components/cards/JobCard";

import noResultsIcon from "../../assets/icons/noResultsIcon.svg";

import { fetchJobs } from "../../api/jobs";
export default function AllJobsGuest() {
  // ------------------ STATE (ALL HOOKS FIRST) ------------------
  const EMPTY_FILTERS = {
    category: "",
    type: "",
    level: "",
    search: "",
  };
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [draftFilters, setDraftFilters] = useState(EMPTY_FILTERS);
  const [appliedFilters, setAppliedFilters] = useState(null);

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(18);
  const [columns, setColumns] = useState(3);

  // ------------------ FETCH JOBS ------------------
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

  // ------------------ RESPONSIVE LAYOUT ------------------
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

  // ------------------ NORMALIZE BACKEND DATA ------------------
  const jobList = jobs.map((job) => ({
    id: job._id,
    title: job.title,
    description: job.description,
    shortDescription: job.shortDescription,
    // change this line
    category: job.category?.name || "",

    // category: job.category, // ✅ from backend
    type: job.employmentType, // ✅ full_time, part_time
    level: job.experienceLevel, // ✅ expert, junior, etc
    tags: job.tags?.map((t) => t.name) || [], // ✅ Python, React, etc
    requirements: job.requirements || "", // ✅ also searchable
    company: job.company?.name || "",
    location: job.location || "",
    createdAt: job.createdAt,
    salary: job.salary
      ? {
          min: job.salary.min,
          max: job.salary.max,
          unit: job.salary.unit,
          currency: job.salary.currency,
        }
      : null,
  }));

  // ------------------ OPTIONS ------------------

  const categoryOptions = [
    ...new Set(jobList.map((j) => j.category).filter(Boolean)),
  ].map((c) => ({ label: c, value: c }));

  const typeOptions = [
    ...new Set(jobList.map((j) => j.type).filter(Boolean)),
  ].map((t) => ({ label: t, value: t }));

  const levelOptions = [
    ...new Set(jobList.map((j) => j.level).filter(Boolean)),
  ].map((l) => ({ label: l, value: l }));

  // ------------------ FILTERING ------------------
  const filteredJobs = appliedFilters
    ? jobList.filter((job) => {
        const categoryMatch =
          !appliedFilters.category || job.category === appliedFilters.category;

        const typeMatch =
          !appliedFilters.type || job.type === appliedFilters.type;

        const levelMatch =
          !appliedFilters.level || job.level === appliedFilters.level;

        const search = appliedFilters.search?.toLowerCase() || "";

        const searchMatch =
          !search ||
          job.title.toLowerCase().includes(search) ||
          job.description.toLowerCase().includes(search) ||
          job.requirements.toLowerCase().includes(search) ||
          job.company.toLowerCase().includes(search) ||
          job.tags.some((tag) => tag.toLowerCase().includes(search));

        return categoryMatch && typeMatch && levelMatch && searchMatch;
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
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-center">Loading jobs...</p>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-center text-red-600">{error}</p>
      </div>
    );

  // ------------------ JSX ------------------
  return (
    <>
      <JobFilterForm
        filters={draftFilters}
        onChange={setDraftFilters}
        titleOptions={categoryOptions}
        typeOptions={typeOptions}
        levelOptions={levelOptions}
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
