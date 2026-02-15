import { useEffect, useState } from "react";
import TagCard from "../cards/TagCard";
import popularTagsDetailIcon from "../../assets/icons/popularTagsDetailIcon.svg";
import { Link } from "react-router-dom";

import { fetchPopularTags } from "../../api/tags";

export default function PopularTags() {
  const [tags, setTags] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pageSize, setPageSize] = useState(9);
  const [columns, setColumns] = useState(3);
  const [activeDot, setActiveDot] = useState("left"); // default purple

  // Fetch popular tags
  useEffect(() => {
    async function loadPopularTags() {
      try {
        const data = await fetchPopularTags(); // fetch top 6 tags
        setTags(data);
      } catch (err) {
        setError(err.message || "Failed to fetch popular tags:");
      } finally {
        setLoading(false);
      }
    }
    loadPopularTags();
  }, []);

  // Responsive layout logic
  useEffect(() => {
    const updateLayout = () => {
      if (window.innerWidth < 700) {
        setColumns(1);
        setPageSize(3);
      } else if (window.innerWidth < 1280) {
        setColumns(2);
        setPageSize(4);
      } else {
        setColumns(3);
        setPageSize(6);
      }
      setPage(0);
      setActiveDot("left"); // reset dot on resize
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const totalPages = Math.ceil(tags.length / pageSize);

  const visibleTags =
    columns === 3
      ? tags.slice(0, 6)
      : tags.slice(page * pageSize, page * pageSize + pageSize);

  const hiddenCount =
    columns === 3
      ? tags.length - 6
      : tags.length - (page * pageSize + visibleTags.length);

  const goPrev = () => {
    if (page > 0) setPage(page - 1);
  };

  const goNext = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  if (loading)
    return (
      <div className="text-center py-32 text-xl">Loading popular tags...</div>
    );

  if (error)
    return <div className="text-center py-32 text-red-600">{error}</div>;

  return (
    <section className="bg-[#F7F7F7] px-4 sm:px-8 lg:px-[72px] pb-6 lg:pb-[30px]">
      {/* HEADER */}
      <div className="flex items-center justify-between pt-2 lg:pt-[25px] mb-4 lg:mb-[30px]">
        <h2 className="text-lg sm:text-2xl lg:text-[38px] font-kantumruy font-medium">
          Popular tags
        </h2>

        <Link
          to="/tags"
          className="flex items-center gap-2 lg:gap-3 font-kantumruy font-medium text-[15px] sm:text-[20px] lg:text-[27px]"
        >
          <span className="relative">
            {hiddenCount > 0 ? `${hiddenCount}+ more tags` : "View all tags"}
            <span className="absolute left-0 -bottom-[5px] lg:-bottom-[7.5px] w-[40px] lg:w-[54px] h-[4px] lg:h-[5.4px] bg-[#8967B3]" />
          </span>

          <img
            src={popularTagsDetailIcon}
            alt="more tags"
            className="w-[7px] h-[12px] lg:w-[9px] lg:h-[16px]"
          />
        </Link>
      </div>

      {/* GRID */}
      <div
        className={`grid gap-y-4 sm:gap-y-6 lg:gap-y-[30px] gap-x-4 sm:gap-x-6 lg:gap-x-[87px] ${
          columns === 1
            ? "grid-cols-1"
            : columns === 2
              ? "grid-cols-2"
              : "grid-cols-3"
        }`}
      >
        {visibleTags.map((tag) => (
          <TagCard
            key={tag._id}
            id={tag._id}
            name={tag.name}
            jobs={tag.jobsCount}
            subscribers={tag.subscribersCount}
          />
        ))}
      </div>

      {/* DOT PAGINATION */}
      {columns !== 3 && totalPages > 1 && (
        <div className="flex justify-center gap-3 mt-6 mb-6">
          <button
            onClick={() => {
              goPrev();
              setActiveDot("left");
            }}
            className={`w-4 h-4 rounded-full transition ${
              activeDot === "left" ? "bg-[#8967B3]" : "bg-[#CFCFCF]"
            }`}
          />

          <button
            onClick={() => setActiveDot("middle")}
            className={`w-4 h-4 rounded-full transition ${
              activeDot === "middle" ? "bg-[#8967B3]" : "bg-[#CFCFCF]"
            }`}
          />

          <button
            onClick={() => {
              goNext();
              setActiveDot("right");
            }}
            className={`w-4 h-4 rounded-full transition ${
              activeDot === "right" ? "bg-[#8967B3]" : "bg-[#CFCFCF]"
            }`}
          />
        </div>
      )}
    </section>
  );
}
