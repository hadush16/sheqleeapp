import { useEffect, useState } from "react";
import Breadcrumb from "../../components/ui/Breadcrumb";
import Pagination from "../../components/ui/Pagination";
import CategoryCard from "../../components/cards/CategoryCard";
import DeveloperCTA from "../../components/home/DeveloperCTA";
import categoriesIcon from "../../assets/icons/categoriesIcon.svg";
import api from "../../api/axios"; // axios instance

export default function CategoriesGuest() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(null);

  // ---------------- FETCH CATEGORIES ----------------
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await api.get("/categories");
        const data = res.data.data.categories;

        // normalize categories if needed

        // jobsCount": 0,
        // "subscribersCount": 0

        const normalized = data.map((cat) => ({
          id: cat._id,
          name: cat.name,
          description: cat.description,
          slug: cat.slug,
          icon: categoriesIcon, // fallback icon
          // jobs: cat.jobs || 0,
          jobs: cat.jobsCount || 0,
          subscribers: cat.subscribersCount || 0,
        }));

        setCategories(normalized);
      } catch (err) {
        console.error(err);
        setError(err.response?.data?.message || "Failed to load categories");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // ---------------- RESPONSIVE PAGINATION ----------------
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 800) {
        setPageSize(10);
      } else {
        setPageSize(null); // show all
        setPage(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = pageSize ? Math.ceil(categories.length / pageSize) : 1;
  const visibleCategories = pageSize
    ? categories.slice((page - 1) * pageSize, page * pageSize)
    : categories;

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-center">Loading categories...</p>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-center text-red-600">{error}</p>
      </div>
    );

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
                slug={cat.slug}
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
