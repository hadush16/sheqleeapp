// import Breadcrumb from "../../components/ui/Breadcrumb";
// import Button from "../../components/ui/Button";

// import googleIcon from "../../assets/images/googleIcon.png";
// import metaIcon from "../../assets/images/metaIcon.png";
// import microsoftIcon from "../../assets/images/microsoftIcon.png";
// import appleIcon from "../../assets/images/appleIcon.png";

// function StatCard({ value, title, description, reverse = false }) {
//   return (
//     <div
//       className={`flex ${
//         reverse ? "flex-row-reverse" : "flex-row"
//       } items-stretch gap-6 bg-white rounded-xl p-6`}
//     >
//       {/* BLACK STAT BOX */}
//       <div
//         className={`
//           bg-black text-white
//           w-[110px]
//           flex items-center justify-center
//           text-[22px] font-bold
//           self-stretch
//           ${reverse ? "rounded-r-lg" : "rounded-l-lg"}
//         `}
//       >
//         {value}
//       </div>

//       {/* TEXT */}
//       <div className="flex flex-col justify-center text-left">
//         <h3 className="font-kantumruy font-semibold text-[18px] mb-1">
//           {title}
//         </h3>
//         <p className="text-[14px] opacity-80 max-w-sm">{description}</p>
//       </div>
//     </div>
//   );
// }

// export default function ClientsGuest() {
//   return (
//     <>
//       {/* ================= BREADCRUMB ================= */}
//       <div className="hidden sm:block">
//         <Breadcrumb
//           sectionLabel="Clients"
//           sectionTo="/clients"
//           current="Clients"
//         />
//       </div>

//       {/* ================= HEADER ================= */}
//       <section className="text-center py-[60px] px-4">
//         <h1 className="text-[36px] font-kantumruy font-semibold mb-3">
//           Sheqlee for Clients
//         </h1>

//         <p className="max-w-xl mx-auto text-[16px] opacity-80 mb-6">
//           Access a pool of talented, competent and dedicated experts and
//           professionals from Ethiopia.
//         </p>

//         <div className="flex justify-center gap-4">
//           <Button
//             variant="outline"
//             className="border-[2px] border-[#8967B3] !text-black px-6 py-2 rounded-lg"
//           >
//             Log in
//           </Button>

//           <Button className="bg-[#8967B3] text-white px-6 py-2 rounded-lg">
//             Register as an employer
//           </Button>
//         </div>
//       </section>

//       {/* ================= STATS ================= */}
//       <section className="max-w-3xl mx-auto px-4 space-y-6">
//         <StatCard
//           value="1.5M+"
//           title="Unique alerts delivered"
//           description="We have been delivering notifications about new remote jobs to job seekers since the website launched."
//         />

//         <StatCard
//           reverse
//           value="49.7K+"
//           title="Telegram Channel Subscribers"
//           description="We have a Telegram channel with 49,700+ subscribers. Our channel posts new jobs every day."
//         />

//         <StatCard
//           value="1.5M+"
//           title="Unique alerts delivered"
//           description="We have been delivering notifications about new remote jobs to job seekers since the website launched."
//         />

//         <StatCard
//           reverse
//           value="49.7K+"
//           title="Telegram Channel Subscribers"
//           description="We have a Telegram channel with 49,700+ subscribers. Our channel posts new jobs every day."
//         />
//       </section>

//       {/* ================= CTA ================= */}
//       <div className="text-center mt-10">
//         <Button className="bg-[#8967B3] text-white px-8 py-3 rounded-xl">
//           Post a job now
//         </Button>
//       </div>

//       {/* ================= TRUSTED BY ================= */}
//       <section className="bg-[#EFEFEF] mt-16 py-10 text-center">
//         <p className="mb-6 font-kantumruy font-medium">Trusted by</p>

