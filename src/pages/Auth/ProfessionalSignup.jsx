import { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../components/ui/Breadcrumb";

import infoIcon from "../../assets/icons/infoIcon.svg";
import userIcon from "../../assets/icons/userIcon.svg";
import emailIcon from "../../assets/icons/emailIcon.svg";
import lockIcon from "../../assets/icons/lockIcon.svg";
import eyeIcon from "../../assets/icons/eyeIcon.svg";
import professionalRegistration from "../../assets/icons/professionalRegistration.svg";
import googleIcon from "../../assets/images/googleIcon.png";
import DeveloperCTA from "../../components/home/DeveloperCTA";
import { useAccount } from "../../context/connectorSignup_Acoount";
import api from "../../api/axios";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ProfessionalSignup() {
  const [fullName, setFullName] = useState("");

  const { updateAccount } = useAccount();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // added states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const cleanedEmail = email.toLowerCase().replace(/\s+/g, "");
  const isEmailValid = emailRegex.test(cleanedEmail);

  const passwordsMatch =
    confirmPassword.length > 0 && password === confirmPassword;

  const passwordStrength =
    password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password)
      ? "strong"
      : password.length >= 6
        ? "medium"
        : "weak";

  const isFormValid =
    isEmailValid && passwordsMatch && passwordStrength !== "weak";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    try {
      const res = await api.post("/auth/signup", {
        name: fullName,
        email: cleanedEmail,
        password,
        passwordConfirm: confirmPassword,
      });

      console.log("Signup success:", res.data);

      localStorage.setItem("token", res.data.token);
    } catch (err) {
      console.error(
        "Signup error:",
        err.response?.data?.message || err.message,
      );
    }
  };

  return (
    <>
      <div className="hidden sm:block">
        <Breadcrumb
          sectionLabel="Sheqlee"
          sectionTo="/"
          current="Professional Signup"
        />
      </div>

      <section className="px-4 sm:px-6 py-10">
        <div className="max-w-4xl mx-auto">
          <div className="sm:flex justify-center mb-10 px-2">
            <div className="flex items-stretch sm:items-stretch bg-[#F3F3F3] rounded-[11px] overflow-hidden max-w-3xl w-full">
              {/* ICON */}
              <div
                className="bg-black text-white 
                    w-[75px] sm:w-[90px] 
                    flex items-center justify-center 
                    py-1 sm:py-0"
              >
                <img
                  src={infoIcon}
                  alt=""
                  className="w-[22px] h-[22px] sm:w-[26px] sm:h-[30px]"
                />
              </div>

              {/* TEXT */}
              <p
                className="tracking-0 px-4 py-4 sm:py-[33px] 
                  text-[15px] sm:text-[19px] 
                  text-[#000000] 
                  font-kantumruy 
                  text-center sm:text-left"
              >
                If you are an employer, please visit{" "}
                <Link
                  to="/company-signup"
                  className="font-semibold border-b-4 border-[#8967B3] leading-none"
                >
                  employers registration
                </Link>{" "}
                page.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 mb-8 text-center sm:text-left">
            <img
              src={professionalRegistration}
              alt="proffessional Signup Icon"
              className="w-10 h-10 sm:w-8 sm:h-8"
            />
            <h1 className="text-2xl sm:text-3xl font-bold">
              Professional Registration
            </h1>
          </div>

          <form className="space-y-8 sm:text-left" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full name */}
              <div>
                <label className="text-sm font-medium block text-left">
                  Full name <span className="text-red-500">*</span>
                </label>
                <div className="flex mt-2 bg-[#E5E5E5] rounded-lg overflow-hidden h-[52px]">
                  <div className="bg-black w-12 flex items-center justify-center">
                    <img src={userIcon} className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Abebe Bekila"
                    className="w-full px-3 bg-transparent outline-none text-sm"
                  />

                  {/* <input
                    type="text"
                    placeholder="Abebe Bekila"
                    className="w-full px-3 bg-transparent outline-none text-sm"
                  /> */}
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-medium block text-left">
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="flex mt-2 bg-[#E5E5E5] rounded-lg overflow-hidden h-[52px]">
                  <div className="bg-black w-12 flex items-center justify-center">
                    <img src={emailIcon} className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    value={cleanedEmail}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="abebe@gmail.com"
                    className="w-full px-3 bg-transparent outline-none text-sm"
                  />
                </div>
                {email.length > 0 && (
                  <p
                    className={`text-xs mt-1 ${
                      isEmailValid ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {isEmailValid ? "✓ Valid email" : "Invalid email"}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="text-sm font-medium block text-left">
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
                    className="px-3 flex items-center"
                  >
                    <img src={eyeIcon} className="w-4 h-4 opacity-70" />
                  </button>
                </div>
                <p
                  className={`text-xs mt-1 ${
                    passwordStrength === "strong"
                      ? "text-green-600"
                      : passwordStrength === "medium"
                        ? "text-yellow-500"
                        : "text-red-500"
                  }`}
                >
                  Password strength: {passwordStrength}
                </p>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="text-sm font-medium block text-left">
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
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="px-3 flex items-center"
                  >
                    <img src={eyeIcon} className="w-4 h-4 opacity-70" />
                  </button>
                </div>
                {confirmPassword.length > 0 && (
                  <p
                    className={`text-xs mt-1 ${
                      passwordsMatch ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {passwordsMatch
                      ? "✓ Passwords match"
                      : "Passwords do not match"}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-start gap-2 text-xs text-gray-600">
              <input type="checkbox" className="mt-1" />
              <p>
                By creating an account, you agree to our{" "}
                <span className="border-b-4 border-[#8967B3] font-bold">
                  Terms and Conditions
                </span>{" "}
                and{" "}
                <span className="border-b-4 border-[#8967B3] font-bold">
                  Privacy Policy
                </span>
                .
              </p>
            </div>

            {/* REGISTER */}
            <div className="flex justify-end items-center gap-4">
              <p className="text-sm">
                Already got an account?{" "}
                <Link
                  to="/login"
                  className="border-b-4 border-[#8967B3] font-medium"
                >
                  Login
                </Link>
              </p>

              <button
                disabled={!isFormValid}
                className={`px-6 py-2 rounded-lg text-sm ${
                  isFormValid
                    ? "bg-[#8967B3] text-white"
                    : "bg-[#8773a0] cursor-not-allowed text-white"
                }`}
              >
                Register
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
