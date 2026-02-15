// import { useEffect, useState } from "react";

// import Breadcrumb from "../../components/ui/Breadcrumb";
// import CategoryCard from "../../components/cards/CategoryCard";
// import DeveloperCTA from "../../components/home/DeveloperCTA";
// import categoriesIcon from "../../assets/icons/categoriesIcon.svg";

// import { CATEGORIES } from "../../utils/categories.data";

// export default function CategoriesGuest() {
//   return (
//     <>
//       <Breadcrumb
//         items={[{ label: "Sheqlee", to: "/" }, { label: "Categories" }]}
//       />

//       <section className="w-full py-[50px]">
//         <div className="flex flex-col items-center text-center mb-[60px]">
//           <div className="mb-8">
//             <img
//               src={categoriesIcon}
//               alt="Categories icon"
//               className="w-[90px] h-[90px]"
//             />
//           </div>

//           <h1 className="text-[50px] font-kantumruy font-bold text-[#000000]">
//             All Categories
//           </h1>

//           <p className="mt-4 max-w-xl text-[27px] text-[#000000] leading-[32px] font-kantumruy">
//             Job categories along with their respective number of jobs posted and
//             number of subscribers.
//           </p>
//         </div>
//         <div className="max-w-6xl mx-auto px-5 lg:px-0">
//           {/* GRID */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[80px] gap-y-[30px]">
//             {CATEGORIES.map((cat) => (
//               <CategoryCard
//                 key={cat.id}
//                 id={cat.id}
//                 name={cat.name}
//                 jobs={cat.jobs}
//                 subscribers={cat.subscribers}
//                 icon={cat.icon || categoriesIcon}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       <DeveloperCTA />
//     </>
//   );
// }

import { useEffect, useState } from "react";

import Breadcrumb from "../../components/ui/Breadcrumb";
import Pagination from "../../components/ui/Pagination";
import CategoryCard from "../../components/cards/CategoryCard";
import DeveloperCTA from "../../components/home/DeveloperCTA";
import categoriesIcon from "../../assets/icons/categoriesIcon.svg";

import { CATEGORIES } from "../../utils/categories.data";

export default function CategoriesGuest() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(null);

  // Responsive pagination only for <800px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 800) {
        setPageSize(10);
      } else {
        setPageSize(null); // show all
        setPage(1); // reset
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = pageSize ? Math.ceil(CATEGORIES.length / pageSize) : 1;

  const visibleCategories = pageSize
    ? CATEGORIES.slice((page - 1) * pageSize, page * pageSize)
    : CATEGORIES;
  return (
    <>
      <Breadcrumb
        items={[{ label: "Sheqlee", to: "/" }, { label: "Categories" }]}
      />

      <section className="w-full py-[50px]">
        <div className="flex flex-col items-center text-center mb-[60px]">
          <div className="mb-8">
            <img
              src={categoriesIcon}
              alt="Categories icon"
              className="w-[90px] h-[90px]"
            />
          </div>

          <h1 className="text-[50px] font-kantumruy font-bold text-[#000000]">
            All Categories
          </h1>

          <p className="mt-4 max-w-xl text-[27px] text-[#000000] leading-[32px] font-kantumruy">
            Job categories along with their respective number of jobs posted and
            number of subscribers.
          </p>
        </div>
        <div className="max-w-6xl mx-auto px-5 lg:px-0">
          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[80px] gap-y-[30px]">
            {visibleCategories.map((cat) => (
              <CategoryCard
                key={cat.id}
                id={cat.id}
                name={cat.name}
                jobs={cat.jobs}
                subscribers={cat.subscribers}
                icon={cat.icon || categoriesIcon}
              />
            ))}
          </div>

          {/* Pagination only shows for mobile */}
          {pageSize && totalPages > 1 && (
            <div className="mt-10 flex justify-center">
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={setPage}
              />
            </div>
          )}
        </div>
      </section>

      <DeveloperCTA />
    </>
  );
}
