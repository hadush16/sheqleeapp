import { useRef, useState, Fragment } from "react";
import Breadcrumb from "../../components/ui/Breadcrumb";
import RichTextEditor from "../../components/ui/RichTextEditor";
import { useNavigate } from "react-router-dom";

import profileIcon from "../../assets/icons/edit_profile_freelancer.svg";
import blackIconedit from "../../assets/icons/blackIconedit.svg";
import deleteIcon from "../../assets/icons/deleteIcon.svg";

import { useAccount } from "../../context/connectorSignup_Acoount";
import AddSkillPromptModal from "../Auth/AddSkillPromptModal";
import AddLinkPromptModal from "../Auth/AddLinkPromptModal";

export default function FreelancerProfile() {
  const [showAddLinkModal, setShowAddLinkModal] = useState(false);

  const [showAddSkillModal, setShowAddSkillModal] = useState(false);
  const [editing, setEditing] = useState({
    fullName: false,
    title: false,
  });

  const { account } = useAccount(); // from ProfessionalSignup

  const imageInputRef = useRef(null);
  const cvInputRef = useRef(null);
  const navigate = useNavigate();
  const [cvError, setCvError] = useState("");

  /* ---------------- STATE ---------------- */

  const [form, setForm] = useState(() => {
    const saved = localStorage.getItem("freelancerProfile");
    return saved
      ? JSON.parse(saved)
      : {
          fullName: account?.fullName || "",
          title: account?.category || "Full-Stack Developer",
          bio: "",
          avatar: null,
          skills: [
            { name: "Java", level: 2 },
            { name: "Flutter", level: 2 },
            { name: "Golang", level: 4 },
          ],
          profiles: [
            { name: "GitHub", url: "https://github.com/mygithub" },
            { name: "LinkedIn", url: "https://linkedin.com/mylinkedin" },
          ],
          cv: null,
        };
  });

  /* ---------------- HANDLERS ---------------- */

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleAddSkillFromModal = (skill) => {
    setForm((p) => ({
      ...p,
      skills: [...p.skills, skill],
    }));
  };

  const handleAddLinkFromModal = (link) => {
    setForm((p) => ({
      ...p,
      profiles: [...p.profiles, link],
    }));
  };

  /* ---------- PROFILE IMAGE ---------- */

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      alert("Image must be less than 2MB");
      return;
    }

    const img = new Image();
    img.onload = () => {
      if (img.width !== img.height) {
        alert("Image must be 1:1 ratio");
        return;
      }

      setForm((p) => ({
        ...p,
        avatar: URL.createObjectURL(file),
      }));
    };

    img.src = URL.createObjectURL(file);
  };

  const handleCvUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
      setCvError("Only PDF files are allowed.");
      e.target.value = ""; // reset input
      return;
    }

    setCvError("");
    setForm((p) => ({ ...p, cv: file }));
  };

  /* ---------- SKILLS ---------- */

  const updateSkillLevel = (index, level) => {
    setForm((p) => {
      const skills = [...p.skills];
      skills[index].level = level;
      return { ...p, skills };
    });
  };

  const removeSkill = (index, type = "skills") => {
    setForm((p) => ({
      ...p,
      [type]: p[type].filter((_, i) => i !== index),
    }));
  };

  const addSkill = () => {
    setForm((p) => ({
      ...p,
      skills: [...p.skills, { name: "New Skill", level: 1 }],
    }));
  };

  /* ---------- PROFILES ---------- */

  const removeProfile = (index) => {
    setForm((p) => ({
      ...p,
      profiles: p.profiles.filter((_, i) => i !== index),
    }));
  };

  const addProfile = () => {
    setForm((p) => ({
      ...p,
      profiles: [...p.profiles, { name: "Website", url: "" }],
    }));
  };

  /* ---------- CV ---------- *

  /* ---------- SUBMIT ---------- */

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      email: account?.email || "",
    };

    localStorage.setItem("freelancerProfile", JSON.stringify(payload));

    navigate("/freelancer/profile-review");
  };

  /* ---------------- UI ---------------- */

  return (
    <>
      <Breadcrumb
        items={[{ label: "Sheqlee", to: "/" }, { label: "Profile" }]}
      />

      <section className="px-4 sm:px-6 py-12 max-w-[1100px] mx-auto">
        {/* HEADER */}
        <div className="text-center mb-12">
          <img
            src={profileIcon}
            className="w-14 h-14 lg:w-20 lg:h-20 mx-auto my-5"
          />
          <h1 className="text-[#000000] text-[23px] lg:text-[45px] font-semibold mb-3">
            Edit Profile
          </h1>
          <p className="text-[#000000] text-[23px] lg:text-[27px] leading-8 max-w-[600px] text-center mx-auto">
            The more complete your profile, the easier for companies to select
            you for jobs.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* NAME + TITLE + AVATAR */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_140px] gap-6 items-start">
            {/* FULL NAME */}
            {/* FULL NAME */}
            <div>
              <label className="text-[16px] lg:text-[22px] font-semibold mb-[20px]">
                Full name{" "}
                <span className="text-[#FF2626] text-[23px] text-bold">*</span>
              </label>

              <div className="mt-2 flex items-center bg-[#DFDFDF] rounded-lg px-[4px] py-[15px]">
                <input
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  className="flex-1 px-3 bg-transparent outline-none text-[16px] lg:text-[23px]"
                />

                <button
                  type="button"
                  onClick={() =>
                    document.querySelector('input[name="fullName"]')?.focus()
                  }
                  className="px-3"
                >
                  <img
                    src={blackIconedit}
                    className="w-3 h-3 lg:w-4 lg:h-4 opacity-70"
                  />
                </button>
              </div>
            </div>

            {/* TITLE */}

            <div>
              <label className="text-[16px] lg:text-[22px] font-semibold mb-[20px]">
                Title{" "}
                <span className="text-[#FF2626] text-[23px] text-bold">*</span>
              </label>

              <div className="mt-2 flex items-center bg-[#DFDFDF] rounded-lg px-[4px] py-[15px]">
                <input
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  className="flex-1 px-3 bg-transparent outline-none text-[16px] lg:text-[23px]"
                />

                <button
                  type="button"
                  onClick={() =>
                    document.querySelector('input[name="title"]')?.focus()
                  }
                  className="px-3"
                >
                  <img
                    src={blackIconedit}
                    className="w-3 h-3 lg:w-4 lg:h-4 opacity-70"
                  />
                </button>
              </div>
            </div>

            {/* AVATAR */}
            <div className="hidden md:flex flex-col items-center self-start mt-[26px]">
              <div className="w-[106px] h-[106px] rounded-full bg-gray-200 overflow-hidden flex items-center justify-center mb-3">
                {form.avatar && (
                  <img
                    src={form.avatar}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              <button
                type="button"
                onClick={() => imageInputRef.current.click()}
                className="bg-[#8967B3] text-[#FFFFFF] text-[17px] px-[27px] py-[6px] rounded-md"
              >
                Upload
              </button>

              <input
                ref={imageInputRef}
                type="file"
                accept="image/*"
                hidden
                onChange={handleImageUpload}
              />
            </div>
          </div>

          {/* BIO HEADER ROW */}
          <div className="flex items-center justify-between mt-6 lg:mt-0">
            <label className="text-[16px] lg:text-[22px] font-semibold mb-2">
              Introduce yourself
            </label>

            <p className="hidden lg:block text-[15px] text-[#000000]">
              2MB Max | 1:1 Ratio
            </p>
          </div>

          {/* BIO */}
          <div className="mb-10">
            <RichTextEditor
              placeholder="Say something appealing about yourself..."
              value={form.bio}
              maxLength={256}
              minHeight={180}
              showCounter
              onChange={(val) => setForm((p) => ({ ...p, bio: val }))}
            />
          </div>

          {/* SKILLS */}
          <div>
            <h3 className="font-semibold mb-1">Your skills</h3>
            <p className="text-sm text-gray-500 mb-4">
              Adding your skills will help us make job suggestions more
              accurately.
            </p>

            <table className="w-full border-collapse rounded-lg overflow-hidden">
              {/* HEADER */}
              <thead className="bg-[#3F3F3F] text-white text-sm">
                <tr>
                  <th className="text-left pl-8 pr-5 py-3 font-medium">
                    Skill
                  </th>

                  <th className="px-5 py-3 font-medium w-[260px]">Level</th>

                  <th className="text-right px-5 py-3 font-medium w-[80px]">
                    Action
                  </th>
                </tr>
              </thead>

              {/* BODY */}
              <tbody>
                {form.skills.map((s, i) => {
                  const isLastRow = i === form.skills.length - 1;

                  return (
                    <Fragment key={i}>
                      {/* DATA ROW */}
                      <tr className="bg-[#E5E5E5]">
                        {/* SKILL */}
                        <td className="pl-8 pr-5 pt-4 text-sm font-medium text-left">
                          {s.name}
                        </td>

                        {/* LEVEL */}
                        <td className="px-5 pt-4">
                          <div className="flex justify-end gap-2">
                            {[1, 2, 3, 4, 5].map((n) => (
                              <button
                                key={n}
                                type="button"
                                onClick={() => updateSkillLevel(i, n)}
                                className={`
                    w-6 h-6 rounded-full text-xs font-semibold
                    flex items-center justify-center
                    ${
                      n <= s.level
                        ? "bg-black text-white"
                        : "bg-[#BDBDBD] text-black"
                    }
                  `}
                              >
                                {n}
                              </button>
                            ))}
                          </div>
                        </td>

                        {/* ACTION */}
                        <td className="px-5 pt-4 text-right">
                          <button
                            type="button"
                            onClick={() => removeSkill(i)}
                            className="w-8 h-8 rounded-md bg-[#8967B3] flex items-center justify-center ml-auto mb-1"
                          >
                            <img
                              src={deleteIcon}
                              className="w-4 h-4"
                              alt="delete"
                            />
                          </button>
                        </td>
                      </tr>

                      {/* DIVIDER ROW */}
                      {!isLastRow && (
                        <tr>
                          <td colSpan={3}>
                            <div className="ml-8 h-[2px] bg-[#CFCFCF]" />
                          </td>
                        </tr>
                      )}
                    </Fragment>
                  );
                })}
              </tbody>
            </table>

            <div className="flex justify-end mt-3">
              <button
                type="button"
                onClick={() => setShowAddSkillModal(true)}
                className="bg-[#8967B3] text-white text-sm md:text-[19px] px-4 py-2 md:px-5 md:py-4 rounded-md font-semibold"
              >
                Add a skill
              </button>
            </div>
          </div>

          {/* PROFILES */}
          <div>
            <h3 className="font-semibold mb-1">Your profiles</h3>
            <p className="text-sm text-gray-500 mb-4">
              Profiles could be GitHub, LinkedIn, etc.
            </p>

            <table className="w-full bg-[#E5E5E5] rounded-lg overflow-hidden">
              <thead className="bg-[#3F3F3F] text-white text-sm">
                <tr>
                  <th className="pl-8 text-left px-4 py-2">Profile name</th>
                  <th className="text-left">URL</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {form.profiles.map((p, i) => {
                  const isLastRow = i === form.profiles.length - 1;

                  return (
                    <Fragment key={i}>
                      {/* DATA ROW */}
                      <tr className="bg-[#E5E5E5]">
                        {/* NAME */}
                        <td className="pl-8 pr-5 pt-4 text-sm font-medium text-left">
                          {p.name}
                        </td>

                        {/* URL */}
                        <td className="px-5 pt-4 text-sm">{p.url}</td>

                        {/* ACTION */}
                        <td className="px-5 pt-4 text-center">
                          <button
                            type="button"
                            onClick={() => removeProfile(i)}
                            className="w-8 h-8 rounded-md bg-[#8967B3] flex items-center justify-center mx-auto mb-1"
                          >
                            <img
                              src={deleteIcon}
                              className="w-4 h-4"
                              alt="delete"
                            />
                          </button>
                        </td>
                      </tr>

                      {/* DIVIDER ROW */}
                      {!isLastRow && (
                        <tr>
                          <td colSpan={3}>
                            <div className="ml-8 h-[2px] bg-[#CFCFCF]" />
                          </td>
                        </tr>
                      )}
                    </Fragment>
                  );
                })}
              </tbody>
            </table>

            <div className="flex justify-end mt-3">
              <button
                type="button"
                onClick={() => setShowAddLinkModal(true)}
                className="bg-[#8967B3] text-white text-sm md:text-[19px] px-4 py-2 md:px-5 md:py-4 rounded-md font-semibold"
              >
                Add a link
              </button>
            </div>
          </div>

          {/* CV */}
          <div>
            {/* Title */}
            <h3 className="font-semibold text-sm md:text-[23px] mb-3 mt-10">
              Your CV <span className="text-red-500">(*.pdf)</span>
            </h3>

            {/* Subtitle */}
            <p className="text-sm text-[#000000] mb-[25px]">
              Adding your CV will help us to know you in details and suggest you
              to companies.
            </p>

            {/* Upload container */}
            <div className="flex items-stretch w-full max-w-[400px] border md:border-2 border-[#8967B3] rounded-md overflow-hidden">
              {/* Left (filename / dots) */}
              <div
                className="relative flex-1 px-6 min-h-[44px] whitespace-nowrap overflow-hidden text-ellipsis"
                title={form.cv ? form.cv.name : "No file uploaded"}
              >
                {form.cv ? (
                  <div className="flex items-center h-full text-sm text-black">
                    {form.cv.name}
                  </div>
                ) : (
                  <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2 text-lg tracking-widest text-black">
                    •••
                  </div>
                )}
              </div>

              {/* Right (button) */}
              <button
                type="button"
                onClick={() => cvInputRef.current.click()}
                className="bg-[#8967B3] text-white px-6 text-sm font-medium whitespace-nowrap"
              >
                Upload CV <span>(.pdf)</span>
              </button>

              {/* Hidden input */}
              <input
                ref={cvInputRef}
                type="file"
                accept="application/pdf"
                hidden
                onChange={handleCvUpload}
              />
            </div>

            {/* PDF error */}
            {cvError && <p className="mt-2 text-sm text-red-600">{cvError}</p>}
          </div>

          {/* ACTION */}
          <div className="flex justify-end mb-4 mt-10">
            <button
              type="submit"
              className="bg-[#8967B3] text-white text-[18px] md:text-[26px] px-4 py-3 md:px-5 md:py-4 rounded-lg font-semibold"
            >
              Update profile
            </button>
          </div>

          <hr className="w-full h-[2px] bg-[#DFDFDF] border-0 my-6" />

          <p className="text-xs text-gray-500">
            <span className="text-red-500">*</span> fields are required.
          </p>
        </form>
      </section>
      <AddSkillPromptModal
        isOpen={showAddSkillModal}
        onClose={() => setShowAddSkillModal(false)}
        onAddSkill={handleAddSkillFromModal}
      />
      <AddLinkPromptModal
        isOpen={showAddLinkModal}
        onClose={() => setShowAddLinkModal(false)}
        onAddLink={handleAddLinkFromModal}
      />
    </>
  );
}
