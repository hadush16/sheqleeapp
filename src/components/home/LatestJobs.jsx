import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import JobCard from "../cards/JobCard";
import latestJobsDetaiIcon from "../../assets/icons/latestJobsDetaiIcon.svg";
import { fetchJobs } from "../../api/jobs";

export default function LatestJobs({ maxItems = 9 }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(9);
  const [columns, setColumns] = useState(3);
  const [activeDot, setActiveDot] = useState("left");

  // ------------------- FETCH JOBS -------------------
  useEffect(() => {
    const loadJobs = async () => {
      try {
        const data = await fetchJobs();

        // Normalize and sort latest first
        const normalized = data
          .slice()
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .map((job) => ({
            id: job._id,
            title: job.title,
            shortDescription: job.shortDescription,
            type: job.employmentType,
            level: job.experienceLevel,
            tags: job.tags?.map((t) => t.name) || [],
            company: job.company?.name || "",
            location: job.location,
            createdAt: job.createdAt,
          }));

        setJobs(normalized);
      } catch (err) {
        setError(err.message || "Failed to load jobs");
      } finally {
        setLoading(false);
      }
    };

    loadJobs();
  }, []);

  // ------------------- RESPONSIVE GRID -------------------
  useEffect(() => {
    const updateLayout = () => {
      const w = window.innerWidth;

      if (w < 640) {
        setColumns(1);
        setPageSize(3);
      } else if (w < 740) {
        setColumns(1);
        setPageSize(3);
      } else if (w < 1280) {
        setColumns(2);
        setPageSize(6);
      } else {
        setColumns(3);
        setPageSize(maxItems);
      }

      setPage(0);
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  // ------------------- PAGINATION -------------------
  const totalPages = Math.ceil(jobs.length / pageSize);
  const visibleJOBS =
    columns === 3
      ? jobs.slice(0, maxItems)
      : jobs.slice(page * pageSize, page * pageSize + pageSize);

  const hiddenCount =
    columns === 3
      ? jobs.length - maxItems
      : jobs.length - (page * pageSize + visibleJOBS.length);

  const goPrev = () => page > 0 && setPage(page - 1);
  const goNext = () => page < totalPages - 1 && setPage(page + 1);

  if (loading)
    return (
      <div className="text-center py-32 text-xl">Loading latest jobs...</div>
    );

  if (error)
    return <div className="text-center py-32 text-red-600">{error}</div>;

  // ------------------- RENDER -------------------
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
        className={`grid gap-y-6 lg:gap-y-[38px] gap-x-4 sm:gap-x-6 lg:gap-x-[49px]
        ${columns === 1 ? "grid-cols-1" : ""}
        ${columns === 2 ? "grid-cols-2" : ""}
        ${columns === 3 ? "grid-cols-3" : ""}
      `}
      >
        {visibleJOBS.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      {/* 3-dot mobile pagination */}
      {columns !== 3 && totalPages > 1 && (
        <div className="flex justify-center gap-3 mt-6 mb-6">
          <button
            onClick={() => {
              goPrev();
              setActiveDot("left");
            }}
            className={`w-4 h-4 rounded-full transition ${
              activeDot === "left" ? "bg-[#8967B3]" : "bg-[#CFCFCF]"
            }`}
          />
          <button
            onClick={() => setActiveDot("middle")}
            className={`w-4 h-4 rounded-full transition ${
              activeDot === "middle" ? "bg-[#8967B3]" : "bg-[#CFCFCF]"
            }`}
          />
          <button
            onClick={() => {
              goNext();
              setActiveDot("right");
            }}
            className={`w-4 h-4 rounded-full transition ${
              activeDot === "right" ? "bg-[#8967B3]" : "bg-[#CFCFCF]"
            }`}
          />
        </div>
      )}
    </section>
  );
}
