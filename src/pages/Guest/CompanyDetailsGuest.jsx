// import { useParams } from "react-router-dom";
// import { useState } from "react";

// import Breadcrumb from "../../components/ui/Breadcrumb";
// import JobCard from "../../components/cards/JobCard";

// import subscribeBellIcon from "../../assets/icons/subscribeBellIcon.svg";
// import verifyIcon from "../../assets/icons/verifyIcon.svg";

// import { COMPANIES } from "../../utils/companies.data";
// import { JOBS } from "../../utils/mockJobs";

// export default function CompanyDetailsGuest() {
//   const { name } = useParams();
//   const decodedName = decodeURIComponent(name);

//   const company = COMPANIES.find((c) => c.name === decodedName);
//   const companyJobs = JOBS.filter((job) => job.company === decodedName);

//   const [expanded, setExpanded] = useState(false);

//   if (!company) {
//     return <p className="text-center py-20">Company not found</p>;
//   }

//   return (
//     <>
//       {/* Breadcrumb */}
//       <Breadcrumb
//         sectionLabel="Companies"
//         sectionTo="/companies"
//         current={company.name}
//       />

//       {/* HEADER */}
//       <section className="text-center max-w-3xl mx-auto py-12">
//         <img src={company.icon} alt="" className="mx-auto w-16 mb-4" />

//         <div className="flex justify-center items-center gap-2">
//           <h1 className="text-3xl font-bold">{company.name}</h1>
//           {company.verified && (
//             <img src={verifyIcon} alt="verified" className="w-5 h-5" />
//           )}
//         </div>

//         {/* INFO BOXES */}
//         <div className="flex flex-wrap justify-center gap-3 mt-6">
//           <InfoBox>{company.website}</InfoBox>
//           <InfoBox>{company.size}</InfoBox>
//           <InfoBox>{company.location}</InfoBox>
//         </div>

//         {/* SUBSCRIBE */}
//         <button className="mt-6 inline-flex items-center gap-2 bg-[#8967B3] text-white px-6 py-3 rounded-xl">
//           <img src={subscribeBellIcon} className="w-4 h-4" />
//           Subscribe to company
//         </button>

//         <p className="mt-2 text-sm text-gray-600">
//           Subscribers: {company.subscribers}
//         </p>
//       </section>

//       {/* DESCRIPTION */}
//       <section className="max-w-4xl mx-auto px-6">
//         <p className={`text-gray-700 ${!expanded && "line-clamp-4"}`}>
//           {company.description}
//         </p>

//         <button
//           onClick={() => setExpanded(!expanded)}
//           className="mt-2 text-sm text-[#8967B3] font-medium"
//         >
//           {expanded ? "Show less" : "Read more"}
//         </button>
//       </section>

//       {/* JOBS */}
//       <section className="mt-16 px-6">
//         <h2 className="text-center text-2xl font-semibold mb-10">
//           Job posts from {company.name}
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {companyJobs.map((job) => (
//             <JobCard key={job.id} job={job} />
//           ))}
//         </div>
//       </section>
//     </>
//   );
// }

// function InfoBox({ children }) {
//   return (
//     <div className="bg-[#F7F7F7] px-4 py-2 rounded-lg text-sm">{children}</div>
//   );
// }

import { useParams } from "react-router-dom";
import { useState } from "react";

import Breadcrumb from "../../components/ui/Breadcrumb";
import JobCard from "../../components/cards/JobCard";

import subscribeBellIcon from "../../assets/icons/subscribeBellIcon.svg";
import verifyIcon from "../../assets/icons/verifyIcon.svg";

import { COMPANIES } from "../../utils/companies.data";
import { JOBS } from "../../utils/mockJobs";

export default function CompanyDetailsGuest() {
  const { name } = useParams();
  const decodedName = decodeURIComponent(name);

  const company = COMPANIES.find((c) => c.name === decodedName);
  const companyJobs = JOBS.filter((job) => job.company === decodedName);

  const [expanded, setExpanded] = useState(false);

  if (!company) {
    return <p className="text-center py-20">Company not found</p>;
  }

  return (
    <>
      {/* Breadcrumb (unchanged) */}
      <Breadcrumb
        sectionLabel="Companies"
        sectionTo="/companies"
        current={company.name}
      />

      {/* HEADER */}
      <section className="max-w-3xl mx-auto py-8 sm:py-12 px-4 sm:px-0 text-center">
        {/* ICON */}
        <img src={company.icon} alt="" className="mx-auto w-14 sm:w-16 mb-4" />

        {/* NAME + VERIFIED */}
        <div className="flex justify-center items-center gap-2">
          <h1 className="text-2xl sm:text-3xl font-bold">{company.name}</h1>
          {company.verified && (
            <img
              src={verifyIcon}
              alt="verified"
              className="w-4 sm:w-5 h-4 sm:h-5"
            />
          )}
        </div>

        {/* INFO BOXES */}
        <div
          className="
            mt-6
            grid grid-cols-2 gap-2
            sm:flex sm:flex-wrap sm:justify-center sm:gap-3
          "
        >
          <InfoBox>{company.website}</InfoBox>
          <InfoBox>{company.size}</InfoBox>
          <InfoBox>{company.location}</InfoBox>
        </div>

        {/* SUBSCRIBE BUTTON */}
        <button
          className="
            mt-6 mx-auto
            inline-flex items-center gap-2
            bg-[#8967B3] text-white
            px-5 py-2.5
            text-sm
            rounded-xl
          "
        >
          <img src={subscribeBellIcon} className="w-4 h-4" />
          Subscribe to company
        </button>

        {/* SUBSCRIBERS */}
        <p className="mt-2 text-sm text-gray-600 text-center">
          Subscribers: {company.subscribers}
        </p>
      </section>

      {/* DESCRIPTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center sm:text-left">
        <p className={`text-gray-700 ${!expanded && "line-clamp-4"}`}>
          {company.description}
        </p>

        <div className="flex justify-end sm:justify-start">
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-2 text-sm text-[#8967B3] font-medium"
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        </div>
      </section>

      {/* JOBS */}
      <section className="mt-12 sm:mt-16 px-4 sm:px-6">
        <h2 className="text-center text-xl sm:text-2xl font-semibold mb-8 sm:mb-10">
          Job posts from {company.name}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {companyJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </section>
    </>
  );
}

function InfoBox({ children }) {
  return (
    <div className="bg-[#F7F7F7] px-3 py-2 rounded-lg text-sm text-center">
      {children}
    </div>
  );
}
