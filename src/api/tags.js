import api from "./axios";

// Fetch all tags
export async function fetchTags() {
  const res = await api.get("/tags");
  return res.data.data.tags; // adjust if your backend response is different
}

// Fetch popular tags (top 6)
export async function fetchPopularTags(limit = 6) {
  const res = await api.get(`/tags`);
  const allTags = res.data.data.tags;

  // Sort by jobsCount + subscribersCount in descending order
  const popularTags = allTags
    .sort(
      (a, b) =>
        b.jobsCount + b.subscribersCount - (a.jobsCount + a.subscribersCount),
    )
    .slice(0, limit); // take top `limit`

  return popularTags;
}
