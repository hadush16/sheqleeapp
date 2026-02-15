// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
// import latestJobCalendarIcon from "../../assets/icons/latestJobCalendarIcon.svg";
// import latestJobclockIcon from "../../assets/icons/latestJobclockIcon.svg";
// import latestJobcompanyIcon from "../../assets/icons/latestJobcompanyIcon.svg";
// import pricePerHourIcon from "../../assets/icons/latestJobCalendarIcon.svg";
// import { timeAgo } from "../../utils/timeAgo";

// export default function JobCard({ job }) {
//   return (
//     <div
//       className="
//         block bg-[#F7F7F7] rounded-[20px]
//         nest-hub:max-w-[372px]
//         ipad-pro:max-w-[372px]
//         p-4 sm:p-5 lg:p-[30px]
//         hover:shadow-md transition h-full
//       "
//     >
//       <div className="flex flex-col">
//         {/* Title */}
//         <div className="flex items-center gap-3 mb-4 lg:mb-[28px]">
//           {job.icon && (
//             <img
//               src={job.icon}
//               alt="icons for each jobs"
//               className="w-[22px] h-[26px] lg:w-[26px] lg:h-[30px]"
//             />
//           )}

//           <h3 className="font-kantumruy font-medium text-base sm:text-lg lg:text-[25px]">
//             {job.title}
//           </h3>
//         </div>

//         {/* Description */}
//         <p className="mb-5 lg:mb-[40px] text-sm nest-hub:text-[18.3px]  ipad-pro:max-w-[372px] lg:text-[18.3px]">
//           {job.shortDescription}
//         </p>

//         {/* Info grid */}

//         <div
//           className="
//   grid
//   grid-cols-2
//   xs335:grid-cols-3
//   gap-2 lg:gap-[12px]
//   text-[10px] lg:text-[11px]
// "
//         >
//           {[
//             timeAgo(job.createdAt),
//             job.company || "N/A",
//             job.type || "N/A",
//             job.level || "N/A",
//             job.salary && job.salary.min != null && job.salary.max != null
//               ? `${Math.round(job.salary.min / 1000)}K - ${Math.round(
//                   job.salary.max / 1000,
//                 )}K / ${job.salary.unit.slice(0, 3)}`
//               : "N/A",
//           ].map((item, i) => (
//             <span
//               key={i}
//               className="bg-[#DFDFDF] px-2 py-1 rounded flex items-center gap-2"
//             >
//               <img
//                 src={
//                   [
//                     latestJobCalendarIcon,
//                     latestJobcompanyIcon,
//                     latestJobclockIcon,
//                     latestJobCalendarIcon,
//                     pricePerHourIcon,
//                   ][i]
//                 }
//                 className="w-3 h-3 lg:w-[15px] lg:h-[15px]"
//               />
//               {item}
//             </span>
//           ))}
//           <Link to={`/jobs/${job.id}`}>
//             <button className="bg-[#8967B3] text-white px-3 py-1 rounded text-xs lg:text-[15px] font-kantumruy font-medium">
//               Apply
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// JobCard.propTypes = {
//   job: PropTypes.object.isRequired,
// };

import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import latestJobCalendarIcon from "../../assets/icons/latestJobCalendarIcon.svg";
import latestJobclockIcon from "../../assets/icons/latestJobclockIcon.svg";
import latestJobcompanyIcon from "../../assets/icons/latestJobcompanyIcon.svg";
import pricePerHourIcon from "../../assets/icons/latestJobCalendarIcon.svg";
import { timeAgo } from "../../utils/timeAgo";

export default function JobCard({ job }) {
  return (
    // <div
    //   className="
    //     block bg-[#F7F7F7] rounded-[20px]
    //     nest-hub:max-w-[372px]
    //     ipad-pro:max-w-[372px]
    //     p-4 sm:p-5 lg:p-[30px]
    //     hover:shadow-md transition h-full
    //   "
    // >
    <div
      className="
  block bg-[#F7F7F7] rounded-[20px]
  p-4 sm:p-5 lg:p-[30px]
  hover:shadow-md transition
  h-full
  min-h-[250px] lg:min-h-[300px]
"
    >
      <div className="flex flex-col h-full">
        {/* Title */}
        <div className="flex items-center gap-3 mb-4 lg:mb-[28px]">
          {job.icon && (
            <img
              src={job.icon}
              alt="icons for each jobs"
              className="w-[22px] h-[26px] lg:w-[26px] lg:h-[30px]"
            />
          )}

          <h3 className="font-kantumruy font-semibold text-base sm:text-[23px] lg:text-[25px]">
            {job.title}
          </h3>
        </div>

        {/* Description */}
        <p className="mb-5 lg:mb-[40px] text-sm nest-hub:text-[18.3px]  ipad-pro:max-w-[372px] lg:text-[18.3px]">
          {job.shortDescription}
        </p>

        {/* Info grid */}

        <div
          className="
    mt-auto
    grid
    grid-cols-2
    xs335:grid-cols-3
    gap-2 lg:gap-[12px]
    text-[10px] lg:text-[11px]
  "
        >
          {[
            timeAgo(job.createdAt),
            job.company || "N/A",
            job.type || "N/A",
            job.level || "N/A",
            job.salary && job.salary.min != null && job.salary.max != null
              ? `${Math.round(job.salary.min / 1000)}K - ${Math.round(
                  job.salary.max / 1000,
                )}K / ${job.salary.unit.slice(0, 3)}`
              : "N/A",
          ].map((item, i) => (
            <span
              key={i}
              className="bg-[#DFDFDF] px-2 py-1 rounded flex items-center gap-2"
            >
              <img
                src={
                  [
                    latestJobCalendarIcon,
                    latestJobcompanyIcon,
                    latestJobclockIcon,
                    latestJobCalendarIcon,
                    pricePerHourIcon,
                  ][i]
                }
                className="w-3 h-3 lg:w-[15px] lg:h-[15px]"
              />
              {item}
            </span>
          ))}
          <Link to={`/jobs/${job.id}`}>
            <button className="bg-[#8967B3] text-white px-3 py-1 rounded text-xs lg:text-[15px] font-kantumruy font-medium">
              Apply
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

JobCard.propTypes = {
  job: PropTypes.object.isRequired,
};
