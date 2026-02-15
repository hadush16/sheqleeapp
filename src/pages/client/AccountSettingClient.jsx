// import { useRef, useState } from "react";
// import Breadcrumb from "../../components/ui/Breadcrumb";

// import settingsIcon from "../../assets/icons/settingsIcon.svg";
// import userIcon from "../../assets/icons/userIcon.svg";
// import emailIcon from "../../assets/icons/emailIcon.svg";
// import lockIcon from "../../assets/icons/lockIcon.svg";
// import eyeIcon from "../../assets/icons/eyeIcon.svg";
// import { useAccount } from "../../context/connectorSignup_Acoount";

// export default function AccountSettingClient() {
//   // ================= MOCKED USER DATA (replace later with API/store) =================
//   const { account, updateAccount } = useAccount();

//   const [form, setForm] = useState({
//     fullName: account.fullName,
//     email: account.email,
//     password: "",
//     confirmPassword: "",
//     deleteReason: "",
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirm, setShowConfirm] = useState(false);

//   const nameRef = useRef(null);
//   const emailRef = useRef(null);

//   const PASSWORD_UNCHANGED = !form.password && !form.confirmPassword;

//   const passwordsMatch =
//     PASSWORD_UNCHANGED || form.password === form.confirmPassword;

//   const deleteLimit = 128;

//   const handleUpdate = () => {
//     // required fields
//     if (!form.fullName.trim() || !form.email.trim()) return;

//     // if password fields are used, they must match
//     if (form.password || form.confirmPassword) {
//       if (!passwordsMatch) return;
//     }

//     const payload = {
//       fullName: form.fullName.trim(),
//       email: form.email.trim(),
//       ...(form.password ? { password: form.password } : {}),
//     };

//     updateAccount(payload);

//     console.log("UPDATE SETTINGS", payload);
//   };

//   const handleDelete = () => {
//     if (!form.deleteReason.trim()) return;
//     console.log("DELETE ACCOUNT:", form.deleteReason);
//   };

//   return (
//     <>
//       {/* BREADCRUMB */}

//       <Breadcrumb
//         items={[{ label: "Sheqlee", to: "/" }, { label: "Account Setting" }]}
//       />

//       <section className="px-4 sm:px-6 py-10">
//         <div className="max-w-3xl mx-auto">
//           {/* HEADER */}
//           <div className="flex flex-col items-center text-center mb-10">
//             <img src={settingsIcon} alt="" className="w-10 h-10 mb-3" />
//             <h1 className="text-2xl sm:text-3xl font-bold">Account Setting</h1>
//             <p className="text-sm text-gray-500 mt-2 max-w-md">
//               Edit your account settings to make your account more secure.
//             </p>
//           </div>

//           {/* FORM */}
//           <div className="space-y-10">
//             {/* NAME + EMAIL */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               {/* FULL NAME */}
//               <div>
//                 <label className="text-sm font-medium">
//                   Full name <span className="text-red-500">*</span>
//                 </label>
//                 <div className="flex mt-2 bg-[#E5E5E5] rounded-lg overflow-hidden h-[52px]">
//                   <div className="bg-black w-12 flex items-center justify-center">
//                     <img src={userIcon} className="w-4 h-4" />
//                   </div>
//                   <input
//                     ref={nameRef}
//                     value={form.fullName}
//                     onChange={(e) =>
//                       setForm((p) => ({ ...p, fullName: e.target.value }))
//                     }
//                     className="w-full px-3 bg-transparent outline-none text-sm"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => nameRef.current?.focus()}
//                     className="px-3 opacity-60"
//                   >
//                     ✎
//                   </button>
//                 </div>
//               </div>

