// import { useState, useRef, useContext } from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import Button from "../ui/Button";
// import navbarIcon from "../../assets/icons/navbarIcon.svg";
// import navCategoriesIcon from "../../assets/icons/navCategoriesIcon.svg";
// import userIcon from "../../assets/icons/userIcon.svg";
// import dashboardIcon from "../../assets/icons/dashboardIcon.svg";
// import companyIcon from "../../assets/images/company.png";
// import settingsIcon from "../../assets/icons/settingsIcon.svg";
// import logoutIcon from "../../assets/icons/logoutIcon.svg";
// import { AuthContext } from "../../context/AuthContext.jsx";

// export default function Navbar() {
//   const { user, authChecked, logout } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const menuRef = useRef(null);

//   const isCompany = user?.role === "company";
//   const isFreelancer = user?.role === "professional";

//   const navLinkStyles = ({ isActive }) =>
//     `flex items-center h-full transition-colors duration-200 border-b-[8px] text-[18px] font-kantmruy font-medium tracking-normal ${
//       isActive
//         ? "border-[#8967B3] text-black "
//         : "border-transparent text-black hover:text-gray"
//     }`;

//   const handleLogout = () => {
//     logout();
//     setDropdownOpen(false);
//     setMobileOpen(false);
//     navigate("/", { replace: true });
//   };

//   // Wait until auth state is checked before rendering
//   if (!authChecked) return null;

//   return (
//     <>
//       {dropdownOpen && (
//         <div
//           onClick={() => setDropdownOpen(false)}
//           className="fixed inset-0 bg-black/30 backdrop-blur-[2px] z-40"
//         />
//       )}

//       <header className="max-w-full bg-[#f7f7f7] relative ">
//         <nav
//           className="
//             flex items-center justify-between
//             h-[90px] sm:h-[90px] md:h-[136px]
//             px-2 xs:px-3 sm:px-6 md:px-10
//           "
//         >
//           {/* LEFT SIDE */}
//           <div className="flex items-center gap-2 sm:gap-1 md:gap-1 shrink-0 relative z-40">
//             <button
//               onClick={() => setMobileOpen((v) => !v)}
//               className="lg:hidden text-3xl xs:text-5xl ml-2"
//               aria-label="Open menu"
//             >
//               ☰
//             </button>

//             <Link to="/" className="flex items-center gap-2">
//               <img
//                 src={navbarIcon}
//                 alt="Sheqlee"
//                 className="max-w-[36px] xs:max-w-[40px] md:max-w-[56px] md:ml-[2.3rem] md:max-h-[57px] "
//               />
//               <span className="hidden lg:block font-recoleta font-bold text-[31px] md:ml-[1.1rem] tracking-[-0.05rem]">
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
//                   py-3 lg:hidden
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

//                 {!user ? (
//                   <NavLink
//                     to="/clients"
//                     onClick={() => setMobileOpen(false)}
//                     className="block px-4 py-2 font-kantumruy text-[15px] hover:bg-gray-100"
//                   >
//                     Clients
//                   </NavLink>
//                 ) : user.accountType === "employer" ? (
//                   <NavLink
//                     to="/post-job"
//                     onClick={() => setMobileOpen(false)}
//                     className="block px-4 py-2 font-kantumruy text-[15px] hover:bg-gray-100"
//                   >
//                     Post a job
//                   </NavLink>
//                 ) : user.accountType === "professional" ? (
//                   <NavLink
//                     to="/freelancer/profile"
//                     onClick={() => setMobileOpen(false)}
//                     className="block px-4 py-2 font-kantumruy text-[15px] hover:bg-gray-100"
//                   >
//                     Edit profile
//                   </NavLink>
//                 ) : null}
//               </div>
//             )}
//           </div>

//           {/* RIGHT SIDE */}
//           <div className="flex items-center h-full gap-2 sm:gap-4 md:gap-10">
//             <div
//               className="
//                 hidden lg:flex
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

