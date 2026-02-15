import DeveloperCTA from "../../components/home/DeveloperCTA";
import Breadcrumb from "../../components/ui/Breadcrumb";

export default function PrivacyPolicy() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "Sheqlee", to: "/" }, { label: "Privacy Policy" }]}
      />

      <section className="p-[30px] sm:p-[55px]">
        <div className="">
          {/* HEADER */}
          <h1 className="text-2xl sm:text-[60px] font-kantumruy font-semibold tracking-0 text[#000000]  mb-16">
            Privacy Policy
          </h1>

          {/* CONTENT BOX */}
          <div
            className="
              w-full
              
              bg-[#E5E5E5]
              rounded-[12px]
              min-h-[700px] sm:min-h-[900px] md:min-h-[1285px]
              flex items-center justify-center
            "
          >
            <p className="text-gray-600 text-base sm:text-lg uppercase">
              Formatted text
            </p>
          </div>
        </div>
      </section>
      <DeveloperCTA />
    </>
  );
}