//               {/* EMAIL */}
//               <div>
//                 <label className="text-sm font-medium">
//                   Email <span className="text-red-500">*</span>
//                 </label>
//                 <div className="flex mt-2 bg-[#E5E5E5] rounded-lg overflow-hidden h-[52px]">
//                   <div className="bg-black w-12 flex items-center justify-center">
//                     <img src={emailIcon} className="w-4 h-4" />
//                   </div>
//                   <input
//                     ref={emailRef}
//                     value={form.email}
//                     onChange={(e) =>
//                       setForm((p) => ({ ...p, email: e.target.value }))
//                     }
//                     className="w-full px-3 bg-transparent outline-none text-sm"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => emailRef.current?.focus()}
//                     className="px-3 opacity-60"
//                   >
//                     ✎
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* PASSWORD */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               <div>
//                 <label className="text-sm font-medium">Password</label>
//                 <div className="flex mt-2 bg-[#E5E5E5] rounded-lg overflow-hidden h-[52px]">
//                   <div className="bg-black w-12 flex items-center justify-center">
//                     <img src={lockIcon} className="w-4 h-4" />
//                   </div>
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     value={form.password}
//                     onChange={(e) =>
//                       setForm((p) => ({ ...p, password: e.target.value }))
//                     }
//                     className="w-full px-3 bg-transparent outline-none text-sm"
//                   />
//                   <button
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="px-3"
//                   >
//                     <img src={eyeIcon} className="w-4 h-4 opacity-70" />
//                   </button>
//                 </div>
//               </div>

//               <div>
//                 <label className="text-sm font-medium">Confirm password</label>
//                 <div className="flex mt-2 bg-[#E5E5E5] rounded-lg overflow-hidden h-[52px]">
//                   <div className="bg-black w-12 flex items-center justify-center">
//                     <img src={lockIcon} className="w-4 h-4" />
//                   </div>
//                   <input
//                     type={showConfirm ? "text" : "password"}
//                     value={form.confirmPassword}
//                     onChange={(e) =>
//                       setForm((p) => ({
//                         ...p,
//                         confirmPassword: e.target.value,
//                       }))
//                     }
//                     className="w-full px-3 bg-transparent outline-none text-sm"
//                   />
//                   <button
//                     onClick={() => setShowConfirm(!showConfirm)}
//                     className="px-3"
//                   >
//                     <img src={eyeIcon} className="w-4 h-4 opacity-70" />
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <p className="text-xs text-gray-500">
//               Leave this empty if you don't want to change your password.
//             </p>

//             <div className="flex justify-end">
//               <button
//                 onClick={handleUpdate}
//                 disabled={!passwordsMatch}
//                 className="bg-[#8967B3] text-white px-6 py-2 rounded-lg text-sm"
//               >
//                 Update setting
//               </button>
//             </div>

//             {/* DIVIDER */}
//             <div className="border-t pt-8">
//               <h2 className="font-semibold mb-2">Account deletion</h2>
//               <p className="text-sm text-gray-500 mb-4">
//                 Please note that your account will be available for recovery for
//                 one month after deletion. After that, it will be permanently
//                 deleted and cannot be recovered.
//               </p>

//               <label className="text-sm font-medium">
//                 Deletion reason <span className="text-red-500">*</span>
//               </label>

//               <div className="relative mt-2">
//                 <textarea
//                   maxLength={deleteLimit}
//                   value={form.deleteReason}
//                   onChange={(e) =>
//                     setForm((p) => ({
//                       ...p,
//                       deleteReason: e.target.value,
//                     }))
//                   }
//                   placeholder="Why are you deleting your account..."
//                   className="w-full min-h-[120px] bg-[#E5E5E5] rounded-lg p-3 text-sm outline-none resize-none"
//                 />
//                 <span className="absolute bottom-2 right-3 text-xs text-gray-400">
//                   {form.deleteReason.length}/{deleteLimit}
//                 </span>
//               </div>

//               <p className="text-xs text-gray-500 mt-2">
//                 Giving us accurate reason for your deletion will help us make
//                 Sheqlee better. We hope to see you back soon. Thank you.
//               </p>

//               <div className="flex justify-end mt-4">
//                 <button
//                   onClick={handleDelete}
//                   className="bg-red-500 text-white px-6 py-2 rounded-lg text-sm"
//                 >
//                   Delete account
//                 </button>
//               </div>
//             </div>

//             <p className="text-xs text-gray-500">
//               <span className="text-red-500">*</span> fields are required.
//             </p>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// import { useRef, useState, useEffect } from "react";
// import Breadcrumb from "../../components/ui/Breadcrumb";

// import settingsIcon from "../../assets/icons/settingsIcon.svg";
// import blackIconedit from "../../assets/icons/blackIconedit.svg";
// import api from "../../api/axios";

// export default function AccountSettingClient() {
//   const [loading, setLoading] = useState(true);
//   const [userId, setUserId] = useState(null);

//   const nameRef = useRef(null);
//   const emailRef = useRef(null);
//   const passwordRef = useRef(null);
//   const confirmRef = useRef(null);

