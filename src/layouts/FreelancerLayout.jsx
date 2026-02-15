// import { Outlet, useNavigate } from "react-router-dom";
// import { useEffect } from "react";
// import Navbar from "../components/layout/Navbar";
// import Footer from "../components/layout/Footer";

// export default function FreelancerLayout() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("authUser"));

//     // 🔐 Protect freelancer routes
//     if (!user || user.accountType !== "professional") {
//       navigate("/", { replace: true });
//     }
//   }, [navigate]);

//   return (
//     <>
//       <Navbar />
//       <Outlet />
//       <Footer />
//     </>
//   );
// }

import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function FreelancerLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("authUser"));

    // Protect route
    if (!user || user.accountType !== "professional") {
      navigate("/", { replace: true });
      return;
    }

    const isSmall = window.innerWidth < 768; // md breakpoint

    // If freelancer on small screen → go to guest home
    if (isSmall && location.pathname.startsWith("/freelancer")) {
      navigate("/", { replace: true });
    }
  }, [navigate, location.pathname]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
