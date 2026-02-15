// import { useState } from "react";

// import JobCard from "../../components/cards/JobCard";
// import PopularTags from "../../components/home/PopularTags";
// import LatestJobs from "../../components/home/LatestJobs";

// const INITIAL_VISIBLE = 6;

// export default function HomeFreelancer() {
//   const [showAll, setShowAll] = useState(false);

//   // MOCK DATA (replace later with API)
//   const jobs = Array.from({ length: 18 }, (_, i) => ({
//     id: i + 1,
//     title: "UI/UX Designer",
//     company: "KeplerLab",
//     type: "Part-time",
//     level: "Intermediate",
//     salary: "$25/hr",
//   }));

//   const visibleJobs = showAll ? jobs : jobs.slice(0, INITIAL_VISIBLE);

//   return (
//     <>
//       {/* ================= CONTENT ================= */}
//       <main className="py-10 space-y-12">
//         {/* LATEST JOBS */}
//         <LatestJobs />

//         {/* POPULAR TAGS */}
//         <PopularTags />

//         {/* MORE JOBS */}
//         <section className="px-8">
//           <div
//             className="
//           grid
//           grid-cols-1
//           sm:grid-cols-2
//           lg:grid-cols-3
//           gap-y-6 lg:gap-y-[38px]
//           gap-x-4 sm:gap-x-6 lg:gap-x-[49px]
//         "
//           >
//             {visibleJobs.slice(6, 18).map((job) => (
//               <JobCard key={job.id} job={job} />
//             ))}
//           </div>

//           <div className="flex justify-center mt-8">
//             <button
//               onClick={() => setShowAll(!showAll)}
//               className="px-6 py-2 rounded-lg text-sm bg-[#8967B3] text-white"
//             >
//               {showAll ? "Show less jobs" : "View all job posts"}
//             </button>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// }

import { useState, useEffect } from "react";

import JobCard from "../../components/cards/JobCard";
import PopularTags from "../../components/home/PopularTags";
import LatestJobs from "../../components/home/LatestJobs";
import HeroSection from "../../components/home/HeroSection";
import { fetchJobs } from "../../api/jobs";

export default function HomeFreelancer() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  // FETCH JOBS FROM BACKEND
  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchJobs();
        setJobs(data);
      } catch (err) {
        console.error("Failed to load jobs", err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  if (loading) return <p className="text-center py-20">Loading jobs...</p>;

  // NORMALIZE BACKEND JOB DATA
  const jobList = jobs.map((job) => ({
    id: job._id,
    title: job.title,
    company: job.company?.name || "",
    description: job.description,
    shortDescription: job.shortDescription,
    category: job.category?.name || "",
    type: job.employmentType,
    level: job.experienceLevel,
    tags: job.tags?.map((t) => t.name) || [],
    salary: job.salary,
    createdAt: job.createdAt,
  }));

  // LATEST JOBS should display separately
  // So we EXCLUDE them from the lower grid
  const latestJobIds = jobList.slice(0, 6).map((job) => job.id);

  const otherJobs = jobList.filter((job) => !latestJobIds.includes(job.id));

  // Visible jobs in the lower grid
  const visibleJobs = showAll ? otherJobs : otherJobs.slice(0, 18);

  return (
    <main className="py-10 space-y-12 flex flex-col">
      {/* HERO (mobile only) */}
      <div className="block sm:hidden order-1">
        <HeroSection />
      </div>

      {/* LATEST JOBS DESKTOP */}
      <div className="hidden sm:block order-1">
        <LatestJobs maxItems={6} />
      </div>

      {/* POPULAR TAGS (always second) */}
      <div className="order-2">
        <PopularTags />
      </div>

      {/* REMAINING JOBS (desktop only) */}
      <section className="hidden sm:block order-3 px-8">
        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-y-6 lg:gap-y-[38px]
          gap-x-4 sm:gap-x-6 lg:gap-x-[49px]
        "
        >
          {visibleJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {otherJobs.length > 18 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 rounded-lg text-sm bg-[#8967B3] text-white"
            >
              {showAll ? "Show less jobs" : "View all job posts"}
            </button>
          </div>
        )}
      </section>

      {/* LATEST JOBS MOBILE */}
      <div className="block sm:hidden order-3">
        <LatestJobs maxItems={9} />
      </div>
    </main>
  );
}
