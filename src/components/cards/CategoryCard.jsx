import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function CategoryCard({ name, jobs, subscribers, icon, slug }) {
  return (
    <Link to={`/categories/${slug}`} className="block">
      <div className="flex items-stretch bg-[#F7F7F7] rounded-[15px] hover:shadow-sm transition overflow-hidden">
        {/* ICON */}
        <div className="w-[52px] xl:w-[96px] bg-black flex items-center justify-center">
          <img
            src={icon}
            alt={`${name} category icon`}
            className="w-6 h-6 xl:w-8 xl:h-8 object-contain"
          />
        </div>

        {/* TEXT */}
        <div className="p-[18px]">
          <h3 className="text-[15px] sm:text-[23px] font-kantumruy font-medium mb-2">
            {name}
          </h3>

          <p className="text-[11px] sm:text-[16px] opacity-70">
            {jobs} jobs • {subscribers} subscribers
          </p>
        </div>
      </div>
    </Link>
  );
}

CategoryCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  jobs: PropTypes.number.isRequired,
  subscribers: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
};

// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

// export default function CategoryCard({ id, name, jobs, subscribers, icon }) {
//   return (
//     <Link to={`/categories/${id}`} className="block">
//       <div className="flex items-stretch bg-[#F7F7F7] rounded-[15px] hover:shadow-sm transition overflow-hidden">
//         {/* ICON */}
//         <div
//           className="
//             w-[52px]
//             lg:w-[96px]
//             bg-black
//             flex items-center justify-center
//           "
//         >
//           <img
//             src={icon}
//             alt={`${name} category icon`}
//             className="
//               w-6 h-6
//               lg:w-8 lg:h-8
//               object-contain
//             "
//           />
//         </div>

//         {/* TEXT */}
//         <div className="p-[18px]">
//           <h3
//             className="
//               text-[24px]
//               md:text-[20px]
//               sm:text-[18px]
//               font-kantumruy
//               font-medium
//               mb-2
//               leading-tight
//             "
//           >
//             {name}
//           </h3>

//           <p
//             className="
//               text-[14px]
//               md:text-[13px]
//               sm:text-[12px]
//               opacity-70
//             "
//           >
//             {jobs} jobs • {subscribers} subscribers
//           </p>
//         </div>
//       </div>
//     </Link>
//   );
// }

// CategoryCard.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   jobs: PropTypes.number.isRequired,
//   subscribers: PropTypes.number.isRequired,
//   icon: PropTypes.string.isRequired,
// };