//         <div className="flex justify-center gap-8">
//           <a href="https://google.com" target="_blank" rel="noreferrer">
//             <img src={googleIcon} alt="Google" className="h-6" />
//           </a>
//           <a href="https://meta.com" target="_blank" rel="noreferrer">
//             <img src={metaIcon} alt="Meta" className="h-6" />
//           </a>
//           <a href="https://microsoft.com" target="_blank" rel="noreferrer">
//             <img src={microsoftIcon} alt="Microsoft" className="h-6" />
//           </a>
//           <a href="https://apple.com" target="_blank" rel="noreferrer">
//             <img src={appleIcon} alt="Apple" className="h-6" />
//           </a>
//         </div>
//       </section>
//     </>
//   );
// }

import Breadcrumb from "../../components/ui/Breadcrumb";
import Button from "../../components/ui/Button";

import googleIcon from "../../assets/images/googleIcon.png";
import metaIcon from "../../assets/images/metaIcon.png";
import microsoftIcon from "../../assets/images/microsoftIcon.png";
import appleIcon from "../../assets/images/appleIcon.png";
import { useEffect, useState } from "react";

import { formatWithCommas, formatCompact } from "../../utils/numberFormatters";
import { Link } from "react-router-dom";

function StatCard({
  value,
  title,
  description,
  reverse = false,
  offset = false,
}) {
  return (
    <div
      className={`
        ${offset ? "lg:ml-[270px] " : "lg:mr-[270px]"}
      `}
    >
      <div
        className={`
          flex ${reverse ? "flex-row-reverse " : "flex-row"}
          items-stretch gap-3 sm:gap-6
          bg-[#F7F7F7] rounded-xl
          
        `}
      >
        {/* BLACK STAT BOX */}
        <div
          className={`
            bg-black text-white
            w-[90px] lg:w-[270px]
            flex items-center justify-center
            text-[14px] xs:text-[16px] sm:text-[18px] lg:text-[50px]
            font-bold
            h-auto
            ${reverse ? "rounded-r-[11px] lg:rounded-r-[15px] " : "rounded-l-[8px] lg:rounded-l-[11px]"}
          `}
        >
          {value}
        </div>

        {/* TEXT */}
        <div
          className={`
    flex flex-col justify-center text-[#000000]  xs:p-4 sm:p-6
    ${reverse ? "text-right items-end" : "text-left items-start"}
  `}
        >
          <h3 className="font-kantumruy font-medium text-[16px] lg:text-[34px] lg:mb-[19px]">
            {title}
          </h3>
          <p className="text-[11px] sm:text-[15px] lg:text-[17px] opacity-80 lg:max-w-[510px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ClientsGuest() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch("http://your-api.com/stats") // replace with your real API
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch(console.error);
  }, []);

  // if (!stats) return null;
  // if (!stats) {
  //   return <div className="text-center py-20">Loading...</div>;
  // }

  return (
    <>
      {/* ================= BREADCRUMB ================= */}
      <div className="hidden sm:block">
        <Breadcrumb
          items={[{ label: "Sheqlee", to: "/" }, { label: "Clients" }]}
        />
      </div>

      {/* ================= HEADER ================= */}
      <section className="text-center py-8 xs:py-10 sm:py-[60px] px-4">
        {/* Desktop / Tablet title */}
        <h1 className="hidden sm:block text-[32px] lg:text-[48px] font-kantumruy font-semibold mb-3">
          Sheqlee for Clients
        </h1>

        {/* Mobile title */}
        <h1 className="sm:hidden text-[22px] xs:text-[24px] font-kantumruy font-semibold mb-3">
          Qagnew for Clients
        </h1>

        <p className="max-w-2xl mx-auto text-[16px] xs:text-[19px] sm:text-[23px] md:text-[27px] leading-[33px] opacity-80 mb-[70px]">
          Access a pool of talented, competent and dedicated experts and
          professionals from Ethiopia.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 px-[42px] md:px-0">
          <Button
            variant="outline"
            className="border-[2px] md:border-[4px] border-[#8967B3] !text-black px-5 py-2 rounded-lg w-full sm:w-auto text-[13px] sm:text-[25px] sm:px-6 sm:py-3 font-medium"
          >
            Log in
          </Button>

          <Link to="/company-signup">
            <Button className="bg-[#8967B3] text-[#FFFFFF] px-3 xl:px-[29px] sm:px-[24px] py-2 sm:py-[20px] rounded-lg w-full sm:w-auto text-[13px] sm:text-[23px] xl:text-[25px] font-medium tracking-normal">
              Register as an employer
            </Button>
          </Link>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="max-w-5xl lg:max-w-7xl mx-[23px] lg:mx-auto px-4 space-y-3 xs:space-y-4 sm:space-y-6">
        <StatCard
          value="1.5M+"
          title="Unique alerts delivered"
          description="We have been delivered 3,916,718 notifications about new remote jobs to job seekers since the website launched. (Launched: 1 YEAR AGO)"
        />

        {/* <StatCard
        value={formatCompact(stats.notifications)}
        title="Unique alerts delivered"
        description={`We have delivered ${formatWithCommas(stats.notifications)} notifications about new remote jobs to job seekers since the website launched. (Launched: 1 YEAR AGO)`}
      /> */}

        <StatCard
          reverse
          offset
          value="49.7K+"
          title="Telegram Channel Subscribers"
          description="We have a telegram channel with 49,716+ real subscribers. Our channel posts have 29.5K views per day on average."
        />

        {/* <StatCard
        reverse
        value={formatCompact(stats.subscribers)}
        title="Telegram Channel Subscribers"
        description={`We have a telegram channel with ${formatWithCommas(stats.subscribers)} real subscribers. Our channel posts have ${formatCompact(stats.dailyViews)} views per day on average.`}
      /> */}

        <StatCard
          value="1.5M+"
          title="Unique alerts delivered"
          description="We have been delivered 3,916,718 notifications about new remote jobs to job seekers since the website launched. (Launched: 1 YEAR AGO)"
        />

        <StatCard
          reverse
          offset
          value="49.7K+"
          title="Telegram Channel Subscribers"
          description="We have a telegram channel with 49,716+ real subscribers. Our channel posts have 29.5K views per day on average."
        />
      </section>

      {/* ================= CTA ================= */}
      <div className="text-center mt-6 xs:mt-8 sm:mt-10">
        <Button
          className="
            bg-[#8967B3] text-white
            px-5 xs:px-6 sm:px-8
            py-2 xs:py-2.5 sm:py-3
            rounded-xl
            text-[13px] xs:text-[14px]
            mx-auto
          "
        >
          Post a job now
        </Button>
      </div>

      {/* ================= TRUSTED BY ================= */}
      <section className="bg-[#EFEFEF] mt-10 xs:mt-12 sm:mt-16 py-6 xs:py-8 sm:py-10 text-center">
        <p className="mb-5 font-kantumruy font-medium text-[13px] xs:text-[14px] sm:text-[16px]">
          Trusted by
        </p>

        <div className="flex flex-wrap justify-center gap-5 xs:gap-6 sm:gap-8">
          <a href="https://google.com" target="_blank" rel="noreferrer">
            <img src={googleIcon} alt="Google" className="h-4 xs:h-5 sm:h-6" />
          </a>
          <a href="https://meta.com" target="_blank" rel="noreferrer">
            <img src={metaIcon} alt="Meta" className="h-4 xs:h-5 sm:h-6" />
          </a>
          <a href="https://microsoft.com" target="_blank" rel="noreferrer">
            <img
              src={microsoftIcon}
              alt="Microsoft"
              className="h-4 xs:h-5 sm:h-6"
            />
          </a>
          <a href="https://apple.com" target="_blank" rel="noreferrer">
            <img src={appleIcon} alt="Apple" className="h-4 xs:h-5 sm:h-6" />
          </a>
        </div>
      </section>
    </>
  );
}
