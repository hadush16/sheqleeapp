// import { useParams } from "react-router-dom";
// import { useState } from "react";
// import Breadcrumb from "../../components/ui/Breadcrumb";
// import JobCard from "../../components/cards/JobCard";
// import Pagination from "../../components/ui/Pagination";

// import blackFacebook from "../../assets/icons/blackFacebook.svg";
// import blackTwitter from "../../assets/icons/blackTwitter.svg";
// import blackTelegram from "../../assets/icons/blackTelegram.svg";
// import blackLinkedin from "../../assets/icons/blackLinkedin.svg";

// import subscribeBellIcon from "../../assets/icons/subscribeBellIcon.svg";
// import { TAGS } from "../../utils/tags.data";
// import { JOBS } from "../../utils/mockJobs";

// export default function TagsDetailGuest() {
//   const { id } = useParams();
//   const [subscribed, setSubscribed] = useState(false);

//   const tag = TAGS.find((t) => String(t.id) === id);

//   if (!tag) {
//     return <p className="text-center mt-20">Tag not found</p>;
//   }

//   return (
//     <>
//       {/* ================= BREADCRUMB ================= */}
//       <div className="hidden sm:block">
//         <Breadcrumb sectionLabel="Tags" sectionTo="/tags" current={tag.name} />
//       </div>

//       {/* ================= HEADER ================= */}
//       <section className="w-full py-[60px] max-sm:py-[36px] text-center">
//         <div className="max-w-3xl mx-auto px-4">
//           {/* Yellow tag box */}
//           <div className="relative mx-auto mb-6 w-[80px] h-[80px] rounded-md bg-[#F7C600] flex items-center justify-center">
//             <span className="font-bold text-black text-[28px]">
//               {tag.name.slice(0, 2).toUpperCase()}
//             </span>

//             {/* inner icon (bottom-right) */}
//             <span className="absolute bottom-1 right-1 text-[10px] font-semibold">
//               JS
//             </span>
//           </div>

//           <h1 className="text-[35px] max-sm:text-[24px] font-kantumruy font-semibold">
//             {tag.name}
//           </h1>

//           <p className="mt-3 text-[20px] max-sm:text-[14px] opacity-80">
//             All job posts with the tag <strong>{tag.name}</strong>.
//           </p>

//           {/* Subscribe */}
//           <button
//             onClick={() => setSubscribed(true)}
//             className="mt-6 inline-flex items-center gap-2 bg-[#8967B3] text-white px-6 py-3 rounded-xl text-sm font-semibold"
//           >
//             <img src={subscribeBellIcon} alt="" className="w-4 h-4" />
//             Subscribe to tag
//           </button>

//           <p className="mt-4 text-[14px]">
//             Subscribers: <strong>{tag.subscribers}</strong>
//           </p>

//           {/* Socials */}
//           <div className="flex justify-center gap-4 mt-4">
//             <img src={blackFacebook} className="w-5 h-5" />
//             <img src={blackTwitter} className="w-5 h-5" />
//             <img src={blackTelegram} className="w-5 h-5" />
//             <img src={blackLinkedin} className="w-5 h-5" />
//           </div>
//         </div>
//       </section>

//       {/* ================= JOBS GRID ================= */}
//       <section className="max-w-7xl mx-auto px-[72px] lg:px-[48px] md:px-[36px] sm:px-[24px] max-sm:px-[14px] pb-[80px]">
//         <div className="grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[30px]">
//           {JOBS.filter((j) => j.tags?.includes(tag.name)).map((job) => (
//             <JobCard key={job.id} job={job} />
//           ))}
//         </div>
//       </section>

//       <div className="px-[14px] sm:px-0 pb-[60px]">
//         <Pagination currentPage={1} totalPages={3} onPageChange={() => {}} />
//       </div>
//     </>
//   );
// }

// import { useParams } from "react-router-dom";
// import Breadcrumb from "../../components/ui/Breadcrumb";
// import JobCard from "../../components/cards/JobCard";
// import Pagination from "../../components/ui/Pagination";

// import blackFacebook from "../../assets/icons/blackFacebook.svg";
// import blackTwitter from "../../assets/icons/blackTwitter.svg";
// import blackTelegram from "../../assets/icons/blackTelegram.svg";
// import blackLinkedin from "../../assets/icons/blackLinkedin.svg";

