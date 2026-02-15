import { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../components/ui/Breadcrumb";

import resetIcon from "../../assets/icons/resetPasswordIcon.svg";
import emailIcon from "../../assets/icons/emailIcon.svg";

export default function ResetPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔐 You said backend/email logic already exists
    alert("Reset code sent to your email");
    setEmail("");
  };

  return (
    <>
      {/* BREADCRUMB (desktop only) */}
      <div className="hidden sm:block px-6 pt-4">
        <Breadcrumb
          sectionLabel="Sheqlee"
          sectionTo="/"
          current="Reset Password"
        />
      </div>

      <section className="px-4 sm:px-6 py-12">
        <div className="max-w-[900px] mx-auto">
          {/* HEADER */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <img src={resetIcon} alt="" className="w-8 h-8" />
            <h1 className="text-2xl sm:text-3xl font-bold">Reset password</h1>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="max-w-[520px] mx-auto">
            {/* EMAIL */}
            <label className="block text-sm font-medium mb-2">Email</label>

            <div className="flex bg-[#E5E5E5] rounded-lg overflow-hidden h-[52px]">
              <div className="bg-black w-12 flex items-center justify-center">
                <img src={emailIcon} alt="" className="w-4 h-4" />
              </div>

              <input
                type="email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value.toLowerCase().replace(/\s+/g, ""))
                }
                placeholder="abebe@gmail.com"
                required
                className="w-full px-4 bg-transparent outline-none text-sm"
              />
            </div>

            {/* HELP TEXT */}
            <p className="text-xs text-gray-500 mt-3">
              You will receive a password reset code in your email.
            </p>

            {/* BUTTON */}

            <div className="flex justify-center sm:justify-end mt-8">
              <Link to="/set-new-password">
                <button
                  type="submit"
                  className="bg-[#8967B3] text-white px-8 py-2 rounded-lg
                w-full sm:w-auto"
                >
                  Send code
                </button>
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