//   const [form, setForm] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     deleteReason: "",
//   });

//   /* ---------------- FETCH LOGGED USER ---------------- */
//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const userRaw = localStorage.getItem("user");
//         if (!userRaw) return;

//         const user = JSON.parse(userRaw);
//         const res = await api.get(`/users/${user._id}`);

//         console.log("API RESPONSE:", res.data);

//         setForm((p) => ({
//           ...p,
//           fullName: res.data.data.user.fullName || "",
//           email: res.data.data.user.email || "",
//         }));

//         setUserId(user._id);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUser();
//   }, []);

//   if (loading) {
//     return <div className="text-center py-20">Loading account...</div>;
//   }

//   /* ---------------- HANDLERS ---------------- */
//   const handleUpdate = async () => {
//     if (!form.fullName.trim() || !form.email.trim()) {
//       alert("Name and email are required");
//       return;
//     }

//     if (form.password && form.password !== form.confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     try {
//       await api.patch(`/users/${userId}`, {
//         fullName: form.fullName,
//         email: form.email,
//         ...(form.password ? { password: form.password } : {}),
//       });

//       alert("Account updated successfully");
//     } catch (err) {
//       console.error(err);
//       alert("Failed to update account");
//     }
//   };

//   const handleDelete = () => {
//     if (!form.deleteReason.trim()) {
//       alert("Please provide deletion reason");
//       return;
//     }

//     console.log("DELETE REQUEST:", form.deleteReason);
//     alert("Delete request submitted (backend pending)");
//   };

//   const inputClass =
//     "flex-1 px-3 bg-[#DFDFDF] outline-none border-none shadow-none ring-0 focus:ring-0 appearance-none text-[16px] lg:text-[23px]";

//   return (
//     <>
//       <Breadcrumb
//         items={[{ label: "Sheqlee", to: "/" }, { label: "Account Setting" }]}
//       />

//       <section className="px-4 sm:px-6 py-12 max-w-[1000px] mx-auto">
//         {/* HEADER */}
//         <div className="text-center mb-12">
//           <img src={settingsIcon} className="w-14 h-14 mx-auto mb-4" />
//           <h1 className="text-[#000000] text-[23px] lg:text-[45px] font-semibold mb-4">
//             Account Setting
//           </h1>
//           <p className="text-[#000000] text-[23px] lg:text-[27px] leading-8 max-w-[600px] mx-auto">
//             Edit your account settings to make your account more secure.
//           </p>
//         </div>

//         <div className="space-y-10">
//           {/* NAME + EMAIL */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* FULL NAME */}
//             <div>
//               <label className="text-[16px] lg:text-[22px] font-semibold mb-[20px]">
//                 Full name <span className="text-[#FF2626] text-[23px]">*</span>
//               </label>

//               <div className="mt-2 flex items-center bg-[#DFDFDF] rounded-lg px-[4px] py-[15px]">
//                 <input
//                   ref={nameRef}
//                   value={form.fullName}
//                   onChange={(e) =>
//                     setForm((p) => ({ ...p, fullName: e.target.value }))
//                   }
//                   className={inputClass}
//                 />
//                 <button
//                   onClick={() => nameRef.current?.focus()}
//                   className="px-3"
//                 >
//                   <img src={blackIconedit} className="w-4 h-4 opacity-70" />
//                 </button>
//               </div>
//             </div>

//             {/* EMAIL */}
//             <div>
//               <label className="text-[16px] lg:text-[22px] font-semibold mb-[20px]">
//                 Email <span className="text-[#FF2626] text-[23px]">*</span>
//               </label>

//               <div className="mt-2 flex items-center bg-[#DFDFDF] rounded-lg px-[4px] py-[15px]">
//                 <input
//                   ref={emailRef}
//                   value={form.email}
//                   onChange={(e) =>
//                     setForm((p) => ({ ...p, email: e.target.value }))
//                   }
//                   className={inputClass}
//                 />
//                 <button
//                   onClick={() => emailRef.current?.focus()}
//                   className="px-3"
//                 >
//                   <img src={blackIconedit} className="w-4 h-4 opacity-70" />
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* PASSWORDS */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* PASSWORD */}
//             <div>
//               <label className="text-[16px] lg:text-[22px] font-semibold mb-[20px]">
//                 Password
//               </label>