// import subscribeBellIcon from "../../assets/icons/subscribeBellIcon.svg";
// import { TAGS } from "../../utils/tags.data";
// import { JOBS } from "../../utils/mockJobs";

// export default function TagsDetailGuest() {
//   const { id } = useParams();

//   const tag = TAGS.find((t) => String(t.id) === id);

//   if (!tag) {
//     return <p className="text-center mt-20">Tag not found</p>;
//   }

//   return (
//     <>
//       {/* ================= BREADCRUMB ================= */}
//       <div className="hidden sm:block">
//         <Breadcrumb sectionLabel="Tags" sectionTo="/tags" current={tag.name} />
//       </div>

//       {/* ================= HEADER ================= */}
//       <section className="w-full py-[60px] max-sm:py-[36px]">
//         <div className="max-w-3xl mx-auto px-4 text-center">
//           {/* Yellow tag box */}
//           <div className="relative mx-auto mb-6 w-[80px] h-[80px] bg-[#F7C600] rounded-md flex items-center justify-center">
//             {/* Nickname (bottom-right inside box) */}
//             <span className="absolute bottom-1 right-1 text-[28px] font-bold text-black">
//               {tag.name.slice(0, 2).toUpperCase()}
//             </span>
//           </div>

//           {/* Tag name */}
//           <h1 className="text-[35px] max-sm:text-[24px] font-kantumruy font-semibold">
//             {tag.name}
//           </h1>

//           {/* Description */}
//           <p className="mt-3 text-[20px] max-sm:text-[14px] opacity-80">
//             All job posts with the tag <strong>{tag.name}</strong>.
//           </p>

//           {/* Subscribe button */}
//           <button className="mt-6 inline-flex items-center gap-2 bg-[#8967B3] text-white px-6 py-3 rounded-xl text-sm font-semibold">
//             <img src={subscribeBellIcon} alt="" className="w-4 h-4" />
//             Subscribe to tag
//           </button>

//           {/* Subscribers */}
//           <p className="mt-4 text-[14px]">
//             Subscribers: <strong>{tag.subscribers}</strong>
//           </p>

//           {/* Socials */}
//           <div className="flex justify-center gap-4 mt-4">
//             <img src={blackFacebook} alt="" className="w-5 h-5" />
//             <img src={blackTwitter} alt="" className="w-5 h-5" />
//             <img src={blackTelegram} alt="" className="w-5 h-5" />
//             <img src={blackLinkedin} alt="" className="w-5 h-5" />
//           </div>
//         </div>
//       </section>

//       <section className="px-[72px] pb-[80px] lg:px-[48px] md:px-[36px] sm:px-[24px] max-sm:px-[14px]">
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
//           {JOBS.map((job) => (
//             <JobCard key={job.id} job={job} />
//           ))}
//         </div>
//       </section>

//       {/* ================= PAGINATION ================= */}
//       <div className="px-[14px] sm:px-0 pb-[60px]">
//         <Pagination currentPage={1} totalPages={3} onPageChange={() => {}} />
//       </div>
//     </>
//   );
// }

import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Breadcrumb from "../../components/ui/Breadcrumb";
import JobCard from "../../components/cards/JobCard";
import Pagination from "../../components/ui/Pagination";

import blackFacebook from "../../assets/icons/blackFacebook.svg";
import blackTwitter from "../../assets/icons/blackTwitter.svg";
import blackTelegram from "../../assets/icons/blackTelegram.svg";
import blackLinkedin from "../../assets/icons/blackLinkedin.svg";

import subscribeBellIcon from "../../assets/icons/subscribeBellIcon.svg";
import SignupPromptModal from "../../pages/Auth/SignupPromptModal";
import { TAGS } from "../../utils/tags.data";
import { JOBS } from "../../utils/mockJobs";

