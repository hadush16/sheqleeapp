// import { useState, useRef } from "react";
// import { Link, NavLink } from "react-router-dom";

// import Button from "../ui/Button";

// import navbarIcon from "../../assets/icons/navbarIcon.svg";
// import navCategoriesIcon from "../../assets/icons/navCategoriesIcon.svg";

// export default function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const menuRef = useRef(null);

//   const navLinkStyles = ({ isActive }) =>
//     `flex items-center h-full transition-colors duration-200 border-b-[8px] ${
//       isActive
//         ? "border-[#8967B3] text-black"
//         : "border-transparent text-gray-700 hover:text-[#8967B3]"
//     }`;

//   return (
//     <>
//       <header className="w-full bg-[#f7f7f7] relative z-40">
//         <nav
//           className="
//             flex items-center justify-between
//             h-[68px] md:h-[140px]
//             px-3 sm:px-6 md:px-10
//           "
//         >
//           {/* LEFT */}
//           <div className="flex items-center gap-3 sm:gap-7 shrink-0 relative">
//             {/* Hamburger — mobile only */}
//             <button
//               onClick={() => setMobileOpen((v) => !v)}
//               className="md:hidden text-2xl"
//               aria-label="Open menu"
//             >
//               ☰
//             </button>

//             <Link to="/" className="flex items-center gap-3 sm:gap-7">
//               <img
//                 src={navbarIcon}
//                 alt="Sheqlee"
//                 className="max-w-[33px] md:max-w-[57px]"
//               />
//               <span className="font-recoleta font-bold text-[20px] md:text-[35px]">
//                 Sheqlee
//               </span>
//             </Link>

//             {/* MOBILE DROPDOWN */}
//             {mobileOpen && (
//               <div
//                 ref={menuRef}
//                 className="
//                   absolute
//                   top-[52px]
//                   left-0
//                   w-[180px]
//                   bg-white
//                   rounded-[6px]
//                   shadow-lg
//                   py-3
//                   md:hidden
//                 "
//               >
//                 <NavLink
//                   to="/jobs"
//                   onClick={() => setMobileOpen(false)}
//                   className="block px-4 py-2 font-kantumruy text-[16px] hover:bg-gray-100"
//                 >
//                   All jobs
//                 </NavLink>

//                 <NavLink
//                   to="/categories"
//                   onClick={() => setMobileOpen(false)}
//                   className="flex items-center justify-between px-4 py-2 font-kantumruy text-[16px] hover:bg-gray-100"
//                 >
//                   Categories
//                   <img src={navCategoriesIcon} alt="" className="w-3 h-3" />
//                 </NavLink>

//                 <NavLink
//                   to="/clients"
//                   onClick={() => setMobileOpen(false)}
//                   className="block px-4 py-2 font-kantumruy text-[16px] hover:bg-gray-100"
//                 >
//                   Clients
//                 </NavLink>
//               </div>
//             )}
//           </div>

//           {/* RIGHT — DESKTOP (UNCHANGED) */}
//           <div className="flex items-center h-full gap-3 md:gap-10">
//             <div
//               className="
//                 hidden
//                 md:flex
//                 items-center
//                 h-full
//                 gap-6 lg:gap-10
//                 font-kantumruy
//                 text-[18px] lg:text-[20px]
//                 font-medium
//               "
//             >
//               <NavLink to="/jobs" className={navLinkStyles}>
//                 All jobs
//               </NavLink>

//               <NavLink to="/categories" className={navLinkStyles}>
//                 <div className="flex items-center gap-2">
//                   Categories
//                   <img src={navCategoriesIcon} alt="" className="w-3 h-3" />
//                 </div>
//               </NavLink>

//               <NavLink to="/clients" className={navLinkStyles}>
//                 Clients
//               </NavLink>
//             </div>

//             <div className="flex items-center gap-2 sm:gap-4 ml-2">
//               <Button
//                 variant="outline"
//                 className="
//                   border-[2px] md:border-[3px] border-[#8967B3] !text-black
//                   text-xs sm:text-base
//                   px-3 sm:px-6
//                   h-[36px] md:h-[55px]
//                   rounded-[10px] md:rounded-[15px]
//                 "
//               >
//                 Log in
//               </Button>

//               <Button
//                 className="
//                   bg-[#8967B3] text-white
//                   text-xs sm:text-base
//                   px-3 sm:px-6
//                   h-[36px] md:h-[55px]
//                   rounded-[10px] md:rounded-[15px]
//                 "
//               >
//                 Sign up
//               </Button>
//             </div>
//           </div>
//         </nav>
//       </header>

//       {/* BACKDROP — MOBILE ONLY */}
//       {mobileOpen && (
//         <div
//           onClick={() => setMobileOpen(false)}
//           className="fixed inset-0 bg-black/40 z-30 md:hidden"
//         />
//       )}
//     </>
//   );
// }

