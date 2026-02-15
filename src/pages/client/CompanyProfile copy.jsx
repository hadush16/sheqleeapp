import { useRef, useState } from "react";
import Breadcrumb from "../../components/ui/Breadcrumb";
import RichTextEditor from "../../components/ui/RichTextEditor";

import buildingIcon from "../../assets/images/company.png";
import blackIconedit from "../../assets/icons/blackIconedit.svg";

import { CURRENT_COMPANY } from "../../utils/companies.data";

export default function CompanyProfile() {
  // TEMP: assume first company = logged-in company

  const nameRef = useRef(null);
  const domainRef = useRef(null);
  const locationRef = useRef(null);

  const company = CURRENT_COMPANY;

  const fileInputRef = useRef(null);

  const [form, setForm] = useState({
    name: company.name,
    domain: company.website.replace("https://", ""),
    description: company.description || "",
    size: company.size,
    location: company.location,
    logo: company.icon,
  });

  /* ---------------- HANDLERS ---------------- */

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleLogoClick = () => {
    fileInputRef.current.click();
  };

  const handleLogoUpload = (e) => {
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
        logo: URL.createObjectURL(file),
      }));
    };

    img.src = URL.createObjectURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("UPDATED COMPANY PROFILE:", form);
    alert("Profile updated (frontend only)");
  };

  return (
    <>
      {/* BREADCRUMB */}
      <Breadcrumb
        items={[{ label: "Sheqlee", to: "/" }, { label: "Company profile" }]}
      />

      <section className="px-4 sm:px-6 py-12 max-w-[1000px] mx-auto">
        {/* HEADER */}
        <div className="text-center mb-12">
          <img
            src={buildingIcon}
            alt="Company"
            className="w-14 h-14 mx-auto mb-4"
          />

          <h1 className="text-[#000000] text-[23px] lg:text-[45px] font-semibold mb-4">
            Company Profile
          </h1>

          <p className="text-[#000000] text-[23px] lg:text-[27px] leading-8 max-w-[600px] text-center mx-auto">
            Provide accurate information about your company to make yourself
            discoverable.
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit}>
          {/* NAME + DOMAIN + AVATAR */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_140px] gap-6 items-start">
            {/* COMPANY NAME */}
            <div>
              <label className="text-[16px] lg:text-[22px] font-semibold mb-[20px]">
                Company name{" "}
                <span className="text-[#FF2626] text-[23px] text-bold ">*</span>
              </label>
              <div className="mt-2 flex items-center bg-[#DFDFDF] rounded-lg  px-[4px] py-[15px] ">
                <input
                  ref={nameRef}
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="flex-1 px-3 bg-transparent outline-none [16px] lg:text-[23px]"
                />

                <button
                  type="button"
                  onClick={() => nameRef.current?.focus()}
                  className="px-3"
                >
                  <img
                    src={blackIconedit}
                    className="w-3 h-3 lg:w-4 lg:h-4 opacity-70"
                  />
                </button>
              </div>
            </div>

            {/* DOMAIN */}
            <div>
              <label className="text-[16px] lg:text-[22px] font-semibold mb-[20px]">
                Domain{" "}
                <span className="text-[#FF2626] text-[23px] text-bold">*</span>
              </label>
              <div className="mt-2 flex items-center bg-[#DFDFDF] rounded-lg px-[4px] py-[15px]">
                <span className="px-3 flex items-center text-[20px] text-[#000000] shrink-0">
                  https://
                </span>

                <input
                  ref={domainRef}
                  name="domain"
                  value={form.domain}
                  onChange={handleChange}
                  className="flex-1 bg-transparent outline-none text-[16px] lg:text-[21px] min-w-0"
                />

                <button
                  type="button"
                  onClick={() => domainRef.current?.focus()}
                  className="px-3 shrink-0"
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
              {/* LOGO */}
              <div className="w-[106px] h-[106px] rounded-full bg-gray-200 overflow-hidden flex items-center justify-center mb-3">
                <img
                  src={form.logo}
                  alt="Company logo"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* UPLOAD BUTTON */}
              <button
                type="button"
                onClick={handleLogoClick}
                className="bg-[#8967B3] text-[#FFFFFF] text-[17px] px-[27px] py-[6px] rounded-md"
              >
                Upload
              </button>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                hidden
                onChange={handleLogoUpload}
              />
            </div>
          </div>
          {/* DESCRIPTION HEADER ROW */}
          <div className="flex items-center justify-between mt-6 lg:mt-0">
            <label className="text-[16px] lg:text-[22px] font-semibold">
              Description
            </label>

            <p className="hidden lg:block text-[15px] text-[#000000]">
              2MB Max | 1:1 Ratio
            </p>
          </div>

          {/* DESCRIPTION */}
          <RichTextEditor
            placeholder="A brief description about your company..."
            value={form.description}
            maxLength={256}
            showCounter
            onChange={(val) => setForm((p) => ({ ...p, description: val }))}
          />

          {/* SIZE + LOCATION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-[38px]">
            {/* SIZE */}
            <div>
              <label className="text-[16px] lg:text-[22px] font-semibold mb-[20px]">
                Company size
              </label>

              <div className="mt-2 flex items-center bg-[#DFDFDF] rounded-lg overflow-hidden px-[23px] py-[18px]">
                <select
                  name="size"
                  value={form.size}
                  onChange={handleChange}
                  className="w-full bg-transparent outline-none text-[16px] sm:text-[23px] text-[#444444]"
                >
                  <option value="">Less than 10 people</option>
                  <option>10</option>
                  <option>20</option>
                  <option>50</option>
                  <option>100</option>
                  <option>200</option>
                  <option>500</option>
                  <option>1000</option>
                </select>
              </div>
            </div>

            {/* LOCATION */}
            <div>
              <label className="text-[16px] lg:text-[22px] font-semibold mb-[20px]">
                HQ location
              </label>

              <div className="mt-2 flex items-center bg-[#DFDFDF] rounded-lg px-[4px] py-[15px]">
                <input
                  ref={locationRef}
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  className="flex-1 bg-transparent outline-none text-[16px] sm:text-[23px] text-[#444444]"
                />

                <button
                  type="button"
                  onClick={() => locationRef.current?.focus()}
                  className="px-3"
                >
                  <img
                    src={blackIconedit}
                    className="w-3 h-3 lg:w-4 lg:h-4 opacity-70"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* ACTION */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#8967B3] text-white px-4 py-3 rounded-[11px] mt-[75px] mb-[38px] text-[27px] font-semibold"
            >
              Update profile
            </button>
          </div>

          <hr className="w-full h-[2px] bg-[#DFDFDF] border-0 my-6" />

          <p className="text-[19px] text-[#000000] mt-3">
            <span className="text-[#FF2626] text-[23px] text-bold">*</span>{" "}
            fields are required.
          </p>
        </form>
      </section>
    </>
  );
}
