// import CompanyCard from "../../components/cards/CompanyCard";
// import buildingIcon from "../../assets/images/company.png";
// import Breadcrumb from "../../components/ui/Breadcrumb";

// export default function CompaniesGuest() {
//   return (
//     <section>
//       {/* Breadcrumb */}
//       <div className="hidden sm:block">
//         <Breadcrumb sectionTo="/tags" current="Companies" />
//       </div>

//       {/* Header */}
//       <div className="flex flex-col items-center text-center mb-12 mx-auto">
//         <img src={buildingIcon} alt="" className="w-10 mb-4" />

//         <h1 className="font-recoleta text-3xl md:text-4xl font-bold">
//           Companies on Sheqlee
//         </h1>

//         <p className="mt-3 max-w-[520px] text-gray-600">
//           List of the companies on Sheqlee with their number of job posts and
//           subscribers.
//         </p>
//       </div>

//       {/* Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-20">
//         {companies.map((company, index) => (
//           <CompanyCard key={index} {...company} />
//         ))}
//       </div>
//     </section>
//   );
// }

// import CompanyCard from "../../components/cards/CompanyCard";
// import buildingIcon from "../../assets/images/company.png";
// import Breadcrumb from "../../components/ui/Breadcrumb";
// import { COMPANIES } from "../../utils/companies.data";

// export default function CompaniesGuest() {
//   return (
//     <section>
//       {/* Breadcrumb */}
//       <div className="hidden sm:block">
//         <Breadcrumb sectionTo="/tags" current="Companies" />
//       </div>

//       {/* Header */}
//       <div className="flex flex-col items-center text-center mb-12 mx-auto">
//         <img src={buildingIcon} alt="" className="w-10 mb-4" />

//         <h1 className="font-recoleta text-3xl md:text-4xl font-bold">
//           Companies on Sheqlee
//         </h1>

//         <p className="mt-3 max-w-[520px] text-gray-600">
//           List of the companies on Sheqlee with their number of job posts and
//           subscribers.
//         </p>
//       </div>

//       {/* Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-20">
//         {COMPANIES.map((company, index) => (
//           <CompanyCard key={index} {...company} />
//         ))}
//       </div>
//     </section>
//   );
// }

import CompanyCard from "../../components/cards/CompanyCard";
import buildingIcon from "../../assets/images/company.png";
import Breadcrumb from "../../components/ui/Breadcrumb";
import { COMPANIES } from "../../utils/companies.data";
import Pagination from "../../components/ui/Pagination";

export default function CompaniesGuest() {
  return (
    <>
      <section className="pb-16">
        <div className="hidden sm:block">
          <Breadcrumb sectionTo="/tags" current="Companies" />
        </div>

        <div className="flex flex-col items-center text-center mb-8 sm:mb-12 mx-auto px-3">
          <img
            src={buildingIcon}
            alt=""
            className="w-8 xs:w-9 sm:w-10 mb-3 sm:mb-4"
          />

          <h1 className="hidden sm:block font-recoleta text-3xl md:text-4xl font-bold">
            Companies on Sheqlee
          </h1>

          <h1 className="sm:hidden font-recoleta text-[18px] xs:text-[20px] font-bold">
            Companies on Qagnew
          </h1>

          <p className="mt-2 sm:mt-3 max-w-[520px] text-[13px] xs:text-[14px] sm:text-base text-gray-600">
            List of the companies on Qagnew with their number of job posts and
            subscribers.
          </p>
        </div>

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-4 sm:gap-6
          px-3 xs:px-4 sm:px-10 lg:px-20
        "
        >
          {COMPANIES.map((company, index) => (
            <CompanyCard key={index} {...company} />
          ))}
        </div>
      </section>
      <div className="px-[14px] sm:px-0 pb-[60px]">
        <Pagination currentPage={1} totalPages={40} onPageChange={() => {}} />
      </div>
    </>
  );
}
