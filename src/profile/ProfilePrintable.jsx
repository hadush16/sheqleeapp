import { useEffect } from "react";
import logo from "../../src/assets/images/footerIcon.png";

export default function ProfilePrintable() {
  const profile = JSON.parse(localStorage.getItem("freelancerProfile") || "{}");

  useEffect(() => {
    setTimeout(() => {
      window.print();
    }, 300);
  }, []);

  if (!profile.fullName) return null;

  return (
    <div className="min-h-screen flex flex-col bg-white text-black print:bg-white">
      {/* CONTENT */}
      <main className="flex-1 px-10 py-12 ">
        {/* HEADER */}
        <div className="flex flex-col mb-6">
          {profile.avatar && (
            <img
              src={profile.avatar}
              alt="profile image on the printable profile page"
              className="w-20 h-20 rounded-full object-cover"
            />
          )}
          <div>
            <h1 className="text-[68px] text-[#000000] font-kantumruy font-semibold tracking-normal mt-[38px]">
              {profile.fullName}
            </h1>
            <p className="text-[#000000] text-[46px] font-kantumruy leadin-[30px] mt-[75px] tracking-normal">
              {profile.title}
            </p>
          </div>
        </div>

        {/* LINKS */}
        <div className="text-sm space-y-1 mb-6">
          {profile.profiles?.map((p, i) => (
            <p key={i}>
              <span className="font-kantumruy font-medium text[46px] tracking-normal ">
                {p.name}:
              </span>{" "}
              <span className="text-[#4285F4] leading[30px] text[46px] tracking-normal">
                {p.url}
              </span>
            </p>
          ))}
          {profile.email && (
            <p>
              <span className="font-medium">E-mail:</span>{" "}
              <span className="text-blue-600">{profile.email}</span>
            </p>
          )}
        </div>

        {/* SKILLS TABLE */}
        <div className="mb-8">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-gray-300">
              <tr>
                <th className="text-left px-4 py-2">Skill</th>
                <th className="text-left px-4 py-2">Proficiency</th>
              </tr>
            </thead>
            <tbody>
              {profile.skills?.map((s, i) => (
                <tr key={i} className="border-b">
                  <td className="px-4 py-2">{s.name}</td>
                  <td className="px-4 py-2">
                    {s.level === 5
                      ? "Senior"
                      : s.level === 4
                      ? "Lead"
                      : s.level === 3
                      ? "Middle"
                      : "Junior"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* SELF INTRODUCTION */}
        <div>
          <h2 className="font-semibold mb-2">Self Introduction</h2>
          <p className="text-sm text-gray-700 leading-relaxed">{profile.bio}</p>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-black text-white py-6 px-10 text-xs mt-16">
        <div className=" flex items-center justify-between pt-[45px]">
          <div className="flex flex-col gap-8">
            <img src={logo} alt="Sheqlee logo" className="w-[76px] h-[76px]" />
            <span className="text-xs text-gray-300">
              © {new Date().getFullYear()} Sheqlee Co. Ltd. All rights reserved.
            </span>
          </div>

          <div className="text-[38px] text-[#FFFFFF] font-kantumruy leading-[30px] tracking-0">
            Sheqlee — Your #1 place to find skilled professionals.
          </div>
        </div>
      </footer>

      {/* PRINT STYLES */}
      <style>
        {`
          @media print {
            body {
              margin: 0;
            }
            button {
              display: none;
            }
          }
        `}
      </style>
    </div>
  );
}