// import { useState, useRef } from "react";
// import { Link, NavLink } from "react-router-dom";

// import Button from "../ui/Button";

// import navbarIcon from "../../assets/icons/navbarIcon.svg";
// import navCategoriesIcon from "../../assets/icons/navCategoriesIcon.svg";

// export default function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const menuRef = useRef(null);

//   const navLinkStyles = ({ isActive }) =>
//     `flex items-center h-full transition-colors duration-200 border-b-[8px] ${
//       isActive
//         ? "border-[#8967B3] text-black"
//         : "border-transparent text-gray-700 hover:text-[#8967B3]"
//     }`;

//   return (
//     <>
//       <header className="w-full bg-[#f7f7f7] relative z-40">
//         <nav
//           className="
//             flex items-center justify-between
//             h-[56px] sm:h-[64px] md:h-[140px]
//             px-2 xs:px-3 sm:px-6 md:px-10
//           "
//         >
//           {/* LEFT SIDE */}
//           <div className="flex items-center gap-2 sm:gap-6 shrink-0 relative">
//             <button
//               onClick={() => setMobileOpen((v) => !v)}
//               className="md:hidden text-xl xs:text-2xl"
//               aria-label="Open menu"
//             >
//               ☰
//             </button>

//             <Link to="/" className="flex items-center gap-2">
//               <img
//                 src={navbarIcon}
//                 alt="Sheqlee"
//                 className="max-w-[26px] xs:max-w-[30px] md:max-w-[57px]"
//               />

//               <span className="hidden md:block font-recoleta font-bold text-[35px]">
//                 Sheqlee
//               </span>
//             </Link>

//             {mobileOpen && (
//               <div
//                 ref={menuRef}
//                 className="
//                   absolute top-[48px] left-0
//                   w-[180px] bg-white
//                   rounded-[6px] shadow-lg
//                   py-3 md:hidden
//                 "
//               >
//                 <NavLink
//                   to="/jobs"
//                   onClick={() => setMobileOpen(false)}
//                   className="block px-4 py-2 font-kantumruy text-[15px] hover:bg-gray-100"
//                 >
//                   All jobs
//                 </NavLink>

//                 <NavLink
//                   to="/categories"
//                   onClick={() => setMobileOpen(false)}
//                   className="flex items-center justify-between px-4 py-2 font-kantumruy text-[15px] hover:bg-gray-100"
//                 >
//                   Categories
//                   <img src={navCategoriesIcon} alt="" className="w-3 h-3" />
//                 </NavLink>

//                 <NavLink
//                   to="/clients"
//                   onClick={() => setMobileOpen(false)}
//                   className="block px-4 py-2 font-kantumruy text-[15px] hover:bg-gray-100"
//                 >
//                   Clients
//                 </NavLink>
//               </div>
//             )}
//           </div>

//           {/* RIGHT SIDE */}
//           <div className="flex items-center h-full gap-2 sm:gap-4 md:gap-10">
//             <div
//               className="
//                 hidden md:flex
//                 items-center h-full
//                 gap-4 lg:gap-10
//                 font-kantumruy
//                 text-[16px] lg:text-[20px]
//                 font-medium
//               "
//             >
//               <NavLink to="/jobs" className={navLinkStyles}>
//                 All jobs
//               </NavLink>

//               <NavLink to="/categories" className={navLinkStyles}>
//                 <div className="flex items-center gap-2">
//                   Categories
//                   <img src={navCategoriesIcon} alt="" className="w-3 h-3" />
//                 </div>
//               </NavLink>

//               <NavLink to="/clients" className={navLinkStyles}>
//                 Clients
//               </NavLink>
//             </div>

//             {/* AUTH BUTTONS */}
//             <div className="flex items-center gap-1 xs:gap-2 sm:gap-3">
//               {/* LOGIN — border removed ONLY on mobile */}
//               <Button
//                 variant="outline"
//                 className="
//                   border-0 sm:border-[2px] md:border-[3px]
//                   sm:border-[#8967B3]
//                   !text-black
//                   text-[11px] xs:text-[12px] sm:text-sm md:text-base
//                   px-2 xs:px-3 sm:px-5
//                   h-[28px] xs:h-[30px] sm:h-[36px] md:h-[55px]
//                   rounded-[8px] sm:rounded-[10px] md:rounded-[15px]
//                 "
//               >
//                 Log in
//               </Button>

//               {/* SIGN UP */}
//               <Button
//                 className="
//                   bg-[#8967B3] text-white
//                   text-[11px] xs:text-[12px] sm:text-sm md:text-base
//                   px-2 xs:px-3 sm:px-5
//                   h-[28px] xs:h-[30px] sm:h-[36px] md:h-[55px]
//                   rounded-[8px] sm:rounded-[10px] md:rounded-[15px]
//                 "
//               >
//                 Sign up
//               </Button>
//             </div>
//           </div>
//         </nav>
//       </header>

