import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import SignupPromptModal from "../../pages/Auth/SignupPromptModal";

import Breadcrumb from "../../components/ui/Breadcrumb";
import JobCard from "../../components/cards/JobCard";
import DeveloperCTA from "../../components/home/DeveloperCTA";

import blackFacebook from "../../assets/icons/blackFacebook.svg";
import blackLinkedin from "../../assets/icons/blackLinkedin.svg";
import blackTelegram from "../../assets/icons/blackTelegram.svg";
import blackTwitter from "../../assets/icons/blackTwitter.svg";
import subscribeBellIcon from "../../assets/icons/subscribeBellIcon.svg";

import Pagination from "../../components/ui/Pagination";

import api from "../../api/axios"; // Your axios instance

const SOCIAL_LINKS = [
  { icon: blackFacebook, url: "https://facebook.com", label: "Facebook" },
  { icon: blackTwitter, url: "https://twitter.com", label: "Twitter" },
  { icon: blackTelegram, url: "https://t.me", label: "Telegram" },
  { icon: blackLinkedin, url: "https://linkedin.com", label: "LinkedIn" },
];

export default function CategoryDetailsGuest() {
  const { slug } = useParams();
  const [category, setCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  const [columns, setColumns] = useState(3);
  const [subscribers, setSubscribers] = useState(0);
  const [user, setUser] = useState(null);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  // ---------------- FETCH CATEGORY AND JOBS ----------------
  useEffect(() => {
    const fetchCategoryAndJobs = async () => {
      try {
        setLoading(true);
        // Fetch category
        const catRes = await api.get(`/categories/${slug}`);
        const catData = catRes.data.data.category;
        setCategory(catData);
        setSubscribers(catData.subscribers || 0);

        // Fetch jobs for this category (filter by category id)
        const jobsRes = await api.get("/jobs");
        const categoryJobs = jobsRes.data.data.jobs.filter(
          (job) => job.category === catData._id,
        );
        setJobs(categoryJobs);
      } catch (err) {
        console.error(err);
        setError(err.response?.data?.message || "Failed to load category");
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryAndJobs();
  }, [slug]);

  // ---------------- USER STATE ----------------
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("authUser"));
    setUser(savedUser);
  }, []);

  // ---------------- RESPONSIVE LAYOUT ----------------
  useEffect(() => {
    const updateLayout = () => {
      const w = window.innerWidth;
      if (w < 800) {
        setColumns(1);
        setPageSize(4);
      } else if (w < 1280) {
        setColumns(2);
        setPageSize(8);
      } else {
        setColumns(3);
        setPageSize(12);
      }
      setPage(1); // reset page
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  // ---------------- SUBSCRIBE HANDLER ----------------
  const handleSubscribe = () => {
    if (!user) {
      setIsSignupModalOpen(true);
      return;
    }
    setSubscribers((prev) => prev + 1);
  };

  if (loading)
    return (
      <p className="text-center py-20 text-[18px] font-kantumruy">Loading...</p>
    );
  if (error)
    return (
      <p className="text-center py-20 text-[18px] font-kantumruy text-red-600">
        {error}
      </p>
    );
  if (!category)
    return (
      <p className="text-center py-20 text-[18px] font-kantumruy">
        Category not found
      </p>
    );

  const totalPages = Math.ceil(jobs.length / pageSize);
  const visibleJobs = jobs.slice((page - 1) * pageSize, page * pageSize);

  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb
        sectionLabel="Categories"
        sectionTo="/categories"
        current={category.name}
      />

      {/* HEADER */}
      <section className="w-full py-[50px] text-center">
        <div className="max-w-7xl mx-auto">
          {category.icon && (
            <img
              src={category.icon}
              alt={category.name}
              className="mx-auto mb-6 w-[70px] h-[70px]"
            />
          )}

          <h1 className="text-[#000000] text-[23px] md:text-[42px] font-kantumruy font-bold">
            {category.name}
          </h1>

          <p className="mt-4 text-[#000000] text-[21px] md:text-[27px] mx-auto font-kantumruy px-[38px] lg:px-0">
            All job posts in the{" "}
            <span className="font-semibold">{category.name}</span> category.
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
            Subscribe to category
          </button>

          <p className="mt-[47px] text-[#000000] text-[16px] lg:text-[29.5px] font-kantumruy opacity-70">
            Subscribers: <strong>{subscribers}</strong>
          </p>

          <div className="flex justify-center gap-1 lg:gap-3 mt-2 lg:mt-3">
            {SOCIAL_LINKS.map(({ icon, url, label }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-6 h-6 bg-white flex items-center justify-center hover:scale-110 transition"
              >
                <img
                  src={icon}
                  alt={label}
                  className="w-4 h-4 lg:w-6 lg:h-6 invert"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* JOB CARDS */}
      <section className="xs:px-[10px] px-[25px] lg:px-[72px] pb-[80px]">
        <div
          className={`grid gap-[30px] ${
            columns === 1
              ? "grid-cols-1"
              : columns === 2
                ? "grid-cols-2"
                : "grid-cols-3"
          }`}
        >
          {visibleJobs.map((job) => (
            <JobCard key={job._id} job={job} />
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

      <SignupPromptModal
        isOpen={isSignupModalOpen}
        onClose={() => setIsSignupModalOpen(false)}
        message="Please register or login before you could subscribe to categories."
      />
      <DeveloperCTA />
    </>
  );
}