//               <div className="mt-2 flex items-center bg-[#DFDFDF] rounded-lg px-[4px] py-[15px]">
//                 <input
//                   ref={passwordRef}
//                   type="text"
//                   placeholder="********"
//                   value={form.password}
//                   onChange={(e) =>
//                     setForm((p) => ({ ...p, password: e.target.value }))
//                   }
//                   className={inputClass}
//                 />

//                 <button
//                   onClick={() => passwordRef.current?.focus()}
//                   className="px-3"
//                 >
//                   <img src={blackIconedit} className="w-4 h-4 opacity-70" />
//                 </button>
//               </div>
//             </div>

//             {/* CONFIRM PASSWORD */}
//             <div>
//               <label className="text-[16px] lg:text-[22px] font-semibold mb-[20px]">
//                 Confirm password
//               </label>

//               <div className="mt-2 flex items-center bg-[#DFDFDF] rounded-lg px-[4px] py-[15px]">
//                 <input
//                   ref={confirmRef}
//                   type="text"
//                   placeholder="********"
//                   value={form.confirmPassword}
//                   onChange={(e) =>
//                     setForm((p) => ({
//                       ...p,
//                       confirmPassword: e.target.value,
//                     }))
//                   }
//                   className={inputClass}
//                 />
//                 <button
//                   onClick={() => confirmRef.current?.focus()}
//                   className="px-3"
//                 >
//                   <img src={blackIconedit} className="w-4 h-4 opacity-70" />
//                 </button>
//               </div>
//             </div>
//           </div>

//           <p className="text-[15px] text-[#000000]">
//             Leave this empty if you don't want to change your password.
//           </p>

//           {/* UPDATE */}
//           <div className="flex justify-end">
//             <button
//               onClick={handleUpdate}
//               className="bg-[#8967B3] text-white px-4 py-3 rounded-[11px] mt-[40px] mb-[38px] text-[27px] font-semibold"
//             >
//               Update setting
//             </button>
//           </div>

//           <hr className="w-full h-[2px] bg-[#DFDFDF] border-0 my-6" />

//           {/* DELETE */}
//           <div>
//             <h2 className="text-[22px] font-semibold mb-3">Account deletion</h2>
//             <p className="text-[18px] mb-4">
//               Please note that your account will be available for recovery for
//               one month after deletion. After that, it will be permanently
//               deleted and cannot be recovered.
//             </p>

//             <label className="text-[16px] lg:text-[22px] font-semibold mb-[20px]">
//               Deletion reason <span className="text-[#FF2626]">*</span>
//             </label>

//             <textarea
//               maxLength={128}
//               value={form.deleteReason}
//               onChange={(e) =>
//                 setForm((p) => ({ ...p, deleteReason: e.target.value }))
//               }
//               placeholder="Why are you deleting your account..."
//               className="w-full min-h-[200px] bg-[#DFDFDF] rounded-lg p-4 text-[16px] lg:text-[23px] outline-none border-none shadow-none focus:ring-0 resize-none mt-2 mb-2"
//             />

//             <p>
//               Giving us accurate reason for your deletion will help us make
//               Sheqlee better. We hope to see you back soon. Thank you.
//             </p>

//             <div className="flex justify-end mt-6">
//               <button
//                 onClick={handleDelete}
//                 className="bg-red-500 text-white px-4 py-3 rounded-[11px] text-[27px] font-semibold"
//               >
//                 Delete account
//               </button>
//             </div>
//           </div>

//           <hr className="w-full h-[2px] bg-[#DFDFDF] border-0 my-6" />

//           <p className="text-[19px] text-[#000000]">
//             <span className="text-[#FF2626] text-[23px]">*</span> fields are
//             required.
//           </p>
//         </div>
//       </section>
//     </>
//   );
// }

import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../../components/ui/Breadcrumb";

import settingsIcon from "../../assets/icons/settingsIcon.svg";
import blackIconedit from "../../assets/icons/blackIconedit.svg";
import api from "../../api/axios";

/* ================= FEEDBACK MODAL ================= */
function FeedbackModal({ type, message, onClose }) {
  if (!message) return null;

  const isError = type === "error";

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-xl text-center">
        <h3
          className={`text-2xl font-semibold mb-4 ${
            isError ? "text-red-600" : "text-green-600"
          }`}
        >
          {isError ? "Error" : "Success"}
        </h3>
        <p className="text-gray-700 mb-6">{message}</p>
        <button
          onClick={onClose}
          className={`px-6 py-2 rounded-lg text-white font-semibold ${
            isError ? "bg-red-500" : "bg-green-500"
          }`}
        >
          OK
        </button>
      </div>
    </div>
  );
}
/* ================================================== */

