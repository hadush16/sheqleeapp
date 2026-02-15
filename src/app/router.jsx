import { createBrowserRouter } from "react-router-dom";

// layouts
import GuestLayout from "../layouts/GuestLayout";
import ClientLayout from "../layouts/ClientLayout";
import FreelancerLayout from "../layouts/FreelancerLayout";
import AccountLayout from "../layouts/AccountLayout";
import PrintLayout from "../layouts/PrintLayout";

// guest pages
import HomeGuest from "../pages/Guest/HomeGuest";
import AllJobsGuest from "../pages/Guest/AllJobsGuest";
import AllTagsGuest from "../pages/Guest/AllTagsGuest";
import CategoriesGuest from "../pages/Guest/CategoriesGuest";
import CategoryDetailsGuest from "../pages/Guest/CategoryDetailsGuest";
import TagsDetailGuest from "../pages/Guest/TagsDetailGuest";
import ClientsGuest from "../pages/Guest/ClientsGuest";
import CompaniesGuest from "../pages/Guest/CompaniesGuest";
import PrivacyPolicy from "../pages/Guest/PrivacyPolicy";

// common
import NotFound from "../pages/common/NotFound";
import JobDetailsGuest from "../pages/Guest/JobDetailsGuest";
import CompanyDetailsGuest from "../pages/Guest/CompanyDetailsGuest";
import ContactGuest from "../pages/Guest/ContactGuest";
import FAQGuest from "../pages/Guest/FAQGuest";
import CompanySignup from "../pages/Auth/CompanySignup";
import ProfessionalSignup from "../pages/Auth/ProfessionalSignup";
import LoginForm from "../components/forms/LoginForm";
import ResetPassword from "../pages/Auth/ResetPassword";
import SetNewPassword from "../pages/Auth/SetNewPassword";
import PostJobForm from "../components/forms/PostJobForm";
import ReviewPostJob from "../pages/client/ReviewPostJob";
import DashboardClient from "../pages/client/DashboardClient";
import CompanyProfile from "../pages/client/CompanyProfile";
import AccountSettingClient from "../pages/client/AccountSettingClient";
import HomeFreelancer from "../pages/freelancer/HomeFreelancer";

import DashboardFreelancer from "../pages/freelancer/DashboardFreelancer";
import FreelancerProfile from "../pages/freelancer/FreelancerProfile";
import AccountSettingsFreelancer from "../pages/freelancer/AccountSettingsFreelancer";
import FreelancerProfileReview from "../pages/freelancer/FreelancerProfileReview";
import ProfilePrintable from "../profile/ProfilePrintable";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      { index: true, element: <HomeGuest /> },

      { path: "jobs", element: <AllJobsGuest /> },
      { path: "jobs/:id", element: <JobDetailsGuest /> },

      { path: "categories", element: <CategoriesGuest /> },
      { path: "categories/:slug", element: <CategoryDetailsGuest /> },

      { path: "tags", element: <AllTagsGuest /> },
      { path: "tags/:id", element: <TagsDetailGuest /> },

      { path: "clients", element: <ClientsGuest /> },

      { path: "companies", element: <CompaniesGuest /> },
      { path: "companies/:name", element: <CompanyDetailsGuest /> },

      { path: "contact", element: <ContactGuest /> },
      { path: "faq", element: <FAQGuest /> },
      { path: "company-signup", element: <CompanySignup /> },
      { path: "professional-signup", element: <ProfessionalSignup /> },
      { path: "login", element: <LoginForm /> },
      { path: "reset-password", element: <ResetPassword /> },
      { path: "set-new-password", element: <SetNewPassword /> },
      { path: "privacy-policy", element: <PrivacyPolicy /> },

      {
        element: <AccountLayout />,
        children: [
          { path: "post-job", element: <PostJobForm /> },
          { path: "review-job", element: <ReviewPostJob /> },
          { path: "dashboard", element: <DashboardClient /> },
          { path: "company-profile", element: <CompanyProfile /> },
          { path: "account-settings", element: <AccountSettingClient /> },
        ],
      },

      { path: "*", element: <NotFound /> },
    ],
  },

  {
    path: "/client",
    element: <ClientLayout />,
    children: [],
  },

  {
    path: "/freelancer",
    element: <FreelancerLayout />,
    children: [
      { index: true, element: <HomeFreelancer /> },
      { path: "dashboard", element: <DashboardFreelancer /> },
      { path: "profile", element: <FreelancerProfile /> },
      {
        path: "/freelancer/profile-review",
        element: <FreelancerProfileReview />,
      },
      {
        path: "/freelancer/account-setting",
        element: <AccountSettingsFreelancer />,
      },
    ],
  },
  {
    path: "/freelancer",
    element: <PrintLayout />,
    children: [
      {
        path: "profile-print",
        element: <ProfilePrintable />,
      },
    ],
  },
]);

export default router;
// import { createBrowserRouter } from "react-router-dom";

// // layouts
// import GuestLayout from "../layouts/GuestLayout";
// import ClientLayout from "../layouts/ClientLayout";
// import FreelancerLayout from "../layouts/FreelancerLayout";
// import AccountLayout from "../layouts/AccountLayout";
// import PrintLayout from "../layouts/PrintLayout";

