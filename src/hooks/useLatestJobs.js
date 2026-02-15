import { useQuery } from "@tanstack/react-query";
import { getLatestJobs } from "../services/jobs.service";

export function useLatestJobs() {
  return useQuery({
    queryKey: ["latest-jobs"],
    queryFn: getLatestJobs,
  });
}
