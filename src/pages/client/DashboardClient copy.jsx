import { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../components/ui/Breadcrumb";
import dashboardIcon from "../../assets/icons/dashboardIcon.svg";

import deleteIcon from "../../assets/icons/deleteIcon.svg";
import editIcon from "../../assets/icons/IconEdit.svg";
import duplicateIcon from "../../assets/icons/duplicate.svg";
import eyeIcon from "../../assets/icons/IconEyeWhite.svg";

export default function DashboardClient() {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Senior mobile app developer",
      type: "Full-time",
      level: "Senior",
      status: "middle", // draft
    },
    {
      id: 2,
      title: "Python backend developer",
      type: "Part-time",
      level: "Lead",
      status: "right", // published
    },
    {
      id: 3,
      title: "ReactJS developer",
      type: "Part-time",
      level: "Middle",
      status: "left", // inactive
    },
  ]);

  /* ---------- ACTION HANDLERS ---------- */

  const toggleStatus = (id) => {
    setJobs((prev) =>
      prev.map((job) => {
        if (job.id !== id) return job;

        const next =
          job.status === "left"
            ? "middle"
            : job.status === "middle"
              ? "right"
              : "left";

        return { ...job, status: next };
      }),
    );
  };

  const deleteJob = (id) => {
    setJobs((prev) => prev.filter((job) => job.id !== id));
  };

  const duplicateJob = (job) => {
    setJobs((prev) => [
      ...prev,
      { ...job, id: prev.length + 1, status: "middle" },
    ]);
  };

  return (
    <>
      <Breadcrumb
        items={[{ label: "Sheqlee", to: "/" }, { label: "Dashboard" }]}
      />

      {/* ================= EMPTY STATE ================= */}
      {jobs.length === 0 && (
        <section className="px-4 sm:px-6 pb-16 pt-16 lg:pt-[25px] max-w-[900px] mx-auto ">
          <div className="flex flex-col items-center text-center">
            <img
              src={dashboardIcon}
              alt="Dashboard"
              className="w-16 h-16 mb-[32px] mx-auto"
            />
            <h1 className="text-[30px] sm:text-[45px] font-semibold mb-[19px]">
              Dashboard
            </h1>
            <p className="text-[#000000] text-center text-[22px] sm:text-[29px]  max-w-[380px] lg:max-w-xl mb-[75px] leading-[33px] sm:leading-[33px]">
              You have not posted any jobs yet. Get started by posting a job.
            </p>
            {/* DESKTOP & TABLET */}
            <Link
              to="/post-job"
              className="hidden sm:inline-flex items-center justify-center bg-[#8967B3] text-[#F8F8F8] text-[27px] px-[40px] py-[13px] rounded-[11px] font-medium hover:bg-[#7A5AA3] mb-[45px] transition"
            >
              Post your first job
            </Link>

            {/* MOBILE */}
            <p className="sm:hidden text-[#000000] text-sm mt-2">
              You can only post jobs on desktop.
            </p>
          </div>
        </section>
      )}

      {/* ================= DASHBOARD ================= */}
      {jobs.length > 0 && (
        <section className="px-[15px] lg:px-[50px] py-10 ">
          <div className="text-center mb-10 max-w-[1100px] mx-auto">
            <img
              src={dashboardIcon}
              alt="Dashboard"
              className="w-16 h-16 mb-[27px] mx-auto"
            />
            <h1 className="text-[30px] sm:text-[45px] font-semibold mb-[15px] mt-4">
              Dashboard
            </h1>
            <p className="text-[#000000] text-[22px] sm:text-[26px]  max-w-[380px] mb-[60px] leading-[33px] sm:leading-[33px] mx-auto">
              All the jobs you have posted and <br className="sm:hidden" />
              are about to post.
            </p>
          </div>
          <div className="hidden md:block bg-white rounded-[15px] shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-[#DFDFDF] text-left lg:text-[30px] font-medium ">
                <tr>
                  <th className="px-[36px] py-[40px]">JID</th>
                  <th className="px-4 py-3">Title</th>
                  <th className="px-4 py-3">Type</th>
                  <th className="px-4 py-3">Level</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>

              <tbody className="text-[25px] bg-[#F7F7F7]">
                {jobs.map((job) => (
                  <tr key={job.id} className="border-t-[2px]">
                    <td className="px-[36px] py-[27px]">{job.id}</td>
                    <td className="px-4 py-3">{job.title}</td>
                    <td className="px-4 py-3">{job.type}</td>
                    <td className="px-4 py-3">{job.level}</td>

                    <td className="px-4 py-3">
                      <Toggle
                        status={job.status}
                        onClick={() => toggleStatus(job.id)}
                      />
                    </td>

                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        {/* ===== DRAFT (MIDDLE) ===== */}
                        {job.status === "middle" && (
                          <>
                            <IconBtn
                              title="Duplicate draft"
                              onClick={() => duplicateJob(job)}
                            >
                              <img src={duplicateIcon} className="w-4 h-4" />
                            </IconBtn>

                            <button
                              onClick={() => toggleStatus(job.id)}
                              className="bg-black text-[#FFFFFF] font-medium text-[22px] px-7 py-2 rounded"
                            >
                              Publish
                            </button>

                            <IconBtn title="Edit draft">
                              <img src={editIcon} className="w-4 h-4" />
                            </IconBtn>

                            <IconBtn
                              title="Delete draft"
                              onClick={() => deleteJob(job.id)}
                            >
                              <img src={deleteIcon} className="w-4 h-4" />
                            </IconBtn>
                          </>
                        )}

                        {/* ===== LEFT & RIGHT ===== */}
                        {job.status !== "middle" && (
                          <>
                            <IconBtn
                              title="Duplicate vacancy"
                              onClick={() => duplicateJob(job)}
                            >
                              <img src={duplicateIcon} className="w-4 h-4" />
                            </IconBtn>

                            <IconBtn title="View details">
                              <img src={eyeIcon} className="w-4 h-4" />
                            </IconBtn>

                            <IconBtn
                              title="Delete vacancy"
                              onClick={() => deleteJob(job.id)}
                            >
                              <img src={deleteIcon} className="w-4 h-4" />
                            </IconBtn>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* -------- MOBILE TABLE -------- */}
          <div className="md:hidden bg-white rounded-xl shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-[#DFDFDF] text-left">
                <tr>
                  <th className="px-4 py-3">JID</th>
                  <th className="px-4 py-3">Job post</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>

              <tbody>
                {jobs.map((job) => (
                  <tr key={job.id} className="border-t">
                    <td className="px-4 py-3">{job.id}</td>

                    <td className="px-4 py-3">
                      <p className="font-medium mb-1">{job.title}</p>

                      <p className="text-xs text-[#000000] flex items-center gap-2">
                        <span>{job.type}</span>

                        <span className="w-1 h-1 bg-[#FFC60B] rounded-full inline-block" />

                        <span>{job.level}</span>
                      </p>
                    </td>

                    <td className="px-4 py-3">
                      <Toggle
                        status={job.status}
                        onClick={() => toggleStatus(job.id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </>
  );
}

/* ---------------- UI HELPERS ---------------- */

function Toggle({ status, onClick }) {
  const styles = {
    left: "border-red-500 bg-red-500 translate-x-0",
    middle: "border-gray-600 bg-gray-600 translate-x-[12px]",
    right: "border-green-500 bg-green-500 translate-x-[24px]",
  };

  return (
    <button
      onClick={onClick}
      className={`relative w-14 h-6 rounded-md border-2 ${styles[status].split(" ")[0]}`}
    >
      <span
        className={`absolute top-[2px] left-[2px] w-4 h-4 rounded transition ${styles[status].split(" ").slice(1).join(" ")}`}
      />
    </button>
  );
}

function IconBtn({ children, onClick, title }) {
  return (
    <div className="relative group">
      <button
        onClick={onClick}
        className="w-12 h-9 flex items-center justify-center rounded bg-[#8967B3] hover:bg-purple-300"
      >
        {children}
      </button>

      {/* Tooltip */}
      <span
        className="
          pointer-events-none
          absolute
          -bottom-9
          
          whitespace-nowrap
          bg-[#DFDFDF]
          text-black
          text-[13px]
          px-3
          py-1
          rounded
          opacity-0
          group-hover:opacity-100
          transition
          shadow-sm
        "
      >
        {title}
      </span>
    </div>
  );
}
