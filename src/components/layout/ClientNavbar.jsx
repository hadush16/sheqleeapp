// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// import Button from "../ui/Button";
// import navbarIcon from "../../assets/icons/navbarIcon.svg";
// import dashboardIcon from "../../assets/icons/dashboardIcon.svg";
// import companyIcon from "../../assets/images/company.png";
// import settingsIcon from "../../assets/icons/settingsIcon.svg";
// import logoutIcon from "../../assets/icons/logoutIcon.svg";

// export default function ClientNavbar() {
//   const navigate = useNavigate();
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const handleLogout = () => {
//     localStorage.removeItem("authUser");
//     navigate("/", { replace: true });
//   };

//   return (
//     <header className="w-full bg-[#f7f7f7]">
//       <nav className="flex items-center justify-between h-[170px] px-10">
//         <Link to="/" className="flex items-center gap-2">
//           <img src={navbarIcon} className="w-[57px]" />
//           <span className="font-recoleta font-bold text-[35px]">Sheqlee</span>
//         </Link>

//         <Link to="/post-job">
//           <Button className="bg-[#8967B3] text-white px-6 h-[40px] rounded-lg">
//             Post a job
//           </Button>
//         </Link>

//         <div className="relative">
//           <button onClick={() => setDropdownOpen(!dropdownOpen)}>
//             Company ▾
//           </button>

//           {dropdownOpen && (
//             <div className="absolute right-0 top-10 w-56 bg-white shadow-lg rounded-lg">
//               <Link to="/dashboard" className="flex gap-3 px-4 py-3">
//                 <img src={dashboardIcon} className="w-4 h-4" /> Dashboard
//               </Link>
//               <Link to="/company-profile" className="flex gap-3 px-4 py-3">
//                 <img src={companyIcon} className="w-4 h-4" /> Company profile
//               </Link>
//               <Link to="/account-settings" className="flex gap-3 px-4 py-3">
//                 <img src={settingsIcon} className="w-4 h-4" /> Account settings
//               </Link>
//               <button
//                 onClick={handleLogout}
//                 className="flex gap-3 px-4 py-3 text-red-600"
//               >
//                 <img src={logoutIcon} className="w-4 h-4" /> Logout
//               </button>
//             </div>
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// }
