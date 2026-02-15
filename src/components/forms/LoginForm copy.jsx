import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Breadcrumb from "../ui/Breadcrumb";

import emailIcon from "../../assets/icons/emailIcon.svg";
import lockIcon from "../../assets/icons/lockIcon.svg";
import eyeIcon from "../../assets/icons/eyeIcon.svg";
import googleIcon from "../../assets/images/googleIcon.png";
import loginHeaderIcon from "../../assets/icons/loginHeaderIcon.svg";

export default function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  /* -------------------------------
     Normalize email input
  -------------------------------- */
  const normalizeEmail = (value) =>
    value.toLowerCase().replace(/\s+/g, "").trim();

  /* -------------------------------
     Load remembered user
  -------------------------------- */
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("rememberLogin"));
    if (saved) {
      setEmail(saved.email);
      setPassword(saved.password);
      setRememberMe(true);
    }
  }, []);

  /* -------------------------------
     Mock account check (frontend)
     Replace later with API
  -------------------------------- */
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setError("");

  //   const cleanEmail = normalizeEmail(email);

  //   const users = JSON.parse(localStorage.getItem("users")) || [];
  //   const user = users.find((u) => u.email === cleanEmail);

  //   if (!user) {
  //     setError("This account does not exist. Check your email or password.");
  //     return;
  //   }

  //   if (user.password !== password) {
  //     setError("Incorrect email or password.");
  //     return;
  //   }

  //   if (rememberMe) {
  //     localStorage.setItem(
  //       "rememberLogin",
  //       JSON.stringify({ email: cleanEmail, password })
  //     );
  //   } else {
  //     localStorage.removeItem("rememberLogin");
  //   }

  //   // SUCCESS
  //   localStorage.setItem(
  //     "authUser",
  //     JSON.stringify({
  //       email: cleanEmail,
  //       companyName: "Microsoft", // mock name for now
  //     })
  //   );

  //   navigate("/");
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const cleanEmail = normalizeEmail(email);

    // 🔹 MOCK USER (replace later with backend response)
    const mockUser = {
      email: cleanEmail,
      role: cleanEmail.includes("company") ? "company" : "professional",
      name: cleanEmail.includes("company")
        ? "Sheqlee Co., Ltd."
        : "Muruts Yifter",
    };

    // 🔹 Save auth user
    localStorage.setItem("authUser", JSON.stringify(mockUser));

    // 🔹 Optional: remember login
    if (rememberMe) {
      localStorage.setItem(
        "rememberLogin",
        JSON.stringify({ email, password })
      );
    } else {
      localStorage.removeItem("rememberLogin");
    }

    // ✅ ROLE-BASED REDIRECT (IMPORTANT)
    if (mockUser.role === "professional") {
      navigate("/freelancer", { replace: true });
    } else if (mockUser.role === "company") {
      navigate("/dashboard", { replace: true });
    } else {
      navigate("/", { replace: true });
    }
  };

  return (
    <>
      {/* BREADCRUMB */}
      <div className="hidden sm:block">
        <Breadcrumb sectionLabel="Sheqlee" sectionTo="/" current="Login" />
      </div>

      <section className="px-4 sm:px-6 py-10">
        <div className="">
          {/* HEADER */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-10 text-center sm:text-left">
            <img src={loginHeaderIcon} className="w-10 h-10 mx-auto sm:mx-0" />
            <h1 className="text-2xl sm:text-3xl font-bold">
              Login to your account
            </h1>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="max-w-[600px] mx-auto space-y-6"
          >
            {/* INPUTS */}
            <div className="flex flex-col sm:flex-row gap-6">
              {/* EMAIL */}
              <div className="flex-1">
                <label className="text-sm font-medium">Email</label>
                <div className="flex mt-2 bg-[#E5E5E5] rounded-lg overflow-hidden h-[52px]">
                  <div className="bg-black w-12 flex items-center justify-center">
                    <img src={emailIcon} className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(normalizeEmail(e.target.value))}
                    placeholder="abebe@gmail.com"
                    className="w-full px-3 bg-transparent outline-none text-sm"
                    required
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div className="flex-1">
                <label className="text-sm font-medium">Password</label>
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
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="px-3"
                  >
                    <img src={eyeIcon} className="w-4 h-4 opacity-70" />
                  </button>
                </div>
              </div>
            </div>

            {/* ERROR */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* REMEMBER + FORGOT */}
            <div className=" text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                Remember me next time
              </label>
            </div>

            {/* LOGIN BUTTON */}
            <div className="flex gap-4 items-center justify-end">
              <p>
                Forgot password?{" "}
                <Link
                  to="/reset-password"
                  className="text-[#000000] font-medium border-b-2 border-[#8967B3]"
                >
                  Reset
                </Link>
              </p>
              <button
                type="submit"
                className="bg-[#8967B3] text-white px-6 py-2 rounded-lg"
              >
                Login
              </button>
            </div>

            {/* DIVIDER */}
            <div className="flex items-center gap-4 text-xs text-gray-400">
              <div className="flex-1 h-px bg-gray-300" />
              OR CONTINUE WITH
              <div className="flex-1 h-px bg-gray-300" />
            </div>

            {/* GOOGLE */}
            <div className="flex justify-center">
              <button className="flex items-center gap-3 bg-[#4285F4] text-white py-2 px-6 rounded-lg w-full max-w-xs">
                <img src={googleIcon} className="w-5 h-5" />
                Continue with Google
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Breadcrumb from "../ui/Breadcrumb";

// import emailIcon from "../../assets/icons/emailIcon.svg";
// import lockIcon from "../../assets/icons/lockIcon.svg";
// import eyeIcon from "../../assets/icons/eyeIcon.svg";
// import googleIcon from "../../assets/images/googleIcon.png";
// import loginHeaderIcon from "../../assets/icons/loginHeaderIcon.svg";

// export default function LoginForm() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);
//   const [error, setError] = useState("");

//   const normalizeEmail = (value) =>
//     value.toLowerCase().replace(/\s+/g, "").trim();

//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("rememberLogin"));
//     if (saved) {
//       setEmail(saved.email);
//       setPassword(saved.password);
//       setRememberMe(true);
//     }
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError("");

//     const cleanEmail = normalizeEmail(email);
//     const users = JSON.parse(localStorage.getItem("users")) || [];
//     const user = users.find((u) => u.email === cleanEmail);

//     if (!user) {
//       setError("This account does not exist. Check your email or password.");
//       return;
//     }

//     if (user.password !== password) {
//       setError("Incorrect email or password.");
//       return;
//     }

//     if (rememberMe) {
//       localStorage.setItem(
//         "rememberLogin",
//         JSON.stringify({ email: cleanEmail, password })
//       );
//     } else {
//       localStorage.removeItem("rememberLogin");
//     }

//     alert("Login successful");
//   };

//   return (
//     <>
//       {/* BREADCRUMB */}
//       <div className="hidden sm:block">
//         <Breadcrumb sectionLabel="Sheqlee" sectionTo="/" current="Login" />
//       </div>

//       <section className="px-4 sm:px-6 py-10">
//         <div className="max-w-[900px] mx-auto">
//           {/* HEADER */}
//           <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-10 text-center sm:text-left">
//             <img
//               src={loginHeaderIcon}
//               className="w-10 h-10 mx-auto sm:mx-0"
//             />
//             <h1 className="text-2xl sm:text-3xl font-bold">
//               Login to your account
//             </h1>
//           </div>

//           {/* FORM */}
//           <form
//             onSubmit={handleSubmit}
//             className="max-w-[600px] mx-auto space-y-6"
//           >
//             {/* INPUTS */}
//             <div className="flex flex-col sm:flex-row gap-6">
//               {/* EMAIL */}
//               <div className="flex-1">
//                 <label className="text-sm font-medium">Email</label>
//                 <div className="flex mt-2 bg-[#E5E5E5] rounded-lg overflow-hidden h-[52px]">
//                   <div className="bg-black w-12 flex items-center justify-center">
//                     <img src={emailIcon} className="w-4 h-4" />
//                   </div>
//                   <input
//                     type="email"
//                     value={email}
//                     onChange={(e) =>
//                       setEmail(normalizeEmail(e.target.value))
//                     }
//                     placeholder="abebe@gmail.com"
//                     className="w-full px-3 bg-transparent outline-none text-sm"
//                     required
//                   />
//                 </div>
//               </div>

//               {/* PASSWORD */}
//               <div className="flex-1">
//                 <label className="text-sm font-medium">Password</label>
//                 <div className="flex mt-2 bg-[#E5E5E5] rounded-lg overflow-hidden h-[52px]">
//                   <div className="bg-black w-12 flex items-center justify-center">
//                     <img src={lockIcon} className="w-4 h-4" />
//                   </div>
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder="********"
//                     className="w-full px-3 bg-transparent outline-none text-sm"
//                     required
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword((v) => !v)}
//                     className="px-3"
//                   >
//                     <img src={eyeIcon} className="w-4 h-4 opacity-70" />
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* ERROR */}
//             {error && <p className="text-red-500 text-sm">{error}</p>}

