// import { useState } from "react";
// import { Link } from "react-router-dom";
// import Breadcrumb from "../../components/ui/Breadcrumb";

// import companyIcon from "../../assets/images/company.png";
// import infoIcon from "../../assets/icons/infoIcon.svg";
// import userIcon from "../../assets/icons/userIcon.svg";
// import emailIcon from "../../assets/icons/emailIcon.svg";
// import lockIcon from "../../assets/icons/lockIcon.svg";
// import eyeIcon from "../../assets/icons/eyeIcon.svg";
// import googleIcon from "../../assets/images/googleIcon.png";
// import DeveloperCTA from "../../components/home/DeveloperCTA";

// export default function CompanySignup() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   return (
//     <>
//       <div className="hidden sm:block">
//         <Breadcrumb
//           sectionLabel="Sheqlee"
//           sectionTo="/"
//           current="Company Signup"
//         />
//       </div>

//       <section className="px-4 sm:px-6 py-10">
//         <div className="max-w-4xl mx-auto">
// <div className="hidden sm:flex justify-center mb-10">
//   <div className="flex items-stretch bg-[#F3F3F3] rounded-[11px] overflow-hidden max-w-3xl w-full">
//     <div className="bg-black text-white w-[90px] flex items-center justify-center">
//       <img src={infoIcon} alt="" className="w-[26px] h-[30px]" />
//     </div>

//     <p className="px-4 py-[33px] text-[19px] text-[#000000] tracking-0 font-kantumruy">
//       If you are a freelancer, please visit{" "}
//       <Link
//         to="/freelancer-signup"
//         className="text-[#000000] font-semibold border-b-4 border-[#8967B3] tracking-0 font-kantumruy"
//       >
//         freelancers registration
//       </Link>{" "}
//       page.
//     </p>
//   </div>
// </div>

//           <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 mb-8 text-center sm:text-left">
//             <img
//               src={companyIcon}
//               alt="company sign up"
//               className="w-10 h-10 sm:w-8 sm:h-8"
//             />
//             <h1 className="text-2xl sm:text-3xl font-bold">
//               Company Registration
//             </h1>
//           </div>

//           {/* ================= FORM ================= */}
//           <form className="space-y-8 sm:text-left">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="text-sm font-medium">
//                   Company name <span className="text-red-500">*</span>
//                 </label>
//                 <div className="flex mt-2 bg-[#E5E5E5] rounded-lg overflow-hidden h-[52px]">
//                   <div className="bg-black w-12 flex items-center justify-center">
//                     <img src={companyIcon} className="w-4 h-4" />
//                   </div>
//                   {/* Desktop */}
//                   <input
//                     type="text"
//                     placeholder="Sheqlee Co. Ltd."
//                     className="hidden sm:block w-full px-3 bg-transparent outline-none text-sm"
//                   />

//                   {/* Mobile */}
//                   <input
//                     type="text"
//                     placeholder="Qagnew LLC"
//                     className="block sm:hidden w-full px-3 bg-transparent outline-none text-sm"
//                   />
//                 </div>
//               </div>

//               {/* Domain */}
//               <div>
//                 <label className="text-sm font-medium">
//                   Domain <span className="text-red-500">*</span>
//                 </label>
//                 <div className="flex mt-2 bg-[#E5E5E5] rounded-lg overflow-hidden h-[52px]">
//                   <div className="bg-black px-3 text-white flex items-center text-sm">
//                     https://
//                   </div>
//                   <input
//                     type="text"
//                     placeholder="sheqlee.com"
//                     className="hidden sm:block w-full px-3 bg-transparent outline-none text-sm"
//                   />

//                   {/* Mobile */}
//                   <input
//                     type="text"
//                     placeholder="Qagnew.com"
//                     className="block sm:hidden w-full px-3 bg-transparent outline-none text-sm"
//                   />
//                 </div>
//               </div>
//             </div>
//             {/* COMPANY REPRESENTATIVE */}
//             <div>
//               <div className="flex items-center gap-4 mb-6 text-xs text-gray-400">
//                 <div className="flex-1 h-px bg-gray-300" />
//                 COMPANY REPRESENTATIVE
//                 <div className="flex-1 h-px bg-gray-300" />
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {/* Full name */}
//                 <div>
//                   <label className="text-sm font-medium">
//                     Full name <span className="text-red-500">*</span>
//                   </label>
//                   <div className="flex mt-2 bg-[#E5E5E5] rounded-lg overflow-hidden h-[52px]">
//                     <div className="bg-black w-12 flex items-center justify-center">
//                       <img src={userIcon} className="w-4 h-4" />
//                     </div>
//                     <input
//                       type="text"
//                       placeholder="Abebe Bekila"
//                       className="w-full px-3 bg-transparent outline-none text-sm"
//                     />
//                   </div>
//                 </div>

