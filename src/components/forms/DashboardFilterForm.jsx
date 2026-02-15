// import { useState } from "react";
// import Select from "../ui/Select";
// import placeholder from "../../assets/icons/placeholder.svg";
// import rightPositionArrow from "../../assets/icons/rightPositionArrow.svg";

// export default function DashboardFilterForm({
//   icon,
//   title,
//   description,
//   onApply,
// }) {
//   const [filters, setFilters] = useState({
//     category: "",
//     type: "",
//     level: "",
//     tech: "",
//   });

//   const categoryOptions = [
//     "Web frontend",
//     "Backend and database",
//     "UI/UX & product design",
//     "Machine learning",
//     "Mobile application",
//     "Web full-stack",
//     "QA & DevOps Engineer",
//     "Security",
//   ].map((c) => ({ label: c, value: c }));

//   const techOptions = [
//     "JavaScript",
//     "Python",
//     "Golang",
//     "Flutter",
//     "ReactJS",
//     "SvelteJS",
//   ].map((t) => ({ label: t, value: t }));

//   return (
//     <div>
//       {/* Breadcrumb – hidden on mobile */}
//       <div className="hidden sm:flex items-center gap-2 bg-[#FCFCFC] max-w-7xl mx-auto px-[72px] py-[19px] text-sm">
//         <img src={placeholder} className="w-[15px] h-[23px]" />
//         <span className="text-[19px]">Sheqlee</span>
//         <img src={rightPositionArrow} className="w-[5px]" />
//         <span className="text-[19px]">Dashboard</span>
//       </div>

//       <div className="rounded-2xl mt-10 px-4 sm:px-6">
//         {/* ICON */}
//         <div className="flex justify-center mb-4">
//           <img src={icon} className="w-10 h-10" />
//         </div>

//         {/* TITLE */}
//         <h1 className="text-[#000000] text-[28px] sm:text-[36px] md:text-[45px] text-center font-kantumruy font-semibold">
//           {title}
//         </h1>

//         {/* DESCRIPTION */}
//         <p className="text-center text-[16px] sm:text-[22px] md:text-[27px] mt-4 max-w-2xl mx-auto">
//           {description}
//         </p>

//         {/* FILTERS */}
//         <div className="mt-10 flex justify-center">
//           <div
//             className="
//               grid
//               grid-cols-2
//               sm:grid-cols-2
//               lg:grid-cols-3
//               gap-5
//               w-full
//               max-w-4xl
//             "
//           >
//             {/* CATEGORY */}
//             <div className="col-span-2 sm:col-span-1 lg:col-span-1">
//               <Select
//                 placeholder="Select categories"
//                 options={categoryOptions}
//                 onChange={(e) =>
//                   setFilters({ ...filters, category: e.target.value })
//                 }
//               />
//             </div>

//             {/* TYPE */}
//             <Select
//               placeholder="Select type"
//               options={[
//                 { label: "Full time", value: "full-time" },
//                 { label: "Part time", value: "part-time" },
//                 { label: "Contract", value: "contract" },
//               ]}
//               onChange={(e) => setFilters({ ...filters, type: e.target.value })}
//             />

//             {/* LEVEL */}
//             <Select
//               placeholder="Select level"
//               options={[
//                 { label: "Junior", value: "junior" },
//                 { label: "Mid", value: "mid" },
//                 { label: "Senior", value: "senior" },
//               ]}
//               onChange={(e) =>
//                 setFilters({ ...filters, level: e.target.value })
//               }
//             />

//             {/* TECHNOLOGY */}
//             <div className="col-span-2 lg:col-span-2 w-full">
//               <Select
//                 placeholder="Select tags"
//                 options={techOptions}
//                 onChange={(e) =>
//                   setFilters({ ...filters, tech: e.target.value })
//                 }
//               />
//             </div>

//             {/* APPLY */}
//             <div className="col-span-2 lg:col-span-1 flex justify-center">
//               <button
//                 onClick={() => onApply(filters)}
//                 className="
//       w-full
//       sm:w-[250px]
//       h-[60px]
//       bg-[#8967B3]
//       text-white
//       text-[18px]
//       font-semibold
//       rounded-[11px]
//     "
//               >
//                 Apply filter
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import Select from "../ui/Select";
import Breadcrumb from "../ui/Breadcrumb";

export default function DashboardFilterForm({
  icon,
  title,
  description,
  filters,
  onChange,
  onApply,
  categoryOptions,
  typeOptions,
  levelOptions,
  tagOptions,
}) {
  return (
    <div>
      <Breadcrumb
        items={[{ label: "Sheqlee", to: "/" }, { label: "Dashboard" }]}
      />

      <div className="rounded-2xl mt-10 px-4 sm:px-6">
        <div className="flex justify-center mb-4">
          <img src={icon} className="w-10 h-10" />
        </div>

        <h1 className="text-[#000000] text-[28px] sm:text-[36px] md:text-[45px] text-center font-kantumruy font-semibold">
          {title}
        </h1>

        <p className="text-center text-[16px] sm:text-[22px] md:text-[28px] mt-4 font-kantumruy leading-10 max-w-2xl mx-auto">
          {description}
        </p>

        <div className="mt-10 flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full max-w-[53rem]">
            {/* CATEGORY */}
            <div className="col-span-2 lg:col-span-2 lg:text-[23px] text-[#444444] tracking-normal font-kantumruy">
              <Select
                placeholder="All categories"
                options={categoryOptions}
                value={filters.category}
                onChange={(e) =>
                  onChange({ ...filters, category: e.target.value })
                }
              />
            </div>

            {/* TYPE */}
            <div className="col-span-1 lg:text-[23px] text-[#444444] tracking-normal font-kantumruy">
              <Select
                placeholder="All types"
                options={typeOptions}
                value={filters.type}
                onChange={(e) => onChange({ ...filters, type: e.target.value })}
              />
            </div>

            {/* LEVEL */}
            <div className="col-span-1 lg:text-[23px] text-[#444444] tracking-normal font-kantumruy">
              <Select
                placeholder="All levels"
                options={levelOptions}
                value={filters.level}
                onChange={(e) =>
                  onChange({ ...filters, level: e.target.value })
                }
              />
            </div>

            {/* TAG */}
            <div className="col-span-2 lg:col-span-3 lg:text-[23px] text-[#444444] tracking-normal font-kantumruy">
              <Select
                placeholder="All tags"
                options={tagOptions}
                value={filters.tag}
                onChange={(e) => onChange({ ...filters, tag: e.target.value })}
              />
            </div>

            {/* APPLY */}
            {/* APPLY */}
            <div className="col-span-2 lg:col-span-1 pt-[7px]">
              <button
                onClick={onApply}
                className="w-full h-[60px] bg-[#8967B3] text-[#FFFFFF] text-[27px] font-semibold rounded-[11px] py-10px "
              >
                Apply filter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