//             {/* REMEMBER */}
//             <div className="text-sm">
//               <label className="flex items-center gap-2">
//                 <input
//                   type="checkbox"
//                   checked={rememberMe}
//                   onChange={() => setRememberMe(!rememberMe)}
//                 />
//                 Remember me next time
//               </label>
//             </div>

//             {/* ACTIONS */}
//             <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-4">
//               <p className="text-sm text-center sm:text-left">
//                 Forgot password?{" "}
//                 <Link
//                   to="/reset-password"
//                   className="font-medium border-b-2 border-[#8967B3]"
//                 >
//                   Reset
//                 </Link>
//               </p>

//               <button
//                 type="submit"
//                 className="bg-[#8967B3] text-white px-6 py-2 rounded-lg w-full sm:w-auto"
//               >
//                 Login
//               </button>
//             </div>

//             {/* DIVIDER */}
//             <div className="flex items-center gap-4 text-xs text-gray-400">
//               <div className="flex-1 h-px bg-gray-300" />
//               OR CONTINUE WITH
//               <div className="flex-1 h-px bg-gray-300" />
//             </div>

//             {/* GOOGLE */}
//             <div className="flex justify-center">
//               <button className="flex items-center gap-3 bg-[#4285F4] text-white py-2 px-6 rounded-lg w-full max-w-xs">
//                 <img src={googleIcon} className="w-5 h-5" />
//                 Continue with Google
//               </button>
//             </div>
//           </form>
//         </div>
//       </section>
//     </>
//   );
// }
