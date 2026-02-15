import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Breadcrumb from "../../components/ui/Breadcrumb";

import companyIcon from "../../assets/images/company.png";
import infoIcon from "../../assets/icons/infoIcon.svg";
import userIcon from "../../assets/icons/userIcon.svg";
import emailIcon from "../../assets/icons/emailIcon.svg";
import lockIcon from "../../assets/icons/lockIcon.svg";
import eyeIcon from "../../assets/icons/eyeIcon.svg";
import googleIcon from "../../assets/images/googleIcon.png";
import DeveloperCTA from "../../components/home/DeveloperCTA";
import api from "../../api/axios";

export default function CompanySignup() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // ================= STATE =================
  const [companyName, setCompanyName] = useState("");
  const [domain, setDomain] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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

  const strength = passwordStrength();
  const formValid =
    companyName &&
    domain &&
    fullName &&
    emailValid &&
    passwordsMatch &&
    strength !== "weak";

  // ================= HANDLE REGISTER =================
  const handleRegister = async () => {
    if (!formValid) return;
    setError("");
    setLoading(true);

    try {
      const res = await api.post("/auth/company-register", {
        company: {
          name: companyName,
          domain: domain,
        },
        representative: {
          full_name: fullName,
          email: normalizedEmail,
          password,
          passwordConfirm: confirmPassword,
        },
      });

      if (res.data.success) {
        // registration successful, navigate to login or dashboard
        navigate("/login");
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

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
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
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
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
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
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
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

            {/* TERMS */}
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

            {/* ERROR */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* REGISTER BUTTON */}
            <div className="flex justify-end items-center gap-4">
              <p className="text-sm">
                Already got an account?{" "}
                <Link to="/login" className="underline font-medium">
                  Login
                </Link>
              </p>

              <button
                type="button"
                disabled={!formValid || loading}
                onClick={handleRegister}
                className={`px-6 py-2 rounded-lg text-sm ${
                  formValid && !loading
                    ? "bg-[#8967B3] text-white"
                    : "bg-[#987fb8] cursor-not-allowed text-white"
                }`}
              >
                {loading ? "Registering..." : "Register"}
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