export default function TagsDetailGuest() {
  const { id } = useParams();
  const tag = TAGS.find((t) => String(t.id) === id);

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  const [columns, setColumns] = useState(3);
  const [subscribers, setSubscribers] = useState(tag.subscribers);
  const [user, setUser] = useState(null);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("authUser"));
    setUser(savedUser);
  }, []);

  // Sync subscribers when category changes
  useEffect(() => {
    if (tag) {
      setSubscribers(tag.subscribers);
    }
  }, [tag]);

  useEffect(() => {
    const updateLayout = () => {
      const w = window.innerWidth;

      if (w < 640) {
        // Mobile
        setColumns(1);
        setPageSize(6);
      } else if (w < 1280) {
        // Tablet / small PC
        setColumns(2);
        setPageSize(10);
      } else {
        // Desktop
        setColumns(3);
        setPageSize(12);
      }

      setPage(1);
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  if (!tag) {
    return <p className="text-center mt-20">Tag not found</p>;
  }

  const totalPages = Math.ceil(JOBS.length / pageSize);
  const visibleJobs = JOBS.slice((page - 1) * pageSize, page * pageSize);

  const handleSubscribe = () => {
    if (!user) {
      // Not logged in → show modal
      setIsSignupModalOpen(true);
      return;
    }

    // Logged in → increase subscribers
    setSubscribers((prev) => prev + 1);
  };

  return (
    <>
      {/* ================= BREADCRUMB ================= */}
      <div className="hidden sm:block">
        <Breadcrumb sectionLabel="Tags" sectionTo="/tags" current={tag.name} />
      </div>

      {/* ================= HEADER ================= */}
      <section className="w-full py-[30px] max-sm:py-[36px]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="relative mx-auto mb-6 w-[85px] h-[85px] lg:w-[98px] lg:h-[95px] bg-[#F7C60B] flex items-center justify-center">
            <span className="absolute bottom-1 right-1 text-[30px] lg:text-[45px] font-bold text-black">
              {tag.name.slice(0, 2).toUpperCase()}
            </span>
          </div>

          <h1 className="text-[#000000] text-[23px] md:text-[42px] font-kantumruy font-bold">
            {tag.name}
          </h1>

          <p className="mt-4 text-[#000000] text-[21px] md:text-[27px] mx-auto font-kantumruy px-[38px] lg:px-0">
            All job posts in the{" "}
            <span className="font-semibold">{tag.name}</span> tag.
          </p>

          <button
            onClick={handleSubscribe}
            className="mt-8 bg-[#8967B3] text-[#FFFFFF] px-[21px] lg:pl-[16px] lg:pr-[32px] py-[11px] rounded-[10px] lg:rounded-[12px] inline-flex items-center gap-3 text-[17px] lg:text-[29.5px] font-kantumruy font-medium tracking-normal"
          >
            <img
              src={subscribeBellIcon}
              alt="Subscribe"
              className="w-5 h-5 lg:w-7 lg:h-7 mr-3"
            />
            Subscribe to tag
          </button>

          <p className="mt-[47px] text-[#000000] text-[16px] lg:text-[29.5px] font-kantumruy opacity-70">
            Subscribers: <strong>{subscribers}</strong>
          </p>

          <div className="flex justify-center gap-4 mt-4">
            <Link
              to="https://www.facebook.com"
              src={blackFacebook}
              alt="facbook icon"
              className="w-5 h-5"
            />
            <Link
              to="https://twitter.com"
              src={blackTwitter}
              alt="twitter"
              className="w-5 h-5"
            />
            <Link
              to="https://t.me"
              src={blackTelegram}
              alt="telegram"
              className="w-5 h-5"
            />
            <Link
              to="https://linkedin.com"
              src={blackLinkedin}
              alt="lokedin"
              className="w-5 h-5"
            />
          </div>
        </div>
      </section>

      {/* ================= JOB GRID ================= */}
      <section className="px-[27px] pb-[80px] lg:px-[48px] md:px-[36px] sm:px-[24px] max-sm:px-[14px]">
        <div
          className={`
            grid gap-[30px]
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

      {/* ================= PAGINATION ================= */}
      {totalPages > 1 && (
        <div className="px-[14px] sm:px-0 pb-[60px]">
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </div>
      )}
      <SignupPromptModal
        isOpen={isSignupModalOpen}
        onClose={() => setIsSignupModalOpen(false)}
        message="Please register or login before you could subscribe to categories."
      />
    </>
  );
}
