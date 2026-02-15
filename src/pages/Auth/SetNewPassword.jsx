import { useState } from "react";
import Breadcrumb from "../../components/ui/Breadcrumb";

import resetIcon from "../../assets/icons/resetPasswordIcon.svg";
import codeIcon from "../../assets/icons/emailIcon.svg";
import lockIcon from "../../assets/icons/lockIcon.svg";
import eyeIcon from "../../assets/icons/eyeIcon.svg";

export default function SetNewPassword() {
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  /* -------------------------------
     Password strength
  -------------------------------- */
  const passwordStrong =
    password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password);

  const passwordsMatch = password.length > 0 && password === confirmPassword;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!passwordStrong) {
      alert("Password is too weak");
      return;
    }

    if (!passwordsMatch) {
      alert("Passwords do not match");
      return;
    }

    alert("Password reset successful");
  };

  return (
    <>
      {/* BREADCRUMB (desktop only) */}
      <div className="hidden sm:block px-6 pt-4">
        <Breadcrumb
          items={[
            { label: "Sheqlee", to: "/" },
            { label: "Reset Password", to: "/reset-password" },
            { label: "Code", to: "/reset-password/code" },
            { label: "New Password" },
          ]}
        />
      </div>

      <section className="px-4 sm:px-6 py-12">
        <div className="max-w-[1000px] mx-auto">
          {/* HEADER */}
          <div
            className="flex flex-col sm:flex-row sm:items-center sm:justify-start
                          items-center justify-center gap-3 mb-12"
          >
            <img src={resetIcon} alt="" className="w-9 h-9" />
            <h1 className="text-2xl sm:text-3xl font-bold">Set new password</h1>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="max-w-[850px] mx-auto space-y-8"
          >
            {/* CODE */}
            <div className="max-w-[420px]">
              <label className="block text-sm font-medium mb-2">
                Enter code
              </label>

              <div className="flex bg-[#E5E5E5] rounded-lg overflow-hidden h-[52px]">
                <div className="bg-black w-12 flex items-center justify-center">
                  <img src={codeIcon} alt="" className="w-4 h-4" />
                </div>

                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={6}
                  value={code}
                  onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
                  placeholder="123456"
                  required
                  className="w-full px-4 bg-transparent outline-none text-sm"
                />
              </div>

              <p className="text-xs text-gray-500 mt-2">
                Get a reset code from your email and input it above.
              </p>
            </div>

            {/* PASSWORDS */}
            <div
              className="
                grid grid-cols-1
                sm:grid-cols-2
                gap-6
              "
            >
              {/* NEW PASSWORD */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  New password
                </label>

                <div className="flex bg-[#E5E5E5] rounded-lg overflow-hidden h-[52px]">
                  <div className="bg-black w-12 flex items-center justify-center">
                    <img src={lockIcon} alt="" className="w-4 h-4" />
                  </div>

                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="********"
                    required
                    className="w-full px-4 bg-transparent outline-none text-sm"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="px-3"
                  >
                    <img src={eyeIcon} alt="" className="w-4 h-4 opacity-70" />
                  </button>
                </div>

                <p className="text-xs mt-2 hidden sm:block">
                  {passwordStrong ? (
                    <span className="text-green-600">✔ Strong password</span>
                  ) : (
                    <span className=" text-gray-500">
                      Set a strong password to protect your account.
                    </span>
                  )}
                </p>
              </div>

              {/* CONFIRM PASSWORD */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Confirm password
                </label>

                <div className="flex bg-[#E5E5E5] rounded-lg overflow-hidden h-[52px]">
                  <div className="bg-black w-12 flex items-center justify-center">
                    <img src={lockIcon} alt="" className="w-4 h-4" />
                  </div>

                  <input
                    type={showConfirm ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="********"
                    required
                    className="w-full px-4 bg-transparent outline-none text-sm"
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="px-3"
                  >
                    <img src={eyeIcon} alt="" className="w-4 h-4 opacity-70" />
                  </button>
                </div>

                <p className="text-xs mt-2">
                  {confirmPassword.length > 0 &&
                    (passwordsMatch ? (
                      <span className="text-green-600">✔ Passwords match</span>
                    ) : (
                      <span className="text-red-500">
                        Passwords do not match
                      </span>
                    ))}
                </p>
              </div>
            </div>

            {/* BUTTON */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="
                  bg-[#8967B3] text-white
                  px-10 py-2 rounded-lg
                  sm:w-auto
                "
              >
                Reset password
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
