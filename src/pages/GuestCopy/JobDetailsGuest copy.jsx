import { Link, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { JOBS } from "../../utils/mockJobs";
import Breadcrumb from "../../components/ui/Breadcrumb";
import DeveloperCTA from "../../components/home/DeveloperCTA";
import blackFacebook from "../../assets/icons/blackFacebook.svg";
import blackTwitter from "../../assets/icons/blackTwitter.svg";
import blackTelegram from "../../assets/icons/blackTelegram.svg";
import blackLinkedin from "../../assets/icons/blackLinkedin.svg";
import IconAwesomeTags from "../../assets/icons/IconAwesomeTags.svg";
import latestJobCalendarIcon from "../../assets/icons/latestJobCalendarIcon.svg";
import latestJobcompanyIcon from "../../assets/icons/latestJobcompanyIcon.svg";
import latestJobclockIcon from "../../assets/icons/latestJobclockIcon.svg";
import { timeAgo } from "../../utils/timeAgo";
import pricePerHourIcon from "../../assets/icons/pricePerHourIcon.svg";

export default function JobDetailsGuest() {
  const { id } = useParams();
  const job = JOBS.find((j) => String(j.id) === id);

  const [expanded, setExpanded] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);
  const descRef = useRef(null);

  const badges = [
    { value: timeAgo(job.posted), icon: latestJobCalendarIcon },
    { value: job.company, icon: latestJobcompanyIcon },
    { value: job.type, icon: latestJobclockIcon },
    { value: job.level, icon: latestJobCalendarIcon },
    { value: job.salary, icon: pricePerHourIcon },
  ];

  useEffect(() => {
    const checkOverflow = () => {
      if (!descRef.current) return;

      const el = descRef.current;

      // Force collapse before measuring (important)
      if (!expanded) {
        setShowReadMore(el.scrollHeight > el.clientHeight);
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);

    return () => window.removeEventListener("resize", checkOverflow);
  }, [expanded]);

  if (!job) {
    return <p className="text-center mt-20">Job not found</p>;
  }

  return (
    <div className="min-h-screen">
      <Breadcrumb
        sectionLabel="All Jobs"
        sectionTo="/jobs"
        current={job.title}
      />

      <div className="px-[17px] md:px-[35px] xl:px-[178px] pt-[67px]">
        {/* ================= HEADER ================= */}
        <div className="text-center">
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
            {job.icon && (
              <img
                src={job.icon}
                alt={job.title}
                className="w-[53px] h-[55px]"
              />
            )}

            <h1 className="text-[28px] md:text-[41px] font-kantumruy font-semibold text-center md:text-left">
              {job.title}
            </h1>
          </div>
          {/* Meta badges */}
          <div className="flex justify-center gap-2 lg:gap-4 mt-[30px] flex-wrap mb-[35px] max-sm:max-w-xs max-sm:mx-auto">
            {badges.map((item, index) => (
              <Badge key={index}>
                <div className="flex items-center gap-2">
                  <img
                    src={item.icon}
                    alt="Badge Icons"
                    className="w-3 h-3 lg:w-[15px] lg:h-[15px]"
                  />
                  <span>{item.value}</span>
                </div>
              </Badge>
            ))}
          </div>

          <button className="mt-7 px-[30px] sm:px-[70px] lg:px-[103px] bg-[#8967B3] text-white rounded-[7px] lg:rounded-xl text-lg lg:text-[25px] font-kantumruy font-semibold py-[10px] lg:py-[18px]">
            Apply now
          </button>
          <p className="hidden lg:block text-[15px] mt-[12px] font-kantumruy text-[#000000] ">
            Please mention <span className="font-semibold">Sheqlee</span> when
            you apply
          </p>
        </div>

        {/* ================= DESCRIPTION ================= */}

        <div className="mt-12 bg-[#F7F7F7] rounded-xl lg:p-[60px] p-4 sm:text-[15px] md:text-[16px] lg:text-[19.5px] leading-[25px] sm:leading-7 font-kantumruy relative">
          <div
            ref={descRef}
            className={`transition-all ${
              expanded
                ? ""
                : "max-h-[400px] overflow-hidden sm:max-h-[300px] lg:max-h-none lg:overflow-visible"
            }`}
          >
            <div className="mb-12 text-[16px] sm:text-[19px] leading-7 text-[#000000] font-kantumruy ">
              {job.description}
            </div>

            {job.qualifications?.length > 0 && (
              <Section title="Qualifications">
                {job.qualifications.map((q, i) => (
                  <DashList key={i} text={q} />
                ))}
              </Section>
            )}

            {job.experience?.length > 0 && (
              <Section title="Experience">
                {job.experience.map((e, i) => (
                  <DashList key={i} text={e} />
                ))}
              </Section>
            )}

            {job.skills?.length > 0 && (
              <Section title="Skills & Knowledge">
                {job.skills.map((s, i) => (
                  <DashList key={i} text={s} />
                ))}
              </Section>
            )}

            {job.detailDescription?.length > 0 && (
              <Section title="Description">
                {job.detailDescription.map((text, i) => (
                  <p
                    key={i}
                    className={`leading-7 ${
                      text.startsWith("PRIMARY PURPOSE") ? "mt-8" : "mb-6"
                    }`}
                  >
                    {text}
                  </p>
                ))}
              </Section>
            )}
          </div>

          {!expanded && showReadMore && (
            <div className="pointer-events-none absolute bottom-16 left-0 w-full h-16 bg-gradient-to-t from-[#F7F7F7] to-transparent xl:hidden" />
          )}

          {/* Read more (mobile + tablet only, conditional) */}
          {showReadMore && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="
      mt-4 ml-auto flex items-center gap-3 p-[8px] rounded-md
      bg-[#8967B3] text-[#FFFFFF] font-semibold
      text-[17px] sm:text-[20px]
      lg:hidden
    "
            >
              {expanded ? "Read less" : "Read more"}
              <span>{expanded ? "↑" : "↓"}</span>
            </button>
          )}
        </div>

        {/* ================= TAGS (ICON KEPT) ================= */}
        {job.tags?.length > 0 && (
          <div className="flex justify-center gap-2 mt-12 flex-wrap max-w-md mx-auto">
            <img
              src={IconAwesomeTags}
              alt="Tags"
              className="bg-black rounded-[4px] w-8 h-7 p-1"
            />

            {job.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-[4px] bg-[#DFDFDF] text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* ================= APPLY + SHARE ================= */}
        <div className="text-center mt-10">
          <button className="mt-3 px-[30px] sm:px-[70px] lg:px-[103px] bg-[#8967B3] text-white rounded-[7px] lg:rounded-xl text-lg lg:text-[25px] font-kantumruy font-semibold py-[10px] lg:py-[18px]">
            Apply now
          </button>

          <p className="hidden lg:block text-[15px] mt-[12px] font-kantumruy">
            Please mention <span className="font-semibold">Sheqlee</span> when
            you apply
          </p>

          <p className="mt-6 text-[17px] font-kantumruy">Share with others</p>

          <div className="flex justify-center gap-4 mt-3 mb-[54px]">
            <Link to="https://www.facebook.com">
              <img src={blackFacebook} className="w-6 h-6" />
            </Link>
            <Link to="https://www.twitter.com">
              <img src={blackTwitter} className="w-6 h-6" />
            </Link>
            <Link to="https://www.telegram.org">
              <img src={blackTelegram} className="w-6 h-6" />
            </Link>
            <Link to="https://www.linkedin.com">
              <img src={blackLinkedin} className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>

      <DeveloperCTA />
    </div>
  );
}

/* ================= COMPONENTS ================= */

function Badge({ children }) {
  return (
    <span className="bg-[#DFDFDF] px-3 py-1 rounded-[4px] text-[#000000] text-[9px] lg:text-[12px] tracking-normal ">
      {children}
    </span>
  );
}

function Section({ title, children, className = "" }) {
  return (
    <div className={`mt-8 ${className}`}>
      {title && (
        <h3 className="font-kantumruy font-semibold text-[#000000] text-[18px] sm:text-[24px] mb-3 tracking-normal">
          {title}
        </h3>
      )}
      <div>{children}</div>
    </div>
  );
}

function DashList({ text }) {
  const items = text
    .split(" - ")
    .map((item) => item.trim())
    .filter(Boolean);

  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex gap-2">
          <span className="font-kantumruy font-semibold">-</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
