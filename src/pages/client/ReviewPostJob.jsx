import { useLocation, useNavigate } from "react-router-dom";
import template from "../../assets/icons/template.svg";
import IconAwesomeTags from "../../assets/icons/IconAwesomeTags.svg";

export default function ReviewPostJob() {
  const { state: form } = useLocation();
  const navigate = useNavigate();

  if (!form) {
    navigate("/post-job");
    return null;
  }

  return (
    <section className="px-4 sm:px-6 py-10 max-w-[900px] mx-auto">
      {/* INFO BOX */}
      <div className="flex items-stretch bg-[#F3F3F3] rounded-lg mb-10 overflow-hidden">
        <div className="bg-black w-[90px] flex items-center justify-center">
          <img src={template} className="w-6 h-6" />
        </div>
        <div className="p-[35px]">
          <p className="text-sm sm:text-[19px]">
            To speed up the process of posting a job, try using{" "}
            <span className="font-semibold border-b-4 border-[#8967B3]">
              job templates
            </span>
            .
          </p>
        </div>
      </div>

      {/* HEADER */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-[45px] font-semibold">
          Review & publish <span className="font-normal">[2/2]</span>
        </h1>
        <p className="text-[26px] mt-4">
          Review job details before publishing.
        </p>

        <div className="flex justify-center gap-6 mt-6">
          <button
            onClick={() => navigate("/post-job", { state: form })}
            className="h-[44px] px-8 rounded-lg border-2 border-[#8967B3]"
          >
            Edit
          </button>
          <button className="h-[44px] px-8 rounded-lg bg-[#8967B3] text-white">
            Publish job
          </button>
        </div>
      </div>

      <hr className="my-8" />

      {/* JOB TITLE */}
      <h2 className="text-center text-2xl font-semibold mb-4">{form.title}</h2>

      {/* META */}
      <div className="flex justify-center gap-4 text-sm mb-6">
        <span>{form.category}</span>
        <span>{form.jobType}</span>
        <span>{form.skillLevel}</span>
        <span>
          {form.salaryCurrency}
          {form.salaryAmount}/{form.salaryUnit}
        </span>
      </div>

      {/* BIG CONTENT BOX */}
      <div className="bg-[#F7F7F7] rounded-lg p-8 space-y-6">
        <section>
          <p>{form.shortDescription}</p>
        </section>

        <section>
          <h4 className="font-semibold mb-2">Qualifications</h4>
          <div dangerouslySetInnerHTML={{ __html: form.requirements }} />
        </section>

        <section>
          <h4 className="font-semibold mb-2">Experience</h4>
          <p>{form.shortDescription}</p>
        </section>

        <section>
          <h4 className="font-semibold mb-2">Skills & knowledge</h4>
          <div dangerouslySetInnerHTML={{ __html: form.requirements }} />
        </section>

        <section>
          <h4 className="font-semibold mb-2">Description</h4>
          <div dangerouslySetInnerHTML={{ __html: form.description }} />
        </section>
      </div>

      {/* SKILLS */}
      <div className="flex justify-center gap-2 mt-12 flex-wrap max-w-md mx-auto">
        <img
          src={IconAwesomeTags}
          alt="Tags"
          className="bg-black rounded-[4px] w-8 h-7 p-1"
        />
        {form.skills.split(",").map((skill, i) => (
          <span key={i} className="px-3 py-1 bg-[#E6E6E6] rounded text-sm">
            {skill.trim()}
          </span>
        ))}
      </div>

      <hr className="my-8" />

      {/* ACTIONS */}
      <div className="flex justify-center gap-6">
        <button
          onClick={() => navigate("/post-job", { state: form })}
          className="h-[44px] px-8 rounded-lg border-2 border-[#8967B3]"
        >
          Edit
        </button>
        <button className="h-[44px] px-8 rounded-lg bg-[#8967B3] text-white">
          Publish job
        </button>
      </div>
    </section>
  );
}
