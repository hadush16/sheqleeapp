import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import popularTagsDot from "../../assets/icons/popularTagsDot.svg";

export default function TagCard({
  id,
  name,
  jobs,
  subscribers,
  bgClass = "bg-[#DFDFDF]",
}) {
  return (
    <Link to={`/tags/${id}`} className="block">
      <div
        className={`
          pl-6 sm:pl-8 lg:pl-[30px]
          pt-3 sm:pt-4 lg:pt-[13px]
          pb-4 sm:pb-5 lg:pb-[19px]
          ${bgClass}
          rounded-[12px] lg:rounded-[15px]
          border-l-[8px] sm:border-l-[10px] lg:border-l-[17px]
          border-black
          cursor-pointer
        `}
      >
        <h3 className="mb-2 sm:mb-2 lg:mb-[11px] text-[20px] sm:text-[23px] lg:text-[24px] font-kantumruy font-semibold text-black">
          {name}
        </h3>

        <p className="flex items-center gap-2 sm:gap-3 text-[15px] sm:text-[25px] lg:text-[21px] font-kantumruy text-black">
          {jobs} jobs
          <img
            src={popularTagsDot}
            alt="Dot to separate number of jobs and subscribers"
            className="w-[4px] h-[4px] sm:w-[5px] sm:h-[5px]"
          />
          {subscribers} subscribers
        </p>
      </div>
    </Link>
  );
}

TagCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  jobs: PropTypes.number.isRequired,
  subscribers: PropTypes.number.isRequired,
};