export default function AccountSettingClient() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);

  const [submittingUpdate, setSubmittingUpdate] = useState(false);
  const [submittingDelete, setSubmittingDelete] = useState(false);

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmRef = useRef(null);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    deleteReason: "",
  });

  const errorText = "mt-2 text-sm text-red-600";

  /* ---------------- FETCH LOGGED USER ---------------- */
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userRaw = localStorage.getItem("user");
        if (!userRaw) throw new Error("No session found");

        const user = JSON.parse(userRaw);
        const res = await api.get(`/users/${user._id}`);

        setForm((p) => ({
          ...p,
          fullName: res.data.data.user.fullName || "",
          email: res.data.data.user.email || "",
        }));

        setUserId(user._id);
      } catch (err) {
        setErrors({ global: "Failed to load user account" });
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return <div className="text-center py-20">Loading account...</div>;
  }

  /* ---------------- VALIDATION ---------------- */
  const validateUpdate = () => {
    const newErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";

    if (form.password) {
      if (form.password.length < 6)
        newErrors.password = "Password must be at least 6 characters";
      if (form.password !== form.confirmPassword)
        newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  /* ---------------- UPDATE ---------------- */
  const handleUpdate = async () => {
    setErrors({});
    setSuccess("");

    const validationErrors = validateUpdate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    try {
      setSubmittingUpdate(true);

      await api.patch(`/users/${userId}`, {
        fullName: form.fullName,
        email: form.email,
        ...(form.password ? { password: form.password } : {}),
      });

      setSuccess("Account updated successfully");
      setForm((p) => ({ ...p, password: "", confirmPassword: "" }));
    } catch (err) {
      setErrors({
        global: err.response?.data?.message || "Failed to update account",
      });
    } finally {
      setSubmittingUpdate(false);
    }
  };

  /* ---------------- DELETE ---------------- */
  const handleDelete = async () => {
    setErrors({});
    setSuccess("");

    if (!form.deleteReason.trim()) {
      setErrors({ deleteReason: "Deletion reason is required" });
      return;
    }

    try {
      setSubmittingDelete(true);

      await api.delete(`/users/${userId}`, {
        data: { reason: form.deleteReason },
      });

      localStorage.removeItem("user");
      localStorage.removeItem("token");

      navigate("/login");
    } catch (err) {
      setErrors({
        global: err.response?.data?.message || "Failed to delete account",
      });
    } finally {
      setSubmittingDelete(false);
    }
  };

  const inputClass =
    "flex-1 px-3 bg-[#DFDFDF] outline-none border-none ring-0 text-[16px] lg:text-[23px]";

  return (
    <>
      {/* MODALS */}
      <FeedbackModal
        type="error"
        message={errors.global}
        onClose={() => setErrors({})}
      />
      <FeedbackModal
        type="success"
        message={success}
        onClose={() => setSuccess("")}
      />

      <Breadcrumb
        items={[{ label: "Sheqlee", to: "/" }, { label: "Account Setting" }]}
      />

      <section className="px-4 sm:px-6 py-12 max-w-[1000px] mx-auto">
        {/* HEADER */}
        <div className="text-center mb-12">
          <img src={settingsIcon} className="w-14 h-14 mx-auto mb-4" />
          <h1 className="text-[#000000] text-[23px] lg:text-[45px] font-semibold mb-4">
            Account Setting
          </h1>
          <p className="text-[#000000] text-[23px] lg:text-[27px] leading-8 max-w-[600px] mx-auto">
            Edit your account settings to make your account more secure.
          </p>
        </div>

        <div className="space-y-10">
          {/* NAME + EMAIL */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* FULL NAME */}
            <div>
              <label className="text-[16px] lg:text-[22px] font-semibold mb-[20px]">
                Full name <span className="text-[#FF2626] text-[23px]">*</span>
              </label>
              <div className="mt-2 flex items-center bg-[#DFDFDF] rounded-lg px-[4px] py-[15px]">
                <input
                  ref={nameRef}
                  value={form.fullName}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, fullName: e.target.value }))
                  }
                  className={inputClass}
                />
                <button
                  onClick={() => nameRef.current?.focus()}
                  className="px-3"
                >
                  <img src={blackIconedit} className="w-4 h-4 opacity-70" />
                </button>
              </div>
              {errors.fullName && (
                <p className={errorText}>{errors.fullName}</p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-[16px] lg:text-[22px] font-semibold mb-[20px]">
                Email <span className="text-[#FF2626] text-[23px]">*</span>
              </label>
              <div className="mt-2 flex items-center bg-[#DFDFDF] rounded-lg px-[4px] py-[15px]">
                <input
                  ref={emailRef}
                  value={form.email}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, email: e.target.value }))
                  }
                  className={inputClass}
                />
                <button
                  onClick={() => emailRef.current?.focus()}
                  className="px-3"
                >
                  <img src={blackIconedit} className="w-4 h-4 opacity-70" />
                </button>
              </div>
              {errors.email && <p className={errorText}>{errors.email}</p>}
            </div>
          </div>

          {/* PASSWORDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-[16px] lg:text-[22px] font-semibold mb-[20px]">
                Password
              </label>
              <div className="mt-2 flex items-center bg-[#DFDFDF] rounded-lg px-[4px] py-[15px]">
                <input
                  ref={passwordRef}
                  type="password"
                  value={form.password}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, password: e.target.value }))
                  }
                  className={inputClass}
                />
                <button
                  onClick={() => passwordRef.current?.focus()}
                  className="px-3"
                >
                  <img src={blackIconedit} className="w-4 h-4 opacity-70" />
                </button>
              </div>
              {errors.password && (
                <p className={errorText}>{errors.password}</p>
              )}
            </div>

            <div>
              <label className="text-[16px] lg:text-[22px] font-semibold mb-[20px]">
                Confirm password
              </label>
              <div className="mt-2 flex items-center bg-[#DFDFDF] rounded-lg px-[4px] py-[15px]">
                <input
                  ref={confirmRef}
                  type="password"
                  value={form.confirmPassword}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, confirmPassword: e.target.value }))
                  }
                  className={inputClass}
                />
                <button
                  onClick={() => confirmRef.current?.focus()}
                  className="px-3"
                >
                  <img src={blackIconedit} className="w-4 h-4 opacity-70" />
                </button>
              </div>
              {errors.confirmPassword && (
                <p className={errorText}>{errors.confirmPassword}</p>
              )}
            </div>
          </div>

          {/* UPDATE */}
          <div className="flex justify-end">
            <button
              onClick={handleUpdate}
              disabled={submittingUpdate}
              className="bg-[#8967B3] text-white px-4 py-3 rounded-[11px] mt-[40px] mb-[38px] text-[27px] font-semibold"
            >
              {submittingUpdate ? "Updating..." : "Update setting"}
            </button>
          </div>

          <hr className="w-full h-[2px] bg-[#DFDFDF] border-0 my-6" />

          {/* DELETE */}
          <div>
            <h2 className="text-[22px] font-semibold mb-3">Account deletion</h2>
            <p className="text-[18px] mb-4">
              Please note that your account will be available for recovery for
              one month after deletion. After that, it will be permanently
              deleted and cannot be recovered.
            </p>

            <label className="text-[16px] lg:text-[22px] font-semibold mb-[20px]">
              Deletion reason <span className="text-[#FF2626]">*</span>
            </label>
            <textarea
              maxLength={128}
              value={form.deleteReason}
              onChange={(e) =>
                setForm((p) => ({ ...p, deleteReason: e.target.value }))
              }
              placeholder="Why are you deleting your account..."
              className="w-full min-h-[200px] bg-[#DFDFDF] rounded-lg p-4 text-[16px] lg:text-[23px] outline-none border-none shadow-none focus:ring-0 resize-none mt-2 mb-2"
            />
            {errors.deleteReason && (
              <p className={errorText}>{errors.deleteReason}</p>
            )}

            <div className="flex justify-end mt-6">
              <button
                onClick={handleDelete}
                disabled={submittingDelete}
                className="bg-red-500 text-white px-4 py-3 rounded-[11px] text-[27px] font-semibold"
              >
                {submittingDelete ? "Deleting..." : "Delete account"}
              </button>
            </div>
          </div>

          <hr className="w-full h-[2px] bg-[#DFDFDF] border-0 my-6" />

          <p className="text-[19px] text-[#000000]">
            <span className="text-[#FF2626] text-[23px]">*</span> fields are
            required.
          </p>
        </div>
      </section>
    </>
  );
}