//       {mobileOpen && (
//         <div
//           onClick={() => setMobileOpen(false)}
//           className="fixed inset-0 bg-black/40 z-30 md:hidden"
//         />
//       )}
//     </>
//   );
// }

///////////////////////////////////////////////////////////////////////
{
  /* //LOGIN BUTTON border removed for mobile phones and removed active
            black background */
}
{
  /* LOGIN — border removed ONLY on mobile */
}
{
  /* <Button
                variant="outline"
                className="
                  border-0 sm:border-[2px] md:border-[3px]
                  sm:border-[#8967B3]
                  !text-black
                  text-[11px] xs:text-[12px] sm:text-sm md:text-base
                  px-2 xs:px-3 sm:px-5
                  h-[55px]
                  rounded-[8px] sm:rounded-[10px] md:rounded-[15px]
                "
              >
                Log in
              </Button> */
}
{
  /* AUTH BUTTONS */
}
{
  /* AUTH AREA */
}

//////////////////////////////////////////////////////////////////

import { useState, useRef, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import Button from "../ui/Button";

import navbarIcon from "../../assets/icons/navbarIcon.svg";
import navCategoriesIcon from "../../assets/icons/navCategoriesIcon.svg";

import userIcon from "../../assets/icons/userIcon.svg";

import dashboardIcon from "../../assets/icons/dashboardIcon.svg";
import companyIcon from "../../assets/images/company.png";
import settingsIcon from "../../assets/icons/settingsIcon.svg";
import logoutIcon from "../../assets/icons/logoutIcon.svg";

export default function Navbar() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef(null);
  const isCompany = user?.role === "company";
  const isFreelancer = user?.role === "professional";

  const navLinkStyles = ({ isActive }) =>
    `flex items-center h-full transition-colors duration-200 border-b-[8px] text-[18px] font-kantmruy font-medium tracking-normal ${
      isActive
        ? "border-[#8967B3] text-black "
        : "border-transparent text-black hover:text-gray"
    }`;

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("authUser"));
    setUser(savedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authUser");

    setUser(null);
    setDropdownOpen(false);
    setMobileOpen(false);

    navigate("/", { replace: true });
  };

  return (
    <>
      {dropdownOpen && (
        <div
          onClick={() => setDropdownOpen(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-[2px] z-40"
        />
      )}
      <header className="max-w-full bg-[#f7f7f7] relative ">
        <nav
          className="
            flex items-center justify-between
            h-[90px] sm:h-[90px] md:h-[136px]
            px-2 xs:px-3 sm:px-6 md:px-10
          "
        >
          {/* LEFT SIDE */}
          <div className="flex items-center gap-2  sm:gap-1 md:gap-1 shrink-0 relative z-40">
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden text-3xl xs:text-5xl ml-2"
              aria-label="Open menu"
            >
              ☰
            </button>

            <Link to="/" className="flex items-center gap-2">
              <img
                src={navbarIcon}
                alt="Sheqlee"
                className="max-w-[36px] xs:max-w-[40px] md:max-w-[56px] md:ml-[2.3rem] md:max-h-[57px] "
              />

              <span className="hidden lg:block font-recoleta font-bold text-[31px] md:ml-[1.1rem] tracking-[-0.05rem]">
                Sheqlee
              </span>
            </Link>

            {mobileOpen && (
              <div
                ref={menuRef}
                className="
                  absolute top-[48px] left-0
                  w-[180px] bg-white
                  rounded-[6px] shadow-lg
                  py-3 lg:hidden
                "
              >
                <NavLink
                  to="/jobs"
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2 font-kantumruy text-[15px] hover:bg-gray-100"
                >
                  All jobs
                </NavLink>

                <NavLink
                  to="/categories"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between px-4 py-2 font-kantumruy text-[15px] hover:bg-gray-100"
                >
                  Categories
                  <img src={navCategoriesIcon} alt="" className="w-3 h-3" />
                </NavLink>

                {!user ? (
                  // 1️⃣ NOT LOGGED IN → Clients
                  <NavLink
                    to="/clients"
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-2 font-kantumruy text-[15px] hover:bg-gray-100"
                  >
                    Clients
                  </NavLink>
                ) : user.role === "company" ? (
                  // 2️⃣ COMPANY → Post a job
                  <NavLink
                    to="/post-job"
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-2 font-kantumruy text-[15px] hover:bg-gray-100"
                  >
                    Post a job
                  </NavLink>
                ) : isFreelancer ? (
                  // 3️⃣ FREELANCER → Edit profile
                  <NavLink
                    to="/freelancer/profile"
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-2 font-kantumruy text-[15px] hover:bg-gray-100"
                  >
                    Edit profile
                  </NavLink>
                ) : null}
              </div>
            )}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center h-full gap-2 sm:gap-4 md:gap-10">
            <div
              className="
                hidden lg:flex
                items-center h-full
                gap-4 lg:gap-10
                font-kantumruy
                text-[16px] lg:text-[20px]
                font-medium
              "
            >
              <NavLink to="/jobs" className={navLinkStyles}>
                All jobs
              </NavLink>

              <NavLink to="/categories" className={navLinkStyles}>
                <div className="flex items-center gap-2">
                  Categories
                  <img src={navCategoriesIcon} alt="" className="w-3 h-3" />
                </div>
              </NavLink>

              {!user ? (
                // 1️⃣ NOT LOGGED IN → Clients
                <NavLink to="/clients" className={navLinkStyles}>
                  Clients
                </NavLink>
              ) : user.role === "company" ? (
                // 2️⃣ COMPANY → Post a job
                <Link to="/post-job">
                  <Button className="bg-[#8967B3] text-white px-6 h-[40px] rounded-lg">
                    Post a job
                  </Button>
                </Link>
              ) : user.role === "professional" ? (
                // 3️⃣ FREELANCER → Edit profile
                <NavLink to="/freelancer/profile">
                  {({ isActive }) => (
                    <Button
                      className={`
        px-6 h-[40px] rounded-lg
        ${isActive ? "bg-black text-white" : "bg-[#8967B3] text-white"}
      `}
                    >
                      Edit profile
                    </Button>
                  )}
                </NavLink>
              ) : null}
            </div>

            <div className="relative">
              {!user ? (
                <div className="flex items-center gap-1 xs:gap-2 sm:gap-5">
                  <NavLink to="/login">
                    {({ isActive }) => (
                      <Button
                        variant="outline"
                        className={`
              border-0 sm:border-[2px] md:border-[3px]
              sm:border-[#8967B3] !text-black  font-semibold font-kantumruy
              text-[11px] xs:text-[12px] sm:text-[18px] 
              px-2 xs:px-3 sm:px-6 sm:py-3 
              
              rounded-[8px] sm:rounded-[10px] md:rounded-[12px]
              ${
                isActive
                  ? "bg-black !text-white border-none sm:py-4 sm:px-7"
                  : "bg-transparent"
              }
            `}
                      >
                        Log in
                      </Button>
                    )}
                  </NavLink>

                  <Link to="/professional-signup">
                    <Button
                      className="bg-[#8967B3] text-white px-5 rounded-[12px] font-semibold font-kantumruy
              text-[11px] xs:text-[12px] sm:text-[18px] 
               xs:px-3 sm:px-6 sm:py-4"
                    >
                      Sign up
                    </Button>
                  </Link>
                </div>
              ) : (
                <>
                  {/* COMPANY DROPDOWN BUTTON */}
                  <div className="relative"></div>
                  <button
                    onClick={() => setDropdownOpen((v) => !v)}
                    className="flex items-center gap-2 px-3 py-2 rounded-b-lg"
                  >
                    {/* COMPANY ICON (company only) */}
                    {user.role === "company" && (
                      <img
                        src={userIcon}
                        className="w-6 h-6 cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate("/company-profile");
                        }}
                      />
                    )}

                    {/* NAME */}
                    <span className="hidden lg:block font-medium">
                      {user.role === "company" ? user.companyName : user.name}
                    </span>

                    {/* MOBILE NAME */}
                    <span className="block md:hidden font-medium">
                      {user.role === "company"
                        ? "Sheqlee Co., Ltd."
                        : user.name}
                    </span>

                    {/* DROPDOWN ARROW */}
                    <img src={navCategoriesIcon} className="w-3 h-3" />
                  </button>

                  {/* DROPDOWN MENU */}
                  {dropdownOpen && (
                    <div className="absolute right-0 top-12 w-56 bg-white rounded-lg shadow-xl z-50">
                      <Link
                        to={isCompany ? "/dashboard" : "/freelancer/dashboard"}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100"
                      >
                        <img src={dashboardIcon} className="w-4 h-4" />
                        Dashboard
                      </Link>

                      {user.role === "company" && (
                        <Link
                          to="/company-profile"
                          className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100"
                        >
                          <img src={companyIcon} className="w-4 h-4" />
                          Company profile
                        </Link>
                      )}

                      <Link
                        to={
                          user.role === "company"
                            ? "/account-settings"
                            : "/freelancer/account-setting"
                        }
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100"
                      >
                        <img src={settingsIcon} className="w-4 h-4" />
                        Account settings
                      </Link>

                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-gray-100"
                      >
                        <img src={logoutIcon} className="w-4 h-4" />
                        Logout
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </nav>
      </header>

      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
        />
      )}
    </>
  );
}