//               {!user ? (
//                 <NavLink to="/clients" className={navLinkStyles}>
//                   Clients
//                 </NavLink>
//               ) : isCompany ? (
//                 <Link to="/post-job">
//                   <Button className="bg-[#8967B3] text-white px-6 h-[40px] rounded-lg">
//                     Post a job
//                   </Button>
//                 </Link>
//               ) : isFreelancer ? (
//                 <NavLink to="/freelancer/profile">
//                   {({ isActive }) => (
//                     <Button
//                       className={`px-6 h-[40px] rounded-lg ${
//                         isActive
//                           ? "bg-black text-white"
//                           : "bg-[#8967B3] text-white"
//                       }`}
//                     >
//                       Edit profile
//                     </Button>
//                   )}
//                 </NavLink>
//               ) : null}
//             </div>

//             <div className="relative">
//               {!user ? (
//                 <div className="flex items-center gap-1 xs:gap-2 sm:gap-5">
//                   <NavLink to="/login">
//                     {({ isActive }) => (
//                       <Button
//                         variant="outline"
//                         className={`border-0 sm:border-[2px] md:border-[3px] sm:border-[#8967B3] !text-black font-semibold font-kantumruy text-[11px] xs:text-[12px] sm:text-[18px] px-2 xs:px-3 sm:px-6 sm:py-3 rounded-[8px] sm:rounded-[10px] md:rounded-[12px] ${
//                           isActive
//                             ? "bg-black !text-white border-none sm:py-4 sm:px-7"
//                             : "bg-transparent"
//                         }`}
//                       >
//                         Log in
//                       </Button>
//                     )}
//                   </NavLink>

//                   <Link to="/professional-signup">
//                     <Button className="bg-[#8967B3] text-white px-5 rounded-[12px] font-semibold font-kantumruy text-[11px] xs:text-[12px] sm:text-[18px] xs:px-3 sm:px-6 sm:py-4">
//                       Sign up
//                     </Button>
//                   </Link>
//                 </div>
//               ) : (
//                 <>
//                   <button
//                     onClick={() => setDropdownOpen((v) => !v)}
//                     className="flex items-center gap-2 px-3 py-2 rounded-b-lg"
//                   >
//                     {isCompany && (
//                       <img
//                         src={userIcon}
//                         className="w-6 h-6 cursor-pointer"
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           navigate("/company-profile");
//                         }}
//                       />
//                     )}
//                     <span className="hidden lg:block font-medium">
//                       {isCompany ? user.companyName : user.name}
//                     </span>
//                     <span className="block md:hidden font-medium">
//                       {isCompany ? "Sheqlee Co., Ltd." : user.name}
//                     </span>
//                     <img src={navCategoriesIcon} className="w-3 h-3" />
//                   </button>

//                   {dropdownOpen && (
//                     <div className="absolute right-0 top-12 w-56 bg-white rounded-lg shadow-xl z-50">
//                       <Link
//                         to={isCompany ? "/dashboard" : "/freelancer/dashboard"}
//                         className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100"
//                       >
//                         <img src={dashboardIcon} className="w-4 h-4" />
//                         Dashboard
//                       </Link>

//                       {isCompany && (
//                         <Link
//                           to="/company-profile"
//                           className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100"
//                         >
//                           <img src={companyIcon} className="w-4 h-4" />
//                           Company profile
//                         </Link>
//                       )}

//                       <Link
//                         to={
//                           isCompany
//                             ? "/account-settings"
//                             : "/freelancer/account-setting"
//                         }
//                         className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100"
//                       >
//                         <img src={settingsIcon} className="w-4 h-4" />
//                         Account settings
//                       </Link>

//                       <button
//                         onClick={handleLogout}
//                         className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-gray-100"
//                       >
//                         <img src={logoutIcon} className="w-4 h-4" />
//                         Logout
//                       </button>
//                     </div>
//                   )}
//                 </>
//               )}
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

