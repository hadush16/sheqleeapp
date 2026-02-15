import placeholder from "../../assets/icons/placeholder.svg";
import rightPositionArrow from "../../assets/icons/rightPositionArrow.svg";
import { Link } from "react-router-dom";

export default function Breadcrumb({
  sectionLabel,
  sectionTo,
  current,
  items,
}) {
  // 🔹 Build breadcrumb list
  const crumbs = items
    ? items
    : [
        { label: "Sheqlee", to: "/" },
        sectionLabel && { label: sectionLabel, to: sectionTo },
        current && { label: current },
      ].filter(Boolean);

  return (
    <div className="bg-[#FCFCFC] hidden sm:block">
      <div className="flex items-center gap-3 pl-[11rem] py-[19px] text-[#000000]">
        {/* LOCATION ICON */}
        <img src={placeholder} className="w-[15px] h-[23px] mr-4" />

        {crumbs.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            {item.to ? (
              <Link
                to={item.to}
                className="text-[19px] font-kantumruy tracking-normal"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-[19px] font-kantumruy tracking-normal">
                {item.label}
              </span>
            )}

            {index < crumbs.length - 1 && (
              <img src={rightPositionArrow} className="w-[5px]" alt="" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
