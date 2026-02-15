import Breadcrumb from "../../components/ui/Breadcrumb";
import noResultsIcon from "../../assets/icons/noResultsIcon.svg";
import DeveloperCTA from "../../components/home/DeveloperCTA";

export default function NotFound() {
  return (
    <>
      {/* BREADCRUMB (desktop only) */}
      <div className="hidden sm:block px-6 pt-4">
        <Breadcrumb
          items={[{ label: "Sheqlee", to: "/" }, { label: "Page Not Found" }]}
        />
      </div>

      {/* CONTENT */}
      <section className="flex items-center justify-center px-4 py-20 mt-[150px] mb-[100px]">
        <div className="flex flex-col items-center justify-center text-center gap-6">
          {/* ICON */}
          <img
            src={noResultsIcon}
            alt="Page not found"
            className="w-16 h-16 sm:w-20 sm:h-20"
          />

          {/* TEXT */}
          <p className="text-[18px] sm:text-[30px] tracking-0 text-[#444444] font-medium mt-5">
            404 | PAGE NOT FOUND
          </p>
        </div>
      </section>
      <DeveloperCTA />
    </>
  );
}
