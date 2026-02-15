// import Button from "../ui/Button";
// import partyCTAIcon from "../../assets/images/partyCTAIcon.png";

// const DeveloperCTA = () => {
//   return (
//     <section className=" bg-[#DFDFDF] max-w-full  flex md:flex-row items-center">
//       <div className="flex items-center gap-[38px] mx-auto p-[62px]">
//         <img
//           src={partyCTAIcon}
//           alt="party emoji in CTA"
//           className="w-[49px] h-[49px"
//         />
//         <p className="text-lg font-medium">
//           Are you a software developer in Ethiopia?
//         </p>

//         <Button className="bg-[#8967B3] mt-4 md:mt-0">Sign up</Button>
//       </div>
//     </section>
//   );
// };

// export default DeveloperCTA;

import Button from "../ui/Button";
import partyCTAIcon from "../../assets/images/partyCTAIcon.png";
import { Link } from "react-router-dom";

const DeveloperCTA = () => {
  return (
    <section className="bg-[#DFDFDF] w-full">
      <div
        className="
          flex flex-col md:flex-row
          items-center
          gap-4 md:gap-[38px]
          justify-center
          text-center md:text-left
          px-4 py-8 md:p-[62px]
        "
      >
        <img
          src={partyCTAIcon}
          alt="party Emoji"
          className="w-[40px] h-[40px] md:w-[55px] md:h-[55px]"
        />

        <p className="text-[17px] sm:text-[20px] md:text-[23px] lg:text-[26px] tracking-normal font-kantumruy font-medium sm:leading-7 ">
          Are you a software developer in Ethiopia?
        </p>
        <Link to="/professional-signup">
          <Button className="bg-[#8967B3] mt-2 px:3 py:3 md:mt-0 lg:text-[27px] text-white lg:font-kantumruy font-medium tracking-normal sm:px-[23px] sm:py-[11px] lg:py-5 lg:px-5">
            Sign up
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default DeveloperCTA;
