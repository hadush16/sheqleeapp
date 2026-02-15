// import PropTypes from "prop-types";
// import verifyIcon from "../../assets/icons/verifyIcon.svg";

// export default function CompanyCard({ name, jobs, subscribers, verified }) {
//   return (
//     <div className="relative flex bg-[#f7f7f7] rounded-[14px] overflow-hidden">
//       {/* Black strip */}
//       <div className="w-[8px] bg-black rounded-l-[14px]" />

//       {/* Content */}
//       <div className="flex-1 px-5 py-4">
//         <div className="flex items-center gap-2">
//           <h3 className="font-semibold text-[16px] text-gray-900">{name}</h3>
//           {verified && (
//             <img src={verifyIcon} alt="verified icon" className="w-4 h-4" />
//           )}
//         </div>

//         <p className="mt-1 text-sm text-gray-600">
//           {jobs} jobs &nbsp;•&nbsp; {subscribers} subscribers
//         </p>
//       </div>
//     </div>
//   );
// }

// CompanyCard.propTypes = {
//   name: PropTypes.string.isRequired,
//   jobs: PropTypes.number.isRequired,
//   subscribers: PropTypes.number.isRequired,
//   verified: PropTypes.bool,
// };

// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
// import verifyIcon from "../../assets/icons/verifyIcon.svg";

// export default function CompanyCard({ name, jobs, subscribers, verified }) {
//   return (
//     <Link to={`/companies/${encodeURIComponent(name)}`}>
//       <div className="relative flex bg-[#f7f7f7] rounded-[14px] overflow-hidden hover:shadow-md transition">
//         <div className="w-[8px] bg-black rounded-l-[14px]" />

//         <div className="flex-1 px-5 py-4">
//           <div className="flex items-center gap-2">
//             <h3 className="font-semibold text-[16px] text-gray-900">{name}</h3>
//             {verified && (
//               <img src={verifyIcon} alt="verified icon" className="w-4 h-4" />
//             )}
//           </div>

//           <p className="mt-1 text-sm text-gray-600">
//             {jobs} jobs • {subscribers} subscribers
//           </p>
//         </div>
//       </div>
//     </Link>
//   );
// }

// CompanyCard.propTypes = {
//   name: PropTypes.string.isRequired,
//   jobs: PropTypes.number.isRequired,
//   subscribers: PropTypes.number.isRequired,
//   verified: PropTypes.bool,
// };

import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import verifyIcon from "../../assets/icons/verifyIcon.svg";

export default function CompanyCard({ name, jobs, subscribers, verified }) {
  return (
    <Link to={`/companies/${encodeURIComponent(name)}`}>
      <div className="relative flex bg-[#f7f7f7] rounded-[14px] overflow-hidden hover:shadow-md transition">
        {/* LEFT BLACK BAR */}
        <div className="w-[6px] sm:w-[8px] bg-black rounded-l-[14px]" />

        {/* CONTENT */}
        <div className="flex-1 px-3 py-3 xs:px-4 xs:py-3 sm:px-5 sm:py-4">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-[14px] xs:text-[15px] sm:text-[16px] text-gray-900">
              {name}
            </h3>

            {verified && (
              <img
                src={verifyIcon}
                alt="verified icon"
                className="w-3 h-3 sm:w-4 sm:h-4"
              />
            )}
          </div>

          <p className="mt-1 text-[12px] xs:text-[13px] sm:text-sm text-gray-600">
            {jobs} jobs • {subscribers} subscribers
          </p>
        </div>
      </div>
    </Link>
  );
}

CompanyCard.propTypes = {
  name: PropTypes.string.isRequired,
  jobs: PropTypes.number.isRequired,
  subscribers: PropTypes.number.isRequired,
  verified: PropTypes.bool,
};