//                 {/* Email */}
//                 <div>
//                   <label className="text-sm font-medium">
//                     Email <span className="text-red-500">*</span>
//                   </label>
//                   <div className="flex mt-2 bg-[#E5E5E5] rounded-lg overflow-hidden h-[52px]">
//                     <div className="bg-black w-12 flex items-center justify-center">
//                       <img src={emailIcon} className="w-4 h-4" />
//                     </div>
//                     <input
//                       type="email"
//                       placeholder="abebe@gmail.com"
//                       className="w-full px-3 bg-transparent outline-none text-sm"
//                     />
//                   </div>
//                 </div>

//                 {/* Password */}
//                 <div>
//                   <label className="text-sm font-medium">
//                     Password <span className="text-red-500">*</span>
//                   </label>
//                   <div className="flex mt-2 bg-[#E5E5E5] rounded-lg overflow-hidden h-[52px]">
//                     <div className="bg-black w-12 flex items-center justify-center">
//                       <img src={lockIcon} className="w-4 h-4" />
//                     </div>
//                     <input
//                       type={showPassword ? "text" : "password"}
//                       placeholder="********"
//                       className="w-full px-3 bg-transparent outline-none text-sm"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="px-3 flex items-center"
//                     >
//                       <img src={eyeIcon} className="w-4 h-4 opacity-70" />
//                     </button>
//                   </div>
//                 </div>

//                 {/* Confirm Password */}
//                 <div>
//                   <label className="text-sm font-medium">
//                     Confirm password <span className="text-red-500">*</span>
//                   </label>
//                   <div className="flex mt-2 bg-[#E5E5E5] rounded-lg overflow-hidden h-[52px]">
//                     <div className="bg-black w-12 flex items-center justify-center">
//                       <img src={lockIcon} className="w-4 h-4" />
//                     </div>
//                     <input
//                       type={showConfirmPassword ? "text" : "password"}
//                       placeholder="********"
//                       className="w-full px-3 bg-transparent outline-none text-sm"
//                     />
//                     <button
//                       type="button"
//                       onClick={() =>
//                         setShowConfirmPassword(!showConfirmPassword)
//                       }
//                       className="px-3 flex items-center"
//                     >
//                       <img src={eyeIcon} className="w-4 h-4 opacity-70" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
// <div className="flex items-start gap-2 text-xs text-gray-600">
//   <input type="checkbox" className="mt-1" />
//   <p>
//     By creating an account, you agree to our{" "}
//     <span className="underline font-bold">
//       Terms and Conditions
//     </span>{" "}
//     and <span className="underline font-bold">Privacy Policy</span>.
//   </p>
// </div>
// ;{/* REGISTER */}
// <div className="flex justify-end items-center gap-4">
//   <p className="text-sm">
//     Already got an account?{" "}
//     <Link to="/login" className="underline font-medium">
//       Login
//     </Link>
//   </p>

//   <button className="bg-[#8967B3] text-white px-6 py-2 rounded-lg text-sm">
//     Register
//   </button>
// </div>
// ;{/* DIVIDER */}
// <div className="flex items-center gap-4 text-xs text-gray-400">
//   <div className="flex-1 h-px bg-gray-300" />
//   OR CONTINUE WITH
//   <div className="flex-1 h-px bg-gray-300" />
// </div>
// {/* GOOGLE */}
// <div className="flex justify-center">
//   <button className="flex items-center justify-center gap-3 bg-[#4285F4] text-white py-2 px-6 rounded-lg text-sm w-full max-w-xs">
//     <img src={googleIcon} alt="Google" className="w-5 h-5" />
//     Continue with Google
//   </button>
// </div>
//           </form>
//         </div>
//       </section>

//       <DeveloperCTA />
//     </>
//   );
// }

/////////////////////////////////////////////////////////////////////////////////
//  If Designer wanted it to be visible on mobile phones the information box
//       <div className="sm:flex justify-center mb-10 px-2">
//         <div className="flex items-stretch sm:items-stretch bg-[#F3F3F3] rounded-[11px] overflow-hidden max-w-3xl w-full">
//           {/* ICON */}
//           <div
//             className="bg-black text-white
//                         w-[75px] sm:w-[90px]
//                         flex items-center justify-center
//                         py-1 sm:py-0"
//           >
//             <img
//               src={infoIcon}
//               alt=""
//               className="w-[22px] h-[22px] sm:w-[26px] sm:h-[30px]"
//             />
//           </div>

