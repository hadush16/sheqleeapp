// Fake jobs data (temporary)
const FAKE_JOBS = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Sheqlee",
    location: "Remote",
    type: "Full Time",
    price_per_hour: "$20/hr",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Tech Corp",
    location: "Addis Ababa",
    type: "Part Time",
    price_per_hour: "$15/hr",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Creative Studio",
    location: "Remote",
    type: "Contract",
    price_per_hour: "$18/hr",
  },
];

export const getJobsByTag = async ({ queryKey }) => {
  const [_key, tag] = queryKey;

  await new Promise((res) => setTimeout(res, 500));

  if (!tag) return FAKE_JOBS;

  return FAKE_JOBS.filter((job) =>
    job.title.toLowerCase().includes(tag.toLowerCase())
  );
};

// ✅ Single job (used by JobDetails page)
export const getJobById = async (id) => {
  await new Promise((res) => setTimeout(res, 300));

  return FAKE_JOBS.find((job) => job.id === Number(id));
};

// import { api } from "../lib/axios";

// /**
//  * Get jobs filtered by tag
//  * Example: /jobs?tag=React
//  */
// export const getJobsByTag = async ({ queryKey }) => {
//   const [_key, tag] = queryKey;

//   const res = tag ? await api.get(`/jobs?tag=${tag}`) : await api.get("/jobs");

//   return res.data;
// };

// /**
//  * Get latest jobs for homepage
//  * Example: /jobs/latest
//  */
// export async function getLatestJobs() {
//   const { data } = await api.get("/jobs/latest");
//   return data;
// }

// /**
//  * (Optional) Get single job details
//  * Example: /jobs/123
//  */
// export async function getJobById(id) {
//   const { data } = await api.get(`/jobs/${id}`);
//   return data;
// }
