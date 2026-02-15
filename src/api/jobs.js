import api from "./axios";

export async function fetchJobs() {
  const res = await api.get("/jobs");
  return res.data.data.jobs;
}