// // guest pages
// import HomeGuest from "../pages/Guest/HomeGuest";
// import AllJobsGuest from "../pages/Guest/AllJobsGuest";
// import AllTagsGuest from "../pages/Guest/AllTagsGuest";
// import CategoriesGuest from "../pages/Guest/CategoriesGuest";
// import CategoryDetailsGuest from "../pages/Guest/CategoryDetailsGuest";
// import TagsDetailGuest from "../pages/Guest/TagsDetailGuest";
// import ClientsGuest from "../pages/Guest/ClientsGuest";
// import CompaniesGuest from "../pages/Guest/CompaniesGuest";
// import PrivacyPolicy from "../pages/Guest/PrivacyPolicy";
// import JobDetailsGuest from "../pages/Guest/JobDetailsGuest";
// import CompanyDetailsGuest from "../pages/Guest/CompanyDetailsGuest";
// import ContactGuest from "../pages/Guest/ContactGuest";
// import FAQGuest from "../pages/Guest/FAQGuest";

// // auth
// import CompanySignup from "../pages/Auth/CompanySignup";
// import ProfessionalSignup from "../pages/Auth/ProfessionalSignup";
// import LoginForm from "../components/forms/LoginForm";
// import ResetPassword from "../pages/Auth/ResetPassword";
// import SetNewPassword from "../pages/Auth/SetNewPassword";

// // client pages
// // import HomeClient from "../pages/client/HomeClient";
// import DashboardClient from "../pages/client/DashboardClient";
// import PostJobClient from "../pages/client/PostJobClient";
// import ReviewPostJob from "../pages/client/ReviewPostJob";
// import CompanyProfile from "../pages/client/CompanyProfile";
// import AccountSettingClient from "../pages/client/AccountSettingClient";

// // freelancer pages
// import HomeFreelancer from "../pages/freelancer/HomeFreelancer";
// import DashboardFreelancer from "../pages/freelancer/DashboardFreelancer";
// import FreelancerProfile from "../pages/freelancer/FreelancerProfile";
// import FreelancerProfileReview from "../pages/freelancer/FreelancerProfileReview";
// import AccountSettingsFreelancer from "../pages/freelancer/AccountSettingsFreelancer";

// // print
// import ProfilePrintable from "../profile/ProfilePrintable";

// // common
// import NotFound from "../pages/common/NotFound";

// const router = createBrowserRouter([
//   /* ================= GUEST ================= */
//   {
//     path: "/",
//     element: <GuestLayout />,
//     children: [
//       { index: true, element: <HomeGuest /> },

//       { path: "jobs", element: <AllJobsGuest /> },
//       { path: "jobs/:id", element: <JobDetailsGuest /> },

//       { path: "categories", element: <CategoriesGuest /> },
//       { path: "categories/:slug", element: <CategoryDetailsGuest /> },

//       { path: "tags", element: <AllTagsGuest /> },
//       { path: "tags/:id", element: <TagsDetailGuest /> },

//       { path: "clients", element: <ClientsGuest /> },

//       { path: "companies", element: <CompaniesGuest /> },
//       { path: "companies/:name", element: <CompanyDetailsGuest /> },

//       { path: "contact", element: <ContactGuest /> },
//       { path: "faq", element: <FAQGuest /> },
//       { path: "privacy-policy", element: <PrivacyPolicy /> },

//       { path: "company-signup", element: <CompanySignup /> },
//       { path: "professional-signup", element: <ProfessionalSignup /> },
//       { path: "login", element: <LoginForm /> },
//       { path: "reset-password", element: <ResetPassword /> },
//       { path: "set-new-password", element: <SetNewPassword /> },

//       { path: "*", element: <NotFound /> },
//     ],
//   },

//   /* ================= CLIENT ================= */
//   {
//     path: "/client",
//     element: <ClientLayout />,
//     children: [
//       // { index: true, element: <HomeClient /> },
//       { path: "dashboard", element: <DashboardClient /> },
//       { path: "post-job", element: <PostJobClient /> },
//       { path: "review-job", element: <ReviewPostJob /> },
//       { path: "company-profile", element: <CompanyProfile /> },
//       { path: "account-settings", element: <AccountSettingClient /> },
//     ],
//   },

//   /* ================= FREELANCER ================= */
//   {
//     path: "/freelancer",
//     element: <FreelancerLayout />,
//     children: [
//       { index: true, element: <HomeFreelancer /> },
//       { path: "dashboard", element: <DashboardFreelancer /> },
//       { path: "profile", element: <FreelancerProfile /> },
//       { path: "profile-review", element: <FreelancerProfileReview /> },
//       { path: "account-setting", element: <AccountSettingsFreelancer /> },
//     ],
//   },

//   /* ================= PRINT (NO NAV / FOOTER) ================= */
//   {
//     path: "/freelancer",
//     element: <PrintLayout />,
//     children: [{ path: "profile-print", element: <ProfilePrintable /> }],
//   },
// ]);

// export default router;