import { useState, useRef, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import navbarIcon from "../../assets/icons/navbarIcon.svg";
import navCategoriesIcon from "../../assets/icons/navCategoriesIcon.svg";
import companyProfile from "../../assets/icons/companyProfile.svg";
import dashboardIcon from "../../assets/icons/dashboardIcon.svg";
import companyIcon from "../../assets/images/company.png";
import settingsIcon from "../../assets/icons/settingsIcon.svg";
import logoutIcon from "../../assets/icons/logoutIcon.svg";
import { AuthContext } from "../../context/AuthContext.jsx";

export default function Navbar() {
  const { user, authChecked, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef(null);

  const isCompany = user?.accountType === "employer";
  const isFreelancer = user?.accountType === "professional";

  const navLinkStyles = ({ isActive }) =>
    `flex items-center h-full transition-colors duration-200 border-b-[8px] text-[18px] font-kantmruy font-medium tracking-normal ${
      isActive
        ? "border-[#8967B3] text-black "
        : "border-transparent text-black hover:text-gray"
    }`;

  const handleLogout = () => {
    logout();
    setDropdownOpen(false);
    setMobileOpen(false);
    navigate("/", { replace: true });
  };

  // Wait until auth state is checked before rendering
  if (!authChecked) return null;

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
          <div className="flex items-center gap-2 sm:gap-1 md:gap-1 shrink-0 relative z-40">
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
                  rounded-b-lg shadow-lg
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
                  <img
                    src={navCategoriesIcon}
                    alt="categories drop down"
                    className="w-3 h-3"
                  />
                </NavLink>

                {!user ? (
                  <NavLink
                    to="/clients"
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-2 font-kantumruy text-[15px] hover:bg-gray-100"
                  >
                    Clients
                  </NavLink>
                ) : user.accountType === "employer" ? (
                  <NavLink
                    to="/post-job"
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-2 font-kantumruy text-[15px] hover:bg-gray-100"
                  >
                    Post a job
                  </NavLink>
                ) : user.accountType === "professional" ? (
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
                  <img
                    src={navCategoriesIcon}
                    alt="categories drop down"
                    className="w-3 h-3"
                  />
                </div>
              </NavLink>

              {!user ? (
                <NavLink to="/clients" className={navLinkStyles}>
                  Clients
                </NavLink>
              ) : user.accountType === "employer" ? (
                <Link to="/post-job">
                  <Button className="bg-[#8967B3] px-[15px] py-[13px] rounded-[11px] text-[#FFFFFF] text-[19px] font-semibold tracking-normal hover:bg-[#6f4a91]">
                    Post a job
                  </Button>
                </Link>
              ) : user.accountType === "professional" ? (
                <NavLink to="/freelancer/profile">
                  {({ isActive }) => (
                    <Button
                      className={`px-[19px] py-[13px] rounded-[11px] text-[19px] font-semibold tracking-normal ${
                        isActive
                          ? "bg-black text-white hover:bg-[#333333]"
                          : "bg-[#8967B3] text-white hover:bg-[#6f4a91]"
                      }`}
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
                        className={`border-0 sm:border-[2px] md:border-[3px] sm:border-[#8967B3] !text-black font-semibold font-kantumruy text-[11px] xs:text-[12px] sm:text-[18px] px-2 xs:px-3 sm:px-6 sm:py-3 rounded-[8px] sm:rounded-[10px] md:rounded-[12px] ${
                          isActive
                            ? "bg-black !text-white border-none sm:py-4 sm:px-7"
                            : "bg-transparent"
                        }`}
                      >
                        Log in
                      </Button>
                    )}
                  </NavLink>

                  <Link to="/professional-signup">
                    <Button className="bg-[#8967B3] text-white px-5 rounded-[12px] font-semibold font-kantumruy text-[11px] xs:text-[12px] sm:text-[18px] xs:px-3 sm:px-6 sm:py-4">
                      Sign up
                    </Button>
                  </Link>
                </div>
              ) : (
                <>
                  <button
                    onClick={() => setDropdownOpen((v) => !v)}
                    className="flex items-center gap-2 px-3 py-2 rounded-b-lg"
                  >
                    {isCompany && (
                      <img
                        src={companyProfile}
                        className="hidden lg:block w-6 h-6 lg:w-8 lg:h-8 cursor-pointer rounded-full bg-[#DFDFDF] p-1"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate("/company-profile");
                        }}
                      />
                    )}
                    <span className="hidden lg:block font-medium">
                      {isCompany ? user.companyName : user.name}
                    </span>
                    <span className="block lg:hidden font-medium">
                      {isCompany ? "Sheqlee Co., Ltd." : user.name}
                    </span>
                    <img src={navCategoriesIcon} className="w-3 h-3" />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute right-0 top-12 w-56 bg-white rounded-b-lg shadow-xl z-50">
                      <Link
                        to={isCompany ? "/dashboard" : "/freelancer/dashboard"}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100"
                      >
                        <img src={dashboardIcon} className="w-4 h-4" />
                        Dashboard
                      </Link>

                      {isCompany && (
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
                          isCompany
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