//           {/* TEXT */}
//           <p
//             className="tracking-0 px-4 py-4 sm:py-[33px]
//                       text-[15px] sm:text-[19px]
//                       text-[#000000]
//                       font-kantumruy
//                       text-center sm:text-left"
//           >
//             If you are an employer, please visit{" "}
//             <Link
//               to="/company-signup"
//               className="font-semibold border-b-4 border-[#8967B3] leading-none"
//             >
//               employers registration
//             </Link>{" "}
//             page.
//           </p>
//         </div>
//       </div>
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../components/ui/Breadcrumb";

import companyIcon from "../../assets/images/company.png";
import infoIcon from "../../assets/icons/infoIcon.svg";
import userIcon from "../../assets/icons/userIcon.svg";
import emailIcon from "../../assets/icons/emailIcon.svg";
import lockIcon from "../../assets/icons/lockIcon.svg";
import eyeIcon from "../../assets/icons/eyeIcon.svg";
import googleIcon from "../../assets/images/googleIcon.png";
import DeveloperCTA from "../../components/home/DeveloperCTA";
import { useAccount } from "../../context/connectorSignup_Acoount";

export default function CompanySignup() {
  const { updateAccount } = useAccount();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // ================= STATE =================
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // ================= VALIDATION =================
  const normalizedEmail = email.trim().toLowerCase();
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail);
  const passwordsMatch =
    password && confirmPassword && password === confirmPassword;

  const passwordStrength = () => {
    if (password.length < 6) return "weak";
    if (/[A-Z]/.test(password) && /\d/.test(password)) return "strong";
    return "medium";
  };
  const handleRegister = () => {
    if (!formValid) return;

    updateAccount({
      fullName: "",
      email,
      password,
      role: "company",
    });
  };

  const strength = passwordStrength();

  const formValid = emailValid && passwordsMatch && strength !== "weak";

  return (
    <>
      <Breadcrumb
        items={[{ label: "Sheqlee", to: "/" }, { label: "Company Signup" }]}
      />

      <section className="px-4 sm:px-6 py-10">
        <div className="max-w-4xl mx-auto">
          <div className="hidden sm:flex justify-center mb-10">
            <div className="flex items-stretch bg-[#F3F3F3] rounded-[11px] overflow-hidden max-w-3xl w-full">
              <div className="bg-black text-white w-[90px] flex items-center justify-center">
                <img src={infoIcon} alt="" className="w-[26px] h-[30px]" />
              </div>

              <p className="px-4 py-[33px] text-[19px] text-[#000000] tracking-0 font-kantumruy">
                If you are a freelancer, please visit{" "}
                <Link
                  to="/freelancer-signup"
                  className="text-[#000000] font-semibold border-b-4 border-[#8967B3] tracking-0 font-kantumruy"
                >
                  freelancers registration
                </Link>{" "}
                page.
              </p>
            </div>
          </div>
          {/* HEADER */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 mb-8 text-center sm:text-left">
            <img
              src={companyIcon}
              alt="company sign up"
              className="w-10 h-10 sm:w-8 sm:h-8"
            />
            <h1 className="text-2xl sm:text-3xl font-bold">
              Company Registration
            </h1>
          </div>
          {/* ================= FORM ================= */}
          <form className="space-y-8 sm:text-left">
            {/* COMPANY + DOMAIN */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Company name */}
              <div>
                <label className="text-sm font-medium">
                  Company name <span className="text-red-500">*</span>
                </label>
                <div className="flex mt-2 bg-[#E5E5E5] rounded-lg overflow-hidden h-[52px]">
                  <div className="bg-black w-12 flex items-center justify-center">
                    <img src={companyIcon} className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    placeholder="Sheqlee Co. Ltd."
                    className="w-full px-3 bg-transparent outline-none text-sm"
                  />
                </div>
              </div>

              {/* Domain */}
              <div>
                <label className="text-sm font-medium">
                  Domain <span className="text-red-500">*</span>
                </label>
                <div className="flex mt-2 bg-[#E5E5E5] rounded-lg overflow-hidden h-[52px]">
                  <div className="bg-black px-3 text-white flex items-center text-sm">
                    https://
                  </div>
                  <input
                    type="text"
                    placeholder="sheqlee.com"
                    className="w-full px-3 bg-transparent outline-none text-sm"
                  />
                </div>
              </div>
            </div>
            {/* REPRESENTATIVE */}
            <div>
              <div className="flex items-center gap-4 mb-6 text-xs text-gray-400">
                <div className="flex-1 h-px bg-gray-300" />
                COMPANY REPRESENTATIVE
                <div className="flex-1 h-px bg-gray-300" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full name */}
                <div>
                  <label className="text-sm font-medium">
                    Full name <span className="text-red-500">*</span>
                  </label>
                  <div className="flex mt-2 bg-[#E5E5E5] rounded-lg overflow-hidden h-[52px]">
                    <div className="bg-black w-12 flex items-center justify-center">
                      <img src={userIcon} className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      placeholder="Abebe Bekila"
                      className="w-full px-3 bg-transparent outline-none text-sm"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="text-sm font-medium">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="flex mt-2 bg-[#E5E5E5] rounded-lg overflow-hidden h-[52px]">
                    <div className="bg-black w-12 flex items-center justify-center">
                      <img src={emailIcon} className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="abebe@gmail.com"
                      className="w-full px-3 bg-transparent outline-none text-sm"
                    />
                    {emailValid && (
                      <span className="px-3 text-green-600 font-bold">✓</span>
                    )}
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="text-sm font-medium">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <div className="flex mt-2 bg-[#E5E5E5] rounded-lg overflow-hidden h-[52px]">
                    <div className="bg-black w-12 flex items-center justify-center">
                      <img src={lockIcon} className="w-4 h-4" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="********"
                      className="w-full px-3 bg-transparent outline-none text-sm"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="px-3"
                    >
                      <img src={eyeIcon} className="w-4 h-4 opacity-70" />
                    </button>
                  </div>

                  <p
                    className={`text-xs mt-1 ${
                      strength === "strong"
                        ? "text-green-600"
                        : strength === "medium"
                        ? "text-yellow-600"
                        : "text-red-600"
                    }`}
                  >
                    Password strength: {strength}
                  </p>
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="text-sm font-medium">
                    Confirm password <span className="text-red-500">*</span>
                  </label>
                  <div className="flex mt-2 bg-[#E5E5E5] rounded-lg overflow-hidden h-[52px]">
                    <div className="bg-black w-12 flex items-center justify-center">
                      <img src={lockIcon} className="w-4 h-4" />
                    </div>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="********"
                      className="w-full px-3 bg-transparent outline-none text-sm"
                    />
                    {passwordsMatch && (
                      <span className="px-3 text-green-600 font-bold">✓</span>
                    )}
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="px-3"
                    >
                      <img src={eyeIcon} className="w-4 h-4 opacity-70" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-2 text-xs text-gray-600">
              <input type="checkbox" className="mt-1" />
              <p>
                By creating an account, you agree to our{" "}
                <span className="underline font-bold">
                  Terms and Conditions
                </span>{" "}
                and <span className="underline font-bold">Privacy Policy</span>.
              </p>
            </div>
            ;{/* REGISTER */}
            <div className="flex justify-end items-center gap-4">
              <p className="text-sm">
                Already got an account?{" "}
                <Link to="/login" className="underline font-medium">
                  Login
                </Link>
              </p>

              <button
                disabled={!formValid}
                onClick={handleRegister}
                className={`px-6 py-2 rounded-lg text-sm ${
                  formValid
                    ? "bg-[#8967B3] text-white"
                    : "bg-[#987fb8] cursor-not-allowed text-white"
                }`}
              >
                Register
              </button>
            </div>
            ;{/* DIVIDER */}
            <div className="flex items-center gap-4 text-xs text-gray-400">
              <div className="flex-1 h-px bg-gray-300" />
              OR CONTINUE WITH
              <div className="flex-1 h-px bg-gray-300" />
            </div>
            {/* GOOGLE */}
            <div className="flex justify-center">
              <button className="flex items-center justify-center gap-3 bg-[#4285F4] text-white py-2 px-6 rounded-lg text-sm w-full max-w-xs">
                <img src={googleIcon} alt="Google" className="w-5 h-5" />
                Continue with Google
              </button>
            </div>
          </form>
        </div>
      </section>

      <DeveloperCTA />
    </>
  );
}

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../../services/api";

// export default function CompanySignup() {
//   const navigate = useNavigate();
//   const [error, setError] = useState("");

//   // assume these already exist or come from state/props
//   const [companyName, setCompanyName] = useState("");
//   const [domain, setDomain] = useState("");
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const formValid = true; // replace with your real validation
//   const normalizedEmail = email.toLowerCase();

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     if (!formValid) return;

//     const signupData = {
//       companyName,
//       domain,
//       fullName,
//       email: normalizedEmail,
//       password,
//       role: "company",
//     };

//     try {
//       const response = await api.post("/auth/register-company", signupData);

//       // Axios only enters here for 2xx responses
//       updateAccount?.(response.data.user);
//       navigate("/dashboard");
//     } catch (err) {
//       setError(err.response?.data?.message || "Connection to backend failed");
//     }
//   };

//   return (
//     <form onSubmit={handleRegister}>
//       {error && <p className="text-red-500">{error}</p>}
//       <button type="submit">Register Company</button>
//     </form>
//   );
// }
