import Breadcrumb from "../../components/ui/Breadcrumb";
import profileIcon from "../../assets/icons/edit_profile_freelancer.svg";
import { useAccount } from "../../context/connectorSignup_Acoount";

export default function FreelancerProfileReview() {
  const { account } = useAccount();

  const profile = JSON.parse(localStorage.getItem("freelancerProfile") || "{}");

  if (!profile.fullName) return null;

  const handleDownloadCv = () => {
    if (!profile.cv || !(profile.cv instanceof File)) {
      alert("CV file is not available after page reload.");
      return;
    }

    const url = URL.createObjectURL(profile.cv);

    const a = document.createElement("a");
    a.href = url;
    a.download = profile.cv.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(url);
  };

  return (
    <>
      <Breadcrumb
        items={[{ label: "Sheqlee", to: "/" }, { label: "Profile Review" }]}
      />

      <section className="px-4 sm:px-6 py-12 max-w-[900px] mx-auto">
        {/* HEADER */}
        <div className="text-center mb-10">
          <img src={profileIcon} className="w-14 h-14 mx-auto mb-4" />
          <h1 className="text-3xl font-semibold">Freelancer Profile</h1>
        </div>

        {/* NAME / TITLE / AVATAR */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_120px] gap-6 mb-8">
          <div>
            <label className="text-sm font-medium">Full name</label>
            <div className="mt-2 bg-[#E5E5E5] rounded-lg h-[48px] px-3 flex items-center text-sm">
              {profile.fullName}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Title</label>
            <div className="mt-2 bg-[#E5E5E5] rounded-lg h-[48px] px-3 flex items-center text-sm">
              {profile.title}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden">
              {profile.avatar && (
                <img
                  src={profile.avatar}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>
        </div>

        {/* BIO */}
        <div className="mb-8">
          <label className="text-sm font-medium">Bio</label>
          <textarea
            readOnly
            value={profile.bio}
            className="mt-2 w-full min-h-[120px] bg-[#E5E5E5] rounded-lg p-3 text-sm resize-none outline-none"
          />
        </div>

        {/* SKILLS */}
        <div className="mb-8">
          <h3 className="font-semibold mb-3">Skillset</h3>

          <table className="w-full rounded-lg overflow-hidden border-collapse">
            <thead className="bg-[#3F3F3F] text-white text-sm">
              <tr>
                <th className="text-left px-5 py-3">Skill</th>
                <th className="text-right px-5 py-3">Level</th>
              </tr>
            </thead>
            <tbody>
              {profile.skills.map((s, i) => (
                <tr key={i} className="bg-[#E5E5E5] border-b border-[#CFCFCF]">
                  <td className="px-5 py-3 text-sm">{s.name}</td>
                  <td className="px-5 py-3">
                    <div className="flex justify-end gap-2">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <span
                          key={n}
                          className={`w-5 h-5 rounded-full text-xs flex items-center justify-center ${
                            n <= s.level
                              ? "bg-black text-white"
                              : "bg-[#BDBDBD]"
                          }`}
                        >
                          {n}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PROFILES */}
        <div className="mb-8">
          <h3 className="font-semibold mb-3">Profiles</h3>

          <table className="w-full rounded-lg overflow-hidden">
            <thead className="bg-[#3F3F3F] text-white text-sm">
              <tr>
                <th className="text-left px-4 py-2">Profile name</th>
                <th className="text-left px-4 py-2">URL</th>
              </tr>
            </thead>
            <tbody>
              {profile.profiles.map((p, i) => (
                <tr key={i} className="bg-[#E5E5E5] border-t">
                  <td className="px-4 py-2 text-sm">{p.name}</td>
                  <td className="px-4 py-2 text-sm text-blue-600">
                    <a href={p.url} target="_blank" rel="noreferrer">
                      {p.url}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CV + EMAIL */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div>
            <label className="text-sm font-medium">CV</label>

            <div className="mt-2 flex h-[44px] rounded-lg overflow-hidden">
              {/* LEFT: CV NAME */}
              <div className="flex-1 bg-[#E5E5E5] px-4 flex items-center text-sm">
                {profile.cv?.name || "No CV uploaded"}
              </div>

              {/* RIGHT: DOWNLOAD BUTTON */}
              <button
                onClick={handleDownloadCv}
                disabled={!profile.cv || !(profile.cv instanceof File)}
                className="
        bg-[#8967B3]
        disabled:opacity-50
        text-white
        px-5
        text-sm
        flex items-center
        rounded-none
        rounded-r-lg
      "
              >
                Download
              </button>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Email</label>
            <div className="mt-2 bg-[#E5E5E5] rounded-lg h-[44px] px-3 flex items-center text-sm">
              {profile.email || "—"}
            </div>
          </div>
        </div>

        {/* PRINT */}
        <div className="flex justify-end">
          <button
            onClick={() => window.open("/freelancer/profile-print", "_blank")}
            className="bg-[#8967B3] text-white px-6 py-2 rounded-lg"
          >
            Print profile
          </button>
        </div>
      </section>
    </>
  );
}
