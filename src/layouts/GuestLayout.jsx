// import { Outlet } from "react-router-dom";
// import Navbar from "../components/layout/Navbar";
// import Footer from "../components/layout/Footer";

// export default function GuestLayout() {
//   return (
//     <>
//       <Navbar />
//       <Outlet />
//       <Footer />
//     </>
//   );
// }

import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer";
import GuestNavbar from "../components/layout/Navbar";

export default function GuestLayout() {
  return (
    <>
      <GuestNavbar />
      <Outlet />
      <Footer />
    </>
  );
}
