import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Breadcrumb from "../../components/ui/Breadcrumb";

import template from "../../assets/icons/template.svg";
import verifyIcon from "../../assets/icons/verifyIcon.svg";

// ✅ IMPORT REAL RICH TEXT EDITOR
import RichTextEditor from "../ui/RichTextEditor";

export default function PostJobForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    category: "",
    jobType: "",
    skillLevel: "",
    salaryCurrency: "$",
    salaryAmount: "",
    salaryUnit: "hour",
    shortDescription: "",
    requirements: "",
    description: "",
    howToApply: "",
    skills: "",
    applyLink: "",
    excludeCompany: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((p) => ({
      ...p,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const isEmptyRichText = (html) => {
    if (!html) return true;
    const text = html.replace(/<[^>]*>/g, "").trim();
    return text.length === 0;
  };

  const isEmptyValue = (value) =>
    value === null ||
    value === undefined ||
    (typeof value === "string" && value.trim() === "");

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (
    //   isEmptyValue(form.title) ||
    //   isEmptyValue(form.category) ||
    //   isEmptyValue(form.jobType) ||
    //   isEmptyValue(form.skillLevel) ||
    //   isEmptyValue(form.salaryAmount) ||
    //   isEmptyValue(form.shortDescription) ||
    //   isEmptyRichText(form.requirements) ||
    //   isEmptyValue(form.skills) ||
    //   isEmptyValue(form.applyLink)
    // ) {
    //   alert("Please fill all required fields.");
    //   return;
    // }

    // ✅ proceed to review page
    navigate("/review-job", { state: form });
  };

  return (
    <>
      {/* BREADCRUMB */}
      <Breadcrumb
        items={[{ label: "Sheqlee", to: "/" }, { label: "Vacancy" }]}
      />

      <section className="px-4 sm:px-6 py-10 max-w-[900px] mx-auto">
        {/* INFO BOX */}
        <div className="flex items-stretch bg-[#F3F3F3] rounded-lg mb-10 overflow-hidden">
          {/* ICON */}
          <div className="bg-black w-[90px] flex items-center justify-center">
            <img src={template} className="w-6 h-6" />
          </div>

          {/* TEXT */}
          <div className="p-[35px]">
            <p className="text-sm sm:text-[19px]">
              To speed up the process of posting a job, try using{" "}
              <Link
                to="#"
                className="font-semibold border-b-4 border-[#8967B3]"
              >
                job templates
              </Link>
              .
            </p>
          </div>
        </div>

        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-[45px] font-semibold font-kantumruy text-center">
            Add a vacancy <span className="font-normal">[1/2]</span>
          </h1>
          <p className="text-[26px] text-[#000000] mt-4 text-center">
            Next and final step is preview and confirmation.
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* JOB TITLE */}
          <FieldLabel label="Job title" required />

          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Senior mobile app developer using Flutter"
            className="
    w-full
    h-[54px]
    bg-[#E6E6E6]
    rounded-lg
    px-5
    text-sm
    text-gray-700
    placeholder:text-gray-500
    outline-none
  "
          />

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
            <Select
              label="Category"
              name="category"
              value={form.category}
              onChange={handleChange}
              required
            />

            <Select
              label="Job type"
              name="jobType"
              value={form.jobType}
              onChange={handleChange}
              required
            />

            <Select
              label="Skill level"
              name="skillLevel"
              value={form.skillLevel}
              onChange={handleChange}
              required
            />

            {/* SALARY */}
            <div>
              <FieldLabel label="Salary" />

              <div className="flex h-[54px] overflow-hidden rounded-lg mt-2">
                {/* CURRENCY */}
                <select
                  name="salaryCurrency"
                  value={form.salaryCurrency}
                  onChange={handleChange}
                  className="
        bg-black
        text-white
        px-4
        text-sm
        outline-none
      "
                >
                  <option>$</option>
                </select>

                {/* AMOUNT */}
                <input
                  name="salaryAmount"
                  value={form.salaryAmount}
                  onChange={handleChange}
                  placeholder="Enter salary..."
                  className="
        flex-1
        bg-[#E6E6E6]
        px-4
        text-sm
        text-gray-700
        placeholder:text-gray-500
        outline-none
      "
                />

                {/* UNIT */}
                <select
                  name="salaryUnit"
                  value={form.salaryUnit}
                  onChange={handleChange}
                  className="
        bg-black
        text-white
        px-4
        text-sm
        outline-none
      "
                >
                  <option value="hour">/hour</option>
                  <option value="month">/month</option>
                </select>
              </div>
            </div>
          </div>

          {/* SHORT DESCRIPTION */}
          <div>
            <FieldLabel label="Short description" required />

            <div className="relative">
              <textarea
                name="shortDescription"
                value={form.shortDescription}
                onChange={handleChange}
                maxLength={128}
                placeholder="We are looking for a Flutter developer with 2 years experience."
                className="
        w-full
        h-[120px]
        bg-[#E6E6E6]
        rounded-lg
        px-4
        py-3
        text-sm
        text-gray-700
        placeholder:text-gray-500
        resize-none
        outline-none
        focus:ring-0
      "
              />

              {/* CHARACTER COUNT */}
              <span className="absolute bottom-2 right-3 text-xs text-gray-500">
                {form.shortDescription.length} / 128
              </span>
            </div>

            {/* HELP TEXT */}
            <p className="mt-2 text-xs text-gray-600">
              Who are you looking for? Give us a one-liner description of your
              ideal candidate.
            </p>
          </div>

          {/* REAL RICH TEXT EDITORS */}
          <RichTextEditor
            label="Requirements"
            required
            placeholder="Requirements..."
            value={form.requirements}
            onChange={(val) => setForm((p) => ({ ...p, requirements: val }))}
          />

          <RichTextEditor
            label="Description"
            placeholder="Description..."
            value={form.description}
            onChange={(val) => setForm((p) => ({ ...p, description: val }))}
          />

          <RichTextEditor
            label="How to apply"
            placeholder="How can professionals apply..."
            value={form.howToApply}
            onChange={(val) => setForm((p) => ({ ...p, howToApply: val }))}
          />

          {/* SKILLS */}
          <div className="flex flex-col gap-2">
            <FieldLabel label="Skills (technology names)" required />
            <select
              name="skills"
              value={form.skills}
              onChange={handleChange}
              className="
      w-full
      h-[54px]
      bg-[#E6E6E6]
      rounded-lg
      px-4
      text-sm
      text-gray-600
      outline-none
      cursor-pointer
    "
            >
              <option value="">NodeJS, AWS, PostgreSQL</option>
            </select>
          </div>

          {/* APPLY LINK */}
          <div className="flex flex-col gap-2">
            <FieldLabel label="Apply link" required />
            <input
              name="applyLink"
              value={form.applyLink}
              onChange={handleChange}
              placeholder="URL or email"
              className="
      w-full
      h-[54px]
      bg-[#E6E6E6]
      rounded-lg
      px-4
      text-sm
      outline-none
    "
            />
          </div>

          {/* CHECKBOX */}
          <label className="flex items-center gap-3 mt-2 text-sm text-gray-700">
            <input
              type="checkbox"
              name="excludeCompany"
              checked={form.excludeCompany}
              onChange={handleChange}
              className="
      w-5
      h-5
      rounded
      border-gray-300
      accent-[#8967B3]
      cursor-pointer
    "
            />
            I want my company name excluded from this vacancy.
          </label>

          {/* ACTION BUTTONS */}
          <div className="flex justify-end gap-6 mt-8">
            {/* SAVE DRAFT */}
            <button
              type="button"
              className="
      h-[54px]
      px-10
      rounded-lg
      border-2
      border-[#8967B3]
      text-[#000000]
      font-medium
      text-base
      hover:bg-[#F5F0FA]
      transition
    "
            >
              Save draft
            </button>

            {/* NEXT */}
            <button
              type="submit"
              className="
      h-[54px]
      px-10
      rounded-lg
      bg-[#8967B3]
      text-white
      font-medium
      text-base
      hover:bg-[#7A5AA3]
      transition
    "
            >
              Next <span className="opacity-70">[preview & confirm]</span>
            </button>
          </div>

          {/* DIVIDER */}
          <hr className="my-8 border-gray-300" />

          {/* REQUIRED NOTE */}
          <p className="text-sm text-gray-600">
            <span className="text-red-500">*</span> fields are required.
          </p>
        </form>
      </section>
    </>
  );
}

/* ----------------- HELPERS ----------------- */

function FieldLabel({ label, required }) {
  return (
    <label className="flex items-center gap-1 text-[23px] font-medium">
      {label}
      {required && <img src={verifyIcon} className="w-3 h-3" />}
    </label>
  );
}

function Select({ label, required, ...props }) {
  return (
    <div className="flex flex-col gap-2">
      <FieldLabel label={label} required={required} />

      <select
        {...props}
        className="
        select
          w-full
          h-[54px]
          bg-[#E6E6E6]
          rounded-lg
          px-4
          text-sm
          text-gray-600
          outline-none
          
          cursor-pointer
        "
      >
        <option value="">Select {label.toLowerCase()}...</option>
      </select>
    </div>
  );
}
